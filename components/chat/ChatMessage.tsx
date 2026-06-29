"use client";

import { Fragment, type ReactNode } from "react";
import type { UIMessage } from "ai";
import { isAnchorId } from "@/lib/chat/anchors";
import { scrollToSection } from "@/lib/chat/scroll";

const ANCHOR_LINK_RE = /\[([^\]]+)\]\(#([a-zA-Z0-9-]+)\)/g;

function getMessageText(message: UIMessage): string {
  return message.parts
    .map((part) => (part.type === "text" ? part.text : ""))
    .join("");
}

function renderWithAnchors(text: string, onJump: () => void) {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let key = 0;
  for (const match of text.matchAll(ANCHOR_LINK_RE)) {
    const [full, label, id] = match;
    const start = match.index ?? 0;
    if (start > cursor) nodes.push(text.slice(cursor, start));
    if (isAnchorId(id)) {
      nodes.push(
        <button
          key={`a-${key++}`}
          type="button"
          onClick={() => {
            scrollToSection(id);
            onJump();
          }}
          className="mx-0.5 inline-flex items-center gap-1 border border-accent/40 px-1.5 py-px font-mono text-[10px] uppercase tracking-[0.12em] text-accent transition-colors hover:border-accent hover:bg-accent/10"
        >
          <span aria-hidden>↳</span>
          {label}
        </button>
      );
    } else {
      nodes.push(full);
    }
    cursor = start + full.length;
  }
  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes.map((n, i) => <Fragment key={i}>{n}</Fragment>);
}

export function ChatMessage({
  message,
  isStreaming,
  onJump,
}: {
  message: UIMessage;
  isStreaming: boolean;
  onJump: () => void;
}) {
  const text = getMessageText(message);
  const isUser = message.role === "user";

  if (isUser) {
    return (
      <div className="flex justify-end">
        <div className="max-w-[85%] border-l border-accent/60 pl-3 font-mono text-[12px] uppercase tracking-[0.08em] text-paper">
          {text}
        </div>
      </div>
    );
  }

  return (
    <div className="font-serif text-[15px] leading-relaxed text-paper">
      {renderWithAnchors(text, onJump)}
      {isStreaming && (
        <span
          aria-hidden
          className="ml-1 inline-block h-[1em] w-[2px] -translate-y-px bg-accent align-middle"
          style={{ animation: "chat-cursor 1s steps(2) infinite" }}
        />
      )}
    </div>
  );
}
