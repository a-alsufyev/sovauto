import { Link } from "react-router-dom";
import { Landmark, Car, Search, Menu, Languages } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to={`/${language}`} className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center group-hover:scale-110 transition-transform">
              <Landmark className="text-white w-6 h-6" />
            </div>
            <div>
              <span className="font-display text-xl font-bold tracking-tight block leading-none whitespace-nowrap">{t('app.logo.title')}</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to={`/${language}/factories`} className="text-sm uppercase tracking-widest text-muted hover:text-gold transition-colors">{t('nav.factories')}</Link>
            <Link to={`/${language}/vehicles`} className="text-sm uppercase tracking-widest text-muted hover:text-gold transition-colors">{t('nav.collection')}</Link>
            <Link to={`/${language}/compare`} className="text-sm uppercase tracking-widest text-muted hover:text-gold transition-colors">{t('nav.compare')}</Link>
            
            <div className="h-4 w-[1px] bg-white/10" />
            
            <button 
              onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
              className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted hover:text-gold transition-colors"
            >
              <Languages size={14} />
              {language === 'en' ? 'RU' : 'EN'}
            </button>

            <button className="p-2 text-muted hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>

          <button 
            className="md:hidden p-2 text-muted"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-paper border-b border-white/5 p-6 space-y-4"
          >
            <Link to={`/${language}/factories`} className="block text-lg font-display" onClick={() => setIsOpen(false)}>{t('nav.factories')}</Link>
            <Link to={`/${language}/vehicles`} className="block text-lg font-display" onClick={() => setIsOpen(false)}>{t('nav.collection')}</Link>
            <Link to={`/${language}/compare`} className="block text-lg font-display" onClick={() => setIsOpen(false)}>{t('nav.compare')}</Link>
            <button 
              onClick={() => {
                setLanguage(language === 'en' ? 'ru' : 'en');
                setIsOpen(false);
              }}
              className="flex items-center gap-2 text-lg font-display"
            >
              <Languages size={18} />
              {language === 'en' ? 'Russian Version' : 'English Version'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
