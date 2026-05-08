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
  gradient?: boolean;
  blur?: boolean;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  actions?: HeroAction[];
  titleClassName?: string;
  subtitleClassName?: string;
  actionsClassName?: string;
}

/**
 * Hero avec accent lumineux discret (sans masques opaques qui créent un « rectangle »).
 * Les cones + bg-background + mask-image ont été retirés pour les fonds photo.
 */
const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      className,
      gradient = true,
      blur: blurProp = true,
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
          "relative z-0 flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-background",
          className,
        )}
        {...props}
      >
        {gradient && (
          <div
            className="pointer-events-none absolute inset-0 isolate overflow-hidden"
            aria-hidden
          >
            {blurProp && (
              <div className="absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-black/25 to-transparent backdrop-blur-[2px]" />
            )}
            <div className="absolute -top-28 left-1/2 z-0 h-72 w-[min(42rem,100vw)] -translate-x-1/2 rounded-full bg-white/12 blur-3xl" />
            <div className="absolute -top-32 left-1/4 z-0 h-48 w-64 rounded-full bg-white/6 blur-2xl" />
            <div className="absolute -top-32 right-1/4 z-0 h-48 w-64 rounded-full bg-white/6 blur-2xl" />
            <motion.div
              initial={{ opacity: 0.35, scaleX: 0.85 }}
              viewport={{ once: true }}
              transition={{ ease: "easeOut", delay: 0.15, duration: 0.9 }}
              whileInView={{ opacity: 0.55, scaleX: 1 }}
              className="absolute top-10 left-1/2 z-10 h-px w-[min(28rem,85vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/35 to-transparent"
            />
          </div>
        )}

        <motion.div
          initial={{ y: 36, opacity: 0.65 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", delay: 0.12, duration: 0.65 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="relative z-50 container flex flex-1 flex-col justify-center gap-4 px-5 py-12 md:px-10 md:py-16"
        >
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1
              className={cn(
                "font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",
                titleClassName,
              )}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className={cn(
                  "max-w-2xl text-xl text-muted-foreground",
                  subtitleClassName,
                )}
              >
                {subtitle}
              </p>
            )}
            {actions && actions.length > 0 && (
              <div className={cn("flex flex-wrap justify-center gap-4", actionsClassName)}>
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
