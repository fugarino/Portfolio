"use client";

import { motion } from "framer-motion";
import { slideIn } from "../../../utils/motion";

interface ILayoutProps {
  alt?: boolean;
  backgroundColor: string;
  children: React.ReactNode;
}

const ProjectLayout = ({ alt, backgroundColor, children }: ILayoutProps) => {
  const dir = alt ? "left" : "right";
  return (
    <motion.article
      variants={slideIn(dir, "spring", 0)}
      initial="hidden"
      whileInView="show"
      className={`flex w-full justify-center my-4 h-[21rem] ${backgroundColor} rounded-2xl px-6 py-6 xxl:w-[95%] max-w-[1250px] ${
        alt && "lg:ml-auto"
      }
      `}
    >
      {children}
    </motion.article>
  );
};

export default ProjectLayout;
