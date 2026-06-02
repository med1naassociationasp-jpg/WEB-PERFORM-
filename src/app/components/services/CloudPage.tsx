import { ArrowLeft, Cloud, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';

export default function CloudPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-8">
          <ArrowLeft className="w-5 h-5" />
          Volver al inicio
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-teal-100 p-4 rounded-xl">
              <Cloud className="w-12 h-12 text-teal-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Soluciones Cloud</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Migración y gestión de infraestructura en la nube para mayor escalabilidad y eficiencia.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Servicios incluidos</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                'Migración a la nube',
                'Gestión de infraestructura cloud',
                'Almacenamiento seguro',
                'Respaldos automatizados',
                'Escalabilidad bajo demanda',
                'Monitoreo 24/7'
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-bold text-gray-900 mb-4">¿Interesado en este servicio?</h3>
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
