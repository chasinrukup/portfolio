"use client";

const SUGGESTIONS = [
  "Does he have production work experience?",
  "What's his research focus?",
  "Show me his publications",
  "Is he available for PhD interviews?",
];

export function SuggestedQuestions({ onPick }: { onPick: (q: string) => void }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper-dim">
        Try asking
      </p>
      <div className="flex flex-wrap gap-2">
        {SUGGESTIONS.map((q) => (
          <button
            key={q}
            type="button"
            onClick={() => onPick(q)}
            className="border border-ink-hairline px-3 py-2 text-left font-mono text-[11px] text-paper-muted transition-colors hover:border-accent/50 hover:text-paper"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
