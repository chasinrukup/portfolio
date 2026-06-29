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
    [0, 0.06, 0.14, 0.86, 0.94, 1],
    [0.45, 0.7, 1, 1, 0.7, 0.45]
  );

  if (reduce) return <div>{children}</div>;

  return (
    <motion.div ref={ref} style={{ opacity }}>
      {children}
    </motion.div>
  );
}
