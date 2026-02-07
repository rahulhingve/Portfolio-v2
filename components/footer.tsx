"use client";

import { motion } from "framer-motion";
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconArrowUp, IconHeart, IconTerminal2 } from "@tabler/icons-react";
import { useEffect } from "react";

const socialLinks = [
  { name: "GitHub", icon: IconBrandGithub, href: "https://github.com/rahulhingve" },
  { name: "LinkedIn", icon: IconBrandLinkedin, href: "https://www.linkedin.com/in/rahul-hingve-b5a582263/" },
  { name: "Twitter", icon: IconBrandTwitter, href: "https://x.com/rahulhingv97727" },
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#timeline" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Console easter egg
  useEffect(() => {
    console.log(`
%c╔═══════════════════════════════════════════════════════╗
║                                                       ║
║   Hey there, fellow developer! 👋                    ║
║                                                       ║
║   Since you're inspecting the code,                  ║
║   you might as well hire me.                         ║
║                                                       ║
║   📧 rahulpawar2001.rp@gmail.com                     ║
║   🐙 github.com/rahulhingve                          ║
║                                                       ║
║   Made with ☕ and countless Stack Overflow tabs.    ║
║                                                       ║
╚═══════════════════════════════════════════════════════╝
`, 'color: #a78bfa; font-family: monospace;');
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.05] bg-black/30">
      {/* Terminal prompt line at top */}
      <div className="border-b border-white/[0.05] py-3">
        <div className="container px-4 sm:px-6">
          <div className="font-mono text-xs text-gray-500 flex items-center gap-2 overflow-x-auto">
            <span className="text-green-400">rahul@portfolio</span>
            <span className="text-gray-500">:</span>
            <span className="text-cyan-400">~</span>
            <span className="text-gray-500">$</span>
            <span className="text-gray-400">exit 0</span>
            <span className="text-gray-500 ml-4">// Thanks for visiting!</span>
          </div>
        </div>
      </div>

      <div className="container px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <IconTerminal2 className="w-6 h-6 text-purple-400" />
              <span className="text-xl font-bold text-gradient">Rahul Hingve</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-mono">
              /* A passionate full-stack developer building the future of the web */
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05] text-gray-500 hover:text-purple-400 hover:border-purple-500/30 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-mono text-sm">
              <span className="text-gray-500">const</span> quickLinks <span className="text-gray-500">=</span>
            </h4>
            <ul className="space-y-2 font-mono text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-gray-500 hover:text-purple-400 transition-colors"
                  >
                    <span className="text-gray-600 mr-2">-</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-mono text-sm">
              <span className="text-gray-500">async function</span> getInTouch<span className="text-gray-500">()</span>
            </h4>
            <div className="font-mono text-sm text-gray-500 space-y-1">
              <p>&#123;</p>
              <p className="pl-4 text-gray-400">// Have a project in mind?</p>
              <p className="pl-4">
                <span className="token-keyword">return</span>{" "}
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="token-string hover:text-purple-400 transition-colors"
                >
                  {'"Let\'s connect"'}
                </a>;
              </p>
              <p>&#125;</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-[1px] bg-white/[0.05]" />

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm font-mono flex items-center gap-1">
            <span className="text-gray-500">// </span>
            © {currentYear} Made with <IconHeart className="w-4 h-4 text-red-500 inline mx-1" /> by Rahul Hingve
          </p>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-gray-500 hover:text-purple-400 hover:border-purple-500/30 transition-all font-mono text-sm"
          >
            <span>scrollTo(0)</span>
            <IconArrowUp className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Easter egg hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center mt-6"
        >
          <span className="text-gray-700 text-xs font-mono">
            Pro tip: Open DevTools for a surprise 🎁
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
