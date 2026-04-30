"use client";

import { SectionWrapper } from "../SectionWrapper";
import { Mail, MapPin, Send } from "lucide-react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary drop-shadow-sm">
          Get In Touch
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out to me!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Contact Info */}
        <div className="flex-1 space-y-6">
          <a href="mailto:farjanayeasmin003@gmail.com" className="block glass-card p-6 rounded-2xl flex items-center gap-6 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:border-primary/30 transition-all duration-300">
            <div className="p-4 glass text-primary rounded-full border border-primary/20">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-500">farjanayeasmin003@gmail.com</p>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/farjanayeasmin003/" target="_blank" rel="noreferrer" className="block glass-card p-6 rounded-2xl flex items-center gap-6 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:border-primary/30 transition-all duration-300">
            <div className="p-4 glass text-blue-500 rounded-full border border-blue-500/20">
              <FaLinkedin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">LinkedIn</h3>
              <p className="text-gray-500 transition-colors">/in/farjanayeasmin003/</p>
            </div>
          </a>

          <a href="https://www.facebook.com/farjanaYeasmin703" target="_blank" rel="noreferrer" className="block glass-card p-6 rounded-2xl flex items-center gap-6 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:border-primary/30 transition-all duration-300">
            <div className="p-4 glass text-blue-600 rounded-full border border-blue-600/20">
              <FaFacebook className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Facebook</h3>
              <p className="text-gray-500 transition-colors">farjanaYeasmin703</p>
            </div>
          </a>

          <a href="https://instagram.com/farjanayeasmin.rimi" target="_blank" rel="noreferrer" className="block glass-card p-6 rounded-2xl flex items-center gap-6 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:border-primary/30 transition-all duration-300">
            <div className="p-4 glass text-pink-500 rounded-full border border-pink-500/20">
              <FaInstagram className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Instagram</h3>
              <p className="text-gray-500 transition-colors">farjanayeasmin.rimi</p>
            </div>
          </a>

          <div className="block glass-card p-6 rounded-2xl flex items-center gap-6 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:border-primary/30 transition-all duration-300">
            <div className="p-4 glass text-green-500 rounded-full border border-green-500/20">
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
          <form action="https://formsubmit.co/farjanayeasmin003@gmail.com" method="POST" className="space-y-6">
            <input type="hidden" name="_next" value="http://localhost:3000" />
            <input type="hidden" name="_captcha" value="false" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
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
                  name="email"
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
                name="message"
                rows={5}
                required
                className="w-full bg-background/50 border border-white/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
