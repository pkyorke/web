import React from "react";
import { motion } from "framer-motion";

const WorksPage: React.FC = () => {
  const iframeSrc = `${import.meta.env.BASE_URL}praetorius/index.html`;

  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-2xl md:text-3xl">Works</h1>
        <p className="max-w-xl text-xs leading-relaxed text-[#A3A7A0]">
          Explore scores, audio, and project metadata in an interactive console.
          Use the filters and detail views inside the window for the best
          experience.
        </p>
      </header>

      <motion.div
        className="relative overflow-hidden rounded-3xl border border-[#5C6D34]/50 bg-[#0C1010]/90 shadow-[0_20px_70px_rgba(0,0,0,0.85)]"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      >
        <div className="pointer-events-none absolute inset-px rounded-[1.4rem] border border-white/7" />
        <div className="flex items-center justify-between px-5 pt-4 pb-2 text-[0.7rem] text-[#A3A7A0]">
          <span className="font-mono uppercase tracking-[0.25em]">
            Praetorius · typescatter
          </span>
          <span>click inside to scroll &amp; navigate</span>
        </div>
        <div className="h-[70vh] w-full border-t border-white/7 bg-black">
          <iframe
            src={iframeSrc}
            title="Praetorius Works Console"
            className="h-full w-full border-0"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default WorksPage;
