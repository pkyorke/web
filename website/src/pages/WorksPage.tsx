import React from "react";
import { motion } from "framer-motion";

const WorksPage: React.FC = () => {
  const iframeSrc = `${import.meta.env.BASE_URL}praetorius/index.html`;

  return (
    <section className="space-y-8">
      {/* Heading + fragment */}
      <header className="space-y-2 max-w-2xl">
        <h2 className="leading-tight">Works &amp; installations</h2>
        <p className="text-[0.9rem] text-[color:var(--fg-muted)]">
          Scores, loudspeaker pieces, and installations presented through an
          interactive console. Use the filters and detail views inside the
          window to explore works in depth.
        </p>
      </header>

      {/* Console frame */}
      <motion.div
        className="glass-panel relative mt-4 overflow-hidden p-0"
        whileHover={{ y: -4, scale: 1.01 }}
      >
        {/* Inner border */}
        <div className="pointer-events-none absolute inset-px rounded-[1.4rem] border border-[color:var(--glass-border-soft)]" />

        {/* Top meta bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-[color:var(--line-subtle)] px-4 py-3 text-[0.7rem] font-mono uppercase tracking-[0.2em] text-[color:var(--fg-muted)]">
          <span>Praetorius · works console</span>
          <span className="flex items-center gap-2">
            <span className="inline-flex h-1 w-4 rounded-full bg-[color:var(--accent-soft)]" />
            click inside to scroll &amp; navigate
          </span>
        </div>

        {/* Viewport for Praetorius iframe */}
        <div className="relative z-10 h-[72vh] w-full overflow-hidden rounded-b-[1.4rem] bg-[rgba(3,7,18,0.98)]">
          <iframe
            src={iframeSrc}
            title="Praetorius Works Console"
            className="h-full w-full border-0"
            loading="lazy"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default WorksPage;
