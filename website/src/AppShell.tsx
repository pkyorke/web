import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/works", label: "Works" },
  { to: "/about", label: "About" },
  { to: "/press", label: "Press" },
  { to: "/contact", label: "Contact" },
];

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] },
  },
  exit: { opacity: 0, y: -12, transition: { duration: 0.3 } },
};

type Theme = "dark" | "light";

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem("pk-theme");
  if (stored === "dark" || stored === "light") return stored;
  // Prefer system
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")
    .matches;
  return prefersDark ? "dark" : "dark";
};

const AppShell: React.FC = () => {
  const location = useLocation();
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Apply theme to root
  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    window.localStorage.setItem("pk-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-6 px-4 py-8 sm:px-8 lg:px-10">
        {/* Header / Nav */}
        <header className="flex items-center justify-between gap-6 pt-2">
          <div className="space-y-1">
            <div className="text-[0.7rem] font-mono uppercase tracking-[0.32em] text-[color:var(--fg-muted)]">
              P. K. YORKE
            </div>
            <div className="text-[0.7rem] text-[color:var(--fg-muted)]">
              composer · sound artist · technologist
            </div>
          </div>

          <nav className="nav-glass relative flex items-center gap-2 px-3 py-1.5 text-[0.7rem]">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "relative rounded-full px-4 py-2 transition-colors",
                    isActive
                      ? "text-[color:var(--fg-primary)]"
                      : "text-[color:var(--fg-muted)] hover:text-[color:var(--fg-primary)]",
                  ].join(" ")
                }
                end={item.to === "/"}
              >
                {({ isActive }) => (
                  <span className="relative inline-flex items-center">
                    {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background:
                          theme === "dark"
                            ? "linear-gradient(120deg,var(--accent-soft),var(--accent-deep))"
                            : "linear-gradient(120deg,var(--accent-soft),var(--accent-deep))",
                        // accent-soft/deep are amber in light theme after CSS change
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 35,
                      }}
                    />
                  )}
                    <span className="relative z-10 mix-blend-screen">
                      {item.label}
                    </span>
                  </span>
                )}
              </NavLink>
            ))}

            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="relative ml-1 flex h-7 w-10 items-center rounded-full border border-[color:var(--glass-border-soft)] bg-[color:var(--bg-2)] px-1 text-[0.6rem] text-[color:var(--fg-muted)] outline-none"
            >
              <motion.div
                layout
                className="flex h-5 w-5 items-center justify-center rounded-full"
                style={{
                  background:
                    theme === "dark"
                      ? "radial-gradient(circle at 30% 20%, #facc15, transparent 60%), radial-gradient(circle at 70% 80%, #fb923c, transparent 60%)"
                      : "radial-gradient(circle at 30% 20%, #38bdf8, transparent 60%), radial-gradient(circle at 70% 80%, #a5b4fc, transparent 60%)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                animate={{
                  x: theme === "dark" ? 0 : 16,
                }}
              >
                <span className="text-[0.7rem] leading-none">
                  {theme === "dark" ? "◐" : "☼"}
                </span>
              </motion.div>
            </button>
          </nav>
        </header>

        {/* Page content w/ transitions */}
        <main className="flex-1 pb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="h-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer */}
        <footer className="mt-auto border-t border-[color:var(--line-subtle)] pt-4 text-[0.7rem] text-[color:var(--fg-muted)]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span>© {new Date().getFullYear()} P. K. Yorke</span>
            <span className="font-mono">
              works console powered by Praetorius
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AppShell;
