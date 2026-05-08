"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import type { Dictionary } from "@/lib/i18n";
import { GALLERY_IMAGES } from "@/lib/site";

export function GallerySection({ dict }: { dict: Dictionary }) {
  const alts = dict.gallery.images;

  return (
    <section
      id="gallery"
      className="scroll-mt-24 border-b border-border/60 bg-gradient-to-b from-background to-card/30 py-20 md:py-28"
    >
      <div className="container px-5 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-foreground md:text-4xl">
            {dict.gallery.title}
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">{dict.gallery.lead}</p>
        </div>

        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {GALLERY_IMAGES.map((src, i) => {
            const alt = alts[i]?.alt ?? dict.gallery.title;
            return (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
                className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-border/60 bg-card/20"
              >
                <div className="group relative aspect-[3/4] w-full sm:aspect-[4/5]">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
