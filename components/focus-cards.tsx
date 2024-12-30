'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const cards = [
  {
    title: "Frontend Development",
    description: "Building responsive and accessible web applications"
  },
  {
    title: "Backend Development",
    description: "Creating scalable server-side solutions"
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive user experiences"
  }
]

export default function FocusCards() {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null)

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="group relative bg-card rounded-lg p-6 hover:bg-accent transition-colors"
          onMouseEnter={() => setFocusedIndex(index)}
          onMouseLeave={() => setFocusedIndex(null)}
          animate={{
            scale: focusedIndex === index ? 1.05 : 1
          }}
        >
          <h3 className="text-xl font-bold mb-2">{card.title}</h3>
          <p className="text-muted-foreground">{card.description}</p>
        </motion.div>
      ))}
    </div>
  )
}
