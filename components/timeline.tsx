"use client";

import { motion } from "framer-motion";
import { IconSchool, IconBriefcase, IconRocket } from "@tabler/icons-react";

const timelineItems = [
  {
    hash: "a1b2c3d",
    branch: "present",
    type: "current",
    title: "Full Stack & Web3 Development",
    subtitle: "Self-Taught Journey",
    period: "2024 - Present",
    description: "Building complete applications from scratch. Deep diving into blockchain development, DevOps practices, and creating products that solve real problems.",
    icon: IconRocket,
    tags: ["React", "Next.js", "Solana", "Web3"],
  },
  {
    hash: "d4e5f6g",
    branch: "main",
    type: "experience",
    title: "Frontend Developer Intern",
    subtitle: "MDP Infra",
    period: "Oct 2023 - Jan 2024",
    description: "Redesigned the employee attendance management system. Built interactive data visualizations and improved UX across the platform.",
    icon: IconBriefcase,
    tags: ["React", "Data Visualization", "UI/UX"],
  },
  {
    hash: "h7i8j9k",
    branch: "main",
    type: "education",
    title: "B.Tech in Computer Science",
    subtitle: "Technocrats Institute of Technology",
    period: "2019 - 2023",
    description: "Graduated with a strong foundation in computer science fundamentals, algorithms, and software engineering principles.",
    icon: IconSchool,
    tags: ["Computer Science", "Algorithms", "Data Structures"],
  },
];

export function Timeline({ id }: { id: string }) {
  return (
    <section id={id} className="section relative">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-sm text-purple-400">~/journey</span>
            <span className="text-gray-500">$</span>
            <span className="font-mono text-sm text-gray-300">git log --oneline --graph</span>
          </div>

          <h2 className="heading-lg text-white mb-4">Experience & Education</h2>
          <p className="text-gray-400 max-w-2xl">
            My journey as a developer, tracked like git commits. Each milestone represents
            growth, learning, and new skills acquired.
          </p>
        </motion.div>

        {/* Git log style timeline */}
        <div className="space-y-1">
          {timelineItems.map((item, index) => (
            <motion.div
              key={item.hash}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Git graph line */}
              <div className="flex gap-2 sm:gap-4">
                {/* Graph visual */}
                <div className="flex flex-col items-center w-6 sm:w-8 flex-shrink-0">
                  {/* Commit node */}
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
                    ${item.type === 'current'
                      ? 'border-green-400 bg-green-400/20'
                      : 'border-purple-400 bg-purple-400/20'
                    }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full
                      ${item.type === 'current' ? 'bg-green-400' : 'bg-purple-400'}`}
                    />
                  </div>

                  {/* Connecting line */}
                  {index < timelineItems.length - 1 && (
                    <div className="w-0.5 h-full min-h-[80px] bg-gradient-to-b from-purple-500/50 to-transparent" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  {/* Commit header */}
                  <div className="flex flex-wrap items-center gap-2 mb-3 font-mono text-xs">
                    <span className="text-yellow-400">{item.hash}</span>
                    <span className="text-gray-500">-</span>
                    <span className={`${item.type === 'current' ? 'text-green-400' : 'text-purple-400'}`}>
                      ({item.branch})
                    </span>
                    <span className="text-gray-400">{item.period}</span>
                    {item.type === 'current' && (
                      <span className="tag tag-green">HEAD</span>
                    )}
                  </div>

                  {/* Commit card */}
                  <div className="card-interactive cursor-default group-hover:border-purple-500/30">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`p-3 rounded-lg ${item.type === 'current'
                        ? 'bg-green-500/10 text-green-400'
                        : item.type === 'experience'
                          ? 'bg-purple-500/10 text-purple-400'
                          : 'bg-cyan-500/10 text-cyan-400'
                        }`}>
                        <item.icon className="w-5 h-5" />
                      </div>

                      {/* Details */}
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                        <p className="text-gray-400 text-sm mb-3">{item.subtitle}</p>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {item.tags.map((tag) => (
                            <span key={tag} className="tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Initial commit */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <div className="flex flex-col items-center w-8">
              <div className="w-3 h-3 rounded-full border border-gray-500 bg-gray-500/20" />
            </div>
            <div className="font-mono text-xs text-gray-500 pb-4">
              <span className="text-gray-600">...</span>
              <span className="ml-2">Initial commit: started learning to code</span>
            </div>
          </motion.div>
        </div>

        {/* Git status */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] font-mono text-sm"
        >
          <div className="text-gray-500">$ git status</div>
          <div className="mt-2 text-green-400">On branch: <span className="text-cyan-400">main</span></div>
          <div className="text-gray-400">Your branch is up to date with 'origin/main'</div>
          <div className="mt-2 text-yellow-400">Changes staged for next commit:</div>
          <div className="text-gray-500 pl-4">- learning more technologies</div>
          <div className="text-gray-500 pl-4">- building new projects</div>
          <div className="text-gray-500 pl-4">- growing as a developer</div>
        </motion.div>
      </div>
    </section>
  );
}
