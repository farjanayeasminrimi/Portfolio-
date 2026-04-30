"use client";

import { SectionWrapper } from "../SectionWrapper";
import { GraduationCap } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const EDUCATION = [
  {
    degree: "Bachelor in Accounting and Information Systems",
    institution: "Jagannath University",
    year: "2025 - Present",
    gpa: "",
    description: "Pursuing bachelor's degree in Accounting and Information Systems."
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Cambrian College",
    year: "2023 - 2024",
    gpa: "5.00 out of 5",
    description: "Business Studies"
  },
  {
    degree: "Secondary School Certificate",
    institution: "Lakshmipur National Ideal School",
    year: "2020 - 2022",
    gpa: "5.00 out of 5",
    description: "Business Studies"
  }
];

export function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background floating elements animation
      gsap.to(".edu-shape", {
        y: "random(-40, 40)",
        x: "random(-40, 40)",
        rotation: "random(-30, 30)",
        duration: "random(5, 10)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="education" className="relative overflow-hidden bg-white/5 dark:bg-white/[0.02]">
      <div ref={sectionRef} className="absolute inset-0 pointer-events-none -z-10">
        <div className="edu-shape absolute top-10 left-[10%] w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
        <div className="edu-shape absolute bottom-30 right-[5%] w-56 h-56 bg-primary/5 rounded-full blur-3xl" />
        <div className="edu-shape absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
      </div>

      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary drop-shadow-sm">
          My Education
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
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-col mb-2 gap-2">
                  <h3 className="font-bold text-lg text-primary">{edu.degree}</h3>
                  <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full w-fit whitespace-nowrap">
                    {edu.year}
                  </span>
                </div>
                <div className="flex flex-col mb-4">
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-1">{edu.institution}</h4>
                </div>
                <div className="flex flex-col sm:flex-row justify-between text-sm mb-4">
                  <p className="text-gray-500">{edu.description}</p>
                  {edu.gpa && (
                    <p className="font-semibold text-primary mt-1 sm:mt-0">GPA: {edu.gpa}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
