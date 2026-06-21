"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { milestones } from "@/content/timeline";
import SectionHeader from "../ui/SectionHeader";

const kindLabel: Record<(typeof milestones)[number]["kind"], string> = {
  education: "Education",
  service: "Service",
  research: "Research",
  publication: "Publication",
  deployment: "Deployment",
  milestone: "Milestone",
};

function MilestoneCard({
  m,
  align,
  reduce,
}: {
  m: (typeof milestones)[number];
  align: "left" | "right";
  reduce: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 20, x: reduce ? 0 : align === "right" ? -14 : 14 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
      className={`group relative border border-ink-hairline bg-ink-elevated/50 p-6 transition-colors duration-500 hover:border-accent/30 hover:bg-ink-elevated ${
        align === "right" ? "lg:text-right" : "lg:text-left"
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
      {m.photo && (
        <figure className="relative mb-5 -mx-6 -mt-6">
          <div className="relative aspect-[3/2] w-full overflow-hidden bg-ink-elevated">
            <Image
              src={m.photo.src}
              alt={m.photo.alt}
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              quality={85}
              className="object-cover duotone"
              style={{
                objectPosition: m.photo.objectPosition ?? "50% 50%",
                mixBlendMode: "luminosity",
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(229,101,79,0.18) 0%, rgba(10,10,11,0.15) 55%, rgba(10,10,11,0.55) 100%)",
                mixBlendMode: "multiply",
              }}
            />
            <div className="halftone-dots-overlay" style={{ opacity: 0.45 }} />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 border-b border-ink-hairline"
            />
          </div>
          <figcaption
            className={`mt-2 px-6 font-mono text-[9px] uppercase tracking-[0.22em] text-paper-dim ${
              align === "right" ? "lg:text-right" : "lg:text-left"
            }`}
          >
            {m.photo.caption}
          </figcaption>
        </figure>
      )}
      <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 ${align === "right" ? "lg:justify-end" : ""}`}>
        <h3 className="font-serif text-lg text-paper sm:text-xl">{m.title}</h3>
        <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent/70">
          {kindLabel[m.kind]}
        </span>
      </div>
      <p className="mt-3 text-[14px] leading-relaxed text-paper-muted">{m.context}</p>
    </motion.div>
  );
}

export default function Journey() {
  const reduce = useReducedMotion();

  return (
    <section id="journey" className="relative px-6 py-28 sm:px-10 sm:py-36 lg:px-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 70% at 50% 55%, rgba(229,101,79,0.04) 0%, transparent 70%)",
        }}
      />

      <SectionHeader number="05" label="Journey" kicker="2018 → 2026" />

      <ol className="relative mt-16 flex flex-col">
        {milestones.map((m, i) => {
          const isLeft = i % 2 === 0;
          return (
            <li
              key={m.id}
              className="grid grid-cols-1 items-center gap-3 py-5 lg:grid-cols-12 lg:gap-x-0 lg:gap-y-4 lg:py-5"
            >
              {/* Mobile: year above card (hidden on lg) */}
              <div className="flex items-center gap-3 lg:hidden">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper-dim num-tab">
                  {m.year}
                </span>
                <span className="h-px flex-1 bg-ink-hairline" />
              </div>

              {/* Left card slot */}
              <div className="lg:col-span-5">
                {isLeft ? (
                  <MilestoneCard m={m} align="right" reduce={!!reduce} />
                ) : (
                  <div className="hidden lg:block" />
                )}
              </div>

              {/* Center: year + dot + connector (desktop only) */}
              <div className="hidden lg:col-span-2 lg:flex lg:flex-col lg:items-center lg:gap-2 lg:py-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-paper-dim">
                  {m.year}
                </span>
                <motion.div
                  initial={{ scale: reduce ? 1 : 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                  className="relative"
                >
                  <span className="block h-3 w-3 rounded-full bg-accent" />
                  <motion.span
                    initial={{ scale: 1, opacity: 0.6 }}
                    animate={{ scale: 2.4, opacity: 0 }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: i * 0.18,
                    }}
                    className="absolute inset-0 rounded-full bg-accent"
                  />
                </motion.div>
                {i < milestones.length - 1 && (
                  <div className="mt-2 h-10 w-px bg-ink-hairline" />
                )}
              </div>

              {/* Right card slot */}
              <div className="lg:col-span-5">
                {!isLeft ? (
                  <MilestoneCard m={m} align="left" reduce={!!reduce} />
                ) : (
                  <div className="hidden lg:block" />
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
