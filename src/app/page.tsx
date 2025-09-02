

export default function Home() {
  return (
    <div className="min-h-screen bg-[#8a30d9]">

      <div className="relative bg-[#D8B7DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                Middle East Business Association
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Random text Random text Random text Random text Random text Random text 
                Random text Random text Random text Random text Random text 
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg aspect-square flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">👥</span>
                  </div>
                  <p className="text-sm font-medium text-amber-800">Community Events</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg aspect-square flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">🏢</span>
                  </div>
                  <p className="text-sm font-medium text-blue-800">Corporate Partnerships</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg aspect-square flex items-center justify-center col-span-2">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">🌍</span>
                  </div>
                  <p className="font-medium text-green-800">Bridging Cultures, Building Futures</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">General Meetings</h2>
              <p className="text-lg text-gray-600 mb-6">
                MEBA general meetings and programs welcome all NYU students. We meet 
                weekly on Thursdays at 7:00 PM.
              </p>
              <p className="text-gray-600 mb-8">
                So far, we've hosted over 50 speakers including business leaders, 
                cultural experts, and entrepreneurs from across the Middle East - 
                the best in their fields. Subscribe to our newsletter to stay updated!
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Next Meeting:</h4>
                <p className="text-gray-600">Thursday, September 5th at 7:00 PM</p>
                <p className="text-sm text-gray-500">Topic: "Fintech Innovation in the Gulf States"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
