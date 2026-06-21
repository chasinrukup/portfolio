import clsx from "clsx";

type Tone = "accent" | "neutral" | "outline" | "live";

type Props = {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
};

const toneStyles: Record<Tone, string> = {
  accent: "bg-accent/12 text-accent border border-accent/25",
  neutral: "bg-ink-elevated text-paper-muted border border-ink-hairline",
  outline: "border border-ink-hairline text-paper-muted",
  live: "bg-accent/10 text-accent border border-accent/30",
};

export default function StatusChip({ children, tone = "neutral", className }: Props) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em]",
        toneStyles[tone],
        className
      )}
    >
      {tone === "live" ? (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
      ) : null}
      {children}
    </span>
  );
}
