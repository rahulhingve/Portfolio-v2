import { motion } from "framer-motion"
import { div } from "framer-motion/client";

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

export function Homepage() {
  return (
    <>
      <div id="home">


        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className=" h-screen flex flex-col p-4 items-center justify-center"
        >
          <motion.h1 variants={itemVariants} className="text-4xl font-bold mb-4">
            Software Engineer, Techie & Open-Source Maintainer
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl mb-8">
            I'm Rahul Hingve, a developer passionate about learning and building open-source software that is beneficial to developers and the world at large.
          </motion.p>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-6 py-2 rounded-full inline-block transition-colors hover:bg-blue-600"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.section>
      </div>
    </>
  )
}

