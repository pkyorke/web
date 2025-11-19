import React from "react";
import { motion } from "framer-motion";

const ContactPage: React.FC = () => {
  return (
    <section className="space-y-8">
      <header className="space-y-2 max-w-xl">
        <h2>Contact</h2>
        <p className="text-[0.9rem] text-[color:var(--fg-muted)]">
          For performances, commissions, collaborations, and teaching
          invitations.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        {/* Left: direct info */}
        <div className="space-y-4 text-[0.9rem] text-[color:var(--fg-soft)]">
          <div>
            <div className="font-mono uppercase tracking-[0.2em] text-[color:var(--fg-muted)]">
              Email
            </div>
            <a
              href="mailto:info@pkyorke.com"
              className="text-[0.95rem] underline-offset-4"
            >
              info@pkyorke.com
            </a>
          </div>

          <div>
            <div className="font-mono uppercase tracking-[0.2em] text-[color:var(--fg-muted)]">
              Social
            </div>
            <ul className="space-y-1">
              {/* ⬇️ Replace with real handles/links */}
              <li>
                <a href="https://example.com" target="_blank" rel="noreferrer">
                  Platform / @handle
                </a>
              </li>
            </ul>
          </div>

          <p className="text-[0.85rem] text-[color:var(--fg-muted)]">
            Please include a short description of your project, timeline, and
            location when reaching out.
          </p>
        </div>

        {/* Right: glass contact card */}
        <motion.div
          className="glass-panel relative p-5 sm:p-6"
          whileHover={{ y: -4, scale: 1.01 }}
        >
          <div className="pointer-events-none absolute inset-px rounded-[0.5rem] border border-[color:var(--glass-border-soft)]" />
          <form className="relative z-10 space-y-4 text-[0.9rem] text-[color:var(--fg-soft)]">
            <div className="font-mono uppercase tracking-[0.2em] text-[color:var(--fg-muted)]">
              Send a note
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1">
                <label className="text-[0.8rem] text-[color:var(--fg-muted)]">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-[0.9rem] border border-[color:var(--line-subtle)] bg-[color:var(--bg-2)] px-3 py-2 text-[0.9rem] outline-none focus:border-[color:var(--accent-soft)]"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[0.8rem] text-[color:var(--fg-muted)]">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-[0.9rem] border border-[color:var(--line-subtle)] bg-[rgba(8,10,12,0.95)] px-3 py-2 text-[0.9rem] outline-none focus:border-[color:var(--accent-soft)]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[0.8rem] text-[color:var(--fg-muted)]">
                Subject
              </label>
              <input
                type="text"
                className="w-full rounded-[0.9rem] border border-[color:var(--line-subtle)] bg-[rgba(8,10,12,0.95)] px-3 py-2 text-[0.9rem] outline-none focus:border-[color:var(--accent-soft)]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[0.8rem] text-[color:var(--fg-muted)]">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full resize-none rounded-[0.9rem] border border-[color:var(--line-subtle)] bg-[rgba(8,10,12,0.95)] px-3 py-2 text-[0.9rem] outline-none focus:border-[color:var(--accent-soft)]"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center rounded-lg px-5 py-2 text-[0.75rem] font-mono uppercase tracking-[0.18em] text-[color:var(--fg-invert)]"
              style={{
                backgroundImage:
                  "linear-gradient(120deg,var(--accent-soft),var(--accent-deep))",
              }}
            >
              Send
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
