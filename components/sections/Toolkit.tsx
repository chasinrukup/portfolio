import clsx from "clsx";
import { toolkit } from "@/content/toolkit";
import SectionHeader from "../ui/SectionHeader";
import RevealOnScroll from "../ui/RevealOnScroll";

const tierDots = (tier: "core" | "proficient" | "working") => {
  if (tier === "core") return 3;
  if (tier === "proficient") return 2;
  return 1;
};

const tierLabel = (tier: "core" | "proficient" | "working") =>
  tier === "core" ? "Core" : tier === "proficient" ? "Proficient" : "Working";

export default function Toolkit() {
  return (
    <section
      id="toolkit"
      className="relative px-6 py-28 sm:px-10 sm:py-36 lg:px-20"
    >
      <SectionHeader number="06" label="Toolkit" kicker="Capability matrix" />

      <RevealOnScroll>
        <p className="mt-6 max-w-prose text-[14px] leading-relaxed text-paper-muted">
          Grouped by domain rather than ranked by score. Tiers are honest:{" "}
          <span className="text-paper">Core</span> means I reach for it without
          thinking, <span className="text-paper">Proficient</span> means I've shipped
          with it, <span className="text-paper">Working</span> means I can be
          productive but still learning.
        </p>
      </RevealOnScroll>

      <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {toolkit.map((group, gi) => (
          <RevealOnScroll key={group.id} delay={Math.min(gi * 0.05, 0.25)}>
            <div>
              <div className="mb-5 flex items-baseline justify-between border-b border-ink-hairline pb-2">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper">
                  {group.label}
                </h3>
                <span className="font-mono text-[10px] text-paper-dim num-tab">
                  {String(gi + 1).padStart(2, "0")}
                </span>
              </div>
              <ul className="flex flex-col gap-2.5">
                {group.skills.map((s) => (
                  <li
                    key={s.name}
                    className="flex items-center justify-between gap-3"
                  >
                    <span className="text-[15px] text-paper">{s.name}</span>
                    <span
                      className="flex shrink-0 items-center gap-1"
                      aria-label={`${tierLabel(s.tier)} level`}
                    >
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          aria-hidden
                          className={clsx(
                            "h-1 w-3 rounded-sm transition-colors",
                            i < tierDots(s.tier) ? "bg-accent" : "bg-ink-hairline"
                          )}
                        />
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
