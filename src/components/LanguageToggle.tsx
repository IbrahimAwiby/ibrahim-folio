import { Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="rounded-full hover:bg-primary/10 transition-all"
    >
      <Languages className="h-5 w-5" />
      <span className="ml-2 text-sm font-medium">{language === 'en' ? 'ع' : 'EN'}</span>
    </Button>
  );
};
