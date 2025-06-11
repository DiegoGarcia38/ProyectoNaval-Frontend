export default function Solutions() {
  const solutions = [
    {
      title: 'Finance your vessel',
      description: 'A reliable partner from start to finish. Explore solutions of Damen Financial Services.',
      link: '#'
    },
    {
      title: 'Lifecycle support',
      description: 'From delivery onwards, Damen Services supports you, every step of the way.',
      link: '#'
    },
    {
      title: 'Build your vessel locally',
      description: 'Build a proven Damen design, at a location of your choice.',
      link: '#'
    },
    {
      title: 'Trade-in your current vessel',
      description: 'Explore our options for vessel trade-in at Damen Trading. Our in-house shipbroker.',
      link: '#'
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">Damen Solutions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
              <p className="text-gray-600 mb-4">{solution.description}</p>
              <a href={solution.link} className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

