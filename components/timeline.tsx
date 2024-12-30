'use client'

import { motion } from 'framer-motion'

interface TimelineItem {
  year: string
  title: string
  description: string
}

const timelineItems: TimelineItem[] = [
  {
    year: "2024",
    title: "Senior Developer",
    description: "Leading development of enterprise applications"
  },
  {
    year: "2022",
    title: "Full Stack Developer",
    description: "Building scalable web applications"
  },
  {
    year: "2020",
    title: "Frontend Developer",
    description: "Creating responsive user interfaces"
  }
]

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
      {timelineItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative pl-10 mb-10"
        >
          <div className="absolute left-2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 mt-1.5" />
          <div className="font-bold text-xl">{item.year}</div>
          <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
          <p className="text-muted-foreground">{item.description}</p>
        </motion.div>
      ))}
    </div>
  )
}
