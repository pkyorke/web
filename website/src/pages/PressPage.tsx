import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { usePageMeta } from "../hooks/usePageMeta";

type PressCategory = "all" | "photo" | "video" | "article";

const PressPage: React.FC = () => {
  const [filter, setFilter] = useState<PressCategory>("all");
  usePageMeta({
    title: "Press & Materials – P. K. Yorke",
    description:
      "Download photos, videos, and copy for presenters—credit photographers as labeled in filenames and reach out for custom assets.",
    ogImage: "https://pkyorke.com/pkyorke-og-press.jpg",
    path: "/press",
  });

  // If you already have press data, adapt this type & mapping;
  // otherwise this is a stub.
  const items = [
    {
      id: 1,
      type: "photo" as PressCategory,
      title: "Studio portrait",
      outlet: "Photographer / credit",
      year: "2025",
      note: "High-res press photo.",
    },
    {
      id: 2,
      type: "article" as PressCategory,
      title: "Feature or review headline",
      outlet: "Publication",
      year: "2024",
      note: "Short description or pull note.",
    },
  ];

  const visible =
    filter === "all" ? items : items.filter((i) => i.type === filter);

  return (
    <section className="space-y-8">
      <header className="space-y-3 max-w-2xl">
        <h2>Press &amp; media</h2>
        <p className="text-[0.85rem] text-[color:var(--fg-muted)]">
          Materials for presenters. Please credit photographers as indicated in filenames when reproducing images.
        </p>
        <p className="text-[0.9rem] text-[color:var(--fg-muted)]">
          Images, video, and materials for presenters and writers.
        </p>
      </header>

      {/* Category chips */}
      <div className="flex flex-wrap gap-2 text-[0.75rem]">
        {(["all", "photo", "video", "article"] as PressCategory[]).map(
          (cat) => {
            const active = filter === cat;
            return (
              <motion.button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={[
                  "relative flex items-center rounded-lg px-4 py-1.5 font-mono uppercase tracking-[0.18em]",
                  active
                    ? "text-[color:var(--fg-invert)]"
                    : "text-[color:var(--fg-soft)]",
                ].join(" ")}
                style={
                  active
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--accent-soft),var(--accent-deep))",
                      }
                    : {
                        backgroundColor: "var(--bg-2)",
                        border: "1px solid var(--line-subtle)",
                      }
                }

              >
                {cat}
              </motion.button>
            );
          }
        )}
      </div>

      {/* Media grid */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((item) => (
          <ScrollReveal
            key={item.id}
            className="glass-panel relative p-4"
            parallaxStrength={4}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <div className="pointer-events-none absolute inset-px rounded-[0.5rem] border border-[color:var(--glass-border-soft)]" />
            <div className="relative z-10 space-y-3 text-[0.85rem] text-[color:var(--fg-soft)]">
              {/* Placeholder media block */}
              <div className="h-32 rounded-[1rem] border border-[color:var(--line-subtle)] bg-[radial-gradient(circle_at_0%_0%,rgba(55,224,215,0.22),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(148,163,254,0.25),transparent_55%),linear-gradient(135deg,#020617,#020617)]" />

              <div className="space-y-1">
                <div className="flex items-center justify-between gap-2 text-[0.8rem]">
                  <span className="font-mono uppercase tracking-[0.18em] text-[color:var(--fg-muted)]">
                    {item.outlet}
                  </span>
                  <span className="rounded-lg border border-[color:var(--line-subtle)] bg-[color:var(--bg-2)] px-2 py-0.5 text-[0.7rem] font-mono uppercase tracking-[0.18em]">
                    {item.year}
                  </span>
                </div>
                <div className="font-serif text-[0.9rem]">
                  {item.title}
                </div>
                <p className="text-[0.8rem] text-[color:var(--fg-muted)]">
                  {item.note}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default PressPage;
