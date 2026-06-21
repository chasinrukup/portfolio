type Props = {
  items: string[];
  ariaLabel?: string;
};

export default function Marquee({ items, ariaLabel = "Topics" }: Props) {
  const doubled = [...items, ...items];

  return (
    <section
      aria-label={ariaLabel}
      className="relative overflow-hidden border-y border-ink-hairline bg-ink-base/60 py-7"
    >
      <div
        className="marquee-track font-serif text-[clamp(2.25rem,5vw,4.5rem)] italic leading-none text-paper"
        aria-hidden
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center gap-12">
            <span>{item}</span>
            <span
              aria-hidden
              className="inline-block h-2 w-2 rounded-full bg-accent"
            />
          </span>
        ))}
      </div>
      <span className="sr-only">{items.join(", ")}</span>
    </section>
  );
}
