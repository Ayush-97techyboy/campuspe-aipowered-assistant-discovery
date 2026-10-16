"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AppInterfaceShowcase({ onDownloadApp }) {
  const [activeScreenIndex, setActiveScreenIndex] = useState(2); // Center phone active

  const phones = [
    {
      id: 0,
      title: "Student Feed",
      src: "/assets/phones/phone_0.png",
      width: 186,
      height: 381,
    },
    {
      id: 1,
      title: "Post a Job",
      src: "/assets/phones/phone_1.png",
      width: 217,
      height: 453,
    },
    {
      id: 2,
      title: "Home & Trending Colleges",
      src: "/assets/phones/phone_2.png",
      width: 276,
      height: 569,
    },
    {
      id: 3,
      title: "Applications Tracker",
      src: "/assets/phones/phone_3.png",
      width: 219,
      height: 457,
    },
    {
      id: 4,
      title: "College Admissions Portal",
      src: "/assets/phones/phone_4.png",
      width: 185,
      height: 386,
    },
  ];

  return (
    <section className="py-10 lg:py-14 bg-white relative overflow-hidden" aria-labelledby="showcase-heading">

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header (Figma: Roboto 700 36px #0098FF, Inter 400 16px #6C6C72) */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
          <h2
            id="showcase-heading"
            className="text-3xl sm:text-[36px] sm:leading-[42.2px] font-bold text-[#0098FF] font-roboto mb-4 tracking-tight"
          >
            Checkout Our App Interface Look
          </h2>
          <p className="text-[15px] sm:text-[16px] sm:leading-[22px] text-[#6C6C72] font-normal leading-relaxed font-sans">
            Experience the power of a unified campus ecosystem right in your pocket.{" "}
            <span className="font-semibold text-slate-800">CampusPe</span> offers a
            tailored interface for every user: students can explore trending courses,
            colleges can showcase their campus life, and companies can post job
            vacancies directly to a pool of qualified candidates.
          </p>
        </div>

        {/* 5 Mockup Phones Display / Carousel */}
        <div className="relative mb-12">
          {/* Desktop Arc Layout with dynamic active screen in centre */}
          <div className="hidden md:flex relative h-[610px] w-full max-w-[1240px] mx-auto items-center justify-center overflow-visible py-4 my-2">
            <div className="h-[580px] w-full flex items-center justify-center gap-3 lg:gap-4 xl:gap-5 transform scale-[0.75] md:scale-[0.82] lg:scale-[0.92] xl:scale-100 origin-center transition-transform duration-300">
              {phones.map((phone, idx) => {
                const distance = Math.abs(idx - activeScreenIndex);

                let width = 185.5;
                let height = 383;
                let zIndex = 10;
                let opacity = "opacity-75 hover:opacity-100";

                if (distance === 0) {
                  // Active Center / Main phone screen: largest (Figma: 275.91 x 569)
                  width = 275.91;
                  height = 569;
                  zIndex = 30;
                  opacity = "opacity-100";
                } else if (distance === 1) {
                  // Immediate before & after neighbors: medium (Figma: 216.49 x 452.88)
                  width = 216.49;
                  height = 452.88;
                  zIndex = 20;
                  opacity = "opacity-90 hover:opacity-100";
                } else {
                  // Outer screens: small (Figma: 185.5 x 383)
                  width = 185.5;
                  height = 383;
                  zIndex = 10;
                  opacity = "opacity-70 hover:opacity-95";
                }

                return (
                  <button
                    key={phone.id}
                    type="button"
                    onClick={() => setActiveScreenIndex(idx)}
                    aria-label={`Select ${phone.title} screen`}
                    aria-pressed={distance === 0}
                    style={{
                      width: `${width}px`,
                      height: `${height}px`,
                      zIndex,
                    }}
                    className={`relative flex-shrink-0 cursor-pointer flex items-center justify-center self-center rounded-[38px] transition-all duration-500 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0377EB]/50 transform-gpu ${opacity}`}
                    title={`Click to focus ${phone.title}`}
                  >
                    <div className="relative w-full h-full flex items-center justify-center pointer-events-none transition-all duration-500 ease-out">
                      <Image
                        src={phone.src}
                        alt={`${phone.title} mobile mockup`}
                        width={276}
                        height={569}
                        className="w-full h-full object-contain drop-shadow-2xl select-none transition-all duration-500 ease-out"
                        priority={distance === 0}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Single Phone Slider */}
          <div className="md:hidden flex flex-col items-center">
            <div className="relative w-[276px] max-w-full mb-4">
              <Image
                src={phones[activeScreenIndex].src}
                alt={`${phones[activeScreenIndex].title} mobile preview`}
                width={276}
                height={569}
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() =>
                  setActiveScreenIndex((prev) => (prev > 0 ? prev - 1 : phones.length - 1))
                }
                aria-label="Previous mobile app screen"
                className="p-2 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-xs font-semibold text-slate-700">
                {phones[activeScreenIndex].title}
              </span>
              <button
                type="button"
                onClick={() =>
                  setActiveScreenIndex((prev) => (prev < phones.length - 1 ? prev + 1 : 0))
                }
                aria-label="Next mobile app screen"
                className="p-2 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* 5 Indicator Dots with #0377EB brand styling */}
          <div className="flex items-center justify-center gap-2.5 mt-12 sm:mt-14" role="tablist" aria-label="Screen preview dots">
            {phones.map((phone, idx) => {
              const isActive = idx === activeScreenIndex;
              return (
                <button
                  key={phone.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`View ${phone.title} screen`}
                  onClick={() => setActiveScreenIndex(idx)}
                  className="min-h-[28px] min-w-[28px] flex items-center justify-center rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#0377EB] focus-visible:outline-none"
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-4 h-4 bg-[#0377EB] ring-4 ring-[#0377EB]/25 shadow-sm"
                        : "w-2.5 h-2.5 bg-[#0377EB]/40 hover:bg-[#0377EB]/80 hover:scale-125"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 2: Download App Now */}
        <div className="mt-12 pt-8 lg:mt-14 lg:pt-10 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading & Stores (Figma: Roboto 700 36px #0098FF, Inter 400 16px #6C6C72) */}
            <div className="lg:col-span-6">
              <h2 className="text-3xl sm:text-[36px] sm:leading-[42.2px] font-bold text-[#0098FF] font-roboto mb-5 tracking-tight">
                Download App Now
              </h2>
              <p className="text-[15px] sm:text-[16px] sm:leading-[22px] text-[#6C6C72] font-normal leading-relaxed mb-8 font-sans">
                Elevate your academic journey with Campuspe, the all-in-one digital
                ecosystem designed to bridge the gap between education and industry.
                Whether you’re a student seeking your next big internship, a college
                looking to empower your cohort, or a company scouting for top-tier
                talent, Campuspe streamlines the connection. Your career doesn&apos;t start
                at graduation—it starts here.
              </p>

              {/* App Store / Google Play Buttons with fixed bounded dimensions */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onDownloadApp("Google Play")}
                  aria-label="Get it on Google Play"
                  className="inline-block rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-150 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                >
                  <Image
                    src="/assets/google_play.png"
                    alt="Get it on Google Play"
                    width={155}
                    height={48}
                    className="h-[48px] w-auto max-w-[160px] object-contain"
                  />
                </button>

                <button
                  type="button"
                  onClick={() => onDownloadApp("App Store")}
                  aria-label="Download on the App Store"
                  className="inline-block rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-150 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                >
                  <Image
                    src="/assets/app_store.png"
                    alt="Download on the App Store"
                    width={155}
                    height={48}
                    className="h-[48px] w-auto max-w-[160px] object-contain"
                  />
                </button>
              </div>
            </div>

            {/* Right Column: 3D perspective mockup with explicit bounding box */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full max-w-[560px]">
                <Image
                  src="/assets/phones/iphone_download_mockup.png"
                  alt="CampusPe dual app experience on mobile devices"
                  width={580}
                  height={420}
                  className="w-full h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
