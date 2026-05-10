import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

import type { Dictionary } from "@/lib/i18n";
import {
  MAP_EMBED_URL,
  MAP_EXTERNAL_URL,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
} from "@/lib/site";

export function ContactSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="contact" className="scroll-mt-24 bg-background py-20 md:py-28">
      <div className="container px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-display text-3xl tracking-tight text-foreground md:text-4xl">
              {dict.contact.title}
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground md:text-lg">
              {dict.contact.lead}
            </p>

            <dl className="mt-10 space-y-8">
              <div className="flex gap-4">
                <dt className="sr-only">{dict.contact.phoneLabel}</dt>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 text-foreground ring-1 ring-white/15">
                  <Phone className="h-5 w-5" aria-hidden />
                </div>
                <dd>
                  <p className="text-sm font-medium text-muted-foreground">
                    {dict.contact.phoneLabel}
                  </p>
                  <Link
                    href={SITE_PHONE_TEL}
                    className="mt-1 block font-display text-xl text-foreground transition-colors hover:text-white"
                  >
                    {SITE_PHONE_DISPLAY}
                  </Link>
                </dd>
              </div>

              <div className="flex gap-4">
                <dt className="sr-only">{dict.contact.addressLabel}</dt>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground ring-1 ring-border">
                  <MapPin className="h-5 w-5" aria-hidden />
                </div>
                <dd>
                  <p className="text-sm font-medium text-muted-foreground">
                    {dict.contact.addressLabel}
                  </p>
                  <p className="mt-1 text-lg text-foreground">{dict.contact.address}</p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      {dict.contact.hoursLabel}:{" "}
                    </span>
                    {dict.contact.hours}
                  </p>
                </dd>
              </div>
            </dl>

            <p className="mt-10 text-xs leading-relaxed text-muted-foreground">
              {dict.contact.keywordsNote}
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border/70 shadow-xl">
            <div className="aspect-[4/3] w-full lg:aspect-auto lg:min-h-[420px]">
              <iframe
                title={dict.contact.mapTitle}
                src={MAP_EMBED_URL}
                className="h-full min-h-[320px] w-full border-0 lg:min-h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="border-t border-border/60 bg-card/40 px-4 py-3 text-center">
              <a
                href={MAP_EXTERNAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                {dict.contact.mapOpenExternal} — {dict.contact.address}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
