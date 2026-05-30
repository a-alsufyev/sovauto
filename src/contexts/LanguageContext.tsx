import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.factories': 'Factories',
    'nav.collection': 'Collection',
    'nav.compare': 'Compare',
    'nav.museum': 'Museum & Archive',
    'hero.title': 'THE SOVIET',
    'hero.subtitle': 'AI MUSEUM',
    'hero.badge': 'Preserving State Heritage',
    'hero.desc': 'Explore the engineering marvels of a vanished empire. An intelligent archive for the cars that defined the Eastern Bloc.',
    'hero.btn.enter': 'Enter Collection',
    'hero.btn.compare': 'Compare Models',
    'gallery.badge': 'The Gallery',
    'gallery.title': 'Featured Exhibits',
    'gallery.all': 'Full Inventory',
    'factories.badge': 'Industrial Centers',
    'factories.title': 'State Manufacturing',
    'factories.view': 'View Plant Archive',
    'timeline.badge': 'Evolution of Design',
    'timeline.title': 'Industrial Timeline',
    'footer.motto': 'Museum & Archive • 1945–1991',
    'footer.curated': 'Curated by AI Studio Gemini • Historical Archive 1.0.3',
    'footer.rights': 'All rights reserved to the People and History.',
    'search.placeholder': 'Search by name, tags, or description...',
    'search.all_factories': 'All Factories',
    'search.all_types': 'All Types',
    'vehicle.engine': 'Engine',
    'vehicle.power': 'Power',
    'vehicle.body': 'Body',
    'vehicle.production': 'Production',
    'vehicle.history': 'Historical Context',
    'vehicle.facts': 'Known Facts & Curiosities',
    'vehicle.guide': 'Museum Guide',
    'compare.title': 'Technical Confrontation',
    'compare.desc': 'Select two vehicles from our archive to perform a side-by-side AI analysis and historical comparison.',
    'compare.run': 'Run AI Comparison',
    'compare.analysis': "Curator's Analysis",
    'compare.primary': 'Prime Exhibit',
    'compare.secondary': 'Secondary Exhibit'
  },
  ru: {
    'nav.factories': 'Заводы',
    'nav.collection': 'Коллекция',
    'nav.compare': 'Сравнение',
    'nav.museum': 'Музей и Архив',
    'hero.title': 'СОВЕТСКИЙ',
    'hero.subtitle': 'ИИ МУЗЕЙ',
    'hero.badge': 'Сохранение государственного наследия',
    'hero.desc': 'Исследуйте инженерные чудеса исчезнувшей империи. Интеллектуальный архив автомобилей, определивших облик Восточного блока.',
    'hero.btn.enter': 'В Коллекцию',
    'hero.btn.compare': 'Сравнить модели',
    'gallery.badge': 'Галерея',
    'gallery.title': 'Избранные экспонаты',
    'gallery.all': 'Весь инвентарь',
    'factories.badge': 'Индустриальные центры',
    'factories.title': 'Государственное производство',
    'factories.view': 'Посмотреть архив завода',
    'timeline.badge': 'Эволюция дизайна',
    'timeline.title': 'Индустриальная хронология',
    'footer.motto': 'Музей и Архив • 1945–1991',
    'footer.curated': 'Создано при помощи AI Studio Gemini • Исторический архив 1.0.3',
    'footer.rights': 'Все права принадлежат народу и истории.',
    'search.placeholder': 'Поиск по названию, тегам или описанию...',
    'search.all_factories': 'Все заводы',
    'search.all_types': 'Все типы',
    'vehicle.engine': 'Двигатель',
    'vehicle.power': 'Мощность',
    'vehicle.body': 'Кузов',
    'vehicle.production': 'Производство',
    'vehicle.history': 'Исторический контекст',
    'vehicle.facts': 'Известные факты и любопытные детали',
    'vehicle.guide': 'Музейный гид',
    'compare.title': 'Техническое противостояние',
    'compare.desc': 'Выберите два автомобиля из нашего архива для сравнительного анализа ИИ и исторического сопоставления.',
    'compare.run': 'Запустить сравнение ИИ',
    'compare.analysis': 'Анализ куратора',
    'compare.primary': 'Главный экспонат',
    'compare.secondary': 'Второй экспонат'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
