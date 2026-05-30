import { useState } from "react";
import { VEHICLES } from "../data/vehicles";
import { compareVehiclesAI } from "../services/openaiService";
import { Scale, Bot, Loader2, RefreshCcw, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ReactMarkdown from "react-markdown";
import { useLanguage } from "../contexts/LanguageContext";

export default function Compare() {
  const { language, t } = useLanguage();
  const [vehicle1, setVehicle1] = useState<string>("");
  const [vehicle2, setVehicle2] = useState<string>("");
  const [comparison, setComparison] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const v1Data = VEHICLES.find(v => v.id === vehicle1);
  const v2Data = VEHICLES.find(v => v.id === vehicle2);

  const handleCompare = async () => {
    if (!vehicle1 || !vehicle2) return;
    setIsLoading(true);
    setComparison("");
    const result = await compareVehiclesAI(vehicle1, vehicle2, language);
    setComparison(result);
    setIsLoading(false);
  };

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <header className="text-center mb-16">
          <Scale className="text-accent w-12 h-12 mx-auto mb-6 opacity-50" />
          <h1 className="font-display text-5xl font-black uppercase mb-4">{t('compare.title')}</h1>
          <p className="text-muted max-w-xl mx-auto font-light">
            {t('compare.desc')}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Selector 1 */}
          <div className="bg-paper p-8 rounded-2xl border border-white/5 relative">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted block mb-4">{t('compare.primary')}</label>
            <select 
              value={vehicle1}
              onChange={(e) => setVehicle1(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-gold transition-colors text-sm"
            >
              <option value="">{language === 'ru' ? 'Выберите автомобиль...' : 'Select a vehicle...'}</option>
              {VEHICLES.map(v => (
                <option key={v.id} value={v.id}>
                  {language === 'ru' ? (v.display_name_ru || v.display_name) : v.display_name} ({v.factory})
                </option>
              ))}
            </select>
          </div>

          {/* Selector 2 */}
          <div className="bg-paper p-8 rounded-2xl border border-white/5 relative">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted block mb-4">{t('compare.secondary')}</label>
            <select 
              value={vehicle2}
              onChange={(e) => setVehicle2(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-gold transition-colors text-sm"
            >
              <option value="">{language === 'ru' ? 'Выберите автомобиль...' : 'Select a vehicle...'}</option>
              {VEHICLES.map(v => (
                <option key={v.id} value={v.id}>
                  {language === 'ru' ? (v.display_name_ru || v.display_name) : v.display_name} ({v.factory})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-center mb-20">
          <button
            onClick={handleCompare}
            disabled={!vehicle1 || !vehicle2 || isLoading}
            className="group px-12 py-5 bg-gold text-bg font-bold uppercase text-sm tracking-widest rounded-full hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
          >
            {isLoading ? <Loader2 className="animate-spin" /> : <Bot />}
            {t('compare.run')}
          </button>
        </div>

        {/* Results Area */}
        <AnimatePresence>
          {(isLoading || comparison) && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="p-12 bg-linear-to-br from-paper to-bg border border-white/10 rounded-3xl shadow-3xl">
                <div className="flex items-center gap-4 mb-10 border-b border-white/5 pb-6">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <Bot className="text-gold" />
                  </div>
                  <h3 className="font-display text-2xl">{t('compare.analysis')}</h3>
                </div>

                {isLoading ? (
                  <div className="space-y-6 py-10">
                    <div className="h-4 bg-white/5 rounded-full w-3/4 animate-pulse" />
                    <div className="h-4 bg-white/5 rounded-full w-full animate-pulse" />
                    <div className="h-4 bg-white/5 rounded-full w-2/3 animate-pulse" />
                  </div>
                ) : (
                  <div className="markdown-body prose prose-invert prose-sm max-w-none prose-headings:font-display prose-headings:text-gold prose-p:text-gray-300 prose-p:font-light prose-p:leading-relaxed">
                    <ReactMarkdown>{comparison}</ReactMarkdown>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
