"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Hero } from "@/components/ui/hero";
import type { Dictionary, Locale } from "@/lib/i18n";
import { SITE_PHONE_TEL, SITE_WHATSAPP_URL } from "@/lib/site";

const fontOutfit = "[font-family:var(--font-outfit),var(--font-dm-sans),sans-serif]";

/**
 * Hero plein viewport (100svh), image sous le header, transitions douces.
 * Typo : Outfit (moderne) + Playfair (marque) — palette crème / ambre sur voile léger.
 */
export function HeroSection({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <div
      className="relative isolate min-h-[100svh] w-full overflow-hidden"
      role="region"
      aria-labelledby="hero-heading"
      lang={locale}
    >
      <Image
        src="/background.png"
        alt={dict.hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Voile léger — lisibilité sans masquer l’image */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/55"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_45%,transparent_20%,rgba(0,0,0,0.2)_100%)]"
        aria-hidden
      />
      {/* Fondu bas vers la section suivante (plus de « coupe » nette) */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-32 bg-gradient-to-t from-background via-background/70 to-transparent md:h-40"
        aria-hidden
      />

      {/* Colonne texte côté gauche de l’écran (physique) — vivifie la mise en page en RTL */}
      <aside
        className={`pointer-events-none absolute bottom-[max(6rem,18svh)] left-5 z-20 hidden max-w-[13.5rem] sm:block md:left-10 md:max-w-[15rem] lg:bottom-[22svh] ${fontOutfit}`}
        aria-hidden
      >
        <div
          className="border-l border-white/25 pl-4 text-left shadow-sm [text-shadow:0_2px_16px_rgba(0,0,0,0.5)]"
          dir={locale === "he" ? "rtl" : "ltr"}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-amber-100/95">
            {dict.hero.sideColumn.kicker}
          </p>
          <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-white/88 md:text-[15px]">
            {dict.hero.sideColumn.body}
          </p>
          <p className="mt-4 text-xs italic text-white/65 md:text-sm">
            {dict.hero.sideColumn.accent}
          </p>
        </div>
      </aside>

      <Hero
        titleId="hero-heading"
        gradient={false}
        blur={false}
        className={cnInnerHero()}
        title={
          <span className="flex max-w-3xl flex-col items-start gap-5 text-start md:gap-7">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={`block text-sm font-medium tracking-[0.2em] text-amber-100/90 md:text-base ${fontOutfit}`}
            >
              {dict.hero.subtitleLine}
            </motion.span>

            <span
              className="font-display text-4xl font-light tracking-[0.08em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}
            >
              {dict.hero.title}
            </span>

            <span
              className={`h-px w-14 bg-gradient-to-r from-transparent via-white/50 to-transparent md:w-20 ${fontOutfit}`}
              aria-hidden
            />

            <p
              className={`max-w-md text-[10px] font-medium uppercase tracking-[0.32em] text-stone-300/95 md:text-[11px] ${fontOutfit}`}
            >
              {dict.hero.metaLine}
            </p>
          </span>
        }
        subtitle={dict.hero.tagline}
        actions={[
          {
            label: dict.hero.ctaSecondary,
            href: SITE_PHONE_TEL,
            variant: "outline",
            className: cnBtnOutline(),
          },
          {
            label: dict.hero.ctaPrimary,
            href: SITE_WHATSAPP_URL,
            variant: "default",
            className:
              "bg-[#25D366] text-white hover:bg-[#22c55e] shadow-lg shadow-black/25 [font-family:var(--font-outfit),sans-serif] font-semibold tracking-wide",
          },
        ]}
        titleClassName="w-full max-w-4xl"
        subtitleClassName={`max-w-md text-[15px] leading-relaxed text-stone-200/95 md:max-w-lg md:text-base ${fontOutfit}`}
        actionsClassName={`mt-4 flex flex-wrap justify-start gap-3 md:mt-6 md:gap-4 ${fontOutfit}`}
      />
    </div>
  );
}

function cnInnerHero() {
  return [
    "relative z-10 flex w-full flex-col items-stretch justify-center bg-transparent",
    "min-h-[100svh] min-h-[100dvh]",
    /* Espace header (hauteur variable + safe area) */
    "pt-[max(7.25rem,calc(env(safe-area-inset-top,0px)+6.25rem))] md:pt-[max(6.5rem,calc(env(safe-area-inset-top,0px)+5.5rem))]",
    "pb-[max(2rem,env(safe-area-inset-bottom,0px))] md:pb-12",
    "px-5",
  ].join(" ");
}

function cnBtnOutline() {
  return [
    "border border-white/45 bg-white/[0.08] text-white backdrop-blur-md",
    "hover:border-white/70 hover:bg-white/[0.16] hover:text-white",
    "[font-family:var(--font-outfit),sans-serif] font-semibold tracking-wide",
  ].join(" ");
}
