import { motion } from "motion/react";
import { VEHICLES } from "../data/vehicles";
import { FACTORIES } from "../data/factories";
import VehicleCard from "../components/VehicleCard";
import FactoryCard from "../components/FactoryCard";
import Timeline from "../components/Timeline";
import { ArrowRight, History, Search as SearchIcon, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  const featuredVehicles = VEHICLES.slice(0, 3);
  const featuredFactories = FACTORIES.slice(0, 3);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-4">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-bg to-bg z-10" />
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 2 }}
            className="w-full h-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1549490349-86431f221c2e?q=80&w=2000&auto=format&fit=crop" 
              alt="Background" 
              className="w-full h-full object-cover grayscale"
            />
          </motion.div>
        </div>

        <div className="container relative z-20 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-4 block">{t('hero.badge')}</span>
            <h1 className="font-display text-5xl md:text-8xl font-black mb-8 leading-[0.9] museum-text-gradient uppercase">
              {t('hero.title')} <br />
              <span className="text-gold italic">{t('hero.subtitle')}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              {t('hero.desc')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/vehicles"
                className="px-8 py-4 bg-gold text-bg font-bold uppercase text-xs tracking-widest hover:bg-white transition-all flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                {t('hero.btn.enter')} <ArrowRight size={16} />
              </Link>
              <Link 
                to="/compare"
                className="px-8 py-4 bg-paper/50 backdrop-blur-md border border-white/10 text-white font-bold uppercase text-xs tracking-widest hover:bg-white/10 transition-all w-full sm:w-auto justify-center"
              >
                {t('hero.btn.compare')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 px-4 bg-bg">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-accent text-[10px] font-bold uppercase tracking-widest mb-2 block">{t('gallery.badge')}</span>
              <h2 className="font-display text-4xl font-bold">{t('gallery.title')}</h2>
            </div>
            <Link to="/vehicles" className="text-xs uppercase tracking-widest text-gold hover:text-white flex items-center gap-2 group">
              {t('gallery.all')} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVehicles.map(vehicle => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      {/* Factory Grid */}
      <section className="py-24 px-4 bg-paper/30 border-y border-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent text-[10px] font-bold uppercase tracking-widest mb-2 block">{t('factories.badge')}</span>
            <h2 className="font-display text-4xl font-bold">{t('factories.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {featuredFactories.map(factory => (
              <FactoryCard key={factory.id} factory={factory} />
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline Brief */}
      <section className="py-24 px-4 bg-bg border-t border-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent text-[10px] font-bold uppercase tracking-widest mb-2 block">{t('timeline.badge')}</span>
            <h2 className="font-display text-4xl font-bold">{t('timeline.title')}</h2>
          </div>
          <Timeline />
          {/* ... */}
        </div>
      </section>
    </div>
  );
}
