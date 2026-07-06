import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { FloatingIcons } from "@/components/FloatingIcons";
import {
  Code2,
  Server,
  Database,
  Globe,
  Workflow,
  Layers,
  Shield,
  Zap,
  Box,
  Wifi,
  FileType,
  Wind,
  Cpu,
  GitBranch,
  Terminal,
  Sparkles,
} from "lucide-react";

const skillCategories = [
  {
    category: "Frontend",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React.js", icon: Code2, level: "Advanced" },
      { name: "Next.js", icon: Globe, level: "Advanced" },
      { name: "TypeScript", icon: FileType, level: "Advanced" },
      { name: "Tailwind CSS", icon: Wind, level: "Expert" },
      { name: "Redux Toolkit", icon: Box, level: "Intermediate" },
      { name: "Framer Motion", icon: Sparkles, level: "Advanced" },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    gradient: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", icon: Server, level: "Advanced" },
      { name: "Express.js", icon: Workflow, level: "Advanced" },
      { name: "REST APIs", icon: Wifi, level: "Expert" },
      { name: "JWT Auth", icon: Shield, level: "Advanced" },
      { name: "Next.js API", icon: Layers, level: "Advanced" },
      { name: "Middleware", icon: Cpu, level: "Intermediate" },
    ],
  },
  {
    category: "Database",
    icon: Database,
    gradient: "from-orange-500 to-yellow-500",
    skills: [
      { name: "MongoDB", icon: Database, level: "Advanced" },
      { name: "PostgreSQL", icon: Database, level: "Advanced" },
      { name: "Prisma ORM", icon: Layers, level: "Advanced" },
      { name: "Mongoose", icon: Workflow, level: "Advanced" },
      { name: "Data Modeling", icon: Box, level: "Intermediate" },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: GitBranch,
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "Git & GitHub", icon: GitBranch, level: "Advanced" },
      { name: "VS Code", icon: Code2, level: "Expert" },
      { name: "Postman", icon: Wifi, level: "Advanced" },
      { name: "Terminal", icon: Terminal, level: "Intermediate" },
      { name: "Vercel", icon: Globe, level: "Advanced" },
      { name: "Netlify", icon: Globe, level: "Intermediate" },
    ],
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.08 });

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
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-background relative md:px-4">
      <div className="hidden md:block">
        <FloatingIcons
          icons={[
            Code2,
            Server,
            Database,
            Globe,
            Workflow,
            Layers,
            Shield,
            GitBranch,
            Terminal,
          ]}
          count={20}
        />
      </div>

      {/* Animated background elements */}
      <div className="absolute overflow-hidden inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-green-500/5 rounded-full blur-3xl"
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
        <div ref={ref}>
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
                My Tech Stack
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
              variants={itemVariants}
            >
              Skills & Expertise
            </motion.h2>

            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={itemVariants}
            >
              MERN stack specialist with expertise in PostgreSQL, Prisma, and
              modern development tools
            </motion.p>
          </motion.div>

          {/* Skills Grid - Organized by Category */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
            variants={staggerChildren}
          >
            {skillCategories.map((category, catIndex) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  key={category.category}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: catIndex * 0.1 }}
                >
                  <Card className="p-4 md:p-6 glass-effect border-primary/20 hover:border-primary/40 transition-all h-full">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <motion.div
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${category.gradient} p-2.5 md:p-3 shadow-lg flex-shrink-0`}
                        whileHover={{
                          scale: 1.1,
                          rotate: 360,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <CategoryIcon className="w-full h-full text-white" />
                      </motion.div>
                      <div className="min-w-0">
                        <h3 className="text-lg md:text-xl font-bold">
                          {category.category}
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground">
                          {category.skills.length} technologies
                        </p>
                      </div>
                    </div>

                    {/* Skills Grid - 2 columns on mobile, 2 columns on tablet+ */}
                    <div className="grid grid-cols-2 gap-2 md:gap-3">
                      {category.skills.map((skill, skillIndex) => {
                        const SkillIcon = skill.icon;
                        return (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              delay: 0.3 + catIndex * 0.1 + skillIndex * 0.05,
                            }}
                            whileHover={{
                              scale: 1.02,
                              y: -2,
                            }}
                            className="flex items-center gap-1.5 md:gap-3 p-2 md:p-3 rounded-xl bg-muted/30 hover:bg-muted/50 border border-border/30 hover:border-primary/30 transition-all group cursor-pointer"
                          >
                            <motion.div
                              className={`w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-br ${category.gradient} p-1 md:p-1.5 flex items-center justify-center flex-shrink-0`}
                              whileHover={{ rotate: 15 }}
                            >
                              <SkillIcon className="w-full h-full text-white" />
                            </motion.div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[11px] md:text-sm font-medium break-words leading-tight">
                                {skill.name}
                              </div>
                              <div className="text-[9px] md:text-xs text-muted-foreground">
                                {skill.level}
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Skills Summary */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto p-6 md:p-8 glass-effect border-primary/20 shadow-glow relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-blue-500/5 to-purple-500/5"
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
                  className="text-xl md:text-2xl font-bold mb-3 md:mb-4 gradient-text"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  Complete Stack Overview
                </motion.h3>

                <motion.p
                  className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 px-2"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  From frontend to backend, database to deployment - I build
                  complete applications with modern MERN stack technologies
                </motion.p>

                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-center"
                  variants={staggerChildren}
                >
                  {[
                    {
                      number: "20+",
                      label: "Technologies",
                      color: "text-blue-400",
                      icon: Code2,
                    },
                    {
                      number: "4",
                      label: "Core Areas",
                      color: "text-green-400",
                      icon: Layers,
                    },
                    {
                      number: "8+",
                      label: "Projects Built",
                      color: "text-purple-400",
                      icon: Sparkles,
                    },
                    {
                      number: "4",
                      label: "Categories",
                      color: "text-orange-400",
                      icon: Workflow,
                    },
                  ].map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={stat.label}
                        className="p-3 md:p-4 bg-white/5 rounded-xl border border-white/10"
                        whileHover={{
                          scale: 1.05,
                          y: -2,
                          borderColor: "rgba(59, 130, 246, 0.3)",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon
                          className={`h-5 w-5 md:h-6 md:w-6 mx-auto mb-1 md:mb-2 ${stat.color}`}
                        />
                        <motion.div
                          className={`text-lg md:text-2xl font-bold ${stat.color} mb-1`}
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
                        <div className="text-xs md:text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-4 left-4 w-6 h-6 bg-green-500/10 rounded-full"
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
                className="absolute bottom-4 right-4 w-4 h-4 bg-blue-500/10 rounded-full"
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
        </div>
      </div>
    </section>
  );
};
