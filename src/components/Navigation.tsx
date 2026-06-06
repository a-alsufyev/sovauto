import { Link } from "react-router-dom";
import { Landmark, Search, Menu, Languages, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

const LANGUAGES = [
  { code: "en", label: "EN", fullName: "English" },
  { code: "ru", label: "RU", fullName: "Русский" },
  { code: "de", label: "DE", fullName: "Deutsch" },
  { code: "es", label: "ES", fullName: "Español" }
] as const;

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const langRef = useRef<HTMLDivElement>(null);

  // Close language dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const currentLangObj = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

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
            
            {/* Custom Language Dropdown Selector */}
            <div className="relative" ref={langRef}>
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted hover:text-gold transition-colors py-2"
              >
                <Languages size={14} />
                <span>{currentLangObj.label}</span>
                <ChevronDown size={10} className={`transform transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-36 bg-paper border border-white/10 rounded shadow-2xl py-1 z-50"
                  >
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs transition-colors hover:bg-white/5 flex justify-between items-center ${
                          language === lang.code ? 'text-gold font-bold' : 'text-muted'
                        }`}
                      >
                        <span>{lang.fullName}</span>
                        <span className="text-[9px] opacity-60 font-mono">{lang.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
            
            <div className="border-t border-white/5 pt-4">
              <span className="text-[10px] text-muted uppercase tracking-widest block mb-2">{t('language') || 'Language'}</span>
              <div className="grid grid-cols-2 gap-2">
                {LANGUAGES.map((lang) => (
                  <button 
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={`px-3 py-2 text-xs border rounded transition-colors text-left flex justify-between items-center ${
                      language === lang.code 
                        ? 'border-gold text-gold bg-gold/5 font-bold' 
                        : 'border-white/10 text-muted hover:border-white/20'
                    }`}
                  >
                    <span>{lang.fullName}</span>
                    <span className="text-[9px] font-mono opacity-50">{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
