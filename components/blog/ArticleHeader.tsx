import Image from "next/image";

import AuthorBlock from "./AuthorBlock";

type ArticleHeaderProps = {
  title: string;
  subtitle?: string | null;
  author: string;
  authorImage?: string | null;
  date?: string | null;
  coverImage?: string | null;
};

export default function ArticleHeader({
  title,
  subtitle,
  author,
  authorImage,
  date,
  coverImage,
}: ArticleHeaderProps) {
  return (
    <header className="mx-auto w-full max-w-[1216px] px-5 pb-10 pt-8 sm:px-6 lg:px-16 lg:pb-14 lg:pt-10 xl:px-24">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-[3.3rem] leading-[0.98] tracking-[-0.07em] text-[#313230] sm:text-[4.6rem] lg:text-[6.25rem]">
          {title}
        </h1>

        {subtitle ? (
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-[1.45] tracking-[-0.04em] text-[#8a8078] sm:text-[1.9rem]">
            {subtitle}
          </p>
        ) : null}

        <div className="mt-8 flex justify-center">
          <AuthorBlock
            author={author}
            authorImage={authorImage}
            date={date}
          />
        </div>
      </div>

      {coverImage ? (
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative overflow-hidden rounded-[1.6rem] bg-[#e7e0d7]">
            <Image
              src={coverImage}
              alt={title}
              width={1200}
              height={960}
              sizes="(min-width: 1024px) 768px, 100vw"
              className="aspect-[5/4] w-full object-cover"
            />
          </div>
        </div>
      ) : null}
    </header>
  );
}
