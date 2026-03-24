import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Header } from "@/components";
import { formatPostDate, getAllPosts } from "./_lib";

export const metadata: Metadata = {
  title: "Insights | Social Butterfly",
  description: "Brand, content, and growth insights from Social Butterfly.",
};

export default async function InsightsPage() {
  const posts = await getAllPosts();

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

      <main className="mx-auto flex w-full max-w-[1216px] flex-1 flex-col px-5 pb-24 pt-10 sm:px-6 lg:px-16 xl:px-24">
        <section className="max-w-4xl pb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a8078]">
            Insights
          </p>
          <h1 className="mt-5 text-[3.4rem] leading-[1] tracking-[-0.07em] text-[#313230] sm:text-[4.6rem] lg:text-[6rem]">
            Thoughts on building a brand people remember.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-[1.55] tracking-[-0.03em] text-[#8a8078] sm:text-[1.18rem]">
            Strategy, positioning, and content systems for brands that want
            more than surface-level visibility.
          </p>
        </section>

        <section aria-label="Blog posts">
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link
                  href={`/insights/${post.slug}`}
                  className="block"
                >
                  <div className="overflow-hidden rounded-[1.6rem] bg-[#e7e0d7]">
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
                    {post.date ? (
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a8078]">
                        {formatPostDate(post.date)}
                      </p>
                    ) : null}

                    <h2 className="mt-3 text-[2rem] leading-[1.04] tracking-[-0.05em] text-[#313230]">
                      {post.title}
                    </h2>

                    {post.excerpt ? (
                      <p className="mt-3 text-base leading-[1.6] tracking-[-0.03em] text-[#8a8078]">
                        {post.excerpt}
                      </p>
                    ) : null}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
