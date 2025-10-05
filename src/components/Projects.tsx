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
  Zap,
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardHoverVariants = {
    rest: {
      y: 0,
      scale: 1,
    },
    hover: {
      y: -12,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const imageHoverVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
  };

  return (
    <section id="projects" className="py-20 bg-muted/30 relative md:px-4">
      <FloatingIcons
        icons={[Github, Monitor, Smartphone, Palette, Sparkles]}
        count={12}
      />

      {/* Animated background elements */}
      <div className="absolute overflow-hidden inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-56 h-56 md:w-80 md:h-80 bg-purple-500/5 rounded-full blur-3xl"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-3/4 left-1/2 w-48 h-48 md:w-64 md:h-64 bg-green-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header Section */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <Zap className="h-4 w-4 text-primary" />
              </motion.div>
              <span className="text-sm font-medium text-primary">
                Featured Projects
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
              variants={itemVariants}
            >
              My Projects
            </motion.h2>

            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={itemVariants}
            >
              A collection of my recent work showcasing modern web development
              with React and Next.js
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={staggerChildren}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="group"
              >
                <motion.div
                  variants={cardHoverVariants}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="relative overflow-hidden glass-effect border-primary/20 hover:border-primary/40 transition-all h-full flex flex-col">
                    {/* Clickable overlay for demo link */}
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-10 cursor-pointer"
                      aria-label={`View ${project.title} demo`}
                    />

                    {/* Animated gradient overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      whileHover={{ opacity: 0.1 }}
                    />

                    {/* Animated border glow */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="absolute inset-[2px] bg-background rounded-[inherit]" />
                    </motion.div>

                    {/* Floating particles */}
                    <motion.div
                      className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br ${project.gradient} rounded-full opacity-0 group-hover:opacity-100`}
                      animate={{
                        y: [0, -8, 0],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                    <motion.div
                      className={`absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br ${project.gradient} rounded-full opacity-0 group-hover:opacity-100`}
                      animate={{
                        y: [0, 8, 0],
                        scale: [0.6, 1.1, 0.6],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />

                    {/* Gradient header with animated icon */}
                    <motion.div
                      className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                      variants={imageHoverVariants}
                    >
                      <motion.div
                        className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"
                        whileHover={{ opacity: 0.1 }}
                      />
                      <motion.div
                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
                        whileHover={{
                          scale: 1.2,
                          rotate: 45,
                        }}
                      >
                        <ArrowUpRight className="h-6 w-6 text-white drop-shadow-lg" />
                      </motion.div>

                      {/* Animated pattern overlay */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-10"
                        whileHover={{ opacity: 0.1 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transform scale-150" />
                      </motion.div>
                    </motion.div>

                    <div className="p-6 flex-1 flex flex-col relative z-20">
                      {/* Title with hover effect */}
                      <motion.h3
                        className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {project.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p
                        className="text-muted-foreground mb-4 flex-1 leading-relaxed"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {project.description}
                      </motion.p>

                      {/* Tech stack with stagger animation */}
                      <motion.div
                        className="flex flex-wrap gap-2 mb-6"
                        variants={staggerChildren}
                      >
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20 group-hover:bg-primary/20 transition-colors"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "rgba(59, 130, 246, 0.2)",
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>

                      {/* Action buttons */}
                      <div className="flex gap-3 mt-auto relative z-30">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-primary/40 hover:bg-primary hover:text-primary-foreground transition-all group/code relative z-30"
                            asChild
                          >
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                              >
                                <Github className="mr-2 h-4 w-4" />
                              </motion.div>
                              View Code
                            </a>
                          </Button>
                        </motion.div>

                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1"
                        >
                          <Button
                            size="sm"
                            className={`w-full bg-gradient-to-r ${project.gradient} hover:opacity-90 transition-all group/demo text-white shadow-lg relative z-30`}
                            asChild
                          >
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <motion.div
                                whileHover={{ x: 2 }}
                                transition={{ duration: 0.2 }}
                              >
                                <ExternalLink className="mr-2 h-4 w-4" />
                              </motion.div>
                              Live Demo
                            </a>
                          </Button>
                        </motion.div>
                      </div>
                    </div>

                    {/* Project glow effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 rounded-lg blur-xl`}
                      whileHover={{ opacity: 0.1 }}
                    />
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* GitHub CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <Card className="max-w-2xl mx-auto p-8 glass-effect border-primary/20 shadow-glow relative overflow-hidden">
              {/* Background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <div className="relative z-10">
                <motion.div
                  className="flex items-center justify-center gap-4 mb-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    <Github className="h-8 w-8 text-primary" />
                  </motion.div>
                  <motion.h3
                    className="text-2xl font-bold gradient-text"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    Want to see more?
                  </motion.h3>
                </motion.div>

                <motion.p
                  className="text-muted-foreground mb-6"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  Check out my GitHub profile for more projects and
                  contributions.
                </motion.p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all shadow-lg relative overflow-hidden group"
                    size="lg"
                  >
                    <a
                      href="https://github.com/IbrahimAwiby"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 opacity-0 group-hover:opacity-100"
                        whileHover={{ opacity: 1 }}
                      />
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Github className="mr-2 h-5 w-5" />
                      </motion.div>
                      Visit My GitHub
                    </a>
                  </Button>
                </motion.div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-4 right-4 w-6 h-6 bg-primary/10 rounded-full"
                animate={{
                  y: [0, -8, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute bottom-4 left-4 w-4 h-4 bg-secondary/10 rounded-full"
                animate={{
                  y: [0, 8, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
