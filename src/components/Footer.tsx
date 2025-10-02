import { Github, Linkedin, Twitter, Facebook, Instagram, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const socialLinks = [
  { icon: Github, url: 'https://github.com/IbrahimHasssan1', label: 'GitHub' },
  { icon: Linkedin, url: 'https://www.linkedin.com/in/ibrahim-hassan-5b4b2b264', label: 'LinkedIn' },
  { icon: Twitter, url: 'https://x.com/Ibram_Hassan44', label: 'Twitter' },
  { icon: Facebook, url: 'https://www.facebook.com/profile.php?id=100009247447619', label: 'Facebook' },
  { icon: Instagram, url: 'https://www.instagram.com/ibram_hassan44', label: 'Instagram' },
];

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-muted-foreground">
            <p className="flex items-center gap-2 justify-center mb-2">
              {t('footer_text')}
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            </p>
            <p className="text-sm">
              © {currentYear} Ibrahim Hassan. {t('footer_rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
