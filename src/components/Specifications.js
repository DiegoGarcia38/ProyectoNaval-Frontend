export default function Specifications() {
  const specifications = {
    dimensions: [
      { label: 'Length o.a.', value: '32.7 m' },
      { label: 'Beam o.a.', value: '12.82 m' },
      { label: 'Draught aft max', value: '5.90 m' },
      { label: 'Displacement', value: '800 t' },
      { label: 'Gross tonnage', value: '450 t' },
    ],
    performances: [
      { label: 'Bollard pull ahead', value: '82.4 t' },
      { label: 'Bollard pull astern', value: '77.4 t' },
      { label: 'Speed', value: '13.5 kn' },
    ],
    capacities: [
      { label: 'Fuel oil', value: '148.3 m³' },
      { label: 'Fresh water', value: '15.4 m³' },
      { label: 'Sewage', value: '5.1 m³' },
      { label: 'Clean lubrication oil', value: '6.5 m³' },
      { label: 'Dirty lubrication oil', value: '7.8 m³' },
      { label: 'Bilge water', value: '6.5 m³' },
    ]
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Dimensions</h3>
            <div className="space-y-4">
              {specifications.dimensions.map((spec, index) => (
                <div key={index} className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">{spec.label}</span>
                  <span className="font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Performances</h3>
            <div className="space-y-4">
              {specifications.performances.map((spec, index) => (
                <div key={index} className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">{spec.label}</span>
                  <span className="font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Capacities</h3>
            <div className="space-y-4">
              {specifications.capacities.map((spec, index) => (
                <div key={index} className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">{spec.label}</span>
                  <span className="font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

