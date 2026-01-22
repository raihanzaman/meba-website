import Card from "@/components/card";

export default function eboard() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="meba-gradient py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-[200px]">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 font-serif">
            MEBA <span className="text-[#d4af37] font-serif">E-Board</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-6 font-garamond">
            {`Meet the dedicated leaders who drive MEBA's mission to explore and understand 
            Middle Eastern business markets at NYU.`}
          </p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfYKxuG-8kbpqowmrufDXbPVLjpOvOxmxDWeI7E0pR1npzIEw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#d4af37] text-[#1a4d3a] font-semibold px-8 py-4 rounded-lg hover:bg-[#d4af37] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 text-center inline-block"
          >
            Coffee Chat Us!
          </a>
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
              title="Treasurer"
              imageSrc="/bryce.jpg"
            />
            <Card
              name="Toan Cao"
              title="Secretary"
              imageSrc="/toan.jpg"
            />
            <Card
              name="Saami Ali"
              title="Director of Investment Team"
              imageSrc="/saami.jpg"
            />
            <Card
              name="Hannah Shahidi"
              title="Director of Marketing"
              imageSrc="/hannah.jpg"
            />
            <Card
              name="Cindy Luo"
              title="Director of Marketing"
              imageSrc="/cindy.jpg"
            />
            <Card
              name="Vedanti Gupta"
              title="Director of Events"
              imageSrc="/vedanti.jpg"
            />
            <Card
              name="Mariam Grigoryan"
              title="Director of Events"
              imageSrc="/mariam.jpg"
            />
            <Card
              name="Coby Lin"
              title="Assistant Director of Investment Team"
              imageSrc="/coby.jpg"
            />
            <Card
              name="Ethan Lai"
              title="Assistant Director of Investment Team"
              imageSrc="/ethan.jpg"
            />
            <Card
              name="Rami Awad"
              title="Senior Advisor"
              imageSrc="/rami.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}