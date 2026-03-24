"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type NavLink = {
  href: string;
  label: string;
};

type HeaderProps = {
  navLinks?: NavLink[];
  activeLabel?: string;
};

const defaultNavLinks: NavLink[] = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
  { href: "/insights", label: "Blog" },
];

const Header = ({ navLinks = defaultNavLinks, activeLabel }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#f8f6f3]">
      <div className="relative mx-auto max-w-screen-2xl px-5 py-5 sm:px-8 sm:py-6 lg:px-16 lg:py-7 xl:px-32">
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="Social Butterfly home"
            className="shrink-0 transition-opacity duration-150 hover:opacity-90"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src="/assets/sb-logo.svg"
              alt="Social Butterfly Logo"
              width={182}
              height={64}
              priority
              loading="eager"
              className="h-10 w-auto sm:h-12 lg:h-16"
            />
          </Link>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 items-center justify-center rounded-full transition-opacity duration-150 hover:opacity-80 md:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <Image
              src={isMobileMenuOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt=""
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </button>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center justify-end gap-8 text-base font-normal tracking-[-0.03em] text-[#363636] md:flex lg:gap-[4.25rem] lg:text-[1.05rem]"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={link.label === activeLabel ? "page" : undefined}
                className={`relative inline-flex min-h-11 items-center py-1 text-[#363636] transition-[color,transform] duration-150 after:absolute after:bottom-[0.15rem] after:left-0 after:h-[2px] after:w-full after:origin-left after:rounded-full after:bg-[#6c58f4] after:transition-transform after:duration-150 after:content-[''] hover:text-[#091D55] hover:after:scale-x-100 focus-visible:text-[#091D55] focus-visible:outline-none focus-visible:after:scale-x-100 active:scale-[0.98] ${
                  link.label === activeLabel
                    ? "text-[#091D55] after:scale-x-100"
                    : "after:scale-x-0"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className={`absolute left-5 right-5 top-full z-30 transition-[opacity,transform] duration-200 md:hidden sm:left-8 sm:right-8 ${
            isMobileMenuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <div className="mt-5 flex flex-col rounded-[1.75rem] border border-[#091D55]/6 bg-white/92 px-5 py-4 text-base tracking-[-0.03em] text-[#363636] shadow-[0_1px_2px_rgba(9,29,85,0.04),0_8px_18px_rgba(9,29,85,0.07),0_18px_30px_rgba(9,29,85,0.05)] backdrop-blur-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex min-h-11 items-center border-b border-[#091D55]/8 py-3 transition-[color,transform] duration-150 last:border-b-0 hover:text-[#091D55] focus-visible:text-[#091D55] focus-visible:outline-none active:scale-[0.98]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
