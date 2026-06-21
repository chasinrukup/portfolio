"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function SectionFocus({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    // 0 = section entering from below, 1 = section exiting to above
    offset: ["start end", "end start"],
  });

  // Bright while the section occupies the viewport; dim when entering or leaving
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.25, 0.75, 0.88, 1],
    [0.25, 0.25, 1, 1, 0.25, 0.25]
  );

  if (reduce) return <div>{children}</div>;

  return (
    <motion.div ref={ref} style={{ opacity }}>
      {children}
    </motion.div>
  );
}
