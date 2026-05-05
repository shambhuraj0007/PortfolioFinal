import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
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

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      e.target.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <motion.div 
        className="container mx-auto max-w-5xl relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" variants={itemVariants}>
          Get In <span className="text-primary text-glow">Touch</span>
        </motion.h2>

        <motion.p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto" variants={itemVariants}>
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div className="space-y-10" variants={itemVariants}>
            <div className="glass-card p-8 rounded-2xl border border-border/50">
              <h3 className="text-2xl font-semibold mb-8 text-foreground">
                Contact Information
              </h3>

              <div className="space-y-8">
                <div className="flex items-center space-x-5 group">
                  <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg text-foreground">Email</h4>
                    <a
                      href="mailto:gadhaveshambhuraj@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors block mt-1"
                    >
                      gadhaveshambhuraj@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-5 group">
                  <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg text-foreground">Phone</h4>
                    <a
                      href="tel:+917058618054"
                      className="text-muted-foreground hover:text-primary transition-colors block mt-1"
                    >
                      +91 7058618054
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-5 group">
                  <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg text-foreground">Location</h4>
                    <span className="text-muted-foreground block mt-1">
                      Pune, Maharashtra, India
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-10 mt-10 border-t border-border/50">
                <h4 className="font-medium mb-6 text-lg text-center sm:text-left">Connect With Me</h4>
                <div className="flex space-x-4 justify-center sm:justify-start">
                  {[
                    { icon: <Mail />, link: "mailto:gadhaveshambhuraj@gmail.com" },
                    { icon: <Linkedin />, link: "https://www.linkedin.com/in/shambhuraj-gadhave-39b221347" },
                    { icon: <Twitter />, link: "https://twitter.com/GadhaveShambhuraj" },
                    { icon: <Instagram />, link: "https://www.instagram.com/gadhave_shambhuraj" },
                    { icon: <Twitch />, link: "https://www.twitch.tv/gadhave_shambhuraj" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm hover:shadow-md"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form
              action="https://formspree.io/f/mdkdpkrq"
              method="POST"
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-2xl border border-border/50 space-y-6 relative"
            >
              <h3 className="text-2xl font-semibold mb-2 text-foreground">Send me a message</h3>
              <p className="text-muted-foreground text-sm mb-6">I'll usually get back to you within 24 hours.</p>

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground/50"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground/50"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground/50 resize-none"
                  placeholder="Hello Shambhuraj, I'd like to talk about..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="cosmic-button w-full flex items-center justify-center gap-2 py-4 rounded-xl text-lg font-medium disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} className={isSubmitting ? "animate-pulse" : ""} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
