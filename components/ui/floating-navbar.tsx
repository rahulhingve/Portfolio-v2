"use client";

import { Icon } from "@tabler/icons-react";

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
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`fixed top-4 left-0 right-0 z-50 ${className}`}>
      <div className="container">
        <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-full shadow-lg p-2 border border-white/20 dark:border-gray-800/20">
          <nav className="flex items-center justify-center space-x-2">
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
        </div>
      </div>
    </div>
  );
} 