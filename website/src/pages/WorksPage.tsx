import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WorksPage: React.FC = () => {
  const iframeSrc = `${import.meta.env.BASE_URL}praetorius/index.html`;
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (!isFullscreen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsFullscreen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isFullscreen]);

  return (
    <section className="space-y-8">
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
        <div className="pointer-events-none absolute inset-px rounded-[0.5rem] border border-[color:var(--glass-border-soft)]" />

        {/* Top meta bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-[color:var(--line-subtle)] px-4 py-3 text-[0.7rem] font-mono uppercase tracking-[0.2em] text-[color:var(--fg-muted)]">
          <span>Praetorius · works console</span>
          <div className="flex items-center gap-3">
            <span className="hidden sm:flex items-center gap-2">
              <span className="inline-flex h-1 w-4 rounded-lg bg-[color:var(--accent-soft)]" />
              click inside to scroll &amp; navigate
            </span>
            <button
              type="button"
              onClick={() => setIsFullscreen(true)}
              className="group inline-flex items-center gap-1 rounded-lg border border-[color:var(--line-subtle)] bg-[color:var(--bg-2)] px-3 py-1 text-[0.7rem] tracking-[0.18em] text-[color:var(--fg-soft)]"
              aria-label="Open works console fullscreen (press Escape to exit)"
            >
              {/* SVG fullscreen icon */}
              <svg
                className="h-3 w-3 opacity-80 group-hover:opacity-100"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  d="M3 3h4v1.5H4.5V7H3V3Zm6 0h4v4h-1.5V4.5H9V3Zm4 6v4h-4v-1.5h2.5V9H13ZM7 13H3V9h1.5v2.5H7V13Z"
                  fill="currentColor"
                />
              </svg>
              <span className="uppercase">esc</span>
            </button>
          </div>
        </div>

        {/* Viewport for Praetorius iframe */}
        <div className="relative z-10 h-[72vh] w-full overflow-hidden rounded-b-[0.5rem] bg-[rgba(3,7,18,0.98)]">
          <iframe
            src={iframeSrc}
            title="Praetorius Works Console"
            className="h-full w-full border-0"
            loading="lazy"
          />
        </div>
      </motion.div>

      {/* Fullscreen overlay */}
      {isFullscreen && (
        <motion.div
          className="fixed inset-0 z-[60] flex bg-[rgba(0,0,0,0.94)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* ESC button in fullscreen */}
          <div className="absolute right-4 top-4 z-[70]">
            <button
              type="button"
              onClick={() => setIsFullscreen(false)}
              className="inline-flex items-center gap-1 rounded-lg border border-[color:var(--line-subtle)] bg-[color:var(--bg-2)] px-3 py-1 text-[0.7rem] font-mono uppercase tracking-[0.18em] text-[color:var(--fg-soft)]"
            >
              <span>esc</span>
            </button>
          </div>

          {/* Fullscreen iframe */}
          <div className="relative z-[65] m-4 flex-1">
            <div className="h-full w-full overflow-hidden rounded-[0.5rem] border border-[color:var(--line-subtle)] bg-black">
              <iframe
                src={iframeSrc}
                title="Praetorius Works Console (Fullscreen)"
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default WorksPage;
