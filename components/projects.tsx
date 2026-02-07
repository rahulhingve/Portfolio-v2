"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { IconBrandGithub, IconExternalLink, IconFolder, IconFolderOpen, IconFile, IconChevronRight } from "@tabler/icons-react";

const projects = [
  {
    title: "MeetHub",
    slug: "meethub",
    description: "Real-time video conferencing platform with seamless collaboration features.",
    longDescription: "Built a complete video conferencing solution from scratch. Features include HD video calls, screen sharing, chat, and room management. Handles WebRTC connections and signaling for peer-to-peer communication.",
    image: "/MeetHub.webp",
    technologies: ["React", "WebRTC", "Node.js", "Socket.io"],
    githubUrl: "https://github.com/rahulhingve/rtma",
    liveUrl: "https://meetshub.vercel.app",
    category: "real-time",
    featured: true,
  },
  {
    title: "SyncroCode",
    slug: "syncrocode",
    description: "Collaborative code editor for real-time pair programming.",
    longDescription: "A platform where developers can code together in real-time. Features syntax highlighting, multi-cursor support, and instant synchronization across participants.",
    image: "/SyncroCode.webp",
    technologies: ["React", "Node.js", "Socket.io", "Monaco"],
    githubUrl: "https://github.com/rahulhingve/rtctd",
    liveUrl: "https://syncrocode.vercel.app",
    category: "real-time",
    featured: false,
  },
  {
    title: "Airdrop-SOL",
    slug: "airdrop-sol",
    description: "Solana airdrop tool for developers and testing.",
    longDescription: "Developer-focused tool for requesting SOL airdrops on devnet/testnet. Clean interface for wallet management and transaction tracking on the Solana blockchain.",
    image: "/AirdropSOL.webp",
    technologies: ["React", "Solana", "Web3.js"],
    githubUrl: "https://github.com/rahulhingve/Airdrop-Sol",
    liveUrl: "https://sol-dapp-zeta.vercel.app",
    category: "web3",
    featured: false,
  },
  {
    title: "Web Crypto Wallet",
    slug: "web-crypto-wallet",
    description: "Multi-chain cryptocurrency wallet interface.",
    longDescription: "Secure wallet management for multiple blockchains. Generate HD wallets, manage keys, send transactions, and track balances across different networks.",
    image: "/WebCryptoWallet.webp",
    technologies: ["React", "Web3.js", "Ethers", "Node.js"],
    githubUrl: "https://github.com/rahulhingve/web-crypto-wallet",
    liveUrl: "https://wallx-one.vercel.app",
    category: "web3",
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

interface ProjectCardProps {
  project: typeof projects[0];
  isExpanded: boolean;
  onToggle: () => void;
}

function ProjectCard({ project, isExpanded, onToggle }: ProjectCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="group"
    >
      {/* File row - clickable */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/[0.03] transition-colors text-left"
      >
        <motion.div
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <IconChevronRight className="w-4 h-4 text-gray-500" />
        </motion.div>

        {isExpanded ? (
          <IconFolderOpen className="w-5 h-5 text-purple-400" />
        ) : (
          <IconFolder className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
        )}

        <span className="font-mono text-sm text-gray-300 group-hover:text-white transition-colors">
          {project.slug}/
        </span>

        {project.featured && (
          <span className="tag tag-yellow text-xs ml-auto">featured</span>
        )}
      </button>

      {/* Expanded content */}
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="ml-4 sm:ml-8 pl-3 sm:pl-4 border-l border-white/[0.06] py-4 space-y-4">
          {/* Preview image */}
          <div className="relative aspect-video rounded-lg overflow-hidden border border-white/[0.06]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
              <h3 className="text-white font-semibold">{project.title}</h3>
              <div className="flex gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <IconBrandGithub className="w-4 h-4 text-white" />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <IconExternalLink className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* README content */}
          <div className="bg-white/[0.02] rounded-lg border border-white/[0.06] p-4">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/[0.06]">
              <IconFile className="w-4 h-4 text-gray-400" />
              <span className="font-mono text-xs text-gray-400">README.md</span>
            </div>

            <div className="space-y-3 text-sm">
              <p className="text-gray-300">{project.longDescription}</p>

              <div>
                <span className="text-gray-500 font-mono text-xs">## Tech Stack</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag tag-cyan">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* File structure hint */}
          <div className="font-mono text-xs text-gray-500 space-y-1">
            <div className="flex items-center gap-2">
              <IconFile className="w-3 h-3" />
              <span>package.json</span>
            </div>
            <div className="flex items-center gap-2">
              <IconFolder className="w-3 h-3" />
              <span>src/</span>
            </div>
            <div className="flex items-center gap-2">
              <IconFile className="w-3 h-3" />
              <span>tsconfig.json</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects({ id }: { id: string }) {
  const [expandedProject, setExpandedProject] = useState<string | null>("meethub");

  const handleToggle = (slug: string) => {
    setExpandedProject(expandedProject === slug ? null : slug);
  };

  return (
    <section id={id} className="section relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />

      <div className="container relative px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-sm text-purple-400">~/projects</span>
            <span className="text-gray-500">$</span>
            <span className="font-mono text-sm text-gray-300">ls -la</span>
          </div>

          <h2 className="heading-lg text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl">
            A collection of applications I've built. Each project represents a problem solved,
            a skill learned, and code I'm proud of.
          </p>
        </motion.div>

        {/* File Browser */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/[0.02] rounded-xl border border-white/[0.06] overflow-hidden"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="font-mono text-xs text-gray-400 ml-2">~/rahul/projects</span>
          </div>

          {/* Project list */}
          <div className="p-4">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                isExpanded={expandedProject === project.slug}
                onToggle={() => handleToggle(project.slug)}
              />
            ))}
          </div>
        </motion.div>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href="https://github.com/rahulhingve"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors font-mono text-sm"
          >
            <span>$ open github.com/rahulhingve</span>
            <IconExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
