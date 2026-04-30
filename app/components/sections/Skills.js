"use client";

import { useEffect, useRef } from "react";
import { SectionWrapper } from "../SectionWrapper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaFigma, FaPalette 
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiVercel, SiBootstrap 
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const SKILLS = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express", icon: SiExpress, color: "text-gray-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
  { name: "GitHub", icon: FaGithub, color: "text-black dark:text-white" },
  { name: "Figma", icon: FaFigma, color: "text-purple-500" },
  { name: "Vercel", icon: SiVercel, color: "text-black dark:text-white" },
  { name: "DaisyUI", icon: FaPalette, color: "text-teal-400" },
];

export function Skills() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate icons popping up when scrolling into view
      gsap.from(".skill-icon", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        scale: 0,
        y: 50,
        rotation: 45,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.5)"
      });

      // Add continuous floating animation
      gsap.to(".skill-icon", {
        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.15,
          from: "random"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary drop-shadow-sm">
          My Skills
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Here are the technologies and tools I work with everyday to build amazing applications.
        </p>
      </div>

      <div ref={containerRef} className="flex flex-wrap justify-center gap-6 md:gap-10 max-w-5xl mx-auto">
        {SKILLS.map((skill, idx) => (
          <div 
            key={idx} 
            className="skill-icon flex flex-col items-center gap-3 group"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl md:rounded-[1.5rem] glass flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary/50 relative overflow-hidden shadow-lg hover:shadow-primary/20 hover:rotate-3">
               {/* inner glow/gradient */}
               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               <skill.icon className={`text-4xl md:text-5xl ${skill.color} relative z-10 transition-transform duration-300 group-hover:scale-110`} />
            </div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
