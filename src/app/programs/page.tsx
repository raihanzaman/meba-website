

export default function Programs() {
    return (
        <div className="bg-[#D8B7DD] py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">MEBA E-Board</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                <div className="text-center text-white p-8">
                </div>
                </div>
            </div>
            <div>
                <div className="mb-8">
                <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">FRESHMAN LIAISON</span>
                </div>
                <p className="text-gray-600">
                    Prepares students with essential skills needed to navigate and succeed 
                    in Middle Eastern business environments, from market analysis to 
                    cross-cultural communication.
                </p>
                </div>
                <div className="mb-8">
                <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">CULTURAL EXCHANGE TEAM</span>
                </div>
                <p className="text-gray-600">
                    Provides students with opportunities to engage with Middle Eastern 
                    culture, traditions, and modern business practices through immersive 
                    experiences and networking events.
                </p>
                </div>
            </div>
            </div>
        </div>
    )
}