import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage: React.FC = () => {
  return (
    <section className="space-y-10">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-start">
        {/* Left: text */}
        <div className="space-y-5">
          <div className="text-[0.8rem] uppercase tracking-[0.35em] text-[#A3A7A0]">
            Composer · Sound artist · Technologist
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight">
            Listening to{" "}
            <span className="inline-block bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg,#B3C685,#6F8240)",
                  }}>
              space as instrument
            </span>
            .
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-[#A3A7A0]">
            P. K. Yorke works with light, sound, and software to build
            architectures of listening—scores, installations, and tools that
            register how spaces remember us.
          </p>

          <div className="flex flex-wrap gap-3">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/works"
                className="inline-flex items-center rounded-full px-5 py-2 text-xs font-medium text-[#050607]"
                style={{
                  backgroundImage:
                    "linear-gradient(120deg,#B3C685,#6F8240)",
                }}
              >
                View works
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/about"
                className="inline-flex items-center rounded-full border border-white/10 px-5 py-2 text-xs font-medium text-[#F2F3F0]"
              >
                About
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right: current project card */}
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-[#5C6D34]/40 bg-[#0C1010]/80 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.7)]"
          whileHover={{ translateY: -4 }}
        >
          <div className="pointer-events-none absolute inset-px rounded-[1.3rem] border border-white/5" />
          <div className="mb-3 text-[0.7rem] font-mono uppercase tracking-[0.25em] text-[#B3C685]">
            Current project
          </div>
          <h2 className="mb-2 text-lg font-medium">[Project title here]</h2>
          <p className="mb-4 text-xs leading-relaxed text-[#A3A7A0]">
            Short logline for the active piece—light, field recordings, and
            instrument; gallery &amp; performance dates.
          </p>
          <div className="flex flex-wrap items-center gap-2 text-[0.65rem] text-[#D5D8CE]">
            <span className="rounded-full bg-[#323A1E]/60 px-3 py-1 font-mono">
              2026
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1 font-mono">
              installation
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1 font-mono">
              electronics
            </span>
          </div>
        </motion.div>
      </div>

      {/* Lower band: 3 stubs */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/5 bg-[#0C1010]/70 p-4 text-xs">
          <div className="mb-2 font-mono uppercase tracking-[0.22em] text-[#A3A7A0]">
            Selected works
          </div>
          <ul className="space-y-1 text-[0.75rem] text-[#D5D8CE]">
            <li>Title 1 — ensemble · 12′</li>
            <li>Title 2 — installation · variable</li>
            <li>Title 3 — solo + electronics · 9′</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/5 bg-[#0C1010]/70 p-4 text-xs">
          <div className="mb-2 font-mono uppercase tracking-[0.22em] text-[#A3A7A0]">
            Events
          </div>
          <ul className="space-y-1 text-[0.75rem] text-[#D5D8CE]">
            <li>mm/dd — venue / city</li>
            <li>mm/dd — festival</li>
            <li>mm/dd — residency</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/5 bg-[#0C1010]/70 p-4 text-xs">
          <div className="mb-2 font-mono uppercase tracking-[0.22em] text-[#A3A7A0]">
            Tools
          </div>
          <ul className="space-y-1 text-[0.75rem] text-[#D5D8CE]">
            <li>Praetorius — works console</li>
            <li>Custom Max/MSP instruments</li>
            <li>Field recording libraries</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
