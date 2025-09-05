import Image from "next/image";

interface CardProps {
    name: string;
    title: string;
    imageSrc: string;
}

export default function Card({ name, title, imageSrc}: CardProps) {
    return (
        <div className="bg-gray-200 rounded-2xl shadow-lg flex flex-col items-center p-8 w-full max-w-xs mx-auto transition hover:shadow-xl">
            <div className="w-32 h-32 mb-4">
                <Image
                    src={imageSrc}
                    alt={name}
                    width={128}
                    height={128}
                    className="rounded-full object-cover w-32 h-32"
                />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-1 uppercase tracking-wide">{name}</h2>
            <div className="text-sm text-gray-500 mb-4">{title}</div>
        </div>
    );
}