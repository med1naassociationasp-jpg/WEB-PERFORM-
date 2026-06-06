import { motion } from 'motion/react';
import shopifyLogo from '../../../imports/Captura_de_pantalla_2026-05-19_154358.jpg';
import amazonLogo from '../../../imports/Captura_de_pantalla_2026-05-19_154434.jpg';
import mercadoLibreLogo from '../../../imports/Captura_de_pantalla_2026-05-19_154527.jpg';
import zincLogo from '../../../imports/Captura_de_pantalla_2026-05-19_154638.jpg';
import sincLogo from '../../../imports/Captura_de_pantalla_2026-05-19_154656.jpg';

const platforms = [
  { src: shopifyLogo, alt: 'Shopify' },
  { src: amazonLogo, alt: 'Amazon' },
  { src: mercadoLibreLogo, alt: 'Mercado Libre' },
  { src: zincLogo, alt: 'Zinc e-commerce' },
  { src: sincLogo, alt: '4Q Sinc' },
];

export default function IntegrationsSection() {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Integraciones
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
            Plataformas que conectamos
          </h2>
          <p className="text-gray-500">
            Integración nativa con los marketplaces y plataformas líderes del mercado
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {platforms.map(({ src, alt }, i) => (
            <motion.div
              key={alt}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all duration-300 p-5 flex items-center justify-center"
            >
              <img
                src={src}
                alt={alt}
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
