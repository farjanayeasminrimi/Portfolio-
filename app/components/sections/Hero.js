"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SectionWrapper } from "../SectionWrapper";
import gsap from "gsap";

const ROLES = [
  "Full Stack Developer",
  "Frontend Developer",
  "Problem Solver",
  "Teacher",
  "Public Speaker",
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const textGroupRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // GSAP text animation when role changes
  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(textRef.current,
        { y: 30, opacity: 0, rotateX: -90, transformOrigin: "50% 50% -20px" },
        { y: 0, opacity: 1, rotateX: 0, duration: 0.8, ease: "elastic.out(1, 0.7)" }
      );
    }
  }, [currentRole]);

  useEffect(() => {
    // GSAP animations for Hero section
    const ctx = gsap.context(() => {
      // Animate text elements sequentially
      if (textGroupRef.current) {
        gsap.from(textGroupRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        });
      }

      // Animate image container
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          scale: 0.8,
          rotation: 5,
          opacity: 0,
          duration: 1.2,
          ease: "back.out(1.5)",
          delay: 0.4,
        });
      }

      // Floating animation behind hero circle
      gsap.to(".gsap-float", {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        rotation: "random(-15, 15)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 1,
          from: "random"
        }
      });
      // Animate SVG circles
      gsap.to(".gsap-svg-dash", {
        rotation: 360,
        transformOrigin: "center center",
        duration: 20,
        repeat: -1,
        ease: "none"
      });
      gsap.to(".gsap-svg-dash-reverse", {
        rotation: -360,
        transformOrigin: "center center",
        duration: 25,
        repeat: -1,
        ease: "none"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="home" className="pt-32 lg:pt-48">
      {/* Background decoration elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px] -z-10 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000"></div>

      <div ref={heroRef} className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div ref={textGroupRef} className="flex-1 text-center lg:text-left space-y-6">
          <div>
            <h2 className="text-xl md:text-2xl font-medium text-gray-500 dark:text-gray-400 mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-tight break-words">
              Farjana Yeasmin <span className="text-gradient">Rimi</span>
            </h1>
            
            <div className="h-10 overflow-hidden flex items-center justify-center lg:justify-start text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              <span className="mr-2 whitespace-nowrap">I am a</span>
              <div className="relative h-full w-[200px] md:w-[280px] perspective-[1000px] flex items-center">
                <div
                  ref={textRef}
                  className="text-primary w-full text-left"
                >
                  {ROLES[currentRole]}
                </div>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0">
            Passionate about building modern, interactive, and beautiful web applications. 
            I love solving complex problems and sharing my knowledge with others.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
            <Link 
              href="#projects" 
              className="glass px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-primary hover:text-white transition-all duration-300 group w-full sm:w-auto justify-center hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
            >
              <span className="font-semibold text-sm">View Projects</span>
              <span className="glass p-1.5 rounded-full border border-white/20 transition-transform duration-300 group-hover:scale-110">
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <a 
              href="/resume.pdf" 
              download="Resume_Farjana_Yeasmin_Rimi.pdf"
              target="_blank"
              className="px-5 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 hover:border-primary text-foreground flex items-center gap-2 transition-all duration-300 w-full sm:w-auto justify-center group hover:bg-primary/5"
            >
              <span className="font-semibold text-sm">Download Resume</span>
              <span className="glass p-1.5 rounded-full border border-gray-300 dark:border-gray-600 group-hover:border-primary transition-transform duration-300 group-hover:-translate-y-1">
                <Download className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div 
          ref={imageRef}
          className="flex-1 flex justify-center lg:justify-end relative"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
            {/* GSAP Floating Background Elements */}
            <div className="gsap-float absolute -top-12 -left-4 w-24 h-24 bg-primary/30 rounded-3xl blur-xl -z-10 mix-blend-screen" />
            <div className="gsap-float absolute bottom-10 -right-12 w-32 h-32 bg-accent/30 rounded-full blur-2xl -z-10 mix-blend-multiply dark:mix-blend-screen" />
            <div className="gsap-float absolute -bottom-8 left-10 w-16 h-16 bg-purple-500/20 rounded-full blur-lg -z-10" />

            {/* Decorative rings & glassmorphism side effect */}
            <svg className="absolute inset-[-30px] w-[calc(100%+60px)] h-[calc(100%+60px)] -z-10 overflow-visible opacity-50" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="95" fill="none" stroke="url(#gradient1)" strokeWidth="1" className="gsap-svg-dash" strokeDasharray="10 15" />
              <circle cx="100" cy="100" r="85" fill="none" stroke="url(#gradient2)" strokeWidth="2" className="gsap-svg-dash-reverse" strokeDasharray="40 20" />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 border border-primary/20 rounded-full" />
            <div className="absolute inset-4 border border-accent/20 rounded-full" />
            
            {/* Glassmorphism crescent/side effect */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-24 h-48 rounded-l-full glass border-r-0 blur-sm mix-blend-overlay z-10" />
            <div className="absolute -right-4 bottom-10 w-20 h-20 rounded-full glass mix-blend-overlay z-10" />

            {/* Actual image */}
            <div className="absolute inset-8 rounded-full glass-card overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border-4 border-white/10 dark:border-white/5 shadow-2xl">
              <Image 
                src="/hero.png" 
                alt="Farjana Yeasmin Rimi"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover scale-[1.8] -translate-y-12 transition-transform duration-700"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
