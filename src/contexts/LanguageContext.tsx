import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type Language = 'en' | 'ru' | 'de' | 'es';

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
    'nav.museum': 'Cars',
    'app.logo.title': 'Cars of the USSR',
    'app.logo.subtitle': '',
    'hero.title': 'THE SOVIET',
    'hero.subtitle': 'CARS MUSEUM',
    'hero.badge': 'Preserving Soviet Heritage',
    'hero.desc': 'A website about Soviet passenger cars of 1945 - 1991',
    'hero.btn.enter': 'Enter Collection',
    'hero.btn.compare': 'Compare Models',
    'gallery.badge': 'The Gallery',
    'gallery.title': 'Featured Exhibits',
    'gallery.all': 'Entire collection',
    'factories.badge': 'Industrial Centers',
    'factories.title': 'Automobile factories',
    'factories.view': 'View Plant Archive',
    'timeline.badge': 'Evolution of Design',
    'timeline.title': 'Industrial Timeline',
    'footer.motto': 'Cars of the USSR • 1945–1991',
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
    'nav.museum': 'СССР',
    'app.logo.title': 'Автомобили СССР',
    'app.logo.subtitle': '',
    'hero.title': 'СОВЕТСКИЙ',
    'hero.subtitle': 'ИИ МУЗЕЙ',
    'hero.badge': 'Сохранение советсктого наследия',
    'hero.desc': 'Сайт о советских легковых автомобилях 1945 - 1991 годов',
    'hero.btn.enter': 'В Коллекцию',
    'hero.btn.compare': 'Сравнить модели',
    'gallery.badge': 'Галерея',
    'gallery.title': 'Избранные экспонаты',
    'gallery.all': 'Вся коллекиця',
    'factories.badge': 'Индустриальные центры',
    'factories.title': 'Автомобильные заводы',
    'factories.view': 'Посмотреть архив завода',
    'timeline.badge': 'Эволюция дизайна',
    'timeline.title': 'Индустриальная хронология',
    'footer.motto': 'Автомобили СССР • 1945–1991',
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
  },
  de: {
    'nav.factories': 'Werke',
    'nav.collection': 'Sammlung',
    'nav.compare': 'Vergleich',
    'nav.museum': 'UdSSR',
    'app.logo.title': 'Autos der UdSSR',
    'app.logo.subtitle': '',
    'hero.title': 'DAS SOWJETISCHE',
    'hero.subtitle': 'AUTOMUSEUM',
    'hero.badge': 'Sowjetisches Erbe bewahren',
    'hero.desc': 'Eine Website über sowjetische Personenkraftwagen von 1945 bis 1991',
    'hero.btn.enter': 'Sammlung betreten',
    'hero.btn.compare': 'Modelle vergleichen',
    'gallery.badge': 'Die Galerie',
    'gallery.title': 'Ausgewählte Exponate',
    'gallery.all': 'Gesamte Sammlung',
    'factories.badge': 'Industriezentren',
    'factories.title': 'Automobilwerke',
    'factories.view': 'Werksarchiv anzeigen',
    'timeline.badge': 'Design-Evolution',
    'timeline.title': 'Industrielle Zeitleiste',
    'footer.motto': 'Autos der UdSSR • 1945–1991',
    'footer.curated': 'Kuriert von AI Studio Gemini • Historisches Archiv 1.0.3',
    'footer.rights': 'Alle Rechte liegen beim Volk und der Geschichte.',
    'search.placeholder': 'Nach Name, Tags oder Beschreibung suchen...',
    'search.all_factories': 'Alle Werke',
    'search.all_types': 'Alle Typen',
    'vehicle.engine': 'Motor',
    'vehicle.power': 'Leistung',
    'vehicle.body': 'Karosserie',
    'vehicle.production': 'Produktion',
    'vehicle.history': 'Historischer Kontext',
    'vehicle.facts': 'Bekannte Fakten & Kuriositäten',
    'vehicle.guide': 'Museumsführer',
    'compare.title': 'Technischer Vergleich',
    'compare.desc': 'Wählen Sie zwei Fahrzeuge aus unserem Archiv aus, um eine KI-gestützte Analyse und einen historischen Vergleich durchzuführen.',
    'compare.run': 'KI-Vergleich starten',
    'compare.analysis': 'Analyse des Kurators',
    'compare.primary': 'Haupt-Exponat',
    'compare.secondary': 'Zweit-Exponat'
  },
  es: {
    'nav.factories': 'Fábricas',
    'nav.collection': 'Colección',
    'nav.compare': 'Comparar',
    'nav.museum': 'URSS',
    'app.logo.title': 'Autos de la URSS',
    'app.logo.subtitle': '',
    'hero.title': 'EL MUSEO DE',
    'hero.subtitle': 'AUTOS SOVIÉTICOS',
    'hero.badge': 'Preservando el patrimonio soviético',
    'hero.desc': 'Un sitio web sobre los automóviles de pasajeros soviéticos de 1945 a 1991',
    'hero.btn.enter': 'Entrar a la colección',
    'hero.btn.compare': 'Comparar modelos',
    'gallery.badge': 'La Galería',
    'gallery.title': 'Exposiciones destacadas',
    'gallery.all': 'Toda la colección',
    'factories.badge': 'Centros industriales',
    'factories.title': 'Fábricas de automóviles',
    'factories.view': 'Ver archivo de la planta',
    'timeline.badge': 'Evolución del diseño',
    'timeline.title': 'Cronología industrial',
    'footer.motto': 'Autos de la URSS • 1945–1991',
    'footer.curated': 'Curado por AI Studio Gemini • Archivo histórico 1.0.3',
    'footer.rights': 'Todos los derechos reservados al Pueblo y a la Historia.',
    'search.placeholder': 'Buscar por nombre, etiquetas o descripción...',
    'search.all_factories': 'Todas las fábricas',
    'search.all_types': 'Todos los tipos',
    'vehicle.engine': 'Motor',
    'vehicle.power': 'Potencia',
    'vehicle.body': 'Carrocería',
    'vehicle.production': 'Producción',
    'vehicle.history': 'Contexto histórico',
    'vehicle.facts': 'Hechos conocidos y curiosidades',
    'vehicle.guide': 'Guía del museo',
    'compare.title': 'Confrontación técnica',
    'compare.desc': 'Selecciona dos vehículos de nuestro archivo para realizar un análisis de IA y una comparación histórica detallada.',
    'compare.run': 'Iniciar comparación de IA',
    'compare.analysis': 'Análisis del curador',
    'compare.primary': 'Exposición principal',
    'compare.secondary': 'Exposición secundaria'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const getInitialLanguage = (): Language => {
    const match = location.pathname.match(/^\/(en|ru|de|es)(\/|$)/);
    if (match) {
      return match[1] as Language;
    }
    return 'ru';
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    const match = location.pathname.match(/^\/(en|ru|de|es)(\/|$)/);
    if (match) {
      const routeLang = match[1] as Language;
      if (routeLang !== language) {
        setLanguageState(routeLang);
      }
    } else {
      const targetPath = `/${language}${location.pathname}`;
      navigate({
        pathname: targetPath,
        search: location.search,
        hash: location.hash
      }, { replace: true });
    }
  }, [location.pathname, language, navigate]);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    const match = location.pathname.match(/^\/(en|ru|de|es)(.*)/);
    if (match) {
      const remainingPath = match[2];
      navigate({
        pathname: `/${newLang}${remainingPath}`,
        search: location.search,
        hash: location.hash
      }, { replace: false });
    } else {
      navigate({
        pathname: `/${newLang}${location.pathname}`,
        search: location.search,
        hash: location.hash
      }, { replace: false });
    }
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    const titles_map = {
      ru: 'Автомобили СССР',
      de: 'Autos der UdSSR',
      es: 'Autos de la URSS',
      en: 'Cars of the USSR'
    };
    document.title = titles_map[language] || 'Cars of the USSR';
  }, [language]);

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
