import React from "react";
import Link from "next/link";
import { MapPin, Search, ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-slate-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Left: Brand Logo & Main Nav Links */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-blue-600 text-white p-1.5 rounded-full flex items-center justify-center">
              <MapPin className="w-5 h-5 fill-white text-blue-600" />
            </div>
            <span className="text-2xl font-bold text-blue-600 tracking-tight">
              Findly
            </span>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/all-item"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Browse Items
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              How it works
            </Link>
            <Link
              href="/safety"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Safety
            </Link>
          </nav>
        </div>

        {/* Center: Search Input Bar */}
        <div className="hidden lg:flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Search items, categories, or location..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50/80 border border-slate-200/80 rounded-full text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Right: Auth & Action Button */}
        <div className="flex items-center space-x-4">
          <Link
            href="/auth/login"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors px-2 py-1.5"
          >
            Log in
          </Link>

          <Link
            href="/auth/register"
            className="inline-flex items-center space-x-1.5 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-xl text-sm transition-colors shadow-sm"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </header>
  );
}