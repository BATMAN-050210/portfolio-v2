import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Award, Code2, Sparkles, Terminal } from "lucide-react";
import portraitImage from "../assets/Thoughtful Creator in Red Studio.png";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="w-full py-24 sm:py-32 bg-black text-white border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Portrait Photo */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <div className="w-full max-w-[440px] aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 relative group shadow-2xl">
                <img
                  src={portraitImage}
                  alt="Vedansh portrait"
                  className="w-full h-full object-cover object-[center_15%] filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                
                {/* Subtle caption bottom */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-neutral-300">
                  <span className="font-medium tracking-wider">VEDANSH GARG</span>
                  <span className="text-neutral-400">Software & AI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Big Headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.08] mb-8">
              I help founders turn uncertainty into clarity and ideas into products.
            </h2>

            {/* Narrative Body */}
            <div className="space-y-6 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
              <p>
                I bring deep experience designing and engineering products to help early-stage teams and founders get off the ground. I work across full-stack systems, agentic AI pipelines, and commercial automation, helping teams turn ambitious ideas into products people love.
              </p>
              <p>
                As a technical partner, I help shape the core experience, build prototypes, and bring the product architecture into focus. From early explorations through production launch, I help teams decide what matters most, test their assumptions, and bring a clear point of view to the details of what they ship.
              </p>
            </div>

            {/* Read More Trigger */}
            <div className="mt-8">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group py-1"
              >
                <span>{isExpanded ? "Show less" : "Read more"}</span>
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : "group-hover:translate-x-0.5"}`}
                />
              </button>
            </div>

            {/* Expanded Bio Drawer */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-8 pt-8 border-t border-neutral-900"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-2">
                        <Award size={14} className="text-neutral-400" />
                        Recognition & Background
                      </h4>
                      <p className="text-neutral-400 font-light leading-relaxed">
                        Represented at the National Level (RBVPS) for developing an autonomous ESP32 IoT farming platform. Blending rigorous academic foundations with high-velocity production delivery.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-2">
                        <Terminal size={14} className="text-neutral-400" />
                        Technical Core
                      </h4>
                      <p className="text-neutral-400 font-light leading-relaxed">
                        React, Next.js, Node.js, Python, OpenAI / Anthropic APIs, LangChain, Pinecone vector indexing, n8n webhook orchestration, and C++ microcontroller firmware.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
