"use client";

import { useState } from "react";
import { SectionWrapper } from "../SectionWrapper";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// This is exported so we can reuse it on the details page
export const PROJECTS_DATA = [
  {
    id: "github-issues-tracker",
    title: "GitHub Issues Tracker",
    shortDesc: "A sleek, dark-mode issue tracking dashboard built with JSON data using HTML, CSS, Daisy UI and Vanilla JavaScript.",
    image: "/projects/github_issues_tracker.png",
    tech: ["HTML", "CSS", "JavaScript", "Daisy UI"],
    github: "https://github.com/farjanayeasminrimi/GitHub-Issues-Tracker",
    demo: "https://farjanayeasminrimi.github.io/GitHub-Issues-Tracker/"
  },
  {
    id: "job-tracker",
    title: "Job Tracker",
    shortDesc: "A modern web application for tracking job applications built with HTML, Tailwind CSS, Daisy UI, and Vanilla JS.",
    image: "/projects/job_tracker.png",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/farjanayeasminrimi/Job-Tracker",
    demo: "https://farjanayeasminrimi.github.io/Job-Tracker/"
  },
  {
    id: "knowledge-vault",
    title: "Knowledge Vault",
    shortDesc: "A digital library or note-taking web application built with HTML and CSS.",
    image: "/projects/knowledge_vault.png",
    tech: ["HTML", "CSS"],
    github: "https://github.com/farjanayeasminrimi/Knowledge-Vault",
    demo: "https://farjanayeasminrimi.github.io/Knowledge-Vault/"
  },
  {
    id: "edtech-site",
    title: "EdTech Site",
    shortDesc: "An online learning platform web UI.",
    image: "/projects/edtech_site.png",
    tech: ["HTML", "CSS"],
    github: "https://github.com/farjanayeasminrimi/EdTech-Site",
    demo: "https://farjanayeasminrimi.github.io/EdTech-Site/"
  },
  {
    id: "g3-architects",
    title: "G3 Architects",
    shortDesc: "A modern architecture agency landing page built with HTML and CSS.",
    image: "/projects/g3_architects.png",
    tech: ["HTML", "CSS"],
    github: "https://github.com/farjanayeasminrimi/G3-Architects",
    demo: "https://farjanayeasminrimi.github.io/G3-Architects/"
  },
  {
    id: "otp-generator",
    title: "OTP Generator",
    shortDesc: "A modern security web application for generating one-time passwords.",
    image: "/projects/otp_generator.png",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/farjanayeasminrimi/OTP-Generator",
    demo: "https://farjanayeasminrimi.github.io/OTP-Generator/"
  }
];

export function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(PROJECTS_DATA.length / itemsPerPage);
  
  const currentProjects = PROJECTS_DATA.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () => setCurrentPage(p => Math.min(p + 1, totalPages));
  const prevPage = () => setCurrentPage(p => Math.max(p - 1, 1));

  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary drop-shadow-sm">
          Featured Projects
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Here are some of my recent works.
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={currentPage}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group glass-card rounded-3xl overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300 relative"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm mb-6 flex-1 line-clamp-2">
                  {project.shortDesc}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs px-2 py-1 rounded-md bg-foreground/5 text-foreground/80 dark:bg-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 mt-auto">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-background/50 hover:bg-background border border-white/10 transition-all group/btn"
                  >
                    <span className="glass p-1.5 rounded-full border border-white/5 group-hover/btn:border-white/20 transition-colors">
                      <FaGithub className="w-4 h-4" />
                    </span>
                    <span className="text-sm font-semibold">GitHub</span>
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all group/btn"
                  >
                    <span className="glass p-1.5 rounded-full border border-primary/20 group-hover/btn:border-white/20 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </span>
                    <span className="text-sm font-semibold">Demo</span>
                  </a>
                </div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-3xl opacity-0 group-hover:opacity-20 blur -z-10 transition-opacity duration-500" />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-12">
          <button 
            onClick={prevPage}
            disabled={currentPage === 1}
            className="p-3 rounded-full glass hover:bg-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:-translate-x-1 disabled:hover:translate-x-0"
            aria-label="Previous Page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentPage === i + 1 
                    ? "bg-primary w-6" 
                    : "bg-gray-400/50 hover:bg-gray-400"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="p-3 rounded-full glass hover:bg-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:translate-x-1 disabled:hover:translate-x-0"
            aria-label="Next Page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </SectionWrapper>
  );
}
