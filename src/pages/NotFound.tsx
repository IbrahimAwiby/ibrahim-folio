import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FloatingIcons } from "@/components/FloatingIcons";
import {
  Home,
  ArrowLeft,
  Search,
  AlertCircle,
  Ghost,
  Compass,
  Code2,
  Server,
  Database,
  Terminal,
  GitBranch,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/50 to-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs - MERN colors */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Icons */}
      <FloatingIcons
        icons={[
          AlertCircle,
          Ghost,
          Compass,
          Search,
          Home,
          ArrowLeft,
          Code2,
          Server,
          Database,
          Terminal,
          GitBranch,
        ]}
        count={20}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center"
        >
          {/* Animated 404 Number */}
          <motion.div
            className="relative mb-8"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
          >
            <motion.h1
              className="text-8xl md:text-9xl lg:text-[12rem] font-black gradient-text mb-4"
              animate={{
                textShadow: [
                  "0 0 20px rgba(34, 197, 94, 0.3)",
                  "0 0 40px rgba(34, 197, 94, 0.5)",
                  "0 0 20px rgba(34, 197, 94, 0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              404
            </motion.h1>

            {/* Floating Ghost Icon */}
            <motion.div
              className="absolute -top-4 -right-4 md:-top-8 md:-right-8"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Ghost className="h-16 w-16 md:h-24 md:w-24 text-green-500" />
            </motion.div>

            {/* Floating Code Icon */}
            <motion.div
              className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8"
              animate={{
                y: [0, 15, 0],
                rotate: [0, -10, 10, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Code2 className="h-12 w-12 md:h-16 md:w-16 text-blue-500" />
            </motion.div>
          </motion.div>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="mb-8"
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Lost in the Code Space
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Looks like this endpoint returned a 404! The page you're looking
              for might have been refactored or moved to a different route.
            </motion.p>

            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              <AlertCircle className="h-4 w-4 text-yellow-500" />
              <code className="text-sm font-mono text-muted-foreground">
                Route not found: {location.pathname}
              </code>
            </motion.div>
          </motion.div>

          {/* Tech Stack Debug Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-8"
          >
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                {
                  name: "MongoDB",
                  color: "bg-green-500/10 text-green-400 border-green-500/20",
                },
                {
                  name: "Express",
                  color: "bg-gray-500/10 text-gray-400 border-gray-500/20",
                },
                {
                  name: "React",
                  color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
                },
                {
                  name: "Node.js",
                  color: "bg-green-600/10 text-green-300 border-green-600/20",
                },
              ].map((tech) => (
                <motion.span
                  key={tech.name}
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${tech.color}`}
                  whileHover={{ scale: 1.1 }}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => window.history.back()}
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg font-semibold border-2 border-primary/20 hover:border-primary transition-all duration-300 group"
              >
                <ArrowLeft className="mr-3 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                Go Back
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => (window.location.href = "/")}
                size="lg"
                className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 hover:opacity-90 transition-all duration-300 group shadow-lg shadow-green-500/25"
              >
                <Home className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                Return Home
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                variant="ghost"
                size="lg"
                className="px-8 py-6 text-lg font-semibold border-2 border-transparent hover:border-primary/20 transition-all duration-300 group"
              >
                <Terminal className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                Debug Help
              </Button>
            </motion.div>
          </motion.div>

          {/* Additional Help Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="glass-effect border-primary/10 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-3 gradient-text">
                While you're debugging...
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Search className="h-4 w-4 text-green-500" />
                  <span>Check the URL for typos</span>
                </div>
                <div className="flex items-center gap-3">
                  <Home className="h-4 w-4 text-blue-500" />
                  <span>Navigate from the homepage</span>
                </div>
                <div className="flex items-center gap-3">
                  <GitBranch className="h-4 w-4 text-purple-500" />
                  <span>Use the site navigation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Terminal className="h-4 w-4 text-yellow-500" />
                  <span>Contact me if this persists</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Fun Easter Egg */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-12"
          >
            <motion.p
              className="text-sm text-muted-foreground/60 italic max-w-md mx-auto"
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              "Error 404: Developer not found at this route. Try checking the
              API endpoints instead."
            </motion.p>
          </motion.div>

          {/* MERN Stack Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-8 flex items-center justify-center gap-4 text-xs text-muted-foreground"
          >
            <span className="flex items-center gap-1">
              <Database className="h-3 w-3 text-green-500" /> MongoDB
            </span>
            <span className="flex items-center gap-1">
              <Server className="h-3 w-3 text-gray-500" /> Express
            </span>
            <span className="flex items-center gap-1">
              <Code2 className="h-3 w-3 text-blue-500" /> React
            </span>
            <span className="flex items-center gap-1">
              <Server className="h-3 w-3 text-green-600" /> Node.js
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-500/30 rounded-full"
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
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NotFound;
