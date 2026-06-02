import { useState } from 'react';
import { motion } from 'motion/react';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import {
  Cloud,
  Shield,
  Database,
  ShoppingCart,
  Scale,
  Code,
  Users,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  Menu,
  X,
  Star,
  Facebook,
  Instagram,
  MessageCircle,
  ChevronDown
} from 'lucide-react';

// Service pages
import ERPCRMPage from './components/services/ERPCRMPage';
import CloudPage from './components/services/CloudPage';
import CiberseguridadPage from './components/services/CiberseguridadPage';
import DesarrolloPage from './components/services/DesarrolloPage';
import EcommercePage from './components/services/EcommercePage';
import PesajePage from './components/services/PesajePage';
import MicrosipPage from './components/services/MicrosipPage';
import logo from '../imports/WhatsApp_Image_2026-05-19_at_11.49.46_AM-1.jpeg';
import shopifyLogo from '../imports/Captura_de_pantalla_2026-05-19_154358.jpg';
import amazonLogo from '../imports/Captura_de_pantalla_2026-05-19_154434.jpg';
import mercadoLibreLogo from '../imports/Captura_de_pantalla_2026-05-19_154527.jpg';
import zincLogo from '../imports/Captura_de_pantalla_2026-05-19_154638.jpg';
import sincLogo from '../imports/Captura_de_pantalla_2026-05-19_154656.jpg';
import microsipLogo from '../imports/micros.jpg';

