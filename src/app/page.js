/* import { ArrowRight, Download, Settings, Ship, Anchor, Gauge, Users, Zap } from 'lucide-react' */
import Header from '../components/Header'
import Hero from '../components/Hero'
import Specifications from '../components/Specifications'
import Comparison from '../components/Comparison'
import Solutions from '../components/Solutions'
import News from '../components/News'
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />

      {/* Key Figures */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Key Figures</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <Link
              href="/vessels/asd-tug-3212"
              className="block p-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">82</div>
                <div className="text-sm text-gray-600">Bollard Pull (t)</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">32.70</div>
                <div className="text-sm text-gray-600">Length (m)</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">10</div>
                <div className="text-sm text-gray-600">Max Crew</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">13.5</div>
                <div className="text-sm text-gray-600">Speed (kn)</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">12.82</div>
                <div className="text-sm text-gray-600">Beam (m)</div>
              </div>

              Ver ASD Tug 3212
            </Link>
          </div>
        </div>
      </section>

      <Specifications />
      <Comparison />
      <Solutions />
      <News />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 bg-blue-400 rounded"></div>
                <span className="ml-2 text-xl font-bold">DAMEN</span>
              </div>
              <p className="text-gray-400">Leading shipbuilding company specializing in tugs and workboats.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Vessels</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Tugs</a></li>
                <li><a href="#" className="hover:text-white">Workboats</a></li>
                <li><a href="#" className="hover:text-white">Naval</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Finance</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
                <li><a href="#" className="hover:text-white">Trading</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">Do you want to know more?</p>
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Damen Shipyards. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
