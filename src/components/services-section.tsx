"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Palette,
  Scissors,
  Sparkles,
  User,
  Wind,
  Crown,
} from "lucide-react";

import type { Dictionary } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const ORDER = [
  "womenCut",
  "menCut",
  "color",
  "blowDry",
  "balayage",
  "care",
  "events",
] as const;

type ServiceKey = (typeof ORDER)[number];

const ICONS = {
  womenCut: Scissors,
  menCut: User,
  color: Palette,
  blowDry: Wind,
  balayage: Sparkles,
  care: Droplets,
  events: Crown,
} as const;

/** Couleur, halo et forme légèrement décalée par prestation */
const SERVICE_THEME: Record<
  ServiceKey,
  {
    card: string;
    iconWrap: string;
    icon: string;
    blob: string;
  }
> = {
  womenCut: {
    card: "border border-white/[0.08] border-s-[3px] border-s-rose-400/55 bg-gradient-to-br from-rose-950/35 via-white/[0.02] to-transparent hover:border-white/15 hover:border-s-rose-300/80",
    iconWrap:
      "rounded-2xl rounded-br-3xl bg-gradient-to-br from-rose-400/30 to-rose-950/40 ring-1 ring-rose-300/25 shadow-[0_0_24px_-4px_rgba(251,113,133,0.35)]",
    icon: "text-rose-50",
    blob: "absolute -end-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-rose-500/15 blur-3xl",
  },
  menCut: {
    card: "border border-white/[0.08] border-s-[3px] border-s-sky-400/50 bg-gradient-to-bl from-sky-950/30 via-transparent to-indigo-950/15 hover:border-white/15 hover:border-s-sky-300/75",
    iconWrap:
      "rounded-xl rounded-tl-2xl rounded-br-2xl bg-gradient-to-tr from-sky-400/25 to-indigo-900/50 ring-1 ring-sky-300/20 shadow-[0_0_20px_-6px_rgba(56,189,248,0.4)]",
    icon: "text-sky-50",
    blob: "absolute -start-6 bottom-0 h-36 w-36 rounded-full bg-sky-400/12 blur-3xl",
  },
  color: {
    card: "border border-white/[0.08] border-s-[3px] border-s-fuchsia-400/50 bg-gradient-to-tr from-fuchsia-950/30 via-violet-950/10 to-transparent hover:border-white/15 hover:border-s-fuchsia-300/75",
    iconWrap:
      "rounded-2xl rounded-tl-sm bg-gradient-to-br from-fuchsia-500/30 to-violet-950/50 ring-1 ring-fuchsia-400/25 shadow-[0_0_28px_-4px_rgba(217,70,239,0.35)]",
    icon: "text-fuchsia-50",
    blob: "absolute end-1/4 -top-12 h-28 w-44 rotate-12 rounded-full bg-violet-500/15 blur-2xl",
  },
  blowDry: {
    card: "border border-white/[0.08] border-s-[3px] border-s-cyan-400/50 bg-gradient-to-br from-cyan-950/25 via-transparent to-teal-950/20 hover:border-white/15 hover:border-s-cyan-300/75",
    iconWrap:
      "rounded-full rounded-tr-md bg-gradient-to-bl from-cyan-300/35 to-teal-900/45 ring-1 ring-cyan-200/25 shadow-[0_0_22px_-4px_rgba(34,211,238,0.35)]",
    icon: "text-cyan-50",
    blob: "absolute -end-4 bottom-4 h-24 w-32 -rotate-6 rounded-full bg-teal-400/12 blur-2xl",
  },
  balayage: {
    card: "border border-white/[0.08] border-s-[3px] border-s-amber-400/55 bg-gradient-to-bl from-amber-950/35 via-orange-950/10 to-transparent hover:border-white/15 hover:border-s-amber-300/80",
    iconWrap:
      "rounded-3xl rounded-bl-lg bg-gradient-to-tr from-amber-400/35 to-orange-950/50 ring-1 ring-amber-300/30 shadow-[0_0_26px_-4px_rgba(251,191,36,0.4)]",
    icon: "text-amber-50",
    blob: "absolute start-0 top-0 h-32 w-32 rounded-full bg-amber-400/10 blur-3xl",
  },
  care: {
    card: "border border-white/[0.08] border-s-[3px] border-s-emerald-400/50 bg-gradient-to-br from-emerald-950/30 via-transparent to-cyan-950/10 hover:border-white/15 hover:border-s-emerald-300/75",
    iconWrap:
      "rounded-2xl rounded-tr-3xl bg-gradient-to-br from-emerald-400/28 to-teal-950/45 ring-1 ring-emerald-300/22 shadow-[0_0_24px_-4px_rgba(52,211,153,0.35)]",
    icon: "text-emerald-50",
    blob: "absolute end-0 bottom-0 h-36 w-28 translate-x-1/4 rounded-full bg-emerald-400/12 blur-3xl",
  },
  events: {
    card: "border border-white/[0.08] border-s-[3px] border-s-[hsl(43_72%_52%/0.65)] bg-gradient-to-r from-amber-950/40 via-yellow-950/15 to-amber-950/25 hover:border-white/15 hover:border-s-[hsl(48_85%_58%/0.85)]",
    iconWrap:
      "rounded-md rounded-br-2xl rounded-tl-2xl bg-gradient-to-br from-[hsl(43_62%_55%/0.45)] to-amber-950/55 ring-1 ring-amber-200/30 shadow-[0_0_32px_-4px_rgba(234,179,8,0.35)]",
    icon: "text-amber-50",
    blob: "absolute start-1/3 top-1/2 h-48 w-64 -translate-y-1/2 rounded-full bg-amber-500/10 blur-3xl",
  },
};

