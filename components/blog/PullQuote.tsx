import type { ReactNode } from "react";

type PullQuoteProps = {
  children: ReactNode;
};

export default function PullQuote({ children }: PullQuoteProps) {
  return (
    <blockquote className="my-12 border-l-2 border-[#6c58f4] pl-6 text-[1.6rem] leading-[1.28] tracking-[-0.04em] text-[#313230] sm:text-[2rem]">
      {children}
    </blockquote>
  );
}
