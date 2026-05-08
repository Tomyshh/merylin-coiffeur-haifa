import { getApps, initializeApp, type FirebaseApp } from "firebase/app";

/**
 * Configuration web Firebase (clé API exposée côté client — usage normal pour les apps web).
 * À utiliser pour Analytics, Auth, etc. L’hébergement du site ne dépend pas de ce fichier.
 */
const firebaseConfig = {
  apiKey: "AIzaSyCOR-e8VSCZwpPEOvj7TTLnufP4LUqg6ok",
  authDomain: "merylin-coiffeur-haifa.firebaseapp.com",
  projectId: "merylin-coiffeur-haifa",
  storageBucket: "merylin-coiffeur-haifa.firebasestorage.app",
  messagingSenderId: "861535574983",
  appId: "1:861535574983:web:046b8d3d5d6c25185d97e2",
};

let app: FirebaseApp | undefined;

export function getFirebaseApp(): FirebaseApp {
  if (typeof window === "undefined") {
    throw new Error("getFirebaseApp() doit être appelé côté client uniquement.");
  }
  if (!app) {
    app = getApps().length ? getApps()[0]! : initializeApp(firebaseConfig);
  }
  return app;
}

export { firebaseConfig };
