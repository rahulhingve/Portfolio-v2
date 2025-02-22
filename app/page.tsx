"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { LoadingAnimation } from "@/components/loading-animation"
import { Homepage } from "@/components/homepage"
import { TimelineSection } from "@/components/timeline"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { FloatingDock } from "@/components/ui/floating-dock"
import { useState, useEffect } from "react"
import {
  IconHome,
  IconUser,
  IconBriefcase,
  IconMail,
  IconDownload,
} from "@tabler/icons-react"
import Link from "next/link"

const navItems = [
  {
    title: "Home",
    icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#home",
  },
  {
    title: "About",
    icon: <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#about",
  },
  {
    title: "Projects",
    icon: <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#projects",
  },
  {
    title: "Contact",
    icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#contact",
  },
  {
    title: "Resume",
    icon: <IconDownload className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "/RahulHingveResume.pdf",
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])


  const Noise = () => {
    return (
      <div
        className="absolute  w-full h-full   opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)] "
        style={{
          backgroundImage: "url(/noise.webp)",
          backgroundSize: "30%",
        }}
      ></div>
    );
  };
  return (
    <>
    
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingAnimation />
          </motion.div>
        ) : (
          <motion.div
            key="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative min-h-screen bg-slate-500 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
          >
            <Noise/>
            <div className="relative z-10">
              <header className="    py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                  <motion.h1 
                    className="text-2xl font-bold"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                  <Link href="https://rahulhingve.vercel.app/">  Rahul Hingve</Link>
                    
                  </motion.h1>
                  <ThemeSwitcher />
                </div>
              </header>
              <main>
                <Homepage   id="home" />
                <TimelineSection id="about" />
                <Projects id="projects"/>
                <Contact id="contact" />
              </main>
              <Footer />
            </div>
            <div className="fixed bottom-8 left-0 right-0 z-50 pointer-events-none">
              <div className="  md:flex h-16 gap-4 items-end  rounded-2xl  dark: px-4 pb-3 pointer-events-auto">
                <FloatingDock
                  items={navItems}
                  desktopClassName=""
                  mobileClassName="float-right"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
