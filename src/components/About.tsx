import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FloatingIcons } from "@/components/FloatingIcons";
import {
  GraduationCap,
  BookOpen,
  Award,
  Lightbulb,
  Target,
  Brain,
  Code2,
  Zap,
  Rocket,
  Heart,
  MapPin,
  Calendar,
  Download,
  ExternalLink,
  Server,
  Database,
  Workflow,
  Layers,
  ChevronDown,
  Globe,
} from "lucide-react";
import profileImg from "../../public/assets/profile.jpg";

const cvOptions = [
  {
    label: "Frontend CV",
    description: "React, Next.js, TypeScript",
    icon: Globe,
    file: "/assets/CV-Ibrahim-Hassan-Frontend.pdf",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    label: "Backend CV",
    description: "Node.js, Express, Databases",
    icon: Server,
    file: "/assets/CV-Ibrahim-Hassan-Backend.pdf",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    label: "Fullstack CV",
    description: "Complete MERN Stack",
    icon: Layers,
    file: "/assets/CV-Ibrahim-Hassan-Fullstack.pdf",
    gradient: "from-purple-500 to-pink-500",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.08 });
  const [activeTab, setActiveTab] = useState("about");
  const [isCVDropdownOpen, setIsCVDropdownOpen] = useState(false);
  const cvDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cvDropdownRef.current &&
        !cvDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCVDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const stats = [
    { icon: Code2, number: "8+", label: "Projects Completed" },
    { icon: Layers, number: "3+", label: "Years MERN Stack" },
    { icon: Database, number: "10+", label: "Databases Built" },
    { icon: Workflow, number: "15+", label: "APIs Developed" },
  ];

  const tabs = [
    { id: "about", label: "About Me", icon: User },
    { id: "skills", label: "Skills", icon: Brain },
    { id: "journey", label: "Journey", icon: MapPin },
  ];

  const handleCVDownload = (file: string) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop() || "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsCVDropdownOpen(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 bg-background relative scroll-mt-20 w-full overflow-x-hidden md:px-4"
    >
      <div className="hidden md:block">
        <FloatingIcons
          icons={[
            GraduationCap,
            BookOpen,
            Award,
            Lightbulb,
            Target,
            Brain,
            Code2,
            Zap,
            Server,
            Database,
            Workflow,
          ]}
          count={15}
        />
      </div>

      {/* Animated background elements */}
      <div className="absolute overflow-hidden inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-56 h-56 md:w-80 md:h-80 bg-secondary/5 rounded-full blur-3xl"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full max-w-full">
        <div ref={ref} className="w-full">
          {/* Header Section */}
          <motion.div
            className="text-center mb-12 md:mb-16 w-full px-4"
            variants={itemVariants}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 bg-primary/10 rounded-full border border-primary/20 mb-4 md:mb-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 2 }}
              >
                <Zap className="h-3 w-3 md:h-4 md:w-4 text-primary" />
              </motion.div>
              <span className="text-xs md:text-sm font-medium text-primary">
                About Me
              </span>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 gradient-text"
              variants={itemVariants}
            >
              MERN Stack Developer
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Building robust fullstack applications with MongoDB, Express,
              React, Node.js & PostgreSQL
            </motion.p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16 max-w-4xl mx-auto w-full"
            variants={staggerChildren}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full"
              >
                <Card className="p-4 md:p-6 text-center glass-effect border-primary/10 hover:border-primary/30 transition-all duration-300 group w-full">
                  <motion.div
                    className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </motion.div>
                  <motion.div
                    className="text-xl md:text-2xl font-bold gradient-text mb-1 md:mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="max-w-6xl mx-auto w-full"
            variants={itemVariants}
          >
            <Card className="glass-effect border-primary/20 shadow-glow overflow-hidden w-full">
              <div className="grid lg:grid-cols-2 gap-0 w-full">
                {/* Image Section */}
                <motion.div
                  className="relative p-6 md:p-8 lg:p-12 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 w-full"
                  variants={slideInLeft}
                >
                  <div className="relative w-full">
                    {/* Animated background elements */}
                    <motion.div
                      className="absolute -top-4 -left-4 md:-top-8 md:-left-8 w-20 h-20 md:w-32 md:h-32 bg-primary/10 rounded-full blur-2xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-24 h-24 md:w-40 md:h-40 bg-secondary/10 rounded-full blur-2xl"
                      animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.7, 0.4],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    />

                    {/* Profile Image */}
                    <div className="relative flex justify-center">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl md:rounded-3xl blur-xl md:blur-2xl opacity-50 max-w-[280px] md:max-w-[320px] mx-auto"
                        animate={{
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.img
                        src={profileImg}
                        alt="Ibrahim Hassan"
                        className="relative w-60 h-60 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-xl md:rounded-2xl object-cover border-4 border-white/20 shadow-2xl mx-auto"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    {/* Floating elements */}
                    <motion.div
                      className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg"
                      animate={{
                        y: [0, -15, 0],
                        rotate: [0, 10, -5, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                    >
                      <Server className="h-5 w-5 md:h-8 md:w-8 text-white" />
                    </motion.div>

                    <motion.div
                      className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg"
                      animate={{
                        y: [0, 15, 0],
                        rotate: [0, -10, 5, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                      whileHover={{ scale: 1.15, rotate: -360 }}
                    >
                      <Database className="h-4 w-4 md:h-6 md:w-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Quick Info */}
                  <motion.div
                    className="mt-6 md:mt-8 grid grid-cols-2 gap-3 md:gap-4 text-center max-w-xs mx-auto"
                    variants={staggerChildren}
                  >
                    <motion.div
                      className="p-3 md:p-4 bg-white/5 rounded-xl border border-white/10"
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        borderColor: "rgba(59, 130, 246, 0.3)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary mx-auto mb-1 md:mb-2" />
                      <div className="text-xs md:text-sm font-medium text-foreground">
                        Egypt
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Location
                      </div>
                    </motion.div>
                    <motion.div
                      className="p-3 md:p-4 bg-white/5 rounded-xl border border-white/10"
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        borderColor: "rgba(168, 85, 247, 0.3)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Calendar className="h-4 w-4 md:h-5 md:w-5 text-secondary mx-auto mb-1 md:mb-2" />
                      <div className="text-xs md:text-sm font-medium text-foreground">
                        3+ Years
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Experience
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                  className="p-6 md:p-8 lg:p-12 w-full"
                  variants={slideInRight}
                >
                  {/* Tab Navigation */}
                  <motion.div
                    className="flex gap-1 md:gap-2 mb-6 md:mb-8 p-1 bg-muted/50 rounded-xl md:rounded-2xl w-full max-w-md mx-auto lg:mx-0"
                    layout
                  >
                    {tabs.map((tab) => (
                      <motion.button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-1 md:gap-2 px-3 py-2 rounded-lg md:rounded-xl text-xs md:text-sm font-medium transition-all duration-300 flex-1 justify-center ${
                          activeTab === tab.id
                            ? "bg-primary text-primary-foreground shadow-lg"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        layout
                      >
                        <motion.div
                          animate={{
                            rotate: activeTab === tab.id ? [0, 360] : 0,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <tab.icon className="h-3 w-3 md:h-4 md:w-4" />
                        </motion.div>
                        <span className="hidden sm:inline">{tab.label}</span>
                      </motion.button>
                    ))}
                  </motion.div>

                  {/* Tab Content */}
                  <motion.div
                    className="space-y-4 md:space-y-6"
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {activeTab === "about" && (
                      <motion.div
                        variants={staggerChildren}
                        initial="hidden"
                        animate="visible"
                      >
                        <motion.h3
                          className="text-xl md:text-2xl font-bold mb-3 md:mb-4 gradient-text"
                          variants={itemVariants}
                        >
                          MERN Stack Developer
                        </motion.h3>
                        <motion.p
                          className="text-base md:text-lg leading-relaxed text-muted-foreground mb-4 md:mb-6"
                          variants={itemVariants}
                        >
                          I'm a passionate MERN Stack Developer with over 3
                          years of experience building complete web
                          applications. I specialize in{" "}
                          <span className="text-primary font-semibold">
                            React & Next.js
                          </span>{" "}
                          for frontend,{" "}
                          <span className="text-green-400 font-semibold">
                            Node.js & Express
                          </span>{" "}
                          for backend, and{" "}
                          <span className="text-secondary font-semibold">
                            MongoDB & PostgreSQL
                          </span>{" "}
                          for databases.
                        </motion.p>
                        <motion.p
                          className="text-base md:text-lg leading-relaxed text-muted-foreground mb-4 md:mb-6"
                          variants={itemVariants}
                        >
                          I focus on creating performant, scalable applications
                          with clean architecture. My expertise includes
                          building RESTful APIs, implementing authentication
                          systems, and using{" "}
                          <span className="text-purple-400 font-semibold">
                            Prisma ORM
                          </span>{" "}
                          for type-safe database operations.
                        </motion.p>
                        <motion.div
                          className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6"
                          variants={staggerChildren}
                        >
                          {[
                            "React",
                            "Next.js",
                            "TypeScript",
                            "Node.js",
                            "Express",
                            "MongoDB",
                            "PostgreSQL",
                            "Prisma",
                          ].map((tech, index) => (
                            <motion.span
                              key={tech}
                              className="px-2 py-1 md:px-3 md:py-1 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium border border-primary/20"
                              variants={itemVariants}
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
                      </motion.div>
                    )}

                    {activeTab === "skills" && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 gradient-text">
                          Technical Expertise
                        </h3>
                        <div className="space-y-4">
                          {[
                            {
                              category: "Frontend",
                              skills: [
                                "React.js",
                                "Next.js",
                                "TypeScript",
                                "Tailwind CSS",
                                "Redux Toolkit",
                                "Framer Motion",
                              ],
                              icon: Code2,
                              color: "from-blue-400 to-cyan-400",
                            },
                            {
                              category: "Backend",
                              skills: [
                                "Node.js",
                                "Express.js",
                                "REST APIs",
                                "JWT Auth",
                                "Middleware",
                                "Next.js API Routes",
                              ],
                              icon: Server,
                              color: "from-green-400 to-emerald-400",
                            },
                            {
                              category: "Database",
                              skills: [
                                "MongoDB",
                                "PostgreSQL",
                                "Prisma ORM",
                                "Mongoose",
                                "Database Design",
                              ],
                              icon: Database,
                              color: "from-orange-400 to-yellow-400",
                            },
                            {
                              category: "Tools & Others",
                              skills: [
                                "Git & GitHub",
                                "VS Code",
                                "Postman",
                                "Vercel",
                                "Netlify",
                                "Docker Basics",
                              ],
                              icon: Workflow,
                              color: "from-purple-400 to-pink-400",
                            },
                          ].map((category, index) => (
                            <motion.div
                              key={category.category}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="bg-muted/30 rounded-xl p-4 hover:bg-muted/50 transition-colors"
                            >
                              <div className="flex items-center gap-3 mb-3">
                                <motion.div
                                  className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}
                                  whileHover={{ rotate: 360 }}
                                  transition={{ duration: 0.5 }}
                                >
                                  <category.icon className="h-4 w-4 text-white" />
                                </motion.div>
                                <h4 className="font-semibold text-foreground">
                                  {category.category}
                                </h4>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                  <motion.span
                                    key={skill}
                                    className="px-2 py-1 bg-background/50 text-foreground rounded-lg text-xs border border-border"
                                    whileHover={{
                                      scale: 1.1,
                                      borderColor: "rgb(59, 130, 246)",
                                    }}
                                  >
                                    {skill}
                                  </motion.span>
                                ))}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "journey" && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 gradient-text">
                          My Journey
                        </h3>
                        <div className="space-y-3 md:space-y-4">
                          {[
                            {
                              year: "2023",
                              title: "Started Web Development",
                              desc: "Began learning HTML, CSS, JavaScript and React fundamentals",
                              icon: Code2,
                            },
                            {
                              year: "2024",
                              title: "Backend & Database Mastery",
                              desc: "Mastered Node.js, Express, MongoDB, and PostgreSQL with Prisma",
                              icon: Server,
                            },
                            {
                              year: "2025",
                              title: "Fullstack Applications",
                              desc: "Building complete MERN stack applications with modern practices",
                              icon: Layers,
                            },
                          ].map((item, index) => (
                            <motion.div
                              key={item.year}
                              className="flex gap-3 md:gap-4"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.2 }}
                              whileHover={{ x: 5 }}
                            >
                              <div className="flex flex-col items-center">
                                <motion.div
                                  className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center"
                                  whileHover={{ scale: 1.2, rotate: 360 }}
                                  transition={{ duration: 0.5 }}
                                >
                                  <item.icon className="h-4 w-4 text-primary" />
                                </motion.div>
                                {index < 2 && (
                                  <motion.div
                                    className="w-0.5 h-8 md:h-12 bg-primary/30 mt-1"
                                    initial={{ scaleY: 0 }}
                                    animate={{ scaleY: 1 }}
                                    transition={{ delay: 0.8 + index * 0.2 }}
                                  />
                                )}
                              </div>
                              <div className="flex-1">
                                <motion.div
                                  className="font-bold text-foreground text-sm md:text-base"
                                  whileHover={{ color: "rgb(59, 130, 246)" }}
                                >
                                  {item.year}
                                </motion.div>
                                <div className="font-semibold text-primary text-sm md:text-base">
                                  {item.title}
                                </div>
                                <div className="text-muted-foreground text-xs md:text-sm">
                                  {item.desc}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* CTA Buttons with CV Dropdown */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8"
                  >
                    {/* Download CV Button with Dropdown */}
                    <div className="relative" ref={cvDropdownRef}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto"
                      >
                        <Button
                          onClick={() => setIsCVDropdownOpen(!isCVDropdownOpen)}
                          className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all text-sm md:text-base w-full"
                          size="sm"
                        >
                          <motion.div
                            animate={{ y: [0, -2, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <Download className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                          </motion.div>
                          Download CV
                          <motion.div
                            animate={{ rotate: isCVDropdownOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="ml-1 h-3 w-3 md:h-4 md:w-4" />
                          </motion.div>
                        </Button>
                      </motion.div>

                      {/* CV Dropdown Menu - Same width as button */}
                      <AnimatePresence>
                        {isCVDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute bottom-full left-0 right-0 mb-2 bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl overflow-hidden z-[100]"
                          >
                            {cvOptions.map((option, index) => {
                              const Icon = option.icon;
                              return (
                                <motion.button
                                  key={option.label}
                                  onClick={() => handleCVDownload(option.file)}
                                  className="w-full flex items-center gap-3 p-3 hover:bg-muted/50 transition-colors group relative"
                                  whileHover={{ x: 5 }}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                >
                                  <div
                                    className={`w-8 h-8 rounded-lg bg-gradient-to-br ${option.gradient} p-1.5 flex items-center justify-center flex-shrink-0`}
                                  >
                                    <Icon className="w-full h-full text-white" />
                                  </div>
                                  <div className="flex-1 text-left min-w-0">
                                    <div className="text-sm font-semibold text-foreground truncate">
                                      {option.label}
                                    </div>
                                    <div className="text-xs text-muted-foreground truncate">
                                      {option.description}
                                    </div>
                                  </div>
                                  <Download className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                                </motion.button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline"
                        onClick={() =>
                          document
                            .getElementById("projects")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        size="sm"
                        className="text-sm md:text-base w-full sm:w-auto"
                      >
                        <ExternalLink className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                        View Projects
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Icon component for tabs
const User = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);