function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    microsip_source: ''
  });

  const services = [
    {
      icon: <Database className="w-10 h-10" />,
      title: "ERP & CRM",
      description: "Soluciones empresariales personalizadas que optimizan procesos y mejoran la gestión de relaciones con clientes",
      link: "/servicios/erp-crm"
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "Soluciones Cloud",
      description: "Migración y gestión de infraestructura en la nube para mayor escalabilidad y eficiencia",
      link: "/servicios/cloud"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Ciberseguridad",
      description: "Protección integral de datos y sistemas con las mejores prácticas de seguridad informática",
      link: "/servicios/ciberseguridad"
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Desarrollo a Medida",
      description: "Software personalizado diseñado específicamente para las necesidades de tu negocio",
      link: "/servicios/desarrollo"
    },
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: "E-commerce",
      description: "Plataformas de comercio electrónico robustas que impulsan tus ventas online",
      link: "/servicios/ecommerce"
    },
    {
      icon: <Scale className="w-10 h-10" />,
      title: "Sistemas de Pesaje",
      description: "Soluciones industriales de pesaje y etiquetado para optimizar operaciones",
      link: "/servicios/pesaje"
    },
    {
      icon: (
        <div className="flex items-center gap-2">
          <Star className="w-10 h-10 fill-orange-400 text-orange-400" />
        </div>
      ),
      title: "Microsip",
      description: "Partner Elite certificado. Implementación, capacitación y soporte del ERP líder en México",
      link: "/servicios/microsip"
    }
  ];

  const stats = [
    { number: "30+", label: "Años de Experiencia" },
    { number: "1500+", label: "Proyectos Exitosos" },
    { number: "2000+", label: "Usuarios Activos" },
    { number: "5.0", label: "Calificación de Servicio", icon: <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" /> }
  ];

  const benefits = [
    "Consultoría gratuita inicial",
    "Equipo certificado y experimentado",
    "Soporte continuo post-implementación",
    "Soluciones escalables y flexibles",
    "ROI comprobado en 6 meses",
    "Tecnologías de vanguardia"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu interés! Te contactaremos pronto.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Perform Sistemas" className="h-12" />
              <div className="text-2xl font-bold">
                <span className="text-gray-700">Perform</span>
                <span className="text-teal-600">Sistemas</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {/* Servicios Dropdown */}
              <div className="relative"
                onMouseEnter={() => setServicesMenuOpen(true)}
                onMouseLeave={() => setServicesMenuOpen(false)}
              >
                <button className="flex items-center gap-1 text-gray-700 hover:text-teal-600 transition-colors">
                  Servicios
                  <ChevronDown className="w-4 h-4" />
                </button>

                {servicesMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100">
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        to={service.link}
                        className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-teal-600 flex-shrink-0">
                            {service.title === "Microsip" ? (
                              <Star className="w-6 h-6 fill-orange-400 text-orange-400" />
                            ) : service.title === "ERP & CRM" ? (
                              <Database className="w-6 h-6" />
                            ) : service.title === "Soluciones Cloud" ? (
                              <Cloud className="w-6 h-6" />
                            ) : service.title === "Ciberseguridad" ? (
                              <Shield className="w-6 h-6" />
                            ) : service.title === "Desarrollo a Medida" ? (
                              <Code className="w-6 h-6" />
                            ) : service.title === "E-commerce" ? (
                              <ShoppingCart className="w-6 h-6" />
                            ) : (
                              <Scale className="w-6 h-6" />
                            )}
                          </div>
                          <span className="font-medium text-sm">{service.title}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <a href="#nosotros" className="text-gray-700 hover:text-teal-600 transition-colors">Nosotros</a>
              <a href="#contacto" className="text-gray-700 hover:text-teal-600 transition-colors">Contacto</a>

              {/* Social Media Icons */}
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/Perform.Sistemas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-teal-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/perform.sistemas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-teal-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>

              <a href="#contacto" className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors">
                Consulta Gratis
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-3">
              <div className="border-b border-gray-200 pb-3">
                <div className="font-semibold text-gray-900 mb-2">Servicios</div>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      to={service.link}
                      className="block text-gray-600 hover:text-teal-600 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
              <a href="#nosotros" className="block text-gray-700 hover:text-teal-600">Nosotros</a>
              <a href="#contacto" className="block text-gray-700 hover:text-teal-600">Contacto</a>
              <a href="#contacto" className="block bg-teal-600 text-white px-6 py-2 rounded-full text-center">
                Consulta Gratis
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-teal-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Transformación Digital que
                <span className="text-teal-600"> Impulsa tu Negocio</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Soluciones tecnológicas personalizadas para llevar tu empresa al siguiente nivel.
                Más de 25 años creando innovación.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contacto"
                  className="bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 text-lg font-semibold"
                >
                  Solicitar Consulta Gratuita
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#servicios"
                  className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full hover:bg-teal-50 transition-colors text-center text-lg font-semibold"
                >
                  Ver Servicios
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'Cloud', icon: <Cloud className="w-10 h-10 mb-2" /> },
                    { name: 'Security', icon: <Shield className="w-10 h-10 mb-2" /> },
                    { name: 'Code', icon: <Code className="w-10 h-10 mb-2" /> },
                    { name: 'Analytics', icon: <TrendingUp className="w-10 h-10 mb-2" /> }
                  ].map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white flex flex-col items-center justify-center text-center"
                    >
                      {item.icon}
                      <div className="text-2xl font-bold">{item.name}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section - Badges and Coverage */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 pb-8 border-b border-teal-500/30">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-6 md:mb-0">
              {/* Microsip Partner */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <img src={microsipLogo} alt="Microsip" className="h-12 mb-3 bg-white px-4 py-2 rounded-lg" />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <div className="text-white/90 text-sm mt-2 font-semibold">Partner Elite</div>
              </motion.div>

              {/* Separator */}
              <div className="hidden md:block w-px h-16 bg-white/20"></div>

              {/* Coverage */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-white text-center md:text-left"
              >
                <div className="text-lg font-bold mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Cobertura
                </div>
                <div className="space-y-1">
                  <div className="text-teal-100">• Coahuila</div>
                  <div className="text-teal-100">• Monterrey</div>
                </div>
              </motion.div>
            </div>

            {/* Service Rating */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-white mb-2">5.0</div>
              <div className="flex gap-1 justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-teal-100 text-sm font-semibold">Calificación de Servicio</div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="text-5xl md:text-6xl font-bold text-white mb-3">30+</div>
              <div className="text-teal-100 text-lg">Años de Experiencia</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="text-5xl md:text-6xl font-bold text-white mb-3">1500+</div>
              <div className="text-teal-100 text-lg">Proyectos Exitosos</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="text-5xl md:text-6xl font-bold text-white mb-3">2000+</div>
              <div className="text-teal-100 text-lg">Usuarios Activos</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluciones integrales adaptadas a las necesidades específicas de tu empresa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link to={service.link} key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer h-full"
                >
                  <div className="text-teal-600 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Integraciones y Plataformas
            </h2>
            <p className="text-lg text-gray-600">
              Trabajamos con las mejores plataformas de e-commerce del mercado
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="flex items-center justify-center p-6 bg-white rounded-xl hover:shadow-lg transition-all"
            >
              <img src={shopifyLogo} alt="Shopify" className="h-16 object-contain" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center p-6 bg-white rounded-xl hover:shadow-lg transition-all"
            >
              <img src={amazonLogo} alt="Amazon" className="h-16 object-contain" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center p-6 bg-white rounded-xl hover:shadow-lg transition-all"
            >
              <img src={mercadoLibreLogo} alt="Mercado Libre" className="h-16 object-contain" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center p-6 bg-white rounded-xl hover:shadow-lg transition-all"
            >
              <img src={zincLogo} alt="Zinc e-commerce" className="h-16 object-contain" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center p-6 bg-white rounded-xl hover:shadow-lg transition-all"
            >
              <img src={sincLogo} alt="4Q Sinc" className="h-16 object-contain" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                ¿Por qué elegir Perform Sistemas?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Somos tu socio estratégico en transformación digital, comprometidos con el éxito de tu empresa.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-2xl">
                    <Users className="w-12 h-12 text-teal-600 mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Equipo Experto</h4>
                    <p className="text-gray-600 text-sm">Profesionales certificados</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                    <TrendingUp className="w-12 h-12 text-green-600 mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Resultados</h4>
                    <p className="text-gray-600 text-sm">ROI garantizado</p>
                  </div>
                </div>
                <div className="space-y-6 mt-8">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl">
                    <Shield className="w-12 h-12 text-gray-600 mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Seguridad</h4>
                    <p className="text-gray-600 text-sm">Máxima protección</p>
                  </div>
                  <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-2xl">
                    <Cloud className="w-12 h-12 text-teal-600 mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Innovación</h4>
                    <p className="text-gray-600 text-sm">Última tecnología</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-teal-600 to-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Comienza tu Transformación Digital Hoy
              </h2>
              <p className="text-xl text-teal-100 mb-8">
                Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Oficina Monclova</div>
                    <div className="text-teal-100">Miguel Ramos Arizpe 505</div>
                    <div className="text-teal-100">Fracc. Carranza, 25760</div>
                    <div className="text-teal-100">Monclova, Coahuila</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-2">Teléfonos</div>
                    <div className="text-teal-100 mb-1">866 633 98 58</div>
                    <div className="text-teal-100">81 82 72 21 63</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-2">Emails</div>
                    <div className="text-teal-100 mb-1">ventas@perform-sistemas.net</div>
                    <div className="text-teal-100">microsip_monclova@hotmail.es</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="font-semibold mb-2">Síguenos en redes sociales</div>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/Perform.Sistemas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/perform.sistemas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Solicita tu Consulta Gratuita
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Nombres *
                    </label>
                    <input
                      type="text"
                      required
                      name="firstname"
                      value={formData.firstname}
                      onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Apellidos *
                    </label>
                    <input
                      type="text"
                      required
                      name="lastname"
                      value={formData.lastname}
                      onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
                      placeholder="Tus apellidos"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Teléfono móvil *
                    </label>
                    <input
                      type="tel"
                      required
                      name="mobile"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
                      placeholder="+52 123 456 7890"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      ¿Cómo te enteraste de Microsip? *
                    </label>
                    <input
                      type="text"
                      required
                      name="microsip_source"
                      value={formData.microsip_source}
                      onChange={(e) => setFormData({ ...formData, microsip_source: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
                      placeholder="Ejemplo: Redes sociales, recomendación, búsqueda web..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors font-semibold text-lg flex items-center justify-center gap-2"
                  >
                    Enviar Solicitud
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div>
              <div className="bg-white p-4 rounded-lg inline-block mb-4">
                <img src={logo} alt="Perform Sistemas" className="h-12" />
              </div>
              <div className="text-lg font-bold mb-2">
                <span className="text-gray-400">Perform </span>
                <span className="text-teal-400">Sistemas</span>
              </div>
              <p className="text-gray-400 text-sm">
                Transformación digital que impulsa tu negocio hacia el futuro.
              </p>
            </div>

            {/* Servicios */}
            <div>
              <h4 className="text-teal-400 font-bold mb-4 text-lg">Servicios</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-teal-400 transition-colors cursor-pointer">ERP-CRM-Desarrollos</li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">Cloud y Ciberseguridad</li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">Soluciones de Pesaje</li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">Tiendas Virtuales</li>
              </ul>
            </div>

            {/* Contáctanos */}
            <div>
              <h4 className="text-teal-400 font-bold mb-4 text-lg">Contáctanos</h4>
              <div className="space-y-3 text-gray-400 text-sm">
                <div>
                  <div className="font-semibold text-white mb-1">Email:</div>
                  <a href="mailto:ventas@perform-sistemas.net" className="hover:text-teal-400 transition-colors">
                    ventas@perform-sistemas.net
                  </a>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Teléfono:</div>
                  <a href="tel:8666339858" className="hover:text-teal-400 transition-colors">
                    866 633 9858
                  </a>
                </div>
                <div>
                  <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">
                    Política de Privacidad
                  </a>
                </div>
              </div>
            </div>

            {/* Donde Encontrarnos */}
            <div>
              <h4 className="text-teal-400 font-bold mb-4 text-lg">Donde Encontrarnos:</h4>
              <div className="space-y-4 text-gray-400 text-sm">
                <div>
                  <div className="font-bold text-white mb-2">• Oficina Monclova</div>
                  <p>Miguel Ramos Arizpe 505, Colonia Carranza, CP 25760, Monclova, Coahuila, México</p>
                </div>
                <div>
                  <div className="font-bold text-white mb-2">• Oficina Monterrey</div>
                  <p>Padua 625, Mitras Sur, CP 64020 Monterrey, N.L., México</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              Copyright © 2025 <a href="https://www.perform-sistemas.net" className="text-teal-400 hover:text-teal-300 transition-colors">www.perform-sistemas.net</a>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/528182722163"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all hover:scale-110 z-50 flex items-center justify-center group"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
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
