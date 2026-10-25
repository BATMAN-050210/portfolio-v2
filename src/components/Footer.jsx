import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { name: "GitHub", href: "https://github.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Instagram", href: "https://www.instagram.com/vedxwayne/" },
  ];

  return (
    <footer className="w-full py-16 bg-black text-white border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-900">
          
          {/* Brand Column */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-xl font-medium tracking-tight text-white block mb-2">
                Vedansh Garg
              </span>
              <p className="text-sm text-neutral-400 font-light max-w-sm">
                Engineering partner building first-generation AI architectures, full-stack applications, and commercial automations.
              </p>
            </div>

            <div className="flex items-center gap-2 mt-8 text-xs font-mono text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for select consulting & product roles</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
              Connect
            </span>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-neutral-400 hover:text-white transition-colors w-fit"
              >
                {social.name}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <div className="md:col-span-2 flex md:justify-end items-start">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp size={14} />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <span>&copy; {new Date().getFullYear()} Vedansh Garg. All rights reserved.</span>
          <span>Designed with minimalism & precision</span>
        </div>
      </div>
    </footer>
  );
}
