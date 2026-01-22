import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a4d3a] text-[#f5f1e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/meba.jpg"
                alt="MEBA Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="font-bold text-xl text-[#d4af37]">MEBA</span>
            </div>
            <p className="text-[#f5f1e8]/80 text-sm leading-relaxed">
              Middle East Business Association at NYU
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[#d4af37] text-lg">Quick Links</h3>
            <div className="space-y-2">
              <a href="/eboard" className="block text-[#f5f1e8]/80 hover:text-[#d4af37] transition-colors duration-300">
                EBoard
              </a>
              <a href="/programs" className="block text-[#f5f1e8]/80 hover:text-[#d4af37] transition-colors duration-300">
                Programs
              </a>
              <a 
                href="https://mailchi.mp/stern/meba-newsletter-signup-form" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#f5f1e8]/80 hover:text-[#d4af37] transition-colors duration-300"
              >
                Newsletter
              </a>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfYKxuG-8kbpqowmrufDXbPVLjpOvOxmxDWeI7E0pR1npzIEw/viewform" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#f5f1e8]/80 hover:text-[#d4af37] transition-colors duration-300"
              >
                Coffee Chat
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[#d4af37] text-lg">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/mebanyu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-white/10 hover:bg-[#d4af37] hover:text-[#1a4d3a] transition-all duration-300 p-3 rounded-lg"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/company/middle-east-business-association"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="bg-white/10 hover:bg-[#d4af37] hover:text-[#1a4d3a] transition-all duration-300 p-3 rounded-lg"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#2d5a47] mt-8 pt-8 text-center">
          <p className="text-[#f5f1e8]/60 text-sm">
            © 2026 Middle East Business Association. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}