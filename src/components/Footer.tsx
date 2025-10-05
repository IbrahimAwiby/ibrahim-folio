import {
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Heart,
  Mail,
  ArrowUp,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const socialLinks = [
  {
    icon: Github,
    url: "https://github.com/IbrahimAwiby",
    label: "GitHub",
    color: "hover:bg-gray-100 dark:hover:bg-gray-800",
    gradient: "from-gray-700 to-black",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/ibrahim-hassan-5a1300373/",
    label: "LinkedIn",
    color: "hover:bg-blue-100 dark:hover:bg-blue-900",
    gradient: "from-blue-600 to-blue-700",
  },
  {
    icon: Twitter,
    url: "https://x.com/Ibrahimawiby?t=WTLxFucjA3ld4x1oEMMwCQ&s=08",
    label: "Twitter",
    color: "hover:bg-sky-100 dark:hover:bg-sky-900",
    gradient: "from-sky-400 to-sky-500",
  },
  {
    icon: Facebook,
    url: "https://www.facebook.com/profile.php?id=100063631999221",
    label: "Facebook",
    color: "hover:bg-blue-100 dark:hover:bg-blue-900",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/ibrahim_awiby?igsh=MXI3c2tqeDhxNDlxMQ==",
    label: "Instagram",
    color: "hover:bg-pink-100 dark:hover:bg-pink-900",
    gradient: "from-pink-500 to-rose-500",
  },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
        staggerChildren: 0.05,
      },
    },
  };

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <footer className="relative py-16 bg-card border-t border-border overflow-hidden md:px-4">
      {/* Animated Background Elements */}
      <div className="absolute overflow-hidden inset-0">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 md:w-48 md:h-48 bg-primary/5 rounded-full blur-3xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-28 h-28 md:w-40 md:h-40 bg-secondary/5 rounded-full blur-3xl"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-24 h-24 md:w-32 md:h-32 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="flex flex-col items-center gap-8"
        >
          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-8 w-full max-w-4xl">
            {/* Brand Section */}
            <motion.div
              variants={itemVariants}
              className="text-center md:text-left"
            >
              <motion.h3
                className="text-2xl font-bold gradient-text mb-4"
                whileHover={{ scale: 1.05 }}
              >
                IH
              </motion.h3>
              <motion.p
                className="text-muted-foreground mb-4 leading-relaxed"
                whileHover={{ x: 5 }}
              >
                Frontend Developer specializing in React & Next.js. Creating
                modern, responsive web experiences that deliver results.
              </motion.p>
              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ibrabasm4456@gmail.com&su=Let's%20Connect&body=Hello%20Ibrahim,"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium group"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Mail className="h-4 w-4" />
                </motion.div>
                ibrabasm4456@gmail.com
              </motion.a>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="text-center">
              <motion.h4
                className="font-semibold mb-4 text-foreground"
                whileHover={{ scale: 1.05 }}
              >
                Quick Links
              </motion.h4>
              <motion.div className="space-y-2" variants={staggerChildren}>
                {[
                  "Home",
                  "About",
                  "Services",
                  "Skills",
                  "Projects",
                  "Contact",
                ].map((link, index) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-muted-foreground hover:text-primary transition-colors group/link relative overflow-hidden"
                    whileHover={{
                      x: 5,
                      color: "rgb(59, 130, 246)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span
                      className="relative z-10"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.span>
                    <motion.div
                      className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover/link:opacity-100"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Connect */}
            <motion.div
              variants={itemVariants}
              className="text-center md:text-right"
            >
              <motion.h4
                className="font-semibold mb-4 text-foreground"
                whileHover={{ scale: 1.05 }}
              >
                Let's Connect
              </motion.h4>
              <motion.p
                className="text-muted-foreground mb-4"
                whileHover={{ x: -5 }}
              >
                Follow me on social media for updates and insights.
              </motion.p>
              <div className="flex justify-center md:justify-end gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-muted rounded-full transition-all ${social.color} group relative overflow-hidden`}
                    aria-label={social.label}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.2,
                      y: -3,
                    }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    {/* Gradient background on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 rounded-full`}
                      whileHover={{ opacity: 1 }}
                    />

                    <motion.div
                      className="relative z-10"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <social.icon className="h-4 w-4 text-foreground group-hover:text-white transition-colors" />
                    </motion.div>

                    {/* Tooltip */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg">
                      {social.label}
                    </div>

                    {/* Pulse effect */}
                    <motion.div
                      className="absolute inset-0 border-2 border-transparent rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Animated Divider */}
          <motion.div
            className="w-full max-w-4xl relative my-4"
            variants={itemVariants}
          >
            <div className="w-full border-t border-border" />
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-card px-4"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="h-4 w-4 text-primary" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl gap-4"
          >
            {/* Copyright */}
            <motion.div
              className="text-center md:text-left"
              variants={staggerChildren}
            >
              <motion.p
                className="flex items-center gap-2 justify-center md:justify-start text-muted-foreground mb-2 group"
                whileHover={{ scale: 1.05 }}
              >
                Made with
                <motion.span
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                </motion.span>
                by Ibrahim Hassan
              </motion.p>
              <motion.p
                className="text-sm text-muted-foreground"
                whileHover={{ x: 5 }}
              >
                © 10/3/2025 Ibrahim Hassan. All rights reserved.
              </motion.p>
            </motion.div>

            {/* Back to Top */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="rounded-full border-primary/20 hover:border-primary hover:bg-primary/10 transition-all group relative overflow-hidden shadow-lg"
              >
                {/* Button glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 rounded-full"
                  whileHover={{ opacity: 0.2 }}
                />

                <motion.div
                  className="flex items-center"
                  whileHover={{ y: -2 }}
                >
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <ArrowUp className="h-4 w-4 mr-2" />
                  </motion.div>
                  Back to Top
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.p
              className="text-xs text-muted-foreground max-w-2xl leading-relaxed"
              whileHover={{ scale: 1.02 }}
            >
              Built with React, TypeScript, Tailwind CSS, and Framer Motion.
              Designed and developed with attention to detail and user
              experience.
            </motion.p>
          </motion.div>

          {/* Floating decorative elements */}
          <motion.div
            className="absolute bottom-4 left-4 w-3 h-3 bg-primary/20 rounded-full"
            variants={floatingAnimation}
          />
          <motion.div
            className="absolute top-4 right-4 w-2 h-2 bg-secondary/20 rounded-full"
            variants={floatingAnimation}
          />
          <motion.div
            className="absolute top-8 left-1/4 w-1 h-1 bg-accent/20 rounded-full"
            variants={floatingAnimation}
          />
        </motion.div>
      </div>
    </footer>
  );
};
