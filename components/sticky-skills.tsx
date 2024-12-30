'use client'

import { useScroll, motion, useTransform } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  "React & Next.js",
  "TypeScript",
  "Node.js",
  "TailwindCSS",
  "GraphQL",
  "AWS"
]

export default function StickySkills() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <div ref={containerRef} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen flex items-center">
        <div className="grid grid-cols-2 gap-4 w-full max-w-4xl mx-auto p-4">
          {skills.map((skill, i) => {
            const progress = useTransform(
              scrollYProgress,
              [i / skills.length, (i + 1) / skills.length],
              [0, 1]
            )

            return (
              <motion.div
                key={skill}
                style={{ opacity: progress }}
                className="bg-card p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold">{skill}</h3>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
