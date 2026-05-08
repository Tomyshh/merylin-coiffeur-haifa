# Merylin — Salon de coiffure (Haïfa)

Site vitrine **Next.js (App Router)** + **Tailwind CSS** : hébreu par défaut (`/he`), anglais (`/en`), design épuré et SEO (metadata, sitemap, robots, JSON-LD).

## Développement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) — redirection automatique vers `/he`.

## Production

```bash
npm run build
npm start
```

## Variables d’environnement

Copier `.env.example` vers `.env.local` et définir :

- `NEXT_PUBLIC_SITE_URL` — URL publique (sans `/` final), pour les métadonnées et le sitemap.

## Contenu & images

- Textes : `src/dictionaries/he.json`, `src/dictionaries/en.json`
- Images distantes : domaines autorisés dans `next.config.ts` (`images.unsplash.com`)
- Téléphone / WhatsApp : `src/lib/site.ts`
