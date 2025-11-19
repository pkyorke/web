import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { usePageMeta } from "../hooks/usePageMeta";

const roles = ["composer", "sound artist", "technologist"];

const HomePage: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  usePageMeta({
    title: "P. K. Yorke – Composer & Sound Artist",
    description:
      "Immersive compositions for rooms, percussion, and loudspeakers: installations, scores, and software that make spaces feel alive.",
    ogImage: "https://pkyorke.com/pkyorke-og-home.jpg",
    path: "/",
  });

  // Cycle roles every ~5 seconds
  useEffect(() => {
    const id = window.setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="flex min-h-[calc(100vh-8rem)] flex-col justify-between gap-10">
      {/* Poster-style hero */}
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.15fr)] md:items-center">
        {/* Left: text stack */}
        <div className="space-y-6">
          <div className="text-[0.7rem] font-mono uppercase tracking-[0.32em] text-[color:var(--fg-muted)]">
            listening room
          </div>

          <div className="space-y-3">
            <h1 className="leading-tight">
              Composing in{" "}
              <span className="inline-block bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(120deg,var(--accent-soft),var(--accent-deep))",
                }}
              >
                light
              </span>
              , rooms, and time.
            </h1>

            {/* Morphing roles */}
            <div className="flex items-center gap-2 text-[0.8rem]">
              <span className="font-mono uppercase tracking-[0.18em] text-[color:var(--fg-muted)]">
                role
              </span>
              <div className="relative flex h-[1.6rem] items-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
                    className="inline-flex items-center rounded-lg bg-[color:var(--bg-2)] px-3 py-0.5 text-[0.7rem] font-mono uppercase tracking-[0.2em] text-[color:var(--accent-soft)] border border-[color:var(--line-subtle)]"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <p className="max-w-xl text-[0.9rem] leading-relaxed text-[color:var(--fg-muted)]">
            Works for instruments, loudspeakers, and architectures that treat
            rooms as collaborators: installations, scores, and tools that trace
            how spaces remember us.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/works"
                className="cta-primary inline-flex items-center rounded-lg px-5 py-2 text-[0.75rem] font-mono uppercase tracking-[0.18em] text-[color:var(--fg-invert)]"
                style={{
                  backgroundImage:
                    "linear-gradient(120deg,var(--accent-soft),var(--accent-deep))",
                }}
              >
                <span className="home-pill-underline">View works</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/about"
                className="inline-flex items-center rounded-lg border border-[color:var(--line-subtle)] bg-[color:var(--bg-2)] px-5 py-2 text-[0.75rem] font-mono uppercase tracking-[0.18em] text-[color:var(--fg-soft)]"
              >
                About
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right: giant glass pane */}
        <motion.div
          className="glass-panel hero-pane relative flex h-[60vh] min-h-[320px] overflow-hidden p-2 md:p-3"
          whileHover={{ y: -4, scale: 1.01 }}
        >
          {/* Inner border */}
          <div className="pointer-events-none absolute inset-px rounded-[0.5rem] border border-[color:var(--glass-border-soft)]" />
        
          {/* Portrait */}
          <div className="relative z-10 h-full w-full">
            <div className="relative h-full w-full overflow-hidden rounded-[0.5rem] border border-[color:var(--line-subtle)] bg-[color:var(--bg-2)]">
              <img
                src="https://cdn.jsdelivr.net/gh/pkyorke/web/website/paul.jpg"
                alt="Portrait of P. K. Yorke"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lower band: single strip, not 3 separate cards */}
      <ScrollReveal
        className="glass-panel relative mt-2 px-4 py-5 sm:px-5 md:px-6 md:py-5"
        parallaxStrength={6}
      >
        <div className="pointer-events-none absolute inset-px rounded-[0.5rem] border border-[color:var(--glass-border-soft)]" />
        <div className="relative z-10 grid gap-5 text-[0.75rem] text-[color:var(--fg-soft)] md:grid-cols-3">
          <div className="space-y-2">
            <div className="font-mono uppercase tracking-[0.22em] text-[color:var(--fg-muted)]">
              Selected works
            </div>
            <ul className="space-y-1">
              <li>Title 1 — ensemble · 12′</li>
              <li>Title 2 — installation · variable</li>
              <li>Title 3 — solo + electronics · 9′</li>
            </ul>
          </div>
          <div className="space-y-2">
            <div className="font-mono uppercase tracking-[0.22em] text-[color:var(--fg-muted)]">
              Upcoming
            </div>
            <ul className="space-y-1">
              <li>MM/DD — venue / city</li>
              <li>MM/DD — festival / series</li>
              <li>MM/DD — residency</li>
            </ul>
          </div>
          <div className="space-y-2">
            <div className="font-mono uppercase tracking-[0.22em] text-[color:var(--fg-muted)]">
              Tools &amp; research
            </div>
            <ul className="space-y-1">
              <li>Praetorius · interactive works console</li>
              <li>Custom software instruments</li>
              <li>Field recording / spatial studies</li>
            </ul>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default HomePage;
