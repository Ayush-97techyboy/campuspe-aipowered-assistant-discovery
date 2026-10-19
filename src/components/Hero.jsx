"use client";

import React from "react";
import Image from "next/image";
import {
  Sparkles,
  GraduationCap,
  Building2,
  Briefcase,
  Check,
  Bell,
  ArrowRight,
  Zap,
  MessageCircle,
  Search,
} from "lucide-react";

export default function Hero({ onOpenWaitlist, onExploreJobs }) {
  return (
    <section className="relative pt-0 pb-6 lg:pb-[25.5px] bg-transparent opacity-100">
      {/* Hero Canvas: Exactly 1240px max-width matching Figma canvas across all desktop, 2K & 4K viewports */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-[100px]">
        {/* Figma Ellipse 6: Blurry ambient color behind Resume Builder
            width: 227px; height: 227px; top: 24px; left: 1055px;
            background: linear-gradient(180deg, rgba(105, 127, 255, 0.16) 0%, rgba(104, 206, 198, 0.14) 57.21%, rgba(195, 45, 112, 0.00) 100%);
            layer blur: 65.99px
        */}
        <div
          className="hidden lg:block absolute pointer-events-none rounded-full z-0 w-[227px] h-[227px] top-[24px] left-[1055px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(105, 127, 255, 0.16) 0%, rgba(104, 206, 198, 0.14) 57.21%, rgba(195, 45, 112, 0.00) 100%)",
            filter: "blur(66px)",
          }}
          aria-hidden="true"
        />

        {/* Figma Ellipse: Gradient+Blur on left side behind the college card
            width: 800px; height: 613px; top: 303px; left: 60px; border-radius: 9999px;
            background: linear-gradient(45deg, rgba(165, 243, 252, 0.22) 0%, rgba(191, 219, 254, 0.15) 50%, rgba(191, 219, 254, 0) 100%);
            layer blur: 100px
        */}
        <div
          className="hidden lg:block absolute pointer-events-none rounded-full z-0 w-[800px] h-[613px] top-[303px] left-[60px]"
          style={{
            background:
              "linear-gradient(45deg, rgba(165, 243, 252, 0.22) 0%, rgba(191, 219, 254, 0.15) 50%, rgba(191, 219, 254, 0) 100%)",
            filter: "blur(100px)",
          }}
          aria-hidden="true"
        />

        {/* Figma Ellipse (Node 1:866): 860px x 613px, top: 207px, left: 432px (50%-288px)
            Figma Linear Gradient: #C4B5FD (30%) -> #F5D0FE (20%) -> #F5D0FE (0%)
            Layer Blur: 110px
            Spans directly behind Card 2 ("Looking for a Job"), Card 3 ("I'm Hiring") & Platform Stats
        */}
        <div
          className="hidden lg:block absolute pointer-events-none rounded-full z-0 w-[860px] h-[613px] top-[207px] left-[calc(50%-288px)] opacity-100"
          style={{
            background:
              "linear-gradient(225deg, rgba(196, 181, 253, 0.45) 0%, rgba(245, 208, 254, 0.30) 50%, rgba(245, 208, 254, 0) 100%)",
            filter: "blur(110px)",
            WebkitFilter: "blur(110px)",
            transform: "translate3d(0, 0, 0)",
          }}
          aria-hidden="true"
        />

        {/* =========================================================================
            HERO HEADER COMPOSITION (Figma Node 1:865):
            Outer Canvas: max-w-[1240px]
            Center Frame: max-w-[896px] min-h-[251px] (left offset 172px, right offset 172px)
            Floating Badges: Anchored in the 172px left and right margin zones
           ========================================================================= */}
        <div className="relative w-full max-w-[1240px] mx-auto min-h-[251px] mb-6 sm:mb-8 lg:mb-[26px]">
          {/* 1. Top-Left Floating Card: WhatsApp alerts notification
              Figma distance to Frame 2147229013: top 31px, left 65px (or left 972px from frame boundary)
          */}
          <div
            className="hidden lg:block absolute z-20 w-[203px] h-[107px] bg-white rounded-[21px] border border-[#697FFF] shadow-card hover:shadow-hover hover:scale-105 hover:border-[#0098FF] transition-all duration-300 animate-float-slow left-[65px] top-[31px] p-[16px] overflow-hidden text-left cursor-pointer group"
          >
            <div className="flex items-center gap-2 mb-1 xl:mb-1.5">
              <div className="w-3.5 xl:w-4 h-3.5 xl:h-4 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Image src="/assets/icons/whatsapp.svg" alt="" width={16} height={16} className="object-contain" />
              </div>
              <span className="text-[13px] xl:text-[14px] leading-[18px] xl:leading-[22px] font-medium text-[#D96704] group-hover:text-amber-700 transition-colors">
                WhatsApp Alert
              </span>
            </div>
            <p className="text-[11px] xl:text-[12px] leading-[14px] xl:leading-[16px] font-semibold text-[#0A0A0A] mb-0.5 xl:mb-1">
              Get notified on whatsapp
            </p>
            <p className="text-[9px] xl:text-[10px] leading-[12px] font-medium text-[#54565F]">
              You&apos;ll get all important updates on your whatsapp
            </p>
          </div>

          {/* 3. Top-Right Floating Card: AI resume builder showcase
              Figma: width 225px, height 140px, top 24px, right 38px (left 977px)
          */}
          <div
            className="hidden lg:block absolute z-20 w-[225px] h-[140px] bg-white rounded-[23px] border border-[#697FFF] shadow-card hover:shadow-hover hover:scale-105 hover:border-[#0098FF] transition-all duration-300 animate-float-delayed right-[38px] top-[24px] p-[18px] overflow-hidden text-left cursor-pointer group opacity-100"
          >
            <div className="flex items-center gap-1.5 mb-1.5 xl:mb-2 group-hover:scale-105 transition-transform">
              <Image src="/assets/icons/resume_builder_logo.svg" alt="Resume Builder" width={127} height={20} className="w-[115px] xl:w-[127px] h-auto object-contain" />
            </div>
            <p className="text-[11px] xl:text-[12px] leading-[15px] xl:leading-[16px] font-semibold text-[#0A0A0A] mb-1">
              Build Your Resume
            </p>
            <p className="text-[9px] xl:text-[10px] leading-[13px] xl:leading-[16px] font-medium text-[#54565F]">
              Our resume builder gives you dynamic options to build better &amp; faster resume that got you hired
            </p>
          </div>


          {/* =========================================================================
              CENTRAL FIGMA HERO HEADER FRAME:
              width: 896px; height: 251px; max-width: 896px; left: 172px; mx-auto;
              padding: 40px 16px;
              Pill (Top) + Heading (Middle) + Subtitle + Action Selector Prompt (Bottom)
             ========================================================================= */}
          <div
            className="relative mx-auto w-full max-w-[896px] min-h-[251px] flex flex-col justify-center items-center text-center opacity-100 pt-[40px] pb-[32px] lg:pb-0 px-[16px] z-10"
          >
            {/* Ambient subtle background glow
                width: 896; height: 260; border-radius: 9999px;
                background: linear-gradient(90deg, rgba(219, 234, 254, 0.275) 0%, rgba(240, 249, 255, 0.22) 50%, rgba(240, 253, 250, 0.22) 100%);
                filter: blur(54px);
            */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-[896px] h-[260px] rounded-full pointer-events-none z-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(219, 234, 254, 0.275) 0%, rgba(240, 249, 255, 0.22) 50%, rgba(240, 253, 250, 0.22) 100%)",
                filter: "blur(54px)",
              }}
            />

            {/* Top Pill Badge */}
            <div className="relative z-10 flex justify-center mb-3 sm:mb-4">
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#FFF9F4] border border-[#FFE7D6] text-primary text-xs sm:text-sm font-semibold shadow-xs cursor-default hover:bg-[#FFF4EB] hover:scale-105 hover:border-[#FFD2B3] transition-all duration-200 max-w-full">
                <Image
                  src="/assets/updated_icns_img/SVGRepo_iconCarrier.svg"
                  alt="AI Assistant icon"
                  width={22}
                  height={17}
                  className="w-[18px] sm:w-[20px] h-auto object-contain animate-pulse max-w-full shrink-0"
                />
                <span className="truncate">AI-Powered Campus Assistant</span>
              </div>
            </div>

            {/* Main title: Connect 10X Faster.
                Ambient subtle glow to Connect 10X Faster: top 73.14px, left 230.5px, bottom 230.5px, right 120.86px
            */}
            <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[48px] font-bold tracking-tight text-[#091124] leading-[1.15] mb-2 sm:mb-2.5 font-roboto whitespace-nowrap">
              Connect{" "}
              <span
                className="text-gradient-10x-faster"
                style={{
                  background:
                    "linear-gradient(90deg, #1E5BF7 0%, #0077F5 25%, #009BE5 50%, #02B6A6 75%, #10B981 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                  display: "inline-block",
                }}
              >
                10X Faster.
              </span>
            </h1>

            {/* Subtitle: width 766px, height 40px, padding-bottom 16px */}
            <p
              className="relative z-10 text-sm sm:text-base md:text-[18px] lg:text-[19px] leading-[24px] text-[#4B5565] font-medium w-full max-w-[766px] min-h-[40px] mx-auto font-sans pb-[16px] opacity-100 text-center"
            >
              One platform connecting students, colleges &amp; employers — faster.
            </p>

            {/* Action selector prompt with dual sparkle icons box:
                width: 492.49px; height: 33px; padding-left: 23px; padding-right: 23px; gap: 10px;
                star-to-text distance: 7.01px / 10px
            */}
            <div className="relative z-10 w-full max-w-[492.49px] h-[33px] px-[23px] mx-auto flex items-center justify-center gap-[10px] opacity-100 whitespace-nowrap">
              <Image
                src="/assets/icons/left_sparkle.svg"
                alt=""
                width={26}
                height={19}
                className="w-4 sm:w-[26px] h-auto object-contain shrink-0"
              />
              <div className="flex items-center justify-center w-auto sm:w-[373px] max-w-full h-[33px] shrink-0">
                <span className="inline-flex items-center justify-center w-auto sm:w-[321px] max-w-full h-[33px] font-roboto font-semibold text-[22px] sm:text-[28px] leading-[100%] tracking-normal text-[#0098FF] opacity-100 text-center align-middle shrink-0">
                  What are you looking for?
                </span>
              </div>
              <Image
                src="/assets/icons/right_sparkle.svg"
                alt=""
                width={28}
                height={21}
                className="w-4 sm:w-[28px] h-auto object-contain shrink-0"
              />
            </div>

            {/* Mobile and tablet trust badges (<1024px): flex-col on mobile so full content and subcontent are visible */}
            <div className="flex lg:hidden flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 mt-4 px-2">
              {/* Badge 1: 142 students matched today with student avatar pile */}
              <div className="w-full max-w-[310px] sm:w-[293px] h-[51px] bg-white/95 backdrop-blur-[14px] rounded-[16px] px-[14px] py-[8px] border border-[#E2E8F0] shadow-card flex items-center gap-[10px] text-left">
                <div className="flex -space-x-1.5 shrink-0">
                  <span className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-blue-600 text-white text-[8px] sm:text-[9px] font-bold flex items-center justify-center border-2 border-white shadow-xs shrink-0">
                    AK
                  </span>
                  <span className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-purple-600 text-white text-[8px] sm:text-[9px] font-bold flex items-center justify-center border-2 border-white shadow-xs shrink-0">
                    PR
                  </span>
                  <span className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-teal-600 text-white text-[8px] sm:text-[9px] font-bold flex items-center justify-center border-2 border-white shadow-xs shrink-0">
                    SN
                  </span>
                </div>
                <div className="shrink-0 overflow-hidden">
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-slate-800 whitespace-nowrap leading-tight">
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.9)]" />
                    </span>
                    <span>🔥 142 students matched today</span>
                  </div>
                  <p className="text-[9px] sm:text-[10px] text-slate-500 whitespace-nowrap leading-tight mt-0.5">
                    Just now • IIT, BITS, VIT
                  </p>
                </div>
              </div>

              {/* Badge 2: Radiant Info shortlisted 8 interns with verified badge */}
              <div className="w-full max-w-[310px] sm:w-[293px] h-[51px] bg-white/95 backdrop-blur-[14px] rounded-[16px] px-[14px] py-[8px] border border-[#E2E8F0] shadow-card flex items-center gap-[10px] text-left">
                <div
                  className="w-6 sm:w-[28px] h-6 sm:h-[28px] rounded-[7px] sm:rounded-[8px] flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: "rgba(37, 99, 235, 0.10)",
                  }}
                >
                  <span className="inline-flex items-center justify-center text-[12px] sm:text-[14px] leading-none text-[#2563EB]">
                    💼
                  </span>
                </div>
                <div className="shrink-0 overflow-hidden">
                  <p className="text-[11px] sm:text-xs font-bold text-slate-800 whitespace-nowrap leading-tight">
                    <span className="text-[#007FFC] font-semibold">Radiant Info</span>{" "}
                    <span className="font-normal text-slate-600">shortlisted 8 interns</span>
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-emerald-600 font-medium whitespace-nowrap leading-tight mt-0.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>Verified recruiter • 2 days ago</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Html → Body: 1280px x 422px Container (Figma node 1:957) */}
        <div className="relative w-full max-w-[1280px] mx-auto min-h-[422px] px-[12px] py-[7.5px]">
          {/* Lower Floating Badges Overlay (Desktop >=1024px)
              Mirrors the 3-column card grid below (grid-cols-3 gap-[28px] max-w-[1152px]) so that:
              - Column 1: "142 students matched today" is PERFECTLY CENTERED directly above Card 1 ("College")
              - Column 2: Empty placeholder, leaving the central "What are you looking for?" prompt fully unobstructed
              - Column 3: "Radiant Info" is PERFECTLY CENTERED directly above Card 3 ("I'm Hiring")
              - bottom-[calc(100%+17px)]: Locks the distance between the bottom of the badges and Html -> Body to EXACTLY 17px
          */}
          <div className="hidden lg:grid grid-cols-3 gap-4 lg:gap-[28px] max-w-[1152px] mx-auto absolute inset-x-0 bottom-[calc(100%+17px)] pointer-events-none z-20">
            {/* Column 1: Centered directly above Card 1 ("College") */}
            <div className="flex justify-center items-end">
              <div className="pointer-events-auto w-[293px] h-[51px] bg-white/90 backdrop-blur-[14px] rounded-[16px] px-[14px] py-[8px] border border-[#E2E8F0] shadow-card flex items-center gap-[10px] hover:scale-105 hover:border-[#B3EEFF] hover:shadow-md transition-all duration-200 text-left cursor-pointer shrink-0">
                <div className="flex -space-x-1.5 shrink-0">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-[9px] font-bold flex items-center justify-center border-2 border-white shadow-xs shrink-0">
                    AK
                  </span>
                  <span className="w-6 h-6 rounded-full bg-purple-600 text-white text-[9px] font-bold flex items-center justify-center border-2 border-white shadow-xs shrink-0">
                    PR
                  </span>
                  <span className="w-6 h-6 rounded-full bg-teal-600 text-white text-[9px] font-bold flex items-center justify-center border-2 border-white shadow-xs shrink-0">
                    SN
                  </span>
                </div>
                <div className="shrink-0">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 whitespace-nowrap">
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.9)]" />
                    </span>
                    <span>🔥 142 students matched today</span>
                  </div>
                  <p className="text-[10px] text-slate-500 whitespace-nowrap">Just now • IIT, BITS, VIT</p>
                </div>
              </div>
            </div>

            {/* Column 2: Center placeholder over Card 2 ("I'm Looking for a Job") */}
            <div aria-hidden="true" />

            {/* Column 3: Centered directly above Card 3 ("I'm Hiring") */}
            <div className="flex justify-center items-end">
              <div className="pointer-events-auto w-[271px] h-[46px] bg-white/90 backdrop-blur-[14px] rounded-[16px] border border-[#E2E8F0] shadow-card flex items-center gap-[10px] px-[12px] py-[6px] hover:scale-105 hover:border-[#B3EEFF] hover:shadow-md transition-all duration-200 text-left cursor-pointer shrink-0">
                <div
                  className="w-[28px] h-[28px] rounded-[8px] flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: "rgba(37, 99, 235, 0.10)",
                  }}
                >
                  <span
                    className="w-[12px] h-[16px] inline-flex items-center justify-center text-center font-sans font-normal text-[12px] leading-[16px] text-[#2563EB]"
                  >
                    💼
                  </span>
                </div>
                <div className="shrink-0 overflow-hidden">
                  <p className="text-[11.5px] font-bold text-slate-800 whitespace-nowrap leading-tight">
                    <span className="text-[#007FFC] font-semibold">Radiant Info</span> <span className="font-normal text-slate-600">shortlisted 8 interns</span>
                  </p>
                  <p className="text-[9.5px] text-emerald-600 font-medium whitespace-nowrap leading-tight flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>Verified recruiter • 2 days ago</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Grid of 3 role cards (width: 1152px, height: 407px, gap: 28px) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-[28px] w-full max-w-[1152px] h-auto lg:h-[407px] mx-auto items-stretch">
            {/* Card 1: College (width: 365px, height: 407px, padding: 24px 28px, gap: 24px, radius: 26px) */}
            <div className="relative group bg-white rounded-[26px] p-5 lg:px-[28px] lg:py-[24px] border border-[#B3EEFF] shadow-[0px_4px_6px_-2px_#00000005,0px_10px_30px_-5px_#0000000D] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,152,255,0.2)] hover:border-[#0098FF] transition-all duration-300 ease-out flex flex-col justify-between gap-4 lg:gap-[24px] overflow-hidden w-full max-w-[365px] h-auto lg:h-[407px] min-h-[380px] lg:min-h-[407px] mx-auto cursor-pointer">
              {/* Card background watermark illustration: Figma spec opacity 0.25 */}
              <div
                className="absolute bottom-0 right-0 pointer-events-none z-0 transition-all duration-300 group-hover:scale-[1.02]"
                style={{
                  width: "251.68px",
                  height: "135.64px",
                  opacity: 0.25,
                  transform: "rotate(0deg)",
                }}
              >
                <Image
                  src="/assets/icons/role_college.svg"
                  alt=""
                  width={252}
                  height={136}
                  className="w-full h-full object-contain pointer-events-none"
                />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-full border border-[#B3EEFF] bg-[#ECFBFF] text-[#007FFC] flex items-center justify-center shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src="/assets/hero-icons/hero_college_icon.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span className="inline-flex items-center justify-center h-[28px] px-[14px] py-[6px] rounded-full border border-[#007FFC] bg-[#ECFBFF] text-[#007FFC] text-[12px] leading-[16px] font-sans font-medium">
                    Coming Soon
                  </span>
                </div>

                <h2 className="text-[24px] leading-[31px] font-bold text-slate-900 mb-2 font-lora group-hover:text-primary transition-colors">
                  College
                </h2>
                <p className="text-[14px] leading-[22px] text-slate-600 font-medium mb-6">
                  Explore colleges, courses,fees, placements &amp; more
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2.5 text-[14px] leading-[20px] font-medium text-slate-700">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center text-[#475569] shrink-0"
                      style={{ backgroundColor: "rgba(226, 232, 240, 0.80)" }}
                    >
                      <Check size={10} strokeWidth={2.5} />
                    </div>
                    <span>Search by course, location, fees</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-[14px] leading-[20px] font-medium text-slate-700">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center text-[#475569] shrink-0"
                      style={{ backgroundColor: "rgba(226, 232, 240, 0.80)" }}
                    >
                      <Check size={10} strokeWidth={2.5} />
                    </div>
                    <span>Connect directly with colleges</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-[14px] leading-[20px] font-medium text-slate-700">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center text-[#475569] shrink-0"
                      style={{ backgroundColor: "rgba(226, 232, 240, 0.80)" }}
                    >
                      <Check size={10} strokeWidth={2.5} />
                    </div>
                    <span>Improve student placements</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onOpenWaitlist("College Student / Institution")}
                className="relative z-10 w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-[14px] leading-[20px] font-semibold text-white bg-primary hover:bg-primary-hover hover:scale-[1.02] shadow-md shadow-blue-500/25 active:scale-[0.98] transition-all duration-200"
              >
                <span>Join Waitlist</span>
                <Bell size={16} className="group-hover:rotate-12 transition-transform duration-200" />
              </button>
            </div>

            {/* Card 2: Job seeker portal entry (width: 365px, height: 407px, padding: 24px 28px, gap: 24px, radius: 26px) */}
            <div className="relative group bg-white rounded-[26px] p-5 lg:px-[28px] lg:py-[24px] border border-[#B3EEFF] shadow-[0px_4px_6px_-2px_#00000005,0px_10px_30px_-5px_#0000000D] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,152,255,0.2)] hover:border-[#0098FF] transition-all duration-300 ease-out flex flex-col justify-between gap-4 lg:gap-[24px] overflow-hidden w-full max-w-[365px] h-auto lg:h-[407px] min-h-[380px] lg:min-h-[407px] mx-auto cursor-pointer">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-full border border-[#B3EEFF] bg-[#ECFBFF] text-[#007FFC] flex items-center justify-center shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src="/assets/hero-icons/hero_degree-job_icon.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="w-7 h-6 object-contain"
                    />
                  </div>
                  <span className="inline-flex items-center justify-center h-[28px] px-[14px] py-[6px] rounded-full border border-[#007FFC] bg-[#ECFBFF] text-[#007FFC] text-[12px] leading-[16px] font-sans font-medium">
                    Available Now
                  </span>
                </div>

                {/* Text & Content Block (Figma Frame: top 41px offset for illustration) */}
                <div className="relative">
                  <h2 className="text-[24px] leading-[31px] font-bold text-slate-900 mb-2 font-lora group-hover:text-primary transition-colors">
                    I&apos;m Looking for a Job
                  </h2>
                  <p className="text-[14px] leading-[22px] text-slate-600 font-medium mb-6">
                    Upload your resume. We&apos;ll find jobs that fit you.
                  </p>

                  <div className="mb-6">
                    <ul className="space-y-3 max-w-[185px] sm:max-w-[195px] relative z-10">
                      <li className="flex items-center gap-2.5 text-[14px] leading-[20px] font-medium text-slate-700">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center text-[#475569] shrink-0"
                          style={{ backgroundColor: "#FFF0F0" }}
                        >
                          <Check size={10} strokeWidth={2.5} />
                        </div>
                        <span className="whitespace-nowrap">Jobs from 1000+ sources</span>
                      </li>
                      <li className="flex items-center gap-2.5 text-[14px] leading-[20px] font-medium text-slate-700">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center text-[#475569] shrink-0"
                          style={{ backgroundColor: "#FFF0F0" }}
                        >
                          <Check size={10} strokeWidth={2.5} />
                        </div>
                        <span>AI powered matching</span>
                      </li>
                      <li className="flex items-center gap-2.5 text-[14px] leading-[20px] font-medium text-slate-700">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center text-[#475569] shrink-0"
                          style={{ backgroundColor: "#FFF0F0" }}
                        >
                          <Check size={10} strokeWidth={2.5} />
                        </div>
                        <span>WhatsApp &amp; email alerts</span>
                      </li>
                    </ul>
                  </div>

                  {/* Resume preview illustration: Figma spec opacity 0.30 */}
                  <div
                    className="absolute right-[-38px] top-[41px] pointer-events-none z-0 transition-all duration-300 group-hover:scale-105"
                    style={{
                      opacity: 0.30,
                    }}
                  >
                    <Image
                      src="/assets/icons/role_job.svg"
                      alt="Resume Illustration"
                      width={208}
                      height={176}
                      className="w-[208px] h-[176px] object-contain pointer-events-none"
                    />
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={onExploreJobs}
                className="relative z-10 w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-[14px] leading-[20px] font-semibold text-white bg-primary hover:bg-primary-hover hover:scale-[1.02] shadow-md shadow-blue-500/30 active:scale-[0.98] transition-all duration-200"
              >
                <span>Explore Jobs</span>
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-200" />
              </button>
            </div>

            {/* Card 3: Employer and recruiter portal entry (width: 365px, height: 407px, padding: 24px 28px, gap: 24px, radius: 26px) */}
            <div className="relative group bg-white rounded-[26px] p-5 lg:px-[28px] lg:py-[24px] border border-[#B3EEFF] shadow-[0px_4px_6px_-2px_#00000005,0px_10px_30px_-5px_#0000000D] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,152,255,0.2)] hover:border-[#0098FF] transition-all duration-300 ease-out flex flex-col justify-between gap-4 lg:gap-[24px] overflow-hidden w-full max-w-[365px] h-auto lg:h-[407px] min-h-[380px] lg:min-h-[407px] mx-auto cursor-pointer">
              {/* Card background watermark illustration: Figma spec opacity 0.35 */}
              <div
                className="absolute bottom-0 right-0 pointer-events-none z-0 transition-all duration-300 group-hover:scale-105"
                style={{
                  opacity: 0.35,
                }}
              >
                <Image
                  src="/assets/icons/role_hiring.svg"
                  alt=""
                  width={173}
                  height={197}
                  className="w-[173px] h-[197px] object-contain object-bottom-right pointer-events-none"
                />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-full border border-[#B3EEFF] bg-[#ECFBFF] text-[#007FFC] flex items-center justify-center shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src="/assets/hero-icons/hero_briefcase-job_icon.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span className="inline-flex items-center justify-center h-[28px] px-[14px] py-[6px] rounded-full border border-[#007FFC] bg-[#ECFBFF] text-[#007FFC] text-[12px] leading-[16px] font-sans font-medium">
                    Coming Soon
                  </span>
                </div>

                <h2 className="text-[24px] leading-[31px] font-bold text-slate-900 mb-2 font-lora group-hover:text-primary transition-colors">
                  I&apos;m Hiring
                </h2>
                <p className="text-[14px] leading-[22px] text-slate-600 font-medium mb-6">
                  Connect with colleges and find candidates — from students to graduates.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2.5 text-[14px] leading-[20px] font-medium text-slate-700">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center text-[#475569] shrink-0"
                      style={{ backgroundColor: "rgba(226, 232, 240, 0.80)" }}
                    >
                      <Check size={10} strokeWidth={2.5} />
                    </div>
                    <span>Connect directly with colleges</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-[14px] leading-[20px] font-medium text-slate-700">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center text-[#475569] shrink-0"
                      style={{ backgroundColor: "rgba(226, 232, 240, 0.80)" }}
                    >
                      <Check size={10} strokeWidth={2.5} />
                    </div>
                    <span>Find the right candidates</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-[14px] leading-[20px] font-medium text-slate-700">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center text-[#475569] shrink-0"
                      style={{ backgroundColor: "rgba(226, 232, 240, 0.80)" }}
                    >
                      <Check size={10} strokeWidth={2.5} />
                    </div>
                    <span>Simplify your hiring</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onOpenWaitlist("Employer / Recruiter")}
                className="relative z-10 w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-[14px] leading-[20px] font-semibold text-white bg-primary hover:bg-primary-hover hover:scale-[1.02] shadow-md shadow-blue-500/25 active:scale-[0.98] transition-all duration-200"
              >
                <span>Join Waitlist</span>
                <Bell size={16} className="group-hover:rotate-12 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
