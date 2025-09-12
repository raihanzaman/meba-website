import Image from "next/image";

interface CardProps {
    name: string;
    title: string;
    imageSrc: string;
}

export default function Card({ name, title, imageSrc}: CardProps) {
    return (
        <div className="meba-card flex flex-col items-center p-8 w-full max-w-xs mx-auto group">
            <div className="w-32 h-32 mb-6 relative">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#d4af37] to-[#2d5a47] p-1">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        {imageSrc ? (
                            <Image
                                src={imageSrc}
                                alt={name}
                                width={120}
                                height={120}
                                className="rounded-full object-cover w-30 h-30"
                            />
                        ) : (
                            <div className="w-30 h-30 rounded-full bg-gradient-to-br from-[#1a4d3a] to-[#2d5a47] flex items-center justify-center">
                                <span className="text-white font-bold text-2xl">
                                    {name.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                        )}
                    </div>
                </div>
            </div>
            <h2 className="text-xl font-bold text-[#1a4d3a] mb-2 text-center group-hover:text-[#2d5a47] transition-colors duration-300">
                {name}
            </h2>
            <div className="text-sm text-[#1a4d3a] font-medium text-center bg-[#f5f1e8] px-4 py-1 rounded-full">
                {title}
            </div>
        </div>
    );
}