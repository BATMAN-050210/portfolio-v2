import React from "react";
import { motion } from "framer-motion";

export default function Approach() {
  const steps = [
    {
      number: "1",
      title: "A thought partner",
      description:
        "I bring a technical point of view, challenge assumptions, and sharpen the architecture, not just execute tasks. This helps us skip past attractive wrong turns and make the right calls together from day one.",
    },
    {
      number: "2",
      title: "Fractional by design",
      description:
        "I work directly inside your team, joining Slack, standups, and day-to-day conversations. High velocity execution helps me get up to speed quickly, focus on what moves the needle, and produce the work your product needs without the full-time footprint.",
    },
    {
      number: "3",
      title: "One flat weekly rate",
      description:
        "Nothing is out of scope. One predictable weekly rate gives us the freedom to focus on the work, build with total agility, and remain flexible as product priorities shift.",
    },
    {
      number: "4",
      title: "From start to finish",
      description:
        "We start with a focused engagement to make sure we work well together. From there, I stick around for as long as it takes to go from initial prototype to production scale and product-market fit.",
    },
  ];

  return (
    <section id="approach" className="w-full py-24 sm:py-32 bg-black text-white border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        {/* Section Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white mb-16 sm:mb-20">
          Approach
        </h2>

        {/* Numbered Rows List */}
        <div className="border-b border-neutral-900">
          {steps.map((step) => (
            <div
              key={step.number}
              className="py-12 sm:py-16 border-t border-neutral-900 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-baseline group"
            >
              {/* Left Column: Number & Title */}
              <div className="md:col-span-5 flex items-baseline gap-6 sm:gap-10">
                <span className="font-mono text-sm sm:text-base text-neutral-500 w-4 select-none">
                  {step.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-normal text-white tracking-tight group-hover:text-neutral-200 transition-colors">
                  {step.title}
                </h3>
              </div>

              {/* Right Column: Description */}
              <div className="md:col-span-7 md:pl-4">
                <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
