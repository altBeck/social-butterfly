import type { EditorialBlock } from "@/app/insights/_lib";

import PullQuote from "./PullQuote";

type ArticleBodyProps = {
  body: EditorialBlock[] | null | undefined;
};

export default function ArticleBody({ body }: ArticleBodyProps) {
  if (!body || body.length === 0) {
    return null;
  }

  return (
    <div className="mx-auto w-full max-w-[1216px] px-5 sm:px-6 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-3xl text-[1.24rem] leading-[1.65] tracking-[-0.03em] text-[#8a8078]">
        {body.map((block, index) => {
          const text = block.text?.trim();

          if (!text) {
            return null;
          }

          switch (block.type) {
            case "paragraph":
              return (
                <p
                  key={`paragraph-${index}`}
                  className="mt-8 first:mt-0 text-[1.24rem] leading-[1.65] tracking-[-0.03em] text-[#8a8078]"
                >
                  {text}
                </p>
              );

            case "emphasis":
              return (
                <p
                  key={`emphasis-${index}`}
                  className="mt-8 first:mt-0 text-[1.45rem] leading-[1.6] tracking-[-0.035em] text-[#6f655e]"
                >
                  {text}
                </p>
              );

            case "heading":
              return (
                <h2
                  key={`heading-${index}`}
                  className="mt-16 text-[2.2rem] font-semibold leading-[1.06] tracking-[-0.06em] text-[#313230] sm:text-[2.8rem]"
                >
                  {text}
                </h2>
              );

            case "quote":
              return <PullQuote key={`quote-${index}`}>{text}</PullQuote>;

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}
