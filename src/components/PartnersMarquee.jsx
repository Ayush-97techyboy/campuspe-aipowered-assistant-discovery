"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";

export default function PartnersMarquee() {
  const [isPlaying, setIsPlaying] = useState(true);

  const partners = [
    { name: "GINSERV", src: "/assets/partners/image_15142_217230.png", width: 140, height: 45 },
    { name: "Startup Karnataka", src: "/assets/partners/image_15144_e6500a.png", width: 160, height: 45 },
    { name: "VTU", src: "/assets/partners/image_15143_d74346.png", width: 60, height: 60 },
    { name: "Talentspotify", src: "/assets/partners/image_15152_236fe2.png", width: 110, height: 50 },
    { name: "Radiant Info", src: "/assets/partners/images_1_39593d.png", width: 75, height: 60 },
    { name: "Startup India", src: "/assets/partners/image_15155_27d954.png", width: 140, height: 55 },
  ];

  return (
    <section
      aria-label="Partner Organizations"
      className="py-12 bg-slate-50/70 overflow-hidden border-b border-slate-100 relative"
    >
      <div className="max-w-[1240px] mx-auto px-4 mb-8 flex items-center justify-between">
        <h2 className="text-base sm:text-lg font-semibold text-slate-700 tracking-wide mx-auto">
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
      <div className="relative w-full overflow-hidden marquee-container flex items-center">
        {/* Gradient edge masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50/90 to-transparent z-10 pointer-events-none" />

        <div
          className={`flex whitespace-nowrap gap-12 sm:gap-16 items-center ${
            isPlaying ? "animate-marquee" : ""
          }`}
          style={!isPlaying ? { animationPlayState: "paused" } : {}}
        >
          {partners.concat(partners).concat(partners).map((partner, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-200 flex items-center justify-center h-16 px-4"
            >
              <div className="relative h-12 w-32 flex items-center justify-center">
                <Image
                  src={partner.src}
                  alt={`${partner.name} logo`}
                  width={partner.width}
                  height={partner.height}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
