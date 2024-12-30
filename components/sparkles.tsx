'use client'

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn, generateRandomString } from "@/lib/utils"

interface SparklesProps {
  className?: string
  color?: string
  children?: React.ReactNode
}

export function Sparkles({ className, color = "#fff", children }: SparklesProps) {
  const [sparkles, setSparkles] = useState<Array<{ id: string; x: number; y: number; size: number }>>([])
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setTick(tick => tick + 1), 50)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const sparkleCount = 20
    const newSparkles = Array.from({ length: sparkleCount }).map(() => ({
      id: generateRandomString(10),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1
    }))
    setSparkles(newSparkles)
  }, [tick])

  return (
    <div className={cn("relative inline-block", className)}>
      {sparkles.map(sparkle => (
        <motion.div
          key={sparkle.id}
          className="absolute pointer-events-none"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: sparkle.size,
            height: sparkle.size,
            borderRadius: '50%',
            backgroundColor: color,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
          }}
        />
      ))}
      {children}
    </div>
  )
}
