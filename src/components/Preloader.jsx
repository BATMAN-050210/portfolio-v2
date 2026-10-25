import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader({ onComplete }) {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Shutter exit starts after text clip-path animation
    const timer = setTimeout(() => {
      setIsDone(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 900);
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const duration = 1.4;
  const ease = [0.76, 0, 0.24, 1];

  return (
    <motion.div
      className="fixed inset-0 bg-[#07070A] z-[100000] flex flex-col items-center justify-center overflow-hidden"
      initial={{ y: 0 }}
      animate={isDone ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.9, ease: ease }}
    >
      {/* Ambient background glow orb */}
      <div className="absolute w-[450px] h-[450px] bg-primary-red/15 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        className="relative select-none text-center z-10 flex flex-col items-center gap-4"
        animate={isDone ? { scale: 0.85, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: ease }}
      >
        {/* Subtle Tech Badge */}
        <div className="flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary-red/30 bg-primary-red/10 text-[10px] font-mono tracking-[0.25em] text-primary-red uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-red animate-ping" />
          SYSTEM INITIALIZING
        </div>

        {/* Brand Name Typography */}
        <div className="relative">
          {/* Background Layer - Dim Outlined Stroke */}
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter text-white/10 font-sans uppercase m-0 leading-none">
            Vedansh<span className="text-primary-red/40">.</span>
          </h1>

          {/* Foreground Layer - Animated Gradient Fill */}
          <motion.h1
            className="absolute inset-0 text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter font-sans uppercase m-0 leading-none bg-gradient-to-r from-white via-white to-primary-red bg-clip-text text-transparent"
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: duration, ease: ease, delay: 0.2 }}
          >
            Vedansh<span className="text-primary-red">.</span>
          </motion.h1>
        </div>

        {/* Subtitle / Counter bar */}
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mt-2 relative">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-red to-rose-400"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </div>

        <span className="text-[11px] font-mono tracking-[0.2em] text-white/40 uppercase">
          AI • AUTOMATION • FULL STACK
        </span>
      </motion.div>
    </motion.div>
  );
}
