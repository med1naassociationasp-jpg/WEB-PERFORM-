import { motion } from 'motion/react';
import { ArrowRight, Play, Zap, Shield, TrendingUp, Layers } from 'lucide-react';

const floatingCards = [
  { icon: Zap, label: 'Automatización', sub: 'Procesos inteligentes', color: 'from-teal-500 to-teal-600' },
  { icon: Shield, label: 'Ciberseguridad', sub: 'Protección 24/7', color: 'from-slate-600 to-slate-700' },
  { icon: TrendingUp, label: 'ERP & CRM', sub: 'ROI en 6 meses', color: 'from-teal-600 to-teal-800' },
  { icon: Layers, label: 'Integraciones', sub: '50+ plataformas', color: 'from-slate-700 to-teal-700' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 pt-16">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(13,148,136,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13,148,136,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-400/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-teal-500/15 border border-teal-500/30 text-teal-300 px-4 py-1.5 rounded-full text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              30+ años transformando empresas en México
            </motion.div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.08] mb-6 tracking-tight">
              Automatiza.
              <br />
              <span className="text-teal-400">Integra.</span>
              <br />
              Escala.
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-lg leading-relaxed">
              Soluciones de software, automatización e integración de sistemas diseñadas
              para empresas que buscan eficiencia real y resultados medibles.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg shadow-teal-500/25 transition-colors"
              >
                Agendar Demo
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#servicios"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white hover:bg-white/5 px-8 py-4 rounded-full font-semibold text-base transition-all"
              >
                <Play className="w-4 h-4 fill-white" />
                Ver Soluciones
              </motion.a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 mt-12 pt-8 border-t border-white/10">
              {[
                { num: '30+', label: 'Años' },
                { num: '1,500+', label: 'Proyectos' },
                { num: '2,000+', label: 'Usuarios' },
              ].map(({ num, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-bold text-white">{num}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >
            {/* Central hub */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Center circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 rounded-full border border-teal-500/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-16 rounded-full border border-teal-400/15"
              />

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl p-6 shadow-2xl shadow-teal-500/30 text-white text-center">
                  <div className="text-3xl font-bold">Perform</div>
                  <div className="text-sm text-teal-200 mt-1">Sistemas</div>
                  <div className="mt-3 flex gap-1 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 bg-teal-300 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              {floatingCards.map(({ icon: Icon, label, sub, color }, i) => {
                const positions = [
                  'top-0 left-0',
                  'top-0 right-0',
                  'bottom-0 left-0',
                  'bottom-0 right-0',
                ];
                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.15 }}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    className={`absolute ${positions[i]} bg-slate-800/90 backdrop-blur-sm border border-white/10 rounded-xl p-4 w-36 shadow-xl cursor-default`}
                  >
                    <div className={`w-8 h-8 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center mb-2`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-white text-xs font-semibold leading-tight">{label}</div>
                    <div className="text-slate-400 text-xs mt-0.5">{sub}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
