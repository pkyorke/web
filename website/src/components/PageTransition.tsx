import { motion, Transition, Variants } from 'framer-motion';
import { PropsWithChildren } from 'react';

const transition: Transition = {
  duration: 0.6,
  ease: [0.22, 0.61, 0.36, 1],
};

const variants: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition },
  exit: { opacity: 0, y: 12, transition: { duration: 0.3 } },
};

interface PageTransitionProps {
  className?: string;
  pageKey: string;
}

const PageTransition = ({ children, className, pageKey }: PropsWithChildren<PageTransitionProps>) => (
  <motion.main
    key={pageKey}
    variants={variants}
    initial="initial"
    animate="animate"
    exit="exit"
    className={className}
  >
    {children}
  </motion.main>
);

export default PageTransition;
