"use client"

import { Homepage } from "@/components/homepage"
import { Timeline } from "@/components/timeline"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Skills } from "@/components/skills"
import { FloatingNav } from "@/components/ui/floating-navbar"
import { IconHome, IconCode, IconTimeline, IconTools, IconMail } from "@tabler/icons-react"

const navItems = [
  { name: "Home", link: "#home", icon: IconHome },
  { name: "Projects", link: "#projects", icon: IconCode },
  { name: "Experience", link: "#timeline", icon: IconTimeline },
  { name: "Skills", link: "#skills", icon: IconTools },
  { name: "Contact", link: "#contact", icon: IconMail },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white relative">
      {/* Mesh gradient background */}
      <div className="mesh-gradient" />

      {/* Noise overlay for texture */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <FloatingNav navItems={navItems} />

      {/* Main content */}
      <div className="relative">
        <Homepage id="home" />
        <Projects id="projects" />
        <Timeline id="timeline" />
        <Skills id="skills" />
        <Contact id="contact" />
      </div>

      <Footer />
    </main>
  )
}
