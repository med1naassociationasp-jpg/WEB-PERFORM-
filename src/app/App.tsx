import { useState } from 'react';
import { motion } from 'motion/react';
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
  MessageCircle
} from 'lucide-react';
import logo from '../imports/WhatsApp_Image_2026-05-19_at_11.49.46_AM-1.jpeg';
import shopifyLogo from '../imports/Captura_de_pantalla_2026-05-19_154358.jpg';
import amazonLogo from '../imports/Captura_de_pantalla_2026-05-19_154434.jpg';
import mercadoLibreLogo from '../imports/Captura_de_pantalla_2026-05-19_154527.jpg';
import zincLogo from '../imports/Captura_de_pantalla_2026-05-19_154638.jpg';
import sincLogo from '../imports/Captura_de_pantalla_2026-05-19_154656.jpg';
import microsipLogo from '../imports/micros.jpg';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const services = [
    {
      icon: <Database className="w-10 h-10" />,
      title: "ERP & CRM",
      description: "Soluciones empresariales personalizadas que optimizan procesos y mejoran la gestión de relaciones con clientes"
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "Soluciones Cloud",
      description: "Migración y gestión de infraestructura en la nube para mayor escalabilidad y eficiencia"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Ciberseguridad",
      description: "Protección integral de datos y sistemas con las mejores prácticas de seguridad informática"
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Desarrollo a Medida",
      description: "Software personalizado diseñado específicamente para las necesidades de tu negocio"
    },
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: "E-commerce",
      description: "Plataformas de comercio electrónico robustas que impulsan tus ventas online"
    },
    {
      icon: <Scale className="w-10 h-10" />,
      title: "Sistemas de Pesaje",
      description: "Soluciones industriales de pesaje y etiquetado para optimizar operaciones"
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const endpoint = import.meta.env.DEV 
        ? '/.netlify/functions/submit-form' 
        : '/.netlify/functions/submit-form';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitMessage('✅ ' + data.message);
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });

        setTimeout(() => {
          setSubmitMessage('');
        }, 5000);
      } else {
        setSubmitMessage('⚠️ ' + (data.error || 'Error al enviar'));
      }

    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('⚠️ Error al enviar. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Perform Sistemas" className="h-12" />
              <div className="text-2xl font-bold">
                <span className="text-gray-700">Perform</span>
                <span className="text-teal-600">Sistemas</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#servicios" className="text-gray-700 hover:text-teal-600 transition-colors">Servicios</a>
              <a href="#nosotros" className="text-gray-700 hover:text-teal-600 transition-colors">Nosotros</a>
              <a href="#contacto" className="text-gray-700 hover:text-teal-600 transition-colors">Contacto</a>

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

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-3">
              <a href="#servicios" className="block text-gray-700 hover:text-teal-600">Servicios</a>
              <a href="#nosotros" className="block text-gray-700 hover:text-teal-600">Nosotros</a>
              <a href="#contacto" className="block text-gray-700 hover:text-teal-600">Contacto</a>
              <a href="#contacto" className="block bg-teal-600 text-white px-6 py-2 rounded-full text-center">
                Consulta Gratis
              </a>
            </div>
          </motion.div>
        )}
      </nav>

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
                  className="bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition-colors font-semibold flex items-center justify-center gap-2"
                >
                  Solicita una Consulta
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#servicios"
                  className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full hover:bg-teal-50 transition-colors font-semibold"
                >
                  Ver Servicios
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden md:block"
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-teal-600">
                    <div className="flex items-center gap-2">
                      <div className="text-3xl font-bold text-teal-600">{stat.number}</div>
                      {stat.icon}
                    </div>
                    <p className="text-gray-600 text-sm mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-20 bg-white">
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
              Soluciones tecnológicas integrales diseñadas para impulsar el crecimiento de tu negocio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-teal-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Clientes que Confían en Nosotros</h2>
            <p className="text-gray-600">Empresas líderes en México confían en nuestras soluciones</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[shopifyLogo, amazonLogo, mercadoLibreLogo, zincLogo, sincLogo, microsipLogo].map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex justify-center items-center"
              >
                <img src={logo} alt={`Cliente ${i + 1}`} className="h-16 object-contain grayscale hover:grayscale-0 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="nosotros" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">¿Por qué elegir Perform Sistemas?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-teal-600 mb-2">30+</h3>
                  <p className="text-gray-700">Años de experiencia en transformación digital</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-teal-600 mb-2">1500+</h3>
                  <p className="text-gray-700">Proyectos implementados exitosamente</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-teal-600 mb-2">2000+</h3>
                  <p className="text-gray-700">Usuarios activos en nuestras plataformas</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Contáctanos</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:ventas@perform-sistemas.net" className="text-teal-600 hover:text-teal-700">
                      ventas@perform-sistemas.net
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Teléfono</h3>
                    <a href="tel:+528666339858" className="text-teal-600 hover:text-teal-700">
                      +52 866 633 9858
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Ubicaciones</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      <strong>Monclova:</strong> Miguel Ramos Arizpe 505, Colonia Carranza, CP 25760
                    </p>
                    <p className="text-gray-700 text-sm">
                      <strong>Monterrey:</strong> Padua 625, Mitras Sur, CP 64020
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Solicita tu Consulta Gratuita
                </h3>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      Nombre completo *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
                      placeholder="Tu nombre completo"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
                      placeholder="tu@email.com"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                      Teléfono *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
                      placeholder="+52 123 456 7890"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
                      Servicio de interés *
                    </label>
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
                      disabled={isSubmitting}
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="ERP & CRM">ERP & CRM</option>
                      <option value="Soluciones Cloud">Soluciones Cloud</option>
                      <option value="Ciberseguridad">Ciberseguridad</option>
                      <option value="Desarrollo a Medida">Desarrollo a Medida</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Sistemas de Pesaje">Sistemas de Pesaje</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none resize-none"
                      placeholder="Cuéntanos sobre tu proyecto..."
                      disabled={isSubmitting}
                    />
                  </div>

                  {submitMessage && (
                    <div className={`p-4 rounded-lg text-center font-semibold ${
                      submitMessage.includes('✅') 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {submitMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-colors ${
                      isSubmitting
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : 'bg-teal-600 text-white hover:bg-teal-700'
                    }`}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
                    {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
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

            <div>
              <h4 className="text-teal-400 font-bold mb-4 text-lg">Servicios</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-teal-400 transition-colors cursor-pointer">ERP-CRM-Desarrollos</li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">Cloud y Ciberseguridad</li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">Soluciones de Pesaje</li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">Tiendas Virtuales</li>
              </ul>
            </div>

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

            <div>
              <h4 className="text-teal-400 font-bold mb-4 text-lg">Donde Encontrarnos</h4>
              <div className="space-y-4 text-gray-400 text-sm">
                <div>
                  <div className="font-bold text-white mb-2">Monclova</div>
                  <p>Miguel Ramos Arizpe 505, Colonia Carranza, CP 25760</p>
                </div>
                <div>
                  <div className="font-bold text-white mb-2">Monterrey</div>
                  <p>Padua 625, Mitras Sur, CP 64020</p>
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
