import { Hero } from "@/components/ui/hero";
import type { Dictionary } from "@/lib/i18n";
import { SITE_PHONE_TEL, SITE_WHATSAPP_URL } from "@/lib/site";

/**
 * Hero épuré : pas de photo, fond uni + effet lamp du design (voir component-design.txt/hero.txt).
 */
export function HeroSection({ dict }: { dict: Dictionary }) {
  return (
    <div
      className="relative isolate w-full border-b border-white/[0.06] bg-background pt-[calc(4rem+env(safe-area-inset-top))] md:pt-[calc(4.25rem+env(safe-area-inset-top))]"
      role="region"
      aria-labelledby="hero-heading"
    >
      {/* Grain très léger (optionnel, renforce le côté premium sans image) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <Hero
        titleId="hero-heading"
        gradient
        blur
        className="relative min-h-[min(82vh,52rem)] bg-transparent pb-16 md:pb-24"
        title={
          <span className="block">
            <span className="block text-foreground">{dict.hero.title}</span>
            <span className="mt-4 block font-display text-xl font-normal tracking-[0.02em] text-muted-foreground sm:text-2xl md:text-3xl">
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
              "border-border bg-transparent text-foreground hover:bg-secondary hover:text-foreground",
          },
          {
            label: dict.hero.ctaPrimary,
            href: SITE_WHATSAPP_URL,
            variant: "default",
            className:
              "bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-md shadow-black/20",
          },
        ]}
        titleClassName="text-balance"
        subtitleClassName="max-w-lg text-base md:max-w-xl md:text-lg"
        actionsClassName="mt-8 md:mt-10"
      />
    </div>
  );
}
