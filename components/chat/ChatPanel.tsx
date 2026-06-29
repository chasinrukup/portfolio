"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useChat } from "@ai-sdk/react";
import { ChatMessage } from "./ChatMessage";
import { SuggestedQuestions } from "./SuggestedQuestions";

export function ChatPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const reduce = useReducedMotion();
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, error, stop } = useChat();
  const isBusy = status === "submitted" || status === "streaming";

  // Auto-scroll to bottom on new content.
  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, status]);

  // Escape closes; focus input when opened.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const t = window.setTimeout(() => inputRef.current?.focus(), 80);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
    };
  }, [open, onClose]);

  function submit(text: string) {
    const t = text.trim();
    if (!t || isBusy) return;
    sendMessage({ text: t });
    setInput("");
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    submit(input);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit(input);
    }
  }

  const panelMotion = reduce
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 16 },
      };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[60] bg-ink-base/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <motion.aside
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-label="Ask about Sachin"
            {...panelMotion}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 z-[70] mx-auto flex h-[85svh] max-h-[680px] w-full max-w-[440px] flex-col border border-ink-hairline bg-ink-elevated shadow-2xl sm:right-6 sm:bottom-24 sm:left-auto sm:mx-0 sm:h-[min(620px,75vh)]"
            style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
          >
            <header className="flex items-start justify-between border-b border-ink-hairline px-5 py-4">
              <div>
                <h2 className="font-serif text-lg text-paper">Ask about Sachin</h2>
                <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.22em] text-paper-dim">
                  cv · projects · publications
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-muted transition-colors hover:text-accent"
                aria-label="Close chat"
              >
                Close
              </button>
            </header>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-5">
              {messages.length === 0 ? (
                <div className="flex flex-col gap-5">
                  <p className="font-serif text-[15px] leading-relaxed text-paper-muted">
                    Hi — I&apos;m a bot here to answer any questions you have about Sachin.
                    Ask me anything you&apos;d like to know.
                  </p>
                  <SuggestedQuestions onPick={submit} />
                </div>
              ) : (
                <div className="flex flex-col gap-5">
                  {messages.map((m, i) => (
                    <ChatMessage
                      key={m.id}
                      message={m}
                      isStreaming={
                        i === messages.length - 1 &&
                        m.role === "assistant" &&
                        status === "streaming"
                      }
                      onJump={onClose}
                    />
                  ))}
                  {error && (
                    <p className="border border-accent/40 bg-accent/5 px-3 py-2 font-mono text-[11px] text-accent">
                      {/429|rate/i.test(error.message)
                        ? "The free model is rate-limited. Try again in a minute."
                        : "Something went wrong. Please try again."}
                    </p>
                  )}
                </div>
              )}
            </div>

            <form
              onSubmit={onSubmit}
              className="border-t border-ink-hairline px-5 py-4"
            >
              <div className="flex items-end gap-3">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  rows={1}
                  placeholder="Ask about his work, papers, projects…"
                  className="max-h-32 flex-1 resize-none bg-transparent font-sans text-[14px] text-paper placeholder:text-paper-dim focus:outline-none"
                />
                {isBusy ? (
                  <button
                    type="button"
                    onClick={() => stop()}
                    className="shrink-0 border border-ink-hairline px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-paper-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    Stop
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!input.trim()}
                    className="shrink-0 border border-accent/60 bg-accent/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-accent transition-colors enabled:hover:bg-accent enabled:hover:text-ink-base disabled:cursor-not-allowed disabled:border-ink-hairline disabled:bg-transparent disabled:text-paper-dim"
                  >
                    Send
                  </button>
                )}
              </div>
              <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.22em] text-paper-dim">
                Enter to send · Shift+Enter for newline
              </p>
            </form>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
