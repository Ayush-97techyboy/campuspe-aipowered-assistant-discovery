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
      width: 210,
      height: 420,
    },
    {
      id: 1,
      title: "Post a Job",
      src: "/assets/phones/phone_1.png",
      width: 230,
      height: 460,
    },
    {
      id: 2,
      title: "Home & Trending Colleges",
      src: "/assets/phones/phone_2.png",
      width: 280,
      height: 570,
    },
    {
      id: 3,
      title: "Applications Tracker",
      src: "/assets/phones/phone_3.png",
      width: 230,
      height: 460,
    },
    {
      id: 4,
      title: "College Admissions Portal",
      src: "/assets/phones/phone_4.png",
      width: 210,
      height: 420,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" aria-labelledby="showcase-heading">
      {/* Radiant glow arc behind 5 phones matching exact Figma Ellipse 3 (1:1669), 1:1688, 1:1658 */}
      {/* Node 1:1669: Central radiant beam */}
      <div
        className="absolute pointer-events-none top-36 left-1/2 -translate-x-1/2 w-[1000px] lg:w-[1361px] h-[550px] lg:h-[613px] rounded-full z-0"
        style={{
          background: "linear-gradient(to right, #697FFF 0%, #68CEC6 57%, rgba(195, 45, 112, 0.00) 100%)",
          filter: "blur(66px)",
          opacity: 0.85,
        }}
        aria-hidden="true"
      />
      {/* Node 1:1688: Bottom-left 480x480 rounded-full blur 100px */}
      <div
        className="absolute pointer-events-none -bottom-10 -left-12 lg:-left-[93px] w-[380px] h-[380px] lg:w-[480px] lg:h-[480px] rounded-full z-0"
        style={{
          background: "linear-gradient(to right, rgba(165, 243, 252, 0.30) 0%, rgba(191, 219, 254, 0.20) 50%, rgba(191, 219, 254, 0.00) 100%)",
          filter: "blur(100px)",
        }}
        aria-hidden="true"
      />
      {/* Node 1:1658: Bottom-right 481x481 rounded-full blur 110px */}
      <div
        className="absolute pointer-events-none -bottom-10 -right-12 lg:-right-[60px] w-[380px] h-[380px] lg:w-[481px] lg:h-[481px] rounded-full z-0"
        style={{
          background: "linear-gradient(to right, rgba(196, 181, 253, 0.30) 0%, rgba(245, 208, 254, 0.20) 50%, rgba(245, 208, 254, 0.00) 100%)",
          filter: "blur(110px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header (Figma: Roboto 700 36px #0098FF, Inter 400 16px #6C6C72) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
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
        <div className="relative mb-8">
          {/* Desktop Arc Layout */}
          <div className="hidden md:flex items-center justify-center -space-x-8 lg:-space-x-12 py-6">
            {phones.map((phone, idx) => {
              const isCenter = idx === activeScreenIndex;
              return (
                <div
                  key={phone.id}
                  onClick={() => setActiveScreenIndex(idx)}
                  className={`relative cursor-pointer transition-all duration-300 transform flex-shrink-0 ${
                    isCenter
                      ? "scale-105 z-30 opacity-100 ring-2 ring-primary/40 rounded-[44px]"
                      : "scale-90 z-10 opacity-75 hover:opacity-100 hover:scale-95"
                  }`}
                  style={{
                    width: isCenter ? "280px" : "210px",
                    maxWidth: "280px",
                  }}
                  title={phone.title}
                >
                  <Image
                    src={phone.src}
                    alt={`${phone.title} mobile mockup`}
                    width={phone.width}
                    height={phone.height}
                    className="w-full h-auto object-contain drop-shadow-xl select-none pointer-events-none"
                    priority={isCenter}
                  />
                </div>
              );
            })}
          </div>

          {/* Mobile Single Phone Slider */}
          <div className="md:hidden flex flex-col items-center">
            <div className="relative w-[280px] max-w-full mb-4">
              <Image
                src={phones[activeScreenIndex].src}
                alt={`${phones[activeScreenIndex].title} mobile preview`}
                width={280}
                height={540}
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

          {/* 5 Indicator Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-8" role="tablist" aria-label="Screen preview dots">
            {phones.map((phone, idx) => (
              <button
                key={phone.id}
                type="button"
                role="tab"
                aria-selected={idx === activeScreenIndex}
                aria-label={`View ${phone.title} screen`}
                onClick={() => setActiveScreenIndex(idx)}
                className="min-h-[24px] min-w-[24px] flex items-center justify-center rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              >
                <span
                  className={`block rounded-full transition-all duration-200 ${
                    idx === activeScreenIndex
                      ? "w-7 h-2.5 bg-primary"
                      : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Section 2: Download App Now */}
        <div className="mt-24 pt-16 border-t border-slate-100">
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
