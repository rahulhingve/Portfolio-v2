'use client'

import React, { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface StickyScrollProps {
  content: {
    title: string
    description: string
  }[]
  contentClassName?: string
}

export function StickyScroll({
  content,
  contentClassName,
}: StickyScrollProps) {
  const [activeCard, setActiveCard] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"],
  })
  const cardLength = content.length

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const containerHeight = ref.current.clientHeight
      const scrollPosition = ref.current.scrollTop
      const cardHeight = containerHeight / cardLength
      const activeIndex = Math.floor(scrollPosition / cardHeight)
      setActiveCard(activeIndex)
    }

    ref.current?.addEventListener("scroll", handleScroll)
    return () => ref.current?.removeEventListener("scroll", handleScroll)
  }, [cardLength])

  return (
    <motion.div
      ref={ref}
      className="h-[30rem] overflow-y-auto relative space-y-8 scroll-smooth scrollbar-none"
    >
      {content.map((item, index) => (
        <div key={item.title + index} className="h-[30rem] flex items-center justify-center">
          <motion.div
            className={cn(
              "bg-black/5 backdrop-blur-lg rounded-lg p-6 w-full max-w-2xl",
              contentClassName,
              activeCard === index ? "border border-primary/50" : "border border-transparent opacity-50"
            )}
            style={{
              scale: useTransform(
                scrollYProgress,
                [index / cardLength, (index + 1) / cardLength],
                [0.8, 1]
              ),
            }}
          >
            <motion.h2 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {item.title}
            </motion.h2>
            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {item.description}
            </motion.p>
          </motion.div>
        </div>
      ))}
    </motion.div>
  )
}
