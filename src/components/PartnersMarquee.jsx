"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";

export default function PartnersMarquee() {
  const [isPlaying, setIsPlaying] = useState(true);

  const partners = [
    { name: "GINSERV", src: "/assets/partners/image_15142_217230.png", width: 2000, height: 632, imgClass: "h-14 sm:h-16 w-auto" },
    { name: "Startup Karnataka", src: "/assets/partners/image_15144_e6500a.png", width: 991, height: 217, imgClass: "h-12 sm:h-14 w-auto" },
    { name: "Tumkur University", src: "/assets/partners/image_15143_d74346.png", width: 926, height: 517, imgClass: "h-16 sm:h-20 w-auto" },
    { name: "Talentspotify", src: "/assets/partners/image_15152_236fe2.png", width: 978, height: 1067, imgClass: "h-14 sm:h-18 w-auto" },
    { name: "Radiant Info", src: "/assets/partners/images_1_39593d.png", width: 75, height: 60, imgClass: "h-14 sm:h-16 w-auto" },
    { name: "Startup India", src: "/assets/partners/image_15155_27d954.png", width: 3664, height: 855, imgClass: "h-14 sm:h-16 w-auto" },
  ];

  return (
    <section
      aria-label="Partner Organizations"
      className="pt-10 lg:pt-[45px] pb-12 lg:pb-[64px] bg-transparent relative"
    >
      {/* Seam Gradient Blur Circles between Partners & Opportunity Discovery (Figma Node 1:1655 & 1:1656) */}
      {/* Left Circle (Node 1:1655): 334x334 rounded-full, cyan/blue, blur 80px */}
      <div
        className="absolute pointer-events-none -bottom-[100px] lg:-bottom-[132px] -left-8 lg:-left-[33px] w-[280px] h-[280px] lg:w-[334px] lg:h-[334px] rounded-full z-0"
        style={{
          background: "linear-gradient(135deg, rgba(165, 243, 252, 0.45) 0%, rgba(191, 219, 254, 0.30) 50%, rgba(191, 219, 254, 0.00) 100%)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />

      {/* Left Seam Peach/Coral Glow (Node 1:868): subtle warm blush on far left edge reaching GINSERV and Discovery */}
      <div
        className="absolute pointer-events-none -bottom-[120px] lg:-bottom-[150px] -left-12 lg:-left-[45px] w-[240px] h-[240px] lg:w-[280px] lg:h-[280px] rounded-full z-0"
        style={{
          background: "radial-gradient(circle at 40% 50%, rgba(254, 205, 211, 0.55) 0%, rgba(255, 237, 213, 0.40) 45%, rgba(254, 242, 242, 0.00) 100%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      {/* Right Circle (Node 1:1656): 327x327 rounded-full, violet/fuchsia, blur 85px */}
      <div
        className="absolute pointer-events-none -bottom-[100px] lg:-bottom-[149px] -right-8 lg:-right-[60px] w-[270px] h-[270px] lg:w-[327px] lg:h-[327px] rounded-full z-0"
        style={{
          background: "linear-gradient(225deg, rgba(196, 181, 253, 0.45) 0%, rgba(245, 208, 254, 0.30) 50%, rgba(245, 208, 254, 0.00) 100%)",
          filter: "blur(85px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1240px] 2xl:max-w-[1440px] mx-auto px-4 mb-5 flex items-center justify-between relative z-10">
        <h2 className="text-[15px] min-[360px]:text-[17px] sm:text-[20px] leading-[26px] sm:leading-[28px] font-medium text-[#54565F] tracking-normal mx-auto font-sans text-center px-6">
          Trusted by partners across India
        </h2>

        {/* WCAG 2.2.2 Pause/Play control for auto-scrolling content */}
        <button
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? "Pause partners animation" : "Resume partners animation"}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-colors"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
      </div>

      {/* Infinite Horizontal Carousel */}
      <div className="relative w-full overflow-hidden marquee-container flex items-center py-2">

        <div
          className={`flex whitespace-nowrap gap-8 sm:gap-16 lg:gap-24 items-center ${
            isPlaying ? "animate-marquee" : ""
          }`}
          style={!isPlaying ? { animationPlayState: "paused" } : {}}
        >
          {partners.concat(partners).concat(partners).concat(partners).map((partner, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex items-center justify-center px-4 hover:scale-105 transition-transform duration-200"
            >
              <Image
                src={partner.src}
                alt={`${partner.name} logo`}
                width={partner.width}
                height={partner.height}
                className={`${partner.imgClass} max-w-full object-contain`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
