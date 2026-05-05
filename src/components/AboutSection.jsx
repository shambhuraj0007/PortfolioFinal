import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" }
  },
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -z-10 skew-y-3 transform origin-top-left"></div>
      
      <motion.div 
        className="container mx-auto max-w-5xl z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center" variants={itemVariants}>
          About <span className="text-primary text-glow">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-400">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a passionate web developer and tech creator with a strong
              focus on creating user-friendly and visually appealing web
              experiences. Currently pursuing a B.Tech in Computer Science from DYPCOE, Akurdi Pune.
            </p>

            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.a 
                href="#contact" 
                className="cosmic-button text-center justify-center flex"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>

              <motion.a
                href="https://drive.google.com/file/d/1xeYZOJiDc2-jP3a1L1R2zNED3-Wv_Seq/view?usp=sharing"
                className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>

          <motion.div className="grid grid-cols-1 gap-6" variants={containerVariants}>
            <motion.div className="glass-card p-6 rounded-2xl group hover:-translate-y-1 transition-transform" variants={itemVariants}>
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Code className="h-7 w-7 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-xl mb-1">Web Development</h4>
                  <p className="text-muted-foreground text-sm">
                    Creating responsive websites and web applications with modern frameworks.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div className="glass-card p-6 rounded-2xl group hover:-translate-y-1 transition-transform" variants={itemVariants}>
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <User className="h-7 w-7 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-xl mb-1">Deep Learning</h4>
                  <p className="text-muted-foreground text-sm">
                    Exploring AI and machine learning to build intelligent applications.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div className="glass-card p-6 rounded-2xl group hover:-translate-y-1 transition-transform" variants={itemVariants}>
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="h-7 w-7 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-xl mb-1">Project Management</h4>
                  <p className="text-muted-foreground text-sm">
                    Leading projects from conception to completion with agile methodologies.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
