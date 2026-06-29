"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import { currents } from "@/content/currents";
import SectionHeader from "../ui/SectionHeader";
import RevealOnScroll from "../ui/RevealOnScroll";

export default function ResearchCurrents() {
  const [openId, setOpenId] = useState<string | null>(null);
  const reduce = useReducedMotion();

  return (
    <section
      id="currents"
      className="relative px-6 py-20 sm:px-10 sm:py-24 lg:px-20"
    >
      <SectionHeader
        number="02"
        label="Research Currents"
        kicker="Open questions I'm chasing"
      />

      <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border-t border-l border-r border-ink-hairline bg-ink-hairline sm:grid-cols-2 lg:grid-cols-3">
        {currents.map((c, i) => {
          const isOpen = openId === c.id;
          return (
            <RevealOnScroll
              key={c.id}
              delay={Math.min(i * 0.05, 0.25)}
              className="bg-ink-base"
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : c.id)}
                aria-expanded={isOpen}
                aria-controls={`current-${c.id}`}
                className={clsx(
                  "group relative flex h-full w-full flex-col gap-5 p-7 text-left transition-colors duration-300 sm:p-8",
                  isOpen ? "bg-ink-elevated/60" : "hover:bg-ink-elevated/40"
                )}
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-xs text-paper-dim num-tab">
                    {c.number}
                  </span>
                  <span
                    aria-hidden
                    className={clsx(
                      "font-mono text-base transition-transform duration-500",
                      isOpen ? "rotate-45 text-accent" : "text-paper-dim"
                    )}
                  >
                    +
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-paper text-balance">
                  {c.title}
                </h3>
                <p className="max-w-prose text-pretty text-[15px] leading-relaxed text-paper-muted">
                  {c.shortLine}
                </p>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`current-${c.id}`}
                      key="open"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: reduce ? 0.001 : 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="mt-2 flex flex-col gap-4 border-t border-ink-hairline pt-5">
                        <div>
                          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper-dim">
                            Open questions
                          </div>
                          <ul className="mt-3 flex flex-col gap-3">
                            {c.openQuestions.map((q, idx) => (
                              <li
                                key={idx}
                                className="flex gap-3 text-[14.5px] leading-relaxed text-paper"
                              >
                                <span
                                  aria-hidden
                                  className="mt-2 inline-block h-px w-3 shrink-0 bg-accent"
                                />
                                <span>{q}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper-dim">
                            Related
                          </div>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {c.related.map((r) => (
                              <a
                                key={r.label}
                                href={`#${r.kind === "paper" ? "publications" : r.id}`}
                                className="rounded-sm border border-ink-hairline px-2 py-1 font-mono text-[11px] text-paper transition-colors hover:border-accent hover:text-accent"
                              >
                                {r.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </button>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
