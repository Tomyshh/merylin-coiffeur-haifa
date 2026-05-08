import Link from "next/link";

import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

export function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const prefix = `/${locale}`;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-card/30 py-12">
      <div className="container flex flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="font-display text-xl tracking-[0.2em]">{dict.brand}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            © {year} {dict.brand}. {dict.footer.rights}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <Link href={`${prefix}#services`} className="hover:text-primary">
            {dict.nav.services}
          </Link>
          <Link href={`${prefix}#gallery`} className="hover:text-primary">
            {dict.nav.gallery}
          </Link>
          <Link href={`${prefix}#contact`} className="hover:text-primary">
            {dict.nav.contact}
          </Link>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-primary"
            aria-label={dict.footer.follow}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span className="hidden sm:inline">{dict.footer.follow}</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
