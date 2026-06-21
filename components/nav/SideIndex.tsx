"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

const ITEMS = [
  { id: "hero", number: "00", label: "Index" },
  { id: "about", number: "01", label: "Position" },
  { id: "currents", number: "02", label: "Currents" },
  { id: "work", number: "03", label: "Work" },
  { id: "publications", number: "04", label: "Publications" },
  { id: "journey", number: "05", label: "Journey" },
  { id: "toolkit", number: "06", label: "Toolkit" },
  { id: "now", number: "07", label: "Now" },
  { id: "contact", number: "08", label: "Contact" },
];

export default function SideIndex() {
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = ITEMS.map((it) => document.getElementById(it.id)).filter(
      (el): el is HTMLElement => !!el
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.1, 0.4, 0.8] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section index"
      className="pointer-events-none fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ul className="pointer-events-auto flex flex-col gap-2.5">
        {ITEMS.map((it) => {
          const isActive = active === it.id;
          return (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                style={{ textShadow: "0 0 14px rgba(10,10,11,1), 0 0 4px rgba(10,10,11,0.9)" }}
                className={clsx(
                  "group flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-300",
                  isActive ? "text-paper" : "text-paper-muted hover:text-paper"
                )}
                aria-current={isActive ? "true" : undefined}
              >
                <span
                  aria-hidden
                  className={clsx(
                    "block h-px transition-all duration-500",
                    isActive ? "w-8 bg-accent" : "w-3 bg-paper-muted/50 group-hover:w-5"
                  )}
                  style={{ filter: "drop-shadow(0 0 3px rgba(10,10,11,0.9))" }}
                />
                <span className="num-tab">{it.number}</span>
                <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {it.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
