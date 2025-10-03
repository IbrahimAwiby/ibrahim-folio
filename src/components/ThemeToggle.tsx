import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      className="relative"
      whileHover="hover"
      whileTap="tap"
      initial="initial"
    >
      {/* Floating container with glass morphism */}
      <div className="relative">
        {/* Background glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-xl"
          animate={{
            opacity: theme === "light" ? 0.3 : 0.5,
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="relative w-12 h-12 rounded-2xl glass-effect border border-white/20 hover:border-white/40 transition-all duration-500 group overflow-hidden backdrop-blur-2xl"
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"
            animate={{
              background:
                theme === "light"
                  ? [
                      "linear-gradient(45deg, hsl(262 83% 58% / 0.1), hsl(217 91% 60% / 0.1), hsl(189 94% 43% / 0.1))",
                      "linear-gradient(135deg, hsl(189 94% 43% / 0.1), hsl(262 83% 58% / 0.1), hsl(217 91% 60% / 0.1))",
                      "linear-gradient(225deg, hsl(217 91% 60% / 0.1), hsl(189 94% 43% / 0.1), hsl(262 83% 58% / 0.1))",
                      "linear-gradient(315deg, hsl(262 83% 58% / 0.1), hsl(217 91% 60% / 0.1), hsl(189 94% 43% / 0.1))",
                    ]
                  : [
                      "linear-gradient(45deg, hsl(262 83% 58% / 0.2), hsl(217 91% 60% / 0.2), hsl(189 94% 43% / 0.2))",
                      "linear-gradient(135deg, hsl(189 94% 43% / 0.2), hsl(262 83% 58% / 0.2), hsl(217 91% 60% / 0.2))",
                      "linear-gradient(225deg, hsl(217 91% 60% / 0.2), hsl(189 94% 43% / 0.2), hsl(262 83% 58% / 0.2))",
                      "linear-gradient(315deg, hsl(262 83% 58% / 0.2), hsl(217 91% 60% / 0.2), hsl(189 94% 43% / 0.2))",
                    ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${30 + i * 20}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Main icon container */}
          <div className="relative w-6 h-6">
            <AnimatePresence mode="wait">
              {theme === "light" ? (
                <motion.div
                  key="moon"
                  className="relative"
                  initial={{
                    rotate: -180,
                    scale: 0,
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    rotate: 0,
                    scale: 1,
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    rotate: 180,
                    scale: 0,
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    duration: 0.4,
                  }}
                >
                  {/* Moon with gradient and glow */}
                  <div className="relative">
                    <Moon className="h-6 w-6 text-white drop-shadow-lg" />
                    <motion.div
                      className="absolute inset-0 rounded-full bg-blue-200/20 blur-sm"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  className="relative"
                  initial={{
                    rotate: 180,
                    scale: 0,
                    opacity: 0,
                    y: -20,
                  }}
                  animate={{
                    rotate: 0,
                    scale: 1,
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    rotate: -180,
                    scale: 0,
                    opacity: 0,
                    y: 20,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    duration: 0.4,
                  }}
                >
                  {/* Sun with rays and glow */}
                  <div className="relative">
                    <Sun className="h-6 w-6 text-amber-300 drop-shadow-lg" />
                    <motion.div
                      className="absolute inset-0 rounded-full bg-amber-200/30 blur-md"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        rotate: {
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        },
                        scale: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Interactive ring */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-primary to-secondary"
            initial={false}
            animate={{
              opacity: 0,
              scale: 1,
            }}
            whileHover={{
              opacity: 0.3,
              scale: 1.02,
            }}
            whileTap={{
              opacity: 0.5,
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          />

          {/* Click ripple effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-white/20"
            initial={{ scale: 0, opacity: 0 }}
            whileTap={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </Button>
      </div>

      {/* Modern tooltip */}
      <motion.div
        className="absolute top-full mt-3 -left-3/4 transform -translate-x-1/2 bg-background border border-border text-foreground px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap opacity-0 pointer-events-none z-50 shadow-lg"
        variants={{
          initial: { opacity: 0, y: -10 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.1 }}
      >
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        {/* Tooltip arrow pointing upward */}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-background border-t border-l border-border rotate-45" />
      </motion.div>
    </motion.div>
  );
};
