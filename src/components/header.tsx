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

  const prefix = `/${locale}`;
  const otherLocale: Locale = locale === "he" ? "en" : "he";

  const links = [
    { href: `${prefix}#services`, label: nav.services },
    { href: `${prefix}#gallery`, label: nav.gallery },
    { href: `${prefix}#contact`, label: nav.contact },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4 px-5 md:h-[4.25rem] md:px-10">
        <Link
          href={prefix}
          className="font-display text-xl tracking-[0.18em] text-foreground md:text-2xl"
        >
          {brand}
        </Link>

        <nav
          className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex"
          aria-label="Primary"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={`/${otherLocale}`}
            className="rounded-full border border-border/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
            hrefLang={otherLocale === "he" ? "he" : "en"}
          >
            {otherLocale === "he" ? "עב" : "EN"}
          </Link>
        </div>
      </div>

      <nav
        className="flex justify-center gap-5 border-t border-border/40 px-4 py-2 text-xs font-medium text-muted-foreground md:hidden"
        aria-label="Primary mobile"
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="transition-colors hover:text-primary"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
