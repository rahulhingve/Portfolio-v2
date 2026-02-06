"use client";

import { Icon } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-4 left-0 right-0 z-50 ${className}`}
    >
      <div className="container px-4">
        <motion.div
          className={`backdrop-blur-xl rounded-full shadow-lg border transition-all duration-300 ${isScrolled
              ? 'bg-gray-900/80 border-white/[0.08]'
              : 'bg-white/[0.03] border-white/[0.05]'
            }`}
        >
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center p-1.5">
            {navItems.map((navItem, idx) => {
              const isActive = activeSection === navItem.link.replace('#', '');
              return (
                <a
                  key={`link-${idx}`}
                  href={navItem.link}
                  onClick={(e) => handleScroll(e, navItem.link)}
                  className={`relative flex items-center px-4 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${isActive
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                    }`}
                >
                  {/* Active background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative flex items-center">
                    <navItem.icon className="w-4 h-4 mr-2" />
                    {navItem.name}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden p-1.5">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex items-center justify-center px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white rounded-full transition-all duration-200"
              whileTap={{ scale: 0.98 }}
            >
              <span>Menu</span>
              <motion.svg
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="w-4 h-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </motion.button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <nav className="flex flex-col p-2 pt-0 space-y-1">
                    {navItems.map((navItem, idx) => {
                      const isActive = activeSection === navItem.link.replace('#', '');
                      return (
                        <motion.a
                          key={`mobile-link-${idx}`}
                          href={navItem.link}
                          onClick={(e) => handleScroll(e, navItem.link)}
                          className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 ${isActive
                              ? 'text-white bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30'
                              : 'text-gray-400 hover:text-white hover:bg-white/[0.05]'
                            }`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <navItem.icon className="w-4 h-4 mr-3" />
                          {navItem.name}
                        </motion.a>
                      );
                    })}
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}