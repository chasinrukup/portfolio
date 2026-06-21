"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type Props = {
  number: string;
  kicker: string;
  text: string;
  attribution?: string;
};

export default function Interlude({ number, kicker, text, attribution }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Word-by-word reveal indexed by scroll progress
  const words = text.split(/\s+/);
  const stops = words.map((_, i) => i / Math.max(1, words.length - 1));

  return (
    <section
      ref={ref}
      className="relative flex min-h-[80svh] items-center px-6 py-24 sm:px-10 sm:py-36 lg:px-20"
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
            {words.map((w, i) => {
              const start = stops[i];
              const end = Math.min(1, start + 0.06);
              return (
                <WordReveal
                  key={i}
                  word={w}
                  start={start}
                  end={end}
                  scrollYProgress={scrollYProgress}
                  reduce={!!reduce}
                />
              );
            })}
          </p>

          {attribution ? (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10 font-mono text-[10px] uppercase tracking-[0.22em] text-paper-dim"
            >
              {attribution}
            </motion.p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function WordReveal({
  word,
  start,
  end,
  scrollYProgress,
  reduce,
}: {
  word: string;
  start: number;
  end: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduce: boolean;
}) {
  // Map [0..1] of the section's scroll into [0..1] of this word's reveal window.
  // We start the reveal a bit into the section so the text isn't already done when it enters.
  const offset = 0.25;
  const span = 0.55;
  const a = offset + start * span;
  const b = offset + end * span;

  const color = useTransform(
    scrollYProgress,
    [a, b],
    ["rgba(245,242,235,0.16)", "rgba(245,242,235,1)"]
  );

  if (reduce) {
    return <span className="text-paper">{word}{" "}</span>;
  }

  return (
    <motion.span style={{ color }} className="inline">
      {word}{" "}
    </motion.span>
  );
}
