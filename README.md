# Merylin — Salon de coiffure (Haïfa)

Site vitrine **Next.js (App Router)** + **Tailwind CSS** : hébreu par défaut (`/he/`), anglais (`/en/`), design épuré et SEO (metadata, sitemap, robots, JSON-LD).

Le déploiement production cible **Firebase Hosting** via export statique (`output: "export"`).

## Développement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000/he/](http://localhost:3000/he/) (la racine `/` redirige vers `/he/`).

## Build local

```bash
npm run build
```

Les fichiers statiques sont générés dans `out/`.

## Firebase Hosting

Prérequis : [Firebase CLI](https://firebase.google.com/docs/cli) et compte associé au projet `merylin-coiffeur-haifa`.

```bash
npx firebase login
npm run deploy:firebase
```

- Configuration : [`firebase.json`](firebase.json), [`.firebaserc`](.firebaserc)
- URL du site : [https://merylin-coiffeur-haifa.web.app](https://merylin-coiffeur-haifa.web.app)
- Le script `build:firebase` fixe `NEXT_PUBLIC_SITE_URL` pour le sitemap / Open Graph.

SDK web (optionnel, client uniquement) : [`src/lib/firebase.ts`](src/lib/firebase.ts).

## Variables d’environnement

Copier `.env.example` vers `.env.local` si besoin :

- `NEXT_PUBLIC_SITE_URL` — URL publique **sans** slash final (ex. `https://merylin-coiffeur-haifa.web.app`).

## Contenu & images

- Textes : `src/dictionaries/he.json`, `src/dictionaries/en.json`
- Images distantes : `next.config.ts` (`images.unsplash.com`)
- Téléphone / WhatsApp / carte : `src/lib/site.ts`
