"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { contactEmail, navigation } from "@/lib/content";
import { Arrow, Wordmark } from "./icons";
import { MotionToggle } from "./motion";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (open) {
      const trigger = menuButton.current;
      const originalOverflow = document.body.style.overflow;
      element.showModal();
      document.body.style.overflow = "hidden";
      return () => { element.close(); document.body.style.overflow = originalOverflow; trigger?.focus({ preventScroll: true }); };
    }
  }, [open]);

  return <>
    <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
      <button ref={menuButton} className="menu-trigger" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open} aria-controls="main-menu"><span className="menu-lines" aria-hidden="true"><i/><i/></span><span>Menu</span></button>
      <Link href="/" className="brand-link" aria-label="Hirakode — accueil"><Wordmark/></Link>
      <Link href="/contact" className="header-contact">Parlons de votre projet <Arrow diagonal/></Link>
    </header>
    <dialog ref={dialog} id="main-menu" aria-label="Navigation principale" className="menu-dialog" onCancel={event => { event.preventDefault(); setOpen(false); }} onClick={event => { if (event.target === event.currentTarget) setOpen(false); }} onKeyDown={event => {
      if (event.key !== "Tab") return;
      const targets = Array.from(event.currentTarget.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")).filter(element => element.getClientRects().length > 0);
      const first = targets[0];
      const last = targets.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }}>
      <div className="menu-inner">
        <div className="menu-top"><Link href="/" aria-label="Hirakode — accueil" onClick={() => setOpen(false)}><Wordmark/></Link><button className="menu-close" onClick={() => setOpen(false)} autoFocus>Fermer <span aria-hidden="true">×</span></button></div>
        <div className="menu-content"><nav>{navigation.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={pathname === item.href ? "page" : undefined}><span className="menu-index">{item.number}</span><span>{item.label}</span><Arrow diagonal/></Link>)}</nav><aside><span className="eyebrow">Des idées à l’usage.</span><p>Du code, de l’intelligence.<br/>Et beaucoup d’humain.</p><a className="text-link" href={`mailto:${contactEmail}`}>{contactEmail}<Arrow diagonal/></a><MotionToggle/></aside></div>
        <div className="menu-bottom"><span>Studio indépendant · France</span><span>Développement & transformation IA</span></div>
      </div>
    </dialog>
  </>;
}
