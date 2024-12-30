'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LinkPreviewProps {
  href: string
  title: string
  description: string
  image: string
}

export default function LinkPreview({ href, title, description, image }: LinkPreviewProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={href}
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="border-b border-dotted">{title}</span>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-50 bottom-full left-0 mb-2 w-64 bg-card rounded-lg shadow-lg overflow-hidden"
          >
            <img src={image} alt={title} className="w-full h-32 object-cover" />
            <div className="p-4">
              <h4 className="font-bold mb-1">{title}</h4>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </a>
  )
}
