import type { Metadata } from "next";
import Link from "next/link";
import { TeamStrip } from "@/components/sections";
import { BrandMark, Arrow } from "@/components/icons";
import { Footer } from "@/components/footer";

export const metadata: Metadata = { title: "Le studio", description: "Anatole, Gaël et Florian : un studio indépendant qui réunit produit, data et ingénierie pour concevoir vos solutions IA.", alternates: { canonical: "/studio/" } };

export default function StudioPage() {
  return <><main id="main"><section className="page-intro studio-intro section-pad"><span className="eyebrow">Nous sommes Hirakode</span><h1>Trois personnalités.<br/><em>Le goût de construire.</em></h1><div className="studio-opening"><p>Nous aimons comprendre comment les choses fonctionnent. Et imaginer comment elles pourraient mieux fonctionner.</p><p>Hirakode est né de la rencontre entre le produit, la data et le développement. Notre terrain commun : les problèmes concrets et les solutions que l’on peut mettre entre les mains de leurs utilisateurs.</p></div></section>
    <section className="studio-manifesto section-pad"><div className="manifesto-mark" aria-hidden="true"><BrandMark/></div><div data-reveal><span className="eyebrow">Notre façon de voir</span><h2>La technologie avance.<br/><em>On avance avec vous.</em></h2><p>Nous croyons aux échanges directs, aux prototypes qui font parler et aux choix techniques que l’on peut expliquer. Une petite équipe, impliquée de bout en bout.</p></div></section>
    <section className="team-section section-pad"><div className="work-heading" data-reveal><h2>Les personnes<br/><em>derrière le code.</em></h2><p>Trois associés.<br/>Des expertises qui se complètent.</p></div><TeamStrip extended/></section>
    <section className="values-section section-pad"><span className="eyebrow">Ce qui guide notre travail</span><div>{[{title:"L’usage d’abord.",text:"La bonne solution commence par la bonne question. Nous partons du besoin et choisissons la technologie qui permet d’y répondre."},{title:"Le concret, vite.",text:"Une idée se précise quand on peut la voir et la tester. Nous rendons les décisions tangibles au fil du projet."},{title:"Le savoir se partage.",text:"Vous savez ce que nous construisons et pourquoi. Nous documentons et transmettons pour que votre équipe puisse s’approprier le résultat."}].map(value => <article key={value.title} data-reveal><h3>{value.title}</h3><p>{value.text}</p></article>)}<Link className="text-link" href="/projets">Voir ce que nous construisons<Arrow diagonal/></Link></div></section>
  </main><Footer/></>;
}
