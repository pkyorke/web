import React from "react";
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
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] },
  },
  exit: { opacity: 0, y: 12, transition: { duration: 0.3 } },
};

const AppShell: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#050607] text-[#F2F3F0] font-sans">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        {/* Header / Nav */}
        <header className="mb-6 flex items-center justify-between gap-4">
          <div className="text-xs tracking-[0.25em] uppercase text-[#A3A7A0]">
            P. K. Yorke
          </div>
          <nav className="relative flex items-center gap-3 rounded-full bg-[#0C1010]/80 px-2 py-1 text-xs">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "relative rounded-full px-3 py-1 transition-colors",
                    isActive
                      ? "text-[#F4F5ED]"
                      : "text-[#A3A7A0] hover:text-[#F4F5ED]",
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
                            "linear-gradient(120deg,#B3C685,#6F8240)",
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
        <footer className="mt-auto border-t border-white/5 pt-4 text-[0.7rem] text-[#73776F]">
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
