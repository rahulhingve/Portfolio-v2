"use client";

import { motion } from "framer-motion";

export function BlurEffect() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed inset-0 z-[100] bg-[#0a0a0f] pointer-events-none"
    >
      {/* Gradient orbs that fade out */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 1.2, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"
        />
      </div>

      {/* Loading text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 1, 0], y: [10, 0, -10] }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-bold gradient-text"
          >
            Welcome
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}