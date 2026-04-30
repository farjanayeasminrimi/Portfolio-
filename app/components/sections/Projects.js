"use client";

import { SectionWrapper } from "../SectionWrapper";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// This is exported so we can reuse it on the details page
export const PROJECTS_DATA = [
  {
    id: "e-commerce",
    title: "Modern E-Commerce Platform",
    shortDesc: "A full-stack e-commerce solution with product management, cart, and secure checkout.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800&h=600",
    tech: ["Next.js", "Tailwind", "Stripe", "MongoDB"],
  },
  {
    id: "task-manager",
    title: "AI Task Manager",
    shortDesc: "A smart task management app that prioritizes your work using AI algorithms.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800&h=600",
    tech: ["React", "Node.js", "OpenAI API", "Express"],
  },
  {
    id: "social-dashboard",
    title: "Social Media Dashboard",
    shortDesc: "Analytics dashboard with real-time data visualization and reporting features.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600",
    tech: ["Vue.js", "Tailwind CSS", "Chart.js", "Firebase"],
  }
];

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Here are some of my recent works. Click "View Details" to learn more about each project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
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

              {/* Action Button */}
              <Link 
                href={`/projects/${project.id}`}
                className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <span className="font-semibold text-sm">View Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            {/* Hover Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-3xl opacity-0 group-hover:opacity-20 blur -z-10 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
