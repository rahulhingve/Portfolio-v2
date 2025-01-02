"use client";

import { Tabs } from "./ui/tabs";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Project Alpha",
    description: "A revolutionary AI-powered task management system",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://project-alpha.com",
  },
  {
    title: "Beta App",
    description: "Mobile application for seamless team collaboration",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://beta-app.com",
  },
  {
    title: "Gamma Platform",
    description: "Cloud-based data analytics and visualization platform",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://gamma-platform.com",
  },
];

export function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 w-full bg-white dark:bg-neutral-950"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <Tabs
          tabs={projects.map((project) => ({
            title: project.title,
            value: project.title,
            content: (
              <div className="p-8">
                <div className="max-w-3xl mx-auto">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="rounded-lg mb-4 w-full h-[300px] object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ),
          }))}
        />
      </div>
    </motion.section>
  );
}

