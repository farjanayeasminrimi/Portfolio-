"use client";

import { SectionWrapper } from "../SectionWrapper";
import { Briefcase } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const EXPERIENCES = [
  {
    role: "Accounting Assistant Teacher",
    company: "10 Minute School",
    location: "Dhaka, Bangladesh",
    year: "October 2025 - Present",
    achievements: [
      "Delivered academic support to 1,000+ students in an online learning environment",
      "Received 100% positive feedback from students for teaching quality and support",
      "Built strong communication, leadership, and classroom management skills"
    ],
    responsibilities: [
      "Resolve student queries and topic questions with clear explanations",
      "Provide academic counseling, follow-up, and motivation to keep students on track",
      "Monitor student progress and encourage active participation"
    ]
  },
  {
    role: "Content Analyst",
    company: "Bangla Crackers",
    location: "Dhaka, Bangladesh",
    year: "October 2024 - December 2025",
    achievements: [
      "Converted complex academic syllabus into structured, easy-to-understand content",
      "Strengthened skills in content planning and organization",
      "Improved accessibility of study materials for large student groups"
    ],
    responsibilities: [
      "Developed and organized Bangla subject content for HSC students",
      "Reviewed academic materials with lead instructors to ensure accuracy and clarity.",
      "Assisted students with study guidance and effective learning strategies"
    ]
  }
];

export function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background floating elements animation
      gsap.to(".exp-shape", {
        y: "random(-30, 30)",
        x: "random(-30, 30)",
        rotation: "random(-20, 20)",
        duration: "random(4, 8)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="experience" className="relative overflow-hidden">
      <div ref={sectionRef} className="absolute inset-0 pointer-events-none -z-10">
        <div className="exp-shape absolute top-20 right-[10%] w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
        <div className="exp-shape absolute top-60 left-[5%] w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
        <div className="exp-shape absolute bottom-20 right-[20%] w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
      </div>
      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary drop-shadow-sm">
          My Experience
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          A summary of my professional journey and the places I've worked.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-gray-700 before:to-transparent">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow z-10">
                <Briefcase className="w-4 h-4" />
              </div>
              
              {/* Content card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-col mb-2 gap-2">
                  <h3 className="font-bold text-lg text-primary">{exp.role}</h3>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit whitespace-nowrap">
                    {exp.year}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-1">
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">{exp.company}</h4>
                  <span className="text-xs text-gray-500">{exp.location}</span>
                </div>
                
                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Achievements:</h5>
                    <ul className="list-disc pl-5 space-y-1">
                      {exp.achievements.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Responsibilities:</h5>
                    <ul className="list-disc pl-5 space-y-1">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
