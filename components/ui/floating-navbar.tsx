"use client";

import { Icon } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NavItem {
  name: string;
  link: string;
  icon: Icon;
}

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

export function FloatingNav({ navItems, className = "" }: FloatingNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.map(item => item.link.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className={`fixed top-4 left-0 right-0 z-50 ${className}`}
    >
      <div className="container px-4">
        <div
          className={`backdrop-blur-xl rounded-xl border transition-all duration-300 ${isScrolled
              ? 'bg-gray-900/90 border-white/[0.1] shadow-lg'
              : 'bg-white/[0.03] border-white/[0.05]'
            }`}
        >
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-between p-2">
            {/* Logo/Prompt */}
            <div className="flex items-center gap-2 px-3 font-mono text-sm">
              <span className="text-green-400">~</span>
              <span className="text-gray-500">/</span>
              <span className="text-cyan-400">rahul</span>
            </div>

            {/* Nav Items */}
            <div className="flex items-center gap-1">
              {navItems.map((navItem, idx) => {
                const isActive = activeSection === navItem.link.replace('#', '');
                return (
                  <button
                    key={`link-${idx}`}
                    onClick={() => scrollToSection(navItem.link)}
                    className={`relative flex items-center px-4 py-2 text-sm font-mono rounded-lg transition-all duration-200 ${isActive
                        ? 'text-purple-400 bg-purple-500/10'
                        : 'text-gray-400 hover:text-white hover:bg-white/[0.05]'
                      }`}
                  >
                    <navItem.icon className="w-4 h-4 mr-2" />
                    {navItem.name}
                    {isActive && (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-purple-500 rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Status */}
            <div className="flex items-center gap-2 px-3">
              <span className="status-dot status-online" />
              <span className="text-xs text-gray-500 font-mono">online</span>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            {/* Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-mono text-gray-300"
              type="button"
            >
              <div className="flex items-center gap-2">
                <span className="text-green-400">~</span>
                <span className="text-gray-500">/</span>
                <span className="text-cyan-400">{activeSection}</span>
              </div>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="border-t border-white/[0.05] px-2 pb-2">
                {navItems.map((navItem, idx) => {
                  const isActive = activeSection === navItem.link.replace('#', '');
                  const IconComponent = navItem.icon;
                  return (
                    <button
                      key={`mobile-link-${idx}`}
                      type="button"
                      onClick={() => scrollToSection(navItem.link)}
                      className={`flex items-center w-full px-4 py-3 text-sm font-mono rounded-lg transition-all duration-200 mt-1 ${isActive
                          ? 'text-purple-400 bg-purple-500/10'
                          : 'text-gray-400 active:bg-white/[0.1]'
                        }`}
                    >
                      <IconComponent className="w-4 h-4 mr-3" />
                      {navItem.name}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}