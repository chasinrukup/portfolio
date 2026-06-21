"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import { Project } from "@/content/projects";
import StatusChip from "./StatusChip";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  const toneFor = (s: Project["status"]) => {
    if (s === "Production") return "live" as const;
    if (s === "Patent Pending") return "accent" as const;
    if (s === "Published") return "accent" as const;
    return "neutral" as const;
  };

  return (
    <motion.article
      id={project.id}
      initial={{ opacity: 0, y: reduce ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduce ? 0.001 : 0.65,
        ease: [0.22, 1, 0.36, 1],
        delay: Math.min(index * 0.04, 0.2),
      }}
      className={clsx(
        "group relative border-t border-ink-hairline py-8 transition-colors duration-300",
        "hover:bg-ink-elevated/40"
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`${project.id}-details`}
        className="flex w-full flex-col gap-5 text-left sm:flex-row sm:gap-10"
      >
        <div className="flex shrink-0 items-start gap-4 sm:w-44">
          <span className="font-mono text-xs text-paper-dim num-tab">{project.number}</span>
          <div className="hidden sm:block">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-dim num-tab">
              {project.period}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <h3 className="font-serif text-2xl text-paper sm:text-3xl">
              {project.title}
            </h3>
            <span className="font-mono text-xs text-paper-muted">
              {project.org}
            </span>
          </div>

          <p className="mt-3 max-w-prose text-pretty text-[15px] leading-relaxed text-paper-muted">
            {project.problem}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <StatusChip tone={toneFor(project.status)}>{project.status}</StatusChip>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-dim sm:hidden">
              {project.period}
            </span>
            <span
              className={clsx(
                "ml-auto inline-flex shrink-0 items-center gap-1 font-mono text-[10px] uppercase tracking-[0.2em]",
                open ? "text-accent" : "text-paper-dim"
              )}
            >
              {open ? "Close" : "Read case study"}
              <span
                aria-hidden
                className={clsx(
                  "inline-block transition-transform duration-300",
                  open ? "rotate-45" : "rotate-0"
                )}
              >
                +
              </span>
            </span>
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={`${project.id}-details`}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0.001 : 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-[11rem_1fr] sm:pl-0">
              <DetailLabel>Approach</DetailLabel>
              <DetailText>{project.approach}</DetailText>

              <DetailLabel>Outcome</DetailLabel>
              <DetailText>{project.outcome}</DetailText>

              <DetailLabel>Role</DetailLabel>
              <DetailText>{project.role}</DetailText>

              <DetailLabel>Stack</DetailLabel>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-sm border border-ink-hairline px-2 py-1 font-mono text-[11px] text-paper-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {project.links?.length ? (
                <>
                  <DetailLabel>Links</DetailLabel>
                  <div className="flex flex-col gap-1.5">
                    {project.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="accent-underline w-fit font-mono text-xs text-paper"
                      >
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                </>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.article>
  );
}

function DetailLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper-dim">
      {children}
    </div>
  );
}

function DetailText({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-prose text-pretty text-[15px] leading-relaxed text-paper">
      {children}
    </p>
  );
}
