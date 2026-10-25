import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ExternalLink, Code2, CheckCircle2, ChevronRight, Layers, Smartphone, Monitor } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: "idemta-cloud",
      title: "IDEMTA Identity Platform",
      category: "Cloud Platform & Enterprise Software",
      year: "2026",
      summary: "A complete cloud-based ID card software platform engineered with my team for schools, offices, and card manufacturers. Features digital data collection, background removal, photo cropping, card designing, PVC RFID print generation, and automated invoicing.",
      tags: ["React", "Cloud Architecture", "Canvas API", "RFID / Print", "Invoicing", "Team Project"],
      highlight: "Team Project 2026: End-to-end platform connecting vendors, institutions, and printing presses.",
      components: [
        "Online digital collection and bulk Excel/database ingestion of school and corporate employee records.",
        "Integrated photography module with automated photo cropping and instant background removal.",
        "Interactive drag-and-drop card designing canvas with dynamic data fields and template management.",
        "Job order lifecycle management tracking creation, verification, printing, and delivery dispatch.",
        "High-precision PVC RFID print file generator outputting press-ready vector/raster layouts.",
        "Automated GST invoice generation, job reporting, and status tracking with email notifications."
      ],
      mockupType: "desktop",
      mockupData: {
        title: "IDEMTA Cloud",
        screenType: "card-designer",
        accent: "#3b82f6",
        badge: "RFID PVC READY",
        metric: "10,000+ Cards Processed",
      },
      github: null,
      live: "https://idemta.com",
      status: "Team Project • 2026",
    },
    {
      id: "dev-assistant",
      title: "Personal Bot Assistant",
      category: "Developer Tools & Debugging",
      year: "2025",
      summary: "A personal engineering bot assistant built to automate developer workflows, inspect terminal logs, diagnose complex code errors, and synthesize instant technical resolutions.",
      tags: ["Python", "Code Debugging", "Developer Tooling", "OpenAI", "System APIs"],
      highlight: "Context-aware code debugging, stack trace diagnosis, and automated dev scripting.",
      components: [
        "Runtime error parsing module analyzing stack traces, syntax errors, and missing dependencies.",
        "System-level command bridge executing shell diagnostics and workspace automation.",
        "LLM reasoning loop providing step-by-step code solutions, refactors, and test generation.",
        "Real-time project log ingestion and continuous developer feedback loop."
      ],
      mockupType: "terminal",
      mockupData: {
        title: "DevBot Engine",
        screenType: "code-debugger",
        accent: "#a855f7",
        badge: "0 ERRORS FOUND",
        metric: "Sub-50ms Log Diagnosis",
      },
      github: "https://github.com",
      live: null,
      status: "Active Lab Tool",
    },
    {
      id: "rag-engine",
      title: "RAG Chatbot Engine",
      category: "AI & LLM Architecture",
      year: "2026",
      summary: "An enterprise-grade retrieval-augmented generation pipeline engineered to ingest multi-source documents, query high-dimensional vector spaces, and synthesize grounded responses.",
      tags: ["LangChain", "OpenAI API", "Pinecone", "Python", "FastAPI"],
      highlight: "Sub-second context retrieval with semantic chunking & memory windows.",
      components: [
        "Vector database (Pinecone / ChromaDB) integration for high-dimensional semantic search and retrieval context caching.",
        "LLM orchestration pipeline designed using LangChain to manage context windows, prompting, and conversational memory.",
        "Document ingestion engine to parse, clean, and chunk multi-format text sources using semantic splitters.",
        "Retrieval-Augmented Generation query synthesis utilizing OpenAI API for generating natural, source-grounded answers.",
        "Modular chat interface displaying message streams and source document citations."
      ],
      mockupType: "mobile",
      mockupData: {
        title: "RAG Vector AI",
        screenType: "chat",
        accent: "#10b981",
        badge: "99.4% GROUNDED",
        metric: "Pinecone Index Synced",
      },
      github: "https://github.com",
      live: null,
      status: "Production Ready",
    },
    {
      id: "whatsapp-suite",
      title: "WhatsApp Automation Suite",
      category: "Commercial Workflow Automation",
      year: "2025",
      summary: "Commercial end-to-end automation suite engineered with n8n, deployed for real estate agencies and medical practices to automate booking schedules, reminders, and client follow-ups.",
      tags: ["n8n", "WhatsApp Cloud API", "Node.js", "PostgreSQL", "Webhooks"],
      highlight: "Commercial deployment with 100% automated booking sync to Google Calendar.",
      components: [
        "n8n Workflow Engine coordinating webhooks, complex conditional branching, and API request payloads.",
        "WhatsApp Cloud API / Twilio integration sending automated confirmation updates and media attachments.",
        "Central PostgreSQL database storing booking schedules, client information, and property listing schemas.",
        "Bi-directional Google Calendar sync mapping booked slots and preventing scheduling conflicts automatically.",
        "Dynamic content generation engine suggesting custom listings and follow-ups based on recipient replies."
      ],
      mockupType: "mobile",
      mockupData: {
        title: "WhatsApp CRM",
        screenType: "whatsapp",
        accent: "#38bdf8",
        badge: "ZERO MANUAL TOUCH",
        metric: "10k+ Messages Dispatched",
      },
      github: null,
      live: "https://whatsapp.com",
      status: "Client Sold & Live",
    },
    {
      id: "smart-farming",
      title: "AI-Powered Smart Farming System",
      category: "IoT & Embedded Telemetry",
      year: "2025",
      summary: "An autonomous agricultural telemetry & irrigation platform designed around the ESP32 microcontroller. Won National-level representation at RBVPS for hardware innovation.",
      tags: ["ESP32", "C++", "IoT Sensors", "Blynk Cloud", "Hardware"],
      highlight: "National Winner at RBVPS. Automated moisture-triggered offline irrigation logic.",
      components: [
        "ESP32 Microcontroller managing core sensor polling and continuous Wi-Fi connection states.",
        "Capacitive soil moisture sensors and DHT22 sensors capturing real-time environmental telemetry.",
        "Relay-driven water pump controller executing automated, moisture-triggered irrigation logic offline.",
        "C++ Firmware designed for microcontrollers with calibration filters and connection error recovery.",
        "Blynk IoT Cloud dashboard visualization plotting telemetry charts and pushing critical alert notifications."
      ],
      mockupType: "desktop",
      mockupData: {
        title: "ESP32 AgriNode",
        screenType: "iot-telemetry",
        accent: "#f59e0b",
        badge: "RBVPS NATIONAL WINNER",
        metric: "Autonomous Pump Active",
      },
      github: "https://github.com",
      live: null,
      status: "National Award (RBVPS)",
    },
  ];

  const filters = ["All", "Cloud Platform & Enterprise Software", "Developer Tools & Debugging", "AI & LLM Architecture", "Commercial Workflow Automation", "IoT & Embedded Telemetry"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  // Helper render for simulated modern device mockups matching Gabriel Valdivia's showcase
  const renderCardMockup = (project) => {
    const { mockupType, mockupData } = project;

    if (mockupType === "mobile") {
      return (
        <div className="w-full h-full flex flex-col justify-center items-center py-4">
          {/* Sleek Smartphone Frame */}
          <div className="w-[190px] sm:w-[210px] h-[310px] sm:h-[330px] rounded-[36px] bg-[#121216] border-[4px] border-[#26262e] shadow-2xl p-3 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            {/* Dynamic Island */}
            <div className="w-20 h-3 bg-black rounded-full mx-auto mb-2 flex-none" />
            
            {/* Screen Content */}
            <div className="flex-1 flex flex-col justify-between text-[11px] font-sans">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                  <span className="font-semibold text-white">{mockupData.title}</span>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: mockupData.accent }} />
                </div>
                
                {mockupData.screenType === "chat" ? (
                  <div className="space-y-2">
                    <div className="p-2 rounded-xl bg-neutral-900 border border-white/5 text-neutral-300">
                      "Synthesizing documentation from Vector Base..."
                    </div>
                    <div className="p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-mono text-[9px]">
                      [Cite #4] Grounded match: 99.4%
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="p-2 rounded-xl bg-neutral-900 border border-white/5 text-neutral-300">
                      "New consultation booked: Dr. Mehta clinic"
                    </div>
                    <div className="p-2 rounded-xl bg-sky-950/40 border border-sky-500/30 text-sky-300 font-mono text-[9px]">
                      ✓ Calendar Synced • Oct 28
                    </div>
                  </div>
                )}
              </div>

              <div className="p-2 rounded-xl bg-neutral-900/90 border border-white/5 flex items-center justify-between text-[10px] text-neutral-400">
                <span>{mockupData.metric}</span>
                <span className="text-[9px] font-mono text-white/70">ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (mockupType === "terminal") {
      return (
        <div className="w-full h-full flex flex-col justify-center items-center py-4">
          {/* Terminal / Code Window Frame */}
          <div className="w-[260px] sm:w-[290px] h-[310px] sm:h-[330px] rounded-2xl bg-[#0d0d11] border border-neutral-800 shadow-2xl p-4 flex flex-col justify-between font-mono text-[10px] group-hover:scale-105 transition-transform duration-500">
            <div>
              {/* Window Controls */}
              <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5 mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[9px] text-neutral-500">devbot --debug</span>
              </div>

              {/* Code Debugger Snippet */}
              <div className="space-y-1.5 text-neutral-400">
                <p className="text-neutral-500">$ inspecting runtime stack...</p>
                <p className="text-purple-300">import assistant.debugger</p>
                <p className="text-neutral-300">✓ AST tree reconstructed</p>
                <div className="p-2 rounded-lg bg-purple-950/30 border border-purple-500/30 text-purple-200 mt-2 text-[9px]">
                  [Resolve] Line 42: null exception bypassed with safe fallback.
                </div>
              </div>
            </div>

            <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between text-[9px] text-neutral-400">
              <span className="text-emerald-400">{mockupData.badge}</span>
              <span>{mockupData.metric}</span>
            </div>
          </div>
        </div>
      );
    }

    // Default Desktop / Cloud App Mockup (IDEMTA / Smart Farming)
    return (
      <div className="w-full h-full flex flex-col justify-center items-center py-4">
        {/* Modern App Window Frame */}
        <div className="w-[260px] sm:w-[300px] h-[310px] sm:h-[330px] rounded-2xl bg-[#0f0f14] border border-neutral-800 shadow-2xl p-4 flex flex-col justify-between group-hover:scale-105 transition-transform duration-500">
          <div>
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: mockupData.accent }} />
                <span className="text-xs font-medium text-white">{mockupData.title}</span>
              </div>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300">
                2026
              </span>
            </div>

            {/* Interactive Preview Canvas */}
            {project.id === "idemta-cloud" ? (
              <div className="space-y-2.5 text-[10px]">
                <div className="p-2.5 rounded-xl bg-blue-950/30 border border-blue-500/30">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-blue-300 font-medium">Digital ID Designer</span>
                    <span className="text-[9px] font-mono text-blue-400">PVC RFID</span>
                  </div>
                  <div className="w-full h-16 bg-neutral-900/90 rounded-lg border border-dashed border-blue-500/40 flex items-center justify-center text-[9px] text-neutral-400">
                    [Photo Crop + BG Removed]
                  </div>
                </div>
                <div className="flex items-center justify-between text-[9px] text-neutral-400 px-1">
                  <span>Job Order #8401</span>
                  <span className="text-emerald-400">✓ Ready to Print</span>
                </div>
              </div>
            ) : (
              <div className="space-y-2.5 text-[10px]">
                <div className="p-2.5 rounded-xl bg-amber-950/30 border border-amber-500/30">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-amber-300 font-medium">ESP32 Telemetry</span>
                    <span className="text-[9px] font-mono text-amber-400">RBVPS Award</span>
                  </div>
                  <div className="w-full h-16 bg-neutral-900/90 rounded-lg flex flex-col items-center justify-center text-[9px] text-neutral-300">
                    <span className="text-base font-bold text-white">64%</span>
                    <span className="text-neutral-400 text-[8px]">Soil Moisture Level</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[9px] text-neutral-400 px-1">
                  <span>Pump Relay: Auto</span>
                  <span className="text-emerald-400">✓ Online</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between text-[9px] text-neutral-400 font-mono">
            <span>{mockupData.badge}</span>
            <span className="text-white">{mockupData.metric}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="work" className="w-full py-24 sm:py-32 bg-black text-white border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 mb-12">
        
        {/* Header with Title and "See all" */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white">
              Work
            </h2>
            <p className="mt-3 text-neutral-400 font-light text-base sm:text-lg">
              Selected systems, cloud platforms, and engineering software.
            </p>
          </div>

          {/* Minimalist Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors ${
                  activeFilter === filter
                    ? "bg-white text-black font-medium"
                    : "text-neutral-400 hover:text-white border border-neutral-800"
                }`}
              >
                {filter === "All" ? "All Works" : filter.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* FILTERABLE CASE STUDY DETAILS GRID (First under Work header) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 mb-24">
        <div className="border-b border-neutral-900 mb-8 pb-4 flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">
            Detailed Project Specifications & Deliverables
          </span>
          <span className="text-xs font-mono text-neutral-500">
            {filteredProjects.length} Engagements
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-3xl border border-neutral-800/80 bg-neutral-950 p-8 sm:p-10 flex flex-col justify-between hover:border-neutral-700 transition-all duration-300 min-h-[380px]"
            >
              {/* Card Top */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-4">
                  <span>{project.category}</span>
                  <div className="flex items-center gap-2">
                    <span>{project.year}</span>
                    <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-neutral-500 group-hover:text-white transition-all" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-4 group-hover:text-neutral-200 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed mb-6">
                  {project.summary}
                </p>
              </div>

              {/* Card Bottom */}
              <div className="pt-6 border-t border-neutral-900 flex flex-col gap-3">
                <div className="text-xs font-mono text-neutral-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                  <span>{project.status}</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md text-[10px] font-mono text-neutral-400 bg-neutral-900 border border-neutral-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTINUOUS MOVING SHOWCASE (Below detailed specifications, pauses on hover) */}
      <div className="w-full relative marquee-pause-on-hover border-t border-neutral-900 pt-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 mb-8 flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">
            Interactive Interface Showcase
          </span>
          <span className="text-xs font-mono text-neutral-600">
            Hover to pause & inspect
          </span>
        </div>

        {/* Seamless infinite marquee track */}
        <div className="w-full overflow-hidden relative">
          <div className="animate-marquee-infinite gap-6 py-4 px-3">
            {[...projects, ...projects].map((project, idx) => (
              <div
                key={`showcase-${project.id}-${idx}`}
                onClick={() => setSelectedProject(project)}
                className="flex-none w-[300px] sm:w-[340px] md:w-[370px] h-[450px] rounded-3xl bg-[#0c0c10] border border-neutral-800/80 p-6 flex flex-col justify-between cursor-pointer hover:border-neutral-700 hover:scale-[1.02] transition-all duration-300 shadow-xl group relative overflow-hidden"
              >
                {/* Mockup Frame */}
                <div className="w-full flex-1 flex items-center justify-center overflow-hidden">
                  {renderCardMockup(project)}
                </div>

                {/* Showcase Card Footer Info */}
                <div className="border-t border-neutral-900 pt-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-medium text-white group-hover:text-neutral-200 transition-colors">
                      {project.title}
                    </h4>
                    <span className="text-xs font-mono text-neutral-500">
                      {project.category}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-neutral-600 transition-all">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-3xl p-8 sm:p-10 max-h-[90vh] overflow-y-auto no-scrollbar shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>

              <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2">
                {selectedProject.category} • {selectedProject.year}
              </div>

              <h3 className="text-3xl font-medium tracking-tight text-white mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-base text-neutral-300 font-light leading-relaxed mb-6">
                {selectedProject.summary}
              </p>

              {/* Architectural Highlights */}
              <div className="border-t border-neutral-900 pt-6 mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">
                  Engineering Architecture & Core Deliverables
                </h4>
                <ul className="space-y-3">
                  {selectedProject.components.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-neutral-300 font-light">
                      <CheckCircle2 size={16} className="text-neutral-500 mt-0.5 flex-none" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags & Action links */}
              <div className="border-t border-neutral-900 pt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono text-neutral-300 bg-neutral-900 border border-neutral-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 hover:border-neutral-600 text-xs font-mono text-white transition-colors"
                    >
                      <Code2 size={14} />
                      <span>Repository</span>
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-mono font-medium hover:bg-neutral-200 transition-colors"
                    >
                      <span>Live Site</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
