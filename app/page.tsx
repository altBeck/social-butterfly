import Image from "next/image";
import { Header, HowItWorksSection, ServicesSection } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-[#f8f6f3]">
      <Header />
      <main className="flex flex-1 flex-col">
        <section className="relative z-10 overflow-visible bg-[#f8f6f3]">
          <div className="mx-auto flex w-full max-w-[1216px] flex-col px-5 pb-28 pt-8 sm:px-6 sm:pb-36 sm:pt-10 lg:pb-40 lg:pt-8">
            <div className="max-w-full lg:max-w-[66rem]">
              <h1 className="text-[3rem] leading-[1.125] tracking-[-0.06em] text-[#313230] sm:text-[4.5rem] md:text-[6rem] lg:text-[6.2rem]">
                let&apos;s turn your brand into the one people remember.
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-[1.45] tracking-[-0.03em] text-[#8a8078] sm:text-xl md:max-w-2xl md:text-[1.225rem]">
                We build the strategy, content, and social presence that makes
                growing brands the obvious choice. Discovered faster. Trusted
                sooner. Chosen over the competition.
              </p>

              <Link
                href="#services"
                className="brand-fix-cta group mt-8 inline-flex translate-x-[-7px] translate-y-[4px] rotate-[-3.5deg] items-center justify-center gap-[10px] rounded-full bg-[#6c58f4] px-[20px] py-[10px] text-center text-sm font-semibold uppercase tracking-[-0.03em] text-white shadow-[0_2px_3px_0_rgba(0,0,0,0.12)] transition-[transform,opacity,box-shadow] duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:translate-x-0 hover:translate-y-0 hover:rotate-0 hover:opacity-95 hover:shadow-[0_8px_18px_0_rgba(0,0,0,0.14)] focus-visible:translate-x-0 focus-visible:translate-y-0 focus-visible:rotate-0 focus-visible:opacity-95 focus-visible:shadow-[0_8px_18px_0_rgba(0,0,0,0.14)] focus-visible:outline-none active:scale-[0.985] motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:rotate-0 motion-reduce:transition-none sm:text-base"
              >
                <span>Let&apos;s fix your brand</span>
                <Image
                  src="/assets/arrow.svg"
                  alt=""
                  aria-hidden="true"
                  width={24}
                  height={24}
                  className="brand-fix-cta-arrow relative h-5 w-5 shrink-0 transition-transform duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5 motion-reduce:transition-none sm:h-6 sm:w-6"
                />
              </Link>
            </div>
          </div>
        </section>

        <ServicesSection />

        <HowItWorksSection />

        <section
          id="about"
          className="scroll-mt-8 bg-[#f3ede5] text-[#313230] sm:scroll-mt-10"
        >
          <div className="mx-auto flex w-full max-w-[1216px] flex-col gap-8 px-5 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-start lg:justify-between lg:gap-16 lg:py-24">
            <p className="max-w-[12rem] text-xs font-semibold uppercase tracking-[0.2em] text-[#8a8078]">
              About
            </p>
            <div className="max-w-3xl">
              <h2 className="text-[2.6rem] leading-[1.02] tracking-[-0.05em] sm:text-[3.75rem]">
                We turn scattered attention into a brand people recognize on
                sight.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-[1.55] tracking-[-0.03em] text-[#5f5751] sm:text-[1.18rem]">
                Social Butterfly builds the positioning, content systems, and
                day-to-day social rhythm that makes ambitious brands look
                unmistakably put together. The goal is simple: less guessing,
                more momentum, and a presence that feels impossible to ignore.
              </p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-8 bg-[#313230] text-[#f8f6f3] sm:scroll-mt-10"
        >
          <div className="mx-auto flex w-full max-w-[1216px] flex-col gap-8 px-5 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:py-24">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4ccc5]">
                Contact
              </p>
              <h2 className="mt-5 text-[2.6rem] leading-[1.02] tracking-[-0.05em] sm:text-[3.75rem]">
                Ready for a brand that lands the first time?
              </h2>
              <p className="mt-6 text-lg leading-[1.55] tracking-[-0.03em] text-[#d4ccc5] sm:text-[1.18rem]">
                Tell us what feels off, where the message is slipping, or why
                the social presence is not converting. We&apos;ll help you fix the
                signal.
              </p>
            </div>

            <Link
              href="mailto:hello@socialbutterfly.studio"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-[transform,background-color,border-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/8 focus-visible:-translate-y-0.5 focus-visible:border-white/35 focus-visible:bg-white/8 focus-visible:outline-none active:translate-y-0"
            >
              hello@socialbutterfly.studio
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
