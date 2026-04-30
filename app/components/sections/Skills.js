"use client";

import { SectionWrapper } from "../SectionWrapper";
import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML & CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React & Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "SQL", level: 70 },
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Figma", level: 80 },
      { name: "Vercel", level: 85 },
      { name: "Postman", level: 85 },
    ]
  }
];

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          My <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Here are the technologies and tools I work with everyday to build amazing applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div 
            key={category.title} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            className="glass-card p-8 rounded-3xl"
          >
            <h3 className="text-xl font-semibold mb-6 text-foreground/90">{category.title}</h3>
            <div className="space-y-6">
              {category.skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-sm text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-xs text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
