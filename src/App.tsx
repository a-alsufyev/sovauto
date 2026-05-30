/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Factories from "./pages/Factories";
import FactoryDetail from "./pages/FactoryDetail";
import VehicleDetail from "./pages/VehicleDetail";
import Compare from "./pages/Compare";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg relative selection:bg-gold selection:text-bg">
        <div className="grain" />
        <Navigation />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vehicles" element={<Collection />} />
            <Route path="/factories" element={<Factories />} />
            <Route path="/plant/:id" element={<FactoryDetail />} />
            <Route path="/car/:id" element={<VehicleDetail />} />
            <Route path="/compare" element={<Compare />} />
          </Routes>
        </main>
        
        <footer className="border-t border-white/5 py-12 px-4 bg-paper/50">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <span className="font-display text-lg font-bold tracking-tight block leading-none">SOVIET AI</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted block">Museum & Archive • 1945–1991</span>
            </div>
            <div className="text-[10px] text-muted uppercase tracking-widest text-center md:text-right">
              Curated by AI Studio Gemini • Historical Archive 1.0.3<br />
              All rights reserved to the People and History.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
