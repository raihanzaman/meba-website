"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#1a4d3a] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/meba.jpg"
              alt="MEBA Logo"
              width={50}
              height={50}
              className="object-contain cursor-pointer transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          
          <div className="flex items-center space-x-1">
            <Link
              href="/eboard"
              className="text-[#f5f1e8] hover:text-[#d4af37] px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 font-medium"
            >
              EBoard
            </Link>
            <Link
              href="/programs"
              className="text-[#f5f1e8] hover:text-[#d4af37] px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 font-medium"
            >
              Programs
            </Link>
            <Link
              href="https://mailchi.mp/stern/meba-newsletter-signup-form"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f5f1e8] text-[#1a4d3a] font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:bg-[#d4af37] hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Join Newsletter
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
