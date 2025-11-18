import { motion, useReducedMotion } from 'framer-motion';

const paragraphs = [
  'Praetorius writes for porous ensembles where choir, analog circuitry, and emergent software exchange authorship. Each piece is staged as a conversation between notation and listening, drafting scores that glow, flicker, or fracture according to the room they inhabit.',
  'Recent practice unfolds through three modes: concert works that stage distributed voices; installations that grow sonic ecologies inside galleries and chapels; and software tools that allow collaborators to improvise with notation in real time.',
  'Praetorius studied electroacoustic composition in Berlin, completed an MFA in emergent media from CalArts, and now co-directs the Olive Study, an artist-led institute for distributed performance.',
];

const pullQuotes = [
  '“I am curious about how notation behaves when it is treated like light—shaping, refracting, and occasionally blinding.”',
  '“Research is a stage. Instruments are infrastructures. The score is a social space.”',
];

const AboutPage = () => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <div className="space-y-10">
      <motion.p className="display-2 text-[color:var(--olive-50)]" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        Composer-performer / technologist / researcher.
      </motion.p>
      <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-6 text-lg leading-relaxed text-[color:var(--color-text-muted)]">
          {paragraphs.map((text) => (
            <motion.p key={text} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              {text}
            </motion.p>
          ))}
        </div>
        <div className="space-y-6">
          {pullQuotes.map((quote, index) => (
            <motion.blockquote
              key={quote}
              className="glass-panel relative overflow-hidden p-6 text-sm leading-relaxed text-[color:var(--olive-100)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={
                prefersReducedMotion
                  ? undefined
                  : { y: [0, -6, 0], transition: { duration: 8 + index, repeat: Infinity, ease: 'easeInOut' } }
              }
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-[color:var(--olive-500)]/40" />
              <span className="relative z-10 block text-base italic">{quote}</span>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
