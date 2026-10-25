import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const featuredWorks = [
    {
      id: "idemta-cloud",
      title: "IDEMTA Identity Platform",
      subtitle: "Cloud ID card generation & workflow software",
      quote: "Built with my team in 2026: digital data collection, background removal, photo cropping, card design, and PVC RFID print production.",
      author: "Team Enterprise Software • 2026",
      tags: ["CLOUD SOFTWARE", "REACT", "IMAGE PROCESSING", "INVOICING"],
      gradient: "from-blue-950/60 via-neutral-900 to-black",
      accentColor: "#3b82f6",
      link: "#work",
    },
    {
      id: "rag-engine",
      title: "RAG Chatbot Engine",
      subtitle: "The enterprise document synthesis engine",
      quote: "Ingesting massive documentation corpuses into instant, context-grounded conversational intelligence with vector search.",
      author: "AI Systems Engineering",
      tags: ["AI & LLMS", "VECTOR RETRIEVAL", "PYTHON"],
      gradient: "from-emerald-950/60 via-neutral-900 to-black",
      accentColor: "#10b981",
      link: "#work",
    },
    {
      id: "whatsapp-suite",
      title: "WhatsApp Automation Suite",
      subtitle: "Autonomous booking & client CRM loops",
      quote: "Engineered commercial workflows with n8n and webhooks deployed for active medical and real estate businesses.",
      author: "Commercial Client Deployment",
      tags: ["AUTOMATION", "N8N", "NODE.JS"],
      gradient: "from-sky-950/60 via-neutral-900 to-black",
      accentColor: "#38bdf8",
      link: "#work",
    },
    {
      id: "smart-farming",
      title: "Smart Farming IoT Platform",
      subtitle: "Autonomous environmental telemetry & irrigation",
      quote: "National level representation at RBVPS. Real-time soil telemetry and automated pump actuation running on ESP32 microcontrollers.",
      author: "National Winner • RBVPS",
      tags: ["IOT HARDWARE", "ESP32", "C++ FIRMWARE"],
      gradient: "from-amber-950/60 via-neutral-900 to-black",
      accentColor: "#f59e0b",
      link: "#work",
    },
    {
      id: "dev-assistant",
      title: "Personal Bot Assistant",
      subtitle: "Code debugging & systems workflow companion",
      quote: "Engineered to inspect runtime errors, debug complex codebases, synthesize technical solutions, and streamline development.",
      author: "Systems Lab",
      tags: ["CODE DEBUGGING", "PYTHON", "DEVELOPER TOOLS"],
      gradient: "from-purple-950/60 via-neutral-900 to-black",
      accentColor: "#c084fc",
      link: "#work",
    },
  ];

  return (
    <section id="hero" className="w-full pt-44 sm:pt-56 pb-28 sm:pb-36 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        
        {/* Headline & Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          {/* Grounded, authentic title tag */}
          <div className="text-xs sm:text-sm font-mono tracking-[0.2em] text-neutral-400 uppercase mb-6 flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-white/90" />
            <span>VEDANSH GARG • SOFTWARE & AI SYSTEMS ENGINEER</span>
          </div>

          {/* Balanced, refined headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-medium tracking-tight text-white leading-[1.08] mb-6">
            Your engineering partner for first-generation products.
          </h1>

          {/* Minimalist Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl text-neutral-400 font-light leading-relaxed max-w-3xl">
            I help founders turn uncertainty into clarity and ideas into products.
          </p>
        </motion.div>

        {/* Featured Showcase Header & Scroll Buttons - Pushed down for generous breathing room */}
        <div className="mt-32 sm:mt-40 flex items-center justify-between mb-6">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">
            Featured Engagements
          </span>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-9 h-9 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-9 h-9 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Horizontal Card Row */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-6 scroll-smooth -mx-6 px-6 sm:-mx-10 sm:px-10 md:-mx-16 md:px-16"
        >
          {featuredWorks.map((work) => (
            <motion.div
              key={work.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={`flex-none w-[85vw] sm:w-[480px] md:w-[540px] h-[390px] sm:h-[430px] rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-neutral-800/80 bg-gradient-to-b ${work.gradient} relative overflow-hidden group select-none`}
            >
              {/* Subtle accent glow */}
              <div
                className="absolute -top-24 -right-24 w-60 h-60 rounded-full blur-[100px] opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity"
                style={{ backgroundColor: work.accentColor }}
              />

              {/* Card Top: Title & Subtitle */}
              <div>
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-2">
                    {work.title}
                  </h3>
                  <a
                    href="#work"
                    className="w-9 h-9 rounded-full bg-neutral-900/80 border border-neutral-700/60 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-neutral-500 transition-all opacity-0 group-hover:opacity-100"
                    aria-label={`View ${work.title}`}
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>
                <p className="text-sm sm:text-base text-neutral-400 font-normal">
                  {work.subtitle}
                </p>
              </div>

              {/* Card Middle: Quote / Highlight */}
              <div className="my-auto py-4">
                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                  "{work.quote}"
                </p>
                <span className="block mt-2 text-xs text-neutral-500 font-mono">
                  — {work.author}
                </span>
              </div>

              {/* Card Bottom: Pill Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono tracking-wider text-neutral-300 bg-neutral-900/90 border border-neutral-700/50 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
