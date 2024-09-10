import React from "react";
import { BiLogoJavascript, BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";
import { IoLogoJavascript } from "react-icons/io";

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
        <motion.div
          intial="intial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <BiLogoJavascript className="text-5xl text-yellow-300" />
        </motion.div>
        <motion.div
          intial="intial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <SiTypescript className="text-5xl text-blue-600" />
        </motion.div>
        <motion.div
          intial="intial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div
          intial="intial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <TbBrandNextjs className="text-5xl" />
        </motion.div>
        <motion.div
          intial="intial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <SiMongodb className="text-5xl text-cyan-500" />
        </motion.div>

        <motion.div
          intial="intial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <DiRedis className="text-5xl text-red-700" />
        </motion.div>
        <motion.div
          intial="intial"
          animate="animate"
          variants={iconVariants(6)}
          className="p-4"
        >
          <FaNodeJs className="text-5xl text-green-500" />
        </motion.div>
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

        <motion.div
          intial="intial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4"
        >
          <SiExpress
            intial="intial"
            animate="animate"
            variants={iconVariants(2.5)}
            className="text-5xl text-stone-300"
          />
        </motion.div>
        <motion.div
          intial="intial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4"
        >
          <SiTailwindcss
            intial="intial"
            animate="animate"
            variants={iconVariants(2.5)}
            className="text-5xl text-sky-400"
          />
        </motion.div>
        <motion.div
          intial="intial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4"
        >
          <SiFirebase
            intial="intial"
            animate="animate"
            variants={iconVariants(2.5)}
            className="text-5xl text-orange-300"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
