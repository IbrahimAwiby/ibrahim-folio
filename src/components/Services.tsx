// Services.tsx
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
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="py-20 bg-background relative md:px-4">
      <FloatingIcons
        icons={[Code2, Smartphone, Palette, Zap, Globe, Rocket]}
        count={15}
      />
      <div className="container mx-auto px-4 relative z-10 ">
        <div ref={ref}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              My Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive frontend development services using React and
              Next.js to bring your ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <Card className="relative overflow-hidden p-8 glass-effect border-primary/20 hover:border-primary/40 transition-all group h-full">
                    {/* Gradient background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    {/* Animated border */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    >
                      <div className="absolute inset-[2px] bg-background rounded-[inherit]" />
                    </div>

                    <div className="relative">
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <Icon className="w-full h-full text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 text-sm"
                          >
                            <div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}
                            />
                            <span className="text-foreground/80">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="text-center mt-16"
          >
            <Card className="max-w-4xl mx-auto p-8 glass-effect border-primary/20 shadow-glow">
              <h3 className="text-3xl font-bold mb-4 gradient-text">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl text-muted-foreground mb-8">
                Let's work together to create something amazing with modern
                React and Next.js technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg"
                >
                  Get In Touch
                </a>
                <a
                  href="#projects"
                  className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all"
                >
                  View My Work
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
