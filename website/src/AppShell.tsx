import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/works", label: "Works" },
  { to: "/about", label: "About" },
  { to: "/press", label: "Press" },
  { to: "/contact", label: "Contact" },
];

type Theme = "dark" | "light";

const getInitialTheme = (): Theme => {
  // SSR / build: default to light shell
  if (typeof window === "undefined") return "light";

  // Respect stored preference if present
  const stored = window.localStorage.getItem("pk-theme");
  if (stored === "dark" || stored === "light") return stored;

  // First visit, no stored preference → default to light
  return "light";
};

const AppShell: React.FC = () => {
  const location = useLocation();
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const hasOpenedMenuRef = useRef(false);

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

  useEffect(() => {
    if (!isMenuOpen) return;
    const focusable = overlayRef.current?.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled])"
    );
    focusable?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsMenuOpen(false);
        return;
      }
      if (event.key === "Tab" && focusable && focusable.length > 0) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen && hasOpenedMenuRef.current) {
      menuButtonRef.current?.focus();
    }
    if (isMenuOpen) {
      hasOpenedMenuRef.current = true;
    }
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const pageVariants = useMemo(() => {
    if (prefersReducedMotion) {
      return {
        initial: { opacity: 0.9 },
        animate: { opacity: 1 },
        exit: { opacity: 0.9 },
      };
    }
    return {
      initial: { opacity: 0, scale: 0.96 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.008 },
    };
  }, [prefersReducedMotion]);

  const pageTransition = useMemo(
    () => ({
      duration: prefersReducedMotion ? 0.18 : 0.3,
      ease: "easeInOut",
    }),
    [prefersReducedMotion]
  );

  const noiseTexture =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E";

  const overlayBackgroundVariants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.18 } } }
    : { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.25, ease: "easeInOut" } } };

  const overlayPanelVariants = prefersReducedMotion
    ? { hidden: { opacity: 0.9 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : {
        hidden: { opacity: 0, scale: 0.96 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.28, ease: "easeInOut" } },
      };

  const ThemeToggleButton = () => (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative flex h-8 w-20 items-center justify-between rounded-lg border border-[color:var(--glass-border-soft)] bg-[color:var(--bg-2)] px-2 text-[0.7rem] font-mono uppercase tracking-[0.18em] text-[color:var(--fg-muted)] outline-none"
    >
      <motion.span
        className="absolute top-1 left-1 h-6 w-9 rounded-md bg-[color:var(--bg-3)] shadow-sm"
        animate={{ x: theme === "dark" ? 36 : 0 }}
        transition={{ type: "spring", stiffness: 380, damping: 28 }}
      />
      <span className="relative z-10 flex-1 text-center">☀︎</span>
      <span className="relative z-10 flex-1 text-center">☾</span>
    </button>
  );

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

          <nav className="nav-glass relative hidden items-center gap-2 px-3 py-1.5 text-[0.7rem] md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "relative rounded-lg px-6 py-2 transition-colors",
                    isActive
                      ? "text-[color:var(--fg-primary)] font-medium"
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
                        className="absolute -inset-[4px] rounded-lg"
                        style={{
                          background: "linear-gradient(120deg,var(--accent-soft),var(--accent-deep))",
                        }}
                        transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </span>
                )}
              </NavLink>
            ))}

            <div className="ml-2 hidden md:block">
              <ThemeToggleButton />
            </div>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggleButton />
            <button
              type="button"
              ref={menuButtonRef}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="rounded-lg border border-[color:var(--glass-border-soft)] bg-[color:var(--bg-2)] px-4 py-2 text-[0.75rem] font-mono uppercase tracking-[0.2em] text-[color:var(--fg-soft)]"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
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
              transition={pageTransition}
              className="relative h-full"
            >
              {!prefersReducedMotion && (
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundImage: `url(${noiseTexture})`,
                    opacity: 0.12,
                    mixBlendMode: "screen",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.18 }}
                  exit={{ opacity: 0 }}
                  transition={pageTransition}
                />
              )}
              <div className="relative h-full">
                <Outlet />
              </div>
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

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-50 md:hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayBackgroundVariants}
          >
            <motion.div
              ref={overlayRef}
              role="dialog"
              aria-modal="true"
              id="mobile-menu"
              className="flex h-full w-full items-center justify-center bg-[rgba(8,11,18,0.92)] px-6 py-10"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={overlayPanelVariants}
            >
              <div className="w-full max-w-md space-y-6 text-center">
                <div className="text-[0.75rem] font-mono uppercase tracking-[0.3em] text-[color:var(--fg-muted)]">
                  Navigation
                </div>
                <ul className="space-y-5 text-3xl font-medium">
                  {navItems.map((item) => (
                    <li key={item.to}>
                      <NavLink
                        to={item.to}
                        className="inline-flex w-full items-center justify-between rounded-[0.5rem] border border-[color:var(--line-subtle)] bg-[color:var(--bg-1)] px-6 py-4 text-[color:var(--fg-primary)] no-underline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span>{item.label}</span>
                        <span className="text-[0.65rem] font-mono uppercase tracking-[0.3em] text-[color:var(--fg-muted)]">
                          ↗
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AppShell;
