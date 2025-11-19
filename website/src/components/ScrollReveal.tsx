import React, { useEffect, useRef } from "react";
import {
  motion,
  MotionProps,
  useAnimation,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

interface ScrollRevealProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  parallaxStrength?: number;
  once?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  parallaxStrength = 8,
  once = true,
  style,
  ...motionProps
}) => {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const inView = useInView(ref, {
    once,
    margin: "0px 0px -10% 0px",
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const parallax = prefersReducedMotion
    ? undefined
    : useTransform(scrollYProgress, [0, 1], [parallaxStrength, -parallaxStrength]);

  const variants = prefersReducedMotion
    ? {
        hidden: { opacity: 0.9 },
        visible: {
          opacity: 1,
          transition: { duration: 0.18, ease: "easeInOut" },
        },
      }
    : {
        hidden: { opacity: 0, scale: 0.96 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.3, ease: "easeInOut" },
        },
      };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
      style={{ ...style, y: prefersReducedMotion ? 0 : parallax }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
