import React, { Children } from "react";
import { motion } from 'framer-motion/dist/es/index'

const animation = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
};

function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.7 }}
      className={"animated"}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedPage;
