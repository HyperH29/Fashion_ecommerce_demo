import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles.js";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion.js";
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className={"mt-4"}>
        <p className={styles.sectionSubText}>My Progress</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "");
