"use client";

import { Icon } from "@tabler/icons-react";
import { useState } from "react";
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

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <div className={`fixed top-4 left-0 right-0 z-50 ${className}`}>
      <div className="container px-4">
        <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-full shadow-lg p-2 border border-white/20 dark:border-gray-800/20">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-2">
            {navItems.map((navItem, idx) => (
              <a
                key={`link-${idx}`}
                href={navItem.link}
                onClick={(e) => handleScroll(e, navItem.link)}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full hover:bg-white/40 dark:hover:bg-gray-800/40 backdrop-blur-md transition-all duration-200"
              >
                <navItem.icon className="w-5 h-5 mr-2" />
                <span>{navItem.name}</span>
              </a>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full hover:bg-white/40 dark:hover:bg-gray-800/40 backdrop-blur-md transition-all duration-200"
              whileTap={{ scale: 0.5 }}
            >
              <span>Menu</span>
            </motion.button>
            
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 dark:border-gray-800/20 p-2"
                >
                  <nav className="flex flex-col space-y-1">
                    {navItems.map((navItem, idx) => (
                      <motion.a
                        key={`mobile-link-${idx}`}
                        href={navItem.link}
                        onClick={(e) => handleScroll(e, navItem.link)}
                        className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-white/40 dark:hover:bg-gray-800/40 backdrop-blur-md transition-all duration-200"
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0 }}
                        whileHover={{ scale: 1 }}
                        whileTap={{ scale: 0.5 }}
                      >
                        <navItem.icon className="w-5 h-5 mr-2" />
                        <span>{navItem.name}</span>
                      </motion.a>
                    ))}
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
} 