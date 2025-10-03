import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Smartphone,
  Palette,
  Monitor,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { FloatingIcons } from "@/components/FloatingIcons";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce website with cart, checkout, and product management",
    tech: ["React", "Redux", "API Integration"],
    github: "https://github.com/IbrahimAwiby/E-commerce-Route",
    demo: "https://e-commerce-route-nine.vercel.app/",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "YouTube Clone",
    description:
      "YouTube replica with video playback, search, and recommendations",
    tech: ["React", "Firebase", "API Integration"],
    github: "https://github.com/IbrahimAwiby/youtube_clone",
    demo: "https://youtube-clone-lemon-tau.vercel.app/",
    gradient: "from-red-500 to-red-600",
  },
  {
    title: "TMDB Movies",
    description:
      "Movie database app with search, filters, and detailed movie information",
    tech: ["React", "TMDB API", "Firebase"],
    github: "https://github.com/IbrahimAwiby/TMDB_Movies",
    demo: "https://tmdb-movies-cyan.vercel.app/",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Netflix Clone",
    description:
      "Netflix-style streaming interface with browse and search features",
    tech: ["React", "Firebase", "Styled Components"],
    github: "https://github.com/IbrahimAwiby/Netflix",
    demo: "https://netflix-flax-delta-95.vercel.app/",
    gradient: "from-red-600 to-black",
  },
  {
    title: "Spotify Clone",
    description:
      "Music streaming app with playlist management and audio playback",
    tech: ["React", "Spotify API", "Tailwind"],
    github: "https://github.com/IbrahimAwiby/spotify-clone",
    demo: "https://spotify-clone-sable-seven.vercel.app/",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Restaurant Website",
    description:
      "Modern restaurant website with menu, reservations, and contact forms",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/IbrahimAwiby/Resturante",
    demo: "https://ibrahimawiby.github.io/Resturante/",
    gradient: "from-amber-500 to-orange-600",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-20 bg-muted/30 relative md:px-4">
      <FloatingIcons
        icons={[Github, Monitor, Smartphone, Palette, Sparkles]}
        count={12}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              My Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of my recent work showcasing modern web development
              with React and Next.js
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="group relative overflow-hidden glass-effect border-primary/20 hover:border-primary/40 transition-all card-hover h-full flex flex-col">
                  {/* Animated gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Animated border */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}
                  >
                    <div className="absolute inset-[2px] bg-background rounded-[inherit]" />
                  </div>

                  {/* Gradient header with icon */}
                  <div
                    className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col relative">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-1 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20 group-hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 mt-auto">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary/40 hover:bg-primary hover:text-primary-foreground transition-all group/code"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="mr-2 h-4 w-4 group-hover/code:scale-105 transition-transform" />
                        View Code
                      </Button>
                      <Button
                        size="sm"
                        className={`flex-1 bg-gradient-to-r ${project.gradient} hover:opacity-90 transition-all group/demo text-white`}
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/demo:scale-105 transition-transform" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="text-center mt-16"
          >
            <Card className="max-w-2xl mx-auto p-8 glass-effect border-primary/20 shadow-glow">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Github className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Want to see more?</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub profile for more projects and contributions.
              </p>
              <Button
                onClick={() =>
                  window.open("https://github.com/IbrahimAwiby", "_blank")
                }
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                size="lg"
              >
                <Github className="mr-2 h-5 w-5" />
                Visit My GitHub
              </Button>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
