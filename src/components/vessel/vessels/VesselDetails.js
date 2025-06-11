// src/components/vessel/vessels/VesselDetails.js
'use client';

import React, { useState } from 'react';
import { Ship, Settings, Download, ArrowRight, Anchor, Gauge, Users, Zap } from 'lucide-react';

const VesselDetails = ({ vessel }) => {
  const [activeTab, setActiveTab] = useState('dimensions');
  
  if (!vessel) {
    vessel = {
      titulo: "ASD Tug 3212",
      descripcion: "The ASD Tug 3212 has excellent seakeeping behaviour, superb manoeuvrability and outstanding towing capabilities. Good seakeeping characteristics are achieved through a more slender waterline in combination with a relatively low wheelhouse, slope frames and bilge keels.",
      figuras: {
        barco: 82,
        largo: 32.70,
        capacidad_maxima_crew: 10,
        velocidad: 13.5,
        beam: 12.82
      },
      caracteristicas: [
        "IMO Tier III compliant",
        "Fire-fighting",
        "Oil pollution control",
        "Aft winch",
        "Compact multi-purpose vessel",
        "Spacious working deck without obstacles",
        "Full vision bridge with Damen safety glass",
        "Damen Triton, remote monitoring system"
      ],
      dimensiones: {
        "Length o.a.": "32.7 m",
        "Beam o.a.": "12.82 m",
        "Draught aft max": "5.90 m",
        "Displacement": "800 t",
        "Gross tonnage": "450 t"
      },
      rendimientos: {
        "Bollard pull ahead": "82.4 t",
        "Bollard pull astern": "77.4 t",
        "Speed": "13.5 kn"
      },
      capacidades: {
        "Fuel oil": "148.3 m³",
        "Fresh water": "15.4 m³",
        "Sewage": "5.1 m³",
        "Clean lubrication oil": "6.5 m³",
        "Dirty lubrication oil": "7.8 m³",
        "Bilge water": "6.5 m³"
      },
      comparaciones: [
        { nombre: "ASD Tug 3212", barco: 82, largo: 32.70, capacidad_maxima_crew: 10, velocidad: 13.5, beam: 12.82 },
        { nombre: "ASD Tug 2813", barco: 60, largo: 28.57, capacidad_maxima_crew: 8, velocidad: 13, beam: 11.43 },
        { nombre: "RSD Tug 2513", barco: 83, largo: 27.59, capacidad_maxima_crew: 10, velocidad: 12.7, beam: 12.93 }
      ],
      noticias: [
        {
          titulo: "Damen ASD Tug 3212 Multratug 36 is the newest addition to Multraship's fleet",
          fecha: "4 Nov 2024",
          image_url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=750&h=542&fit=crop"
        },
        {
          titulo: "Damen Shipyards and Muller Dordrecht christen new Damen ASD Tug 3212",
          fecha: "1 Jul 2024",
          image_url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=750&h=542&fit=crop"
        }
      ]
    };
  }

  const keyFigures = [
    { value: vessel.figuras?.barco || 82, label: "Bollard Pull (t)", color: "blue", icon: Anchor },
    { value: vessel.figuras?.largo || 32.70, label: "Length (m)", color: "green", icon: Ship },
    { value: vessel.figuras?.capacidad_maxima_crew || 10, label: "Max Crew", color: "purple", icon: Users },
    { value: vessel.figuras?.velocidad || 13.5, label: "Speed (kn)", color: "orange", icon: Gauge },
    { value: vessel.figuras?.beam || 12.82, label: "Beam (m)", color: "teal", icon: Zap }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 text-blue-700",
      green: "bg-green-50 border-green-200 text-green-700",
      purple: "bg-purple-50 border-purple-200 text-purple-700",
      orange: "bg-orange-50 border-orange-200 text-orange-700",
      teal: "bg-teal-50 border-teal-200 text-teal-700"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">{vessel.titulo}</h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              {vessel.descripcion}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                Configure your own
              </button>
              <button className="border border-blue-300 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Download specs
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Figures */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Figures</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {keyFigures.map((figure, index) => {
              const IconComponent = figure.icon;
              return (
                <div key={index} className={`p-6 rounded-xl border-2 ${getColorClasses(figure.color)} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                  <div className="flex items-center justify-center mb-3">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">{figure.value}</div>
                    <div className="text-sm font-medium opacity-75">{figure.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Features */}
        {vessel.caracteristicas && vessel.caracteristicas.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {vessel.caracteristicas.map((feature, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Specifications Tabs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Specifications</h2>
          
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="-mb-px flex space-x-8">
              {vessel.dimensiones && (
                <button
                  onClick={() => setActiveTab('dimensions')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'dimensions'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Dimensions
                </button>
              )}
              {vessel.rendimientos && (
                <button
                  onClick={() => setActiveTab('performances')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'performances'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Performances
                </button>
              )}
              {vessel.capacidades && (
                <button
                  onClick={() => setActiveTab('capacities')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'capacities'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Capacities
                </button>
              )}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="bg-white">
            {activeTab === 'dimensions' && vessel.dimensiones && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(vessel.dimensiones).map(([key, value], index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <div className="text-sm text-gray-600 mb-1">{key}</div>
                    <div className="text-2xl font-bold text-gray-900">{value}</div>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'performances' && vessel.rendimientos && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(vessel.rendimientos).map(([key, value], index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <div className="text-sm text-gray-600 mb-1">{key}</div>
                    <div className="text-2xl font-bold text-gray-900">{value}</div>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'capacities' && vessel.capacidades && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(vessel.capacidades).map(([key, value], index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <div className="text-sm text-gray-600 mb-1">{key}</div>
                    <div className="text-2xl font-bold text-gray-900">{value}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Comparison Table */}
        {vessel.comparaciones && vessel.comparaciones.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Compare Similar Tugs</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vessel</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bollard Pull (t)</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Length (m)</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Max Crew</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Speed (kn)</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Beam (m)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {vessel.comparaciones.map((comparison, index) => (
                      <tr key={index} className={`hover:bg-gray-50 transition-colors ${index === 0 ? 'bg-blue-50' : ''}`}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-semibold text-gray-900">{comparison.nombre}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 font-medium">{comparison.barco}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">{comparison.largo}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">{comparison.capacidad_maxima_crew}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">{comparison.velocidad}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">{comparison.beam}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* News Section */}
        {vessel.noticias && vessel.noticias.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {vessel.noticias.map((news, index) => (
                <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {news.image_url && (
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={news.image_url}
                        alt={news.titulo}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-3">{news.fecha}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{news.titulo}</h3>
                    <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center group">
                      Read more 
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Do you want to know more?</h2>
          <p className="text-xl text-blue-100 mb-8">Get detailed specifications and pricing information</p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default VesselDetails;