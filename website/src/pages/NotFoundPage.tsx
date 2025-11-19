import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { usePageMeta } from "../hooks/usePageMeta";

const randomPaths = ["/", "/works", "/about", "/press", "/contact"];

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  usePageMeta({
    title: "Silence. This page doesn’t exist. – P. K. Yorke",
    description:
      "The page you’re looking for isn’t part of the archive—return home or jump to another room.",
    ogImage: "https://pkyorke.com/pkyorke-og-home.jpg",
    path: location.pathname,
  });

  const handleRandom = () => {
    const candidates = randomPaths.filter((path) => path !== location.pathname);
    const choice = candidates[Math.floor(Math.random() * candidates.length)] || "/";
    navigate(choice);
  };

  return (
    <section className="flex min-h-[60vh] items-center justify-center">
      <div className="glass-panel relative max-w-xl px-6 py-8 text-center">
        <div className="pointer-events-none absolute inset-px rounded-[0.5rem] border border-[color:var(--glass-border-soft)]" />
        <div className="relative z-10 space-y-5">
          <p className="font-mono uppercase tracking-[0.35em] text-[0.75rem] text-[color:var(--fg-muted)]">
            404
          </p>
          <h2 className="text-3xl">Silence. This page doesn’t exist.</h2>
          <p className="text-[0.95rem] text-[color:var(--fg-muted)]">
            Try another room.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/"
                className="inline-flex items-center rounded-lg px-5 py-2 text-[0.75rem] font-mono uppercase tracking-[0.18em] text-[color:var(--fg-invert)]"
                style={{
                  backgroundImage: "linear-gradient(120deg,var(--accent-soft),var(--accent-deep))",
                  textDecoration: "none",
                }}
              >
                Back to Home
              </Link>
            </motion.div>
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleRandom}
              className="inline-flex items-center rounded-lg border border-[color:var(--line-subtle)] bg-[color:var(--bg-2)] px-5 py-2 text-[0.75rem] font-mono uppercase tracking-[0.18em] text-[color:var(--fg-soft)]"
            >
              Or… take me somewhere else
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
