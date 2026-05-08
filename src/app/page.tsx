import { redirect } from "next/navigation";

/** Accueil : locale par défaut (utile en `next dev` ; en hosting, Firebase redirige aussi `/` → `/he/`). */
export default function Home() {
  redirect("/he/");
}
