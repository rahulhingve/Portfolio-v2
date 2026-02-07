"use client";

import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs,
  SiExpress, SiMongodb, SiPostgresql, SiPrisma, SiDocker,
  SiGit, SiSolana, SiVite
} from "react-icons/si";
import { IconDatabase, IconBrandReact, IconServer, IconCoin, IconTool } from "@tabler/icons-react";

const skillCategories = [
  {
    name: "frontend",
    icon: IconBrandReact,
    color: "cyan",
    version: "^5.0.0",
    dependencies: [
      { name: "react", icon: SiReact, proficiency: "expert" },
      { name: "next.js", icon: SiNextdotjs, proficiency: "expert" },
      { name: "typescript", icon: SiTypescript, proficiency: "advanced" },
      { name: "tailwindcss", icon: SiTailwindcss, proficiency: "expert" },
    ],
  },
  {
    name: "backend",
    icon: IconServer,
    color: "green",
    version: "^4.0.0",
    dependencies: [
      { name: "node.js", icon: SiNodedotjs, proficiency: "advanced" },
      { name: "express", icon: SiExpress, proficiency: "advanced" },
      { name: "prisma", icon: SiPrisma, proficiency: "intermediate" },
    ],
  },
  {
    name: "database",
    icon: IconDatabase,
    color: "yellow",
    version: "^3.0.0",
    dependencies: [
      { name: "postgresql", icon: SiPostgresql, proficiency: "intermediate" },
      { name: "mongodb", icon: SiMongodb, proficiency: "advanced" },
    ],
  },
  {
    name: "web3",
    icon: IconCoin,
    color: "purple",
    version: "^2.0.0",
    dependencies: [
      { name: "solana", icon: SiSolana, proficiency: "intermediate" },
      { name: "web3.js", proficiency: "intermediate" },
      { name: "ethers", proficiency: "learning" },
    ],
  },
  {
    name: "devtools",
    icon: IconTool,
    color: "pink",
    version: "^1.0.0",
    dependencies: [
      { name: "git", icon: SiGit, proficiency: "advanced" },
      { name: "docker", icon: SiDocker, proficiency: "intermediate" },
      { name: "vite", icon: SiVite, proficiency: "advanced" },
    ],
  },
];

const proficiencyColors: Record<string, string> = {
  expert: "text-green-400",
  advanced: "text-cyan-400",
  intermediate: "text-yellow-400",
  learning: "text-purple-400",
};

export function Skills({ id }: { id: string }) {
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
            <span className="font-mono text-sm text-purple-400">~/skills</span>
            <span className="text-gray-500">$</span>
            <span className="font-mono text-sm text-gray-300">cat package.json</span>
          </div>

          <h2 className="heading-lg text-white mb-4">Skills & Technologies</h2>
          <p className="text-gray-400 max-w-2xl">
            My technical toolkit, organized like a package.json. These are the technologies
            I use to build products.
          </p>
        </motion.div>

        {/* Package.json style display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
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
            <span className="font-mono text-xs text-gray-400 ml-2">package.json</span>
          </div>

          {/* JSON content */}
          <div className="p-6 font-mono text-sm">
            <div className="text-gray-400">{"{"}</div>

            {/* Name and version */}
            <div className="pl-4">
              <span className="token-property">"name"</span>
              <span className="text-gray-400">: </span>
              <span className="token-string">"rahul-hingve"</span>
              <span className="text-gray-400">,</span>
            </div>
            <div className="pl-4">
              <span className="token-property">"version"</span>
              <span className="text-gray-400">: </span>
              <span className="token-string">"2024.1.0"</span>
              <span className="text-gray-400">,</span>
            </div>
            <div className="pl-4 mb-4">
              <span className="token-property">"description"</span>
              <span className="text-gray-400">: </span>
              <span className="token-string">"Full Stack Developer & Web3 Builder"</span>
              <span className="text-gray-400">,</span>
            </div>

            {/* Dependencies */}
            <div className="pl-4">
              <span className="token-property">"dependencies"</span>
              <span className="text-gray-400">: {"{"}</span>
            </div>

            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                className="pl-8 py-3 border-l-2 border-white/[0.05] ml-4 my-2 hover:border-purple-500/50 transition-colors"
              >
                {/* Category header */}
                <div className="flex items-center gap-2 mb-2">
                  <category.icon className={`w-4 h-4 ${category.color === 'cyan' ? 'text-cyan-400' : category.color === 'green' ? 'text-green-400' : category.color === 'yellow' ? 'text-yellow-400' : category.color === 'purple' ? 'text-purple-400' : 'text-pink-400'}`} />
                  <span className="token-comment">// {category.name}</span>
                </div>

                {/* Skills in category */}
                <div className="space-y-1">
                  {category.dependencies.map((skill, skillIndex) => (
                    <div key={skill.name} className="flex items-center gap-2 group">
                      <span className="token-string">{`"${skill.name}"`}</span>
                      <span className="text-gray-400">:</span>
                      <span className="token-string">{`"${category.version}"`}</span>
                      {skillIndex < category.dependencies.length - 1 && <span className="text-gray-400">,</span>}

                      {/* Proficiency badge on hover */}
                      <span className={`ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs ${proficiencyColors[skill.proficiency]}`}>
                        {`// ${skill.proficiency}`}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            <div className="pl-4">
              <span className="text-gray-400">{"}"}</span>
              <span className="text-gray-400">,</span>
            </div>

            {/* Scripts section */}
            <div className="pl-4 mt-4">
              <span className="token-property">"scripts"</span>
              <span className="text-gray-400">: {"{"}</span>
            </div>
            <div className="pl-8">
              <span className="token-string">"build"</span>
              <span className="text-gray-400">: </span>
              <span className="token-string">"create amazing products"</span>
              <span className="text-gray-400">,</span>
            </div>
            <div className="pl-8">
              <span className="token-string">"learn"</span>
              <span className="text-gray-400">: </span>
              <span className="token-string">"never stop improving"</span>
              <span className="text-gray-400">,</span>
            </div>
            <div className="pl-8">
              <span className="token-string">"collaborate"</span>
              <span className="text-gray-400">: </span>
              <span className="token-string">"work with great people"</span>
            </div>
            <div className="pl-4">
              <span className="text-gray-400">{"}"}</span>
            </div>

            <div className="text-gray-400">{"}"}</div>
          </div>
        </motion.div>

        {/* Currently learning */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] font-mono text-sm"
        >
          <span className="text-gray-500">$ npm install --save-dev </span>
          <span className="text-purple-400">rust</span>
          <span className="text-gray-500"> </span>
          <span className="text-cyan-400">go</span>
          <span className="text-gray-500"> </span>
          <span className="text-green-400">kubernetes</span>
          <span className="text-gray-500 ml-4">// currently learning</span>
        </motion.div>
      </div>
    </section>
  );
}