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

export function ServicesSection({ dict }: { dict: Dictionary }) {
  const items = dict.services.items;

  return (
    <section
      id="services"
      className="scroll-mt-24 border-b border-border/60 bg-background py-20 md:py-28"
    >
      <div className="container px-5 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Merylin
          </p>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-foreground md:text-4xl">
            {dict.services.title}
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">{dict.services.lead}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ORDER.map((key, index) => {
            const item = items[key];
            const Icon = ICONS[key];
            return (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group rounded-xl border border-border/70 bg-card/40 p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-primary/35 hover:bg-card/80"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/25 transition-transform group-hover:scale-[1.03]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-display text-lg text-foreground">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
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
