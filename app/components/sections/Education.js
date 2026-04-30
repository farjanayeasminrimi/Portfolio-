"use client";

import { SectionWrapper } from "../SectionWrapper";
import { GraduationCap } from "lucide-react";

const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University Name",
    year: "2020 - 2024",
    description: "Graduated with honors. Coursework included Data Structures, Algorithms, Web Development, and Database Management Systems."
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "College Name",
    year: "2018 - 2020",
    description: "Science group. Developed a strong foundation in Mathematics and Physics."
  }
];

export function Education() {
  return (
    <SectionWrapper id="education">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          My <span className="text-gradient">Education</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          My academic background and qualifications.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-gray-700 before:to-transparent">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-accent text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow z-10">
                <GraduationCap className="w-4 h-4" />
              </div>
              
              {/* Content card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                  <h3 className="font-bold text-lg">{edu.degree}</h3>
                  <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full w-fit">
                    {edu.year}
                  </span>
                </div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-4">{edu.institution}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
