import { client } from "@/tina/__generated__/client";

type PostNode = NonNullable<
  NonNullable<
    Awaited<ReturnType<typeof client.queries.postConnection>>["data"]["postConnection"]["edges"]
  >[number]
>["node"];

export type PostSummary = {
  slug: string;
  title: string;
  subtitle?: string | null;
  excerpt?: string | null;
  author: string;
  authorImage?: string | null;
  date?: string | null;
  coverImage?: string | null;
  tags: string[];
};

export type EditorialBlock =
  {
    type: string;
    text: string;
    meta?: {
      level?: number;
    };
  };

export type FullPost = PostSummary & {
  content: EditorialBlock[];
};

type RawEditorialBlock = {
  type?: string | null;
  text?: string | null;
  meta?: {
    level?: number | null;
  } | null;
};

function normaliseContent(content: unknown): EditorialBlock[] {
  if (!Array.isArray(content)) {
    return [];
  }

  return content.flatMap((entry) => {
    const block = entry as RawEditorialBlock | null;

    const type = block?.type?.trim();
    const text = block?.text?.trim();

    if (!type || !text) {
      return [];
    }

    switch (type) {
      case "paragraph":
      case "emphasis":
      case "heading":
      case "quote":
        return [
          {
            type,
            text,
            meta:
              typeof block.meta?.level === "number"
                ? { level: block.meta.level }
                : undefined,
          },
        ];

      default:
        return [];
    }
  });
}

function normalisePost(node: PostNode): FullPost {
  return {
    slug: node._sys.filename,
    title: node.title,
    subtitle: node.subtitle,
    excerpt: node.excerpt,
    author: node.author,
    authorImage: node.authorImage,
    date: node.date,
    coverImage: node.coverImage,
    tags: node.tags?.filter(Boolean) ?? [],
    content: normaliseContent(node.content ?? []),
  };
}

function byNewest(a: PostSummary, b: PostSummary) {
  return new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime();
}

export function formatPostDate(date?: string | null) {
  if (!date) {
    return "";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export async function getAllPosts() {
  const result = await client.queries.postConnection();
  const posts =
    result.data.postConnection.edges
      ?.map((edge) => edge?.node)
      .filter((node): node is PostNode => Boolean(node))
      .map(normalisePost)
      .sort(byNewest) ?? [];

  return posts;
}

export async function getPostBySlug(slug: string) {
  const extensions = ["mdx", "md"];

  for (const extension of extensions) {
    try {
      const result = await client.queries.post({
        relativePath: `${slug}.${extension}`,
      });

      return normalisePost(result.data.post);
    } catch {
      continue;
    }
  }

  return null;
}

export function getRelatedPosts(
  posts: PostSummary[],
  currentSlug: string,
  currentTags: string[],
  limit = 3,
) {
  const tags = new Set(currentTags.map((tag) => tag.toLowerCase()));

  return posts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      const overlap = post.tags.reduce((score, tag) => {
        return score + (tags.has(tag.toLowerCase()) ? 1 : 0);
      }, 0);

      return { post, overlap };
    })
    .sort((a, b) => {
      if (b.overlap !== a.overlap) {
        return b.overlap - a.overlap;
      }

      return byNewest(a.post, b.post);
    })
    .slice(0, limit)
    .map(({ post }) => post);
}
