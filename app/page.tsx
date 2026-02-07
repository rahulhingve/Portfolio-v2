"use client";

import { Homepage } from "@/components/homepage";
import { Timeline } from "@/components/timeline";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Skills } from "@/components/skills";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconCode, IconTimeline, IconTools, IconMail } from "@tabler/icons-react";

const navItems = [
  { name: "home", link: "#home", icon: IconHome },
  { name: "projects", link: "#projects", icon: IconCode },
  { name: "journey", link: "#timeline", icon: IconTimeline },
  { name: "skills", link: "#skills", icon: IconTools },
  { name: "contact", link: "#contact", icon: IconMail },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[hsl(240,15%,4%)] text-white relative">
      {/* Background grid pattern */}
      <div className="fixed inset-0 bg-grid pointer-events-none" />

      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-gradient-radial pointer-events-none" />

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
  );
}
