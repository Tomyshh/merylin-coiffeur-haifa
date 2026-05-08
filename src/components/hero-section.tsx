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
        className="object-cover scale-[1.02]"
      />
      {/* Vignette douce — pas de « rectangle » dur */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_35%,_rgba(0,0,0,0.55)_100%)]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-background" />

      <Hero
        gradient
        blur={false}
        className="relative min-h-[calc(85vh-4rem)] bg-transparent md:min-h-[85vh]"
        title={
          <span className="block">
            <span className="block text-white">{dict.hero.title}</span>
            <span className="mt-3 block font-display text-2xl font-normal tracking-wide text-white/90 sm:text-3xl md:text-4xl">
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
              "border-white/40 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 hover:text-white",
          },
          {
            label: dict.hero.ctaPrimary,
            href: SITE_WHATSAPP_URL,
            variant: "default",
            className:
              "bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-lg shadow-black/25",
          },
        ]}
        titleClassName="text-balance drop-shadow-md"
        subtitleClassName="max-w-xl text-base text-white/75 md:text-lg"
        actionsClassName="mt-10"
      />
    </section>
  );
}
