import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Vibly - Your Social Media Platform",
    description:
      "Beautiful authentication and onboarding experience for Vibly using React, Tailwind CSS, Next.js, Framer Motion, and React Hook Form.",
    image: "/assets/pr1.png",
    tags: ["React", "Next.js", "TailwindCSS", "Framer Motion", "Yup"],
    demoUrl: "https://vibly-iota.vercel.app/",
    githubUrl: "https://github.com/shambhuraj0007/vibly",
  },
  {
    id: 2,
    title: "Plant Disease Detector",
    description:
      "AI-powered app using deep learning to detect plant diseases. Built with Streamlit and TensorFlow for fast, accurate predictions.",
    image: "/assets/pr2.png",
    tags: ["Python", "TensorFlow", "Streamlit", "Deep Learning"],
    demoUrl:
      "https://plantdiseaserecognizer-jzekrenc97vzfddv3fa2fd.streamlit.app/",
    githubUrl: "https://github.com/shambhuraj0007/PlantDiseaseRecognizer",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was crafted with
          attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-xl overflow-hidden shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="overflow-hidden h-[250px] md:h-[300px] rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground transition-opacity duration-300 group-hover:opacity-90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors"
                    ><button><ExternalLink size={20} />Demo</button>
                      
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors"
                    ><button><Github size={20} />Source Code</button>
                      
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/shambhuraj0007"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
