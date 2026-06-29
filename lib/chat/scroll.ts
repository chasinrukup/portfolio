import type Lenis from "lenis";

export function scrollToSection(id: string) {
  if (typeof window === "undefined") return;
  const target = document.getElementById(id);
  if (!target) return;
  const lenis = (window as unknown as { lenis?: Lenis }).lenis;
  if (lenis) {
    lenis.scrollTo(target, { offset: -32 });
  } else {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
