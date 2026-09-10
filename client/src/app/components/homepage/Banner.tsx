import React from "react";
import Image from "next/image";
import {
  Search,
  PlusSquare,
  ShieldCheck,
  CheckCircle2,
  Users,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function Banner() {
  return (
    <section className="relative w-full bg-slate-50/60 py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          
          {/* Top Pill / Tag */}
          <div className="inline-flex items-center space-x-2 bg-blue-100/70 border border-blue-200/80 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold w-fit">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Community Powered</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Find what you've lost. <br />
            <span className="text-blue-600">Return what you've found.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
            Findly connects people with their lost belongings and helps return
            found items to their rightful owners.
          </p>

          {/* Search Bar Input */}
          <div className="flex items-center gap-2 max-w-xl">
            <div className="flex-1 flex items-center bg-white rounded-2xl border border-slate-200 shadow-sm px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
              <Search className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
              <input
                type="text"
                placeholder="Search items, categories or location..."
                className="w-full text-slate-700 bg-transparent placeholder-slate-400 focus:outline-none text-sm sm:text-base"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white p-3.5 rounded-2xl flex items-center justify-center transition-colors shadow-md shadow-blue-500/20 shrink-0"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-1">
            <button className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3.5 rounded-2xl shadow-md shadow-blue-500/20 transition-all text-sm sm:text-base">
              <PlusSquare className="w-4 h-4" />
              <span>Report Lost Item</span>
            </button>
            <button className="inline-flex items-center space-x-2 bg-white hover:bg-slate-50 text-blue-600 border border-blue-200 font-medium px-6 py-3.5 rounded-2xl transition-all text-sm sm:text-base shadow-sm">
              <PlusSquare className="w-4 h-4" />
              <span>Report Found Item</span>
            </button>
          </div>

          {/* Value Highlights / Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200/80">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-blue-100/60 text-blue-600 rounded-xl shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Community Support</h4>
                <p className="text-xs text-slate-500">People help people</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-blue-100/60 text-blue-600 rounded-xl shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Secure Reporting</h4>
                <p className="text-xs text-slate-500">Your privacy matters</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-blue-100/60 text-blue-600 rounded-xl shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Verified Matches</h4>
                <p className="text-xs text-slate-500">More accurate results</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual Image Showcase Column */}
        <div className="lg:col-span-5 relative flex justify-center items-center py-6">
          
          {/* Organic Background Blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200/50 rounded-full filter blur-3xl -z-10 pointer-events-none" />
          
          {/* Location Pin Background Accent */}
          <div className="absolute top-4 right-10 z-0 text-blue-600 drop-shadow-lg">
            <MapPin className="w-12 h-12 fill-blue-600 text-white" />
          </div>

          {/* Floating Cards Container */}
          <div className="relative w-full max-w-md h-90 sm:h-100">
            
            {/* Top-Left Card (Lost Item) */}
            <div className="absolute top-2 left-2 w-52 sm:w-56 bg-white rounded-2xl p-2.5 shadow-xl border border-slate-100 -rotate-6 hover:rotate-0 transition-transform duration-300 z-10">
              <div className="relative w-full h-32 sm:h-36 bg-slate-100 rounded-xl overflow-hidden mb-2.5">
                <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-md z-10 uppercase tracking-wider">
                  LOST
                </span>
                <Image
                  src="/images/wallet.jpg"
                  alt="Black Wallet"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-sm font-bold text-slate-900 px-1">Black Wallet</h3>
              <p className="text-[11px] text-slate-400 px-1 mt-0.5 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400 inline" /> Dhaka • 2 hours ago
              </p>
            </div>

            {/* Bottom-Right Card (Found Item) */}
            <div className="absolute bottom-4 right-2 w-52 sm:w-56 bg-white rounded-2xl p-2.5 shadow-2xl border border-slate-100 rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
              <div className="relative w-full h-32 sm:h-36 bg-slate-100 rounded-xl overflow-hidden mb-2.5">
                <span className="absolute top-2 right-2 bg-emerald-500 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-md z-10 uppercase tracking-wider">
                  FOUND
                </span>
                <Image
                  src="/images/iphone13.jpeg"
                  alt="iPhone 13"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-sm font-bold text-slate-900 px-1">iPhone 13</h3>
              <p className="text-[11px] text-slate-400 px-1 mt-0.5 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400 inline" /> Sylhet • 5 hours ago
              </p>
            </div>

            {/* Connecting Curved Arrow Vector SVG */}
            <svg
              className="absolute bottom-6 left-10 w-36 h-20 text-blue-400 z-0 pointer-events-none hidden sm:block"
              viewBox="0 0 120 70"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="4 4"
            >
              <path d="M 10 10 Q 50 60 110 50" />
              <polyline points="100,55 110,50 105,40" fill="none" strokeWidth="2" />
            </svg>

          </div>
        </div>

      </div>
    </section>
  );
}