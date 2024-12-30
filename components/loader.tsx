'use client'

import { motion } from 'framer-motion'

export default function MultiStepLoader() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center">
      <div className="relative w-32 h-32">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border-4 border-primary rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 1.2, 1],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  )
}
