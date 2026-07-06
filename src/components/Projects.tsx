import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FloatingIcons } from "@/components/FloatingIcons";
import {
  ExternalLink,
  Github,
  Zap,
  ShoppingCart,
  HeartPulse,
  MessageCircle,
  Star,
  GitFork,
  Eye,
  Calendar,
  Layers,
  Sparkles,
  ArrowRight,
  Play,
  Code2,
  Server,
  Database,
  Shield,
  CreditCard,
  Image,
  Bell,
  Users,
  Palette,
} from "lucide-react";

const projects = [
  {
    title: "NOVA",
    subtitle: "Production-Ready E-Commerce Platform",
    description:
      "A complete full-stack e-commerce platform built from scratch with secure payments, admin dashboard, analytics, order tracking, reviews, and wishlist functionality.",
    longDescription:
      "Designed and built a production-ready e-commerce platform featuring a modern React frontend with TypeScript, secure Express REST API, Stripe payment integration, Cloudinary image storage, JWT authentication, comprehensive admin dashboard with analytics, order tracking system, product reviews, and wishlist functionality.",
    image: "/assets/projects/nova.png",
    color: "from-violet-500 to-purple-600",
    bgColor: "from-violet-500/20 to-purple-600/20",
    icon: ShoppingCart,
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    tech: [
      { name: "React", icon: Code2, color: "text-cyan-400" },
      { name: "TypeScript", icon: Code2, color: "text-blue-400" },
      { name: "Node.js", icon: Server, color: "text-green-400" },
      { name: "Express", icon: Server, color: "text-gray-400" },
      { name: "MongoDB", icon: Database, color: "text-green-500" },
      { name: "Tailwind CSS", icon: Palette, color: "text-teal-400" },
    ],
    features: [
      { icon: CreditCard, text: "Stripe Payments" },
      { icon: Image, text: "Cloudinary Storage" },
      { icon: Shield, text: "JWT Authentication" },
      { icon: Layers, text: "Admin Dashboard" },
      { icon: Star, text: "Reviews & Wishlist" },
      { icon: Bell, text: "Order Tracking" },
    ],
    github: "https://github.com/IbrahimAwiby/Nova-E-Commerce-2026",
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:activity:7461782726615056384",
    stats: {
      stars: 12,
      forks: 5,
      commits: 150,
    },
  },
  {
    title: "Prescripto",
    subtitle: "Healthcare Management Platform",
    description:
      "A complete healthcare platform for patients, doctors, and administrators with appointment booking, payments, and role-based authentication.",
    longDescription:
      "Developed a comprehensive healthcare management platform connecting patients, doctors, and administrators. Features responsive React interfaces, secure backend APIs, appointment booking system with calendar integration, Paymob payment processing, Cloudinary for medical documents, and role-based access control for different user types.",
    image: "/assets/projects/prescripto.png",
    color: "from-blue-500 to-cyan-600",
    bgColor: "from-blue-500/20 to-cyan-600/20",
    icon: HeartPulse,
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    tech: [
      { name: "React", icon: Code2, color: "text-cyan-400" },
      { name: "Node.js", icon: Server, color: "text-green-400" },
      { name: "Express", icon: Server, color: "text-gray-400" },
      { name: "MongoDB", icon: Database, color: "text-green-500" },
      { name: "Tailwind CSS", icon: Palette, color: "text-teal-400" },
    ],
    features: [
      { icon: Calendar, text: "Appointment Booking" },
      { icon: CreditCard, text: "Paymob Payments" },
      { icon: Shield, text: "Role-Based Auth" },
      { icon: Users, text: "Multi-User System" },
      { icon: Image, text: "Cloudinary Uploads" },
      { icon: Bell, text: "Notifications" },
    ],
    github: "https://github.com/IbrahimAwiby/Perscripto",
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:activity:7477363370199781376/",
    stats: {
      stars: 8,
      forks: 3,
      commits: 120,
    },
  },
  {
    title: "ChatApp",
    subtitle: "Real-Time Chat Application",
    description:
      "A full-stack real-time messaging platform with Socket.IO, multiple themes, online status, image uploads, and user profiles.",
    longDescription:
      "Built a feature-rich real-time messaging application with Socket.IO for instant communication. Includes JWT authentication, image upload capabilities, customizable user profiles, multiple theme options (dark/light/custom), online/offline status indicators, unread message counters, typing indicators, and responsive design for all devices.",
    image: "/assets/projects/chatapp.png",
    color: "from-emerald-500 to-green-600",
    bgColor: "from-emerald-500/20 to-green-600/20",
    icon: MessageCircle,
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    tech: [
      { name: "React", icon: Code2, color: "text-cyan-400" },
      { name: "Node.js", icon: Server, color: "text-green-400" },
      { name: "Express", icon: Server, color: "text-gray-400" },
      { name: "Socket.IO", icon: Zap, color: "text-yellow-400" },
      { name: "MongoDB", icon: Database, color: "text-green-500" },
    ],
    features: [
      { icon: Zap, text: "Real-Time Chat" },
      { icon: Shield, text: "JWT Authentication" },
      { icon: Image, text: "Image Uploads" },
      { icon: Palette, text: "Multiple Themes" },
      { icon: Users, text: "User Profiles" },
      { icon: Eye, text: "Online Status" },
    ],
    github: "https://github.com/IbrahimAwiby/ChatApp",
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:activity:7432869933706895360/",
    stats: {
      stars: 15,
      forks: 7,
      commits: 200,
    },
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.08 });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-background relative md:px-4">
      <div className="hidden md:block">
        <FloatingIcons
          icons={[
            Code2,
            Server,
            Database,
            Zap,
            Star,
            GitFork,
            ShoppingCart,
            HeartPulse,
            MessageCircle,
          ]}
          count={20}
        />{" "}
      </div>

      {/* Animated background */}
      <div className="absolute overflow-hidden inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-violet-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 md:w-80 md:h-80 bg-blue-500/5 rounded-full blur-3xl"
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
          className="absolute top-1/2 left-1/2 w-56 h-56 bg-emerald-500/5 rounded-full blur-3xl"
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
          {/* Header */}
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
                <Sparkles className="h-4 w-4 text-primary" />
              </motion.div>
              <span className="text-sm font-medium text-primary">
                Portfolio
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text"
              variants={itemVariants}
            >
              Featured Projects
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Showcasing my best full-stack applications built with MERN stack
              and modern technologies
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group"
                >
                  <Card
                    className={`relative overflow-hidden h-full glass-effect border-primary/20 hover:border-primary/40 transition-all duration-500 cursor-pointer ${
                      hoveredProject === index
                        ? "scale-[1.02] -translate-y-2"
                        : ""
                    }`}
                    onClick={() =>
                      setSelectedProject(
                        selectedProject === index ? null : index,
                      )
                    }
                  >
                    {/* Project Image/Gradient Header */}
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}
                        animate={{
                          backgroundPosition: ["0% 0%", "100% 100%"],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{ backgroundSize: "200% 200%" }}
                      />

                      {/* Decorative elements */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white/30 rounded-full" />
                        <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white/20 rounded-full" />
                      </div>

                      {/* Project Icon */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      >
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                          <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                        </div>
                      </motion.div>

                      {/* Project Stats Overlay */}
                      <div className="absolute bottom-3 left-3 right-3 flex justify-between">
                        <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                          <Star className="w-3.5 h-3.5 text-yellow-400" />
                          <span className="text-xs text-white font-medium">
                            {project.stats.stars}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                          <GitFork className="w-3.5 h-3.5 text-blue-300" />
                          <span className="text-xs text-white font-medium">
                            {project.stats.forks}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 md:p-6">
                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {project.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech.name}
                            variant="secondary"
                            className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 transition-colors text-xs font-medium"
                          >
                            {tech.name}
                          </Badge>
                        ))}
                      </div>

                      {/* Features Preview */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {project.features.slice(0, 3).map((feature) => (
                          <div
                            key={feature.text}
                            className="flex flex-col items-center gap-1 p-2 rounded-lg bg-muted/30 text-center"
                          >
                            <feature.icon className="w-4 h-4 text-primary" />
                            <span className="text-[10px] leading-tight text-muted-foreground">
                              {feature.text}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full gap-2"
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </Button>
                        </motion.a>
                        <motion.a
                          href={project.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Button
                            size="sm"
                            className="w-full gap-2 bg-gradient-to-r from-primary to-secondary"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Demo
                          </Button>
                        </motion.a>
                      </div>
                    </div>

                    {/* Expand indicator */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX: selectedProject === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Expanded Project Details */}
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="mt-8 max-w-7xl mx-auto"
            >
              <Card className="p-6 md:p-8 glass-effect border-primary/20">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {projects[selectedProject].title}
                    </h3>
                    <p className="text-primary font-medium mb-4">
                      {projects[selectedProject].subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {projects[selectedProject].longDescription}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {projects[selectedProject].features.map((feature) => (
                        <div
                          key={feature.text}
                          className="flex items-center gap-2 p-2 rounded-lg bg-muted/30"
                        >
                          <feature.icon className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-lg font-semibold mb-4">
                      Tech Stack Details
                    </h4>
                    <div className="space-y-3">
                      {projects[selectedProject].tech.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center gap-3 p-3 rounded-xl bg-muted/30"
                        >
                          <tech.icon className={`w-5 h-5 ${tech.color}`} />
                          <span className="font-medium">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* GitHub Stats CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <Card className="max-w-2xl mx-auto p-8 glass-effect border-primary/20 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-blue-500/5 to-emerald-500/5"
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
                <Github className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-3">
                  More Projects on GitHub
                </h3>
                <p className="text-muted-foreground mb-6">
                  Explore more of my open-source projects and contributions
                </p>
                <motion.a
                  href="https://github.com/IbrahimAwiby"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="gap-2 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700"
                  >
                    <Github className="w-5 h-5" />
                    Visit My GitHub
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </motion.a>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
