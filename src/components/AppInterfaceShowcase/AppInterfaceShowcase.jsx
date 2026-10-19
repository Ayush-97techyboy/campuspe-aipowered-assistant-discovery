"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./AppInterfaceShowcase.module.css";

const getPhoneTransformStyle = (offset) => {
  let translateX = 0;
  let scale = 1.0;
  let zIndex = 30;
  let opacity = 1.0;
  let filter = "none";

  if (Math.abs(offset) === 1) {
    translateX = offset * 262;
    scale = 0.8;
    zIndex = 20;
    opacity = 0.86;
    filter = "blur(1.5px) contrast(0.96) brightness(0.98)";
  } else if (Math.abs(offset) === 2) {
    translateX = offset * 240;
    scale = 0.67;
    zIndex = 10;
    opacity = 0.68;
    filter = "blur(2.5px) contrast(0.92) brightness(0.95)";
  }

  return {
    transform: `translate3d(calc(-50% + ${translateX}px), -50%, 0) scale(${scale})`,
    zIndex,
    opacity,
    filter,
    transition: "transform 750ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease, filter 500ms ease",
  };
};

export default function AppInterfaceShowcase({ onDownloadApp }) {
  const [activeScreenIndex, setActiveScreenIndex] = useState(2);
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

  useEffect(() => {
    if (!isVisible || isHovered) return;
    const interval = setInterval(() => {
      setActiveScreenIndex((prev) => (prev < phones.length - 1 ? prev + 1 : 0));
    }, 3800);
    return () => clearInterval(interval);
  }, [isVisible, isHovered, phones.length]);

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
    <section ref={sectionRef} className={styles.showcaseSection} aria-labelledby="showcase-heading">
      <div className={styles.showcaseContainer}>
        {/* Top Header */}
        <div className={styles.showHeader}>
          <h2 id="showcase-heading" className={styles.showcaseTitle}>
            Checkout Our App Interface Look
          </h2>
          <p className={styles.showcaseDesc}>
            Experience the power of a unified campus ecosystem right in your pocket.{" "}
            <span className="font-semibold text-slate-800">CampusPe</span> offers a
            tailored interface for every user: students can explore trending courses,
            colleges can showcase their campus life, and companies can post job
            vacancies directly to a pool of qualified candidates.
          </p>
        </div>

        {/* 5 Mockup Phones Display / Carousel */}
        <div className={styles.showcasePhonesWrap}>
          <div className={styles.showcaseGlowEllipse} aria-hidden="true" />

          {/* Desktop Arc Layout */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={styles.showcaseDesktopArc}
          >
            <div className="relative w-full h-full mx-auto flex items-center justify-center transform scale-[0.62] min-[860px]:scale-[0.72] lg:scale-[0.82] min-[1140px]:scale-[0.90] xl:scale-100 2xl:scale-105 origin-center transition-transform duration-300">
              {phones.map((phone, idx) => {
                let offset = idx - activeScreenIndex;
                if (offset > 2) offset -= 5;
                if (offset < -2) offset += 5;

                const isCenter = offset === 0;

                return (
                  <button
                    key={phone.id}
                    type="button"
                    onClick={() => setActiveScreenIndex(idx)}
                    aria-label={`Select ${phone.title} screen`}
                    aria-pressed={isCenter}
                    style={getPhoneTransformStyle(offset)}
                    className={`absolute top-1/2 left-1/2 w-[276px] h-[569px] flex items-center justify-center rounded-[38px] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0377EB]/50 transform-gpu will-change-transform ${
                      isCenter ? "drop-shadow-2xl cursor-default" : "cursor-pointer hover:opacity-100 hover:brightness-105"
                    }`}
                    title={isCenter ? phone.title : `Click to bring ${phone.title} to center`}
                  >
                    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
                      <Image
                        src={phone.src}
                        alt={`${phone.title} preview`}
                        width={276}
                        height={569}
                        className="w-[276px] h-[569px] object-contain pointer-events-none select-none"
                        priority={idx === 2}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Single Phone Swipe View (<768px) */}
          <div
            className="md:hidden relative flex flex-col items-center justify-center py-2"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            style={{ touchAction: "pan-y" }}
          >
            <div className="relative w-[240px] min-[400px]:w-[260px] h-[495px] min-[400px]:h-[535px] flex items-center justify-center rounded-[34px] overflow-hidden drop-shadow-xl transition-all duration-300">
              <Image
                src={phones[activeScreenIndex].src}
                alt={`${phones[activeScreenIndex].title} preview`}
                width={276}
                height={569}
                className="w-full h-full object-contain pointer-events-none select-none"
                priority
              />
            </div>

            {/* Mobile Indicators (Figma: width: 153px, height: 20px, Color: rgba(3, 119, 235, 1)) */}
            <div className={styles.showcaseSliderContainer}>
              <div
                className={styles.showcaseSlider}
                role="tablist"
                aria-label="Screen preview indicators"
              >
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
                      className={styles.showcaseSliderDotBtn}
                    >
                      <span
                        className={`${styles.showcaseSliderDot} ${
                          isActive
                            ? styles.showcaseSliderDotActive
                            : styles.showcaseSliderDotInactive
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Desktop Slider Indicators Layout (Figma: width: 153px, height: 20px, Color: rgba(3, 119, 235, 1)) */}
          <div className="hidden md:flex items-center justify-center mt-6 sm:mt-8">
            <div
              className={styles.showcaseSlider}
              role="tablist"
              aria-label="Screen preview indicators"
            >
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
                    className={styles.showcaseSliderDotBtn}
                  >
                    <span
                      className={`${styles.showcaseSliderDot} ${
                        isActive
                          ? styles.showcaseSliderDotActive
                          : styles.showcaseSliderDotInactive
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Section 2: Download App Now */}
        <div className={styles.showcaseDownloadWrap}>
          <div className={styles.showcaseDownloadGlowLeft} aria-hidden="true" />
          <div className={styles.showcaseDownloadGlowRight} aria-hidden="true" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
            {/* Left Column: Heading & Stores */}
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

            {/* Right Column: 3D perspective mockup */}
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
