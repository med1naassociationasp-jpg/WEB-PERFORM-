import { useState } from 'react';
import './App.css';

export default function App() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    cf_1021: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setMessageType('');

    try {
      const response = await fetch('/.netlify/functions/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setMessageType('success');
        setMessage('✅ Solicitud enviada correctamente. Te contactaremos pronto.');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          mobile: '',
          cf_1021: '',
        });
      } else {
        setMessageType('error');
        setMessage('⚠️ Error al enviar. Por favor intenta nuevamente.');
      }
    } catch (error) {
      setMessageType('error');
      setMessage('⚠️ Error al enviar. Por favor intenta nuevamente.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h1>Solicita tu Consulta Gratuita</h1>
        <p className="subtitle">Completa el formulario y nos pondremos en contacto contigo</p>

        <form onSubmit={handleSubmit} className="form">
          {/* Nombres */}
          <div className="form-group">
            <label htmlFor="firstname">Nombres *</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />
          </div>

          {/* Apellidos */}
          <div className="form-group">
            <label htmlFor="lastname">Apellidos *</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Tu apellido"
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">E-mail *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              required
            />
          </div>

          {/* Teléfono móvil */}
          <div className="form-group">
            <label htmlFor="mobile">Teléfono móvil *</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="+52 123 456 7890"
              required
            />
          </div>

          {/* ¿Como te enteraste de Microsip? */}
          <div className="form-group">
            <label htmlFor="cf_1021">¿Como te enteraste de Microsip? *</label>
            <select
              id="cf_1021"
              name="cf_1021"
              value={formData.cf_1021}
              onChange={handleChange}
              required
            >
              <option value="">Seleccionar valor</option>
              <option value="Recomendacion">Recomendación</option>
              <option value="Expo">Expo</option>
              <option value="Medio Impreso">Medio Impreso</option>
              <option value="Redes Sociales">Redes Sociales</option>
              <option value="Radio o Television">Radio o Televisión</option>
            </select>
          </div>

          {/* Mensaje de estado */}
          {message && (
            <div className={`message ${messageType}`}>
              {message}
            </div>
          )}

          {/* Botón de envío */}
          <button
            type="submit"
            disabled={loading}
            className="submit-button"
          >
            {loading ? 'Enviando...' : 'Enviar Solicitud'}
          </button>
        </form>
      </div>
    </div>
  );
}
