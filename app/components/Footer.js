"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { useLenis } from "lenis/react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const lenis = useLenis();

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleScroll = (e, href) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(href, { offset: -80 });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="border-t border-white/10 dark:border-white/10 bg-black/5 dark:bg-black/20 backdrop-blur-md py-12 mt-8 relative">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">
        
        {/* Brand / Logo */}
        <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <Link href="/" className="flex items-center group outline-none" aria-label="Home">
            <div className="relative w-14 h-14 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-accent/40 rounded-full blur-md group-hover:blur-xl transition-all duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"></div>
              <div className="relative flex items-center justify-center group-hover:-translate-y-0.5 transition-transform duration-300">
                <div className="flex tracking-tighter pr-0.5 items-end leading-none font-serif relative z-10">
                  <span className="font-black text-2xl text-foreground dark:text-white drop-shadow-lg">F</span>
                  <span className="font-black text-3xl text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent -ml-1.5 z-10 translate-y-0.5 drop-shadow-lg filter">Y</span>
                  <span className="font-black text-2xl text-gray-500 dark:text-gray-400 -ml-1 drop-shadow-lg">R</span>
                </div>
              </div>
            </div>
          </Link>
          <p className="text-gray-500 dark:text-gray-400 max-w-sm mt-2">
            Passionate full-stack developer dedicated to building beautiful and highly functional digital experiences.
          </p>
        </div>

        {/* Navigation Wrapper */}
        <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8 w-full">
          {/* Navigation Column 1 */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg mb-4 text-foreground">Navigation</h3>
            <ul className="space-y-3 text-center md:text-left">
              {[
                { name: "Home", href: "#home" },
                { name: "About Me", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="text-gray-500 hover:text-primary transition-colors text-sm font-medium"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Column 2 */}
          <div className="flex flex-col items-center md:items-start md:pt-11">
            <h3 className="font-bold text-lg mb-4 text-foreground md:hidden">More</h3>
            <ul className="space-y-3 text-center md:text-left">
              {[
                { name: "Experience", href: "#experience" },
                { name: "Education", href: "#education" },
                { name: "Contact", href: "#contact" }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="text-gray-500 hover:text-primary transition-colors text-sm font-medium"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links Column */}
        <div className="col-span-1 flex flex-col items-center md:items-start">
          <h3 className="font-bold text-lg mb-4 text-foreground">Socials</h3>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="glass p-2.5 rounded-full border border-white/5 hover:border-primary/50 text-gray-500 hover:text-primary transition-all hover:-translate-y-1" aria-label="GitHub">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="glass p-2.5 rounded-full border border-white/5 hover:border-blue-500/50 text-gray-500 hover:text-blue-500 transition-all hover:-translate-y-1" aria-label="LinkedIn">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="glass p-2.5 rounded-full border border-white/5 hover:border-sky-500/50 text-gray-500 hover:text-sky-500 transition-all hover:-translate-y-1" aria-label="Twitter">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="glass p-2.5 rounded-full border border-white/5 hover:border-blue-600/50 text-gray-500 hover:text-blue-600 transition-all hover:-translate-y-1" aria-label="Facebook">
              <FaFacebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 flex flex-col items-center justify-center relative">
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center w-full">
          © {currentYear} Farjana Yeasmin Rimi. All rights reserved.
        </p>
      </div>

      {/* Scroll To Top Button (Fixed to bottom right of viewport) */}
      <button 
        onClick={scrollToTop}
        className="fixed z-50 bottom-8 right-6 md:right-10 p-3.5 rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/30 transition-all duration-300 hover:-translate-y-2 group"
        aria-label="Scroll to Top"
      >
        <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
      </button>
    </footer>
  );
}
