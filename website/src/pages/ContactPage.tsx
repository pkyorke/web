import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { usePageMeta } from "../hooks/usePageMeta";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/movreadp";

const ContactPage: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        try {
          const data = await response.json();
          if (data && data.errors && data.errors.length > 0) {
            setErrorMessage(data.errors.map((e: { message: string }) => e.message).join(" "));
          } else {
            setErrorMessage("Something went wrong sending your message.");
          }
        } catch {
          setErrorMessage("Something went wrong sending your message.");
        }
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again in a moment.");
    }
  };
  usePageMeta({
    title: "Contact – P. K. Yorke",
    description:
      "Invite performances, commissions, residencies, or teaching collaborations—reach out with project details, timelines, and locations.",
    ogImage: "https://pkyorke.com/pkyorke-og-contact.jpg",
    path: "/contact",
  });
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
              href="mailto:pkyorke@gmail.com"
              className="text-[0.95rem] underline-offset-4"
            >
              pkyorke@gmail.com
            </a>
          </div>

          <div>
            <div className="font-mono uppercase tracking-[0.2em] text-[color:var(--fg-muted)]">
              Social
            </div>
            <ul className="space-y-1">
              {/* ⬇️ Replace with real handles/links */}
              <li>
                <a href="https://instagram.com/paukenpaul" target="_blank" rel="noreferrer">
                  Instagram / @paukenpaul
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
        <ScrollReveal
          className="glass-panel relative p-4 sm:p-6"
          parallaxStrength={5}
        >
          <div className="pointer-events-none absolute inset-px rounded-[0.5rem] border border-[color:var(--glass-border-soft)]" />
          <form
              className="relative z-10 space-y-4 text-[0.9rem] text-[color:var(--fg-soft)]"
              onSubmit={handleSubmit}
              method="POST"
            >
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
                  name="name"
                  required
                  className="w-full rounded-[0.9rem] border border-[color:var(--line-subtle)] bg-[color:var(--bg-2)] px-3 py-2 text-[0.9rem] outline-none focus:border-[color:var(--accent-ember)]"
                />
                
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-[0.9rem] border border-[color:var(--line-subtle)] bg-[color:var(--bg-2)] px-3 py-2 text-[0.9rem] outline-none focus:border-[color:var(--accent-ember)]"
                />
                
                <input
                  type="text"
                  name="subject"
                  className="w-full rounded-[0.9rem] border border-[color:var(--line-subtle)] bg-[color:var(--bg-2)] px-3 py-2 text-[0.9rem] outline-none focus:border-[color:var(--accent-ember)]"
                />
                
                <textarea
                  rows={4}
                  name="message"
                  required
                  className="w-full resize-none rounded-[0.9rem] border border-[color:var(--line-subtle)] bg-[color:var(--bg-2)] px-3 py-2 text-[0.9rem] outline-none focus:border-[color:var(--accent-ember)]"
                />
            </div>

            <motion.button
              type="submit"
              whileHover={status === "idle" ? { scale: 1.03 } : undefined}
              whileTap={status === "idle" ? { scale: 0.97 } : undefined}
              disabled={status === "submitting" || status === "success"}
              className="inline-flex items-center rounded-lg px-5 py-2 text-[0.75rem] font-mono uppercase tracking-[0.18em] text-[color:var(--fg-invert)] disabled:opacity-70 disabled:cursor-not-allowed"
              style={{
                backgroundImage:
                  "linear-gradient(120deg,var(--accent-soft),var(--accent-deep))",
              }}
            >
              {status === "submitting"
                ? "Sending…"
                : status === "success"
                ? "Sent"
                : "Send"}
            </motion.button>
                        {status !== "idle" && (
            <p className="pt-1 text-[0.8rem] text-[color:var(--fg-muted)]">
              {status === "success" && "Thank you — your message has been sent."}
              {status === "error" &&
                (errorMessage ??
                  "There was a problem sending your message. Please try again or email directly.")}
            </p>
          )}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactPage;
