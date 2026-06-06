import { Link } from 'react-router';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../../imports/WhatsApp_Image_2026-05-19_at_11.49.46_AM-1.jpeg';

const serviceLinks = [
  { label: 'ERP & CRM', to: '/servicios/erp-crm' },
  { label: 'Soluciones Cloud', to: '/servicios/cloud' },
  { label: 'Ciberseguridad', to: '/servicios/ciberseguridad' },
  { label: 'Desarrollo a Medida', to: '/servicios/desarrollo' },
  { label: 'E-commerce', to: '/servicios/ecommerce' },
  { label: 'Sistemas de Pesaje', to: '/servicios/pesaje' },
  { label: 'Microsip', to: '/servicios/microsip' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="bg-white p-2 rounded-lg">
                <img src={logo} alt="Perform Sistemas" className="h-10 rounded" />
              </div>
              <div className="font-bold text-lg">
                <span className="text-gray-300">Perform</span>
                <span className="text-teal-400">Sistemas</span>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Transformación digital que impulsa tu negocio hacia el futuro.
              30+ años de experiencia en soluciones tecnológicas empresariales.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/Perform.Sistemas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/perform.sistemas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-teal-400 font-bold text-sm uppercase tracking-wider mb-5">Servicios</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-gray-500 hover:text-teal-400 text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-teal-400 font-bold text-sm uppercase tracking-wider mb-5">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:ventas@perform-sistemas.net" className="text-gray-500 hover:text-teal-400 text-sm transition-colors block">
                    ventas@perform-sistemas.net
                  </a>
                  <a href="mailto:microsip_monclova@hotmail.es" className="text-gray-500 hover:text-teal-400 text-sm transition-colors block mt-1">
                    microsip_monclova@hotmail.es
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:8666339858" className="text-gray-500 hover:text-teal-400 text-sm transition-colors block">866 633 98 58</a>
                  <a href="tel:8182722163" className="text-gray-500 hover:text-teal-400 text-sm transition-colors block mt-1">81 82 72 21 63</a>
                </div>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-teal-400 text-xs transition-colors">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-teal-400 font-bold text-sm uppercase tracking-wider mb-5">Ubicaciones</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white text-xs font-semibold mb-1">Monclova, Coahuila</div>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Miguel Ramos Arizpe 505,<br />
                    Fracc. Carranza, CP 25760
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white text-xs font-semibold mb-1">Monterrey, NL</div>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Padua 625, Mitras Sur,<br />
                    CP 64020
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Perform Sistemas. Todos los derechos reservados.
          </p>
          <a
            href="https://www.perform-sistemas.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-teal-400 text-xs transition-colors"
          >
            www.perform-sistemas.net
          </a>
        </div>
      </div>
    </footer>
  );
}
