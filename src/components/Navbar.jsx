import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Approach", href: "#approach" },
    { name: "Work", href: "#work" },
    { name: "Notes", href: "#notes" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elPosition = el.getBoundingClientRect().top + window.scrollY - topOffset;
      window.scrollTo({ top: elPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md border-b border-neutral-900 py-4"
            : "bg-transparent py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 flex items-center justify-between">
          {/* Logo / Name in Big Font */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight hover:opacity-80 transition-opacity"
          >
            Vedansh Garg
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base sm:text-lg font-medium text-neutral-300 hover:text-white transition-colors duration-200 tracking-normal"
              >
                {link.name}
              </a>
            ))}

            {/* Quick status pill */}
            <div className="flex items-center gap-2.5 pl-6 border-l border-neutral-800 text-sm font-mono text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available</span>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-neutral-400 hover:text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Floating Quick Action Button on right (Matching Gabriel Valdivia) */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed right-6 sm:right-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 flex flex-col items-center justify-center gap-1.5 shadow-2xl backdrop-blur-md transition-all group"
        aria-label="Quick Navigation"
      >
        <span className="w-4 h-[1.5px] bg-neutral-400 group-hover:bg-white transition-colors" />
        <span className="w-4 h-[1.5px] bg-neutral-400 group-hover:bg-white transition-colors" />
      </button>

      {/* Slide Navigation Drawer (Mobile & Quick Floating Nav) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex justify-end"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm bg-neutral-950 border-l border-neutral-900 h-full p-8 sm:p-12 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-12">
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                    Navigation
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
                  >
                    <X size={15} />
                  </button>
                </div>

                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-2xl text-neutral-300 hover:text-white font-medium tracking-tight flex items-center justify-between group"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight size={16} className="text-neutral-600 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="border-t border-neutral-900 pt-6 flex flex-col gap-3 text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for select projects</span>
                </div>
                <span>India • Global Remote</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
