import { Link } from "react-router-dom";
import { Factory } from "../types";
import { motion } from "motion/react";
import { MapPin, Calendar } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface Props {
  factory: Factory;
}

export default function FactoryCard({ factory }: Props) {
  const { language, t } = useLanguage();
  const name = language === 'ru' ? (factory.name_ru || factory.name) : factory.name;
  const description = language === 'ru' ? (factory.description_ru || factory.description) : factory.description;
  const city = language === 'ru' ? (factory.city_ru || factory.city) : factory.city;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="bg-paper p-8 border border-white/5 relative group hover:border-gold/30 transition-colors"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <span className="text-6xl font-display font-black italic">{factory.name}</span>
      </div>

      <h3 className="font-display text-2xl mb-2 relative z-10">{name}</h3>
      <p className="text-sm text-muted mb-6 line-clamp-3 relative z-10 max-w-xs">{description}</p>
      
      <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest text-muted border-t border-white/5 pt-6">
        <div className="flex items-center gap-2">
          <MapPin size={12} className="text-accent" />
          <span>{city}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={12} className="text-accent" />
          <span>{factory.years.start} – {factory.years.end || (language === 'ru' ? 'Наст. время' : 'Present')}</span>
        </div>
      </div>

      <Link 
        to={`/${language}/plant/${factory.id}`}
        className="mt-8 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-gold hover:text-white transition-colors"
      >
        {t('factories.view')} →
      </Link>
    </motion.div>
  );
}
