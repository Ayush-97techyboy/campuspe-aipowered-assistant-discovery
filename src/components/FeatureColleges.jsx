"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function FeatureColleges({ onOpenCollegeModal }) {
  const cards = [
    {
      num: "01",
      tag: "VERIFIED PROFILE",
      title: "Build your college profile",
      desc: "Showcase your college, courses, fees, campus, placements and achievements in one structured profile that students and recruiters can discover.",
      badges: [
        {
          text: "NAAC A++ Ready",
          badgeClass: "border border-[#22C55E] bg-white text-[#16A34A] rounded-[8px] px-2.5 py-1 text-xs font-semibold inline-flex items-center gap-1.5 shadow-2xs",
          iconSrc: "/assets/for-colleges-icons/NAAC_A++_ready.svg",
        },
        {
          text: "98% Match",
          badgeClass: "border border-[#0098FF] bg-white text-[#0098FF] text-[11px] font-bold px-2.5 py-0.5 rounded-[8px] shadow-2xs",
        },
      ],
    },
    {
      num: "02",
      tag: "DIRECT ENROLL",
      title: "Students discover and connect",
      desc: "Students searching for colleges can discover your profile, explore your courses and fees, and connect directly with your admission team.",
      badges: [
        {
          text: "Direct Enquiries",
          badgeClass: "bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] rounded-[8px] px-3 py-1 text-xs font-semibold inline-flex items-center gap-1.5",
          iconSrc: "/assets/for-colleges-icons/direct-enquiries.svg",
        },
        {
          text: "WHATSAPP / CHAT",
          badgeClass: "bg-[#F8FAFC] text-[#334155] border border-[#E2E8F0] rounded-[8px] px-3 py-1 text-xs font-semibold inline-flex items-center gap-2",
          hasDot: "#22C55E",
          sub: "Avg. response: <15 min",
        },
      ],
    },
    {
      num: "03",
      tag: "CAMPUS RECRUITING",
      title: "Recruiters discover your College",
      desc: "Companies hiring fresh talent can discover your college, explore your talent and connect with your placement team.",
      badges: [
        {
          text: "500+ Hiring Partners",
          badgeClass: "bg-[#FAF5FF] text-[#7E22CE] border border-[#E9D5FF] rounded-[8px] px-3 py-1 text-xs font-semibold inline-flex items-center gap-1.5",
          iconSrc: "/assets/for-colleges-icons/500+_hiring_partners.svg",
        },
        {
          text: "Connect Directly",
          badgeClass: "bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] rounded-[8px] px-3 py-1 text-xs font-semibold inline-flex items-center gap-1.5",
          iconSrc: "/assets/for-colleges-icons/connect-directly.svg",
        },
      ],
    },
    {
      num: "04",
      tag: "LIVE HUD",
      title: "Track placements in real time",
      desc: "Track students, interviews, offers and placements from one centralized dashboard.",
      badges: [
        {
          text: "LIVE PLACEMENTS",
          badgeClass: "bg-[#FFF1F2] text-[#E11D48] border border-[#FECDD3] rounded-[8px] px-3 py-1 text-xs font-bold inline-flex items-center gap-1.5",
          hasDot: "#E11D48",
        },
        {
          text: "Students · Interviews · Offers",
          badgeClass: "bg-[#0098FF] text-white rounded-[8px] px-4 py-1.5 text-xs font-medium shadow-xs",
        },
      ],
    },
  ];

  return (
    <section id="colleges" className="py-10 lg:py-14 bg-[#F8F9FB]/60 relative overflow-hidden" aria-labelledby="colleges-heading">
      {/* Figma Node 1:1440 Ambient Overlays */}
      {/* Node 1:1441: Top-left 384x384 rounded-full blur 64px */}
      <div
        className="absolute pointer-events-none -top-16 -left-12 lg:-top-[128px] lg:-left-[80px] w-[280px] h-[280px] lg:w-[384px] lg:h-[384px] rounded-full z-0"
        style={{
          background: "rgba(199, 210, 254, 0.14)",
          filter: "blur(64px)",
        }}
        aria-hidden="true"
      />
      {/* Node 1:1442: Bottom-right 696x512 rounded-full blur 64px */}
      <div
        className="absolute pointer-events-none -bottom-10 -right-16 lg:top-[401px] lg:-right-[96px] w-[450px] h-[350px] lg:w-[696px] lg:h-[512px] rounded-full z-0"
        style={{
          background: "rgba(233, 213, 255, 0.20)",
          filter: "blur(64px)",
        }}
        aria-hidden="true"
      />
      {/* Node 1:1443: Bottom-center 412x313 rounded-full blur 64px */}
      <div
        className="absolute pointer-events-none -bottom-8 left-1/3 lg:top-[523px] lg:left-[545px] w-[300px] h-[220px] lg:w-[412px] lg:h-[313px] rounded-full z-0"
        style={{
          background: "rgba(186, 230, 253, 0.20)",
          filter: "blur(64px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1240px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0098FF] text-xs font-semibold w-fit mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-[#0098FF]" aria-hidden="true" />
              <span>02 • FOR COLLEGES</span>
            </div>

            <h2 id="colleges-heading" className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#454545] leading-[1.18] mb-4 sm:mb-5 font-roboto">
              Get Discovered <br />
              <span className="text-[#454545]">by </span>
              <span className="text-[#0098FF]">Students and <br />Recruiters.</span>
            </h2>

            <p className="text-[14px] min-[360px]:text-base sm:text-[20px] sm:leading-[28px] text-[#64748B] font-normal leading-relaxed mb-6 sm:mb-8 font-sans">
              Put your college in front of students searching for the right course
              and recruiters looking for the right talent. CampusPe helps you build
              your presence, attract enquiries and connect with opportunities.
            </p>

            <button
              type="button"
              onClick={onOpenCollegeModal}
              className="inline-flex items-center justify-center gap-2 py-3 sm:py-3.5 px-6 rounded-xl text-[15px] sm:text-[16px] leading-[19.4px] font-semibold text-white bg-primary hover:bg-primary-hover shadow-md shadow-blue-500/25 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all duration-150 w-full sm:w-fit"
            >
              <span>List Your College</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Column: 4 Feature Cards */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-card hover:border-blue-300 transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                  {/* Left Column: Number, Title, Description */}
                  <div className="flex-1 min-w-0 pr-0 sm:pr-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-2">
                      <span className="text-primary font-heading">{card.num}</span>
                      <span className="tracking-wider uppercase">{card.tag}</span>
                    </div>

                    <h3 className="text-lg sm:text-[22px] font-bold text-slate-900 mb-1.5 sm:mb-2 font-heading">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-[15px] text-[#64748B] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  {/* Right Column: Vertically stacked chips matching Figma order */}
                  <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-1.5 sm:gap-2 shrink-0 self-start pt-1 mt-1 sm:mt-0">
                    {card.badges.map((b, bIdx) => (
                      <div key={bIdx} className="flex flex-col items-start sm:items-end">
                        <span className={b.badgeClass}>
                          {b.hasDot && (
                            <span
                              className="w-2 h-2 rounded-full inline-block shrink-0"
                              style={{ backgroundColor: b.hasDot }}
                              aria-hidden="true"
                            />
                          )}
                          {b.iconSrc && (
                            <Image
                              src={b.iconSrc}
                              alt=""
                              width={14}
                              height={14}
                              className="w-3.5 h-3.5 object-contain shrink-0"
                            />
                          )}
                          <span>{b.text}</span>
                        </span>
                        {b.sub && (
                          <span className="text-[11px] text-slate-400 mt-1 pr-1">
                            {b.sub}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
