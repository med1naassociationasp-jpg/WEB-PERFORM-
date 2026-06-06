import { motion } from 'motion/react';
import { Search, Wrench, HeadphonesIcon } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Diagnóstico Gratuito',
    description:
      'Analizamos a fondo tus procesos actuales, identificamos cuellos de botella y oportunidades de mejora. Sin costos, sin compromiso.',
    detail: 'Reunión inicial → Análisis de procesos → Propuesta técnica',
    color: 'from-teal-500 to-teal-600',
  },
  {
    number: '02',
    icon: Wrench,
    title: 'Implementación Ágil',
    description:
      'Desarrollamos e integramos las soluciones con metodologías ágiles, entregando valor en etapas para minimizar la interrupción de tu operación.',
    detail: 'Diseño → Desarrollo → Pruebas → Despliegue',
    color: 'from-slate-600 to-teal-700',
  },
  {
    number: '03',
    icon: HeadphonesIcon,
    title: 'Soporte Continuo',
    description:
      'Te acompañamos post-implementación con capacitación, soporte técnico y evolución del sistema conforme crecen tus necesidades.',
    detail: 'Capacitación → Soporte 24/7 → Actualizaciones',
    color: 'from-teal-600 to-teal-800',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Cómo trabajamos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Tu éxito, paso a paso
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Un proceso probado en más de 1,500 proyectos que garantiza resultados sin sorpresas.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px bg-gradient-to-r from-teal-500 via-slate-400 to-teal-600" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map(({ number, icon: Icon, title, description, detail, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                {/* Step circle */}
                <div className="relative mb-6 z-10">
                  <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>

                <div className="text-xs font-bold text-teal-500 uppercase tracking-widest mb-2">{number}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>

                {/* Detail pills */}
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {detail.split(' → ').map((step) => (
                    <span key={step} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium">
                      {step}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
