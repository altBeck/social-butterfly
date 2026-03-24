import Image from "next/image";
import Link from "next/link";

import { formatPostDate } from "@/app/insights/_lib";

type AuthorBlockProps = {
  author: string;
  authorImage?: string | null;
  date?: string | null;
  compact?: boolean;
  shareUrl?: string;
};

export default function AuthorBlock({
  author,
  authorImage,
  date,
  compact = false,
  shareUrl,
}: AuthorBlockProps) {
  const imageSize = compact ? "h-12 w-12" : "h-14 w-14";

  return (
    <div
      className={`flex items-center justify-between gap-4 rounded-[1.6rem] ${
        compact ? "bg-[#eeebe5] px-5 py-4" : ""
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`${imageSize} relative overflow-hidden rounded-full bg-[#d9d1c8] ring-1 ring-[#313230]/6`}
        >
          {authorImage ? (
            <Image
              src={authorImage}
              alt={author}
              fill
              sizes={compact ? "48px" : "56px"}
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[#6c58f4] text-sm font-semibold uppercase tracking-[0.08em] text-white">
              {author
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2)}
            </div>
          )}
        </div>

        <div className="min-w-0">
          <p className="text-[1.05rem] font-semibold tracking-[-0.03em] text-[#313230]">
            {compact ? `Written By ${author}` : author}
          </p>
          {date ? (
            <p className="text-sm tracking-[-0.03em] text-[#8a8078] sm:text-base">
              {formatPostDate(date)}
            </p>
          ) : null}
        </div>
      </div>

      {compact && shareUrl ? (
        <Link
          href={shareUrl}
          className="inline-flex min-h-11 items-center rounded-full px-4 py-2 text-base font-medium tracking-[-0.03em] text-[#313230] transition-colors duration-150 hover:text-[#6c58f4] focus-visible:outline-none focus-visible:text-[#6c58f4]"
        >
          Share
        </Link>
      ) : null}
    </div>
  );
}
