import { motion } from "framer-motion";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Section from "./Section";
import { Experience, Sections, experiences } from "@/consts";
import { textVariant } from "@/utils/motion";
import { styles } from "@/styles/styles";

const ExperienceCard = ({
  title,
  date,
  iconBg,
  company_name,
  icon,
  points,
}: Experience) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={icon}
            alt={company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-2xl font-bold">{title}</h3>
        <p className="text-secondary text-base font-semibold m-0">
          {company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point) => (
          <li
            key={point}
            className="text-white-100 text-sm pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <Section idName={Sections.Experience}>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <ExperienceCard key={experience.title} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </Section>
  );
};

export default Experience;
