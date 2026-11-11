import Link from "next/link";
import { projects } from "@/lib/content";
import { Arrow } from "./icons";
import { ProjectVisual } from "./project-visual";

export function ProjectList() {
  return <div className="project-list">{projects.map((project, index) => <article key={project.slug} className="project-item" data-reveal><Link href={`/projets/${project.slug}`} className="project-link" aria-label={`Découvrir le projet ${project.name}`}><ProjectVisual project={project}/><div className="project-meta"><div className="project-title"><span className="project-number">0{index + 1}</span><h3>{project.name}</h3></div><p>{project.shortCategory}</p><span className="round-arrow"><Arrow diagonal/></span></div><div className="project-category">{project.category}</div></Link></article>)}</div>;
}
