"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";

interface StickyScrollRevealProps {
  children: React.ReactNode;
  className?: string;
}

export function StickyScrollReveal({ children, className }: StickyScrollRevealProps) {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = React.Children.count(children);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = Array.from({ length: cardLength }, (_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)","var(--slate-900)",
    "var(--slate-800)",
    "var(--slate-700)",
    "var(--slate-600)",
  ];

  return (
    <motion.div
      className={`h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 ${className || ''}`}
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {React.Children.map(children, (child, index) => (
            <div key={index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {child}
              </motion.h2>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          background: backgroundColors[activeCard % backgroundColors.length],
        }}
        className="hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden"
      ></motion.div>
    </motion.div>
  );
}

