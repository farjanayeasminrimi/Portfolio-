import { SectionWrapper } from "../SectionWrapper";
import { Terminal, Code, Cpu } from "lucide-react";

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            <p>
              Hi, I'm Farjana Yeasmin Rimi. My programming journey started with a simple curiosity about how things work on the internet. Since then, I've fallen in love with coding and building digital experiences.
            </p>
            <p>
              I am highly passionate about full-stack development, modern UI/UX design, and solving real-world problems through technology. I love creating applications that look beautiful and function flawlessly.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, teaching programming concepts to beginners, or reading up on the latest tech trends.
            </p>
          </div>
        </div>
        
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform duration-300">
            <div className="p-4 bg-primary/10 rounded-full text-primary">
              <Code className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-lg">Clean Code</h3>
            <p className="text-sm text-gray-500">Writing maintainable and scalable code.</p>
          </div>
          
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform duration-300 sm:mt-8">
            <div className="p-4 bg-accent/10 rounded-full text-accent">
              <Terminal className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-lg">Problem Solving</h3>
            <p className="text-sm text-gray-500">Tackling complex challenges efficiently.</p>
          </div>
          
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform duration-300 sm:col-span-2">
            <div className="p-4 bg-green-500/10 rounded-full text-green-500 dark:text-green-400">
              <Cpu className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-lg">Continuous Learning</h3>
            <p className="text-sm text-gray-500">Always adapting to new tools and tech.</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
