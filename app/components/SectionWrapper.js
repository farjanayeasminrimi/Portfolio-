"use client";

import { motion } from "framer-motion";

export function SectionWrapper({ children, id, className = "" }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`min-h-screen py-24 flex items-center relative ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        {children}
      </div>
    </motion.section>
  );
}
