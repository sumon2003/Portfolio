import React from 'react';
import { motion } from 'framer-motion';

/**
 * direction: "left", "right", "up", "down"
 * children: The content to be revealed
 * delay: Delay before the animation starts (in seconds)
 */
const ScrollReveal = ({ children, direction = "up", delay = 0.2 }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
        y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true }} 
      transition={{
        duration: 0.8,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;