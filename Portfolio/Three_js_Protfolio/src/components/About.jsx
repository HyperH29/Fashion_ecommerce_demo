import React, { useRef } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion.js";
import { SectionWrapper } from "../hoc";

// Issue below overview still hidden when in position
// findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Tilt2 which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node
// const CurrentRef = useRef(null);

const ServiceCard = ({ index, title, icon }) => {
  const currentRef = useRef(0);
  return (
    <>
      <Tilt className={"xs:w-[250px] w-full"} ref={currentRef}>
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className={
            "w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          }
        >
          <div
            options={{ max: 25, scale: 1, speed: 450 }}
            className={
              "bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col"
            }
          >
            <img
              src={icon}
              alt={title}
              className={"w-16 h-16 object-contain"}
            />
            <h3 className={"text-white text-[20px] font-bold text-center"}>
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};

const About = () => {
  // On motion.div variant I changed textVariant to fadeIn
  // Had an issue with the textVariant not taking in up direction.
  return (
    <>
      <motion.div variants={fadeIn("down")}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={"mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"}
      >
        Welcome to my portfolio! As a skilled junior web developer, I am on a
        mission to make a mark on the world wide web. With expertise in
        languages such as TypeScript, JavaScript, HTML, and CSS, as well as
        experience with frameworks like React, Node.js, Tailwind, Express, and
        Three.js, I am committed to building efficient, user-friendly
        experiences for all to enjoy. I thrive on problem-solving and am
        constantly seeking ways to improve my skills and abilities. As a strong
        communicator, I work well with both clients and colleagues, ensuring
        that everyone is on the same page throughout the development process. I
        believe that web development has the power to drive big innovations and
        make a meaningful impact on people's lives. That's why I am dedicated to
        being a part of this exciting field and using my skills to bring
        positive change to the world. Thank you for visiting my portfolio, and I
        look forward to the opportunity to collaborate with you.
      </motion.p>
      <div className={"mt-10 flex flex-wrap gap-10"}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

// react-dom.development.js:86 Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Tilt2 which is inside StrictMode.
// Instead, add a ref directly to the element you want to reference.

// Add to Readme: https://www.youtube.com/watch?v=0fYi8SGA20k&t=9641s
