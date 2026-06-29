"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChatPanel } from "./ChatPanel";

const CHAT_OPENED_KEY = "chat-opened";
const HINT_DELAY_MS = 3500;
const HINT_DURATION_MS = 9000;

export default function ChatLauncher() {
  const [open, setOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(CHAT_OPENED_KEY)) return;

    const showTimer = window.setTimeout(() => setShowHint(true), HINT_DELAY_MS);
    const hideTimer = window.setTimeout(() => {
      setShowHint(false);
    }, HINT_DELAY_MS + HINT_DURATION_MS);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  function openPanel() {
    setOpen(true);
    setShowHint(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(CHAT_OPENED_KEY, "1");
    }
  }

  return (
    <>
      <div
        className="fixed right-5 bottom-5 z-50 flex items-end gap-2 sm:right-6 sm:bottom-6"
        style={{ marginBottom: "env(safe-area-inset-bottom)" }}
      >
        <AnimatePresence>
          {showHint && !open && (
            <motion.button
              key="hint"
              type="button"
              onClick={openPanel}
              initial={{ opacity: 0, x: 8, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex max-w-[60vw] cursor-pointer items-center border border-accent/40 bg-ink-elevated/95 px-3 py-2 font-serif text-[12px] italic leading-tight text-paper shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-md sm:max-w-none sm:text-[13px]"
              aria-label="Open chat"
            >
              Curious about Sachin? Ask me.
              <span
                aria-hidden
                className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r border-t border-accent/40 bg-ink-elevated/95"
              />
            </motion.button>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={openPanel}
          aria-label="Ask a question about Sachin"
          aria-expanded={open}
          initial={reduce ? false : { scale: 0.92, opacity: 0 }}
          animate={reduce ? false : { scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          whileHover={reduce ? undefined : { scale: 1.04 }}
          whileTap={reduce ? undefined : { scale: 0.97 }}
          className="group relative flex items-center gap-2 border border-ink-hairline bg-ink-elevated/90 px-3.5 py-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-paper-muted backdrop-blur-md transition-colors hover:border-accent/60 hover:text-paper"
        >
          {/* Ping ring */}
          {!reduce && (
            <span
              aria-hidden
              className="pointer-events-none absolute left-[14px] top-1/2 block h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-accent"
              style={{ animation: "chat-ping 2.4s cubic-bezier(0, 0, 0.2, 1) infinite" }}
            />
          )}
          {/* Solid dot (with breathing glow) */}
          <span
            aria-hidden
            className="block h-1.5 w-1.5 rounded-full bg-accent"
            style={
              reduce
                ? undefined
                : {
                    boxShadow: "0 0 8px rgba(229,101,79,0.55)",
                    animation: "chat-breathe 2.4s ease-in-out infinite",
                  }
            }
          />
          <span>Ask</span>
          <span
            aria-hidden
            className="text-paper-dim transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </motion.button>
      </div>

      <ChatPanel open={open} onClose={() => setOpen(false)} />
    </>
  );
}
