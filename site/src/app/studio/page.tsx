import type { Metadata } from "next";
import Link from "next/link";
import { TeamStrip } from "@/components/sections";
import { BrandMark, Arrow } from "@/components/icons";
import { Footer } from "@/components/footer";

export const metadata: Metadata = { title: "Le studio", description: "Anatole, Gaël et Florian : un studio indépendant qui réunit produit, data et ingénierie pour concevoir vos solutions IA.", alternates: { canonical: "/studio/" } };

export default function StudioPage() {
  return <><main id="main"><section className="page-intro studio-intro section-pad"><span className="eyebrow">Nous sommes Hirakode</span><h1>Trois profils.<br/><em>Des compétences complémentaires.</em></h1><div className="studio-opening"><p>Nous aimons comprendre comment les choses fonctionnent. Et imaginer comment elles pourraient mieux fonctionner.</p><p>À la croisée du produit, de la data et du développement, Hirakode transforme les problèmes du terrain en solutions qui prennent leur place dans le quotidien des utilisateurs.</p></div></section>
    <section className="studio-manifesto section-pad"><div className="manifesto-mark" aria-hidden="true"><BrandMark/></div><div data-reveal><span className="eyebrow">Notre façon de voir</span><h2>La technologie avance.<br/><em>On avance avec vous.</em></h2><p>Via nos échanges, nous progresserons ensemble vers les meilleurs choix pour vos besoins actuels et futurs. Une équipe à taille humaine, impliquée de bout en bout.</p></div></section>
    <section className="team-section section-pad"><div className="work-heading" data-reveal><h2>Les personnes<br/><em>derrière le code.</em></h2><p>Trois associés.<br/>Des expertises qui se complètent.</p></div><TeamStrip extended/></section>
    <section className="values-section section-pad"><span className="eyebrow">Ce qui guide notre travail</span><div>{[{title:"Le besoin d’abord.",text:"La bonne solution commence par la bonne question. Nous partons du besoin et choisissons la technologie qui permet d’y répondre."},{title:"L’efficacité en priorité.",text:"Nous concevons des solutions qui atteignent leur objectif en mobilisant les ressources nécessaires : du code aux algorithmes, chaque choix compte pour atteindre vos objectifs sur les différents horizons."},{title:"Le savoir se partage.",text:"Vous savez ce que nous construisons et pourquoi. Nous documentons et transmettons pour que votre équipe puisse s’approprier le résultat."}].map(value => <article key={value.title} data-reveal><h3>{value.title}</h3><p>{value.text}</p></article>)}<Link className="text-link" href="/projets">Voir ce que nous construisons<Arrow diagonal/></Link></div></section>
  </main><Footer/></>;
}
