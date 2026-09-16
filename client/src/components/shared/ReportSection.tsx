import React from "react";
import Link from "next/link";
import { Search, ArrowRight, ShieldCheck } from "lucide-react";

export default function ReportActionCards() {
  return (
    <section className="w-full py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Lost Something Card */}
        <div className="bg-red-50/50 border border-red-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all hover:shadow-md">
          <div className="flex items-start space-x-4">
            <div className="bg-red-500 text-white p-3 rounded-full shrink-0 flex items-center justify-center shadow-sm">
              <Search className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-900">
                Lost Something?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
                Create a report and let the community help you find it.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="/report-item"
              className="inline-flex items-center space-x-2 bg-white border border-red-200 text-red-600 hover:bg-red-50 font-medium px-5 py-2.5 rounded-xl text-sm transition-colors shadow-sm group"
            >
              <span>Report Lost Item</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Found Something Card */}
        <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all hover:shadow-md">
          <div className="flex items-start space-x-4">
            <div className="bg-emerald-600 text-white p-3 rounded-full shrink-0 flex items-center justify-center shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-900">
                Found Something?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
                Help return it to its rightful owner and make a difference.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="/report-item"
              className="inline-flex items-center space-x-2 bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-50 font-medium px-5 py-2.5 rounded-xl text-sm transition-colors shadow-sm group"
            >
              <span>Report Found Item</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}