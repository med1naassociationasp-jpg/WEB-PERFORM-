import { ArrowLeft, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';
import microsipLogo from '../../../imports/micros.jpg';

export default function MicrosipPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-8">
          <ArrowLeft className="w-5 h-5" />
          Volver al inicio
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white p-4 rounded-xl border-2 border-teal-100">
              <img src={microsipLogo} alt="Microsip" className="h-12" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Microsip</h1>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Partner Elite certificado de Microsip. Implementación, capacitación y soporte especializado del sistema ERP líder en México.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Soluciones Microsip</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                'Implementación de Microsip',
                'Capacitación personalizada',
                'Soporte técnico especializado',
                'Actualización de versiones',
                'Personalización de módulos',
                'Consultoría Master'
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-teal-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Partner Elite Certificado</h3>
              <p className="text-gray-700">
                Como Partner Elite de Microsip, ofrecemos la más alta calidad en implementación,
                capacitación y soporte del sistema ERP más confiable de México.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-bold text-gray-900 mb-4">¿Interesado en Microsip?</h3>
            <Link
              to="/#contacto"
              className="inline-block bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors font-semibold"
            >
              Solicitar información
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
