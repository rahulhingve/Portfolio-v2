"use client";

import { motion } from "framer-motion";
import { IconSchool, IconBriefcase } from "@tabler/icons-react";

const timelineItems = [
  {
    type: "education",
    title: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Technocrats Institute of Technology and Science Bhopal",
    period: "2019 - 2023",
    description: "Graduated with a strong foundation in computer science and software development.",
    icon: IconSchool,
  },
  {
    type: "experience",
    title: "Frontend Developer Intern",
    institution: "Mdp Infra Pvt Ltd Bhopal", 
    period: "Oct 2023 - Jan 2024",
    description: "Redesigned and optimized MDP-attendance system with responsive design using CSS and Bootstrap. Developed interactive data visualizations including pie charts for attendance analytics. Collaborated with teams to integrate frontend improvements.",
    icon: IconBriefcase,
  },
  {
    type: "experience",
    title: "Full Stack Development & Web3 Journey",
    institution: "Self-Taught Learning",
    period: "2024 - Present",
    description: "Embarked on full stack development journey, building projects with modern web technologies. Gained hands-on experience in Web3 development and blockchain technologies. Currently expanding knowledge into DevOps practices while continuing to deepen Web3 expertise.",
    icon: IconBriefcase,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export function Timeline({ id }: { id: string }) {
  return (
    <section id={id} className="section-padding">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading">Experience & Education</h2>
          <p className="subheading">
            My journey through education and professional experience that has shaped my expertise.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-16 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 rounded-full bg-primary-500" />
                
                {/* Timeline icon */}
                <div className="absolute left-0 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-2 border-primary-500 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-primary-500" />
                </div>

                {/* Timeline content */}
                <div className="card">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {item.institution}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

