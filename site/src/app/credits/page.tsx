import type { Metadata } from "next";
import { Footer } from "@/components/footer";
export const metadata: Metadata = { title: "Crédits visuels", robots: { index: false, follow: true } };

export default function CreditsPage() {
  return <><main id="main"><div className="page-intro section-pad"><span className="eyebrow">Les ressources du site</span><h1>Les crédits.</h1></div><div className="credits-copy section-pad"><h2>Nos réalisations</h2><p>Les captures présentent les versions locales de WhalingView, GeoDataViz et Travelideas. La vue WhalingView utilise des données d’illustration.</p><h2>Photographie de Lisbonne</h2><p>L’image visible dans la capture de Travelideas / Ailleurs provient d’<a href="https://unsplash.com/photos/gwotR6GI0FA" target="_blank" rel="noreferrer">Unsplash — photographie gwotR6GI0FA</a>. Elle est reproduite dans son contexte d’interface.</p><h2>Cartographie</h2><p>La capture GeoDataViz présente des données INSEE Filosofi 2021 et des fonds Natural Earth, IGN et BD TOPAGE (IGN/OFB/Sandre). Les sources complètes sont accessibles dans le produit.</p><h2>Typographie et identité</h2><p>Instrument Serif et Manrope sont distribuées sous licence SIL Open Font License, via Fontsource. La scène 3D et les compositions graphiques ont été créées pour Hirakode, à partir de sa palette B5 et de son symbole.</p></div></main><Footer compact/></>;
}
