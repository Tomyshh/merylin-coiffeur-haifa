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
  /** Pour aria-labelledby : id appliqué au <h1> */
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

/**
 * Hero « lamp » d’après component-design.txt/hero.txt.
 * Sur fond `bg-background` uni, les masques en bas des cones se fondent sans bande visible.
 */
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
          "relative z-0 flex min-h-[78vh] w-full flex-col items-center justify-center overflow-hidden bg-background",
          className,
        )}
        {...props}
      >
        {gradient && (
          <div className="absolute top-0 isolate z-0 flex w-full max-w-none flex-1 items-start justify-center">
            {blur && (
              <div className="absolute top-0 z-50 h-40 w-full bg-transparent opacity-[0.12] backdrop-blur-md" />
            )}

            <div className="absolute inset-x-auto top-0 z-50 h-36 w-[min(28rem,90vw)] -translate-y-[-28%] rounded-full bg-primary/25 opacity-90 blur-3xl" />

            <motion.div
              initial={{ width: "8rem" }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", delay: 0.2, duration: 0.85 }}
              whileInView={{ width: "16rem" }}
              className="absolute top-0 z-30 h-32 -translate-y-[18%] rounded-full bg-primary/20 blur-2xl"
            />

            <motion.div
              initial={{ width: "12rem" }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", delay: 0.2, duration: 0.85 }}
              whileInView={{ width: "min(30rem,92vw)" }}
              className="absolute inset-x-auto top-0 z-50 h-px -translate-y-[-8%] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            />

            <motion.div
              initial={{ opacity: 0.4, width: "14rem" }}
              whileInView={{ opacity: 1, width: "min(30rem,92vw)" }}
              transition={{
                delay: 0.2,
                duration: 0.85,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute inset-auto right-1/2 h-52 w-[min(30rem,92vw)] overflow-visible bg-gradient-conic from-primary/35 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
            >
              <div className="absolute bottom-0 left-0 z-20 h-36 w-full bg-background [mask-image:linear-gradient(to_top,white,transparent)]" />
              <div className="absolute bottom-0 left-0 z-20 h-full w-32 max-w-[40%] bg-background [mask-image:linear-gradient(to_right,white,transparent)]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0.4, width: "14rem" }}
              whileInView={{ opacity: 1, width: "min(30rem,92vw)" }}
              transition={{
                delay: 0.2,
                duration: 0.85,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute inset-auto left-1/2 h-52 w-[min(30rem,92vw)] bg-gradient-conic from-transparent via-transparent to-primary/35 [--conic-position:from_290deg_at_center_top]"
            >
              <div className="absolute bottom-0 right-0 z-20 h-full w-32 max-w-[40%] bg-background [mask-image:linear-gradient(to_left,white,transparent)]" />
              <div className="absolute bottom-0 right-0 z-20 h-36 w-full bg-background [mask-image:linear-gradient(to_top,white,transparent)]" />
            </motion.div>
          </div>
        )}

        <motion.div
          initial={{ y: 48, opacity: 0.55 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", delay: 0.15, duration: 0.75 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="relative z-50 container flex flex-1 -translate-y-8 flex-col justify-center gap-6 px-5 md:-translate-y-12 md:px-10"
        >
          <div className="flex flex-col items-center space-y-5 text-center md:space-y-6">
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
              <div className={cn("flex flex-wrap justify-center gap-3 pt-2 md:gap-4", actionsClassName)}>
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
