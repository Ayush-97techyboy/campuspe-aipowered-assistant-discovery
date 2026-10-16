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
      className="py-12 bg-white overflow-hidden border-b border-slate-100 relative"
    >
      {/* Seam Gradient Blur Circles between Section 1 & Section 2 (Figma Node 1:1655 & 1:1656) */}
      {/* Left Circle (Node 1:1655): 334x334 rounded-full, 0% #A5F3FC (30%), 50% #BFDBFE (20%), 100% #BFDBFE (0%), blur 100px */}
      <div
        className="absolute pointer-events-none -bottom-[100px] lg:-bottom-[132px] -left-8 lg:-left-[33px] w-[280px] h-[280px] lg:w-[334px] lg:h-[334px] rounded-full z-0"
        style={{
          background: "linear-gradient(to right, rgba(165, 243, 252, 0.30) 0%, rgba(191, 219, 254, 0.20) 50%, rgba(191, 219, 254, 0.00) 100%)",
          filter: "blur(100px)",
        }}
        aria-hidden="true"
      />

      {/* Right Circle (Node 1:1656): 327x327 rounded-full, 0% #C4B5FD (30%), 50% #F5D0FE (20%), 100% #F5D0FE (0%), blur 110px */}
      <div
        className="absolute pointer-events-none -bottom-[100px] lg:-bottom-[149px] -right-8 lg:-right-[60px] w-[270px] h-[270px] lg:w-[327px] lg:h-[327px] rounded-full z-0"
        style={{
          background: "linear-gradient(to right, rgba(196, 181, 253, 0.30) 0%, rgba(245, 208, 254, 0.20) 50%, rgba(245, 208, 254, 0.00) 100%)",
          filter: "blur(110px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-4 mb-8 flex items-center justify-between relative z-10">
        <h2 className="text-[18px] sm:text-[20px] leading-[28px] font-medium text-[#54565F] tracking-normal mx-auto font-sans">
          Trusted by partners across India
        </h2>

        {/* WCAG 2.2.2 Pause/Play control for auto-scrolling content */}
        <button
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? "Pause partners animation" : "Resume partners animation"}
          className="absolute right-4 top-12 p-2 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-colors"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
      </div>

      {/* Infinite Horizontal Carousel */}
      <div className="relative w-full overflow-hidden marquee-container flex items-center py-2">
        {/* Gradient edge masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className={`flex whitespace-nowrap gap-16 sm:gap-24 items-center ${
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
