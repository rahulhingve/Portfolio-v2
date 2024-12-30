'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Code2, Home, User, Mail, Menu, X } from 'lucide-react'

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setVisible(lastScrollY > currentScrollY || currentScrollY < 100)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const navItems = [
    { name: "Home", icon: Home, href: "#home" },
    { name: "About", icon: User, href: "#about" },
    { name: "Projects", icon: Code2, href: "#projects" },
    { name: "Contact", icon: Mail, href: "#contact" },
  ]

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
        >
          <motion.div
            className={cn(
              "bg-black/70 backdrop-blur-lg rounded-full p-2",
              isOpen ? "w-auto" : "w-[60px]"
            )}
            layout
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-2">
              <motion.button
                className="w-10 h-10 flex items-center justify-center text-white rounded-full hover:bg-white/20 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? <X /> : <Menu />}
              </motion.button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    className="flex items-center gap-2 px-2"
                  >
                    {navItems.map((item, idx) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        className="w-10 h-10 flex items-center justify-center text-white rounded-full hover:bg-white/20 transition-colors"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <item.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FloatingNav
