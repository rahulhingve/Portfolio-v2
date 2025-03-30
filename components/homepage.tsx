import { motion } from "framer-motion"
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react"
import Image from "next/image"

const containerVariants = {
  hidden: { opacity: 0.3 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

interface HomepageProps {
  id: string;
}

export function Homepage({ id }: HomepageProps) {
  return (
    <section id={id} className="min-h-screen flex items-center">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl p-8 shadow-lg"
          >
            <div>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400 tracking-wider">
                WELCOME TO MY PORTFOLIO
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
              Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Rahul Hingve</span>
              <br />
              Full Stack Developer
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
              I specialize in building modern web applications with a focus on performance, accessibility, and user experience. Currently working on blockchain and real-time applications.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/rahulhingve"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white hover:bg-gray-200/80 dark:hover:bg-gray-700/80"
              >
                <IconBrandGithub className="w-5 h-5 mr-2" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-hingve-b5a582263"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white hover:bg-gray-200/80 dark:hover:bg-gray-700/80"
              >
                <IconBrandLinkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a
                href="/RahulHingveUpdated2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary bg-blue-600/80 dark:bg-blue-500/80 backdrop-blur-sm text-white hover:bg-blue-700/80 dark:hover:bg-blue-600/80"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Contact Me →
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg">
              <Image
                src="/rahul.jpg"
                alt="Rahul Hingve"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600/80 backdrop-blur-sm text-white p-4 rounded-lg">
              <div className="text-sm font-medium">10+ Projects</div>
              <div className="text-xs opacity-80">Completed</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

