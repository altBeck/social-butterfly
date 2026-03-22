import type { CSSProperties } from "react";

const services = [
  { label: "Content Creation", hoverColor: "#6250F0" },
  { label: "Social Media", hoverColor: "#D9E73C" },
  { label: "Community Marketing", hoverColor: "#D2E0ED" },
  { label: "Storytelling", hoverColor: "#E1C8FF" },
];

const packages = [
  {
    name: "Starter",
    description:
      "For brands who need clarity before they create anything from brand positioning, messaging framework and more.",
  },
  {
    name: "Growth",
    description:
      "For brands who need consistent, strategic content that builds something real from SEO optimisation, founder-led storytelling, community engagement and more",
  },
  {
    name: "Full-Flight",
    description:
      "For brands who want a full marketing team without the overhead from multi-channel campaigns, monthly strategy sessions, dedicated support and more",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="w-full bg-[#122766] text-[#f7f4ee]">
      <div className="mx-auto flex w-full max-w-[1216px] flex-col px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-lg leading-8 tracking-[-0.03em] text-[#f7f4ee] sm:text-[1.75rem] sm:leading-[1.35]">
            At Social Butterfly, we transform the way your brand moves
            through the market from invisible to inevitable.
          </p>
        </div>

        <div className="mt-8 h-px w-full bg-white/20 sm:mt-10" />

        <div className="mt-10 flex flex-col gap-2 sm:mt-14">
          {services.map((service) => (
            <p
              key={service.label}
              className="font-sans cursor-default text-[2.75rem] leading-[0.95] tracking-[-0.05em] text-[#f7f4ee] transition-[color,transform,font-style] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-1 hover:italic hover:text-[var(--service-hover-color)] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.25rem]"
              style={
                {
                  "--service-hover-color": service.hoverColor,
                } as CSSProperties
              }
            >
              {service.label}
            </p>
          ))}
        </div>

        <div className="mt-16 h-px w-full bg-white/20 sm:mt-20" />

        <div className="mt-12 sm:mt-16">
          <h2 className="text-[3.25rem] leading-[0.95] tracking-[-0.05em] text-[#f7f4ee] sm:text-[4.5rem]">
            Packages
          </h2>

          <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.name}
                className="flex min-h-[20rem] flex-col rounded-xl border border-[#091D55]/8 bg-[#f8f6f3] px-7 py-10 text-center text-[#313230] shadow-[0_8px_24px_rgba(9,29,85,0.08)]"
              >
                <h3 className="font-heading text-[2rem] leading-none tracking-[-0.04em] text-[#313230]">
                  {pkg.name}
                </h3>
                <p className="mt-10 text-[1.05rem] leading-[1.6] tracking-[-0.03em] text-[#8a8078]">
                  {pkg.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
