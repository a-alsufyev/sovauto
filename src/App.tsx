/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Factories from "./pages/Factories";
import FactoryDetail from "./pages/FactoryDetail";
import VehicleDetail from "./pages/VehicleDetail";
import Compare from "./pages/Compare";
import { useLanguage } from "./contexts/LanguageContext";

export default function App() {
  const { t } = useLanguage();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-bg relative selection:bg-gold selection:text-bg">
      <div className="grain" />
      <Navigation />
      
      <main>
        <Routes>
          <Route path="/:lang" element={<Home />} />
          <Route path="/:lang/vehicles" element={<Collection />} />
          <Route path="/:lang/factories" element={<Factories />} />
          <Route path="/:lang/plant/:id" element={<FactoryDetail />} />
          <Route path="/:lang/car/:id" element={<VehicleDetail />} />
          <Route path="/:lang/compare" element={<Compare />} />
        </Routes>
      </main>
      
      <footer className="border-t border-white/5 py-12 px-4 bg-paper/50">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-display text-lg font-bold tracking-tight block leading-none uppercase">{t('app.logo.title')}</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted block">1945–1991</span>
          </div>
          <div className="text-[10px] text-muted uppercase tracking-widest text-center md:text-right">
            {t('footer.curated_prefix')}
            <a 
              href="https://web-a.ru/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gold hover:text-white hover:underline transition-colors normal-case"
            >
              https://web-a.ru/
            </a>
            {t('footer.curated_suffix')}<br />
            {t('footer.rights')}
          </div>
        </div>
      </footer>
    </div>
  );
}
