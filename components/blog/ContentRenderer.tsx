import type { EditorialBlock } from "@/app/insights/_lib";

type ContentRendererProps = {
  content: EditorialBlock[] | null | undefined;
};

export default function ContentRenderer({ content }: ContentRendererProps) {
  if (!content || content.length === 0) {
    return null;
  }

  return (
    <div>
      {content.map((block, i) => {
        const prev = content[i - 1];
        const text = block.text?.trim();

        if (!text) {
          return null;
        }

        const paragraphSpacing =
          prev?.type === "paragraph" || prev?.type === "emphasis"
            ? "mt-5"
            : "mt-8";
        const headingSpacing = prev ? "mt-14" : "mt-0";
        const emphasisSpacing = prev?.type === "heading" ? "mt-5" : "mt-8";
        const quoteSpacing = "my-12";

        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={i}
                className={`${paragraphSpacing} text-lg leading-relaxed`}
              >
                {text}
              </p>
            );

          case "emphasis":
            return (
              <p
                key={i}
                className={`${emphasisSpacing} text-xl font-medium leading-relaxed`}
              >
                {text}
              </p>
            );

          case "heading": {
            const level = block.meta?.level ?? 2;
            const HeadingTag =
              level <= 2 ? "h2" : level === 3 ? "h3" : "h4";

            return (
              <HeadingTag
                key={i}
                className={`${headingSpacing} font-serif text-2xl`}
              >
                {text}
              </HeadingTag>
            );
          }

          case "quote":
            return (
              <blockquote
                key={i}
                className={`${quoteSpacing} border-l-4 pl-6 text-xl italic`}
              >
                {text}
              </blockquote>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
