import { BrowserRouter, Routes, Route } from 'react-router';
import { MessageCircle } from 'lucide-react';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Sections
import HeroSection from './components/sections/HeroSection';
import StatsSection from './components/sections/StatsSection';
import ServicesSection from './components/sections/ServicesSection';
import ProcessSection from './components/sections/ProcessSection';
import IntegrationsSection from './components/sections/IntegrationsSection';
import BenefitsSection from './components/sections/BenefitsSection';
import ContactSection from './components/sections/ContactSection';

// Service pages
import ERPCRMPage from './components/services/ERPCRMPage';
import CloudPage from './components/services/CloudPage';
import CiberseguridadPage from './components/services/CiberseguridadPage';
import DesarrolloPage from './components/services/DesarrolloPage';
import EcommercePage from './components/services/EcommercePage';
import PesajePage from './components/services/PesajePage';
import MicrosipPage from './components/services/MicrosipPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <IntegrationsSection />
      <BenefitsSection />
      <ContactSection />
      <Footer />

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/528182722163"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl shadow-green-500/30 transition-all hover:scale-110 z-50 flex items-center justify-center group"
        aria-label="Chatea con nosotros por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-medium">
          Chatea con nosotros
        </span>
      </a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios/erp-crm" element={<ERPCRMPage />} />
        <Route path="/servicios/cloud" element={<CloudPage />} />
        <Route path="/servicios/ciberseguridad" element={<CiberseguridadPage />} />
        <Route path="/servicios/desarrollo" element={<DesarrolloPage />} />
        <Route path="/servicios/ecommerce" element={<EcommercePage />} />
        <Route path="/servicios/pesaje" element={<PesajePage />} />
        <Route path="/servicios/microsip" element={<MicrosipPage />} />
      </Routes>
    </BrowserRouter>
  );
}
