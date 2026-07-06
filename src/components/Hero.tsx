import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  ArrowDown,
  Code2,
  FileCode,
  Braces,
  Cog,
  Database,
  FileJson,
  Sparkles,
  Zap,
  Globe,
  Cpu,
  Server,
  Terminal,
  Layers,
  Workflow,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingIcons } from "@/components/FloatingIcons";
import heroBg from "../../public/assets/hero-bg.jpg";
import { useEffect, useState, useRef } from "react";

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

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [isCVDropdownOpen, setIsCVDropdownOpen] = useState(false);
  const cvDropdownRef = useRef<HTMLDivElement>(null);

  const roles = [
    "MERN Stack Developer",
    "Backend Developer",
    "Frontend Developer",
    "API Developer",
    "Database Designer",
    "Fullstack Developer",
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        cvDropdownRef.current &&
        !cvDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCVDropdownOpen(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleClickOutside);

    // Rotate through roles
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleClickOutside);
      clearInterval(roleInterval);
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCVDownload = (file: string) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop() || "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsCVDropdownOpen(false);
  };

  // Animated gradient positions for mouse interaction
  const gradientX = (mousePosition.x / window.innerWidth) * 100;
  const gradientY = (mousePosition.y / window.innerHeight) * 100;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Advanced Background System */}
      <div className="absolute inset-0">
        {/* Base Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        {/* Animated Gradient Overlays */}
        <div
          className="absolute inset-0 opacity-90 transition-all duration-1000"
          style={{
            background: `
              radial-gradient(circle at ${gradientX}% ${gradientY}%, 
                hsl(150 60% 50% / 0.9) 0%, 
                transparent 50%),
              radial-gradient(circle at ${100 - gradientX}% ${
                100 - gradientY
              }%, 
                hsl(217 91% 60% / 0.7) 0%, 
                transparent 50%),
              radial-gradient(circle at ${gradientY}% ${gradientX}%, 
                hsl(262 83% 58% / 0.6) 0%, 
                transparent 50%),
              radial-gradient(circle at 50% 50%, 
                hsl(30 90% 55% / 0.4) 0%, 
                transparent 50%)
            `,
          }}
        />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
              backgroundPosition: "center center",
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Floating Icons */}
      <div className="hidden md:block">
        <FloatingIcons
          icons={[
            Code2,
            FileCode,
            Braces,
            Cog,
            Database,
            FileJson,
            Zap,
            Globe,
            Cpu,
            Server,
            Terminal,
            Layers,
            Workflow,
          ]}
          count={25}
        />
      </div>

      {/* Interactive Light Beams */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 w-1 h-full bg-gradient-to-b from-white/30 via-white/10 to-transparent"
            style={{
              left: `${20 + i * 30}%`,
            }}
            animate={{
              y: [-100, 100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center text-white"
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 mb-8 group cursor-pointer hover:bg-white/20 transition-all duration-500"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="h-5 w-5 text-yellow-300" />
            </motion.div>
            <span className="text-sm font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              MERN Stack Developer | Open to Work
            </span>
            <motion.div
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Name with Gradient Text Effect */}
          <div className="relative">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl mb-6 font-light text-white/90 tracking-wider uppercase"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1, type: "spring" }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none"
            >
              <span
                className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
                   dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400
                   bg-clip-text text-transparent"
              >
                IBRAHIM
              </span>
              <br />
              <span
                className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 
                   dark:from-emerald-400 dark:via-teal-400 dark:to-green-400
                   bg-clip-text text-transparent"
              >
                HASSAN
              </span>
            </motion.h1>

            {/* Animated Rotating Titles */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="relative inline-block"
            >
              <motion.div
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h2
                  className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-green-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% auto",
                  }}
                >
                  {roles[currentRole]}
                </motion.h2>
              </motion.div>

              {/* Animated underline */}
              <motion.div
                className="h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 rounded-full mt-2"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
              />
            </motion.div>
          </div>

          {/* Description with MERN stack emphasis */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <p className="text-xl lg:text-2xl text-white/80 leading-relaxed font-light">
              Building{" "}
              <motion.span
                className="text-green-300 font-semibold"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(34, 197, 94, 0)",
                    "0 0 20px rgba(34, 197, 94, 0.5)",
                    "0 0 20px rgba(34, 197, 94, 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                robust applications
              </motion.span>{" "}
              with <span className="text-blue-300 font-semibold">React</span>,{" "}
              <span className="text-green-400 font-semibold">Node.js</span>,{" "}
              <span className="text-emerald-300 font-semibold">Express</span>,{" "}
              <span className="text-orange-300 font-semibold">MongoDB</span>,{" "}
              and{" "}
              <span className="text-purple-300 font-semibold">PostgreSQL</span>
            </p>
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {[
              {
                name: "React.js",
                icon: Code2,
                color: "from-blue-400 to-cyan-400",
              },
              { name: "Next.js", icon: Globe, color: "from-gray-400 to-white" },
              {
                name: "Node.js",
                icon: Server,
                color: "from-green-400 to-emerald-400",
              },
              {
                name: "Express",
                icon: Workflow,
                color: "from-yellow-400 to-orange-400",
              },
              {
                name: "MongoDB",
                icon: Database,
                color: "from-green-500 to-emerald-500",
              },
              {
                name: "PostgreSQL",
                icon: Database,
                color: "from-blue-400 to-indigo-400",
              },
              {
                name: "Prisma",
                icon: Layers,
                color: "from-purple-400 to-pink-400",
              },
              {
                name: "TypeScript",
                icon: Braces,
                color: "from-blue-500 to-indigo-500",
              },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <tech.icon className="h-4 w-4" />
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            {/* Download CV Button with Dropdown */}
            <div className="relative" ref={cvDropdownRef}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full"
              >
                <Button
                  onClick={() => setIsCVDropdownOpen(!isCVDropdownOpen)}
                  size="lg"
                  className="relative bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-lg px-10 py-7 rounded-2xl font-bold shadow-2xl shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 group overflow-hidden w-full"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      backgroundPosition: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      backgroundSize: "200% auto",
                    }}
                  />
                  <Download className="mr-3 h-6 w-6 relative z-10 group-hover:scale-110 transition-transform" />
                  <span className="relative z-10">Download CV</span>
                  <motion.div
                    animate={{ rotate: isCVDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    <ChevronDown className="ml-2 h-5 w-5" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-green-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
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
                          className="w-full flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors group relative"
                          whileHover={{ x: 5 }}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <div
                            className={`w-10 h-10 rounded-lg bg-gradient-to-br ${option.gradient} p-2 flex items-center justify-center flex-shrink-0`}
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

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={scrollToProjects}
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 text-lg px-10 py-7 rounded-2xl font-bold backdrop-blur-xl hover:border-white transition-all duration-300 group relative overflow-hidden"
              >
                <motion.div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                <Zap className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                View Projects
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={scrollToContact}
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10 text-lg px-10 py-7 rounded-2xl font-bold backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-300 group"
              >
                <Globe className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                Let's Work
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          className="flex flex-col items-center gap-3 cursor-pointer group"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-white/70 text-sm font-medium tracking-widest uppercase group-hover:text-white transition-colors">
            Explore My Stack
          </span>
          <motion.div
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1 group-hover:border-white transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="w-1 h-3 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
