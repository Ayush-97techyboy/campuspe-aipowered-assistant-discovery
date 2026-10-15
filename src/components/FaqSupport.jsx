"use client";

import React from "react";
import { ArrowUpRight, Phone, ArrowRight } from "lucide-react";

export default function FaqSupport({
  onContactSupport,
  onScheduleCall,
  onExploreColleges,
  onFindOpportunities,
  onListCollege,
  onPostJob,
}) {
  return (
    <section className="py-16 lg:py-20 bg-white" aria-label="Support and Quick Actions">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Card 1: Still have questions? */}
        <div className="relative rounded-3xl p-8 sm:p-14 text-center overflow-hidden border border-blue-100 bg-gradient-to-b from-blue-50/70 via-blue-50/30 to-white shadow-sm">
          <div className="ambient-glow bg-blue-200/50 w-72 h-72 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mb-3 tracking-tight">
              Still have questions?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-8 font-medium">
              Our support team is here to help you succeed. Get in touch anytime.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={onContactSupport}
                className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full font-semibold text-white bg-primary hover:bg-primary-hover shadow-md shadow-blue-500/25 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all duration-150"
              >
                <span>Contact Support</span>
                <ArrowUpRight size={18} />
              </button>

              <button
                type="button"
                onClick={onScheduleCall}
                className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full font-semibold text-primary border-2 border-primary bg-white hover:bg-blue-50 shadow-sm active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all duration-150"
              >
                <span>Schedule a Call</span>
                <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center">
                  <Phone size={12} />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Card 2: Ready for what's next? */}
        <div className="rounded-3xl p-8 sm:p-10 border border-slate-200/90 bg-white shadow-card">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-2">
                Ready for what&apos;s next?
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Discover colleges, find opportunities, list your institution, or start hiring with CampusPe.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onExploreColleges}
                className="inline-flex items-center gap-1.5 py-2.5 px-5 rounded-full text-xs sm:text-sm font-semibold text-white bg-primary hover:bg-primary-hover shadow-sm shadow-blue-500/20 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all duration-150"
              >
                <span>Explore Colleges</span>
                <ArrowRight size={14} />
              </button>

              <button
                type="button"
                onClick={onFindOpportunities}
                className="inline-flex items-center gap-1.5 py-2.5 px-5 rounded-full text-xs sm:text-sm font-semibold text-white bg-primary hover:bg-primary-hover shadow-sm shadow-blue-500/20 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all duration-150"
              >
                <span>Find Opportunities</span>
                <ArrowRight size={14} />
              </button>

              <button
                type="button"
                onClick={onListCollege}
                className="inline-flex items-center gap-1.5 py-2.5 px-5 rounded-full text-xs sm:text-sm font-semibold text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-slate-50 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all duration-150"
              >
                <span>List Your College</span>
                <ArrowRight size={14} />
              </button>

              <button
                type="button"
                onClick={onPostJob}
                className="inline-flex items-center gap-1.5 py-2.5 px-5 rounded-full text-xs sm:text-sm font-semibold text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-slate-50 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all duration-150"
              >
                <span>Post a Job</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
