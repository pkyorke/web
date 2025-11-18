import { motion } from 'framer-motion';

const WorksPage = () => {
  const iframeSrc = `${import.meta.env.BASE_URL}praetorius/index.html`;
  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="meta text-[color:var(--olive-100)]">Typographic Console</p>
        <h1 className="display-1 mt-2">Works</h1>
        <p className="mt-4 max-w-2xl text-[color:var(--color-text-muted)]">
          Explore the Praetorius console (skin: typescatter) for a living archive of scores, annotations, media, and live renderings. Use the filters inside the console to traverse seasons, ensembles, and media states.
        </p>
      </motion.div>
      <motion.div
        className="rounded-[2rem] border border-[color:var(--olive-700)] bg-[color:var(--color-bg-elevated)]/95 p-4 shadow-glass"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <iframe
          title="Praetorius Works Console"
          src={iframeSrc}
          loading="lazy"
          className="h-[75vh] w-full rounded-[1.5rem] border border-[color:var(--color-border-subtle)] bg-black"
        />
      </motion.div>
    </div>
  );
};

export default WorksPage;
