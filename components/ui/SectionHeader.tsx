import RevealOnScroll from "./RevealOnScroll";

type Props = {
  number: string;
  label: string;
  kicker?: string;
};

export default function SectionHeader({ number, label, kicker }: Props) {
  return (
    <RevealOnScroll>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-paper-dim num-tab">
            {number}
          </span>
          <h2 className="font-serif text-display-md text-paper">{label}</h2>
        </div>
        {kicker ? (
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper-muted">
            {kicker}
          </span>
        ) : null}
      </div>
    </RevealOnScroll>
  );
}
