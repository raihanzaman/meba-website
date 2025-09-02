"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex w-full h-[60px] items-center justify-between bg-[#b58adb] m-0 px-4">
      <Link href="/" className="flex items-center">
        <Image
          src="/meba.jpg"
          alt="MEBA Logo"
          width={50}
          height={50}
          className="object-contain cursor-pointer"
        />
      </Link>
      <ul className="flex items-center list-none p-0 m-0 space-x-2">
        <li>
          <Link
            href="/eboard"
            className="no-underline text-black text-[1.05em] px-4 transition-colors duration-300 hover:text-white"
          >
            EBoard
          </Link>
        </li>
        <li>
          <Link
            href="/programs"
            className="no-underline text-black text-[1.05em] px-4 transition-colors duration-300 hover:text-white"
          >
            Programs
          </Link>
        </li>
        <li>
          <Link
            href="https://mailchi.mp/stern/meba-newsletter-signup-form"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-black text-[1.05em] font-bold px-4 py-1 rounded transition-colors duration-300 hover:text-white hover:bg-[#a06fc2] border border-black"
          >
            Join our newsletter
          </Link>
        </li>
      </ul>
    </nav>
  );
}
