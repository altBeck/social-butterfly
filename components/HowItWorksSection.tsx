"use client";

import Image from "next/image";
import { useState } from "react";

const steps = [
  {
    title: "Discovery Call",
    content:
      "30 minutes. No pitch, no pressure. We talk about your business, what's not working, and where you want to go. If we're the right fit, we move forward. If we're not, we'll tell you honestly. The more you share, the better.",
  },
  {
    title: "Strategy & Positioning",
    content:
      "Before anything is created, we map your market position, messaging, and ideal customer. This document drives everything that comes after. Nothing moves until it's right.",
  },
  {
    title: "Content System Build",
    content:
      "We design your content architecture — what platforms, what formats, what cadence. Every channel gets a purpose. Then we build the workflows that make execution effortless on your end.",
  },
];

const HowItWorksSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-[#D2E0ED] text-[#5A4335]">
      <div className="mx-auto flex w-full max-w-[692px] flex-col px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
        <h2 className="text-center text-[3rem] leading-[0.9] tracking-[-0.07em] sm:text-[5.5rem] lg:text-[6.25rem]">
          How it works
        </h2>

        <div className="mt-8 sm:mt-10">
          {steps.map((step, index) => {
            const isOpen = openIndex === index;
            const isLast = index === steps.length - 1;

            return (
              <div
                key={step.title}
                className={isLast ? "" : "border-b border-[#5A4335]/38"}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 py-4 text-center text-[1.15rem] uppercase tracking-[0.16em] text-[#5A4335] transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-[#433226] focus-visible:text-[#433226] focus-visible:outline-none sm:text-[1.3rem]"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="flex-1 text-center">{step.title}</span>
                  <Image
                    src="/assets/down.svg"
                    alt=""
                    aria-hidden="true"
                    width={20}
                    height={20}
                    className={`shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid overflow-hidden transition-[grid-template-rows,opacity,padding] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen
                      ? "grid-rows-[1fr] pb-5 opacity-100"
                      : "grid-rows-[0fr] pb-0 opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="max-w-[40rem] text-left text-[1.05rem] leading-[1.65] tracking-[-0.03em] text-[#5A4335]/80 sm:text-[1.12rem]">
                      {step.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
