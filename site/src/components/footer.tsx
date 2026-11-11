import Link from "next/link";
import { contactEmail } from "@/lib/content";
import { Arrow, BrandMark } from "./icons";

export function Footer({ compact = false }: { compact?: boolean }) {
  return <footer className={`site-footer ${compact ? "footer-compact" : ""}`}>
    {!compact && <div className="footer-invitation" data-reveal><span className="eyebrow">La suite commence avec vous</span><Link href="/contact" className="footer-title">Une idée en tête ?<br/><em>Faisons-la exister.</em><Arrow diagonal/></Link></div>}
    <div className="footer-meta"><a href={`mailto:${contactEmail}`} className="text-link">{contactEmail}<Arrow diagonal/></a><div className="footer-links"><Link href="/projets">Projets</Link><Link href="/expertises">Expertises</Link><Link href="/studio">Studio</Link><Link href="/contact">Contact</Link></div></div>
    <div className="footer-signature" aria-hidden="true"><BrandMark/><span>Hira<span>kode</span></span></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Hirakode</span><span>De l’intelligence à l’impact.</span><a href="#top">Retour en haut ↑</a></div>
  </footer>;
}
