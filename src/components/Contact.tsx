import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Send,
  MessageSquare,
  AtSign,
  MapPin,
  Zap,
} from "lucide-react";
import { FloatingIcons } from "@/components/FloatingIcons";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

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

// EmailJS configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: "service_tiq097u",
  TEMPLATE_ID: "template_moqo5ae",
  PUBLIC_KEY: "mLcn46caki8CPxF9t",
};

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.08 });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        staggerChildren: 0.1,
      },
    },
  };

  const validateForm = () => {
    const newErrors = { name: "", email: "", subject: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.status === 200) {
        toast({
          title: "Message Sent Successfully!",
          description:
            "Thank you for your message. I will get back to you soon!",
        });

        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section
      id="contact"
      className="py-20 relative w-full md:px-4 overflow-x-hidden"
    >
      <FloatingIcons
        icons={[Mail, Phone, MessageSquare, AtSign, Send]}
        count={12}
      />

      {/* Animated background elements */}
      <div className="absolute overflow-hidden inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl"
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
          className="absolute bottom-1/3 right-1/4 w-56 h-56 md:w-80 md:h-80 bg-purple-500/5 rounded-full blur-3xl"
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
        <motion.div
          className="absolute top-3/4 left-1/2 w-48 h-48 md:w-64 md:h-64 bg-green-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
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

      <div className="container mx-auto px-4 relative z-10 w-full max-w-full">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="w-full"
        >
          {/* Header Section */}
          <motion.div
            className="text-center mb-16 w-full"
            variants={itemVariants}
          >
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
              <span className="text-sm font-medium text-primary">
                Let's Connect
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
              variants={itemVariants}
            >
              Get In Touch
            </motion.h2>

            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto px-4"
              variants={itemVariants}
            >
              Ready to start your next project? Let's discuss how we can work
              together to bring your ideas to life.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto w-full">
            {/* Contact Info */}
            <motion.div variants={slideInLeft} className="w-full">
              <Card className="p-6 md:p-8 glass-effect border-primary/20 shadow-glow h-full w-full max-w-full relative overflow-hidden">
                {/* Background animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"
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
                    className="text-2xl font-bold mb-6 gradient-text"
                    variants={itemVariants}
                  >
                    Contact Information
                  </motion.h3>

                  <motion.div
                    className="space-y-4 md:space-y-6 mb-6 md:mb-8"
                    variants={staggerChildren}
                  >
                    {/* Email */}
                    <motion.a
                      href="mailto:ibrahimawiby@gmail.com"
                      className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg hover:bg-primary/10 transition-all group border border-transparent hover:border-primary/20 w-full relative overflow-hidden"
                      whileHover={{
                        scale: 1.02,
                        x: 5,
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="p-2 md:p-3 bg-gradient-to-br from-primary to-secondary rounded-full shadow-lg flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Mail className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </motion.div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium text-foreground text-sm md:text-base truncate">
                          ibrahimawiby@gmail.com
                        </p>
                      </div>
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ x: 3 }}
                      >
                        <Send className="h-4 w-4 text-primary" />
                      </motion.div>
                    </motion.a>

                    {/* Phone - WhatsApp */}
                    <motion.a
                      href="https://wa.me/201555825248?text=Hello%20Ibrahim,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg hover:bg-primary/10 transition-all group border border-transparent hover:border-primary/20 w-full relative overflow-hidden"
                      whileHover={{
                        scale: 1.02,
                        x: 5,
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="p-2 md:p-3 bg-gradient-to-br from-secondary to-accent rounded-full shadow-lg flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <MessageSquare className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </motion.div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-muted-foreground">
                          Phone / WhatsApp
                        </p>
                        <p className="font-medium text-foreground text-sm md:text-base">
                          +20 155 582 5248
                        </p>
                      </div>
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ x: 3 }}
                      >
                        <Send className="h-4 w-4 text-secondary" />
                      </motion.div>
                    </motion.a>

                    {/* Direct Call */}
                    <motion.a
                      href="tel:+201031071411"
                      className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg hover:bg-primary/10 transition-all group border border-transparent hover:border-primary/20 w-full relative overflow-hidden"
                      whileHover={{
                        scale: 1.02,
                        x: 5,
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="p-2 md:p-3 bg-gradient-to-br from-accent to-primary rounded-full shadow-lg flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Phone className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </motion.div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-muted-foreground">
                          Direct Call
                        </p>
                        <p className="font-medium text-foreground text-sm md:text-base">
                          +20 103 107 1411
                        </p>
                      </div>
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ x: 3 }}
                      >
                        <Send className="h-4 w-4 text-accent" />
                      </motion.div>
                    </motion.a>

                    {/* Location */}
                    <motion.div
                      className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg border border-transparent w-full"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className="p-2 md:p-3 bg-muted rounded-full flex-shrink-0"
                        whileHover={{ scale: 1.1 }}
                      >
                        <MapPin className="h-5 w-5 md:h-6 md:w-6 text-muted-foreground" />
                      </motion.div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-muted-foreground">
                          Location
                        </p>
                        <p className="font-medium text-foreground text-sm md:text-base">
                          Alwasta, Beni Suef, Egypt
                        </p>
                      </div>
                    </motion.div>

                    {/* Freelance Status */}
                    <motion.div
                      className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg border border-transparent w-full"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className="p-2 md:p-3 bg-green-500/20 rounded-full flex-shrink-0"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      >
                        <MessageSquare className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                      </motion.div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-muted-foreground">
                          Freelance
                        </p>
                        <p className="font-medium text-green-600 text-sm md:text-base">
                          Available Right Now
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                    <div className="flex gap-2 md:gap-3 flex-wrap">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={social.label}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2 md:p-3 bg-muted rounded-full transition-all ${social.color} group/social relative flex-shrink-0`}
                          aria-label={social.label}
                          whileHover={{
                            scale: 1.15,
                            y: -2,
                          }}
                          whileTap={{ scale: 0.95 }}
                          animate={{
                            y: [0, -3, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.5,
                          }}
                        >
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <social.icon className="h-4 w-4 md:h-5 md:w-5" />
                          </motion.div>
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-2 py-1 rounded text-xs opacity-0 group-hover/social:opacity-100 transition-opacity whitespace-nowrap">
                            {social.label}
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute top-4 right-4 w-6 h-6 bg-primary/10 rounded-full"
                  animate={{
                    y: [0, -8, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-4 h-4 bg-secondary/10 rounded-full"
                  animate={{
                    y: [0, 8, 0],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1,
                  }}
                />
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={slideInRight} className="w-full">
              <Card className="p-6 md:p-8 glass-effect border-primary/20 shadow-glow h-full w-full max-w-full relative overflow-hidden">
                {/* Background animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-primary/5 to-accent/5"
                  animate={{
                    backgroundPosition: ["100% 100%", "0% 0%"],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative z-10">
                  <motion.h3
                    className="text-2xl font-bold mb-6 gradient-text"
                    variants={itemVariants}
                  >
                    Send a Message
                  </motion.h3>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 md:space-y-6 w-full"
                  >
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full"
                      variants={staggerChildren}
                    >
                      <motion.div className="w-full" variants={itemVariants}>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2 md:mb-3 text-foreground"
                        >
                          Your full Name <span className="text-red-500">*</span>
                        </label>
                        <motion.div whileHover={{ scale: 1.02 }}>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className={`w-full transition-all ${
                              errors.name
                                ? "border-red-500 focus:border-red-500"
                                : "border-border hover:border-primary/40 focus:border-primary"
                            }`}
                          />
                        </motion.div>
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm mt-1 md:mt-2 flex items-center gap-1"
                          >
                            <span>⚠</span> {errors.name}
                          </motion.p>
                        )}
                      </motion.div>

                      <motion.div className="w-full" variants={itemVariants}>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2 md:mb-3 text-foreground"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <motion.div whileHover={{ scale: 1.02 }}>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            className={`w-full transition-all ${
                              errors.email
                                ? "border-red-500 focus:border-red-500"
                                : "border-border hover:border-primary/40 focus:border-primary"
                            }`}
                          />
                        </motion.div>
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm mt-1 md:mt-2 flex items-center gap-1"
                          >
                            <span>⚠</span> {errors.email}
                          </motion.p>
                        )}
                      </motion.div>
                    </motion.div>

                    <motion.div className="w-full" variants={itemVariants}>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-2 md:mb-3 text-foreground"
                      >
                        Your Subject <span className="text-red-500">*</span>
                      </label>
                      <motion.div whileHover={{ scale: 1.02 }}>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What is this regarding?"
                          className={`w-full transition-all ${
                            errors.subject
                              ? "border-red-500 focus:border-red-500"
                              : "border-border hover:border-primary/40 focus:border-primary"
                          }`}
                        />
                      </motion.div>
                      {errors.subject && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-1 md:mt-2 flex items-center gap-1"
                        >
                          <span>⚠</span> {errors.subject}
                        </motion.p>
                      )}
                    </motion.div>

                    <motion.div className="w-full" variants={itemVariants}>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2 md:mb-3 text-foreground"
                      >
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <motion.div whileHover={{ scale: 1.02 }}>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell me about your project or ask me anything..."
                          rows={5}
                          className={`w-full transition-all resize-none ${
                            errors.message
                              ? "border-red-500 focus:border-red-500"
                              : "border-border hover:border-primary/40 focus:border-primary"
                          }`}
                        />
                      </motion.div>
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-1 md:mt-2 flex items-center gap-1"
                        >
                          <span>⚠</span> {errors.message}
                        </motion.p>
                      )}
                    </motion.div>

                    <motion.div
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-border"
                      variants={itemVariants}
                    >
                      <p className="text-sm text-muted-foreground">
                        * Accept the terms and conditions.
                      </p>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all py-4 md:py-6 px-8 text-base md:text-lg font-semibold relative overflow-hidden group min-w-[140px] shadow-lg"
                          size="lg"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 opacity-0 group-hover:opacity-100"
                            whileHover={{ opacity: 1 }}
                          />
                          <motion.div
                            animate={{
                              rotate: isSubmitting ? 360 : 0,
                            }}
                            transition={{
                              duration: 1,
                              repeat: isSubmitting ? Infinity : 0,
                            }}
                          >
                            <Send className="mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 relative z-10" />
                          </motion.div>
                          <span className="relative z-10">
                            {isSubmitting ? "Sending..." : "Send Message"}
                          </span>

                          {/* Submit button glow */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-0 group-hover:opacity-100 blur-lg"
                            whileHover={{ opacity: 0.3 }}
                          />
                        </Button>
                      </motion.div>
                    </motion.div>
                  </form>

                  <motion.div
                    className="mt-4 md:mt-6 p-3 md:p-4 bg-muted/50 rounded-lg border border-border"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="text-xs md:text-sm text-muted-foreground text-center">
                      💡 Looking for a specific service? Mention it in your
                      message and I'll get back to you with a customized
                      proposal.
                    </p>
                  </motion.div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute top-4 left-4 w-5 h-5 bg-primary/10 rounded-full"
                  animate={{
                    y: [0, -6, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute bottom-4 right-4 w-3 h-3 bg-accent/10 rounded-full"
                  animate={{
                    y: [0, 6, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: 1,
                  }}
                />
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
