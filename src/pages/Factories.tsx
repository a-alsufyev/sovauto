import { FACTORIES } from "../data/factories";
import FactoryCard from "../components/FactoryCard";
import { Landmark } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Factories() {
  const { language, t } = useLanguage();
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <header className="mb-16 max-w-2xl">
          <Landmark className="text-accent w-10 h-10 mb-6 opacity-50" />
          <h1 className="font-display text-5xl font-black uppercase mb-4">{t('nav.factories')}</h1>
          <p className="text-muted font-light text-lg">
            {language === 'ru' 
              ? 'Советская автомобильная промышленность строилась вокруг мощных государственных заводов, каждый из которых имел свою нишу — от роскошных лимузинов до суровых военных внедорожников.'
              : 'The Soviet automotive industry was built around massive state plants, each with its own niche—from luxury limousines to rugged military 4x4s.'}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FACTORIES.map(factory => (
            <FactoryCard key={factory.id} factory={factory} />
          ))}
        </div>
      </div>
    </div>
  );
}
