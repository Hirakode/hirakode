import type { Metadata, Viewport } from "next";
import "@fontsource/instrument-serif/latin-400.css";
import "@fontsource/instrument-serif/latin-400-italic.css";
import "@fontsource-variable/manrope";
import "./globals.css";
import { Header } from "@/components/header";
import { MotionProvider, PageMotion } from "@/components/motion";

export const metadata: Metadata = {
  metadataBase: new URL("https://hirakode.com"),
  title: { default: "Hirakode — L’intelligence prend forme", template: "%s — Hirakode" },
  description: "Studio indépendant de développement de solutions IA et de transformation IA. Trois expertises pour donner forme à vos idées et les intégrer à votre quotidien.",
  openGraph: { type: "website", locale: "fr_FR", siteName: "Hirakode", title: "Hirakode — L’intelligence prend forme", description: "Des solutions IA utiles. Des produits qui prennent forme. Un studio indépendant, de l’idée à l’usage." },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = { themeColor: "#111013" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr" data-scroll-behavior="smooth"><body id="top"><MotionProvider><a href="#main" className="skip-link">Aller au contenu</a><Header/>{children}<PageMotion/></MotionProvider></body></html>;
}
