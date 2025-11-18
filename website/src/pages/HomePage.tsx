import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
  }),
};

const featuredWorks = [
  { title: 'Orbit Choir', meta: 'Choir · 38′', link: '#orbit' },
  { title: 'Virescent Array', meta: 'Ensemble · 24′', link: '#virescent' },
  { title: 'Sferics', meta: 'Electronics · 16′', link: '#sferics' },
  { title: 'Praetorius Console', meta: 'Software · 2024', link: '#console' },
];

const events = [
  { title: 'Resonance Field', detail: 'CTM Vorspiel — Jan 2025' },
  { title: 'Soft Tactility', detail: 'Biennale di Venezia — Sep 2024' },
  { title: 'Olive Lines', detail: 'MUTEK Montréal — Aug 2024' },
];

const tools = [
  { title: 'Praetorius', detail: 'Typographic scores console, skin: typescatter' },
  { title: 'VPP Toolkit', detail: 'Research suite for voice-physical processing' },
  { title: 'Stage Devices', detail: 'Modular controllers for site-responsive work' },
];

const HomePage = () => (
  <div className="space-y-12">
    <section className="grid gap-10 lg:grid-cols-2">
      <div className="space-y-6">
        <motion.p className="display-1" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          Luminous systems for voices, circuitry, and shifting publics.
        </motion.p>
        <motion.p className="subtitle text-[color:var(--color-text-muted)]" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Praetorius maps porous infrastructures where notation, improvisation, and research tools co-exist in live time.
        </motion.p>
        <motion.div className="flex flex-wrap gap-4" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/works"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-black"
              style={{ backgroundImage: 'var(--gradient-accent)' }}
            >
              View Works
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--color-border-subtle)] px-6 py-3 font-semibold text-[color:var(--color-text-primary)]"
            >
              About
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="glass-panel relative overflow-hidden p-8"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] } }}
      >
        <div className="meta text-[color:var(--olive-100)]">Current Project</div>
        <h2 className="display-2 mt-4">Green Chapel Cartographies</h2>
        <p className="mt-4 text-[color:var(--color-text-muted)]">
          Immersive sound/score environment for dispersed choir, tactile electronics, and augmented manuscripts.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm text-[color:var(--color-text-muted)]">
          <span className="rounded-full border border-[color:var(--olive-500)] px-4 py-1">2025</span>
          <span className="rounded-full border border-[color:var(--olive-500)] px-4 py-1">Choir + Circuit</span>
          <span className="rounded-full border border-[color:var(--olive-500)] px-4 py-1">Site-specific</span>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 rounded-full" style={{ backgroundImage: 'var(--gradient-accent)' }} />
      </motion.div>
    </section>

    <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <motion.div
        className="space-y-4 rounded-3xl border border-[color:var(--color-border-subtle)] bg-[color:var(--color-bg-elevated)]/90 p-6 shadow-glass"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={1}
      >
        <div className="meta">Featured Works</div>
        <ul className="space-y-3 text-sm">
          {featuredWorks.map((work) => (
            <li key={work.title} className="flex flex-col rounded-xl bg-black/10 p-3">
              <a href={work.link} className="font-semibold hover:text-[color:var(--olive-100)]">
                {work.title}
              </a>
              <span className="text-xs text-[color:var(--color-text-muted)]">{work.meta}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="space-y-4 rounded-3xl border border-[color:var(--color-border-subtle)] bg-[color:var(--color-bg-elevated)]/90 p-6 shadow-glass"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={2}
      >
        <div className="meta">Events / Performances</div>
        <ul className="space-y-3 text-sm">
          {events.map((event) => (
            <li key={event.title} className="rounded-xl border border-[color:var(--color-border-subtle)] px-4 py-3">
              <p className="font-semibold">{event.title}</p>
              <p className="text-xs text-[color:var(--color-text-muted)]">{event.detail}</p>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="space-y-4 rounded-3xl border border-[color:var(--color-border-subtle)] bg-[color:var(--color-bg-elevated)]/90 p-6 shadow-glass"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={3}
      >
        <div className="meta">Tools / Research</div>
        <ul className="space-y-3 text-sm">
          {tools.map((tool) => (
            <li key={tool.title} className="rounded-xl bg-black/10 px-4 py-3">
              <p className="font-semibold">{tool.title}</p>
              <p className="text-xs text-[color:var(--color-text-muted)]">{tool.detail}</p>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  </div>
);

export default HomePage;
