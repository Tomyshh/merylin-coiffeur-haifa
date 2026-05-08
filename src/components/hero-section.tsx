import Image from "next/image";

import { Hero } from "@/components/ui/hero";
import type { Dictionary } from "@/lib/i18n";
import { HERO_IMAGE, SITE_PHONE_TEL, SITE_WHATSAPP_URL } from "@/lib/site";

export function HeroSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative isolate min-h-[85vh] w-full overflow-hidden pt-16 md:pt-0">
      <Image
        src={HERO_IMAGE}
        alt={dict.hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(var(--background))_78%)] opacity-90"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-background" />

      <Hero
        className="relative min-h-[calc(85vh-4rem)] bg-transparent md:min-h-[85vh]"
        title={
          <span className="block">
            <span className="block text-primary">{dict.hero.title}</span>
            <span className="mt-3 block font-display text-2xl font-normal text-white/95 sm:text-3xl md:text-4xl">
              {dict.hero.subtitleLine}
            </span>
          </span>
        }
        subtitle={dict.hero.tagline}
        actions={[
          {
            label: dict.hero.ctaSecondary,
            href: SITE_PHONE_TEL,
            variant: "outline",
            className:
              "border-white/45 bg-transparent text-white hover:bg-white/10 hover:text-white",
          },
          {
            label: dict.hero.ctaPrimary,
            href: SITE_WHATSAPP_URL,
            variant: "default",
          },
        ]}
        titleClassName="text-balance text-white drop-shadow-sm"
        subtitleClassName="max-w-xl text-base text-white/80 md:text-lg"
        actionsClassName="mt-10"
      />
    </section>
  );
}
