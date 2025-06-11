export default function News() {
  const news = [
    {
      title: 'Damen ASD Tug 3212 Multratug 36 is the newest addition to Multraship\'s fleet',
      date: '4 Nov 2024'
    },
    {
      title: 'Damen Shipyards and Muller Dordrecht christen new Damen ASD Tug 3212',
      date: '1 Jul 2024'
    },
    {
      title: 'A new addition to the Multraship fleet with the naming of the Damen ASD Tug 3212 Multratug 35',
      date: '31 May 2024'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Power of Innovation</h2>
          <div className="flex space-x-4">
            <span className="text-gray-600">Full package</span>
            <span className="text-gray-600">Referrals</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-400 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 font-bold text-sm">SHIP</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">{article.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
