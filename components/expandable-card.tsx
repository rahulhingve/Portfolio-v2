'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface Project {
  title: string
  description: string
  details: string
  image: string
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce solution",
    details: "Built with Next.js, TypeScript, and Stripe integration",
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics and management platform",
    details: "Real-time data visualization and user management",
    image: "/placeholder.svg?height=200&width=400"
  }
]

export default function ExpandableCard() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <div className="grid gap-4">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className={`bg-card rounded-lg overflow-hidden cursor-pointer ${
            expandedIndex === index ? 'h-[400px]' : 'h-[100px]'
          }`}
          onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
          layout
          transition={{ duration: 0.5 }}
        >
          <div className="p-4 flex justify-between items-center">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <ChevronDown
              className={`transform transition-transform ${
                expandedIndex === index ? 'rotate-180' : ''
              }`}
            />
          </div>
          <motion.div
            className="p-4"
            initial={false}
            animate={{ opacity: expandedIndex === index ? 1 : 0 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-lg mb-4"
            />
            <p className="text-muted-foreground mb-2">{project.description}</p>
            <p>{project.details}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
