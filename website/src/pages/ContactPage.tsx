import { motion } from 'framer-motion';
import { FormEvent, useState } from 'react';

const ContactPage = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus('Please complete all fields.');
      return;
    }
    setStatus('Message prepared. Connect mailto link to send.');
  };

  return (
    <div className="space-y-10">
      <div className="max-w-2xl space-y-4">
        <p className="meta text-[color:var(--olive-100)]">Contact</p>
        <h1 className="display-1">Invite a collaboration, commission, or study.</h1>
        <p className="text-lg text-[color:var(--color-text-muted)]">
          For commissions, workshops, or speaking, send a note. The studio reads everything and responds within three working days.
        </p>
        <motion.a
          href="mailto:studio@praetorius.work"
          className="inline-flex items-center rounded-full border border-[color:var(--olive-500)] px-5 py-3 font-semibold text-[color:var(--olive-100)]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          studio@praetorius.work
        </motion.a>
      </div>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-3 text-sm text-[color:var(--color-text-muted)]">
          <p>Also find the studio via:</p>
          <ul className="space-y-2">
            <li>
              <a className="underline decoration-[color:var(--olive-500)]" href="https://github.com/praetorius" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a className="underline decoration-[color:var(--olive-500)]" href="https://example.com" target="_blank" rel="noreferrer">
                Institutional profile
              </a>
            </li>
          </ul>
        </div>
        <motion.form
          onSubmit={handleSubmit}
          className="glass-panel space-y-4 p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <label className="block text-sm text-[color:var(--color-text-muted)]">
            Name
            <input
              type="text"
              className="mt-2 w-full rounded-lg border border-[color:var(--color-border-subtle)] bg-black/30 px-4 py-3 text-base text-[color:var(--color-text-primary)] focus:border-[color:var(--olive-500)] focus:outline-none"
              value={formState.name}
              onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
              required
            />
          </label>
          <label className="block text-sm text-[color:var(--color-text-muted)]">
            Email
            <input
              type="email"
              className="mt-2 w-full rounded-lg border border-[color:var(--color-border-subtle)] bg-black/30 px-4 py-3 text-base text-[color:var(--color-text-primary)] focus:border-[color:var(--olive-500)] focus:outline-none"
              value={formState.email}
              onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
              required
            />
          </label>
          <label className="block text-sm text-[color:var(--color-text-muted)]">
            Message
            <textarea
              className="mt-2 min-h-[160px] w-full rounded-lg border border-[color:var(--color-border-subtle)] bg-black/30 px-4 py-3 text-base text-[color:var(--color-text-primary)] focus:border-[color:var(--olive-500)] focus:outline-none"
              value={formState.message}
              onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
              required
            />
          </label>
          <motion.button
            type="submit"
            className="w-full rounded-full px-6 py-3 font-semibold text-black"
            style={{ backgroundImage: 'var(--gradient-accent)' }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            Send message
          </motion.button>
          {status && <p className="text-sm text-[color:var(--color-text-muted)]">{status}</p>}
        </motion.form>
      </div>
    </div>
  );
};

export default ContactPage;
