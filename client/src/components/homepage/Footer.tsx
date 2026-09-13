import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  ArrowRight,
} from "lucide-react";
import { FaFacebookSquare, FaInstagram, FaYoutube   } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function FooterSection() {
  return (
    <footer className="w-full bg-slate-50/60 pt-10 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Top Call-to-Action Card */}
        <div className="relative w-full rounded-2xl overflow-hidden bg-slate-900 min-h-55 sm:min-h-65 flex items-center shadow-xl">
          
          {/* Background Image with Dark Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/city-skyline.jpg"
              alt="City skyline at dusk with person"
              fill
              className="object-cover object-right sm:object-center"
              priority
            />
            {/* Dark gradient overlay on the left to ensure text legibility */}
            <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-900/80 to-transparent z-10" />
          </div>

          {/* Banner Content */}
          <div className="relative z-20 p-6 sm:p-10 max-w-xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Lost something? Don't give up yet.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Thousands of people help each other reconnect with what matters.
            </p>
            <div className="pt-2">
              <Link
                href="/report"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-xl text-sm transition-colors shadow-md shadow-blue-600/30 group"
              >
                <span>Report an Item</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer Navigation Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 border-t border-slate-200/60">
          
          {/* Left: Brand Logo & Primary Nav Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 sm:gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 text-white p-1.5 rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 fill-white text-blue-600" />
              </div>
              <span className="text-xl font-bold text-blue-600 tracking-tight">
                Findly
              </span>
            </Link>

            {/* Links */}
            <nav className="flex items-center space-x-6 text-xs sm:text-sm font-medium text-slate-500">
              <Link href="/about" className="hover:text-slate-900 transition-colors">
                About
              </Link>
              <Link href="/help" className="hover:text-slate-900 transition-colors">
                Help
              </Link>
              <Link href="/safety" className="hover:text-slate-900 transition-colors">
                Safety
              </Link>
              <Link href="/terms" className="hover:text-slate-900 transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-slate-900 transition-colors">
                Privacy
              </Link>
            </nav>
          </div>

          {/* Right: Social Icons & Copyright */}
          <div className="flex flex-col items-center md:items-end space-y-2">
            <div className="flex items-center space-x-4 text-slate-600">
              <a
                href="#"
                className="p-1 hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookSquare className="w-4 h-4 fill-current stroke-none" />
              </a>
              <a
                href="#"
                className="p-1 hover:text-black transition-colors"
                aria-label="Twitter"
              >
                <FaXTwitter className="w-4 h-4 fill-current stroke-none" />
              </a>
              <a
                href="#"
                className="p-1 hover:text-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram  className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-1 hover:text-red-600 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>

            <p className="text-[11px] text-slate-400 font-medium">
              © {new Date().getFullYear()} Findly. All rights reserved.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}