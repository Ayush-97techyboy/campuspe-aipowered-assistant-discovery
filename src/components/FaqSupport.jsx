"use client";

import React from "react";
import Image from "next/image";
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
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden" aria-label="Support and Quick Actions">
      {/* Ambient background glows matching exact Figma Node 1:1697 & 1:1698 */}
      {/* Node 1:1698: Top-left 481x481 rounded-full blur 110px */}
      <div
        className="absolute pointer-events-none -top-12 -left-16 lg:-left-[100px] w-[380px] h-[380px] lg:w-[481px] lg:h-[481px] rounded-full z-0"
        style={{
          background: "linear-gradient(to right, rgba(196, 181, 253, 0.30) 0%, rgba(245, 208, 254, 0.20) 50%, rgba(245, 208, 254, 0.00) 100%)",
          filter: "blur(110px)",
        }}
        aria-hidden="true"
      />
      {/* Node 1:1697: Top-right 351x351 rounded-full blur 100px */}
      <div
        className="absolute pointer-events-none -top-12 -right-12 lg:-right-[60px] w-[300px] h-[300px] lg:w-[351px] lg:h-[351px] rounded-full z-0"
        style={{
          background: "linear-gradient(to right, rgba(165, 243, 252, 0.30) 0%, rgba(191, 219, 254, 0.20) 50%, rgba(191, 219, 254, 0.00) 100%)",
          filter: "blur(100px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Card 1: Still have questions? (Figma: Gradient 1:1701..1:1716 with #007FFC and #FFC1DF glow orbs) */}
        <div className="relative rounded-[28px] p-8 sm:p-14 text-center overflow-hidden border border-[#BFDBFE]/80 bg-gradient-to-b from-[#E0F2FE]/70 via-[#F0F9FF]/80 to-white shadow-sm">
          <div
            className="absolute pointer-events-none -top-20 -right-20 w-[450px] h-[450px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(0, 127, 252, 0.25) 0%, rgba(0, 127, 252, 0.00) 70%)",
              filter: "blur(60px)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute pointer-events-none -bottom-20 -left-20 w-[400px] h-[400px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(255, 193, 223, 0.30) 0%, rgba(255, 193, 223, 0.00) 70%)",
              filter: "blur(60px)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute pointer-events-none top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(191, 219, 254, 0.35) 0%, rgba(191, 219, 254, 0.00) 70%)",
              filter: "blur(50px)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-[36px] sm:leading-[42.2px] font-bold text-[#1E242C] font-roboto mb-3 tracking-tight">
              Still have questions?
            </h2>
            <p className="text-base sm:text-[20px] sm:leading-[28px] text-[#414D60] mb-8 font-medium font-sans">
              Our support team is here to help you succeed. Get in touch anytime.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={onContactSupport}
                className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full text-[14px] leading-[17px] font-semibold text-white bg-primary hover:bg-primary-hover shadow-md shadow-blue-500/25 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all duration-150"
              >
                <span>Contact Support</span>
                <Image src="/assets/icons/arr_up_contact.svg" alt="" width={18} height={18} className="brightness-0 invert object-contain" />
              </button>

              <button
                type="button"
                onClick={onScheduleCall}
                className="inline-flex items-center justify-center gap-2 py-2 px-5 rounded-full text-[16px] leading-[19.4px] font-semibold text-[#007FFC] border-2 border-primary bg-white hover:bg-blue-50 shadow-sm active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all duration-150"
              >
                <span>Schedule a Call</span>
                <Image src="/assets/icons/phone_call.svg" alt="" width={24} height={24} className="object-contain" />
              </button>
            </div>
          </div>
        </div>

        {/* Card 2: Ready for what's next? (Figma: Roboto 700 32px #0F1D36, Inter 500 16px #64748B) */}
        <div className="rounded-3xl p-8 sm:p-10 border border-slate-200/90 bg-white shadow-card">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl sm:text-[32px] sm:leading-[37.5px] font-bold text-[#0F1D36] font-roboto mb-2">
                Ready for what&apos;s next?
              </h3>
              <p className="text-[15px] sm:text-[16px] sm:leading-[20px] text-[#64748B] font-medium font-sans">
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
