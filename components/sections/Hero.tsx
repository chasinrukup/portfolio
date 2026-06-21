"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { site } from "@/content/site";
import StatusChip from "../ui/StatusChip";

const nameLetters = "Sachin Kurup".split("");

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.08]);
  const photoOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.15]);
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-12%"]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.04, delayChildren: 0.15 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: reduce ? 0 : 32, rotate: reduce ? 0 : 4 },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: reduce ? 0.001 : 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[110svh] overflow-hidden"
    >
      {/* Layer 1: photograph, treated */}
      <motion.div
        style={{ y: photoY, scale: photoScale, opacity: photoOpacity }}
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden
      >
        <div className="absolute inset-0">
          <Image
            src="/photos/portrait-hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            quality={85}
            className="object-cover object-[60%_30%] duotone"
            style={{ mixBlendMode: "luminosity" }}
          />
        </div>
        {/* Color wash to push the duotone toward terracotta */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(229,101,79,0.22) 0%, rgba(10,10,11,0) 45%, rgba(10,10,11,0.4) 100%)",
            mixBlendMode: "multiply",
          }}
        />
        {/* Halftone dot pattern overlay: makes it read like print */}
        <div className="halftone-dots-overlay" />
        {/* Vignette */}
        <div className="absolute inset-0 vignette" />
        {/* Top scrim so metadata strip is always legible */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-52 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,11,0.82) 0%, rgba(10,10,11,0.35) 60%, transparent 100%)",
          }}
        />
        {/* Bottom fade into next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/3"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(10,10,11,0.95) 90%, #0A0A0B 100%)",
          }}
        />
      </motion.div>

      {/* Layer 2: typography */}
      <motion.div
        style={{ y: nameY, opacity: nameOpacity }}
        className="relative z-10 flex min-h-[110svh] flex-col justify-between px-6 pb-12 pt-28 sm:px-10 sm:pb-16 sm:pt-32 lg:px-20"
      >
        {/* Top mono strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex flex-wrap items-center justify-between gap-y-3 font-mono text-[10px] uppercase tracking-[0.2em] text-paper"
        >
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            {site.metadataStrip.map((m, i) => (
              <span key={m} className="flex items-center gap-3">
                {i > 0 ? <span aria-hidden className="text-paper-dim">·</span> : null}
                <span>{m}</span>
              </span>
            ))}
          </div>
          <a
            href="#now"
            className="group inline-flex items-center gap-2 text-paper transition-colors hover:text-accent"
          >
            <StatusChip tone="live">Currently shipping</StatusChip>
          </a>
        </motion.div>

        {/* Main name + tagline */}
        <div className="mt-auto">
          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="font-serif text-display-xl font-medium leading-[0.88] tracking-tightest text-paper text-balance"
            aria-label="Sachin Kurup"
          >
            {nameLetters.map((ch, i) => (
              <motion.span
                key={`${ch}-${i}`}
                variants={letter}
                className="inline-block"
                aria-hidden
              >
                {ch === " " ? "\u00A0" : ch}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12"
          >
            <div className="col-span-12 lg:col-span-8">
              <p className="max-w-[24ch] font-serif text-[28px] italic leading-[1.18] text-paper text-balance sm:text-[36px] lg:text-[44px]">
                {site.tagline}
              </p>
              <p className="mt-4 max-w-[44ch] text-[15px] leading-relaxed text-paper-muted">
                {site.longTagline}
              </p>
            </div>

            <div className="col-span-12 flex flex-col gap-3 self-end lg:col-span-4 lg:items-end">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-paper-dim">
                <span aria-hidden className="h-px w-6 bg-paper-dim/50" />
                <span>Amrita Vishwa Vidyapeetham · B.Tech. CSE</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                <a
                  href="#work"
                  className="accent-underline font-mono text-xs uppercase tracking-[0.22em] text-paper"
                >
                  Selected work
                </a>
                <span aria-hidden className="text-paper-dim">/</span>
                <a
                  href="#publications"
                  className="accent-underline font-mono text-xs uppercase tracking-[0.22em] text-paper"
                >
                  Publications
                </a>
                <span aria-hidden className="text-paper-dim">/</span>
                <a
                  href="#contact"
                  className="accent-underline font-mono text-xs uppercase tracking-[0.22em] text-paper"
                >
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom hairline + scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-14 flex items-end justify-between border-t border-ink-hairline pt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-paper-dim"
        >
          <span>Vol. 01 · Issue 26.06</span>
          <a
            href="#about"
            className="group inline-flex items-center gap-2 text-paper-muted transition-colors hover:text-paper"
            aria-label="Scroll to about"
          >
            <span>Scroll</span>
            <span
              aria-hidden
              className="inline-block translate-y-0 transition-transform duration-500 group-hover:translate-y-1"
            >
              ↓
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
