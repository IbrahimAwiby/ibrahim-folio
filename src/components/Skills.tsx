// Skills.tsx
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
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-20 relative md:px-4">
      <FloatingIcons icons={skills.map((s) => s.icon)} count={15} />
      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here are the technologies and tools I specialize in to create
              amazing web experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <Card className="relative overflow-hidden p-6 glass-effect border-primary/20 hover:border-primary/40 transition-all group h-full">
                    {/* Gradient background on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />

                    {/* Icon */}
                    <div
                      className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${skill.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon className="w-full h-full text-white" />
                    </div>

                    {/* Skill name */}
                    <h3 className="relative text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {skill.name}
                    </h3>

                    {/* Progress bar */}
                    <div className="relative">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">
                          Proficiency
                        </span>
                        <span className="text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            delay: index * 0.1 + 0.3,
                            duration: 0.7,
                            ease: "easeOut",
                          }}
                          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.gradient} rounded-full shadow-lg`}
                        />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="mt-16 text-center"
          >
            <Card className="max-w-4xl mx-auto p-8 glass-effect border-primary/20 shadow-glow">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Skills Overview
              </h3>
              <p className="text-muted-foreground mb-6">
                With expertise in modern frontend technologies, I build
                responsive, performant web applications that provide exceptional
                user experiences. My focus is on clean code, modern
                architecture, and cutting-edge solutions.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">
                    Technologies
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">2+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">20+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">90%</div>
                  <div className="text-sm text-muted-foreground">
                    Dedication
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
