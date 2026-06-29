"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type Props = {
  number: string;
  kicker: string;
  text: string;
};

function splitIntoClauses(text: string): string[] {
  // Split on sentence-ending punctuation OR commas, keeping the delimiter on the preceding clause.
  // Result is an array of "lines" that read naturally one at a time.
  const parts = text.split(/(?<=[,.])\s+/);
  return parts.filter((p) => p.trim().length > 0);
}

export default function Interlude({ number, kicker, text }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const clauses = splitIntoClauses(text);
  const count = clauses.length;

  return (
    <section
      ref={ref}
      className="relative flex min-h-[80svh] items-center px-6 py-20 sm:px-10 sm:py-24 lg:px-20"
      aria-label={kicker}
    >
      <div className="grid w-full grid-cols-12 gap-x-8">
        <div className="col-span-12 lg:col-span-2">
          <div className="flex items-baseline gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-paper-dim">
            <span className="num-tab">{number}</span>
            <span>{kicker}</span>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-10">
          <p
            className="font-serif text-[clamp(2rem,5.5vw,4.5rem)] leading-[1.05] tracking-[-0.02em] text-paper-muted text-balance"
            aria-label={text}
          >
            {clauses.map((clause, i) => (
              <ClauseReveal
                key={i}
                clause={clause}
                index={i}
                count={count}
                scrollYProgress={scrollYProgress}
                reduce={!!reduce}
                isLast={i === count - 1}
              />
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}

function ClauseReveal({
  clause,
  index,
  count,
  scrollYProgress,
  reduce,
  isLast,
}: {
  clause: string;
  index: number;
  count: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduce: boolean;
  isLast: boolean;
}) {
  // Reveal each clause across [0.2, 0.75] of the section's scroll progress,
  // staggered so each line lights up as the reader reaches it.
  const offset = 0.2;
  const span = 0.55;
  const slice = span / count;
  const a = offset + index * slice;
  const b = a + slice * 0.7; // overlap a little for smoothness

  const color = useTransform(
    scrollYProgress,
    [a, Math.min(1, b)],
    ["rgba(245,242,235,0.18)", "rgba(245,242,235,1)"]
  );

  if (reduce) {
    return (
      <span className="text-paper">
        {clause}
        {isLast ? "" : " "}
      </span>
    );
  }

  return (
    <motion.span style={{ color }} className="inline">
      {clause}
      {isLast ? "" : " "}
    </motion.span>
  );
}
