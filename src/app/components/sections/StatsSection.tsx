import { motion } from 'motion/react';
import { Star, MapPin } from 'lucide-react';
import microsipLogo from '../../../imports/micros.jpg';

const stats = [
  { number: '30+', label: 'Años de Experiencia' },
  { number: '1,500+', label: 'Proyectos Exitosos' },
  { number: '2,000+', label: 'Usuarios Activos' },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 pb-10 border-b border-white/15">
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
            {/* Microsip badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="bg-white px-6 py-3 rounded-xl shadow-md mb-3">
                <img src={microsipLogo} alt="Microsip" className="h-10 object-contain" />
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <div className="text-white/85 text-xs font-semibold mt-1 tracking-wide uppercase">Partner Elite</div>
            </motion.div>

            <div className="hidden sm:block w-px h-14 bg-white/20" />

            {/* Coverage */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white text-center sm:text-left"
            >
              <div className="flex items-center gap-2 font-semibold mb-2 text-sm uppercase tracking-wider text-teal-100">
                <MapPin className="w-4 h-4" />
                Cobertura
              </div>
              <div className="text-white font-medium">Coahuila</div>
              <div className="text-white font-medium">Monterrey, NL</div>
            </motion.div>
          </div>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-center"
          >
            <div className="text-6xl font-bold text-white leading-none">5.0</div>
            <div className="flex gap-1 justify-center mt-2 mb-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-teal-100 text-xs font-semibold uppercase tracking-wide">Calificación de Servicio</div>
          </motion.div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map(({ number, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/15 hover:bg-white/15 transition-colors"
            >
              <div className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">{number}</div>
              <div className="text-teal-100 text-sm font-medium uppercase tracking-wider">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
