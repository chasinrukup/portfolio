"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number; // kept for API compatibility, unused in scroll-driven mode
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "header" | "footer";
};

export default function RevealOnScroll({
  children,
  y = 14,
  className,
  as = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const Component = motion[as] as typeof motion.div;

  // Track the element relative to the viewport:
  // progress 0 → element's top just entered from below (bottom of viewport)
  // progress 1 → element's bottom just exited to above (top of viewport)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 10%"],
  });

  // Spotlight: dim at edges of travel, bright in center zone
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    reduce ? [1, 1, 1, 1] : [0.12, 1, 1, 0.12]
  );

  // Slide in from below on entry only
  const slideY = useTransform(
    scrollYProgress,
    [0, 0.2],
    reduce ? [0, 0] : [y, 0]
  );

  return (
    <Component
      // @ts-expect-error – motion polymorphic ref typing
      ref={ref}
      style={{ opacity, y: slideY }}
      className={className}
    >
      {children}
    </Component>
  );
}
