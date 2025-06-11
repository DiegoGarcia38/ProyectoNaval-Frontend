
export default function Comparison() {
  const comparisonData = [
    {
      name: 'ASD Tug 3212',
      bollardPull: '82',
      length: '32.70',
      maxCrew: '10',
      speed: '13.5',
      beam: '12.82',
      active: true
    },
    {
      name: 'ASD Tug 2813',
      bollardPull: '60',
      length: '28.57',
      maxCrew: '8',
      speed: '13',
      beam: '11.43',
      active: false
    },
    {
      name: 'ASD Tug 3013',
      bollardPull: '83',
      length: '27.59',
      maxCrew: '10',
      speed: '12.7',
      beam: '12.93',
      active: false
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Compare similar tugs</h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Vessel</th>
                <th className="px-6 py-4 text-center font-semibold">Bollard pull (t)</th>
                <th className="px-6 py-4 text-center font-semibold">Length (m)</th>
                <th className="px-6 py-4 text-center font-semibold">Max crew</th>
                <th className="px-6 py-4 text-center font-semibold">Speed (kn)</th>
                <th className="px-6 py-4 text-center font-semibold">Beam (m)</th>
                <th className="px-6 py-4 text-center font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((vessel, index) => (
                <tr key={index} className={`border-t ${vessel.active ? 'bg-blue-50' : ''}`}>
                  <td className="px-6 py-4 font-semibold">{vessel.name}</td>
                  <td className="px-6 py-4 text-center">{vessel.bollardPull}</td>
                  <td className="px-6 py-4 text-center">{vessel.length}</td>
                  <td className="px-6 py-4 text-center">{vessel.maxCrew}</td>
                  <td className="px-6 py-4 text-center">{vessel.speed}</td>
                  <td className="px-6 py-4 text-center">{vessel.beam}</td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-blue-600 hover:text-blue-800">
                      →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

