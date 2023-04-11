import React from "react";
import Section from "./Section";
import { Feedback, Sections, feedbacks } from "@/consts";
import { styles } from "@/styles/styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";
import Image from "next/image";

const FeedbackCard = ({
  writer,
  quote,
  writerRole,
  company,
  image,
}: Feedback) => {
  return (
    <div>
      <p className="text-white font-black text-[48px]">&apos;&apos;</p>
      <div className="mt-1">
        <p className="text-white tracking-wider text-lg">{quote}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-base">
              <span className="blue-text-gradient">@</span> {writer}
            </p>
            <p className="mt-1 text-secondary text-xs">
              {writerRole} of {company}
            </p>
          </div>
        </div>
        <Image
          src={image}
          alt={writer}
          className="w-10 h-10 rounded-full object-cover"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

const Feedbacks = () => {
  return (
    <Section idName={Sections.Feedbacks}>
      <div className="mt-12 bg-black-100 rounded-[20px]">
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>What Others Say</p>
            <p className={styles.heroHeadText}>Feedbacks.</p>
          </motion.div>
        </div>
        <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
          {feedbacks.map((feedback, index) => (
            <motion.div
              key={feedback.quote}
              variants={fadeIn("", "spring", index * 0.5, 0.75)}
              className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
            >
              <FeedbackCard {...feedback} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Feedbacks;
