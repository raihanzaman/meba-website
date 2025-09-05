

export default function Home() {
  return (
    <div className="min-h-screen">

      <div className="relative bg-[#D8B7DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-5xl text-center font-bold text-gray-900 leading-tight mb-8">
            Middle East Business Association
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Random text Random text Random text Random text Random text Random text 
                Random text Random text Random text Random text Random text 
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg aspect-square flex items-center justify-center col-span-2">
                <div className="text-center p-8">
                  <p className="font-medium text-green-800">Insert Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
              <p className="text-lg text-gray-600 mb-6">
                MEBA general meetings and programs welcome all NYU students. We meet 
                weekly on Thursdays at 7:00 PM.
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">General Meeting</h4>
                <p className="text-gray-600">Thursday, September 5th at 7:00 PM</p>
                <p className="text-sm text-gray-500">Topic: Fintech Innovation in the Gulf States</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
