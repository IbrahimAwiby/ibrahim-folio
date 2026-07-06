import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FloatingIconsProps {
  icons: LucideIcon[];
  count?: number;
}

export const FloatingIcons = ({ icons, count = 15 }: FloatingIconsProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => {
        const IconComponent = icons[i % icons.length];
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          >
            <IconComponent size={24 + Math.random() * 32} />
          </motion.div>
        );
      })}
    </div>
  );
};
