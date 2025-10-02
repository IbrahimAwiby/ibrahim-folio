import { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero
    hero_greeting: "Hi, I'm",
    hero_name: "Ibrahim Hassan",
    hero_title: "Frontend Developer",
    hero_subtitle: "React & Next.js Specialist",
    download_cv: "Download CV",
    contact_me: "Contact Me",
    
    // About
    about_title: "About Me",
    about_bio: "I am a 4th-year Computer Science student at Beni-Suef University, Faculty of Science, Computer Science Department. I completed a Frontend Diploma at Creativa Hub Beni-Suef. I have built multiple frontend projects using React and Next.js with a passion for creating beautiful and functional web applications.",
    
    // Skills
    skills_title: "Skills & Technologies",
    
    // Projects
    projects_title: "Featured Projects",
    view_code: "View Code",
    live_demo: "Live Demo",
    
    // Contact
    contact_title: "Get In Touch",
    contact_subtitle: "Feel free to reach out for collaborations or just a friendly hello",
    
    // Footer
    footer_text: "Built with React & Tailwind CSS",
    footer_rights: "All rights reserved.",
  },
  ar: {
    // Hero
    hero_greeting: "مرحباً، أنا",
    hero_name: "إبراهيم حسن",
    hero_title: "مطور واجهات أمامية",
    hero_subtitle: "متخصص في React و Next.js",
    download_cv: "تحميل السيرة الذاتية",
    contact_me: "تواصل معي",
    
    // About
    about_title: "نبذة عني",
    about_bio: "أنا طالب في السنة الرابعة بقسم علوم الحاسب، كلية العلوم، جامعة بني سويف. أكملت دبلومة تطوير الواجهات الأمامية في Creativa Hub بني سويف. قمت ببناء العديد من المشاريع باستخدام React و Next.js مع شغف بإنشاء تطبيقات ويب جميلة وعملية.",
    
    // Skills
    skills_title: "المهارات والتقنيات",
    
    // Projects
    projects_title: "المشاريع المميزة",
    view_code: "عرض الكود",
    live_demo: "معاينة مباشرة",
    
    // Contact
    contact_title: "تواصل معي",
    contact_subtitle: "لا تتردد في التواصل للتعاون أو حتى لمجرد السلام",
    
    // Footer
    footer_text: "تم البناء باستخدام React و Tailwind CSS",
    footer_rights: "جميع الحقوق محفوظة.",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
