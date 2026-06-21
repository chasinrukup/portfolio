"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const sx = useSpring(x, { stiffness: 380, damping: 32, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 380, damping: 32, mass: 0.4 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: fine)");
    setEnabled(mq.matches);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      const interactive = !!target?.closest?.(
        "a, button, [role='button'], [data-cursor='hover']"
      );
      setHovering(interactive);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] mix-blend-difference"
        style={{ x: sx, y: sy }}
      >
        <motion.div
          className="rounded-full bg-paper"
          animate={{
            width: hovering ? 28 : 6,
            height: hovering ? 28 : 6,
            x: hovering ? -14 : -3,
            y: hovering ? -14 : -3,
            opacity: hovering ? 0.7 : 1,
          }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
        />
      </motion.div>
    </>
  );
}
