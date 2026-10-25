import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Layers, Palette, Terminal, Zap } from "lucide-react";

export default function Services() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0.05, 0.85], [0, 1]);

  const steps = [
    {
      num: "01",
      icon: Layers,
      title: "Deconstruct & Define",
      desc: "Deep analysis of system requirements, user personas, LLM orchestration constraints, and scalable API architecture.",
      rotation: "rotate-1",
      align: "self-end md:mr-24"
    },
    {
      num: "02",
      icon: Palette,
      title: "Design & Prototype",
      desc: "Creating high-voltage UI mockups, testing interactive physics, and choreographing smooth micro-animations.",
      rotation: "-rotate-1",
      align: "self-start md:ml-24"
    },
    {
      num: "03",
      icon: Terminal,
      title: "Build & Automate",
      desc: "Engineering high-performance React/Next.js frontends, wiring vector search, and constructing resilient automated n8n workflows.",
      rotation: "rotate-2",
      align: "self-end md:mr-24"
    },
    {
      num: "04",
      icon: Zap,
      title: "Deploy & Scale",
      desc: "Rigorous performance audits, lighthouse optimization, sub-millisecond edge latency, and seamless global deployment.",
      rotation: "-rotate-2",
      align: "self-start md:ml-24"
    }
  ];

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative bg-[#07070A] text-white py-24 md:py-36 w-full overflow-hidden grid-pattern border-t border-white/5"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-red/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary-red/30 bg-primary-red/10 text-xs font-mono font-bold tracking-widest uppercase mb-4 text-primary-red">
            <Sparkles size={12} className="text-primary-red" />
            ENGINEERING WORKFLOW
          </div>

          <div className="relative max-w-3xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight uppercase font-sans text-white">
              Precision Architecture from <span className="bg-gradient-to-r from-primary-red via-rose-400 to-amber-300 bg-clip-text text-transparent">Concept to Launch.</span>
            </h2>
          </div>

          <p className="text-neutral-400 font-light text-base md:text-lg max-w-xl mt-6 leading-relaxed">
            Every project follows a disciplined engineering lifecycle designed for maximum velocity, uncompromised performance, and unforgettable aesthetics.
          </p>
        </div>

        {/* Timeline Path and Cards */}
        <div className="relative min-h-[1200px] flex flex-col justify-between items-center py-12">
          {/* Timeline SVG (Desktop) */}
          <div className="absolute inset-0 w-full h-full hidden md:block pointer-events-none">
            <svg
              viewBox="0 0 1200 1200"
              fill="none"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M 600,0 C 850,150 850,250 600,400 C 350,550 350,650 600,800 C 850,950 850,1050 600,1200"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="3"
                strokeDasharray="8 8"
              />

              <motion.path
                d="M 600,0 C 850,150 850,250 600,400 C 350,550 350,650 600,800 C 850,950 850,1050 600,1200"
                stroke="#FF2E5B"
                strokeWidth="4"
                strokeLinecap="round"
                style={{ pathLength }}
                className="drop-shadow-[0_0_12px_#FF2E5B]"
              />
            </svg>
          </div>

          {/* Timeline SVG (Mobile) */}
          <div className="absolute inset-0 w-full h-full md:hidden pointer-events-none">
            <svg
              viewBox="0 0 200 1200"
              fill="none"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M 100,0 L 100,1200"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              <motion.path
                d="M 100,0 L 100,1200"
                stroke="#FF2E5B"
                strokeWidth="3"
                style={{ pathLength }}
                className="drop-shadow-[0_0_8px_#FF2E5B]"
              />
            </svg>
          </div>

          {/* Cards List */}
          <div className="w-full flex flex-col gap-24 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`w-full md:w-[46%] flex flex-col ${step.align}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.6, type: "spring", stiffness: 80 }
                  }}
                  viewport={{ once: false, amount: 0.35 }}
                  whileHover={{ scale: 1.03, y: -4, transition: { duration: 0.25 } }}
                  className={`relative flex flex-col p-8 md:p-10 rounded-3xl border border-white/10 bg-[#101018]/90 backdrop-blur-xl text-white shadow-[0_15px_35px_rgba(0,0,0,0.6)] cursor-default group transition-all duration-300 hover:border-primary-red/50 hover:shadow-[0_0_35px_rgba(255,46,91,0.25)] ${step.rotation}`}
                >
                  {/* Subtle top indicator */}
                  <div className="flex items-center justify-between w-full mb-6">
                    <span className="font-mono text-3xl md:text-4xl text-primary-red font-black tracking-tighter drop-shadow-[0_0_8px_rgba(255,46,91,0.6)]">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-primary-red group-hover:scale-110 group-hover:bg-primary-red/10 transition-all duration-300">
                      <step.icon size={20} />
                    </div>
                  </div>

                  {/* Heading */}
                  <h3 className="text-2xl font-black tracking-tight uppercase mb-3 leading-snug text-white group-hover:text-rose-200 transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-400 group-hover:text-neutral-300 text-sm md:text-base font-light leading-relaxed transition-colors duration-300">
                    {step.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-center items-center mt-28 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary-red/30 bg-primary-red/10 text-primary-red font-mono text-base md:text-lg font-bold tracking-wider hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,46,91,0.25)]"
          >
            <Sparkles size={18} />
            <span>Built For Extreme Performance & Scale</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
