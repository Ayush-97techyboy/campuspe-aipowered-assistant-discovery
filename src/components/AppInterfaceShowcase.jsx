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

  // Touch swipe support for mobile phone preview
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const minSwipeDistance = 40;

  const onTouchStart = (e) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setActiveScreenIndex((prev) => (prev < phones.length - 1 ? prev + 1 : 0));
    }
    if (isRightSwipe) {
      setActiveScreenIndex((prev) => (prev > 0 ? prev - 1 : phones.length - 1));
    }
  };

  return (
    <section className="py-10 lg:py-14 bg-white relative overflow-hidden" aria-labelledby="showcase-heading">

      <div className="max-w-[1240px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header (Figma: Roboto 700 36px #0098FF, Inter 400 16px #6C6C72) */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-10">
          <h2
            id="showcase-heading"
            className="text-2xl min-[360px]:text-3xl sm:text-[36px] sm:leading-[42.2px] font-bold text-[#0098FF] font-roboto mb-3 sm:mb-4 tracking-tight"
          >
            Checkout Our App Interface Look
          </h2>
          <p className="text-[13px] min-[360px]:text-[14px] sm:text-[16px] sm:leading-[22px] text-[#6C6C72] font-normal leading-relaxed font-sans px-2">
            Experience the power of a unified campus ecosystem right in your pocket.{" "}
            <span className="font-semibold text-slate-800">CampusPe</span> offers a
            tailored interface for every user: students can explore trending courses,
            colleges can showcase their campus life, and companies can post job
            vacancies directly to a pool of qualified candidates.
          </p>
        </div>

        {/* 5 Mockup Phones Display / Carousel */}
        <div className="relative mb-8 sm:mb-12">
          {/* Exact Figma Node 1:1669 ("Ellipse 3") Background Gradient Blur */}
          <div
            className="absolute pointer-events-none left-1/2 -translate-x-1/2 top-0 w-[1361px] h-[613px] rounded-full z-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(105, 127, 255, 0.12) 0%, rgba(104, 206, 198, 0.12) 57.21%, rgba(195, 45, 112, 0) 100%)",
              filter: "blur(66px)",
            }}
            aria-hidden="true"
          />

          {/* Desktop Arc Layout with dynamic active screen in centre */}
          <div className="hidden md:flex relative h-[380px] min-[820px]:h-[440px] min-[960px]:h-[500px] lg:h-[550px] xl:h-[610px] w-full max-w-[1240px] 2xl:max-w-[1400px] mx-auto items-center justify-center overflow-visible py-2 my-2">
            <div className="h-[580px] w-full flex items-center justify-center gap-2.5 sm:gap-3 lg:gap-4 xl:gap-5 transform scale-[0.56] min-[820px]:scale-[0.65] min-[960px]:scale-[0.76] lg:scale-[0.88] xl:scale-100 2xl:scale-105 origin-center transition-transform duration-300">
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

          {/* Mobile Single Phone Slider (Touch Swipable - Zero Height Shift / Zero Flickering) */}
          <div className="md:hidden flex flex-col items-center select-none">
            <div
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              className="relative w-[220px] min-[360px]:w-[250px] sm:w-[276px] h-[453px] min-[360px]:h-[515px] sm:h-[569px] max-w-[85vw] mb-3 cursor-grab active:cursor-grabbing"
              style={{ touchAction: "pan-y" }}
            >
              {phones.map((phone, idx) => (
                <div
                  key={phone.id}
                  className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-200 ease-out ${
                    idx === activeScreenIndex ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
                  }`}
                >
                  <Image
                    src={phone.src}
                    alt={`${phone.title} mobile preview`}
                    width={276}
                    height={569}
                    className="w-full h-full object-contain drop-shadow-xl pointer-events-none"
                    priority={idx === 2 || idx === activeScreenIndex}
                  />
                </div>
              ))}
            </div>

            {/* Current Active Screen Title (Fixed min-height to eliminate vertical text shift) */}
            <div className="text-center mt-1 min-h-[22px] flex items-center justify-center">
              <span className="text-xs sm:text-sm font-semibold text-slate-700 tracking-tight transition-all duration-150">
                {phones[activeScreenIndex].title}
              </span>
            </div>
          </div>

          {/* 5 Indicator Dots with #0377EB brand styling */}
          <div className="flex items-center justify-center gap-2.5 mt-6 sm:mt-8 md:mt-10 lg:mt-12" role="tablist" aria-label="Screen preview dots">
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
        <div className="mt-10 pt-6 lg:mt-14 lg:pt-10 relative overflow-hidden">
          {/* Ambient background glows matching exact Figma Nodes 1:1688 (bottom-left) & 1:1658 (bottom-right) */}
          {/* Node 1:1688: Bottom-left circle (480x480, layer blur 100px, soft cyan-blue gradient) */}
          <div
            className="absolute pointer-events-none -bottom-24 -left-24 lg:-left-[93px] w-[380px] h-[380px] lg:w-[480px] lg:h-[480px] rounded-full z-0"
            style={{
              background: "linear-gradient(45deg, rgba(165, 243, 252, 0.35) 0%, rgba(191, 219, 254, 0.22) 50%, rgba(191, 219, 254, 0.00) 100%)",
              filter: "blur(100px)",
            }}
            aria-hidden="true"
          />
          {/* Node 1:1658: Bottom-right circle (481x481, layer blur 110px, soft violet-pink gradient) */}
          <div
            className="absolute pointer-events-none -bottom-24 -right-24 lg:-right-[100px] w-[380px] h-[380px] lg:w-[481px] lg:h-[481px] rounded-full z-0"
            style={{
              background: "linear-gradient(225deg, rgba(196, 181, 253, 0.35) 0%, rgba(245, 208, 254, 0.22) 50%, rgba(245, 208, 254, 0.00) 100%)",
              filter: "blur(110px)",
            }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
            {/* Left Column: Heading & Stores (Figma: Roboto 700 36px #0098FF, Inter 400 16px #6C6C72) */}
            <div className="lg:col-span-6 text-center sm:text-left">
              <h2 className="text-2xl min-[360px]:text-3xl sm:text-[36px] sm:leading-[42.2px] font-bold text-[#0098FF] font-roboto mb-4 sm:mb-5 tracking-tight">
                Download App Now
              </h2>
              <p className="text-[13px] min-[360px]:text-[14px] sm:text-[16px] sm:leading-[22px] text-[#6C6C72] font-normal leading-relaxed mb-6 sm:mb-8 font-sans">
                Elevate your academic journey with Campuspe, the all-in-one digital
                ecosystem designed to bridge the gap between education and industry.
                Whether you’re a student seeking your next big internship, a college
                looking to empower your cohort, or a company scouting for top-tier
                talent, Campuspe streamlines the connection. Your career doesn&apos;t start
                at graduation—it starts here.
              </p>

              {/* App Store / Google Play Buttons with fixed bounded dimensions */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4">
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
                    className="h-[44px] sm:h-[48px] w-auto max-w-[155px] object-contain"
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
                    className="h-[44px] sm:h-[48px] w-auto max-w-[155px] object-contain"
                  />
                </button>
              </div>
            </div>

            {/* Right Column: 3D perspective mockup with explicit bounding box */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full max-w-[480px] lg:max-w-[560px] 2xl:max-w-[640px]">
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
