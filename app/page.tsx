"use client"

import { Homepage } from "@/components/homepage"
import { Timeline } from "@/components/timeline"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Skills } from "@/components/skills"
import { FloatingNav } from "@/components/ui/floating-navbar"
import { BlurEffect } from "@/components/ui/blur-effect"
import { IconHome, IconCode, IconTimeline, IconTools, IconMail } from "@tabler/icons-react"
import { useState, useEffect } from "react"

const navItems = [
  { name: "Home", link: "#home", icon: IconHome },
  { name: "Projects", link: "#projects", icon: IconCode },
  { name: "Experience", link: "#timeline", icon: IconTimeline },
  { name: "Skills", link: "#skills", icon: IconTools },
  { name: "Contact", link: "#contact", icon: IconMail },
];

export default function Home() {
  const [showBlur, setShowBlur] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBlur(false);
    }, 800); // Match the duration of the blur effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {showBlur && <BlurEffect />}
      <FloatingNav navItems={navItems} />
      
      <div className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10" />
        
        {/* Main content */}
        <div className="relative">
          <Homepage id="home" />
          <Timeline id="timeline" />
          <Skills id="skills" />
          <Projects id="projects" />
          <Contact id="contact" />
        </div>
      </div>

      <Footer />
    </main>
  )
}
