import Card from "@/components/card";

export default function eboard() {
  return (
    <div className="min-h-screen bg-[#D8B7DD] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">MEBA E-Board</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            <Card
              name="Issa Taha"
              title="President"
              imageSrc=""
            />
            <Card
              name="Rami Awad"
              title="Co-President"
              imageSrc="/awad.jpg"
            />
            <Card
              name="Nihar Guha"
              title="Treasurer"
              imageSrc=""
            />
            <Card
              name="Raihan Zaman"
              title="Tech Lead"
              imageSrc=""
            />
          </div>
      </div>
    </div>
  );
}