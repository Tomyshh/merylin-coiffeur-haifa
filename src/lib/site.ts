export const SITE_PHONE_DISPLAY = "04-822-7005";
export const SITE_PHONE_TEL = "tel:+97248227005";
export const SITE_WHATSAPP_URL = "https://wa.me/97248227005";

/** Stable Unsplash sources — salon / hair imagery */
export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1920&q=80";

export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1492104407568-022772786792?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1595476107240-75964623dc84?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
] as const;

export const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53991.63974689462!2d34.9637!3d32.7940!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dba82ae98fc83%3A0xe52dcfa04fa26eb9!2sNeve%20Sha&#39;anan%2C%20Haifa!5e0!3m2!1sen!2sil!4v1715184000000!5m2!1sen!2sil";

export function getSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "http://localhost:3000"
  );
}
