import React from 'react';
import { motion } from "framer-motion";

const certificateCards = [
  {
    title: "Full Stack Developer Internship",
    issuer: "MindMach Technologies",
    date: "2026", 
    imgPath: "/Certificate/IMG_20260328_114516_8771.png", 
    description: "Formal internship experience engaging in full-stack software development, demonstrating practical industry exposure and the ability to contribute to production-level engineering.",
    link: "https://drive.google.com/file/d/1vw8z0Bu96iLaDualXMKG4J7DaPzrXfiW/view", 
    verificationLink: "https://drive.google.com/file/d/1vw8z0Bu96iLaDualXMKG4J7DaPzrXfiW/view"
  },
  {
    title: "Machine Learning Internship",
    issuer: "Codtech IT Solutions",
    date: "2026", 
    imgPath: "/Certificate/1.png", 
    description: "A 4-week internship focused on Machine Learning, showcasing the practical application of AI/ML concepts, technical dedication, and problem-solving within a corporate environment.",
    link: "https://drive.google.com/file/d/1jKBKK8p9HF2-eM8k53sV7qbb0vlk3Vag/view", 
    verificationLink: "https://drive.google.com/file/d/1jKBKK8p9HF2-eM8k53sV7qbb0vlk3Vag/view"
  },
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    date: "2025", 
    imgPath: "/Certificate/image_d471745b-4960-44dd-8c5d-3ea4c22f4b0520260123_190654.jpg", 
    description: "A highly regarded, industry-recognized certification from NVIDIA validating core competencies and practical knowledge in deep learning technologies.",
    link: "https://drive.google.com/file/d/1Nq8FAgW8OdOVrjL2MryRxNxwjYZGRtDF/view", 
    verificationLink: "https://drive.google.com/file/d/1Nq8FAgW8OdOVrjL2MryRxNxwjYZGRtDF/view"
  },
  {
    title: "Web Development Internship",
    issuer: "Suvidha Foundation",
    date: "2025", 
    imgPath: "/Certificate/Screenshot_20260123-190932.jpg", 
    description: "Practical internship experience focusing on web development, highlighting hands-on coding and project execution skills in a professional setting.",
    link: "https://drive.google.com/file/d/10fkZF3waQzu7a4gSvKKuqhzGc450y68b/view", 
    verificationLink: "https://drive.google.com/file/d/10fkZF3waQzu7a4gSvKKuqhzGc450y68b/view"
  },
  {
    title: "AI-ML Virtual Internship",
    issuer: "AICTE & EduSkills (Google for Developers)",
    date: "2026", 
    imgPath: "/Certificate/Screenshot_20260315-091051.jpg", 
    description: "A comprehensive 10-week virtual internship program solidifying foundational and applied knowledge in Artificial Intelligence and Machine Learning.",
    link: "https://drive.google.com/file/d/1mWR9V9MiHBQguk7A8kiFR--Z3XOJpWcs/view", 
    verificationLink: "https://drive.google.com/file/d/1mWR9V9MiHBQguk7A8kiFR--Z3XOJpWcs/view"
  },
  {
    title: "Cloud Virtual Internship",
    issuer: "AICTE & EduSkills (AWS Academy)",
    date: "2025", 
    imgPath: "/Certificate/image_4088fb7a-a5dd-4dd1-9731-78a7abd6253220260123_190722.jpg", 
    description: "A 10-week virtual internship covering cloud computing concepts, which is an essential skill for modern, scalable IT infrastructure roles.",
    link: "https://drive.google.com/file/d/1c4kzo60EcUtoFtyO_5wxjEjkYQLKXBTm/view", 
    verificationLink: "https://drive.google.com/file/d/1c4kzo60EcUtoFtyO_5wxjEjkYQLKXBTm/view"
  },
  {
    title: "Solutions Architecture Job Simulation",
    issuer: "Forage & AWS",
    date: "2025", 
    imgPath: "/Certificate/Screenshot_20260123-190747.jpg", 
    description: "A practical job simulation focused on designing simple, scalable cloud hosting architectures, reflecting real-world AWS solution design tasks.",
    link: "https://drive.google.com/file/d/1wzge3M815tAeAdHHVLSagKkqgjHCgiJu/view", 
    verificationLink: "https://drive.google.com/file/d/1wzge3M815tAeAdHHVLSagKkqgjHCgiJu/view"
  },
  {
    title: "Android Developer Virtual Internship",
    issuer: "AICTE & EduSkills (Google for Developers)",
    date: "2024", 
    imgPath: "/Certificate/image_32864856-d386-47b5-b8e3-98c4020d66b220260123_190718.jpg", 
    description: "A 10-week virtual program focused on mobile application development and software engineering within the Android ecosystem.",
    link: "https://drive.google.com/file/d/1u0KuVjCJnIja6a0jXAWSQYLEINfBiKwd/view", 
    verificationLink: "https://drive.google.com/file/d/1u0KuVjCJnIja6a0jXAWSQYLEINfBiKwd/view"
  },
  {
    title: "Decode Java + DSA 1.0",
    issuer: "Physics Wallah",
    date: "2024", 
    imgPath: "/Certificate/image_c958d782-3047-4972-8b47-2d3d4f4d238620260123_190726.jpg", 
    description: "Comprehensive coursework in Java and Data Structures & Algorithms (DSA), which is a critical foundation for passing technical interviews and writing optimized code.",
    link: "https://drive.google.com/file/d/1HRjwtDeVjNUrdBteQhh2vOqAqkHE9c1y/view", 
    verificationLink: "https://drive.google.com/file/d/1HRjwtDeVjNUrdBteQhh2vOqAqkHE9c1y/view"
  },
  {
    title: "iAspire 'Go for Gold' Contest Winner",
    issuer: "Accenture",
    date: "2025", 
    imgPath: "/Certificate/Shambhuraj Suresh Gadhave- Go for Gold-iAspire certificate_20260123_191122.png", 
    description: "Recognition for achieving the 'Gold level' in Accenture's iAspire talent program, demonstrating competitive problem-solving and proactive engagement with a leading IT consulting firm.",
    link: "https://drive.google.com/file/d/1_F68NVTDRwu-BLVVMeKJYMcu6cfiSxMP/view", 
    verificationLink: "https://drive.google.com/file/d/1_F68NVTDRwu-BLVVMeKJYMcu6cfiSxMP/view"
  },
  {
    title: "CSS, Bootstrap, JS & Python Stack",
    issuer: "Udemy",
    date: "2025", 
    imgPath: "/Certificate/image_63b15ff7-cfa7-4c1d-a644-1883e00c46e720260123_190730.jpg", 
    description: "A 7.5-hour training course covering the fundamentals of modern front-end and back-end web development.",
    link: "https://drive.google.com/file/d/1MomWnmCiNcc65VKTB8dnAk2XyDHmWMjs/view", 
    verificationLink: "https://drive.google.com/file/d/1MomWnmCiNcc65VKTB8dnAk2XyDHmWMjs/view"
  },
  {
    title: "Cursor Vibe Coding Pro (AI Apps)",
    issuer: "Udemy",
    date: "2025", 
    imgPath: "/Certificate/Screenshot_20260123-190715.jpg", 
    description: "A 4-hour specialized course focused on leveraging emerging AI coding tools to accelerate software and app development.",
    link: "https://drive.google.com/file/d/1U8gdhVX4RTw2b7RMbLeTigDNDP-RCWVT/view", 
    verificationLink: "https://drive.google.com/file/d/1U8gdhVX4RTw2b7RMbLeTigDNDP-RCWVT/view"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" }
  },
};

