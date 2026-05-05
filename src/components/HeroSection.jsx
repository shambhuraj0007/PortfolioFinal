import {
  Github,
  Linkedin,
  FileText,
  ArrowDown,
  Code2,
  ExternalLink,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";

const navItems = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shambhuraj-gadhave-39b221347",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    name: "GitHub",
    link: "https://github.com/shambhuraj0007",
    icon: <Github className="w-5 h-5" />,
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/u/shambhuraj007/",
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    name: "GFG",
    link: "https://auth.geeksforgeeks.org/user/shambhurajgadhave/",
    icon: <ExternalLink className="w-5 h-5" />,
  },
  {
    name: "Resume",
    link: "https://drive.google.com/file/d/14bpJkee-Z-_PU6dYKubMLKe_92JQU1y5/view?usp=sharing",
    icon: <FileText className="w-5 h-5" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background -z-10 pointer-events-none"></div>

      <motion.div
        className="container max-w-4xl mx-auto text-center z-10 space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight" 
          variants={itemVariants}
        >
          <span>Hi, I'm</span>
          <span className="text-primary text-glow ml-3">Shambhuraj</span>
          <span className="text-gradient ml-3 block sm:inline mt-2 sm:mt-0">Gadhave</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" 
          variants={itemVariants}
        >
          Full-stack developer with a focus on AI/ML, building intelligent, scalable web applications that combine modern frontend experiences with data-driven backend systems.
        </motion.p>

        {/* Social Links */}
        <motion.div className="flex flex-wrap justify-center gap-4 pt-4" variants={itemVariants}>
          {navItems.map((item, key) => (
            <motion.a
              key={key}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full glass-card text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300 shadow-md"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.icon}
              <span className="font-medium text-sm sm:text-base">{item.name}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div className="pt-8" variants={itemVariants}>
          <motion.a 
            href="#projects" 
            className="cosmic-button inline-flex items-center gap-2 text-lg shadow-lg hover:shadow-primary/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work <ArrowDown className="w-5 h-5 animate-bounce" />
          </motion.a>
        </motion.div>
      </motion.div>

      <div className="mt-4">
        <ThemeToggle className="absolute top-6 right-6 z-50 p-2 glass-card rounded-full" />
      </div>

      <motion.div
        className="absolute bottom-8 mt-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-sm text-muted-foreground mt-2 mb-1 uppercase tracking-widest text-[10px] font-semibold">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.div>
    </section>
  );
};
