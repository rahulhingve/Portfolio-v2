'use client'

import { motion } from 'framer-motion'
import { Home, User, Briefcase, Mail, Menu } from 'lucide-react'
import { useState } from 'react'

const menuItems = [
  { icon: Home, label: 'Home' },
  { icon: User, label: 'About' },
  { icon: Briefcase, label: 'Projects' },
  { icon: Mail, label: 'Contact' }
]

export default function FloatingDock() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm rounded-full p-2"
      animate={{ width: isOpen ? 'auto' : '60px' }}
    >
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 flex items-center justify-center text-white rounded-full hover:bg-white/20"
        >
          <Menu />
        </button>
        {isOpen && (
          <div className="flex items-center gap-2 px-2">
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={`#${item.label.toLowerCase()}`}
                className="w-10 h-10 flex items-center justify-center text-white rounded-full hover:bg-white/20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
