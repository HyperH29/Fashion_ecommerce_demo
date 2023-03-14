import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { useRef } from "react";

// Something to do with strict mode is stopping it from working.
const SectionWrapper = (Component, idName) =>
  function HOC() {
    const nodeRef = useRef(null);

    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        ref={nodeRef}
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className={"hash-span"} id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
