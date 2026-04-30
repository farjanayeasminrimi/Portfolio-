import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { PROJECTS_DATA } from "@/app/components/sections/Projects";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { notFound } from "next/navigation";

// Extended project details (in a real app, this would be in a database)
const PROJECT_DETAILS = {
  "e-commerce": {
    fullDescription: "This modern E-Commerce platform was built from the ground up to provide a seamless shopping experience. It features a fully responsive design, a robust product management system for administrators, and secure checkout processing via Stripe. The application uses Server-Side Rendering (SSR) for optimal SEO and fast initial page loads.",
    challenges: "One of the main challenges was implementing a complex state management system for the shopping cart that syncs across multiple browser tabs and persists after page reloads.",
    improvements: "Future improvements include adding a recommendation engine based on user browsing history and integrating more payment gateways.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  "task-manager": {
    fullDescription: "The AI Task Manager is designed to help professionals stay organized by not just listing tasks, but automatically prioritizing them. By integrating with the OpenAI API, the app analyzes task descriptions and due dates to suggest an optimal workflow.",
    challenges: "Handling the rate limits and response times of the OpenAI API while keeping the user interface highly responsive required implementing an optimistic UI update strategy.",
    improvements: "I plan to add calendar integration (Google Calendar, Outlook) and a team collaboration feature in the next version.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  "social-dashboard": {
    fullDescription: "A comprehensive social media analytics dashboard that aggregates data from multiple platforms into a single, easy-to-read interface. Users can track their engagement metrics, follower growth, and post performance through interactive charts.",
    challenges: "Normalizing the data structures from different social media APIs (Twitter, Facebook, Instagram) into a unified format was highly complex.",
    improvements: "Adding automated weekly email reports and predictive analytics using machine learning.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  }
};

export default async function ProjectDetails({ params }) {
  // In Next.js 15, params is a Promise, so we must await it
  const resolvedParams = await params;
  const projectId = resolvedParams.id;
  
  const baseProject = PROJECTS_DATA.find(p => p.id === projectId);
  const details = PROJECT_DETAILS[projectId];

  if (!baseProject || !details) {
    notFound();
  }

  const project = { ...baseProject, ...details };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20 px-6 max-w-4xl mx-auto w-full">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-primary hover:text-accent mb-8 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
        
        <div className="flex flex-wrap gap-3 mb-10">
          {project.tech.map((tech) => (
            <span 
              key={tech} 
              className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Hero Image */}
        <div className="w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-12 border border-white/10 dark:border-white/10 shadow-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-primary rounded-full inline-block"></span>
              Overview
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.fullDescription}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-accent rounded-full inline-block"></span>
              Challenges Faced
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.challenges}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-green-500 rounded-full inline-block"></span>
              Future Improvements
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.improvements}
            </p>
          </section>

          {/* Action Links */}
          <section className="pt-8 flex flex-col sm:flex-row gap-4 border-t border-white/10 dark:border-white/10">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="w-5 h-5" />
              View Live Demo
            </a>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-primary transition-colors font-semibold"
            >
              <FaGithub className="w-5 h-5" />
              View Source Code
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
