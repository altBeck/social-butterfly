import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Header } from "@/components";
import ArticleHeader from "@/components/blog/ArticleHeader";
import AuthorBlock from "@/components/blog/AuthorBlock";
import ContentRenderer from "@/components/blog/ContentRenderer";
import RelatedPosts from "@/components/blog/RelatedPosts";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/app/insights/_lib";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Insight Not Found",
    };
  }

  return {
    title: `${post.title} | Social Butterfly`,
    description: post.excerpt ?? post.subtitle ?? undefined,
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const [post, posts] = await Promise.all([getPostBySlug(slug), getAllPosts()]);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(posts, post.slug, post.tags);
  const shareUrl = `/insights/${post.slug}`;

  return (
    <div className="flex min-h-full flex-col bg-[#f8f6f3]">
      <Header
        activeLabel="Blog"
        navLinks={[
          { href: "/#services", label: "Services" },
          { href: "/#about", label: "About" },
          { href: "/#contact", label: "Contact" },
          { href: "/insights", label: "Blog" },
        ]}
      />

      <main className="flex-1 pb-20">
        <ArticleHeader
          title={post.title}
          subtitle={post.subtitle}
          author={post.author}
          authorImage={post.authorImage}
          date={post.date}
          coverImage={post.coverImage}
        />

        <div className="mx-auto w-full max-w-[1216px] px-5 sm:px-6 lg:px-16 xl:px-24">
          <div className="mx-auto max-w-3xl text-[1.24rem] leading-[1.65] tracking-[-0.03em] text-[#8a8078]">
            <ContentRenderer content={post.content ?? []} />
          </div>
        </div>

        <section className="mx-auto w-full max-w-[1216px] px-5 py-16 sm:px-6 lg:px-16 xl:px-24">
          <div className="mx-auto max-w-3xl">
            <AuthorBlock
              author={post.author}
              authorImage={post.authorImage}
              date={post.date}
              compact
              shareUrl={shareUrl}
            />
          </div>
        </section>

        <RelatedPosts posts={relatedPosts} />

        <section className="bg-[#313230] text-[#f8f6f3]">
          <div className="mx-auto flex w-full max-w-[1216px] flex-col gap-8 px-5 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:px-16 lg:py-24 xl:px-24">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4ccc5]">
                Contact
              </p>
              <h2 className="mt-5 text-[2.8rem] leading-[1.02] tracking-[-0.05em] text-[#f8f6f3] sm:text-[3.75rem]">
                Ready for a brand that lands the first time?
              </h2>
              <p className="mt-6 text-lg leading-[1.55] tracking-[-0.03em] text-[#d4ccc5] sm:text-[1.18rem]">
                Tell us what feels off, where the message is slipping, or why
                the social presence is not converting. We&apos;ll help you fix the
                signal.
              </p>
            </div>

            <Link
              href="mailto:hello@socialbutterfly.studio"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-[transform,background-color,border-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/8 focus-visible:-translate-y-0.5 focus-visible:border-white/35 focus-visible:bg-white/8 focus-visible:outline-none active:translate-y-0"
            >
              hello@socialbutterfly.studio
            </Link>
          </div>
        </section>

        <footer className="bg-[#18161d] text-white">
          <div className="mx-auto flex w-full max-w-[1216px] flex-col gap-12 px-5 py-16 sm:px-6 lg:px-16 xl:px-24">
            <div className="flex flex-wrap gap-10 text-[1.7rem] font-semibold tracking-[-0.05em] text-white">
              <Link href="https://instagram.com" className="hover:text-[#d4ccc5]">
                Instagram
              </Link>
              <Link href="https://linkedin.com" className="hover:text-[#d4ccc5]">
                LinkedIn
              </Link>
            </div>

            <div className="max-w-4xl">
              <p className="text-[3rem] leading-[1.02] tracking-[-0.06em] text-[#f8f6f3] sm:text-[4.4rem]">
                The best relationships start with a conversation.
              </p>
              <Link
                href="mailto:hello@socialbutterfly.studio"
                className="mt-8 inline-flex min-h-14 items-center rounded-full bg-white px-6 py-3 text-base font-medium tracking-[-0.03em] text-[#18161d] transition-opacity duration-150 hover:opacity-90 focus-visible:outline-none focus-visible:opacity-90"
              >
                HELLO@SOCIALBUTTERFLYSTUDIO.COM
              </Link>
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#d4ccc5]">
              Social Butterfly Studio
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
