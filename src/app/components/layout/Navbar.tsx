import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import {
  Cloud, Shield, Database, ShoppingCart, Scale, Code, Star,
  Facebook, Instagram, ChevronDown, Menu, X
} from 'lucide-react';
import logo from '../../../imports/WhatsApp_Image_2026-05-19_at_11.49.46_AM-1.jpeg';

const services = [
  { icon: Database, title: 'ERP & CRM', link: '/servicios/erp-crm' },
  { icon: Cloud, title: 'Soluciones Cloud', link: '/servicios/cloud' },
  { icon: Shield, title: 'Ciberseguridad', link: '/servicios/ciberseguridad' },
  { icon: Code, title: 'Desarrollo a Medida', link: '/servicios/desarrollo' },
  { icon: ShoppingCart, title: 'E-commerce', link: '/servicios/ecommerce' },
  { icon: Scale, title: 'Sistemas de Pesaje', link: '/servicios/pesaje' },
  { icon: Star, title: 'Microsip', link: '/servicios/microsip', special: true },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/98 shadow-md backdrop-blur-md' : 'bg-white/95 backdrop-blur-sm shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img src={logo} alt="Perform Sistemas" className="h-11 rounded" />
            <div className="text-xl font-bold tracking-tight">
              <span className="text-gray-800">Perform</span>
              <span className="text-teal-600">Sistemas</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-teal-600 font-medium transition-colors text-sm">
                Servicios
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                  >
                    {services.map(({ icon: Icon, title, link, special }) => (
                      <Link
                        key={title}
                        to={link}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                      >
                        <span className={`flex-shrink-0 ${special ? 'text-orange-400' : 'text-teal-600'}`}>
                          <Icon className={`w-4 h-4 ${special ? 'fill-orange-400' : ''}`} />
                        </span>
                        <span className="font-medium">{title}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#nosotros" className="text-gray-700 hover:text-teal-600 font-medium text-sm transition-colors">Nosotros</a>
            <a href="#contacto" className="text-gray-700 hover:text-teal-600 font-medium text-sm transition-colors">Contacto</a>

            {/* Social */}
            <div className="flex gap-2.5 border-l border-gray-200 pl-5">
              <a href="https://www.facebook.com/Perform.Sistemas/" target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-teal-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/perform.sistemas/" target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-teal-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <a
              href="#contacto"
              className="bg-teal-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-teal-700 transition-colors shadow-sm hover:shadow"
            >
              Consulta Gratis
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 py-4 space-y-1">
              <div className="pb-3 mb-2 border-b border-gray-100">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 py-2">Servicios</div>
                {services.map(({ icon: Icon, title, link, special }) => (
                  <Link
                    key={title}
                    to={link}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Icon className={`w-4 h-4 ${special ? 'text-orange-400 fill-orange-400' : 'text-teal-600'}`} />
                    <span className="font-medium text-sm">{title}</span>
                  </Link>
                ))}
              </div>
              <a href="#nosotros" className="block px-3 py-2.5 text-gray-700 hover:text-teal-600 font-medium text-sm" onClick={() => setMobileOpen(false)}>Nosotros</a>
              <a href="#contacto" className="block px-3 py-2.5 text-gray-700 hover:text-teal-600 font-medium text-sm" onClick={() => setMobileOpen(false)}>Contacto</a>
              <div className="pt-3">
                <a href="#contacto" className="block bg-teal-600 text-white px-6 py-3 rounded-full text-center text-sm font-semibold" onClick={() => setMobileOpen(false)}>
                  Consulta Gratis
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
