"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { SectionWrapper } from "../SectionWrapper";

const ROLES = [
  "Full Stack Developer",
  "Frontend Developer",
  "Problem Solver",
  "Teacher",
  "Public Speaker",
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper id="home" className="pt-32 lg:pt-48">
      {/* Background decoration elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px] -z-10 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000"></div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-gray-500 dark:text-gray-400 mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              Farjana Yeasmin <span className="text-gradient">Rimi</span>
            </h1>
            
            <div className="h-10 overflow-hidden flex items-center justify-center lg:justify-start text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              <span className="mr-2">I am a</span>
              <motion.div
                key={currentRole}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-primary"
              >
                {ROLES[currentRole]}
              </motion.div>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0"
          >
            Passionate about building modern, interactive, and beautiful web applications. 
            I love solving complex problems and sharing my knowledge with others.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <Link 
              href="#projects" 
              className="glass px-8 py-4 rounded-full flex items-center gap-2 hover:bg-primary hover:text-white transition-all group w-full sm:w-auto justify-center"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="px-8 py-4 rounded-full border border-gray-300 dark:border-gray-700 hover:border-primary text-foreground flex items-center gap-2 transition-all w-full sm:w-auto justify-center"
            >
              Download Resume
              <Download className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 flex justify-center lg:justify-end relative"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Decorative ring */}
            <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border border-accent/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* Actual image placeholder */}
            <div className="absolute inset-8 rounded-full glass-card overflow-hidden flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
              <span className="text-4xl">👩‍💻</span>
            </div>
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
