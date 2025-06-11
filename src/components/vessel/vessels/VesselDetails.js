// src/components/vessel/vessels/VesselDetails.js
'use client';

const VesselDetails = ({ vessel }) => {
  if (!vessel) return null;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{vessel.titulo}</h1>
        <p className="text-lg text-gray-700 leading-relaxed">{vessel.descripcion}</p>
      </div>

      {/* Key Figures */}
      {vessel.figuras && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Figuras Clave</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="text-3xl font-bold text-blue-600">{vessel.figuras.barco}</div>
              <div className="text-sm text-gray-600 mt-1">Bollard Pull (t)</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-100">
              <div className="text-3xl font-bold text-green-600">{vessel.figuras.largo}</div>
              <div className="text-sm text-gray-600 mt-1">Largo (m)</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-100">
              <div className="text-3xl font-bold text-purple-600">{vessel.figuras.capacidad_maxima_crew}</div>
              <div className="text-sm text-gray-600 mt-1">Max Crew</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-100">
              <div className="text-3xl font-bold text-orange-600">{vessel.figuras.velocidad}</div>
              <div className="text-sm text-gray-600 mt-1">Velocidad (kn)</div>
            </div>
            <div className="text-center p-4 bg-teal-50 rounded-lg border border-teal-100">
              <div className="text-3xl font-bold text-teal-600">{vessel.figuras.beam}</div>
              <div className="text-sm text-gray-600 mt-1">Beam (m)</div>
            </div>
          </div>
        </div>
      )}

      {/* Características clave */}
      {vessel.caracteristicas && vessel.caracteristicas.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Características Clave</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {vessel.caracteristicas.map((feature, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-gray-800">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Dimensiones, Performances y Capacidades en tabs */}
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {vessel.dimensiones && (
              <button className="py-2 px-1 border-b-2 border-blue-500 font-medium text-sm text-blue-600">
                Dimensiones
              </button>
            )}
            {vessel.rendimientos && (
              <button className="py-2 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Rendimientos
              </button>
            )}
            {vessel.capacidades && (
              <button className="py-2 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Capacidades
              </button>
            )}
          </nav>
        </div>

        {/* Dimensiones */}
        {vessel.dimensiones && (
          <div className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(vessel.dimensiones).map(([key, value], index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600">{key}</div>
                  <div className="text-lg font-semibold text-gray-900">{value}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Comparaciones */}
      {vessel.comparaciones && vessel.comparaciones.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Comparaciones</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bollard Pull</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Largo</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Max Crew</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Velocidad</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Beam</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {vessel.comparaciones.map((comparison, index) => (
                  <tr key={index} className={index === 0 ? 'bg-blue-50' : 'hover:bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{comparison.nombre}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{comparison.barco}t</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{comparison.largo}m</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{comparison.capacidad_maxima_crew}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{comparison.velocidad}kn</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{comparison.beam}m</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Noticias */}
      {vessel.noticias && vessel.noticias.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Noticias Recientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vessel.noticias.map((news, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                {news.image_url && (
                  <img
                    src={news.image_url}
                    alt={news.titulo}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <div className="text-sm text-gray-500 mb-2">{news.fecha}</div>
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{news.titulo}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Imágenes adicionales */}
      {vessel.imagenes && vessel.imagenes.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Galería de Imágenes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {vessel.imagenes.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image}
                  alt={`${vessel.titulo} - Imagen ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Configurador URL */}
      {vessel.url_configurador && (
        <div className="text-center">
          <a
            href={vessel.url_configurador}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Abrir Configurador
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};

export default VesselDetails;
