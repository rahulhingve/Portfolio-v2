"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

const projects = [
  {
    title: "MeetHub",
    description: "A real-time meeting application that enables seamless video conferencing and collaboration with crystal-clear quality.",
    image: "/MeetHub.webp",
    technologies: ["React", "WebRTC", "Node.js", "Socket.io"],
    githubUrl: "https://github.com/rahulhingve/rtma",
    liveUrl: "https://meetshub.vercel.app",
    featured: true,
  },
  {
    title: "SyncroCode",
    description: "A collaborative code editor platform for real-time coding and project management.",
    image: "/SyncroCode.webp",
    technologies: ["React", "Node.js", "Socket.io"],
    githubUrl: "https://github.com/rahulhingve/rtctd",
    liveUrl: "https://syncrocode.vercel.app",
    featured: false,
  },
  {
    title: "Airdrop-SOL",
    description: "Web-based application for managing cryptocurrency wallets and airdrops on Solana.",
    image: "/AirdropSOL.webp",
    technologies: ["React", "Web3.js", "Solana"],
    githubUrl: "https://github.com/rahulhingve/Airdrop-Sol",
    liveUrl: "https://sol-dapp-zeta.vercel.app",
    featured: false,
  },
  {
    title: "Web Crypto Wallet",
    description: "A secure cryptocurrency wallet management platform supporting multiple chains.",
    image: "/WebCryptoWallet.webp",
    technologies: ["React", "Web3.js", "Node.js"],
    githubUrl: "https://github.com/rahulhingve/web-crypto-wallet",
    liveUrl: "https://wallx-one.vercel.app",
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  isFeatured?: boolean;
}

function ProjectCard({ project, isFeatured = false }: ProjectCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      className={`group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-purple-500/30 transition-all duration-500 ${isFeatured ? "md:col-span-2 md:row-span-2" : ""
        }`}
    >
      {/* Gradient border on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-purple-500/50 via-transparent to-cyan-500/50" />
      </div>

      {/* Image container */}
      <div className={`relative overflow-hidden ${isFeatured ? "aspect-[16/10]" : "aspect-video"}`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Floating action buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
          >
            <IconBrandGithub className="w-5 h-5 text-white" />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
          >
            <IconExternalLink className="w-5 h-5 text-white" />
          </a>
        </div>

        {/* Featured badge */}
        {isFeatured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className={`font-bold text-white mb-2 group-hover:text-purple-400 transition-colors ${isFeatured ? "text-2xl" : "text-xl"
          }`}>
          {project.title}
        </h3>
        <p className={`text-gray-400 mb-4 ${isFeatured ? "text-base" : "text-sm"} line-clamp-2`}>
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/[0.05] border border-white/[0.1] text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects({ id }: { id: string }) {
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id={id} className="section-padding relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent pointer-events-none" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-medium text-sm tracking-wider uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="heading">Featured Projects</h2>
          <p className="subheading">
            A collection of my recent work showcasing expertise in web development, blockchain, and real-time applications.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Featured project - spans 2 columns */}
          {featuredProject && (
            <ProjectCard
              project={featuredProject}
              index={0}
              isFeatured={true}
            />
          )}

          {/* Other projects */}
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index + 1}
            />
          ))}
        </motion.div>

        {/* View more link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/rahulhingve"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors font-medium"
          >
            View all projects on GitHub
            <IconExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
