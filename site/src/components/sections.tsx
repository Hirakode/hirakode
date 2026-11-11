import Link from "next/link";
import { services, steps, team } from "@/lib/content";
import { Arrow, BrandMark } from "./icons";

export function ServicesOverview() {
  return <section className="services-section section-pad" aria-labelledby="services-title"><div className="section-heading" data-reveal><span className="eyebrow">02 / Ce que nous faisons</span><h2 id="services-title">De l’intuition<br/>à <em>l’action.</em></h2><p>Deux façons de faire avancer votre entreprise.<br/>Un même souci : l’utilité.</p></div><div className="service-rows">{services.map(service => <Link href={`/expertises/#${service.id}`} key={service.id} className="service-row" data-reveal><span className="row-number">{service.number}</span><div><h3>{service.title}</h3><p>{service.description}</p><div className="service-tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><span className="round-arrow"><Arrow diagonal/></span></Link>)}</div></section>;
}

export function ProcessSection() {
  return <section className="process-section section-pad" aria-labelledby="process-title"><div className="process-intro" data-reveal><span className="eyebrow">03 / Comment nous avançons</span><h2 id="process-title">Les pieds sur terre.<br/><em>Les idées devant.</em></h2><p>On avance ensemble, avec des choses à voir, à tester et à améliorer à chaque étape.</p><Link className="text-link" href="/contact">Parlons de votre point de départ<Arrow diagonal/></Link></div><div className="process-steps">{steps.map((step, index) => <div key={step.title} className="process-step" data-reveal><span className="step-marker">0{index + 1}</span><div><h3>{step.title}</h3><h4>{step.subtitle}</h4><p>{step.text}</p></div></div>)}</div></section>;
}

export function TeamStrip({ extended = false }: { extended?: boolean }) {
  return <div className={`team-strip ${extended ? "team-extended" : ""}`}>{team.map((person, index) => <article key={person.name} className="team-person" data-reveal><div className={`team-art team-art-${index + 1}`} aria-hidden="true"><span>{person.symbol}</span>{index === 0 ? <div className="art-orbits"><i/><i/><i/></div> : index === 1 ? <div className="art-wave">{Array.from({ length: 15 }, (_, i) => <i key={i} style={{ "--i": i } as React.CSSProperties}/>)}</div> : <BrandMark/>}</div><div className="team-name"><h3>{person.name}</h3><Arrow diagonal/></div><p>{person.role}</p>{extended && <p className="team-description">{person.description}</p>}</article>)}</div>;
}
