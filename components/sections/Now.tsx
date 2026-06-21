import { nowItems } from "@/content/now";
import SectionHeader from "../ui/SectionHeader";
import RevealOnScroll from "../ui/RevealOnScroll";
import StatusChip from "../ui/StatusChip";

function isoToday() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

export default function Now() {
  return (
    <section
      id="now"
      className="relative px-6 py-28 sm:px-10 sm:py-36 lg:px-20"
    >
      <SectionHeader
        number="07"
        label="Now"
        kicker={`Updated · ${isoToday()}`}
      />

      <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-ink-hairline bg-ink-hairline md:grid-cols-3">
        {nowItems.map((n, i) => (
          <RevealOnScroll
            key={n.id}
            delay={Math.min(i * 0.07, 0.21)}
            className="bg-ink-base"
          >
            <article className="flex h-full flex-col gap-5 p-8">
              <div className="flex items-center justify-between">
                <StatusChip tone="live">{n.label}</StatusChip>
                <span className="font-mono text-[10px] text-paper-dim num-tab">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-serif text-2xl leading-snug text-paper text-balance">
                {n.title}
              </h3>
              <p className="text-pretty text-[14.5px] leading-relaxed text-paper-muted">
                {n.detail}
              </p>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
