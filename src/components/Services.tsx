import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { FloatingIcons } from "@/components/FloatingIcons";
import {
  Code2,
  Smartphone,
  Palette,
  Zap,
  Globe,
  Rocket,
  Shield,
  Search,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "React Development",
    description:
      "Building modern, responsive web applications using React with TypeScript, hooks, and modern patterns.",
    features: [
      "Custom Components",
      "State Management",
      "Performance Optimization",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Next.js Solutions",
    description:
      "Full-stack applications with Next.js featuring SSR, API routes, and optimal performance.",
    features: ["Server-Side Rendering", "API Integration", "SEO Optimization"],
    gradient: "from-gray-700 to-black",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Mobile-first responsive designs that work perfectly across all devices and screen sizes.",
    features: ["Mobile Optimization", "Cross-Browser", "Touch Friendly"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Optimizing applications for speed, efficiency, and smooth user experiences.",
    features: ["Code Splitting", "Lazy Loading", "Bundle Optimization"],
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description:
      "Translating design concepts into beautiful, functional, and accessible user interfaces.",
    features: ["Modern Design", "User-Centered", "Accessibility"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Rocket,
    title: "Modern Architecture",
    description:
      "Scalable and maintainable code architecture using latest best practices and patterns.",
    features: ["Clean Code", "Scalable Structure", "Best Practices"],
    gradient: "from-red-500 to-rose-500",
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.08 });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-background relative md:px-4">
      <FloatingIcons
        icons={[Code2, Smartphone, Palette, Zap, Globe, Rocket]}
        count={15}
      />

      {/* Animated background elements */}
      <div className="absolute overflow-hidden inset-0">
        <motion.div
          className="absolute top-1/3 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl"
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
          className="absolute bottom-1/3 right-1/4 w-64 h-64 md:w-80 md:h-80 bg-purple-500/5 rounded-full blur-3xl"
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
              <span className="text-sm font-medium text-primary">Services</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
              variants={itemVariants}
            >
              My Services
            </motion.h2>

            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Comprehensive frontend development services using React and
              Next.js to bring your ideas to life
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={staggerChildren}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
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
                >
                  <Card className="relative overflow-hidden p-8 glass-effect border-primary/20 hover:border-primary/40 transition-all group h-full cursor-pointer">
                    {/* Animated gradient background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                      whileHover={{ opacity: 0.15 }}
                    />

                    {/* Animated border glow */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="absolute inset-[2px] bg-background rounded-[inherit]" />
                    </motion.div>

                    {/* Floating particles */}
                    <motion.div
                      className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${service.gradient} rounded-full opacity-0 group-hover:opacity-100`}
                      animate={{
                        y: [0, -5, 0],
                        scale: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                    <motion.div
                      className={`absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br ${service.gradient} rounded-full opacity-0 group-hover:opacity-100`}
                      animate={{
                        y: [0, 5, 0],
                        scale: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.7,
                      }}
                    />

                    <div className="relative">
                      {/* Icon with animation */}
                      <motion.div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 mb-6 shadow-lg`}
                        whileHover={{
                          scale: 1.1,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.5 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="w-full h-full text-white" />
                        </motion.div>
                      </motion.div>

                      {/* Title */}
                      <motion.h3
                        className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {service.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p
                        className="text-muted-foreground mb-6 leading-relaxed"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {service.description}
                      </motion.p>

                      {/* Features */}
                      <motion.div
                        className="space-y-2"
                        variants={staggerChildren}
                      >
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center gap-3 text-sm"
                            whileHover={{ x: 5, color: "rgb(59, 130, 246)" }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}
                              whileHover={{ scale: 1.5 }}
                              animate={{
                                scale: [1, 1.2, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: idx * 0.3,
                              }}
                            />
                            <span className="text-foreground/80">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>

                    {/* Hover effect overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                      whileHover={{ opacity: 1 }}
                    />
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={scaleIn} className="text-center mt-16">
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
                  className="text-3xl font-bold mb-4 gradient-text"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  Ready to Start Your Project?
                </motion.h3>

                <motion.p
                  className="text-xl text-muted-foreground mb-8"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  Let's work together to create something amazing with modern
                  React and Next.js technologies.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  variants={staggerChildren}
                >
                  <motion.a
                    href="#contact"
                    className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold shadow-lg relative overflow-hidden group"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 opacity-0 group-hover:opacity-100"
                      whileHover={{ opacity: 1 }}
                    />
                    <span className="relative">Get In Touch</span>
                  </motion.a>

                  <motion.a
                    href="#projects"
                    className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all relative overflow-hidden group"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgb(59, 130, 246)",
                      color: "white",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative">View My Work</span>
                  </motion.a>
                </motion.div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute bottom-4 left-4 w-6 h-6 bg-secondary/10 rounded-full"
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 1.2, 1],
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
