import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';

const categories = ['All', 'Reviews', 'Features', 'Interviews'];
const years = ['All', '2025', '2024', '2023'];

const pressItems = [
  {
    title: 'Scores that breathe in augmented space',
    outlet: 'Tonal Field',
    year: '2025',
    type: 'Features',
    excerpt: 'An immersive profile of Praetorius and the distributed ensemble building manuscripts that glow, drift, and react to performers.',
    link: '#features-1',
  },
  {
    title: 'The console rewriting how we rehearse',
    outlet: 'Wavefront Review',
    year: '2024',
    type: 'Reviews',
    excerpt: 'A detailed review of the Praetorius console in performance at CTM Vorspiel, emphasizing tactile typography and community access.',
    link: '#reviews-1',
  },
  {
    title: 'Interview: Listening through light',
    outlet: 'Diffuse Audio',
    year: '2023',
    type: 'Interviews',
    excerpt: 'Praetorius discusses glowing manuscripts, antifascist choirs, and how code can sustain improvisation without freezing it.',
    link: '#interviews-1',
  },
  {
    title: 'Chiaroscuro scores for public space',
    outlet: 'City Resonances',
    year: '2024',
    type: 'Features',
    excerpt: 'An essay tracing recent installations and how olive light has become a dramaturgical tool for collective listening.',
    link: '#features-2',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const chipClasses = (active: boolean) =>
  `rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
    active ? 'border-[color:var(--olive-500)] text-[color:var(--olive-100)]' : 'border-[color:var(--color-border-subtle)] text-[color:var(--color-text-muted)] hover:border-[color:var(--olive-500)]'
  }`;

const PressPage = () => {
  const [category, setCategory] = useState('All');
  const [year, setYear] = useState('All');

  const filteredItems = useMemo(
    () =>
      pressItems.filter((item) =>
        (category === 'All' || item.type === category) && (year === 'All' || item.year === year)
      ),
    [category, year]
  );

  return (
    <div className="space-y-10">
      <div>
        <p className="meta text-[color:var(--olive-100)]">Press</p>
        <h1 className="display-1 mt-2">Signals from the field.</h1>
      </div>
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button key={cat} className={chipClasses(category === cat)} onClick={() => setCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        {years.map((option) => (
          <button key={option} className={chipClasses(year === option)} onClick={() => setYear(option)}>
            {option}
          </button>
        ))}
      </div>
      <AnimatePresence mode="popLayout">
        <div className="grid gap-6 md:grid-cols-2">
          {filteredItems.map((item) => (
            <motion.article
              key={`${item.title}-${item.year}`}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={{ scale: 1.02 }}
              className="group rounded-3xl border border-[color:var(--color-border-subtle)] bg-[color:var(--color-bg-elevated)]/95 p-6 shadow-glass"
            >
              <div className="meta text-[color:var(--color-text-muted)]">{item.outlet}</div>
              <a href={item.link} className="display-2 mt-3 block text-[color:var(--olive-50)] group-hover:text-[color:var(--olive-100)]">
                {item.title}
              </a>
              <div className="mt-4 flex items-center gap-4 text-xs font-mono uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
                <span>{item.year}</span>
                <span>{item.type}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-text-muted)]">{item.excerpt}</p>
              <span className="sr-only">Read more</span>
              <div className="mt-5 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-[color:var(--olive-500)] to-[color:var(--olive-300)] transition group-hover:scale-x-100" />
            </motion.article>
          ))}
          {filteredItems.length === 0 && (
            <motion.div
              className="rounded-3xl border border-[color:var(--color-border-subtle)] p-8 text-center text-[color:var(--color-text-muted)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No press items for this filter yet.
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default PressPage;
