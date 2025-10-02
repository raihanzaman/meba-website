import Image from "next/image";

export default function Programs() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="meba-gradient py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 font-serif">
                        MEBA <span className="text-[#d4af37] font-serif">Programs</span>
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-garamond">
                        Discover our comprehensive programs designed to deepen your understanding 
                        of Middle Eastern business markets and investment opportunities.
                    </p>
                </div>
            </section>

            {/* Investment Team Program */}
            <section className="meba-section bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="mb-6">
                                <span className="bg-[#d4af37] text-[#1a4d3a] px-4 py-2 rounded-full text-sm font-semibold">
                                    INVESTMENT TEAM
                                </span>
                            </div>
                            <h2 className="text-4xl font-bold text-[#1a4d3a] mb-6">
                                Investment Analysis Program
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-garamond">
                            The Investment Team Program offers a structured, hands-on experience in finance and Middle Eastern markets through eight weeks of interactive workshops, guest-led discussions, and practical assignments. Covering topics such as business and finance careers, networking, accounting, valuation, economics, and fixed income/derivatives, members complete curated readings and case-based deliverables. These include
                            DCF models, comparative analyses, and trading strategy pitches—while developing technical skills, industry knowledge, and regional market insights.
                            <br /><br /> Applications closed.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-[#1a4d3a] text-sm font-bold">✓</span>
                                    </div>
                                    <p className="text-lg text-gray-600 font-garamond">Gain exposure to real-world market analysis and regional industry insights</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-[#1a4d3a] text-sm font-bold">✓</span>
                                    </div>
                                    <p className="text-lg text-gray-600 font-garamond">Build technical expertise in valuation, accounting, and financial modeling</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-[#1a4d3a] text-sm font-bold">✓</span>
                                    </div>
                                    <p className="text-lg text-gray-600 font-garamond">Develop and pitch investment strategies across multiple asset classes</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="meba-card p-8">
                                <div className="aspect-video bg-gradient-to-br from-[#d4af37] to-[#2d5a47] rounded-xl flex items-center justify-center mb-6">
                                    <Image src="/middle-east3.jpg" alt="MEBA Logo" width={1300} height={867} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Programs */}
            <section className="meba-section-alt p-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#1a4d3a] mb-6">Additional Programs</h2>
                        <p className="text-2xl text-gray-600 max-w-2xl mx-auto font-garamond">
                            Explore our diverse range of educational and networking programs.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="meba-card p-8 text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#2d5a47] rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl">🎓</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#1a4d3a] mb-4">Educational Workshops</h3>
                            <p className="text-gray-600 mb-6 font-garamond text-lg">
                                Interactive sessions covering Middle Eastern business practices, 
                                cultural insights, and market dynamics.
                            </p>
                        </div>
                        
                        <div className="meba-card p-8 text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#2d5a47] rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl">🤝</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#1a4d3a] mb-4">Networking Events</h3>
                            <p className="text-gray-600 mb-6 font-garamond text-lg">
                                Connect with industry professionals, alumni, and fellow students 
                                interested in Middle Eastern markets.
                            </p>
                        </div>
                        
                        <div className="meba-card p-8 text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#2d5a47] rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl">🌍</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#1a4d3a] mb-4">Social Events</h3>
                            <p className="text-gray-600 mb-6 font-garamond text-lg">
                                Enjoy fun social gatherings and activities designed to help you connect with fellow MEBA members and build lasting friendships within our community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}