'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles } from '@/components/sparkles'
import { StickyScroll } from '@/components/sticky-scroll'
import FloatingNav from '@/components/floating-navbar'
import ContactForm from '@/components/contact-form'
import { Card, CardContent } from '@/components/ui/card'

const skills = [
  {
    title: "Frontend Development",
    description: "Expertise in React, Next.js, and modern frontend frameworks. Building responsive and performant web applications with a focus on user experience."
  },
  {
    title: "Backend Development",
    description: "Experience with Node.js, Express, and database systems. Creating scalable APIs and server-side applications."
  },
  {
    title: "UI/UX Design",
    description: "Strong understanding of design principles and user experience. Creating intuitive interfaces that users love."
  },
  {
    title: "DevOps & Cloud",
    description: "Proficient in CI/CD, Docker, and cloud platforms like AWS and Vercel. Ensuring smooth deployment and operation of applications."
  }
]

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js and Stripe",
    link: "#"
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application with AI integration",
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website with smooth animations",
    link: "#"
  }
]

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100])

  useEffect(() => {
    document.body.style.backgroundColor = '#000'
    return () => {
      document.body.style.backgroundColor = ''
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section id="home" className="h-screen relative flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale, y }}
          className="text-center z-10"
        >
          <Sparkles className="inline-block">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Developer & Designer
            </h1>
          </Sparkles>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Creating beautiful and functional web experiences
          </p>
        </motion.div>
      </section>

      {/* About/Skills Section */}
      <section id="about" className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-16"
          >
            Skills & Expertise
          </motion.h2>
          <StickyScroll content={skills} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-16"
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-black/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <a
                      href={project.link}
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      Learn more →
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-16"
          >
            Get in Touch
          </motion.h2>
          <ContactForm />
        </div>
      </section>

      <FloatingNav />
    </div>
  )
}
