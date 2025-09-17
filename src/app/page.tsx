import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="meba-gradient min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight font-serif">
                  Middle East
                  <span className="block text-[#d4af37] font-serif">Business Association</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed font-garamond">
                  Exploring enterprise and capital markets in the emerging Middle East, 
                  fostering a community of like-minded individuals at NYU.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/programs" 
                  className="bg-[#d4af37] text-[#1a4d3a] font-semibold px-8 py-4 rounded-lg hover:bg-[#d4af37] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 text-center"
                >
                  Explore Programs
                </a>
                <a 
                  href="/eboard" 
                  className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#1a4d3a] transition-all duration-300 text-center"
                >
                  Meet Our Team
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="aspect-square bg-gradient-to-br from-[#d4af37] to-[#2d5a47] rounded-xl flex items-center justify-center">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="meba-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a4d3a] mb-6">About MEBA</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We promote a better understanding of the Middle East region through 
              business education, networking, and cultural exchange within the NYU community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="meba-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#2d5a47] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a4d3a] mb-4">Market Analysis</h3>
              <p className="text-gray-600">
                Deep dive into Middle Eastern capital markets and emerging business opportunities.
              </p>
            </div>
            
            <div className="meba-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#2d5a47] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a4d3a] mb-4">Networking</h3>
              <p className="text-gray-600">
                Connect with industry professionals and fellow students interested in the region.
              </p>
            </div>
            
            <div className="meba-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#2d5a47] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a4d3a] mb-4">Education</h3>
              <p className="text-gray-600">
                Learn about cultural nuances and business practices in Middle Eastern markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="meba-gradient py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Upcoming Events</h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Join us for exciting events, workshops, and networking opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="meba-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#d4af37] rounded-lg flex items-center justify-center mr-4">
                  <span className="text-[#1a4d3a] font-bold">18</span>
                </div>
                <div>
                  <p className="text-sm text-[#2d5a47] font-medium">September</p>
                  <p className="text-lg font-bold text-[#1a4d3a]">General Meeting</p>
                </div>
              </div>
              <h3 className="font-semibold text-[#1a4d3a] mb-2">Introduction to MEBA & E-Board</h3>
              <p className="text-gray-600 text-sm mb-4">12:30 PM at UC-19</p>
            </div>
            
            <div className="meba-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#d4af37] rounded-lg flex items-center justify-center mr-4">
                  <span className="text-[#1a4d3a] font-bold">24</span>
                </div>
                <div>
                  <p className="text-sm text-[#2d5a47] font-medium">September</p>
                  <p className="text-lg font-bold text-[#1a4d3a]">Info Session</p>
                </div>
              </div>
              <h3 className="font-semibold text-[#1a4d3a] mb-2">Overview of the Investment Team</h3>
              <p className="text-gray-600 text-sm mb-4">12:30 PM at LC-21</p>
            </div>
          </div>
        </div>
      </section>

      <section className="meba-section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#1a4d3a] mb-6">Ready to Join MEBA?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Stay updated with our latest events and opportunities by joining our newsletter.
          </p>
          <a 
            href="https://mailchi.mp/stern/meba-newsletter-signup-form"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#d4af37] text-[#1a4d3a] font-semibold px-8 py-4 rounded-lg hover:bg-[#d4af37] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 text-center"
          >
            Join Our Newsletter
          </a>
        </div>
      </section>
    </div>
  );
}
