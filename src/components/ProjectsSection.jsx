import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Article-Summarizer",
    description: "A smart article summarizer that condenses long texts into concise summaries. Built to save time and improve reading efficiency.",
    image: "/assets/pr4.png",
    tags: ["JavaScript", "React", "AI"],
    demoUrl: "https://shambhuraj.vercel.app",
    githubUrl: "https://github.com/shambhuraj0007/Article-Summarizer",
  },
  {
    id: 2,
    title: "Plant Disease Detector",
    description: "AI-powered app using deep learning to detect plant diseases. Built with Streamlit and TensorFlow for fast, accurate predictions.",
    image: "/assets/pr2.png",
    tags: ["Python", "TensorFlow", "Streamlit", "Deep Learning"],
    demoUrl: "https://plantdiseaserecognizer-jzekrenc97vzfddv3fa2fd.streamlit.app/",
    githubUrl: "https://github.com/shambhuraj0007/PlantDiseaseRecognizer",
  },
  {
    id: 3,
    title: "Vibly - Your Social Media Platform",
    description: "Beautiful authentication and onboarding experience for Vibly using React, Tailwind CSS, Next.js, Framer Motion, and React Hook Form.",
    image: "/assets/pr1.png",
    tags: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
    demoUrl: "https://vibly-iota.vercel.app/",
    githubUrl: "https://github.com/shambhuraj0007/vibly",
  },
  {
    id: 4,
    title: "PortfolioFinal",
    description: "Modern, interactive personal portfolio website showcasing projects and skills. Features responsive design and dark mode.",
    image: "/assets/pr5.png",
    tags: ["JavaScript", "React", "TailwindCSS"],
    demoUrl: "https://portfolio-final-psi-seven.vercel.app/",
    githubUrl: "https://github.com/shambhuraj0007/PortfolioFinal",
  },
  {
    id: 5,
    title: "Car Price Predictor",
    description: "Machine learning model to predict car prices based on features. Interactive UI for real-time predictions.",
    image: "/assets/pr6.png",
    tags: ["Python", "Jupyter Notebook", "Machine Learning"],
    demoUrl: "https://car-price-predictor-two.vercel.app/",
    githubUrl: "https://github.com/shambhuraj0007/car-price-predictor",
  },
  {
    id: 6,
    title: "ResumeItNow - AI Resume Builder",
    description: "AI-powered resume builder with modern ATS-friendly templates, live preview, PDF export, and smart content suggestions.",
    image: "/assets/pr3.png",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    demoUrl: "https://resume-virid-iota.vercel.app/",
    githubUrl: "https://github.com/shambhuraj0007/Resume",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" }
  },
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden w-full">
      <motion.div 
        className="w-full max-w-6xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center px-2" variants={itemVariants}>
          Featured <span className="text-primary text-glow">Projects</span>
        </motion.h2>

        <motion.p className="text-center text-muted-foreground mb-10 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-2" variants={itemVariants}>
          Here are some of my recent projects. Each project was crafted with
          attention to detail, performance, and user experience.
        </motion.p>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, key) => (
            <motion.div
              key={key}
              variants={itemVariants}
              className="glass-card rounded-xl sm:rounded-2xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,165,0,0.3)] border border-border/50"
            >
              <div className="overflow-hidden h-40 sm:h-48 relative shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x200?text=Project+Preview';
                  }}
                />
              </div>

              <div className="p-4 sm:p-6 relative z-20 flex flex-col grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-[10px] sm:text-xs uppercase tracking-wider font-semibold border border-primary/30 rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto pt-4 border-t border-border/50">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                      <ExternalLink size={16} /> Demo
                    </button>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-300">
                      <Github size={16} /> Code
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center mt-12 sm:mt-16 px-2" variants={itemVariants}>
          <motion.a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 text-base sm:text-lg justify-center"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/shambhuraj0007"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Check My GitHub <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};
