import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const skills = [
  { name: 'HTML', level: 95, color: 'from-orange-500 to-orange-600' },
  { name: 'CSS', level: 90, color: 'from-blue-500 to-blue-600' },
  { name: 'JavaScript', level: 88, color: 'from-yellow-400 to-yellow-500' },
  { name: 'Bootstrap', level: 85, color: 'from-purple-500 to-purple-600' },
  { name: 'React', level: 90, color: 'from-cyan-400 to-cyan-500' },
  { name: 'Next.js', level: 85, color: 'from-gray-700 to-gray-900' },
  { name: 'Redux', level: 80, color: 'from-purple-600 to-purple-700' },
  { name: 'Axios', level: 85, color: 'from-blue-600 to-blue-700' },
  { name: 'TypeScript', level: 82, color: 'from-blue-500 to-blue-600' },
  { name: 'Tailwind CSS', level: 92, color: 'from-teal-400 to-teal-500' },
];

export const Skills = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            {t('skills_title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 glass-effect border-primary/20 hover:border-primary/40 transition-all card-hover">
                  <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
                  <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 text-right">{skill.level}%</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
