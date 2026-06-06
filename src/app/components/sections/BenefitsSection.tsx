import { motion } from 'motion/react';
import { CheckCircle, Users, TrendingUp, Shield, Cloud } from 'lucide-react';

const benefits = [
  'Consultoría gratuita inicial sin compromiso',
  'Equipo certificado con más de 30 años de experiencia',
  'Soporte técnico continuo post-implementación',
  'Soluciones escalables que crecen con tu empresa',
  'ROI comprobado y medible desde los primeros 6 meses',
  'Tecnologías de vanguardia con las mejores prácticas',
];

const pillars = [
  {
    icon: Users,
    title: 'Equipo Experto',
    description: 'Profesionales certificados en las tecnologías líderes del mercado.',
    gradient: 'from-teal-50 to-teal-100',
    iconColor: 'text-teal-600',
    border: 'border-teal-200',
  },
  {
    icon: TrendingUp,
    title: 'Resultados Medibles',
    description: 'ROI garantizado con métricas claras desde el día uno.',
    gradient: 'from-emerald-50 to-emerald-100',
    iconColor: 'text-emerald-600',
    border: 'border-emerald-200',
  },
  {
    icon: Shield,
    title: 'Máxima Seguridad',
    description: 'Datos protegidos con estándares de seguridad empresarial.',
    gradient: 'from-slate-50 to-slate-100',
    iconColor: 'text-slate-600',
    border: 'border-slate-200',
  },
  {
    icon: Cloud,
    title: 'Innovación Constante',
    description: 'Adoptamos las últimas tecnologías para mantenerte competitivo.',
    gradient: 'from-teal-50 to-sky-100',
    iconColor: 'text-sky-600',
    border: 'border-sky-200',
  },
];

export default function BenefitsSection() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Por qué elegirnos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight leading-tight">
              Tu socio estratégico en transformación digital
            </h2>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              No somos solo proveedores de tecnología. Somos el aliado que entiende tu negocio
              y te acompaña en cada etapa del crecimiento.
            </p>

            <ul className="space-y-3">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right — 2×2 grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {pillars.map(({ icon: Icon, title, description, gradient, iconColor, border }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`bg-gradient-to-br ${gradient} border ${border} rounded-2xl p-6 transition-transform`}
              >
                <Icon className={`w-10 h-10 ${iconColor} mb-3`} />
                <h4 className="font-bold text-gray-900 text-sm mb-1.5">{title}</h4>
                <p className="text-gray-600 text-xs leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
