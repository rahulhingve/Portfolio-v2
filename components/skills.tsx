"use client";

import { 
  IconBrandJavascript, 
  IconBrandTypescript, 
  IconBrandPython, 
  IconBrandReact, 
  IconBrandNextjs, 
  IconBrandMongodb, 
  IconBrandTailwind, 
  IconBrandFramer
} from "@tabler/icons-react";
import { SiExpress, SiPrisma, SiPostgresql } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const skills = [
  { name: "Javascript", icon: IconBrandJavascript },
  { name: "Typescript", icon: IconBrandTypescript },
  { name: "Python", icon: IconBrandPython },
  { name: "React.js", icon: IconBrandReact },
  { name: "Next.js", icon: IconBrandNextjs },
  { name: "React Native", icon: FaReact },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: IconBrandMongodb },
  { name: "Postgres", icon: SiPostgresql },
  { name: "Prisma", icon: SiPrisma },
  { name: "Tailwind", icon: IconBrandTailwind },
  { name: "Framer Motion", icon: IconBrandFramer },
];

interface SkillsProps {
  id: string;
}

export function Skills({ id }: SkillsProps) {
  return (
    <section id={id} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="flex items-center gap-2 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <Icon className="w-6 h-6 text-gray-400" />
                <span className="text-gray-300">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}