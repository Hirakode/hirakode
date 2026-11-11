import type { MetadataRoute } from "next";
import { projects } from "@/lib/content";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/projets", "/expertises", "/studio", "/contact", ...projects.map(project => `/projets/${project.slug}`)].map(path => ({ url: `https://hirakode.com${path}/` }));
}
