import React, { useState } from "react";
import { ArrowUpRight, BookOpen, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Notes() {
  const [selectedNote, setSelectedNote] = useState(null);

  const notes = [
    {
      id: "context-caching",
      date: "OCT 2026",
      title: "Why Context Caching Changes the Economics of RAG",
      readTime: "4 min read",
      topic: "AI Architecture",
      content: `Large language model API costs used to scale quadratically with continuous conversation histories. With the advent of prompt context caching, high-dimensional vector retrieval becomes significantly cheaper and faster. By structuring document ingestion into static reference blocks, we can achieve sub-second generation times while slashing operational costs by up to 80%.`,
    },
    {
      id: "zero-failure-n8n",
      date: "AUG 2026",
      title: "Zero-Failure Automation Workflows: Lessons from 10k WhatsApp Messages",
      readTime: "5 min read",
      topic: "Automations",
      content: `Commercial WhatsApp CRM workflows cannot afford missed webhooks or silent failures. By engineering exponential backoff retries, dead-letter logging tables in PostgreSQL, and strict payload validation in n8n, client booking engines can maintain 99.98% reliability without manual intervention.`,
    },
    {
      id: "embedded-iot-rbvps",
      date: "JUN 2026",
      title: "Designing Autonomous IoT Systems for the Field (RBVPS Winner)",
      readTime: "6 min read",
      topic: "IoT & Hardware",
      content: `Building agricultural hardware that survives harsh field conditions taught me more about software resilience than pure web dev. When Wi-Fi drops, the ESP32 firmware must execute localized threshold logic autonomously rather than waiting on cloud sync. Offline-first is not a luxury; it is the baseline.`,
    },
    {
      id: "fractional-speed",
      date: "MAY 2026",
      title: "The Fractional Mindset: Moving from 0 to 1 in Days, Not Months",
      readTime: "3 min read",
      topic: "Product Engineering",
      content: `The greatest waste in early-stage product engineering is premature optimization. Instead of over-engineering microservices for problems you don't yet have, focus on vertical slices: a crisp UI, one bulletproof API endpoint, and rapid user feedback loops.`,
    },
  ];

  return (
    <section id="notes" className="w-full py-24 sm:py-32 bg-black text-white border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white">
            Notes
          </h2>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mt-2 sm:mt-0">
            Thoughts on AI, Systems & Architecture
          </span>
        </div>

        {/* Notes List */}
        <div className="border-b border-neutral-900">
          {notes.map((note) => (
            <div
              key={note.id}
              onClick={() => setSelectedNote(note)}
              className="py-8 sm:py-10 border-t border-neutral-900 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline cursor-pointer group hover:bg-neutral-950/60 transition-colors px-2 rounded-xl"
            >
              {/* Date */}
              <div className="md:col-span-2 text-xs font-mono text-neutral-500">
                {note.date}
              </div>

              {/* Title */}
              <div className="md:col-span-7">
                <h3 className="text-lg sm:text-xl font-normal text-white group-hover:text-neutral-300 transition-colors flex items-center gap-2">
                  <span>{note.title}</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400" />
                </h3>
              </div>

              {/* Topic & Read Time */}
              <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-4 text-xs font-mono text-neutral-500">
                <span className="px-2.5 py-0.5 rounded-full border border-neutral-800 text-neutral-400">
                  {note.topic}
                </span>
                <span>{note.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Note Reader Modal */}
      <AnimatePresence>
        {selectedNote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedNote(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl bg-neutral-950 border border-neutral-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedNote(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                aria-label="Close note"
              >
                <X size={16} />
              </button>

              <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2">
                {selectedNote.topic} • {selectedNote.date} • {selectedNote.readTime}
              </div>

              <h3 className="text-2xl font-medium tracking-tight text-white mb-6">
                {selectedNote.title}
              </h3>

              <div className="text-neutral-300 font-light leading-relaxed text-base border-t border-neutral-900 pt-6">
                <p>{selectedNote.content}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
