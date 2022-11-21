"use client";

import { motion } from "framer-motion";

interface IWrapperProps {
  children: React.ReactNode;
}

const ITContentWrapper = ({ children }: IWrapperProps) => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      {children}
    </motion.main>
  );
};

export default ITContentWrapper;
