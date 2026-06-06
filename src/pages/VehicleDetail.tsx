import { useParams, Link } from "react-router-dom";
import { VEHICLES } from "../data/vehicles";
import { motion } from "motion/react";
import { Gauge, Settings, Calendar, Info, Share2, Printer, ChevronLeft, Layers } from "lucide-react";
import ChatInterface from "../components/ChatInterface";
import { useLanguage } from "../contexts/LanguageContext";
import { VEHICLE_TRANSLATIONS } from "../data/translations_de_es";

export default function VehicleDetail() {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const vehicle = VEHICLES.find(v => v.id === id);

  if (!vehicle) {
    return (
      <div className="pt-32 text-center h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-display mb-4">
          {language === 'ru' ? 'Экспонат не найден' : (language === 'de' ? 'Exponat nicht gefunden' : (language === 'es' ? 'Exposición no encontrada' : 'Exhibit Not Found'))}
        </h1>
        <Link to={`/${language}/vehicles`} className="text-gold uppercase tracking-widest text-xs">
          {language === 'ru' ? 'Назад к коллекции' : (language === 'de' ? 'Zurück zur Sammlung' : (language === 'es' ? 'Volver a la colección' : 'Back to Collection'))}
        </Link>
      </div>
    );
  }

  const trans = (language === 'de' || language === 'es') ? VEHICLE_TRANSLATIONS[vehicle.id]?.[language] : null;
  const displayName = trans?.display_name || (language === 'ru' ? (vehicle.display_name_ru || vehicle.display_name) : vehicle.display_name);
  const description = trans?.description || (language === 'ru' ? (vehicle.description_ru || vehicle.description) : vehicle.description);
  const bodyType = trans?.body_type || (language === 'ru' ? (vehicle.body_type_ru || vehicle.body_type) : vehicle.body_type);
  const classLabel = trans?.class || (language === 'ru' ? (vehicle.class_ru || vehicle.class) : vehicle.class);
  const facts = trans?.facts || (language === 'ru' ? (vehicle.facts_ru || vehicle.facts) : vehicle.facts);

  const getHpLabel = (lang: string) => {
    switch(lang) {
      case 'ru': return 'л.с.';
      case 'de': return 'PS';
      case 'es': return 'CV';
      default: return 'HP';
    }
  };

  const getPresentLabel = (lang: string) => {
    switch(lang) {
      case 'ru': return 'Н.В.';
      case 'de': return 'Heute';
      case 'es': return 'Pres.';
      default: return 'Now';
    }
  };

  const getInitialMessage = (lang: string, nameText: string) => {
    switch(lang) {
      case 'ru':
        return `Я стою рядом с ${nameText}. Что бы вы хотели узнать об истории, инженерии или роли этого автомобиля в советской жизни?`;
      case 'de':
        return `Ich stehe neben dem ${nameText}. Was möchten Sie über die Geschichte, Technik oder die Rolle dieses Autos im sowjetischen Leben erfahren?`;
      case 'es':
        return `Estoy junto al ${nameText}. ¿Qué le gustaría saber sobre la historia, ingeniería o el papel de este automóvil en la vida soviética?`;
      default:
        return `I am standing with the ${nameText}. What would you like to know about its history, engineering, or role in Soviet life?`;
    }
  };

  const getPreservationTitle = (lang: string) => {
    switch(lang) {
      case 'ru': return 'Примечание';
      case 'de': return 'Konservierungshinweis';
      case 'es': return 'Nota de preservación';
      default: return 'Preservation Note';
    }
  };

  const getPreservationText = (lang: string) => {
    switch(lang) {
      case 'ru':
        return 'Все характеристики основаны на официальных документах ГАИ и заводских чертежах той эпохи. Возможны отклонения из-за особенностей производства в разных регионах СССР.';
      case 'de':
        return 'Alle technischen Daten basieren auf offiziellen sowjetischen Dokumenten und Werksunterlagen jener Epoche. Aufgrund lokaler Produktionsunterschiede in der UdSSR können Abweichungen auftreten.';
      case 'es':
        return 'Todas las especificaciones se basan en documentos oficiales e instrucciones de fábrica de la época. Pueden existir variaciones debido a diferencias de producción locales en la URSS.';
      default:
        return 'All specifications are based on official GAII documents and factory blue-prints from the era. Some variations may exist due to local production differences across the USSR.';
    }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <img 
            src={vehicle.images[0] || `https://images.unsplash.com/photo-1549490349-86431f221c2e?q=80&w=2000&auto=format&fit=crop`}
            className="w-full h-full object-cover grayscale opacity-40"
            alt={displayName}
          />
          <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/20 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pb-12">
          <Link to={`/${language}/vehicles`} className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors text-xs uppercase tracking-widest mb-8">
            <ChevronLeft size={14} /> {language === 'ru' ? 'Назад к архивам' : (language === 'de' ? 'Zurück zum Archiv' : (language === 'es' ? 'Volver al archivo' : 'Back to Archives'))}
          </Link>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="bg-accent/20 border border-accent/30 text-accent px-3 py-1 text-[10px] uppercase font-bold tracking-[0.2em] rounded-sm mb-4 inline-block">
                {vehicle.factory} • {vehicle.family}
              </span>
              <h1 className="font-display text-5xl md:text-8xl font-black uppercase museum-text-gradient">
                {displayName}
              </h1>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all text-muted hover:text-white">
                <Share2 size={18} />
              </button>
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all text-muted hover:text-white">
                <Printer size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-12">
              <div>
                <h3 className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-6 flex items-center gap-2">
                  <Info size={14} /> {t('vehicle.history')}
                </h3>
                <p className="text-xl text-gray-300 font-light leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: t('vehicle.engine'), value: vehicle.engine[0], icon: Settings },
                  { label: t('vehicle.power'), value: `${vehicle.power_hp[0]} ${getHpLabel(language)}`, icon: Gauge },
                  { label: t('vehicle.body'), value: bodyType, icon: Layers },
                  { label: t('vehicle.production'), value: `${vehicle.years.start}–${vehicle.years.end || getPresentLabel(language)}`, icon: Calendar },
                ].map((stat, i) => (
                  <div key={i} className="bg-paper p-6 border border-white/5 rounded-xl">
                    <stat.icon size={16} className="text-gold mb-4" />
                    <span className="block text-[10px] text-muted uppercase tracking-widest mb-1">{stat.label}</span>
                    <span className="block text-sm font-bold uppercase">{stat.value}</span>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-6">{t('vehicle.facts')}</h3>
                <ul className="space-y-4">
                  {facts.map((fact, i) => (
                    <li key={i} className="flex gap-4 items-start p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="text-gray-400 font-light leading-relaxed">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {(trans?.tags || (language === 'ru' && vehicle.tags_ru ? vehicle.tags_ru : vehicle.tags)).map(tag => (
                  <span key={tag} className="px-3 py-1 bg-paper border border-white/10 rounded-full text-[10px] uppercase font-mono text-muted tracking-widest hover:text-gold hover:border-gold transition-all cursor-default">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* AI Sidebar */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-8">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-6">{t('vehicle.guide')}</h3>
                  <ChatInterface 
                    contextId={vehicle.id} 
                    initialMessage={getInitialMessage(language, displayName)}
                  />
                </div>
                
                <div className="bg-accent/10 border border-accent/20 p-6 rounded-2xl">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">{getPreservationTitle(language)}</h4>
                  <p className="text-xs text-muted leading-relaxed italic">
                    {getPreservationText(language)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
