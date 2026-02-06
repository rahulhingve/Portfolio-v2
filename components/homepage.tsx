"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { RoleTypeWriter } from "./ui/type-writer";
import { TerminalWindow } from "./ui/terminal-window";
import { IconBrandGithub, IconBrandLinkedin, IconDownload, IconChevronDown, IconTerminal2 } from "@tabler/icons-react";
import Image from "next/image";

const roles = [
  "Full Stack Developer",
  "Web3 Builder",
  "Blockchain Developer",
  "React Specialist",
];

const bootSequence = [
  { text: "> Initializing system...", delay: 300 },
  { text: "> Loading developer profile...", delay: 200 },
  { text: "> Mounting projects...", delay: 200 },
  { text: "> Ready.", delay: 400 },
];

interface HomepageProps {
  id: string;
}

export function Homepage({ id }: HomepageProps) {
  const [bootComplete, setBootComplete] = useState(false);
  const [bootStep, setBootStep] = useState(0);
  const [showContent, setShowContent] = useState(false);

  // Boot sequence animation
  useEffect(() => {
    if (bootStep < bootSequence.length) {
      const timer = setTimeout(() => {
        setBootStep(prev => prev + 1);
      }, bootSequence[bootStep].delay + 600);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setBootComplete(true);
        setTimeout(() => setShowContent(true), 300);
      }, 500);
    }
  }, [bootStep]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id={id} className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 bg-gradient-radial" />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-3xl opacity-30"
        style={{ background: "hsl(262 83% 73% / 0.3)" }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20"
        style={{ background: "hsl(185 94% 50% / 0.3)" }}
        animate={{
          x: [0, -30, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Terminal & Content */}
          <div className="space-y-8">
            {/* Boot Sequence Terminal */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: bootComplete ? 0 : 1, height: bootComplete ? 0 : "auto" }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <TerminalWindow title="boot.sh" className="max-w-md">
                <div className="text-green-400 space-y-1">
                  {bootSequence.slice(0, bootStep).map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="font-mono text-sm"
                    >
                      {line.text}
                    </motion.div>
                  ))}
                  {bootStep < bootSequence.length && (
                    <span className="cursor-blink" />
                  )}
                </div>
              </TerminalWindow>
            </motion.div>

            {/* Main Content - Appears after boot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: showContent ? 1 : 0,
                y: showContent ? 0 : 20
              }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Status Badge */}
              <div className="flex items-center gap-2">
                <span className="status-dot status-online" />
                <span className="text-sm text-gray-400 font-medium">Available for opportunities</span>
              </div>

              {/* Name & Title */}
              <div className="space-y-3">
                <h1 className="heading-xl">
                  <span className="text-white">Hi, I'm </span>
                  <span className="text-gradient">Rahul</span>
                </h1>

                <div className="flex items-center gap-3 text-xl md:text-2xl lg:text-3xl font-semibold text-gray-400">
                  <IconTerminal2 className="w-6 h-6 md:w-8 md:h-8 text-green-400" />
                  <RoleTypeWriter
                    roles={roles}
                    typingSpeed={70}
                    deletingSpeed={35}
                    pauseDuration={2500}
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                I build modern web applications and decentralized solutions.
                Self-taught developer passionate about <span className="text-purple-400">Web3</span>,
                {" "}<span className="text-cyan-400">real-time systems</span>, and creating
                products that matter.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://github.com/rahulhingve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <IconBrandGithub className="w-5 h-5" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/rahul-hingve-b5a582263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <IconBrandLinkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a
                  href="/RahulHingveUpdated2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <IconDownload className="w-5 h-5" />
                  Resume
                </a>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-2xl font-bold text-gradient">10+</div>
                  <div className="text-sm text-gray-500">Projects Built</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gradient">2+</div>
                  <div className="text-sm text-gray-500">Years Learning</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gradient">12+</div>
                  <div className="text-sm text-gray-500">Technologies</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Profile Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: showContent ? 1 : 0,
              scale: showContent ? 1 : 0.95
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <TerminalWindow title="profile.tsx" className="w-full">
              <div className="space-y-3">
                {/* Code-style profile */}
                <div className="flex items-start gap-4">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden border-2 border-purple-500/50 flex-shrink-0">
                    <Image
                      src="/rahul.jpg"
                      alt="Rahul Hingve"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="font-mono text-sm space-y-1">
                    <div>
                      <span className="token-keyword">const</span>{" "}
                      <span className="token-variable">developer</span>{" "}
                      <span className="text-white">=</span>{" "}
                      <span className="text-white">{"{"}</span>
                    </div>
                    <div className="pl-4">
                      <span className="token-property">name</span>
                      <span className="text-white">:</span>{" "}
                      <span className="token-string">"Rahul Hingve"</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="token-property">location</span>
                      <span className="text-white">:</span>{" "}
                      <span className="token-string">"Bhopal, India"</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="token-property">focus</span>
                      <span className="text-white">:</span>{" "}
                      <span className="token-string">"Web3 & Full Stack"</span>
                    </div>
                    <div>
                      <span className="text-white">{"};"}</span>
                    </div>
                  </div>
                </div>

                {/* Skills array */}
                <div className="font-mono text-sm pt-2 border-t border-white/10">
                  <div className="pt-3">
                    <span className="token-keyword">const</span>{" "}
                    <span className="token-variable">skills</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-white">[</span>
                  </div>
                  <div className="pl-4 flex flex-wrap gap-2 py-2">
                    {["React", "Next.js", "TypeScript", "Node.js", "Solana", "Web3.js"].map((skill) => (
                      <span key={skill} className="tag tag-purple">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div>
                    <span className="text-white">];</span>
                  </div>
                </div>

                {/* Current focus */}
                <div className="font-mono text-sm pt-2 border-t border-white/10">
                  <div className="pt-3 text-gray-500">
                    <span className="token-comment">// Currently building amazing things</span>
                  </div>
                  <div className="prompt pt-2">
                    <span className="prompt-symbol">$</span>
                    <span className="text-white">npm run build-the-future</span>
                    <span className="cursor-blink" />
                  </div>
                </div>
              </div>
            </TerminalWindow>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl" />
            <div className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToProjects}
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-purple-400 transition-colors cursor-pointer group"
      >
        <span className="text-xs font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <IconChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
