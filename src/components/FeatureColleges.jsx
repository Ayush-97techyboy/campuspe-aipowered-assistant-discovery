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
          badgeClass: "border border-[#22C55E] bg-white text-[#16A34A] rounded-lg px-2.5 py-1 text-xs font-semibold inline-flex items-center gap-1.5 shadow-2xs",
          iconSrc: "/assets/icons/verified_badge.svg",
        },
        {
          text: "98% Match",
          badgeClass: "border border-[#0098FF] bg-white text-[#0098FF] text-[11px] font-bold px-2.5 py-0.5 rounded-md shadow-2xs",
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
          badgeClass: "bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] rounded-xl px-3 py-1 text-xs font-semibold inline-flex items-center gap-1.5",
          iconSrc: "/assets/icons/chat_hud.svg",
        },
        {
          text: "WHATSAPP / CHAT",
          badgeClass: "bg-[#F8FAFC] text-[#334155] border border-[#E2E8F0] rounded-xl px-3 py-1 text-xs font-semibold inline-flex items-center gap-2",
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
          badgeClass: "bg-[#FAF5FF] text-[#7E22CE] border border-[#E9D5FF] rounded-xl px-3 py-1 text-xs font-semibold inline-flex items-center gap-1.5",
          iconSrc: "/assets/icons/building_badge.svg",
        },
        {
          text: "Connect Directly",
          badgeClass: "bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] rounded-xl px-3 py-1 text-xs font-semibold inline-flex items-center gap-1.5",
          iconSrc: "/assets/icons/balance_badge.svg",
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
          badgeClass: "bg-[#FFF1F2] text-[#E11D48] border border-[#FECDD3] rounded-full px-3 py-1 text-xs font-bold inline-flex items-center gap-1.5",
          hasDot: "#E11D48",
        },
        {
          text: "Students · Interviews · Offers",
          badgeClass: "bg-[#0098FF] text-white rounded-full px-4 py-1.5 text-xs font-medium shadow-xs",
        },
      ],
    },
  ];

  return (
    <section id="colleges" className="py-10 lg:py-14 bg-slate-50/50 relative overflow-hidden" aria-labelledby="colleges-heading">
      {/* Ambient background glows matching exact Figma Node 1:1549 & 1:1442 */}
      {/* Node 1:1549: Bottom-left 600x600 rounded-full blur 64px */}
      <div
        className="absolute pointer-events-none -bottom-20 -left-16 lg:-left-[128px] w-[450px] h-[450px] lg:w-[600px] lg:h-[600px] rounded-full z-0"
        style={{
          background: "linear-gradient(to right, rgba(199, 210, 254, 0.40) 0%, rgba(243, 232, 255, 0.30) 50%, rgba(243, 232, 255, 0.00) 100%)",
          filter: "blur(64px)",
        }}
        aria-hidden="true"
      />
      {/* Node 1:1442: Right ambient blur 696x512 rounded-full blur 64px */}
      <div
        className="absolute pointer-events-none top-32 -right-16 lg:-right-[60px] w-[500px] h-[400px] lg:w-[696px] lg:h-[512px] rounded-full z-0"
        style={{
          background: "linear-gradient(to left, rgba(219, 234, 254, 0.35) 0%, rgba(243, 232, 255, 0.20) 50%, rgba(243, 232, 255, 0.00) 100%)",
          filter: "blur(64px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-primary text-xs font-semibold w-fit mb-5">
              <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
              <span>02 • FOR COLLEGES</span>
            </div>

            <h2 id="colleges-heading" className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-slate-900 leading-[1.18] mb-5 font-roboto">
              Get Discovered <br />
              <span className="text-slate-900 font-bold">by </span>
              <span className="text-gradient-blue">Students and Recruiters.</span>
            </h2>

            <p className="text-base sm:text-[20px] sm:leading-[28px] text-[#64748B] font-normal leading-relaxed mb-8 font-sans">
              Put your college in front of students searching for the right course
              and recruiters looking for the right talent. CampusPe helps you build
              your presence, attract enquiries and connect with opportunities.
            </p>

            <button
              type="button"
              onClick={onOpenCollegeModal}
              className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-[16px] leading-[19.4px] font-semibold text-white bg-primary hover:bg-primary-hover shadow-md shadow-blue-500/25 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all duration-150"
            >
              <span>List Your College</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Column: 4 Feature Cards */}
          <div className="lg:col-span-7 space-y-4">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-card hover:border-blue-300 transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  {/* Left Column: Number, Title, Description */}
                  <div className="flex-1 min-w-0 pr-0 sm:pr-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-2">
                      <span className="text-primary font-heading">{card.num}</span>
                      <span className="tracking-wider uppercase">{card.tag}</span>
                    </div>

                    <h3 className="text-xl sm:text-[22px] font-bold text-slate-900 mb-2 font-heading">
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-[15px] text-[#64748B] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  {/* Right Column: Vertically stacked chips matching Figma order */}
                  <div className="flex flex-col items-start sm:items-end gap-2 shrink-0 self-start pt-1">
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
