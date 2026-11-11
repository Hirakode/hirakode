"use client";

import { createContext, useContext, useEffect, useState, useSyncExternalStore, type ReactNode } from "react";
import { usePathname } from "next/navigation";

const MotionContext = createContext({ paused: false, reduced: false, toggle: () => {} });
const subscribe = (callback: () => void) => {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
};
const getSnapshot = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function MotionProvider({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(false);
  const reduced = useSyncExternalStore(subscribe, getSnapshot, () => false);
  useEffect(() => {
    document.documentElement.dataset.motion = paused || reduced ? "off" : "on";
  }, [paused, reduced]);
  return <MotionContext.Provider value={{ paused, reduced, toggle: () => setPaused(value => !value) }}>{children}</MotionContext.Provider>;
}

export const useMotionPreference = () => useContext(MotionContext);

export function MotionToggle({ className = "" }: { className?: string }) {
  const { paused, reduced, toggle } = useMotionPreference();
  return <button type="button" onClick={toggle} disabled={reduced} aria-pressed={paused || reduced} className={`motion-toggle ${className}`}><span aria-hidden="true">{paused || reduced ? "▷" : "Ⅱ"}</span>{reduced ? "Mouvement réduit" : paused ? "Reprendre l’animation" : "Mettre en pause"}</button>;
}

export function PageMotion() {
  const pathname = usePathname();
  const { paused, reduced } = useMotionPreference();
  useEffect(() => {
    if (paused || reduced) return;
    let alive = true;
    let cleanup: (() => void) | undefined;
    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([{ gsap }, { ScrollTrigger }]) => {
      if (!alive) return;
      gsap.registerPlugin(ScrollTrigger);
      const context = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach(element => {
          gsap.fromTo(element, { y: 42, opacity: 0 }, { y: 0, opacity: 1, duration: 1.05, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 94%", once: true } });
        });
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach(element => {
          gsap.fromTo(element, { yPercent: -4 }, { yPercent: 4, ease: "none", scrollTrigger: { trigger: element.parentElement, start: "top bottom", end: "bottom top", scrub: 0.6 } });
        });
      });
      cleanup = () => context.revert();
    });
    return () => { alive = false; cleanup?.(); };
  }, [pathname, paused, reduced]);
  return null;
}
