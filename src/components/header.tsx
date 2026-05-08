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
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4 px-5 md:h-[4.25rem] md:px-10">
        <Link
          href={prefix}
          className={cn(
            "font-display text-xl tracking-[0.18em] md:text-2xl",
            scrolled ? "text-foreground" : "text-white drop-shadow-sm",
          )}
        >
          {brand}
        </Link>

        <nav
          className={cn(
            "hidden items-center gap-8 text-sm font-medium md:flex",
            scrolled ? "text-muted-foreground" : "text-white/85",
          )}
          aria-label="Primary"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "transition-colors",
                scrolled
                  ? "hover:text-primary"
                  : "hover:text-white",
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
              "rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors",
              scrolled
                ? "border-border/80 text-foreground hover:border-primary hover:text-primary"
                : "border-white/35 text-white hover:border-white/70 hover:bg-white/10",
            )}
            hrefLang={otherLocale === "he" ? "he" : "en"}
          >
            {otherLocale === "he" ? "עב" : "EN"}
          </Link>
        </div>
      </div>

      <nav
        className={cn(
          "flex justify-center gap-5 border-t px-4 py-2 text-xs font-medium md:hidden",
          scrolled
            ? "border-border/40 text-muted-foreground"
            : "border-white/15 text-white/85",
        )}
        aria-label="Primary mobile"
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={cn(
              "transition-colors",
              scrolled ? "hover:text-primary" : "hover:text-white",
            )}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
