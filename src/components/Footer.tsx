import {
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Heart,
  Mail,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const socialLinks = [
  {
    icon: Github,
    url: "https://github.com/IbrahimAwiby",
    label: "GitHub",
    color: "hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-110",
    gradient: "from-gray-700 to-black",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/ibrahim-hassan-5a1300373/",
    label: "LinkedIn",
    color: "hover:bg-blue-100 dark:hover:bg-blue-900 hover:scale-110",
    gradient: "from-blue-600 to-blue-700",
  },
  {
    icon: Twitter,
    url: "https://x.com/Ibrahimawiby?t=WTLxFucjA3ld4x1oEMMwCQ&s=08",
    label: "Twitter",
    color: "hover:bg-sky-100 dark:hover:bg-sky-900 hover:scale-110",
    gradient: "from-sky-400 to-sky-500",
  },
  {
    icon: Facebook,
    url: "https://www.facebook.com/profile.php?id=100063631999221",
    label: "Facebook",
    color: "hover:bg-blue-100 dark:hover:bg-blue-900 hover:scale-110",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/ibrahim_awiby?igsh=MXI3c2tqeDhxNDlxMQ==",
    label: "Instagram",
    color: "hover:bg-pink-100 dark:hover:bg-pink-900 hover:scale-110",
    gradient: "from-pink-500 to-rose-500",
  },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 bg-card border-t border-border overflow-hidden md:px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-8 w-full max-w-4xl">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">IH</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Frontend Developer specializing in React & Next.js. Creating
                modern, responsive web experiences that deliver results.
              </p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ibrabasm4456@gmail.com&su=Let's%20Connect&body=Hello%20Ibrahim,"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium"
              >
                <Mail className="h-4 w-4" />
                ibrabasm4456@gmail.com
              </a>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <h4 className="font-semibold mb-4 text-foreground">
                Quick Links
              </h4>
              <div className="space-y-2">
                {[
                  "Home",
                  "About",
                  "Services",
                  "Skills",
                  "Projects",
                  "Contact",
                ].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center md:text-right"
            >
              <h4 className="font-semibold mb-4 text-foreground">
                Let's Connect
              </h4>
              <p className="text-muted-foreground mb-4">
                Follow me on social media for updates and insights.
              </p>
              <div className="flex justify-center md:justify-end gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-muted rounded-full transition-all hover:scale-110 ${social.color} group relative`}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-4 w-4" />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {social.label}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="w-full max-w-4xl border-t border-border my-4" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl gap-4">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center md:text-left"
            >
              <p className="flex items-center gap-2 justify-center md:justify-start text-muted-foreground mb-2">
                Made with
                <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />
                by Ibrahim Hassan
              </p>
              <p className="text-sm text-muted-foreground">
                © 10/3/2025 Ibrahim Hassan. All rights reserved.
              </p>
            </motion.div>

            {/* Back to Top */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="rounded-full border-primary/20 hover:border-primary hover:bg-primary/10 transition-all group"
              >
                <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-0.5 transition-transform" />
                Back to Top
              </Button>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <p className="text-xs text-muted-foreground max-w-2xl">
              Built with React, TypeScript, Tailwind CSS, and Framer Motion.
              Designed and developed with attention to detail and user
              experience.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
