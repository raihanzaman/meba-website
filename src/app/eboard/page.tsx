import Card from "@/components/card";

export default function eboard() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="meba-gradient p-20">
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
              name="Bryce Clancy"
              title="Director of Marketing"
              imageSrc="/bryce.jpg"
            />
            <Card
              name="Toan Cao"
              title="Director of Marketing"
              imageSrc="/toan.jpg"
            />
            <Card
              name="Saami Ali"
              title="Investment Team Leader"
              imageSrc="/saami.jpg"
            />
            <Card
              name="Senna Abraham"
              title="Director of Events"
              imageSrc="/senna.jpg"
            />
            <Card
              name="Asim Abdullah"
              title="Senior Advisor"
              imageSrc="/asim.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}