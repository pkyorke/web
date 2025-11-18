import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "Reviews" | "Features" | "Interviews";

interface PressItem {
  id: string;
  outlet: string;
  title: string;
  year: number;
  category: Category;
  excerpt: string;
  url?: string;
}

const PRESS: PressItem[] = [
  {
    id: "1",
    outlet: "Publication",
    title: "Article headline goes here",
    year: 2025,
    category: "Reviews",
    excerpt: "Short excerpt from the text or summary of the coverage.",
    url: "#",
  },
  // add more later
];

const CATEGORIES: Category[] = ["All", "Reviews", "Features", "Interviews"];

const PressPage: React.FC = () => {
  const [category, setCategory] = useState<Category>("All");

  const filtered =
    category === "All"
      ? PRESS
      : PRESS.filter((item) => item.category === category);

  return (
    <section className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-2xl md:text-3xl">Press</h1>
        <p className="max-w-xl text-xs leading-relaxed text-[#A3A7A0]">
          Reviews, features, and conversations around recent works.
        </p>
      </header>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        {CATEGORIES.map((cat) => {
          const active = cat === category;
          return (
            <motion.button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className="relative rounded-full border px-3 py-1 text-[0.7rem] font-mono uppercase tracking-[0.18em]"
              style={{
                borderColor: active ? "rgba(179,198,133,0.8)" : "rgba(255,255,255,0.12)",
                color: active ? "#F4F5ED" : "#A3A7A0",
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {active && (
                <motion.span
                  layoutId="press-pill"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "linear-gradient(120deg,rgba(179,198,133,0.25),rgba(111,130,64,0.35))",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 mix-blend-screen">{cat}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Cards */}
      <AnimatePresence mode="popLayout">
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((item) => (
            <motion.article
              key={item.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="group relative overflow-hidden rounded-2xl border border-white/7 bg-[#0C1010]/85 p-4"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#879B4A] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-2 text-[0.65rem] font-mono uppercase tracking-[0.25em] text-[#A3A7A0]">
                {item.outlet} · {item.year} · {item.category}
              </div>
              <h2 className="mb-2 text-sm font-medium text-[#F2F3F0]">
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-[#879B4A]/40 decoration-1 underline-offset-2"
                  >
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </h2>
              <p className="text-[0.8rem] leading-relaxed text-[#D5D8CE]">
                {item.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </AnimatePresence>
    </section>
  );
};

export default PressPage;
