// Enhanced Navbar.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsTablet(width >= 768 && width <= 1024); // Tablet range: 768px - 1024px
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

    checkScreenSize();
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);

    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const offset = 20; // Account for navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 300);
  };

  return (
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
                    ? "bg-gradient-to-br from-primary to-secondary"
                    : "bg-white/10 backdrop-blur-sm border border-white/20"
                }`}
              >
                <Code2
                  className={`h-5 w-5 ${
                    isScrolled ? "text-white" : "text-white"
                  }`}
                />
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

          {/* Desktop Navigation - Show on lg screens and above */}
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
                          ? "bg-gradient-to-r from-primary to-secondary"
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

          {/* Tablet Navigation - Show condensed version on md screens */}
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
                          ? "bg-gradient-to-r from-primary to-secondary"
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
            {/* More items dropdown for tablet */}
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

            {/* Download CV Button - Desktop & Tablet */}
            <motion.div
              className="hidden md:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/assets/IbrahimHassanResume1.pdf"
                download="IbrahimHassanResume1.pdf"
              >
                <Button
                  className={`transition-all shadow-lg text-sm md:text-base ${
                    isScrolled
                      ? "bg-gradient-to-r from-primary to-secondary text-white"
                      : "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-primary"
                  }`}
                  size={isTablet ? "sm" : "default"}
                  variant={isScrolled ? "default" : "outline"}
                >
                  Download CV
                </Button>
              </a>
            </motion.div>

            {/* Mobile Menu Button - Show on screens smaller than lg */}
            <Button
              variant={isScrolled ? "ghost" : "outline"}
              size="icon"
              className={`lg:hidden relative transition-all ${
                !isScrolled &&
                "bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-primary"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    className="flex items-center justify-center"
                  >
                    <X className="h-7 w-7 md:h-8 md:w-8" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    className="flex items-center justify-center"
                  >
                    <Menu className="h-7 w-7 md:h-8 md:w-8" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Mobile Menu - Enhanced for better touch targets */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`lg:hidden border-t ${
                isScrolled
                  ? "border-border bg-background/95"
                  : "border-white/20 bg-black/20 backdrop-blur-xl"
              }`}
            >
              <div className="py-4 space-y-3 md:space-y-4">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      className={`block py-4 md:py-5 px-6 text-lg md:text-xl rounded-lg transition-all duration-300 font-medium ${
                        isActive
                          ? isScrolled
                            ? "bg-primary/10 text-primary font-semibold border-l-4 border-primary"
                            : "bg-white/20 text-white font-semibold border-l-4 border-white"
                          : isScrolled
                          ? "text-foreground/70 hover:text-primary hover:bg-primary/5"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.label}
                    </motion.a>
                  );
                })}
                {/* Download CV Button - Mobile */}
                <motion.div
                  className="px-6 pt-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  <a
                    href="/assets/IbrahimHassanResume1.pdf"
                    download="IbrahimHassanResume1.pdf"
                  >
                    <Button
                      onClick={() => window.open("/cv.pdf", "_blank")}
                      className={`w-full py-6 text-lg md:text-xl font-semibold transition-all ${
                        isScrolled
                          ? "bg-gradient-to-r from-primary to-secondary text-white"
                          : "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-primary"
                      }`}
                      size="lg"
                    >
                      <DownloadIcon className="mr-3 h-6 w-6" />
                      Download CV
                    </Button>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

// Download Icon component
const DownloadIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);
