"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function BackgroundAnimation() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the blobs around the screen randomly
      gsap.utils.toArray(".bg-blob").forEach((blob) => {
        gsap.to(blob, {
          x: "random(-20vw, 20vw)",
          y: "random(-20vh, 20vh)",
          rotation: "random(-90, 90)",
          scale: "random(0.8, 1.2)",
          duration: "random(10, 20)",
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });

      // Animate the small floating shapes (like Programming Hero)
      gsap.utils.toArray(".floating-shape").forEach((shape) => {
        gsap.to(shape, {
          y: "random(-50, 50)",
          x: "random(-30, 30)",
          rotation: "random(-45, 45)",
          duration: "random(4, 8)",
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none -z-50 overflow-hidden">
      {/* Programming Hero-style global background blobs */}
      <div className="bg-blob absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen" />
      <div className="bg-blob absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] mix-blend-screen" />
      <div className="bg-blob absolute bottom-[20%] left-[30%] w-[350px] h-[350px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen" />
      <div className="bg-blob absolute bottom-[10%] right-[30%] w-[250px] h-[250px] bg-accent/10 rounded-full blur-[120px] mix-blend-screen" />
      
      {/* Small floating 3D-like shapes */}
      <div className="floating-shape absolute top-[20%] right-[15%] w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-primary to-accent rounded-full blur-[2px] opacity-60 shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
      <div className="floating-shape absolute top-[60%] left-[10%] w-6 h-6 md:w-8 md:h-8 bg-gradient-to-tr from-accent to-primary rounded-lg rotate-45 blur-[1px] opacity-50 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
      <div className="floating-shape absolute bottom-[15%] right-[25%] w-10 h-10 md:w-14 md:h-14 bg-gradient-to-tl from-purple-500 to-pink-500 rounded-full blur-[3px] opacity-40 shadow-[0_0_20px_rgba(236,72,153,0.4)]" />
      <div className="floating-shape absolute top-[80%] left-[50%] w-4 h-4 md:w-6 md:h-6 bg-white rounded-full blur-[1px] opacity-30 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />

      {/* Star particles effect */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] dark:opacity-[0.05]" />
    </div>
  );
}
