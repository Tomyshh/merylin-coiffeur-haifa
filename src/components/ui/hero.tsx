"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export type HeroAction = {
  label: string;
  href: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  className?: string;
};

export interface HeroProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  titleId?: string;
  gradient?: boolean;
  blur?: boolean;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  actions?: HeroAction[];
  titleClassName?: string;
  subtitleClassName?: string;
  actionsClassName?: string;
}

/** Lamp + cones (fond uni chaud — masques alignés sur --background) */
const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      className,
      titleId,
      gradient = true,
      blur = true,
      title,
      subtitle,
      actions,
      titleClassName,
      subtitleClassName,
      actionsClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative z-0 flex w-full flex-col items-stretch justify-center overflow-hidden bg-background",
          className,
        )}
        {...props}
      >
        {gradient && (
          <div className="absolute top-0 isolate z-0 flex w-full max-w-none flex-1 items-start justify-center">
            {blur && (
              <div className="absolute top-0 z-50 h-44 w-full bg-gradient-to-b from-primary/10 to-transparent opacity-95 backdrop-blur-[6px]" />
            )}

            <div className="absolute inset-x-auto top-0 z-50 h-40 w-[min(32rem,92vw)] -translate-y-[-22%] rounded-full bg-[hsl(var(--hero-glow)/0.22)] blur-3xl" />

            <motion.div
              initial={{ width: "7rem" }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", delay: 0.15, duration: 0.9 }}
              whileInView={{ width: "18rem" }}
              className="absolute top-0 z-30 h-36 -translate-y-[14%] rounded-full bg-primary/25 blur-2xl"
            />

            <motion.div
              initial={{ width: "10rem", opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", delay: 0.15, duration: 0.9 }}
              whileInView={{ width: "min(32rem,94vw)", opacity: 1 }}
              className="absolute inset-x-auto top-0 z-50 h-px -translate-y-[-6%] bg-gradient-to-r from-transparent via-primary/70 to-transparent"
            />

            <motion.div
              initial={{ opacity: 0.35, width: "12rem" }}
              whileInView={{ opacity: 1, width: "min(32rem,94vw)" }}
              transition={{ delay: 0.15, duration: 0.9, ease: "easeInOut" }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute inset-auto right-1/2 h-56 w-[min(32rem,94vw)] overflow-visible bg-gradient-conic from-[hsl(var(--hero-glow)/0.45)] via-primary/15 to-transparent [--conic-position:from_70deg_at_center_top]"
            >
              <div className="absolute bottom-0 left-0 z-20 h-40 w-full bg-background [mask-image:linear-gradient(to_top,white,transparent)]" />
              <div className="absolute bottom-0 left-0 z-20 h-full w-36 max-w-[42%] bg-background [mask-image:linear-gradient(to_right,white,transparent)]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0.35, width: "12rem" }}
              whileInView={{ opacity: 1, width: "min(32rem,94vw)" }}
              transition={{ delay: 0.15, duration: 0.9, ease: "easeInOut" }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute inset-auto left-1/2 h-56 w-[min(32rem,94vw)] bg-gradient-conic from-transparent via-transparent to-[hsl(var(--hero-glow)/0.4)] [--conic-position:from_290deg_at_center_top]"
            >
              <div className="absolute bottom-0 right-0 z-20 h-full w-36 max-w-[42%] bg-background [mask-image:linear-gradient(to_left,white,transparent)]" />
              <div className="absolute bottom-0 right-0 z-20 h-40 w-full bg-background [mask-image:linear-gradient(to_top,white,transparent)]" />
            </motion.div>
          </div>
        )}

        <motion.div
          initial={{ y: 40, opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", delay: 0.1, duration: 0.7 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="relative z-50 container flex flex-1 -translate-y-6 flex-col justify-center gap-6 px-5 md:-translate-y-10 md:px-10"
        >
          {/* text-start + items-start : droite en RTL (he), gauche en LTR (en) */}
          <div className="flex w-full flex-col items-start space-y-5 text-start md:space-y-7">
            <h1
              id={titleId}
              className={cn(
                "font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",
                titleClassName,
              )}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className={cn(
                  "max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl",
                  subtitleClassName,
                )}
              >
                {subtitle}
              </p>
            )}
            {actions && actions.length > 0 && (
              <div className={cn("flex flex-wrap justify-start gap-3 pt-1 md:gap-4", actionsClassName)}>
                {actions.map((action, index) => (
                  <Button
                    key={index}
                    variant={action.variant || "default"}
                    size="lg"
                    className={action.className}
                    asChild
                  >
                    <Link href={action.href}>{action.label}</Link>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </section>
    );
  },
);
Hero.displayName = "Hero";

export { Hero };
