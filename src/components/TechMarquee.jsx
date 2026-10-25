import React from "react";
import { motion } from "framer-motion";

export default function TechMarquee() {
  const skills = [
    { name: "Python", category: "Core" },
    { name: "LangChain", category: "AI & LLMs" },
    { name: "OpenAI API", category: "AI & LLMs" },
    { name: "Pinecone / Chroma", category: "Vector DB" },
    { name: "n8n Automation", category: "Workflows" },
    { name: "React.js", category: "Frontend" },
    { name: "Next.js", category: "Full Stack" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Node.js", category: "Backend" },
    { name: "ESP32 / IoT", category: "Hardware" },
    { name: "PostgreSQL", category: "Database" },
    { name: "WhatsApp Cloud API", category: "Integration" },
    { name: "Framer Motion", category: "Animation" },
    { name: "C++ / Embedded", category: "Systems" }
  ];

  return (
    <div className="w-full bg-[#08080C] py-8 border-y border-white/5 overflow-hidden relative">
      {/* Side gradient fades */}
      <div className="absolute left-0 top-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#08080C] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#08080C] to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <motion.div
        className="flex gap-6 w-max items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25
        }}
      >
        {[...skills, ...skills].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-primary-red/50 hover:bg-white/[0.06] transition-all duration-300 group cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-red shadow-[0_0_8px_#FF2E5B] group-hover:scale-125 transition-transform" />
            <span className="text-sm font-bold text-white tracking-wide font-sans">
              {item.name}
            </span>
            <span className="text-[10px] font-mono uppercase text-neutral-400 px-2 py-0.5 rounded-md bg-white/[0.05]">
              {item.category}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
