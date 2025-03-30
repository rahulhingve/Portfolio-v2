"use client";

import { motion } from "framer-motion";

export function BlurEffect() {
  return (
    <motion.div
      initial={{ 
        backdropFilter: "blur(20px)",
        opacity: 1,
        scale: 1.2,
        transformOrigin: "center center"
      }}
      animate={{ 
        backdropFilter: "blur(0px)",
        opacity: 0,
        scale: 1,
        transformOrigin: "center center"
      }}
      transition={{
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="fixed inset-0 pointer-events-none z-50 bg-white/20 dark:bg-gray-900/20"
    />
  );
} 