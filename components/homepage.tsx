"use client";

import { motion } from "framer-motion";
import { IconBrandGithub, IconBrandLinkedin, IconDownload, IconChevronDown } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "Web3 Enthusiast",
  "Blockchain Developer",
  "React Specialist",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

interface HomepageProps {
  id: string;
}

export function Homepage({ id }: HomepageProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(currentRole.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id={id} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="mesh-gradient" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: "2s" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: "4s" }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] text-sm font-medium text-purple-400 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-white">Hi, I&apos;m</span>
                <br />
                <span className="gradient-text">Rahul Hingve</span>
              </h1>

              <div className="h-12 flex items-center">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300">
                  {displayText}
                  <span className="inline-block w-0.5 h-8 bg-purple-400 ml-1 animate-pulse" />
                </span>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 max-w-xl leading-relaxed"
            >
              I specialize in building modern web applications with a focus on
              performance, accessibility, and user experience. Currently working
              on blockchain and real-time applications.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href="https://github.com/rahulhingve"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary group"
              >
                <IconBrandGithub className="w-5 h-5 mr-2 group-hover:text-purple-400 transition-colors" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-hingve-b5a582263"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary group"
              >
                <IconBrandLinkedin className="w-5 h-5 mr-2 group-hover:text-cyan-400 transition-colors" />
                LinkedIn
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-2">
              <a
                href="/RahulHingveUpdated2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
              >
                <IconDownload className="w-5 h-5 mr-2" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-purple-400 transition-colors font-medium flex items-center gap-1"
              >
                Contact Me
                <span className="text-xl">→</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glow effect behind image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-br from-purple-500/30 to-cyan-500/30 blur-3xl animate-pulse-glow" />
            </div>

            {/* Image container */}
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px]">
              {/* Animated border */}
              <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-br from-purple-500 via-cyan-400 to-purple-500 bg-[length:200%_200%] animate-gradient">
                <div className="w-full h-full rounded-full bg-gray-900" />
              </div>

              {/* Image */}
              <div className="absolute inset-[6px] rounded-full overflow-hidden">
                <Image
                  src="/rahul.jpg"
                  alt="Rahul Hingve"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Stats badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -right-4 bg-white/[0.05] backdrop-blur-xl border border-white/[0.1] rounded-2xl p-4 shadow-lg"
              >
                <div className="text-2xl font-bold gradient-text">10+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </motion.div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -top-4 -left-4 bg-white/[0.05] backdrop-blur-xl border border-white/[0.1] rounded-2xl p-4 shadow-lg"
              >
                <div className="text-2xl font-bold gradient-text">2+</div>
                <div className="text-sm text-gray-400">Years Exp</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToProjects}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-purple-400 transition-colors cursor-pointer"
      >
        <span className="text-sm font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <IconChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
}
