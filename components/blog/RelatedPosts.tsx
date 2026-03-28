import Image from "next/image";
import Link from "next/link";

import { type PostSummary } from "@/app/insights/_lib";
import { formatPostDate } from "@/lib/blog";

type RelatedPostsProps = {
  posts: PostSummary[];
};

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto w-full max-w-[1216px] px-5 py-20 sm:px-6 lg:px-16 xl:px-24">
      <h2 className="text-[2.25rem] font-semibold leading-none tracking-[-0.06em] text-[#313230]">
        Explore more articles
      </h2>

      <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug}>
            <Link
              href={`/insights/${post.slug}`}
              className="group block"
            >
              <div className="overflow-hidden rounded-[1.45rem] bg-[#e7e0d7]">
                {post.coverImage ? (
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    width={1200}
                    height={900}
                    sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="aspect-[4/3] w-full bg-[linear-gradient(135deg,#6c58f4_0%,#091D55_100%)]" />
                )}
              </div>

              <div className="mt-5">
                <h3 className="text-[2rem] leading-[1.04] tracking-[-0.05em] text-[#313230]">
                  {post.title}
                </h3>
                {post.excerpt ? (
                  <p className="mt-3 text-base leading-[1.55] tracking-[-0.03em] text-[#8a8078]">
                    {post.excerpt}
                  </p>
                ) : null}
                {post.date ? (
                  <p className="mt-4 text-sm uppercase tracking-[0.14em] text-[#8a8078]">
                    {formatPostDate(post.date)}
                  </p>
                ) : null}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
