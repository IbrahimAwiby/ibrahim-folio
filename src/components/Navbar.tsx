// Enhanced Navbar.tsx
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Layers,
  Download,
  ChevronDown,
  Globe,
  Server,
  Home,
  User,
  Briefcase,
  Code2,
  FolderGit2,
  Mail,
  ArrowRight,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Services", href: "#services", icon: Briefcase },
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Contact", href: "#contact", icon: Mail },
];

const cvOptions = [
  {
    label: "Frontend CV",
    description: "React, Next.js, TypeScript",
    icon: Globe,
    file: "/assets/CV-Ibrahim-Hassan-Frontend.pdf",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    label: "Backend CV",
    description: "Node.js, Express, Databases",
    icon: Server,
    file: "/assets/CV-Ibrahim-Hassan-Backend.pdf",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    label: "Fullstack CV",
    description: "Complete MERN Stack",
    icon: Layers,
    file: "/assets/CV-Ibrahim-Hassan-Fullstack.pdf",
    gradient: "from-purple-500 to-pink-500",
  },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isTablet, setIsTablet] = useState(false);
  const [isCVDropdownOpen, setIsCVDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const cvDropdownRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsTablet(width >= 768 && width <= 1024);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        cvDropdownRef.current &&
        !cvDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCVDropdownOpen(false);
      }
    };

    checkScreenSize();
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkScreenSize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScreenSize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsSidebarOpen(false);

    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const offset = 20;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 300);
  };

  const handleCVDownload = (file: string) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop() || "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsCVDropdownOpen(false);
    setIsSidebarOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 md:px-4 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-xl shadow-2xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[70px]">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-all ${
                    isScrolled
                      ? "bg-gradient-to-br from-green-500 via-blue-500 to-purple-500"
                      : "bg-white/10 backdrop-blur-sm border border-white/20"
                  }`}
                >
                  <Layers className="h-5 w-5 text-white" />
                </div>
              </div>
              <motion.a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#home");
                }}
                className={`text-2xl font-bold cursor-pointer hidden lg:block transition-colors ${
                  isScrolled ? "gradient-text" : "text-white"
                }`}
              >
                Ibrahim Hassan
              </motion.a>
              <motion.a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#home");
                }}
                className={`text-2xl font-bold cursor-pointer lg:hidden transition-colors ${
                  isScrolled ? "gradient-text" : "text-white"
                }`}
              >
                IH
              </motion.a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`relative px-1 py-2 font-medium cursor-pointer transition-all duration-300 ${
                      isActive
                        ? isScrolled
                          ? "text-primary font-semibold"
                          : "text-white font-semibold"
                        : isScrolled
                          ? "text-foreground/70 hover:text-primary"
                          : "text-white/80 hover:text-white"
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="navbarIndicator"
                        className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                          isScrolled
                            ? "bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"
                            : "bg-white"
                        }`}
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* Tablet Navigation */}
            <div className="hidden md:flex lg:hidden items-center gap-4">
              {navItems.slice(0, 4).map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`relative px-1 py-2 text-sm font-medium cursor-pointer transition-all duration-300 ${
                      isActive
                        ? isScrolled
                          ? "text-primary font-semibold"
                          : "text-white font-semibold"
                        : isScrolled
                          ? "text-foreground/70 hover:text-primary"
                          : "text-white/80 hover:text-white"
                    }`}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="navbarIndicatorTablet"
                        className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                          isScrolled
                            ? "bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"
                            : "bg-white"
                        }`}
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.a>
                );
              })}
              <motion.div className="relative group">
                <button className="px-2 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
                  More ▼
                </button>
                <div className="absolute top-full right-0 mt-2 w-32 bg-background/95 backdrop-blur-xl border border-border rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  {navItems.slice(4).map((item) => {
                    const isActive = activeSection === item.href.substring(1);
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.href);
                        }}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          isActive
                            ? "bg-primary/10 text-primary font-semibold"
                            : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                        }`}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3 md:gap-4">
              <ThemeToggle />

              {/* Desktop CV Button */}
              <div className="hidden md:block relative" ref={cvDropdownRef}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => setIsCVDropdownOpen(!isCVDropdownOpen)}
                    className={`relative transition-all shadow-lg text-sm md:text-base group overflow-hidden ${
                      isScrolled
                        ? "bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white hover:shadow-green-500/25"
                        : "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/40"
                    }`}
                    size={isTablet ? "sm" : "default"}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: [-100, 200] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <Download className="mr-2 h-4 w-4 relative z-10" />
                    <span className="relative z-10">Download CV</span>
                    <motion.div
                      animate={{ rotate: isCVDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </motion.div>
                  </Button>
                </motion.div>

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {isCVDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full right-0 mt-2 w-64 bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl overflow-hidden z-50"
                    >
                      {cvOptions.map((option, index) => {
                        const Icon = option.icon;
                        return (
                          <motion.button
                            key={option.label}
                            onClick={() => handleCVDownload(option.file)}
                            className="w-full flex items-center gap-3 p-3 hover:bg-muted/50 transition-colors group"
                            whileHover={{ x: 5 }}
                          >
                            <div
                              className={`w-10 h-10 rounded-lg bg-gradient-to-br ${option.gradient} p-2 flex items-center justify-center flex-shrink-0`}
                            >
                              <Icon className="w-full h-full text-white" />
                            </div>
                            <div className="flex-1 text-left">
                              <div className="text-sm font-semibold text-foreground">
                                {option.label}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {option.description}
                              </div>
                            </div>
                            <Download className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          </motion.button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Button - Opens Sidebar */}
              <Button
                variant="outline"
                size="icon"
                className={`lg:hidden relative transition-all ${
                  isScrolled
                    ? "border-border hover:bg-muted"
                    : "bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-primary"
                }`}
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu className="h-7 w-7" />
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar - Contains both Menu Links and CV Download */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[300px] max-w-[85vw] bg-background z-[70] lg:hidden shadow-2xl flex flex-col"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-border flex-shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 via-blue-500 to-purple-500 flex items-center justify-center">
                    <Layers className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-bold text-lg">Menu</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSidebarOpen(false)}
                  className="hover:bg-muted"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto">
                {/* Navigation Links */}
                <div className="p-4 space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 mb-3">
                    Navigation
                  </p>
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.href.substring(1);
                    const Icon = item.icon;
                    return (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.href);
                        }}
                        className={`flex items-center gap-3 p-3 rounded-xl transition-all group ${
                          isActive
                            ? "bg-primary/10 text-primary font-semibold border-l-4 border-primary"
                            : "text-foreground/70 hover:text-primary hover:bg-muted/50 border-l-4 border-transparent"
                        }`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + index * 0.05 }}
                        whileHover={{ x: 5 }}
                      >
                        <Icon className="w-5 h-5 flex-shrink-0" />
                        <span className="text-base">{item.label}</span>
                        {isActive && (
                          <motion.div
                            layoutId="sidebarIndicator"
                            className="ml-auto w-2 h-2 rounded-full bg-primary"
                          />
                        )}
                      </motion.a>
                    );
                  })}
                </div>

                {/* Divider */}
                <div className="px-4">
                  <div className="border-t border-border" />
                </div>

                {/* CV Download Section */}
                <div className="p-4 space-y-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 mb-3">
                    Download CV
                  </p>
                  {cvOptions.map((option, index) => {
                    const Icon = option.icon;
                    return (
                      <motion.button
                        key={option.label}
                        onClick={() => handleCVDownload(option.file)}
                        className="w-full flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 border border-border/30 hover:border-primary/30 transition-all group"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div
                          className={`w-11 h-11 rounded-xl bg-gradient-to-br ${option.gradient} p-2.5 flex items-center justify-center flex-shrink-0 shadow-lg`}
                        >
                          <Icon className="w-full h-full text-white" />
                        </div>
                        <div className="flex-1 text-left">
                          <div className="text-sm font-semibold text-foreground">
                            {option.label}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {option.description}
                          </div>
                        </div>
                        <Download className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Sidebar Footer */}
              <div className="p-6 border-t border-border flex-shrink-0">
                <p className="text-xs text-muted-foreground text-center">
                  © 2025 Ibrahim Hassan
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
