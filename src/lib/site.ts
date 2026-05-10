export const SITE_PHONE_DISPLAY = "04-822-2594";
export const SITE_PHONE_TEL = "tel:+97248222594";

/** Stable Unsplash sources — salon / hair imagery */
export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1920&q=80";

export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
] as const;

/** Embed sans entité HTML dans le query string (évite Invalid pb) */
export const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Shalom+Aleichem+St+1,+Haifa,+Israel&output=embed";

export const MAP_EXTERNAL_URL =
  "https://www.google.com/maps/search/?api=1&query=Shalom+Aleichem+St+1,+Haifa,+Israel";

export function getSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "http://localhost:3000"
  );
}
