import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const AnimationWrapper: React.FC<{
  children: React.ReactNode;
  keyValue: string;
  initial?: object;
  animate?: object;
  transition?: object;
  className?: string;
}> = ({
  children,
  keyValue,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 1 },
  className = "",
}) => {
  return (
    <AnimatePresence>
      <motion.div
        key={keyValue}
        initial={initial}
        animate={animate}
        exit={initial}
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimationWrapper;