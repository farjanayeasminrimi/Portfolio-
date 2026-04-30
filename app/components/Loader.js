"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const loaderRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setTimeout(() => setIsLoading(false), 100);
        }
      });

      // Progress bar animation
      tl.fromTo(".loader-progress", 
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 1.5, ease: "power2.inOut" },
        0
      );

      // Text animation
      tl.fromTo(textRef.current, 
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
        0.2
      )
      .to(textRef.current, {
        y: -30, opacity: 0, duration: 0.6, ease: "power3.in", delay: 0.4
      })
      .to(".loader-progress-container", {
        opacity: 0, duration: 0.4
      }, "-=0.6")
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut"
      });
    }, loaderRef);

    return () => ctx.revert();
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      ref={loaderRef} 
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Decorative background blur */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] animate-blob" />
        <div className="w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] animate-blob animation-delay-2000 -ml-20" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center">
        <div ref={textRef} className="flex tracking-tighter items-end leading-none font-serif relative z-10 mb-8">
          <span className="font-black text-6xl text-foreground dark:text-white drop-shadow-lg">F</span>
          <span className="font-black text-7xl text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent -ml-2 z-10 translate-y-1 drop-shadow-lg filter">Y</span>
          <span className="font-black text-6xl text-gray-500 dark:text-gray-400 -ml-1.5 drop-shadow-lg">R</span>
        </div>
        
        <div className="loader-progress-container h-1 w-48 bg-white/10 dark:bg-white/5 rounded-full overflow-hidden shadow-inner">
          <div className="loader-progress h-full bg-gradient-to-r from-primary to-accent w-full shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
        </div>
      </div>
    </div>
  );
}
