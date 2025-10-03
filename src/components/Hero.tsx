import { motion } from "framer-motion";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingIcons } from "@/components/FloatingIcons";
import heroBg from "../../public/assets/hero-bg.jpg";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
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
                hsl(262 83% 58% / 0.9) 0%, 
                transparent 50%),
              radial-gradient(circle at ${100 - gradientX}% ${
              100 - gradientY
            }%, 
                hsl(217 91% 60% / 0.7) 0%, 
                transparent 50%),
              radial-gradient(circle at ${gradientY}% ${gradientX}%, 
                hsl(189 94% 43% / 0.6) 0%, 
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
        ]}
        count={25}
      />

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
              Available for new projects
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
              {/* Light Mode gradient */}
              <span
                className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
                   dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400
                   bg-clip-text text-transparent"
              >
                IBRAHIM
              </span>
              <br />
              {/* Light Mode gradient */}
              <span
                className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 
                   dark:from-emerald-400 dark:via-teal-400 dark:to-green-400
                   bg-clip-text text-transparent"
              >
                HASSAN
              </span>
            </motion.h1>

            {/* Animated Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="relative inline-block"
            >
              <motion.h2
                className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent"
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
                Frontend Developer
              </motion.h2>

              {/* Animated underline */}
              <motion.div
                className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full mt-2"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
              />
            </motion.div>
          </div>

          {/* Description with typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <p className="text-xl lg:text-2xl text-white/80 leading-relaxed font-light">
              Crafting{" "}
              <motion.span
                className="text-cyan-300 font-semibold"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(34, 211, 238, 0)",
                    "0 0 20px rgba(34, 211, 238, 0.5)",
                    "0 0 20px rgba(34, 211, 238, 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                digital experiences
              </motion.span>{" "}
              with <span className="text-blue-300 font-semibold">React</span>,{" "}
              <span className="text-purple-300 font-semibold">Next.js</span>,
              and{" "}
              <span className="text-green-300 font-semibold">modern tech</span>
            </p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/assets/IbrahimHassanResume1.pdf"
                download="IbrahimHassanResume1.pdf"
              >
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-lg px-10 py-7 rounded-2xl font-bold shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 group overflow-hidden"
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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

                  {/* Button glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </Button>
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={scrollToProjects}
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 text-lg px-10 py-7 rounded-2xl font-bold backdrop-blur-xl hover:border-white transition-all duration-300 group relative overflow-hidden"
              >
                <motion.div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                <Zap className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                View My Work
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
                Let's Talk
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto pt-8 border-t border-white/20"
          >
            {[
              {
                number: "2+",
                label: "Years Experience",
                color: "from-cyan-400 to-blue-500",
              },
              {
                number: "20+",
                label: "Projects Built",
                color: "from-purple-400 to-pink-500",
              },
              {
                number: "10+",
                label: "Tech Stacks",
                color: "from-green-400 to-emerald-500",
              },
              {
                number: "90%",
                label: "Passion Driven",
                color: "from-orange-400 to-red-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + index * 0.1 }}
                className="text-center group cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <div
                  className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                >
                  {stat.number}
                </div>
                <div className="text-sm text-white/70 font-medium tracking-wide uppercase">
                  {stat.label}
                </div>
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent mt-2"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.8 + index * 0.1, duration: 0.8 }}
                />
              </motion.div>
            ))}
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
            Explore More
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
