type Props = {
  manifesto: string;
  topics: string[];
};

export default function TopicIndex({ manifesto, topics }: Props) {
  return (
    <section
      aria-label="Research statement and topic index"
      className="relative border-y border-ink-hairline bg-ink-elevated/40 px-6 py-20 sm:px-10 sm:py-24 lg:px-20"
    >
      <div className="grid grid-cols-12 gap-x-8 gap-y-14">
        {/* Manifesto */}
        <div className="col-span-12 lg:col-span-7">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
            <span aria-hidden className="h-px w-6 bg-accent" />
            <span>Statement</span>
          </div>
          <p className="mt-6 font-serif text-[clamp(1.75rem,3.6vw,3.25rem)] italic leading-[1.16] text-paper text-balance">
            {manifesto}
          </p>
        </div>

        {/* Numbered index */}
        <div className="col-span-12 lg:col-span-4 lg:col-start-9">
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-paper-dim">
              Research index
            </span>
            <span className="font-mono text-[10px] tracking-[0.22em] text-paper-dim num-tab">
              01 — {topics.length.toString().padStart(2, "0")}
            </span>
          </div>
          <ol className="mt-6 flex flex-col">
            {topics.map((t, i) => (
              <li
                key={t}
                className="group flex items-baseline gap-4 border-t border-ink-hairline py-3 last:border-b"
              >
                <span className="num-tab w-6 font-mono text-[10px] tracking-[0.22em] text-paper-dim transition-colors group-hover:text-accent">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <span className="flex-1 font-serif text-[15px] italic leading-tight text-paper">
                  {t}
                </span>
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-accent/30 transition-colors group-hover:bg-accent"
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
