import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { FloatingIcons } from '@/components/FloatingIcons';
import { GraduationCap, BookOpen, Award, Lightbulb, Target, Brain } from 'lucide-react';
import profileImg from '@/assets/profile.jpg';

export const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 bg-muted/30 relative">
      <FloatingIcons icons={[GraduationCap, BookOpen, Award, Lightbulb, Target, Brain]} count={12} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            {t('about_title')}
          </h2>

          <Card className="max-w-4xl mx-auto p-8 md:p-12 glass-effect border-primary/20 shadow-glow">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex justify-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full blur-2xl opacity-50 animate-pulse" />
                  <img
                    src={profileImg}
                    alt="Ibrahim Hassan"
                    className="relative w-64 h-64 rounded-full object-cover border-4 border-primary shadow-glow"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {t('about_bio')}
                </p>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
