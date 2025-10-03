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
  Clock,
} from "lucide-react";
import { FloatingIcons } from "@/components/FloatingIcons";
import { useToast } from "@/hooks/use-toast";

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

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" };
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

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I will get back to you soon!",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
    } catch (error) {
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
    // Clear error when user starts typing
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
      <div className="container mx-auto px-4 relative z-10 w-full max-w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="text-center mb-16 w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Ready to start your next project? Let's discuss how we can work
              together to bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto w-full">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="w-full"
            >
              <Card className="p-6 md:p-8 glass-effect border-primary/20 shadow-glow h-full w-full max-w-full">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                  {/* Email - Opens Gmail */}
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=ibrabasm4456@gmail.com&su=Let's%20Connect&body=Hello%20Ibrahim,"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg hover:bg-primary/10 transition-all group border border-transparent hover:border-primary/20 w-full"
                  >
                    <div className="p-2 md:p-3 bg-gradient-to-br from-primary to-secondary rounded-full group-hover:scale-110 transition-all shadow-lg flex-shrink-0">
                      <Mail className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground text-sm md:text-base truncate">
                        ibrabasm4456@gmail.com
                      </p>
                    </div>
                  </a>

                  {/* Phone - Opens WhatsApp */}
                  <a
                    href="https://wa.me/201555825248?text=Hello%20Ibrahim,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg hover:bg-primary/10 transition-all group border border-transparent hover:border-primary/20 w-full"
                  >
                    <div className="p-2 md:p-3 bg-gradient-to-br from-secondary to-accent rounded-full group-hover:scale-110 transition-all shadow-lg flex-shrink-0">
                      <MessageSquare className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-muted-foreground">
                        Phone / WhatsApp
                      </p>
                      <p className="font-medium text-foreground text-sm md:text-base">
                        +20 155 582 5248
                      </p>
                    </div>
                  </a>

                  {/* Alternative: Regular phone call link */}
                  <a
                    href="tel:+201031071411"
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg hover:bg-primary/10 transition-all group border border-transparent hover:border-primary/20 w-full"
                  >
                    <div className="p-2 md:p-3 bg-gradient-to-br from-accent to-primary rounded-full group-hover:scale-110 transition-all shadow-lg flex-shrink-0">
                      <Phone className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-muted-foreground">
                        Direct Call
                      </p>
                      <p className="font-medium text-foreground text-sm md:text-base">
                        +20 103 107 1411
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg border border-transparent w-full">
                    <div className="p-2 md:p-3 bg-muted rounded-full flex-shrink-0">
                      <MapPin className="h-5 w-5 md:h-6 md:w-6 text-muted-foreground" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-foreground text-sm md:text-base">
                        Egypt
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                  <div className="flex gap-2 md:gap-3 flex-wrap">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 md:p-3 bg-muted rounded-full transition-all ${social.color} group/social relative flex-shrink-0`}
                        aria-label={social.label}
                      >
                        <social.icon className="h-4 w-4 md:h-5 md:w-5" />
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-2 py-1 rounded text-xs opacity-0 group-hover/social:opacity-100 transition-opacity whitespace-nowrap">
                          {social.label}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="w-full"
            >
              <Card className="p-6 md:p-8 glass-effect border-primary/20 shadow-glow h-full w-full max-w-full">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-6 w-full"
                >
                  <div className="w-full">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 md:mb-3 text-foreground"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`w-full transition-all ${
                        errors.name
                          ? "border-red-500"
                          : "border-border hover:border-primary/40"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1 md:mt-2 flex items-center gap-1">
                        <span>⚠</span> {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 md:mb-3 text-foreground"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={`w-full transition-all ${
                        errors.email
                          ? "border-red-500"
                          : "border-border hover:border-primary/40"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 md:mt-2 flex items-center gap-1">
                        <span>⚠</span> {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 md:mb-3 text-foreground"
                    >
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or ask me anything..."
                      rows={5}
                      className={`w-full transition-all resize-none ${
                        errors.message
                          ? "border-red-500"
                          : "border-border hover:border-primary/40"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1 md:mt-2 flex items-center gap-1">
                        <span>⚠</span> {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all py-4 md:py-6 text-base md:text-lg font-semibold relative overflow-hidden group"
                    size="lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Send className="mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 relative z-10 group-hover:scale-110 transition-transform" />
                    <span className="relative z-10">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                  </Button>
                </form>

                <div className="mt-4 md:mt-6 p-3 md:p-4 bg-muted/50 rounded-lg border border-border">
                  <p className="text-xs md:text-sm text-muted-foreground text-center">
                    💡 Looking for a specific service? Mention it in your
                    message and I'll get back to you with a customized proposal.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
