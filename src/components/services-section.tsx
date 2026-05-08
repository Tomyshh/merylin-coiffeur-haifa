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

const ORDER = [
  "womenCut",
  "menCut",
  "color",
  "blowDry",
  "balayage",
  "care",
  "events",
] as const;

const ICONS = {
  womenCut: Scissors,
  menCut: User,
  color: Palette,
  blowDry: Wind,
  balayage: Sparkles,
  care: Droplets,
  events: Crown,
} as const;

function placementClasses(key: (typeof ORDER)[number]): string {
  switch (key) {
    case "womenCut":
      return "lg:col-span-8 lg:row-span-2 lg:row-start-1 lg:col-start-1";
    case "menCut":
      return "lg:col-span-4 lg:row-start-1 lg:col-start-9";
    case "color":
      return "lg:col-span-4 lg:row-start-2 lg:col-start-9";
    case "blowDry":
      return "lg:col-span-4 lg:row-start-3 lg:col-start-1";
    case "balayage":
      return "lg:col-span-4 lg:row-start-3 lg:col-start-5";
    case "care":
      return "lg:col-span-4 lg:row-start-3 lg:col-start-9";
    case "events":
      return "lg:col-span-12 lg:row-start-4 lg:col-start-1";
    default:
      return "";
  }
}

export function ServicesSection({ dict }: { dict: Dictionary }) {
  const items = dict.services.items;

  return (
    <section
      id="services"
      className="scroll-mt-24 border-b border-border/50 bg-gradient-to-b from-background via-card/20 to-background py-20 md:py-28"
    >
      <div className="container px-5 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-white/25" aria-hidden />
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                {dict.brand}
              </p>
            </div>
            <h2 className="mt-5 font-display text-3xl tracking-tight text-foreground md:text-5xl">
              {dict.services.title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base md:text-right">
            {dict.services.lead}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
          {ORDER.map((key, index) => {
            const item = items[key];
            const Icon = ICONS[key];
            const featured = key === "womenCut";
            const banner = key === "events";

            return (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-md transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-xl hover:shadow-black/40 md:p-8 ${placementClasses(key)} ${featured ? "min-h-[280px] md:min-h-[320px]" : ""} ${banner ? "flex flex-col justify-center md:flex-row md:items-center md:justify-between md:gap-10" : ""}`}
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-100 md:h-64 md:w-64"
                  aria-hidden
                />

                <span
                  className={`absolute font-display text-white/[0.06] transition-colors duration-300 group-hover:text-white/[0.09] ${featured ? "right-4 top-4 text-8xl md:right-8 md:top-8 md:text-9xl" : "right-5 top-5 text-6xl md:text-7xl"}`}
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  className={`relative flex h-full flex-col ${banner ? "md:flex-row md:items-center md:gap-8" : ""}`}
                >
                  <span
                    className={`flex shrink-0 items-center justify-center rounded-xl bg-white/10 text-foreground ring-1 ring-white/15 transition-transform duration-300 group-hover:scale-[1.03] ${featured ? "mb-6 h-14 w-14 md:mb-8 md:h-16 md:w-16" : "mb-5 h-12 w-12"}`}
                  >
                    <Icon
                      className={featured ? "h-7 w-7 md:h-8 md:w-8" : "h-5 w-5"}
                      aria-hidden
                    />
                  </span>

                  <div className={banner ? "md:flex-1" : ""}>
                    <h3
                      className={`font-display text-foreground ${featured ? "text-2xl md:text-3xl" : "text-xl"} ${banner ? "md:text-2xl" : ""}`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`mt-3 text-muted-foreground ${featured ? "max-w-lg text-base md:text-lg" : "text-sm leading-relaxed md:text-[15px]"}`}
                    >
                      {item.desc}
                    </p>
                  </div>

                  {!banner && (
                    <div className="mt-6 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:mt-auto">
                      <span className="h-px w-6 bg-white/30" aria-hidden />
                      <span>Merylin</span>
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