const Certificates = () => (
  <section id="certificates" className="py-24 px-4 relative overflow-hidden">
    <div className="container mx-auto max-w-7xl relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" variants={itemVariants}>
          My <span className="text-primary text-glow">Certificates</span>
        </motion.h2>

        <motion.p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto" variants={itemVariants}>
          Here are some of the certifications and internships I have completed, showcasing my continuous learning and practical experience.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificateCards.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group glass-card rounded-2xl p-5 flex flex-col gap-4 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,165,0,0.2)] border border-border/50 bg-background/40"
            >
              <div className="flex flex-col items-center sm:flex-row sm:items-start gap-4">
                <div className="w-20 h-20 shrink-0 bg-white/5 rounded-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                  <img
                    src={cert.imgPath}
                    alt={cert.title}
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/80?text=Cert';
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0 text-center sm:text-left">
                  <h3 className="text-foreground text-base sm:text-lg font-bold line-clamp-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-primary/90 font-medium text-xs sm:text-sm mt-1">{cert.issuer}</p>
                  <p className="text-muted-foreground text-xs mt-1">{cert.date}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm mt-2 line-clamp-3 grow text-center sm:text-left">
                {cert.description}
              </p>
              <div className="flex gap-3 mt-auto pt-4 border-t border-border/50">
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-3 py-2 bg-gradient-to-r from-primary to-orange-500 text-primary-foreground rounded-lg text-xs sm:text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                  >
                    View
                  </a>
                )}
                <a
                  href={cert.verificationLink || cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-3 py-2 border border-primary text-primary rounded-lg text-xs sm:text-sm font-semibold hover:bg-primary/10 transition-colors duration-300"
                >
                  Verify
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Certificates;