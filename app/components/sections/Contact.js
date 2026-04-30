"use client";

import { SectionWrapper } from "../SectionWrapper";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully! (This is a demo)");
      e.target.reset();
    }, 1500);
  };

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out to me!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Contact Info */}
        <div className="flex-1 space-y-6">
          <div className="glass-card p-6 rounded-2xl flex items-center gap-6 hover:-translate-y-1 transition-transform">
            <div className="p-4 bg-primary/10 text-primary rounded-full">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-500">hello@farjanarimi.com</p>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-2xl flex items-center gap-6 hover:-translate-y-1 transition-transform">
            <div className="p-4 bg-accent/10 text-accent rounded-full">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-500">+880 1234 567890</p>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-2xl flex items-center gap-6 hover:-translate-y-1 transition-transform">
            <div className="p-4 bg-green-500/10 text-green-500 rounded-full">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="text-gray-500">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-[1.5] glass-card p-8 rounded-3xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-background/50 border border-white/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-background/50 border border-white/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea 
                id="message" 
                rows={5}
                required
                className="w-full bg-background/50 border border-white/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