const CARD_RADIUS: Record<ServiceKey, string> = {
  womenCut: "rounded-2xl rounded-tr-[2rem]",
  menCut: "rounded-[1.35rem] rounded-bl-3xl",
  color: "rounded-3xl rounded-br-xl",
  blowDry: "rounded-2xl rounded-tl-3xl",
  balayage: "rounded-2xl rounded-br-[1.75rem]",
  care: "rounded-[1.25rem] rounded-tr-3xl",
  events: "rounded-2xl sm:rounded-3xl sm:rounded-bl-[2.5rem]",
};

export function ServicesSection({ dict }: { dict: Dictionary }) {
  const items = dict.services.items;

  return (
    <section
      id="services"
      className="relative z-20 -mt-10 scroll-mt-[calc(5rem+env(safe-area-inset-top))] rounded-t-[1.75rem] border-b border-border/50 bg-background pt-12 pb-16 shadow-[0_-6px_32px_-10px_rgba(0,0,0,0.25)] md:-mt-12 md:scroll-mt-28 md:rounded-t-[2rem] md:pt-14 md:pb-24"
    >
      <div className="container px-5 md:px-10">
        <header className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            {dict.brand}
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-foreground md:text-4xl">
            {dict.services.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            {dict.services.lead}
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-5">
          {ORDER.map((key, index) => {
            const item = items[key];
            const Icon = ICONS[key];
            const wide = key === "events";
            const theme = SERVICE_THEME[key];
            const radius = CARD_RADIUS[key];
            const tiltEven = index % 2 === 0;

            return (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-32px" }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                whileHover={{
                  rotate: tiltEven ? 0.4 : -0.4,
                  transition: { duration: 0.2 },
                }}
                className={cn(
                  "group relative overflow-hidden p-6 transition-[transform] duration-200 md:p-7",
                  radius,
                  theme.card,
                  wide ? "sm:col-span-2 lg:col-span-3" : "",
                )}
              >
                <div
                  className={cn(theme.blob, "pointer-events-none")}
                  aria-hidden
                />

                <div
                  className={cn(
                    "relative flex gap-4",
                    wide ? "flex-col sm:flex-row sm:items-center sm:gap-8" : "flex-col",
                  )}
                >
                  <span
                    className={cn(
                      "relative flex h-11 w-11 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3",
                      theme.iconWrap,
                    )}
                    aria-hidden
                  >
                    <Icon className={cn("h-5 w-5", theme.icon)} />
                  </span>

                  <div className="relative min-w-0 flex-1">
                    <h3 className="font-display text-lg text-foreground md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
