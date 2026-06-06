import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Facebook, Instagram, ArrowRight, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(13,148,136,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.4) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-teal-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Comienza tu transformación hoy
          </h2>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Agenda una consulta gratuita y descubre cómo optimizar tu operación en 30 días.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 text-white space-y-8"
          >
            {/* Office */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-teal-500/20 border border-teal-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <div className="font-semibold text-white mb-1">Oficina Monclova</div>
                <div className="text-slate-400 text-sm leading-relaxed">
                  Miguel Ramos Arizpe 505<br />
                  Fracc. Carranza, CP 25760<br />
                  Monclova, Coahuila
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-teal-500/20 border border-teal-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <div className="font-semibold text-white mb-1">Oficina Monterrey</div>
                <div className="text-slate-400 text-sm leading-relaxed">
                  Padua 625, Mitras Sur<br />
                  CP 64020, Monterrey, NL
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-teal-500/20 border border-teal-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <div className="font-semibold text-white mb-1">Teléfonos</div>
                <a href="tel:8666339858" className="block text-slate-400 text-sm hover:text-teal-400 transition-colors">866 633 98 58</a>
                <a href="tel:8182722163" className="block text-slate-400 text-sm hover:text-teal-400 transition-colors">81 82 72 21 63</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-teal-500/20 border border-teal-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <div className="font-semibold text-white mb-1">Email</div>
                <a href="mailto:ventas@perform-sistemas.net" className="block text-slate-400 text-sm hover:text-teal-400 transition-colors">ventas@perform-sistemas.net</a>
                <a href="mailto:microsip_monclova@hotmail.es" className="block text-slate-400 text-sm hover:text-teal-400 transition-colors">microsip_monclova@hotmail.es</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-teal-500/20 border border-teal-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <div className="font-semibold text-white mb-1">Horario</div>
                <div className="text-slate-400 text-sm">Lunes – Viernes: 9:00 – 18:00</div>
                <div className="text-slate-400 text-sm">Soporte 24/7 para clientes activos</div>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.facebook.com/Perform.Sistemas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-teal-500/30 border border-white/10 hover:border-teal-500/40 rounded-xl flex items-center justify-center text-slate-300 hover:text-teal-300 transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/perform.sistemas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-teal-500/30 border border-white/10 hover:border-teal-500/40 rounded-xl flex items-center justify-center text-slate-300 hover:text-teal-300 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              id="__vtigerWebForm"
              name="Leads"
              action="https://perform.mantic360-s1.net/modules/Webforms/capture.php"
              method="post"
              acceptCharset="utf-8"
              encType="multipart/form-data"
              className="bg-white rounded-2xl p-8 shadow-2xl"
            >
              <input type="hidden" name="__vtrftk" value="sid:1e1a73fe1144d525b02b81078d927bea6b70e877,1780688660" />
              <input type="hidden" name="publicid" value="9fa3a5d787c563b345c156922f70f090" />
              <input type="hidden" name="captcha_no_active" value="true" />

              <h3 className="text-2xl font-bold text-gray-900 mb-1">Solicita tu Consulta Gratuita</h3>
              <p className="text-gray-500 text-sm mb-7">Respondemos en menos de 24 horas hábiles.</p>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1.5">Nombres *</label>
                  <input
                    type="text"
                    required
                    name="firstname"
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-shadow bg-gray-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1.5">Apellidos *</label>
                  <input
                    type="text"
                    required
                    name="lastname"
                    placeholder="Tus apellidos"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-shadow bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1.5">E-mail *</label>
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="tu@empresa.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-shadow bg-gray-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1.5">Teléfono *</label>
                  <input
                    type="tel"
                    required
                    name="mobile"
                    placeholder="+52 800 000 0000"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-shadow bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-1.5">¿Cómo nos conociste? *</label>
                <select
                  required
                  name="cf_1021"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-shadow bg-gray-50 focus:bg-white text-gray-700"
                >
                  <option value="">Seleccionar...</option>
                  <option value="Recomendacion">Recomendación</option>
                  <option value="Expo">Expo / Evento</option>
                  <option value="Medio Impreso">Medio Impreso</option>
                  <option value="Redes Sociales">Redes Sociales</option>
                  <option value="Radio o Television">Radio o Televisión</option>
                </select>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2 transition-colors shadow-lg shadow-teal-500/20"
              >
                Enviar Solicitud
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <p className="text-center text-gray-400 text-xs mt-4">
                Tu información está segura. No compartimos tus datos con terceros.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
