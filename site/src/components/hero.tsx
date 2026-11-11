"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Arrow } from "./icons";
import { MotionToggle } from "./motion";

const HeroScene = dynamic(() => import("./hero-scene"), { ssr: false });

export function Hero() {
  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero-grain" aria-hidden="true"/>
    <div className="hero-intro"><span className="eyebrow"><span className="status-dot"/>Studio de solutions & transformation IA</span><p>Nous donnons forme à vos idées.<br/>Et de l’intelligence à vos outils.</p></div>
    <HeroScene/>
    <div className="hero-side-note" aria-hidden="true"><span>Humain × Data × Code</span><span>Une même ambition.</span></div>
    <div className="hero-bottom"><h1 id="hero-title">L’intelligence.<br/><span>Prend <em>forme.</em></span></h1><div className="hero-description"><p>Du premier besoin au produit qui change votre quotidien. Nous concevons l’IA qui vous ressemble.</p><Link className="text-link" href="/projets">Explorer nos projets <Arrow diagonal/></Link></div></div>
    <div className="hero-baseline"><a href="#introduction" className="scroll-link"><span className="scroll-line" aria-hidden="true"/>Faire défiler</a><MotionToggle/><span className="hero-baseline-right">Indépendants. Ensemble.</span></div>
  </section>;
}
