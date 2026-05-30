import { Link } from "react-router-dom";
import { Vehicle } from "../types";
import { motion } from "motion/react";
import { ArrowUpRight, Gauge, Settings } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface Props {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: Props) {
  const { language, t } = useLanguage();
  
  const displayName = language === 'ru' ? (vehicle.display_name_ru || vehicle.display_name) : vehicle.display_name;
  const description = language === 'ru' ? (vehicle.description_ru || vehicle.description) : vehicle.description;
  const bodyType = language === 'ru' ? (vehicle.body_type_ru || vehicle.body_type) : vehicle.body_type;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="museum-card group h-full flex flex-col"
    >
      <div className="relative aspect-video overflow-hidden bg-gray-900">
        <img 
          src={vehicle.images[0] || `https://images.unsplash.com/photo-1549490349-86431f221c2e?q=80&w=800&auto=format&fit=crop`}
          alt={displayName}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-60 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal"
        />
        <div className="absolute top-4 left-4">
          <span className="text-[10px] font-mono bg-accent px-2 py-1 text-white uppercase tracking-wider rounded-xs">
            {vehicle.factory}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display text-xl group-hover:text-gold transition-colors">
            {displayName}
          </h3>
          <span className="text-xs text-muted font-mono">{vehicle.years.start}–{vehicle.years.end || 'Now'}</span>
        </div>
        
        <p className="text-sm text-muted line-clamp-2 mb-6 flex-grow">
          {description}
        </p>

        <div className="flex items-center gap-4 border-t border-white/5 pt-4 mt-auto">
          <div className="flex items-center gap-1.5 text-[10px] text-muted uppercase tracking-wider">
            <Gauge size={10} className="text-gold" />
            <span>{vehicle.power_hp[0]} {language === 'ru' ? 'л.с.' : 'HP'}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-muted uppercase tracking-wider">
            <Settings size={10} className="text-gold" />
            <span>{bodyType}</span>
          </div>
          
          <Link 
            to={`/car/${vehicle.id}`}
            className="ml-auto w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-bg hover:border-gold transition-all"
          >
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
