import Card from "@/components/card";

export default function eboard() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="meba-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            MEBA <span className="text-[#d4af37]">E-Board</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {`Meet the dedicated leaders who drive MEBA's mission to explore and understand 
            Middle Eastern business markets at NYU.`}
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="meba-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a4d3a] mb-6">Our Leadership Team</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <Card
              name="Issa Taha"
              title="President"
              imageSrc="/issa.jpg"
            />
            <Card
              name="Nihar Guha"
              title="Treasurer"
              imageSrc="/nihar.jpg"
            />
            <Card
              name="Raihan Zaman"
              title="Director of Technology"
              imageSrc="/raihan.jpg"
            />
            <Card
              name="Jacob Shamoun"
              title="Director of Marketing"
              imageSrc="/jacob.jpg"
            />
            <Card
              name="Asim Abdullah"
              title="Director of Marketing"
              imageSrc="/asim.jpg"
            />
            <Card
              name="Saami Ali"
              title="Investment Team Leader"
              imageSrc="/saami.jpg"
            />
            <Card
              name="Senna Abraham"
              title="Events Director"
              imageSrc="/senna.jpg"
            />
            <Card
              name="Rami Awad"
              title="Events Director"
              imageSrc="/rami.jpg"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="meba-section-alt p-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1a4d3a] mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The MEBA E-Board is dedicated to creating meaningful connections between 
                NYU students and the dynamic business landscape of the Middle East. We 
                organize events, facilitate networking, and provide educational opportunities 
                that bridge cultures and markets.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#1a4d3a] text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-600">Organize educational workshops and speaker events</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#1a4d3a] text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-600">Facilitate networking with industry professionals</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#1a4d3a] text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-600">Promote cultural understanding and exchange</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#d4af37] to-[#2d5a47] rounded-2xl p-8 text-center">
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}