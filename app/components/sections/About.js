import { SectionWrapper } from "../SectionWrapper";
import { Terminal, Code, Cpu } from "lucide-react";

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-primary drop-shadow-sm">
            About Me
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
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:border-primary/30 transition-all duration-300">
            <div className="p-4 glass rounded-full text-primary border border-primary/20">
              <Code className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-lg">Clean Code</h3>
            <p className="text-sm text-gray-500">Writing maintainable and scalable code.</p>
          </div>
          
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:border-primary/30 transition-all duration-300 sm:mt-8">
            <div className="p-4 glass rounded-full text-accent border border-accent/20">
              <Terminal className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-lg">Problem Solving</h3>
            <p className="text-sm text-gray-500">Tackling complex challenges efficiently.</p>
          </div>
          
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:border-primary/30 transition-all duration-300 sm:col-span-2">
            <div className="p-4 glass rounded-full text-green-500 dark:text-green-400 border border-green-500/20">
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
