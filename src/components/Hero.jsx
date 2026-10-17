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
    <section className="relative pt-6 pb-2 lg:pt-10 lg:pb-3 bg-transparent">
      <div className="relative max-w-[1440px] 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Figma Node 1:868: Ellipse 6 behind Resume Builder (227x227) */}
        <div
          className="absolute pointer-events-none rounded-full z-0 w-[227px] h-[227px] right-2 lg:right-[80px] top-[14px] lg:top-[20px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(105, 127, 255, 0.12) 0%, rgba(104, 206, 198, 0.12) 57.21%, rgba(195, 45, 112, 0.00) 100%)",
            filter: "blur(66px)",
          }}
          aria-hidden="true"
        />

        {/* Central Ellipse Arc across cards (Figma Node 1:794 - Ellipse 3: 1009x156 blur 66px) */}
        <div
          className="absolute pointer-events-none left-1/2 -translate-x-1/2 bottom-[20px] lg:bottom-[0px] w-[900px] lg:w-[1009px] h-[160px] lg:h-[180px] rounded-full z-0"
          style={{
            background: "linear-gradient(to right, rgba(105, 127, 255, 0.25) 0%, rgba(104, 206, 198, 0.20) 57%, rgba(195, 45, 112, 0.00) 100%)",
            filter: "blur(66px)",
          }}
          aria-hidden="true"
        />
        {/* Top Header Section Container (w=896px in Figma, perfectly centered) */}
        <div className="relative max-w-[896px] mx-auto mb-10 lg:mb-14 pt-2">
          {/* Top Pill Badge */}
          <div className="flex justify-center mb-5">
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

          {/* Main Title & Subtitle (Figma: Roboto 700 48px #091124, Inter 500 20px #4B5565) */}
          <div className="text-center max-w-3xl mx-auto mb-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold tracking-tight text-[#091124] leading-[1.2] mb-4 sm:mb-5 font-roboto">
              Connect{" "}
              <span className="text-gradient-10x">10X</span>{" "}
              <span className="text-gradient-faster">Faster.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-[20px] leading-[22px] sm:leading-[24px] text-[#4B5565] font-medium max-w-2xl mx-auto font-sans px-2">
              One platform connecting students, colleges &amp; employers — faster.
            </p>
          </div>

          {/* Floating Tile 1: WhatsApp Alert (Figma Group 1410104497: X -107, Y 31, W 203, H 107) */}
          <div
            className="hidden xl:block absolute z-20 w-[203px] h-[107px] bg-white rounded-[21px] border border-[#697FFF] shadow-card hover:shadow-hover hover:scale-105 hover:border-[#0098FF] transition-all duration-300 animate-float-slow -left-[107px] top-[31px] p-[16px] overflow-hidden text-left cursor-pointer group"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Image src="/assets/icons/whatsapp.svg" alt="" width={16} height={16} className="object-contain" />
              </div>
              <span className="text-[14px] leading-[22px] font-medium text-[#D96704] group-hover:text-amber-700 transition-colors">
                WhatsApp Alert
              </span>
            </div>
            <p className="text-[12px] leading-[16px] font-semibold text-[#0A0A0A] mb-1">
              Get notified on whatsapp
            </p>
            <p className="text-[10px] leading-[12px] font-medium text-[#54565F]">
              You&apos;ll get all important updates on your whatsapp
            </p>
          </div>

          {/* Floating Tile 2: Resume Builder (Figma Group 1410104496: W 225, H 140, relative right -105, top 24) */}
          <div
            className="hidden xl:block absolute z-20 w-[225px] h-[140px] bg-white rounded-[23px] border border-[#697FFF] shadow-card hover:shadow-hover hover:scale-105 hover:border-[#0098FF] transition-all duration-300 animate-float-delayed -right-[105px] top-[24px] p-[18px] overflow-hidden text-left cursor-pointer group"
          >
            <div className="flex items-center gap-1.5 mb-2 group-hover:scale-105 transition-transform">
              <Image src="/assets/icons/resume_builder_logo.svg" alt="Resume Builder" width={127} height={20} className="object-contain" />
            </div>
            <p className="text-[12px] leading-[16px] font-semibold text-[#0A0A0A] mb-1.5">
              Build Your Resume
            </p>
            <p className="text-[10px] leading-[16px] font-semibold text-[#54565F]">
              Our resume builder gives you dynamic options to build better &amp; faster resume that got you hired
            </p>
          </div>

          {/* Floating Tile 3: 142 students matched today (Figma X: -101, Y: 212, W: 293, H: 51) */}
          <div
            className="hidden xl:flex absolute z-20 w-[293px] h-[51px] -left-[101px] top-[212px] bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2 border border-slate-100 shadow-card items-center gap-2.5 hover:scale-105 hover:border-blue-200 hover:shadow-md transition-all duration-200 text-left cursor-pointer"
          >
            <div className="flex -space-x-1.5">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-[9px] font-bold flex items-center justify-center border-2 border-white shadow-xs">
                AK
              </span>
              <span className="w-6 h-6 rounded-full bg-purple-600 text-white text-[9px] font-bold flex items-center justify-center border-2 border-white shadow-xs">
                PR
              </span>
              <span className="w-6 h-6 rounded-full bg-teal-600 text-white text-[9px] font-bold flex items-center justify-center border-2 border-white shadow-xs">
                SN
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>🔥 142 students matched today</span>
              </div>
              <p className="text-[10px] text-slate-500">Just now • IIT, BITS, VIT</p>
            </div>
          </div>

          {/* Floating Tile 4: Radiant Info shortlisted (Figma X: 704 / right -80, Y: 217, W: 271, H: 46) */}
          <div
            className="hidden xl:flex absolute z-20 w-[271px] h-[46px] -right-[80px] top-[217px] bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-1.5 border border-slate-100 shadow-card items-center gap-2.5 hover:scale-105 hover:border-amber-200 hover:shadow-md transition-all duration-200 text-left cursor-pointer"
          >
            {/* Briefcase background (Figma node 1:917): 28x28px, rounded-[8px], pt: 5.5px, pb: 6.5px, bg: #2563EB1A */}
            <div
              className="w-[28px] h-[28px] rounded-[8px] flex items-center justify-center shrink-0"
              style={{
                backgroundColor: "rgba(37, 99, 235, 0.10)",
                paddingTop: "5.5px",
                paddingBottom: "6.5px",
              }}
            >
              {/* Briefcase typography (Figma node 1:918): 12x16px, Inter 400, 12px/16px, text-center, #2563EB */}
              <span
                className="w-[12px] h-[16px] inline-flex items-center justify-center text-center font-sans font-normal text-[12px] leading-[16px] text-[#2563EB]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  lineHeight: "16px",
                  fontWeight: 400,
                  color: "#2563EB",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                💼
              </span>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">
                Radiant Info <span className="font-normal text-slate-600">shortlisted 8 interns</span>
              </p>
              <p className="text-[10px] text-emerald-600 font-medium">● Verified recruiter • 2 days ago</p>
            </div>
          </div>
        </div>

        {/* Section Query Header with Sparkles (Figma Alt spacing: 47.86px to cards below) */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 mb-10 sm:mb-12 text-[#0098FF] font-semibold text-[18px] min-[360px]:text-[22px] sm:text-[28px] leading-[26px] sm:leading-[33px] font-roboto px-2 text-center">
          <Image
            src="/assets/icons/left_sparkle.svg"
            alt=""
            width={26}
            height={19}
            className="w-4 sm:w-[26px] h-auto object-contain shrink-0"
          />
          <span>What are you looking for?</span>
          <Image
            src="/assets/icons/right_sparkle.svg"
            alt=""
            width={28}
            height={21}
            className="w-4 sm:w-[28px] h-auto object-contain shrink-0"
          />
        </div>

        {/* 3 Interactive Path Cards (Figma Grid 1152px wide, 365px each, gap 24px) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-[1152px] mx-auto items-stretch">
          {/* Card 1: College */}
          <div className="relative group bg-white rounded-[26px] p-4 sm:p-5 lg:p-7 border border-[#B3EEFF] shadow-card hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,152,255,0.2)] hover:border-[#0098FF] transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden min-h-[380px] sm:min-h-[400px] lg:min-h-[407px] w-full max-w-[365px] md:max-w-none mx-auto cursor-pointer">
            {/* Background SVG illustration aligned to bottom-right, lightened to match tower */}
            <div className="absolute bottom-0 right-0 pointer-events-none z-0 opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-300">
              <Image
                src="/assets/icons/role_college.svg"
                alt=""
                width={273}
                height={176}
                className="w-[200px] sm:w-[220px] h-auto object-contain object-bottom-right"
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

          {/* Card 2: I'm Looking for a Job (Matching Style of other cards) */}
          <div className="relative group bg-white rounded-[26px] p-4 sm:p-5 lg:p-7 border border-[#B3EEFF] shadow-card hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,152,255,0.2)] hover:border-[#0098FF] transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden min-h-[380px] sm:min-h-[400px] lg:min-h-[407px] w-full max-w-[365px] md:max-w-none mx-auto cursor-pointer">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-full border border-[#B3EEFF] bg-[#ECFBFF] text-[#007FFC] flex items-center justify-center shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/assets/hero-icons/hero_degree-job_icon.svg"
                    alt=""
                    width={22}
                    height={18}
                    className="w-[22px] h-[18px] object-contain"
                  />
                </div>
                <span className="inline-flex items-center justify-center h-[28px] px-[14px] py-[6px] rounded-full border border-[#007FFC] bg-[#ECFBFF] text-[#007FFC] text-[12px] leading-[16px] font-sans font-medium">
                  Available Now
                </span>
              </div>

              <h2 className="text-[24px] leading-[31px] font-bold text-slate-900 mb-2 font-lora group-hover:text-primary transition-colors">
                I&apos;m Looking for a Job
              </h2>
              <p className="text-[14px] leading-[22px] text-slate-600 font-medium mb-6">
                Upload your resume. We&apos;ll find jobs that fit you.
              </p>

              <div className="relative mb-6">
                <ul className="space-y-3 max-w-[210px] sm:max-w-[200px]">
                  <li className="flex items-center gap-2.5 text-[14px] leading-[20px] font-medium text-slate-700">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center text-[#475569] shrink-0"
                      style={{ backgroundColor: "#FFF0F0" }}
                    >
                      <Check size={10} strokeWidth={2.5} />
                    </div>
                    <span>Jobs from 1000+ sources</span>
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

                {/* Resume preview illustration matching Figma - visible on mobile and desktop */}
                <div className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-45 sm:opacity-50 group-hover:opacity-90 group-hover:scale-105 transition-all duration-300">
                  <Image
                    src="/assets/icons/role_job.svg"
                    alt="Resume Illustration"
                    width={140}
                    height={135}
                    className="w-[100px] sm:w-[130px] h-auto object-contain"
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

          {/* Card 3: I'm Hiring */}
          <div className="relative group bg-white rounded-[26px] p-4 sm:p-5 lg:p-7 border border-[#B3EEFF] shadow-card hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,152,255,0.2)] hover:border-[#0098FF] transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden min-h-[380px] sm:min-h-[400px] lg:min-h-[407px] w-full max-w-[365px] md:max-w-none mx-auto cursor-pointer">
            {/* Background SVG illustration aligned to bottom-right */}
            <div className="absolute bottom-0 right-0 pointer-events-none z-0 group-hover:scale-105 group-hover:opacity-95 transition-all duration-300">
              <Image
                src="/assets/icons/role_hiring.svg"
                alt=""
                width={173}
                height={197}
                className="w-[140px] sm:w-[150px] h-auto object-contain object-bottom-right"
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
    </section>
  );
}
