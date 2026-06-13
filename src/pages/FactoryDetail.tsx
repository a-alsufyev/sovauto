import { useParams, Link } from "react-router-dom";
import { FACTORIES } from "../data/factories";
import { VEHICLES } from "../data/vehicles";
import VehicleCard from "../components/VehicleCard";
import { Landmark, MapPin, Calendar, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { FACTORY_TRANSLATIONS } from "../data/translations_de_es";

export default function FactoryDetail() {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const factory = FACTORIES.find(f => f.id === id);
  const factoryVehicles = VEHICLES.filter(v => {
    if (!factory) return false;
    const vFactory = v.factory.toLowerCase();
    const fId = factory.id.toLowerCase();
    const fName = factory.name.toLowerCase();
    return vFactory === fName || 
           vFactory.includes(fId) || 
           (fId === "azlk" && vFactory === "mzma");
  });

  if (!factory) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-4xl font-display mb-4">
          {language === 'ru' ? 'Архив завода не найден' : (language === 'de' ? 'Werksarchiv nicht gefunden' : (language === 'es' ? 'Archivo de la planta no encontrado' : 'Plant Archive Not Found'))}
        </h1>
        <Link to={`/${language}/factories`} className="text-gold uppercase tracking-widest text-xs">
          {language === 'ru' ? 'К списку заводов' : (language === 'de' ? 'Zurück zu den Werken' : (language === 'es' ? 'Volver a las fábricas' : 'Back to Factories'))}
        </Link>
      </div>
    );
  }

  const trans = (language === 'de' || language === 'es') ? FACTORY_TRANSLATIONS[factory.id]?.[language] : null;
  const name = trans?.name || (language === 'ru' ? (factory.name_ru || factory.name) : factory.name);
  const description = trans?.description || (language === 'ru' ? (factory.description_ru || factory.description) : factory.description);
  const city = trans?.city || (language === 'ru' ? (factory.city_ru || factory.city) : factory.city);

  return (
    <div className="pt-20">
      {/* Factory Header */}
      <section className="py-24 bg-paper/50 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
          <Landmark size={400} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link to={`/${language}/factories`} className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors text-xs uppercase tracking-widest mb-12">
            <ArrowLeft size={14} /> {language === 'ru' ? 'Индустриальная карта' : (language === 'de' ? 'Industriekarte' : (language === 'es' ? 'Mapa industrial' : 'Industrial Map'))}
          </Link>
          
          <div className="max-w-3xl">
            <h1 className="font-display text-6xl md:text-8xl font-black mb-6 museum-text-gradient">{name}</h1>
            <p className="text-xl text-muted font-light mb-10 leading-relaxed">{description}</p>
            
            <div className="flex flex-wrap gap-8 items-center text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-accent" />
                <span>
                  {language === 'ru' ? 'ШТАБ' : (language === 'de' ? 'HAUPTSITZ' : (language === 'es' ? 'SEDE' : 'HQ'))}: {city}, {language === 'ru' ? 'СССР' : 'USSR'}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar size={16} className="text-accent" />
                <span>
                  {language === 'ru' ? 'РАБОТА' : (language === 'de' ? 'BETRIEB' : (language === 'es' ? 'OPERATIVO' : 'OPERATIONAL'))}: {factory.years.start} – {factory.years.end || (language === 'ru' ? 'НАСТ. ВРЕМЯ' : (language === 'de' ? 'HEUTE' : (language === 'es' ? 'PRESENTE' : 'PRESENT')))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Fleet */}
      <section className="py-24 px-4 bg-bg">
        <div className="container mx-auto">
          <div className="mb-12">
            <span className="text-accent text-[10px] font-bold uppercase tracking-widest mb-2 block">
              {language === 'ru' ? 'История производства' : (language === 'de' ? 'Produktionsgeschichte' : (language === 'es' ? 'Historia de producción' : 'Production History'))}
            </span>
            <h2 className="font-display text-4xl font-bold">
              {language === 'ru' ? 'Стандартный парк' : (language === 'de' ? 'Verfügbare Flotte' : (language === 'es' ? 'Flota estándar' : 'Standard Fleet'))}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {factoryVehicles.map(vehicle => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>

          {factoryVehicles.length === 0 && (
            <div className="py-20 text-center opacity-40">
              <p className="text-sm uppercase tracking-widest">
                {language === 'ru' ? 'В основном архиве нет автомобилей, приписанных именно к этому заводу.' : (language === 'de' ? 'Im Hauptarchiv sind diesem Werk keine spezifischen Fahrzeuge zuordnung.' : (language === 'es' ? 'No hay vehículos asignados a esta planta en el archivo principal.' : 'No vehicles specifically tagged to this plant in the main archive.'))}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
