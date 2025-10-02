import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Github, Linkedin, Twitter, Facebook, Instagram, Send, MessageSquare, AtSign } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FloatingIcons } from '@/components/FloatingIcons';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  { icon: Github, url: 'https://github.com/IbrahimHasssan1', label: 'GitHub', color: 'hover:text-gray-800 dark:hover:text-gray-200' },
  { icon: Linkedin, url: 'https://www.linkedin.com/in/ibrahim-hassan-5b4b2b264', label: 'LinkedIn', color: 'hover:text-blue-600' },
  { icon: Twitter, url: 'https://x.com/Ibram_Hassan44', label: 'Twitter', color: 'hover:text-blue-400' },
  { icon: Facebook, url: 'https://www.facebook.com/profile.php?id=100009247447619', label: 'Facebook', color: 'hover:text-blue-500' },
  { icon: Instagram, url: 'https://www.instagram.com/ibram_hassan44', label: 'Instagram', color: 'hover:text-pink-500' },
];

export const Contact = () => {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = language === 'en' ? 'Name is required' : 'الاسم مطلوب';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = language === 'en' ? 'Email is required' : 'البريد الإلكتروني مطلوب';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === 'en' ? 'Invalid email address' : 'البريد الإلكتروني غير صالح';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = language === 'en' ? 'Message is required' : 'الرسالة مطلوبة';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the form data to a backend
      toast({
        title: language === 'en' ? 'Message Sent!' : 'تم إرسال الرسالة!',
        description: language === 'en' 
          ? 'Thank you for your message. I will get back to you soon!' 
          : 'شكرا لرسالتك. سأرد عليك قريباً!',
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <FloatingIcons icons={[Mail, Phone, MessageSquare, AtSign, Send]} count={12} />
      <div className="container mx-auto px-4 relative z-10">
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

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-8 glass-effect border-primary/20 shadow-glow h-full">
                <h3 className="text-2xl font-bold mb-6">{language === 'en' ? 'Get in Touch' : 'تواصل معي'}</h3>
                
                <div className="space-y-6 mb-8">
                  <a
                    href="mailto:ibrabasm4456@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/10 transition-all group"
                  >
                    <div className="p-3 bg-primary/20 rounded-full group-hover:bg-primary group-hover:scale-110 transition-all">
                      <Mail className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">ibrabasm4456@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:01555825248"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/10 transition-all group"
                  >
                    <div className="p-3 bg-secondary/20 rounded-full group-hover:bg-secondary group-hover:scale-110 transition-all">
                      <Phone className="h-6 w-6 text-secondary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">01555825248</p>
                    </div>
                  </a>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">{language === 'en' ? 'Connect with me' : 'تواصل معي على'}</h4>
                  <div className="flex gap-3 flex-wrap">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-muted rounded-full transition-all hover:scale-110 ${social.color}`}
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5" />
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
            >
              <Card className="p-8 glass-effect border-primary/20 shadow-glow h-full">
                <h3 className="text-2xl font-bold mb-6">{language === 'en' ? 'Send a Message' : 'أرسل رسالة'}</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {language === 'en' ? 'Name' : 'الاسم'}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={language === 'en' ? 'Your name' : 'اسمك'}
                      className={errors.name ? 'border-red-500' : ''}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {language === 'en' ? 'Email' : 'البريد الإلكتروني'}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={language === 'en' ? 'your.email@example.com' : 'بريدك@مثال.com'}
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {language === 'en' ? 'Message' : 'الرسالة'}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={language === 'en' ? 'Your message...' : 'رسالتك...'}
                      rows={5}
                      className={errors.message ? 'border-red-500' : ''}
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {language === 'en' ? 'Send Message' : 'إرسال الرسالة'}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
