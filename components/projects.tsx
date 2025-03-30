"use client";

import Image from "next/image";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

const projects = [
  {
    title: "MeetHub",
    description: "A real-time meeting application that enables seamless video conferencing and collaboration.",
    image: "/MeetHub.webp",
    technologies: ["React", "WebRTC", "Node.js", "Socket.io"],
    githubUrl: "https://github.com/rahulhingve/rtma",
    liveUrl: "https://meetshub.vercel.app",
  },
  {
    title: "SyncroCode",
    description: "A collaborative code editor platform for real-time coding and project management.",
    image: "/SyncroCode.webp",
    technologies: ["React", "Node.js", "Socket.io"],
    githubUrl: "https://github.com/rahulhingve/rtctd",
    liveUrl: "https://syncrocode.vercel.app",
  },
  {
    title: "Airdrop-SOL",
    description: "A web-based application for managing cryptocurrency wallets and airdrops.",
    image: "/AirdropSOL.webp",
    technologies: ["React", "Web3.js", "Solana"],
    githubUrl: "https://github.com/rahulhingve/Airdrop-Sol",
    liveUrl: "https://sol-dapp-zeta.vercel.app",
  },
  {
    title: "Web Crypto Wallet",
    description: "A secure cryptocurrency wallet management platform supporting multiple chains.",
    image: "/WebCryptoWallet.webp",
    technologies: ["React", "Web3.js", "Node.js"],
    githubUrl: "https://github.com/rahulhingve/web-crypto-wallet",
    liveUrl: "https://wallx-one.vercel.app",
  },
];

export function Projects({ id }: { id: string }) {
  return (
    <section id={id} className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading text-gray-900 dark:text-white">Featured Projects</h2>
          <p className="subheading text-gray-600 dark:text-gray-300">
            A collection of my recent work showcasing my expertise in web development, blockchain, and real-time applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="relative aspect-video overflow-hidden rounded-t-lg group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-secondary bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    <IconBrandGithub className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-primary bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600"
                  >
                    <IconExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


