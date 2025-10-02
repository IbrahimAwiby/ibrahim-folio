import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Mail, Phone, Github, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const socialLinks = [
  { icon: Github, url: 'https://github.com/IbrahimHasssan1', label: 'GitHub', color: 'hover:text-gray-800 dark:hover:text-gray-200' },
  { icon: Linkedin, url: 'https://www.linkedin.com/in/ibrahim-hassan-5b4b2b264', label: 'LinkedIn', color: 'hover:text-blue-600' },
  { icon: Twitter, url: 'https://x.com/Ibram_Hassan44', label: 'Twitter', color: 'hover:text-blue-400' },
  { icon: Facebook, url: 'https://www.facebook.com/profile.php?id=100009247447619', label: 'Facebook', color: 'hover:text-blue-500' },
  { icon: Instagram, url: 'https://www.instagram.com/ibram_hassan44', label: 'Instagram', color: 'hover:text-pink-500' },
];

export const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            {t('contact_title')}
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16">
            {t('contact_subtitle')}
          </p>

          <Card className="max-w-4xl mx-auto p-8 md:p-12 glass-effect border-primary/20 shadow-glow">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.a
                href="mailto:ibrabasm4456@gmail.com"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/10 transition-all group"
              >
                <div className="p-3 bg-primary/20 rounded-full group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Mail className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">ibrabasm4456@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:01555825248"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/10 transition-all group"
              >
                <div className="p-3 bg-secondary/20 rounded-full group-hover:bg-secondary group-hover:scale-110 transition-all">
                  <Phone className="h-6 w-6 text-secondary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">01555825248</p>
                </div>
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center">Connect with me</h3>
              <div className="flex justify-center gap-4 flex-wrap">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className={`p-4 bg-muted rounded-full transition-all hover:scale-110 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
