import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site";

export function JsonLd({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const url = getSiteUrl();
  const pageUrl = `${url}/${locale}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": `${pageUrl}#salon`,
    name: dict.brand,
    description: dict.meta.description,
    url: pageUrl,
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80",
    telephone: `+972-4-822-2594`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Haifa",
      addressRegion: "Haifa District",
      addressCountry: "IL",
      streetAddress: dict.contact.address,
    },
    areaServed: {
      "@type": "Place",
      name: "Haifa, Neve Sha'anan",
    },
    priceRange: "$$",
    inLanguage: locale,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
