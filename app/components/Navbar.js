"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Menu, 
  X, 
  Home, 
  Wrench, 
  Layers, 
  Mail, 
  User, 
  Briefcase, 
  GraduationCap, 
  ChevronDown 
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useLenis } from "lenis/react";

const PRIMARY_LINKS = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Skills", href: "#skills", icon: Wrench },
  { name: "Projects", href: "#projects", icon: Layers },
  { name: "Contact", href: "#contact", icon: Mail },
];

const MORE_LINKS = [
  { name: "About Me", href: "#about", icon: User },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Education", href: "#education", icon: GraduationCap },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const lenis = useLenis();

  const handleScroll = (e, href) => {
    // If we're on a project details page, just navigate to home with the hash
    if (window.location.pathname !== "/") {
      return; // Let standard behavior handle navigation to /#id
    }
    
    e.preventDefault();
    setIsOpen(false);
    setIsDropdownOpen(false);
    
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
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-6">
      <nav className="max-w-6xl mx-auto glass rounded-full px-4 py-3 flex items-center justify-between shadow-lg border border-glass-border">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center group outline-none" aria-label="Home">
          <div className="relative w-14 h-14 flex items-center justify-center">
            {/* Background glowing shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-accent/40 rounded-full blur-md group-hover:blur-xl transition-all duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"></div>
            
            {/* Typography Wrapper */}
            <div className="relative flex items-center justify-center group-hover:-translate-y-0.5 transition-transform duration-300">
              {/* FYR Typography */}
              <div className="flex tracking-tighter pr-0.5 items-end leading-none font-serif relative z-10">
                <span className="font-black text-2xl text-foreground dark:text-white drop-shadow-lg">F</span>
                <span className="font-black text-3xl text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent -ml-1.5 z-10 translate-y-0.5 drop-shadow-lg filter">Y</span>
                <span className="font-black text-2xl text-gray-500 dark:text-gray-400 -ml-1 drop-shadow-lg">R</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-3">
          {PRIMARY_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={`/${link.href}`}
                onClick={(e) => handleScroll(e, link.href)}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-primary/20 transition-all text-sm font-medium hover:-translate-y-0.5"
              >
                <span className="glass p-1.5 rounded-full border border-white/10 dark:border-white/5">
                  <Icon className="w-4 h-4" />
                </span>
                {link.name}
              </Link>
            );
          })}

          {/* More Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-primary/20 transition-all text-sm font-medium hover:-translate-y-0.5">
              More <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            
            <div className="absolute top-full right-0 mt-3 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0">
              <div className="glass-card rounded-2xl p-2 flex flex-col gap-1 shadow-xl">
                {MORE_LINKS.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.name}
                      href={`/${link.href}`}
                      onClick={(e) => handleScroll(e, link.href)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/20 hover:text-primary transition-colors text-sm font-medium"
                    >
                      <span className="glass p-1.5 rounded-full border border-white/10 dark:border-white/5">
                        <Icon className="w-4 h-4" />
                      </span>
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="pl-2 border-l border-glass-border">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-full glass">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 glass-card rounded-3xl p-6 flex flex-col space-y-3 shadow-xl">
          {[...PRIMARY_LINKS, ...MORE_LINKS].map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={`/${link.href}`}
                onClick={(e) => handleScroll(e, link.href)}
                className="flex items-center gap-4 px-4 py-3 rounded-xl glass hover:bg-primary/20 hover:text-primary transition-all text-base font-medium"
              >
                <span className="glass p-1.5 rounded-full border border-white/10 dark:border-white/5">
                  <Icon className="w-5 h-5" />
                </span>
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
