"use client";

import React from "react";
import { motion } from "framer-motion";



const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export function Contact({id}:any) {
  return (
    <div id={id}>
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-20"
    >
      <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 text-center">
        Drop a Mail to Me
      </motion.h2>
      <motion.div variants={itemVariants} className="h-[20rem] w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h3 className="md:text-4xl text-xl lg:text-6xl font-bold text-center dark:text-white text-black relative z-20">
          Thank You for Visiting!
        </h3>
        <div className="w-[40rem] h-40 sm:w-full relative">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          
          {/* <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          /> */}
          
          <div className="absolute inset-0 w-full h-full  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        <motion.a
          href="mailto:rahulpawar2001.rp@gmail.com"
          className="mt-8  text-black dark:text-white px-6 py-2 rounded-full hover:bg-gray-200 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Email
        </motion.a>
      </motion.div>
    </motion.section>
    </div>
  );
}

