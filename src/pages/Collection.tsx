import { useState } from "react";
import { VEHICLES } from "../data/vehicles";
import { FACTORIES } from "../data/factories";
import VehicleCard from "../components/VehicleCard";
import { Search, Filter, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { VEHICLE_TRANSLATIONS, FACTORY_TRANSLATIONS } from "../data/translations_de_es";

const BODY_TYPE_TRANSLATIONS: Record<string, Record<string, string>> = {
  de: {
    "sedan": "Limousine",
    "wagon": "Kombi",
    "hatchback": "Steilheck",
    "4x4": "Geländewagen (4x4)",
    "limousine": "Luxus-Limousine",
    "microcar": "Kleinstwagen",
    "van": "Kastenwagen",
    "pickup": "Pickup",
    "liftback": "Fließheck",
    "convertible": "Cabriolet",
    "coupe": "Coupé",
    "all": "Alle Typen"
  },
  es: {
    "sedan": "Sedán",
    "wagon": "Familiar (Wagon)",
    "hatchback": "Hatchback",
    "4x4": "Todoterreno (4x4)",
    "limousine": "Limusina de lujo",
    "microcar": "Microcoche",
    "van": "Furgoneta",
    "pickup": "Pickup",
    "liftback": "Liftback",
    "convertible": "Descapotable (Cabrio)",
    "coupe": "Cupé",
    "all": "Todos los tipos"
  },
  ru: {
    "sedan": "Седан",
    "wagon": "Универсал",
    "hatchback": "Хэтчбек",
    "4x4": "Внедорожник (4x4)",
    "limousine": "Лимузин",
    "microcar": "Микролитражка",
    "van": "Фургон",
    "pickup": "Пикап",
    "liftback": "Лифтбек",
    "convertible": "Кабриолет",
    "coupe": "Купе",
    "all": "Все типы"
  },
  en: {
    "sedan": "Sedan",
    "wagon": "Station Wagon",
    "hatchback": "Hatchback",
    "4x4": "4x4 Off-roader",
    "limousine": "Limousine",
    "microcar": "Microcar",
    "van": "Van",
    "pickup": "Pickup",
    "liftback": "Liftback",
    "convertible": "Convertible",
    "coupe": "Coupe",
    "all": "All Types"
  }
};

export default function Collection() {
  const { language, t } = useLanguage();
  const [search, setSearch] = useState("");
  const [selectedFactory, setSelectedFactory] = useState<string>("All");
  const [selectedType, setSelectedType] = useState<string>("All");

  const types = ["All", ...new Set(VEHICLES.map(v => v.body_type))];
  const factories = ["All", ...FACTORIES.map(f => f.name)];

  const filteredVehicles = VEHICLES.filter(v => {
    const s = search.toLowerCase();
    const trans = (language === 'de' || language === 'es') ? VEHICLE_TRANSLATIONS[v.id]?.[language] : null;

    const displayName = (trans?.display_name || (language === 'ru' ? (v.display_name_ru || v.display_name) : v.display_name)).toLowerCase();
    const description = (trans?.description || (language === 'ru' ? (v.description_ru || v.description) : v.description)).toLowerCase();
    const tags = (trans?.tags || (language === 'ru' && v.tags_ru ? v.tags_ru : v.tags)).map(tag => tag.toLowerCase());
    
    const matchesSearch = displayName.includes(s) || 
                          description.includes(s) ||
                          tags.some(tag => tag.includes(s));
    const matchesFactory = selectedFactory === "All" || 
                           v.factory.toLowerCase() === selectedFactory.toLowerCase() ||
                           (selectedFactory.toLowerCase() === "azlk" && v.factory.toLowerCase() === "mzma") ||
                           v.factory.toLowerCase().includes(selectedFactory.toLowerCase());
    const matchesType = selectedType === "All" || v.body_type === selectedType;
    return matchesSearch && matchesFactory && matchesType;
  });

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <header className="mb-12">
          <span className="text-accent text-[10px] font-bold uppercase tracking-widest mb-2 block">
            {language === 'ru' ? 'Просмотр архивов' : (language === 'de' ? 'Archiv durchsuchen' : (language === 'es' ? 'Buscar en el archivo' : 'Archive Browse'))}
          </span>
          <h1 className="font-display text-5xl font-black mb-4 uppercase">
            {language === 'ru' ? 'Полная коллекция' : (language === 'de' ? 'Vollständige Sammlung' : (language === 'es' ? 'Colección completa' : 'Complete Collection'))}
          </h1>
          <p className="text-muted max-w-2xl font-light">
            {language === 'ru' 
              ? `Исследуйте нашу обширную базу данных из ${VEHICLES.length} уникальных советских автомобилей. Поиск по типу, заводу или исторической значимости.`
              : language === 'de'
              ? `Entdecken Sie unsere umfangreiche Datenbank mit ${VEHICLES.length} einzigartigen sowjetischen Automobilen. Suchen Sie nach Typ, Werk oder historischer Bedeutung.`
              : language === 'es'
              ? `Explore nuestra amplia base de datos de ${VEHICLES.length} automóviles soviéticos únicos. Busque por tipo, fábrica o importancia histórica.`
              : `Search through our extensive database of ${VEHICLES.length} unique Soviet automobiles. Filtered by type, factory, or historical significance.`}
          </p>
        </header>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="flex-grow relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted w-4 h-4" />
            <input 
              type="text" 
              placeholder={t('search.placeholder')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-paper border border-white/10 rounded-xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-gold transition-colors"
            />
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
            <select 
              value={selectedFactory}
              onChange={(e) => setSelectedFactory(e.target.value)}
              className="bg-paper border border-white/10 rounded-xl px-6 py-4 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-gold min-w-[160px]"
            >
              <option value="All">{t('search.all_factories')}</option>
              {FACTORIES.map(f => {
                const fTrans = (language === 'de' || language === 'es') ? FACTORY_TRANSLATIONS[f.id]?.[language] : null;
                const fName = fTrans?.name || (language === 'ru' ? (f.name_ru || f.name) : f.name);
                return <option key={f.id} value={f.id}>{fName}</option>;
              })}
            </select>
            
            <select 
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-paper border border-white/10 rounded-xl px-6 py-4 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-gold min-w-[160px]"
            >
              <option value="All">{t('search.all_types')}</option>
              {types.filter(t => t !== "All").map(type => (
                <option key={type} value={type}>
                  {BODY_TYPE_TRANSLATIONS[language]?.[type] || type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredVehicles.map(vehicle => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </AnimatePresence>
        </div>

        {filteredVehicles.length === 0 && (
          <div className="py-32 text-center">
            <div className="bg-paper inline-flex p-8 rounded-full mb-6">
              <Search className="w-12 h-12 text-muted opacity-20" />
            </div>
            <h3 className="font-display text-2xl mb-2">
              {language === 'ru' ? 'Архивы не найдены' : (language === 'de' ? 'Keine Archive gefunden' : (language === 'es' ? 'No se encontraron archivos' : 'No Archives Found'))}
            </h3>
            <p className="text-muted">
              {language === 'ru' 
                ? 'Настройте фильтры или попробуйте другой поисковый запрос.' 
                : language === 'de'
                ? 'Passen Sie Ihre Filter an oder versuchen Sie es mit einem anderen Suchbegriff.'
                : language === 'es'
                ? 'Ajuste sus filtros o pruebe con otro término de búsqueda.'
                : 'Adjust your filters or try a different search term.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
