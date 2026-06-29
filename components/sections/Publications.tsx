import { publications, PubStatus } from "@/content/publications";
import SectionHeader from "../ui/SectionHeader";
import RevealOnScroll from "../ui/RevealOnScroll";
import StatusChip from "../ui/StatusChip";

const ORDER: PubStatus[] = ["Accepted", "Published", "Under Review", "In Preparation"];

const toneFor = (s: PubStatus) =>
  s === "Accepted" ? "accent" : s === "Published" ? "accent" : "neutral";

export default function Publications() {
  const grouped = ORDER.map((status) => ({
    status,
    items: publications.filter((p) => p.status === status),
  })).filter((g) => g.items.length > 0);

  return (
    <section
      id="publications"
      className="relative px-6 py-20 sm:px-10 sm:py-24 lg:px-20"
    >
      <SectionHeader
        number="04"
        label="Publications"
        kicker="ACL · IEEE · International conferences"
      />

      <div className="mt-16 flex flex-col gap-14">
        {grouped.map((g, gi) => (
          <div key={g.status}>
            <RevealOnScroll>
              <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-ink-hairline pb-3">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper">
                  {g.status}
                </h3>
                <span className="font-mono text-[10px] text-paper-dim num-tab">
                  {String(gi + 1).padStart(2, "0")}/{String(grouped.length).padStart(2, "0")}
                </span>
              </div>
            </RevealOnScroll>

            <ol className="flex flex-col">
              {g.items.map((p, i) => (
                <RevealOnScroll key={p.id} delay={i * 0.05}>
                  <li className="grid grid-cols-12 gap-x-6 gap-y-4 border-b border-ink-hairline py-7 last:border-b-0">
                    <div className="col-span-12 flex items-center gap-3 sm:col-span-2">
                      <span className="font-mono text-xs text-paper-dim num-tab">
                        {p.year}
                      </span>
                      <StatusChip tone={toneFor(p.status)}>{p.status}</StatusChip>
                    </div>

                    <div className="col-span-12 sm:col-span-10">
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper-muted">
                        {p.authors}
                      </p>
                      <h4 className="mt-2 font-serif text-xl leading-snug text-paper text-balance sm:text-2xl">
                        {p.title}
                      </h4>
                      <p className="mt-3 font-mono text-[12px] leading-relaxed text-paper-muted">
                        {p.venue}
                        {p.note ? <span className="text-paper-dim"> · {p.note}</span> : null}
                      </p>
                      {p.href ? (
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="accent-underline mt-3 inline-block font-mono text-[12px] text-paper"
                        >
                          DOI · {p.doi} ↗
                        </a>
                      ) : null}
                    </div>
                  </li>
                </RevealOnScroll>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}
