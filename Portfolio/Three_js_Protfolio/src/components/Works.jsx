import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles.js";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion.js";
import { useHref } from "react-router-dom";

// Change this section within projects

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_Link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className={"bg-[#452E60]  p-5 rounded-2xl  sm:w-[360px] w-full"}
      >
        <div className={"relative w-full h-[230px]"}>
          <img
            src={image}
            alt={name}
            className={"w-full h-full object-cover rounded-2xl"}
          />
          <div
            className={"absolute inset-0 flex justify-end m-3 card-img_hover"}
          >
            <a
              /*  We can't change the path name of the url here */
              onClick={() => window.open(source_code_Link, "url")}
              className={
                "black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              }
            >
              <img
                src={github}
                alt="github"
                className={"w-1/2 h-1/2 object-contain"}
              />
            </a>
          </div>
        </div>
        <div className={"mt-5"}>
          <h3 className={"text-[#E8BBB6] font-bold text-[24px]"}>{name}</h3>
          <p className={"mt-2 text-secondary text-[14px]"}>{description}</p>
        </div>
        <div className={"mt-4 flex flex-wrap gap-2"}>
          {tags.map((tag, index) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className={"mt-4"}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className={"w-full flex"}>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={"mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"}
        >
          Following projects are real world examples of my skills and knowledge
          in web development. Each project is a result of my hard work and
          dedication. I have collaborated with a few that I have displayed in
          each project description. I have also included the link to the GitHub
          repository for each project.
        </motion.p>
      </div>

      <div className={"mt-20 flex flex-wrap gap-7"}>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
