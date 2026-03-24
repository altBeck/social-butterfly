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
          switch (block._template) {
            case "lead":
              return block.text ? (
                <p
                  key={`lead-${index}`}
                  className="mt-8 first:mt-0 text-[1.45rem] leading-[1.6] tracking-[-0.035em] text-[#6f655e]"
                >
                  {block.text}
                </p>
              ) : null;

            case "paragraph":
              return block.text ? (
                <p
                  key={`paragraph-${index}`}
                  className="mt-8 first:mt-0 text-[1.24rem] leading-[1.65] tracking-[-0.03em] text-[#8a8078]"
                >
                  {block.text}
                </p>
              ) : null;

            case "heading":
              return block.text ? (
                <h2
                  key={`heading-${index}`}
                  className="mt-16 text-[2.2rem] font-semibold leading-[1.06] tracking-[-0.06em] text-[#313230] sm:text-[2.8rem]"
                >
                  {block.text}
                </h2>
              ) : null;

            case "quote":
              return block.text ? (
                <PullQuote key={`quote-${index}`}>{block.text}</PullQuote>
              ) : null;

            case "list":
              return block.items && block.items.length > 0 ? (
                <ul
                  key={`list-${index}`}
                  className="mt-8 space-y-2 text-[1.24rem] leading-[1.55] tracking-[-0.03em] text-[#8a8078]"
                >
                  {block.items.map((item, itemIndex) =>
                    item ? <li key={`${index}-${itemIndex}`}>{item}</li> : null,
                  )}
                </ul>
              ) : null;

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}
