import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Cloud, Shield, Database, ShoppingCart, Scale, Code, Star, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'ERP & CRM',
    tag: 'Gestión Empresarial',
    description: 'Soluciones empresariales personalizadas que optimizan procesos y mejoran la gestión de relaciones con clientes.',
    link: '/servicios/erp-crm',
    color: 'from-teal-500 to-teal-600',
    bgLight: 'bg-teal-50',
    textColor: 'text-teal-600',
  },
  {
    icon: Cloud,
    title: 'Soluciones Cloud',
    tag: 'Infraestructura',
    description: 'Migración y gestión de infraestructura en la nube para mayor escalabilidad y eficiencia operativa.',
    link: '/servicios/cloud',
    color: 'from-sky-500 to-sky-600',
    bgLight: 'bg-sky-50',
    textColor: 'text-sky-600',
  },
  {
    icon: Shield,
    title: 'Ciberseguridad',
    tag: 'Seguridad',
    description: 'Protección integral de datos y sistemas con las mejores prácticas de seguridad informática empresarial.',
    link: '/servicios/ciberseguridad',
    color: 'from-slate-600 to-slate-700',
    bgLight: 'bg-slate-50',
    textColor: 'text-slate-600',
  },
  {
    icon: Code,
    title: 'Desarrollo a Medida',
    tag: 'Software',
    description: 'Software personalizado diseñado específicamente para las necesidades y flujos de trabajo de tu negocio.',
    link: '/servicios/desarrollo',
    color: 'from-teal-600 to-teal-800',
    bgLight: 'bg-teal-50',
    textColor: 'text-teal-700',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    tag: 'Comercio Digital',
    description: 'Plataformas de comercio electrónico robustas integradas con Shopify, Amazon y Mercado Libre.',
    link: '/servicios/ecommerce',
    color: 'from-emerald-500 to-emerald-600',
    bgLight: 'bg-emerald-50',
    textColor: 'text-emerald-600',
  },
  {
    icon: Scale,
    title: 'Sistemas de Pesaje',
    tag: 'Industrial',
    description: 'Soluciones industriales de pesaje y etiquetado para optimizar operaciones de manufactura y logística.',
    link: '/servicios/pesaje',
    color: 'from-slate-500 to-teal-600',
    bgLight: 'bg-slate-50',
    textColor: 'text-slate-600',
  },
  {
    icon: Star,
    title: 'Microsip',
    tag: 'Partner Elite',
    description: 'Implementación, capacitación y soporte del ERP líder en México. Socio certificado con más de 30 años.',
    link: '/servicios/microsip',
    color: 'from-orange-500 to-orange-600',
    bgLight: 'bg-orange-50',
    textColor: 'text-orange-600',
    special: true,
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Lo que hacemos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Nuestras Soluciones
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Tecnología especializada para cada área de tu empresa. Desde ERP hasta e-commerce,
            cubrimos todo el espectro digital.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Link to={service.link} key={service.title}>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group bg-white rounded-2xl p-7 border border-gray-200 hover:border-teal-300 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col cursor-pointer"
                >
                  {/* Icon + Tag row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-md`}>
                      <Icon className={`w-5 h-5 text-white ${service.special ? 'fill-white' : ''}`} />
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${service.bgLight} ${service.textColor}`}>
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>

                  <div className={`flex items-center gap-1.5 mt-5 text-sm font-semibold ${service.textColor} opacity-0 group-hover:opacity-100 transition-opacity`}>
                    Ver más
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
