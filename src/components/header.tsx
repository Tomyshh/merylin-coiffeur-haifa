"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";

type NavCopy = {
  services: string;
  gallery: string;
  contact: string;
};

export function Header({
  locale,
  brand,
  nav,
}: {
  locale: Locale;
  brand: string;
  nav: NavCopy;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const prefix = `/${locale}/`;
  const otherLocale: Locale = locale === "he" ? "en" : "he";

  const links = [
    { href: `${prefix}#services`, label: nav.services },
    { href: `${prefix}#gallery`, label: nav.gallery },
    { href: `${prefix}#contact`, label: nav.contact },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-300",
        /* Safe area : évite le « crop » sous encoche / Dynamic Island */
        "pt-[env(safe-area-inset-top,0px)]",
        scrolled
          ? "border-b-0 bg-background/92 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.45)] backdrop-blur-xl supports-[backdrop-filter]:bg-background/80"
          : "border-b-0 bg-gradient-to-b from-black/55 via-black/25 to-transparent supports-[backdrop-filter]:from-black/40 supports-[backdrop-filter]:via-black/15",
      )}
    >
      <div className="container flex min-h-14 items-center justify-between gap-4 px-5 py-2.5 md:min-h-[3.5rem] md:px-10 md:py-3">
        <Link
          href={prefix}
          className={cn(
            "font-display text-lg tracking-[0.14em] md:text-xl",
            scrolled ? "text-foreground" : "text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]",
          )}
        >
          {brand}
        </Link>

        <nav
          className={cn(
            "hidden items-center gap-7 text-[13px] font-medium tracking-wide md:flex",
            "[font-family:var(--font-outfit),var(--font-dm-sans),sans-serif]",
            scrolled ? "text-muted-foreground" : "text-white/90",
          )}
          aria-label="Primary"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "transition-colors",
                scrolled ? "hover:text-primary" : "hover:text-amber-100",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={`/${otherLocale}/`}
            className={cn(
              "rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider transition-colors [font-family:var(--font-outfit),sans-serif]",
              scrolled
                ? "border-border/80 text-foreground hover:border-primary hover:text-primary"
                : "border-white/35 bg-black/15 text-white backdrop-blur-sm hover:border-white/55 hover:bg-white/10",
            )}
            hrefLang={otherLocale === "he" ? "he" : "en"}
          >
            {otherLocale === "he" ? "עב" : "EN"}
          </Link>
        </div>
      </div>

      <nav
        className={cn(
          "flex justify-center gap-6 border-t border-white/[0.05] px-4 py-2.5 text-[11px] font-medium md:hidden [font-family:var(--font-outfit),sans-serif]",
          scrolled ? "border-border/40 text-muted-foreground" : "text-white/85",
        )}
        aria-label="Primary mobile"
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={cn(
              "transition-colors",
              scrolled ? "hover:text-primary" : "hover:text-amber-100",
            )}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
