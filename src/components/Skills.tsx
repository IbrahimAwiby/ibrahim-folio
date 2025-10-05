import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { FloatingIcons } from "@/components/FloatingIcons";
import {
  FileCode2,
  Palette,
  Code,
  Box,
  Component,
  Layers,
  Database,
  Wifi,
  FileType,
  Wind,
  LucideIcon,
  Zap,
} from "lucide-react";

const skills: {
  name: string;
  level: number;
  gradient: string;
  icon: LucideIcon;
}[] = [
  {
    name: "HTML",
    level: 95,
    gradient: "from-orange-500 to-orange-600",
    icon: FileCode2,
  },
  {
    name: "CSS",
    level: 90,
    gradient: "from-blue-500 to-blue-600",
    icon: Palette,
  },
  {
    name: "JavaScript",
    level: 88,
    gradient: "from-yellow-400 to-yellow-500",
    icon: Code,
  },
  {
    name: "Bootstrap",
    level: 85,
    gradient: "from-purple-500 to-purple-600",
    icon: Box,
  },
  {
    name: "React",
    level: 90,
    gradient: "from-cyan-400 to-cyan-500",
    icon: Component,
  },
  {
    name: "Next.js",
    level: 85,
    gradient: "from-gray-700 to-gray-900",
    icon: Layers,
  },
  {
    name: "Redux",
    level: 80,
    gradient: "from-purple-600 to-purple-700",
    icon: Database,
  },
  {
    name: "Axios",
    level: 85,
    gradient: "from-blue-600 to-blue-700",
    icon: Wifi,
  },
  {
    name: "TypeScript",
    level: 82,
    gradient: "from-blue-500 to-blue-600",
    icon: FileType,
  },
  {
    name: "Tailwind CSS",
    level: 92,
    gradient: "from-teal-400 to-teal-500",
    icon: Wind,
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.08 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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
        staggerChildren: 0.1,
      },
    },
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
  };

  return (
    <section id="skills" className="py-20 relative md:px-4">
      <FloatingIcons icons={skills.map((s) => s.icon)} count={15} />

      {/* Animated background elements */}
      <div className="absolute overflow-hidden inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-orange-500/5 rounded-full blur-3xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-56 h-56 md:w-80 md:h-80 bg-blue-500/5 rounded-full blur-3xl"
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
          className="absolute top-3/4 left-1/2 w-48 h-48 md:w-64 md:h-64 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
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
                Skills & Expertise
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
              variants={itemVariants}
            >
              Technical Skills
            </motion.h2>

            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Here are the technologies and tools I specialize in to create
              amazing web experiences
            </motion.p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={staggerChildren}
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: {
                      duration: 0.3,
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 300,
                    },
                  }}
                  whileTap={{ scale: 0.98 }}
                  custom={index}
                >
                  <Card className="relative overflow-hidden p-6 glass-effect border-primary/20 hover:border-primary/40 transition-all group h-full cursor-pointer">
                    {/* Animated gradient background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      whileHover={{ opacity: 0.15 }}
                    />

                    {/* Animated border glow */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="absolute inset-[2px] bg-background rounded-[inherit]" />
                    </motion.div>

                    {/* Floating particles */}
                    <motion.div
                      className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br ${skill.gradient} rounded-full opacity-0 group-hover:opacity-100`}
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
                      className={`absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br ${skill.gradient} rounded-full opacity-0 group-hover:opacity-100`}
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

                    <div className="relative">
                      {/* Icon with animation */}
                      <motion.div
                        className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${skill.gradient} p-3 mb-4 shadow-lg`}
                        whileHover={{
                          scale: 1.1,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.5 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        animate={{
                          y: [0, -4, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-full h-full text-white" />
                        </motion.div>

                        {/* Icon glow effect */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} rounded-xl opacity-0 group-hover:opacity-30 blur-md`}
                          whileHover={{ opacity: 0.4 }}
                        />
                      </motion.div>

                      {/* Skill name */}
                      <motion.h3
                        className="relative text-xl font-bold mb-3 group-hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {skill.name}
                      </motion.h3>

                      {/* Progress bar */}
                      <div className="relative">
                        <div className="flex justify-between items-center mb-2">
                          <motion.span
                            className="text-sm text-muted-foreground"
                            whileHover={{ color: "rgb(59, 130, 246)" }}
                          >
                            Proficiency
                          </motion.span>
                          <motion.span
                            className="text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                            whileHover={{ scale: 1.1 }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            variants={progressBarVariants}
                            custom={skill.level}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.gradient} rounded-full shadow-lg relative overflow-hidden`}
                          >
                            {/* Shimmer effect on progress bar */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={{ x: [-100, 100] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: 1 + index * 0.1,
                                ease: "easeInOut",
                              }}
                            />
                          </motion.div>

                          {/* Progress bar glow */}
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} rounded-full opacity-0 group-hover:opacity-20 blur-sm`}
                            whileHover={{ opacity: 0.3 }}
                          />
                        </div>

                        {/* Animated dots on progress track */}
                        <div className="absolute inset-0 flex justify-between items-center px-1">
                          {[0, 25, 50, 75, 100].map((pos) => (
                            <motion.div
                              key={pos}
                              className="w-1 h-1 bg-white/30 rounded-full"
                              animate={{
                                opacity: [0.3, 0.7, 0.3],
                                scale: [0.8, 1.2, 0.8],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.1 + pos * 0.01,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Level indicator pulse */}
                    <motion.div
                      className={`absolute bottom-2 right-2 w-3 h-3 bg-gradient-to-r ${skill.gradient} rounded-full opacity-0 group-hover:opacity-100`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Skills Summary */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto p-8 glass-effect border-primary/20 shadow-glow relative overflow-hidden">
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
                <motion.h3
                  className="text-2xl font-bold mb-4 gradient-text"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  Skills Overview
                </motion.h3>

                <motion.p
                  className="text-muted-foreground mb-6"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  With expertise in modern frontend technologies, I build
                  responsive, performant web applications that provide
                  exceptional user experiences. My focus is on clean code,
                  modern architecture, and cutting-edge solutions.
                </motion.p>

                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
                  variants={staggerChildren}
                >
                  {[
                    {
                      number: "10+",
                      label: "Technologies",
                      color: "text-primary",
                    },
                    {
                      number: "2+",
                      label: "Years Experience",
                      color: "text-secondary",
                    },
                    { number: "20+", label: "Projects", color: "text-accent" },
                    {
                      number: "90%",
                      label: "Dedication",
                      color: "text-primary",
                    },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="p-4 bg-white/5 rounded-xl border border-white/10"
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        borderColor: "rgba(59, 130, 246, 0.3)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className={`text-2xl font-bold ${stat.color} mb-1`}
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-4 left-4 w-6 h-6 bg-primary/10 rounded-full"
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
                className="absolute bottom-4 right-4 w-4 h-4 bg-secondary/10 rounded-full"
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
