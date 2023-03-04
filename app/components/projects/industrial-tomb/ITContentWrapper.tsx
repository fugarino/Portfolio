"use client";

import { motion } from "framer-motion";
import { footerVariants } from "../../../../utils/motion";

interface IWrapperProps {
  children: React.ReactNode;
}

const ITContentWrapper = ({ children }: IWrapperProps) => {
  return (
    <motion.main
      className="mt-4"
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
    >
      {children}
    </motion.main>
  );
};

export default ITContentWrapper;
