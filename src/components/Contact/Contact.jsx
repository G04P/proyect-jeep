import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@mui/material';
import { getProducts } from '../../productMock';

const Contact = () => {
  const products = getProducts(); 

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url('https://es.digitaltrends.com/wp-content/uploads/2017/11/Jeep-Wrangler-2018-FEAT.jpg?resize=1200%2C630&p=1')`,
      }}
    >
      <div className="max-w-7xl mx-auto text-center mb-12 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h1>
        <p className="text-lg text-gray-600">
          Estamos aquí para responder tus preguntas sobre vehículos JEEP
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card className="bg-white bg-opacity-80 shadow-lg">
          <CardContent className="p-6">
            <Phone className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Llámanos</h3>
            <p className="text-gray-600">+34 900 123 456</p>
            <p className="text-gray-600">+34 910 123 456</p>
          </CardContent>
        </Card>

        <Card className="bg-white bg-opacity-80 shadow-lg">
          <CardContent className="p-6">
            <Mail className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Escríbenos</h3>
            <p className="text-gray-600">info@jeep-dealer.com</p>
            <p className="text-gray-600">ventas@jeep-dealer.com</p>
          </CardContent>
        </Card>

        <Card className="bg-white bg-opacity-80 shadow-lg">
          <CardContent className="p-6">
            <MapPin className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visítanos</h3>
            <p className="text-gray-600">Av. Principal 123</p>
            <p className="text-gray-600">28001 Madrid, España</p>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-3xl mx-auto">
        <Card className="bg-white bg-opacity-80 shadow-lg">
          <CardContent className="p-8">
          <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Apellidos
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tus apellidos"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="+34 600 000 000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Modelo de interés
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Selecciona un modelo</option>
                  {products.map((product) => (
                    <option key={product.id} value={product.name}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  rows="4"
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
              >
                Enviar mensaje
              </button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-7xl mx-auto mt-12 text-center">
        <div className="inline-flex items-center space-x-2">
          <Clock className="w-6 h-6 text-blue-600" />
          <span className="text-gray-600 bg-white bg-opacity-80 px-4 py-2 rounded-lg">
            Horario de atención: Lunes a Viernes 9:00 - 20:00 | Sábados 10:00 - 14:00
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
