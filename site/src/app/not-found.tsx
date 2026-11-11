import Link from "next/link";
import { Footer } from "@/components/footer";
import { Arrow } from "@/components/icons";

export default function NotFound() {
  return <><main id="main" className="page-intro not-found section-pad"><span className="eyebrow">404 / Un petit détour</span><h1>Cette idée n’a pas<br/>encore <em>pris forme.</em></h1><p>La page que vous cherchez n’existe pas ou a changé d’adresse.</p><Link href="/" className="text-link">Revenir à l’accueil<Arrow/></Link></main><Footer compact/></>;
}
