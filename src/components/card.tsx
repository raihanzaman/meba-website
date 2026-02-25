import Image from "next/image";

interface CardProps {
    name: string;
    title: string;
    imageSrc: string;
}

export default function Card({ name, title, imageSrc}: CardProps) {
    return (
        <div className="meba-card flex flex-col items-center px-4 py-6 w-full max-w-sm mx-auto group">
            <div className="w-48 h-48 mb-4 relative">
                <div className="w-full h-full rounded-full bg-linear-to-br from-[#d4af37] to-[#2d5a47] p-1">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        {imageSrc ? (
                            <Image
                                src={imageSrc}
                                alt={name}
                                width={192}
                                height={192}
                                className="rounded-full object-cover w-48 h-48"
                            />
                        ) : (
                            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#1a4d3a] to-[#2d5a47] flex items-center justify-center">
                                <span className="text-white font-bold text-2xl">
                                    {name.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                        )}
                    </div>
                </div>
            </div>
            <h2 className="text-2xl font-bold text-[#1a4d3a] mb-2 text-center group-hover:text-[#2d5a47] transition-colors duration-300">
                {name}
            </h2>
            <div className="text-base text-[#1a4d3a] font-medium text-center bg-[#f5f1e8] px-4 py-1 rounded-full">
                {title}
            </div>
        </div>
    );
}