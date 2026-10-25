import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    from: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const email = "vedanshgarg1979@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.message.trim()) return;

    // Create mailto link
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      formData.subject || "Project Collaboration"
    )}&body=${encodeURIComponent(
      `From: ${formData.from}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="w-full py-28 sm:py-36 bg-black text-white border-t border-neutral-900 flex justify-center">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 w-full flex flex-col">
        
        {/* Exact Heading from Gabriel Valdivia Reference (Centered container) */}
        <div className="w-full mb-10 sm:mb-14">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-[1.08]">
            Building something<br />
            new? Let's talk.
          </h2>
        </div>

        {/* Exact Email Compose Card Layout (Centered in section) */}
        <div className="w-full">
          <form
            onSubmit={handleSubmit}
            className="rounded-[32px] sm:rounded-[36px] bg-[#141416] border border-white/[0.08] p-8 sm:p-12 shadow-2xl relative w-full"
          >
            {/* Row 1: To */}
            <div className="flex items-center justify-between border-b border-neutral-800/80 pb-6 mb-6">
              <div className="flex items-center gap-6 sm:gap-10 flex-1">
                <span className="text-neutral-400 text-base sm:text-lg font-normal w-14 sm:w-16 flex-none">
                  To
                </span>
                <span className="text-neutral-200 text-base sm:text-lg font-normal truncate">
                  {email}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="text-neutral-400 hover:text-white text-sm font-normal transition-colors flex items-center gap-1.5 flex-none pl-4"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <span>Copy</span>
                )}
              </button>
            </div>

            {/* Row 2: From */}
            <div className="flex items-center border-b border-neutral-800/80 pb-6 mb-6">
              <label
                htmlFor="from-email"
                className="text-neutral-400 text-base sm:text-lg font-normal w-14 sm:w-16 flex-none"
              >
                From
              </label>
              <input
                id="from-email"
                type="email"
                required
                value={formData.from}
                onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                placeholder="you@example.com"
                className="w-full bg-transparent border-none text-neutral-200 placeholder-neutral-600 text-base sm:text-lg font-normal focus:outline-none"
              />
            </div>

            {/* Row 3: Subject */}
            <div className="flex items-center border-b border-neutral-800/80 pb-6 mb-6">
              <label
                htmlFor="subject"
                className="text-neutral-400 text-base sm:text-lg font-normal w-14 sm:w-16 flex-none"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder=""
                className="w-full bg-transparent border-none text-neutral-200 placeholder-neutral-600 text-base sm:text-lg font-normal focus:outline-none"
              />
            </div>

            {/* Row 4: Message */}
            <div className="flex items-start pb-8">
              <label
                htmlFor="message"
                className="text-neutral-400 text-base sm:text-lg font-normal w-14 sm:w-16 flex-none pt-1"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder=""
                className="w-full bg-transparent border-none text-neutral-200 placeholder-neutral-600 text-base sm:text-lg font-normal focus:outline-none resize-none leading-relaxed"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex items-center justify-between">
              <button
                type="submit"
                className="px-7 py-2.5 rounded-full bg-[#202024] hover:bg-[#2c2c32] text-white text-sm font-medium border border-white/10 transition-colors shadow-md active:scale-95"
              >
                Send
              </button>

              {submitted && (
                <span className="text-xs font-mono text-emerald-400">
                  Opening mail client...
                </span>
              )}
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
