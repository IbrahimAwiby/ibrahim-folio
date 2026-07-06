// components/SmartLoading.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Code2, Server, Database, Sparkles, Zap, Layers } from "lucide-react";

export const SmartLoading = () => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const loadingTexts = [
    "Initializing MERN stack...",
    "Loading components...",
    "Connecting databases...",
    "Setting up APIs...",
    "Almost ready...",
    "Welcome to my portfolio!",
  ];

  useEffect(() => {
    // Realistic progress simulation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsVisible(false), 800);
          return 100;
        }
        const increment = prev < 50 ? 10 : prev < 80 ? 5 : 2;
        return Math.min(prev + increment, 100);
      });
    }, 300);

    // Rotate loading texts
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length);
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
      >
        <div className="text-center max-w-md mx-4">
          {/* Animated Icon */}
          <motion.div
            className="mb-8 relative"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.div
              className="w-24 h-24 bg-gradient-to-br from-green-500 via-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Layers className="h-12 w-12 text-white" />
            </motion.div>

            {/* Floating icons around main icon */}
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 0.5,
              }}
            >
              <Server className="h-6 w-6 text-green-400" />
            </motion.div>

            <motion.div
              className="absolute -bottom-2 -left-2"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1,
              }}
            >
              <Database className="h-5 w-5 text-orange-400" />
            </motion.div>

            <motion.div
              className="absolute top-0 -left-4"
              animate={{
                x: [0, -8, 0],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: 0.8,
              }}
            >
              <Sparkles className="h-4 w-4 text-yellow-400" />
            </motion.div>

            <motion.div
              className="absolute bottom-0 -right-4"
              animate={{
                x: [0, 8, 0],
                y: [0, 5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: 1.2,
              }}
            >
              <Zap className="h-4 w-4 text-blue-400" />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Ibrahim Hassan
          </motion.h1>

          <motion.div
            className="h-8 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.p
              key={currentText}
              className="text-muted-foreground text-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {loadingTexts[currentText]}
            </motion.p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Loading Portfolio</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-3 bg-muted rounded-full overflow-hidden shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full relative"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="absolute top-0 right-0 w-20 h-full bg-white/20 skew-x-12"
                  animate={{ x: [-100, 300] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* MERN Stack Preview */}
          <motion.div
            className="flex justify-center gap-3 mt-6 opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1 }}
          >
            {[
              { name: "MongoDB", color: "bg-green-500/10 text-green-400" },
              { name: "Express", color: "bg-gray-500/10 text-gray-400" },
              { name: "React", color: "bg-blue-500/10 text-blue-400" },
              { name: "Node.js", color: "bg-green-600/10 text-green-300" },
            ].map((tech, index) => (
              <motion.span
                key={tech.name}
                className={`text-xs px-2 py-1 rounded-full ${tech.color}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                {tech.name}
              </motion.span>
            ))}
          </motion.div>

          {/* Additional Tech */}
          <motion.div
            className="flex justify-center gap-2 mt-3 opacity-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1.5 }}
          >
            {["PostgreSQL", "Prisma", "TypeScript"].map((tech, index) => (
              <motion.span
                key={tech}
                className="text-[10px] px-2 py-0.5 bg-muted/50 text-muted-foreground rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.6 + index * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
