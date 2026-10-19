"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function AppInterfaceShowcase({ onDownloadApp }) {
  const [activeScreenIndex, setActiveScreenIndex] = useState(2); // Center phone active by default
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const phones = [
    {
      id: 0,
      title: "Student Feed",
      src: "/assets/phones/phone_0.png",
    },
    {
      id: 1,
      title: "Post a Job",
      src: "/assets/phones/phone_1.png",
    },
    {
      id: 2,
      title: "Home & Trending Colleges",
      src: "/assets/phones/phone_2.png",
    },
    {
      id: 3,
      title: "Applications Tracker",
      src: "/assets/phones/phone_3.png",
    },
    {
      id: 4,
      title: "College Admissions Portal",
      src: "/assets/phones/phone_4.png",
    },
  ];

  // Pause rotation when not visible in viewport to save CPU and prevent background lag/freezing
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Auto-scroll through each screen smoothly every 3.8s, bringing each one to the center
  useEffect(() => {
    if (!isVisible || isHovered) return;
    const interval = setInterval(() => {
      setActiveScreenIndex((prev) => (prev < phones.length - 1 ? prev + 1 : 0));
    }, 3800);
    return () => clearInterval(interval);
  }, [isVisible, isHovered, phones.length]);

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
    <section ref={sectionRef} className="w-full max-w-[1440px] mx-auto bg-white rounded-b-[20px] relative overflow-hidden pt-10 sm:pt-12 lg:pt-[70px] pb-8 sm:pb-10 lg:pb-[48px]" aria-labelledby="showcase-heading">

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
        <div className="relative mb-6 sm:mb-8 lg:mb-10">
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

          {/* Desktop Arc Layout: Hardware-accelerated 3D transform carousel.
              Every screen rotates into the center position one by one.
              Center is always hero (276x569, scale 1.0), flanked by medium and small screens.
              Runs on GPU with zero layout reflow and zero image flicker.
          */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="hidden md:block relative h-[380px] min-[860px]:h-[440px] lg:h-[500px] min-[1140px]:h-[550px] xl:h-[600px] 2xl:h-[630px] w-full max-w-[1240px] 2xl:max-w-[1400px] mx-auto select-none"
          >
            <div className="relative w-full h-full mx-auto flex items-center justify-center transform scale-[0.62] min-[860px]:scale-[0.72] lg:scale-[0.82] min-[1140px]:scale-[0.90] xl:scale-100 2xl:scale-105 origin-center transition-transform duration-300">
              {phones.map((phone, idx) => {
                // Circular offset relative to activeScreenIndex: -2, -1, 0, 1, 2
                let offset = idx - activeScreenIndex;
                if (offset > 2) offset -= 5;
                if (offset < -2) offset += 5;

                const isCenter = offset === 0;

                // Exact Figma Arc geometry mapping:
                // offset  0 (Center Hero): translateX = 0px, scale = 1.0, zIndex = 30, opacity = 1
                // offset ±1 (Flanking):    translateX = ±262px, scale = 0.80, zIndex = 20, opacity = 0.90
                // offset ±2 (Outer):       translateX = ±480px, scale = 0.67, zIndex = 10, opacity = 0.75
                let translateX = 0;
                let scale = 1.0;
                let zIndex = 30;
                let opacity = 1.0;

                if (Math.abs(offset) === 1) {
                  translateX = offset * 262;
                  scale = 0.80;
                  zIndex = 20;
                  opacity = 0.90;
                } else if (Math.abs(offset) === 2) {
                  translateX = offset * 240; // 2 * 240 = 480px
                  scale = 0.67;
                  zIndex = 10;
                  opacity = 0.75;
                }

                return (
                  <button
                    key={phone.id}
                    type="button"
                    onClick={() => setActiveScreenIndex(idx)}
                    aria-label={`Select ${phone.title} screen`}
                    aria-pressed={isCenter}
                    style={{
                      transform: `translate3d(calc(-50% + ${translateX}px), -50%, 0) scale(${scale})`,
                      zIndex,
                      opacity,
                      transition: "transform 750ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease, filter 400ms ease",
                    }}
                    className={`absolute top-1/2 left-1/2 w-[276px] h-[569px] cursor-pointer flex items-center justify-center rounded-[38px] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0377EB]/50 transform-gpu will-change-transform ${
                      isCenter ? "drop-shadow-2xl" : "hover:opacity-100 hover:brightness-105"
                    }`}
                    title={`Click to bring ${phone.title} to center`}
                  >
                    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
                      <Image
                        src={phone.src}
                        alt={`${phone.title} mobile mockup`}
                        width={276}
                        height={569}
                        className="w-full h-full object-contain select-none"
                        priority={true}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Single Phone Slider (Touch Swipable - Zero Height Shift / Zero Flickering) */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="md:hidden flex flex-col items-center select-none"
          >
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
                  className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-300 ease-out ${
                    idx === activeScreenIndex ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
                  }`}
                >
                  <Image
                    src={phone.src}
                    alt={`${phone.title} mobile preview`}
                    width={276}
                    height={569}
                    className="w-full h-full object-contain pointer-events-none"
                    priority={true}
                  />
                </div>
              ))}
            </div>

            {/* Current Active Screen Title */}
            <div className="text-center mt-1 min-h-[22px] flex items-center justify-center">
              <span className="text-xs sm:text-sm font-semibold text-slate-700 tracking-tight transition-all duration-150">
                {phones[activeScreenIndex].title}
              </span>
            </div>
          </div>

          {/* 5 Indicator Dots with #0377EB brand styling */}
          <div className="flex items-center justify-center gap-2.5 mt-6 sm:mt-8 lg:mt-10 mb-2 sm:mb-4" role="tablist" aria-label="Screen preview dots">
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
        <div className="mt-5 sm:mt-6 lg:mt-8 pt-3 sm:pt-4 relative overflow-hidden">
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
