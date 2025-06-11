export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">ASD Tug 3212</h1>
            <p className="text-xl mb-8 leading-relaxed">
              The ASD Tug 3212 has excellent seakeeping behaviour, superb manoeuvrability and outstanding towing capabilities.
              Good seakeeping characteristics are achieved through a more slender waterline in combination with a relatively low
              wheelhouse, slope frames and bilge keels.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-5 h-5 bg-yellow-400 rounded mr-2"></div>
                <span>IMO Tier III compliant</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-blue-400 rounded mr-2"></div>
                <span>Fire-fighting</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-400 rounded mr-2"></div>
                <span>Oil pollution control</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-red-400 rounded mr-2"></div>
                <span>Aft winch</span>
              </div>
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Configure your own Damen tug
            </button>
          </div>

          <div className="relative">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="w-32 h-32 bg-gray-400 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-bold">SHIP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
