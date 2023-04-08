import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles/styles";
import { ReactNode } from "react";

const Section = ({
  idName,
  children,
}: {
  idName: string;
  children: ReactNode[];
}) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      {children}
    </motion.section>
  );
};

export default Section;
