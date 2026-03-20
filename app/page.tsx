import Image from "next/image";
import { Header, ServicesSection } from "@/components";
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
                className="mt-8 inline-flex items-center justify-center gap-[10px] rounded-full bg-[#6c58f4] px-[20px] py-[10px] text-center text-sm font-semibold uppercase tracking-[-0.03em] text-white shadow-[0_2px_3px_0_rgba(0,0,0,0.12)] transition-transform duration-150 hover:translate-y-px hover:opacity-95 active:scale-[0.99] sm:text-base"
              >
                <span>Let&apos;s fix your brand</span>
                <Image
                  src="/assets/arrow.svg"
                  alt=""
                  aria-hidden="true"
                  width={24}
                  height={24}
                  className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
                />
              </Link>
            </div>
          </div>

          <Image
            src="/assets/sb-blue-01.png"
            alt="butterfly"
            aria-hidden="true"
            width={156}
            height={122}
            className="butterfly-float pointer-events-none absolute right-[7%] top-[50%] hidden h-auto w-[10.5rem] drop-shadow-[0_10px_14px_rgba(0,0,0,0.16)] md:block lg:w-[12.5rem]"
          />
          <Image
            src="/assets/sb-light-01.png"
            alt="butterfly"
            aria-hidden="true"
            width={152}
            height={119}
            className="butterfly-hover absolute bottom-[-4.25rem] left-[10%] z-10 h-auto w-[10.5rem] drop-shadow-[0_10px_14px_rgba(0,0,0,0.16)] sm:bottom-[-5rem] sm:w-[12rem] lg:bottom-[-6.25rem] lg:w-[12.5rem]"
          />
          <Image
            src="/assets/sb-purple-01.png"
            alt="butterfly"
            aria-hidden="true"
            width={155}
            height={121}
            className="butterfly-hover absolute bottom-[-4rem] right-[6%] z-10 h-auto w-[10.5rem] drop-shadow-[0_10px_14px_rgba(0,0,0,0.2)] sm:bottom-[-4.75rem] sm:w-[12rem] lg:bottom-[-6rem] lg:w-[12.5rem]"
          />
        </section>

        <ServicesSection />
      </main>
    </div>
  );
}
