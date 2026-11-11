import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";
import { ProjectVisual } from "@/components/project-visual";
import { Footer } from "@/components/footer";
import { Arrow } from "@/components/icons";

export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  return project ? { title: project.name, description: project.summary, alternates: { canonical: `/projets/${slug}/` }, openGraph: { title: `${project.name} — Hirakode`, description: project.summary, images: [{ url: project.image, alt: project.imageAlt }] } } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex(project => project.slug === slug);
  if (index < 0) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  return <><main id="main" className="case-page"><section className="case-intro section-pad"><Link href="/projets" className="back-link">← Tous les projets</Link><div className="case-topline"><span className="eyebrow">Projet / 0{index + 1}</span><span>{project.category}</span></div><h1>{project.name}</h1><div className="case-headline"><h2>{project.headline}</h2><p>{project.intro}</p></div></section>
    <div className="case-hero"><ProjectVisual project={project} priority detail/></div>
    <section className="case-story section-pad"><div data-reveal><span className="eyebrow">Le point de départ</span><h2>{project.context}</h2></div><div className="case-narrative" data-reveal><p>{project.problem}</p><p>{project.response}</p><div className="capability-list">{project.capabilities.map(capability => <span key={capability}>{capability}</span>)}</div></div></section>
    <section className="case-features section-pad"><span className="eyebrow" data-reveal>Dans le produit</span>{project.features.map((feature, i) => <div className="case-feature" key={feature.title} data-reveal><span>0{i + 1}</span><h3>{feature.title}</h3><p>{feature.text}</p></div>)}</section>
    <section className="case-statement section-pad" data-reveal><span className="eyebrow">Notre conviction</span><p>{project.takeaway}</p></section>
    <div className="case-note section-pad"><p>{project.note}</p>{project.slug === "travelideas" && <p>Photographie de Lisbonne : <a href="/credits/">voir les crédits visuels</a>.</p>}</div>
    <section className="next-project section-pad"><span className="eyebrow">Projet suivant</span><Link href={`/projets/${next.slug}`}><span>{next.name}</span><Arrow diagonal/></Link></section>
  </main><Footer compact/></>;
}
