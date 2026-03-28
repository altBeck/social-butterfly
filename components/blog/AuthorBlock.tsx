"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { formatPostDate } from "@/lib/blog";

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
  const [showCopiedModal, setShowCopiedModal] = useState(false);
  const imageSize = compact ? "h-[88px] w-[88px]" : "h-14 w-14";

  useEffect(() => {
    if (!showCopiedModal) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setShowCopiedModal(false);
    }, 2200);

    return () => window.clearTimeout(timeoutId);
  }, [showCopiedModal]);

  async function handleShare() {
    if (!shareUrl) {
      return;
    }

    const articleUrl = new URL(shareUrl, window.location.origin).toString();

    try {
      await navigator.clipboard.writeText(articleUrl);
      setShowCopiedModal(true);
    } catch {
      window.prompt("Copy this article link:", articleUrl);
    }
  }

  return (
    <>
      <div
        className={`flex items-center justify-between gap-4 rounded-[1.6rem] ${
          compact ? "bg-[#d9d5cf] px-10 py-10 sm:px-12" : ""
        }`}
      >
        <div className={`flex items-center ${compact ? "gap-6" : "gap-4"}`}>
          <div
            className={`${imageSize} relative overflow-hidden rounded-full border border-[rgba(0,0,0,0.15)] bg-[#d9d1c8]`}
          >
            {authorImage ? (
              <Image
                src={authorImage}
                alt={author}
                fill
                sizes={compact ? "88px" : "56px"}
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
            <p
              className={`tracking-[-0.03em] text-[#313230] ${
                compact
                  ? "text-[1.35rem] font-medium sm:text-[1.45rem]"
                  : "text-[1.05rem] font-semibold"
              }`}
            >
              {compact ? `Written By ${author}` : author}
            </p>
            {date ? (
              <p
                className={`tracking-[-0.03em] text-[#8a8078] ${
                  compact
                    ? "text-[1.1rem] sm:text-[1.18rem]"
                    : "text-sm sm:text-base"
                }`}
              >
                {formatPostDate(date)}
              </p>
            ) : null}
          </div>
        </div>

        {compact && shareUrl ? (
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex min-h-11 items-center gap-3 rounded-full px-2 py-2 text-[1.35rem] font-medium tracking-[-0.03em] text-[#313230] transition-colors duration-150 hover:text-[#6c58f4] focus-visible:outline-none focus-visible:text-[#6c58f4] sm:text-[1.45rem]"
          >
            Share
            <Image
              src="/assets/share.svg"
              alt=""
              aria-hidden="true"
              width={28}
              height={28}
              className="h-7 w-7"
            />
          </button>
        ) : null}
      </div>

      {showCopiedModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/18 px-5">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="copy-confirmation-title"
            className="w-full max-w-sm rounded-[1.6rem] bg-[#f8f6f3] px-6 py-6 text-center shadow-[0_18px_40px_rgba(0,0,0,0.12)]"
          >
            <p
              id="copy-confirmation-title"
              className="text-[1.15rem] font-medium tracking-[-0.03em] text-[#313230]"
            >
              Article link copied
            </p>
            <p className="mt-2 text-sm tracking-[-0.03em] text-[#8a8078]">
              The article link is now on your clipboard.
            </p>
            <button
              type="button"
              onClick={() => setShowCopiedModal(false)}
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[#313230] px-5 py-2 text-sm font-medium tracking-[-0.03em] text-white transition-opacity duration-150 hover:opacity-90 focus-visible:outline-none focus-visible:opacity-90"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
