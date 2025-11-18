import React from "react";
import { motion } from "framer-motion";

return (
  <section className="space-y-10">
    {/* Title */}
    <header className="space-y-2 max-w-2xl">
      <h2>About</h2>
      <p className="text-[0.9rem] text-[color:var(--fg-muted)]">
        Short fragments about practice, background, and the rooms these works
        inhabit.
      </p>
    </header>

    {/* Two-column editorial layout */}
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      {/* Left: main narrative */}
      <div className="space-y-5 text-[0.95rem] leading-relaxed text-[color:var(--fg-soft)]">
        {/* ⬇️ Move your current long-form about text / paragraphs here */}
        <p>
          {/* e.g. primary statement paragraph */}
          {/* Your existing about copy goes here, in Spectral by default */}
        </p>
        <p>{/* more paragraphs as needed */}</p>
        <p>{/* etc. */}</p>
      </div>

      {/* Right: glass bio and timeline */}
      <div className="space-y-5">
        {/* Bio snapshot */}
        <motion.div
          className="glass-panel relative p-4 sm:p-5"
          whileHover={{ y: -4, scale: 1.01 }}
        >
          <div className="pointer-events-none absolute inset-px rounded-[1.4rem] border border-[color:var(--glass-border-soft)]" />
          <div className="relative z-10 space-y-2 text-[0.85rem] text-[color:var(--fg-soft)]">
            <div className="font-mono uppercase tracking-[0.22em] text-[color:var(--fg-muted)]">
              Snapshot
            </div>
            <p>
              {/* 1–2 sentence compact bio; you can reuse existing text */}
            </p>
          </div>
        </motion.div>

        {/* Timeline / roles */}
        <motion.div
          className="glass-panel relative p-4 sm:p-5"
          whileHover={{ y: -4, scale: 1.01 }}
        >
          <div className="pointer-events-none absolute inset-px rounded-[1.4rem] border border-[color:var(--glass-border-soft)]" />
          <div className="relative z-10 space-y-2 text-[0.8rem] text-[color:var(--fg-soft)]">
            <div className="font-mono uppercase tracking-[0.22em] text-[color:var(--fg-muted)]">
              Selected roles
            </div>
            <ul className="space-y-1">
              {/* ⬇️ Replace with your own roles / appointments */}
              <li>Year—Year · Role · Institution</li>
              <li>Year—Year · Role · Institution</li>
              <li>Year— · Current position</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
