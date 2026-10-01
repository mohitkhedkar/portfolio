import React from "react";
import { BiLogoJavascript, BiLogoPostgresql } from "react-icons/bi";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiPython,
  SiMicrosoftexcel,
  SiPowerbi,
  SiPostgresql,
} from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  intial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        intial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Tech Stack
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        intial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* micorsoft Excel */}
        <motion.div
          intial="intial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <SiMicrosoftexcel className="text-5xl text-green-600" />
        </motion.div>

        {/* Powerbi */}
        <motion.div
          intial="intial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <SiPowerbi className="text-5xl text-yellow-600" />
        </motion.div>
        {/* Pyhton */}
        <motion.div
          intial="intial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <SiPython className="text-5xl text-blue-600" />
        </motion.div>
        {/* postgressql */}
        <motion.div
          intial="intial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4"
        >
          <BiLogoPostgresql
            intial="intial"
            animate="animate"
            variants={iconVariants(2.5)}
            className="text-5xl text-sky-400"
          />
        </motion.div>
        {/* React */}
        <motion.div
          intial="intial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
