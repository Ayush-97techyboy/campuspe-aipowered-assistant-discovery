"use client";

import React from "react";
import Image from "next/image";

export default function PartnersMarquee() {
  const partners = [
    { name: "GINSERV", src: "/assets/partners/GinservLogo.png", width: 2000, height: 632, imgClass: "h-14 sm:h-16 w-auto" },
    { name: "Startup Karnataka", src: "/assets/partners/Startup_Karnataka.png", width: 991, height: 217, imgClass: "h-12 sm:h-14 w-auto" },
    { name: "Tumkur University", src: "/assets/partners/vtu-belagavi.png", width: 926, height: 517, imgClass: "h-16 sm:h-20 w-auto" },
    { name: "Talentspotify", src: "/assets/partners/talentspotify.png", width: 978, height: 1067, imgClass: "h-14 sm:h-18 w-auto" },
    { name: "Radiant Info", src: "/assets/partners/radiant-info.png", width: 75, height: 60, imgClass: "h-14 sm:h-16 w-auto" },
    { name: "Startup India", src: "/assets/partners/startup-india.png", width: 3664, height: 855, imgClass: "h-14 sm:h-16 w-auto" },
  ];

  return (
    <section
      aria-label="Partner Organizations"
      className="pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-10 lg:pb-12 bg-[#FFFFFF] relative w-full max-w-[1440px] mx-auto min-h-[274px] flex flex-col justify-center"
    >
      {/* Left Circle (Figma Node 1:1655): Gradient+Blur on left bottom
          width: 334px; height: 334px; top: 988px; left: -33px; border-radius: 9999px;
          background: linear-gradient(45deg, rgba(165, 243, 252, 0.45) 0%, rgba(191, 219, 254, 0.30) 50%, rgba(191, 219, 254, 0) 100%);
          layer blur: 100px
      */}
      <div
        className="hidden lg:block absolute pointer-events-none rounded-full z-0 w-[334px] h-[334px] -bottom-[120px] -left-[33px]"
        style={{
          background:
            "linear-gradient(45deg, rgba(165, 243, 252, 0.45) 0%, rgba(191, 219, 254, 0.30) 50%, rgba(191, 219, 254, 0) 100%)",
          filter: "blur(100px)",
        }}
        aria-hidden="true"
      />

      {/* Right Circle (Figma Node 1:1656): Gradient+Blur on right bottom
          width: 327px; height: 327px; top: 1041px; left: 1173px; border-radius: 9999px;
          background: linear-gradient(225deg, rgba(196, 181, 253, 0.45) 0%, rgba(245, 208, 254, 0.30) 50%, rgba(245, 208, 254, 0) 100%);
          layer blur: 110px
      */}
      <div
        className="hidden lg:block absolute pointer-events-none rounded-full z-0 w-[327px] h-[327px] -bottom-[120px] -right-[40px] xl:right-0"
        style={{
          background: "linear-gradient(225deg, rgba(196, 181, 253, 0.45) 0%, rgba(245, 208, 254, 0.30) 50%, rgba(245, 208, 254, 0.00) 100%)",
          filter: "blur(110px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1240px] 2xl:max-w-[1440px] mx-auto px-4 mb-5 flex items-center justify-center relative z-10">
        <h2 className="text-[15px] min-[360px]:text-[17px] sm:text-[20px] leading-[26px] sm:leading-[28px] font-medium text-[#54565F] tracking-normal mx-auto font-sans text-center px-6">
          Trusted by partners across India
        </h2>
      </div>

      {/* Infinite Horizontal Carousel */}
      <div className="relative z-10 w-full overflow-hidden marquee-container flex items-center py-2 bg-transparent">
        <div className="flex whitespace-nowrap gap-8 sm:gap-16 lg:gap-24 items-center animate-marquee">
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
