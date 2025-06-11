"use client";

import React, { useState } from 'react';
import { ArrowRight, Download, Settings, Ship, Anchor, Gauge, Users, Zap, Mail, Phone, MapPin, X } from 'lucide-react';
import Link from 'next/link';

// Mock components
const Header = () => (
  <header className="bg-white shadow-sm border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center">
          <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Ship className="h-6 w-6 text-white" />
          </div>
          <span className="ml-3 text-2xl font-bold text-gray-900">DAMEN</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#vessels" className="text-gray-700 hover:text-blue-600 font-medium">Vessels</a>
          <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
          <a href="#solutions" className="text-gray-700 hover:text-blue-600 font-medium">Solutions</a>
          <a href="#news" className="text-gray-700 hover:text-blue-600 font-medium">News</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
        </nav>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
    <div className="absolute inset-0 bg-black opacity-10"></div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Innovative Tug Solutions
        </h1>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Discover our range of high-performance tugboats designed for superior maneuverability,
          exceptional towing capabilities, and outstanding seakeeping behavior.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
            Explore Vessels
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center">
            <Download className="mr-2 h-5 w-5" />
            Download Brochure
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default function HomePage() {
  const keyFigures = [
    { value: 82, label: "Bollard Pull (t)", color: "blue", icon: Anchor },
    { value: 32.70, label: "Length (m)", color: "green", icon: Ship },
    { value: 10, label: "Max Crew", color: "purple", icon: Users },
    { value: 13.5, label: "Speed (kn)", color: "orange", icon: Gauge },
    { value: 12.8, label: "Beam (m)", color: "teal", icon: Zap }
  ];

  const vesselSpecs = [
    { label: "Dimensions", items: ["Length o.a.: 32.7 m", "Beam o.a.: 12.8 m", "Draught aft max: 5.90 m"] },
    { label: "Performance", items: ["Bollard pull ahead: 82.4 t", "Bollard pull astern: 77.4 t", "Speed: 13.5 kn"] },
    { label: "Capacities", items: ["Fuel oil: 148.3 m³", "Fresh water: 15.4 m³", "Sewage: 5.1 m³"] }
  ];

  const comparisons = [
    { name: "ASD Tug 3212", bollardPull: 82, length: 32.70, crew: 10, speed: 13.5, beam: 12.8, featured: true },
    { name: "ASD Tug 2813", bollardPull: 60, length: 28.57, crew: 8, speed: 13, beam: 11.43 },
    { name: "RSD Tug 2513", bollardPull: 83, length: 27.59, crew: 10, speed: 12.7, beam: 12.93 }
  ];

  const solutions = [
    {
      title: "Finance your vessel",
      description: "A reliable partner from start to finish. Explore solutions of Damen Financial Services.",
      icon: "💰"
    },
    {
      title: "Lifecycle support",
      description: "From delivery onwards, Damen Services supports you, every step of the way.",
      icon: "🔧"
    },
    {
      title: "Build your vessel locally",
      description: "Build a proven Damen design, at a location of your choice.",
      icon: "🏭"
    },
    {
      title: "Trade-in your current vessel",
      description: "Explore our options for vessel trade-in at Damen Trading. Our in-house shipbroker.",
      icon: "🔄"
    }
  ];

  const news = [
    {
      title: "Damen ASD Tug 3212 Multratug 36 is the newest addition to Multraship's fleet",
      date: "4 Nov 2024",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop"
    },
    {
      title: "Damen Shipyards and Muller Dordrecht christen new Damen ASD Tug 3212",
      date: "1 Jul 2024",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop"
    },
    {
      title: "A new addition to the Multraship fleet with the naming of the Damen ASD Tug 3212 Multratug 35",
      date: "31 May 2024",
      image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=400&h=250&fit=crop"
    }
  ];

  // Nuevo estado para la galería de imágenes y vista 360
  const [selectedImage, setSelectedImage] = useState(0);
  const [show360View, setShow360View] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  
  const galleryImages = [
    "https://medialibrary.damen.com/transform/f2d87c9c-0885-466e-8136-4b9a2c46d29c/512567-EN-AVANT-25-ASD-TUG-3212-DAMEN-2?io=transform:fill,width:1920&quality=75",
    "https://medialibrary.damen.com/transform/25f498ed-42f7-4468-90a6-cdf04903d299/512567-EN-AVANT-25-ASD-TUG-3212-DAMEN-3?io=transform:fill,width:1920&quality=75",
    {
      type: "video",
      thumbnail: "https://medialibrary.damen.com/transform/64b7ccc6-99e9-489b-9ba9-fca9a8a1695c/asd-tug-3212-video?io=transform:fill,width:3840,height:3840&quality=75",
      url: "https://player.vimeo.com/video/455717216?autoplay=1&muted=1&loop=1&background=1" 
    },
    "https://medialibrary.damen.com/transform/aec8081b-8f2d-48d1-9cc8-a16e402405b5/asd-3212-1?io=transform:fill,width:1920&quality=75",
    {
      type: "360",
      thumbnail: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?w=200&h=150&fit=crop",
      url: "https://360-topaz.vercel.app/" // URL real del tour 360
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100",
      green: "bg-green-50 border-green-200 text-green-700 hover:bg-green-100",
      purple: "bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100",
      orange: "bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100",
      teal: "bg-teal-50 border-teal-200 text-teal-700 hover:bg-teal-100"
    };
    return colors[color] || colors.blue;
  };

  // Componente de Galería de Imágenes
  const ImageGallery = () => (
    <div className="w-full">
      {/* Imagen principal */}
      <div className="relative rounded-xl overflow-hidden mb-4 bg-black">
        {show360View ? (
          <div className="relative">
            <button 
              onClick={() => setShow360View(false)}
              className="absolute top-4 right-4 bg-white p-2 rounded-full z-10 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <iframe 
              src={galleryImages[4].url}
              className="w-full h-96 md:h-[500px]"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="360 Tour"
            />
          </div>
        ) : showVideo ? (
          <div className="relative w-full aspect-video">
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 bg-white p-2 rounded-full z-10 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <iframe 
              src={`https://player.vimeo.com/video/455717216?autoplay=1&muted=1`}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              sandbox="allow-same-origin allow-scripts allow-popups"
              title="Vimeo Video"
            />
          </div>
        ) : (
          <img 
            src={typeof galleryImages[selectedImage] === 'string' 
                  ? galleryImages[selectedImage] 
                  : galleryImages[selectedImage].thumbnail} 
            alt="Vessel" 
            className="w-full h-auto object-contain"
          />
        )}
      </div>
      
      {/* Miniaturas */}
      <div className="flex space-x-3 overflow-x-auto py-2">
        {galleryImages.map((img, index) => {
          if (typeof img === 'string') {
            return (
              <button 
                key={index} 
                onClick={() => {
                  setSelectedImage(index);
                  setShow360View(false);
                  setShowVideo(false);
                }}
                className={`flex-shrink-0 ${selectedImage === index && !show360View && !showVideo ? 'ring-2 ring-blue-500 rounded-lg' : ''}`}
              >
                <img 
                  src={img} 
                  alt={`Thumbnail ${index}`}
                  className="w-20 h-20 object-cover rounded-lg"
                />
              </button>
            );
          } else if (img.type === "video") {
            return (
              <button 
                key={index}
                onClick={() => {
                  setSelectedImage(index);
                  setShowVideo(true);
                  setShow360View(false);
                }}
                className={`flex-shrink-0 w-20 h-20 bg-gray-200 rounded-lg overflow-hidden relative ${showVideo ? 'ring-2 ring-blue-500' : ''}`}
              >
                <img 
                  src={img.thumbnail} 
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white opacity-90" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </button>
            );
          } else {
            return (
              <button 
                key={index}
                onClick={() => {
                  setSelectedImage(index);
                  setShow360View(true);
                  setShowVideo(false);
                }}
                className={`flex-shrink-0 w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center ${show360View ? 'ring-2 ring-blue-500' : ''}`}
              >
                <span className="text-lg font-semibold text-gray-700">360°</span>
              </button>
            );
          }
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />

      {/* Featured Vessel Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">ASD Tug 3212</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The ASD Tug 3212 has excellent seakeeping behaviour, superb manoeuvrability and outstanding towing capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Key Figures */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">Key Figures</h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {keyFigures.map((figure, index) => {
                  const IconComponent = figure.icon;
                  return (
                    <div key={index} className={`p-6 rounded-xl border-2 ${getColorClasses(figure.color)} transition-all duration-300 transform hover:-translate-y-1 cursor-pointer`}>
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
              <div className="text-center mt-8">
                <Link 
                  href="https://vesselconfigurator.damen.com/configure/ASD%20Tug%203212"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center mx-auto"
                >
                  View ASD Tug 3212
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Galería de Imágenes */}
            <div>
              <ImageGallery />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vesselSpecs.map((spec, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{spec.label}</h3>
                <ul className="space-y-3">
                  {spec.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Compare Similar Tugs</h2>
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Vessel</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Bollard Pull (t)</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Length (m)</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Max Crew</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Speed (kn)</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Beam (m)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {comparisons.map((vessel, index) => (
                    <tr key={index} className={`hover:bg-gray-50 transition-colors ${vessel.featured ? 'bg-blue-50' : ''}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-semibold text-gray-900">{vessel.name}</div>
                        {vessel.featured && <div className="text-xs text-blue-600 font-medium">Featured</div>}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900 font-medium">{vessel.bollardPull}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900">{vessel.length}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900">{vessel.crew}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900">{vessel.speed}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900">{vessel.beam}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Damen Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center group">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-3">{article.date}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 line-clamp-3">{article.title}</h3>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center group">
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="https://vesselconfigurator.damen.com/configure/ASD%20Tug%203212"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center"
          >
              <Settings className="mr-2 h-5 w-5" />
              Configure Your Vessel
          </Link>
          
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center">
            <Mail className="mr-2 h-5 w-5" />
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Ship className="h-6 w-6 text-white" />
                </div>
                <span className="ml-3 text-2xl font-bold">DAMEN</span>
              </div>
              <p className="text-gray-400 mb-6">
                Leading shipbuilding company specializing in tugs and workboats with innovative solutions for maritime operations.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm">in</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm">tw</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Vessels</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">ASD Tugs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">RSD Tugs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Workboats</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Naval Vessels</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Finance Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lifecycle Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Local Build</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trading</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-blue-400" />
                  <span>+31 (0)183 63 99 11</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-blue-400" />
                  <span>info@damen.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-blue-400 mt-1" />
                  <span>Avelingen West 20<br />4202 MS Gorinchem<br />Netherlands</span>
                </div>
              </div>
              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Get In Touch
              </button>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Damen Shipyards. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
