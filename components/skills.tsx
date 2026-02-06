"use client";

import { motion } from "framer-motion";
import {
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandPython,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandMongodb,
  IconBrandTailwind,
  IconBrandFramer,
  IconBrandDocker,
  IconBrandGit
} from "@tabler/icons-react";
import { SiExpress, SiPrisma, SiPostgresql, SiSolana } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IconType } from "react-icons";
import { Icon } from "@tabler/icons-react";

type SkillIcon = Icon | IconType;

interface Skill {
  name: string;
  icon: SkillIcon;
  color: string;
}

interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Building beautiful user interfaces",
    skills: [
      { name: "React.js", icon: IconBrandReact, color: "#61DAFB" },
      { name: "Next.js", icon: IconBrandNextjs, color: "#fff" },
      { name: "TypeScript", icon: IconBrandTypescript, color: "#3178C6" },
      { name: "Tailwind", icon: IconBrandTailwind, color: "#06B6D4" },
      { name: "Framer Motion", icon: IconBrandFramer, color: "#FF0055" },
    ],
  },
  {
    title: "Backend",
    description: "Powerful server-side solutions",
    skills: [
      { name: "Node.js", icon: IconBrandJavascript, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#fff" },
      { name: "Python", icon: IconBrandPython, color: "#3776AB" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    ],
  },
  {
    title: "Database & Cloud",
    description: "Scalable data management",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: IconBrandMongodb, color: "#47A248" },
      { name: "Docker", icon: IconBrandDocker, color: "#2496ED" },
      { name: "Git", icon: IconBrandGit, color: "#F05032" },
    ],
  },
  {
    title: "Web3 & Mobile",
    description: "Decentralized applications",
    skills: [
      { name: "Solana", icon: SiSolana, color: "#9945FF" },
      { name: "React Native", icon: FaReact, color: "#61DAFB" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
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

interface SkillsProps {
  id: string;
}

export function Skills({ id }: SkillsProps) {
  return (
    <section id={id} className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent pointer-events-none" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-medium text-sm tracking-wider uppercase mb-4 block">
            Expertise
          </span>
          <h2 className="heading">Skills & Technologies</h2>
          <p className="subheading">
            The tools and technologies I use to bring products to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-purple-500/20 transition-all duration-500"
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Category header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-500">{category.description}</p>
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.05),
                          type: "spring",
                          stiffness: 100
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                        className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-300 cursor-default"
                      >
                        <IconComponent
                          className="w-5 h-5 flex-shrink-0"
                          style={{ color: skill.color }}
                        />
                        <span className="text-sm text-gray-300 truncate">{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            Always learning and exploring new technologies
          </p>
        </motion.div>
      </div>
    </section>
  );
}