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
  const prefix = `/${locale}/`;
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
        </div>
      </div>
    </footer>
  );
}
