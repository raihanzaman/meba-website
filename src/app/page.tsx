

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
              <p className="text-lg text-black mb-8 leading-relaxed">
                Welcome to the Middle East Business Association (MEBA) at NYU! We explore enterprise and capital markets in the emerging Middle East, promoting a better understanding of the region and fostering a community of like-minded individuals within Stern and the broader NYU community. 
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
          <div className="flex justify-center">
            <div className="w-full max-w-xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Upcoming Events</h2>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <h4 className="font-bold text-gray-900 mb-2">General Meeting</h4>
                <p className="text-sm text-gray-500">Introduction to MEBA</p>
                <p className="text-gray-600">Date: TBD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
