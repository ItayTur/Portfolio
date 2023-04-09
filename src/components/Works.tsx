import Tilt from "react-parallax-tilt";
import { Project, Sections, projects, worksDescription } from "@/consts";
import { styles } from "@/styles/styles";
import { fadeIn, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { github } from "../../public/assets";
import Section from "./Section";

const ProjectCard = ({
  image,
  name,
  source_code_link,
  description,
  tags,
}: Project) => {
  return (
    <motion.div>
      <Tilt
        scale={1}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <a
              href={source_code_link}
              target="_blank"
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </a>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-xl">{name}</h3>
          <p className="mt-2 text-secondary text-sm">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map(({ name, color }) => (
            <p key={name} className={`text-sm ${color}`}>
              #{name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <Section idName={Sections.Works}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-lg max-w-3xl leading-7"
        >
          {worksDescription}
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Works;
