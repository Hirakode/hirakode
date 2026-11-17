import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { ProjectList } from "@/components/project-list";

export const metadata: Metadata = { title: "Nos projets", description: "Autotraders.ai, WhalingView, GeoDataViz et Travelideas : IA intégrée, algorithmes explicables et produits concrets. Autotraders compte plus de 5 000 utilisateurs actifs.", alternates: { canonical: "/projets/" } };

export default function ProjectsPage() {
  return <><main id="main" className="projects-page"><div className="page-intro section-pad"><span className="eyebrow">Nos réalisations</span><h1>L’intelligence,<br/><em>mise en pratique.</em></h1><p>Une IA qui interprète. Des algorithmes qui éclairent les choix. Des produits conçus pour passer de la complexité technique à un usage concret.</p><div className="portfolio-intro-proof"><span className="portfolio-proof-dot"/><p>Avec Autotraders, notre travail accompagne déjà<br/><strong>plus de 5 000 utilisateurs actifs.</strong></p></div></div><section className="section-pad projects-index" aria-label="Nos quatre projets"><ProjectList/></section></main><Footer/></>;
}
