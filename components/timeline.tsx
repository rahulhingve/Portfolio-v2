"use client";

import { motion } from "framer-motion";
import { IconSchool, IconBriefcase, IconRocket } from "@tabler/icons-react";

const timelineItems = [
  {
    type: "education",
    title: "B.Tech in Computer Science",
    institution: "Technocrats Institute of Technology and Science, Bhopal",
    period: "2019 - 2023",
    description: "Graduated with a strong foundation in computer science and software development.",
    icon: IconSchool,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    type: "experience",
    title: "Frontend Developer Intern",
    institution: "Mdp Infra Pvt Ltd, Bhopal",
    period: "Oct 2023 - Jan 2024",
    description: "Redesigned MDP-attendance system with responsive design. Developed interactive data visualizations and collaborated with teams on frontend improvements.",
    icon: IconBriefcase,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    type: "experience",
    title: "Full Stack & Web3 Developer",
    institution: "Self-Taught Journey",
    period: "2024 - Present",
    description: "Building full-stack projects with modern web technologies. Gained hands-on experience in Web3 and blockchain. Currently expanding into DevOps practices.",
    icon: IconRocket,
    gradient: "from-orange-500 to-red-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export function Timeline({ id }: { id: string }) {
  return (
    <section id={id} className="section-padding relative overflow-hidden">
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
            Journey
          </span>
          <h2 className="heading">Experience & Education</h2>
          <p className="subheading">
            My path through education and professional experience that shaped my expertise.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glowing timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 blur-sm opacity-50" />
            </div>

            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-start gap-8 mb-12 last:mb-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Timeline node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.gradient} p-[2px] shadow-lg`}
                    style={{
                      boxShadow: `0 0 30px rgba(139, 92, 246, 0.3)`,
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                </div>

                {/* Content card */}
                <div className={`w-full md:w-[calc(50%-4rem)] ml-24 md:ml-0 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-purple-500/20 transition-all duration-500"
                  >
                    {/* Subtle glow on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative">
                      {/* Period badge */}
                      <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${item.gradient} text-white mb-4`}>
                        {item.period}
                      </span>

                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-purple-400/80 text-sm font-medium mb-3">
                        {item.institution}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-[calc(50%-4rem)]" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
