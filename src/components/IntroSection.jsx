import React from "react";
import profilePic from "../assets/profilePic.png";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function IntroSection() {
  return (
    <div className="pb-4 lg:md-36">
      <div
        className="flex
        flex-wrap lg:flex-row-reverse"
      >
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Mohit Khedkar"
              className="border border-stone-900 rounded-3xl"
              width={400}
              height={400}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-8xl"
            >
              Mohit Khedkar
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              {" "}
              Frontend Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-center"
            >
              {HERO_CONTENT}
            </motion.p>
            <div>
              <motion.a
                variants={childVariants}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="bg-green-500 rounded-full p-3.5 mx-1 text-sm text-white mb-10"
              >
                Download Resume
              </motion.a>

              {/* <motion.a
                variants={childVariants}
                href="mailto:mohitkhedkar521@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="bg-white rounded-full py-3.5 px-6 mx-1 text-sm text-stone-800 mb-10"
              >
                Contact
              </motion.a> */}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
