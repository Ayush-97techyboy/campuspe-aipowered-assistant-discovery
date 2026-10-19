"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./FeatureColleges.module.css";

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
          dotColorClass: "bg-[#22C55E]",
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
          text: "Real-time Analytics",
          badgeClass: "bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0] rounded-[8px] px-3 py-1 text-xs font-semibold inline-flex items-center gap-1.5",
          iconSrc: "/assets/for-colleges-icons/real-time-analytics.svg",
        },
        {
          text: "Placement HUD",
          badgeClass: "bg-[#F8FAFC] text-[#334155] border border-[#E2E8F0] rounded-[8px] px-3 py-1 text-xs font-semibold inline-flex items-center gap-1.5",
          iconSrc: "/assets/for-colleges-icons/placement-HUD.svg",
        },
      ],
    },
  ];

  return (
    <section id="colleges" className={styles.collegesSection} aria-labelledby="colleges-heading">
      <div className={styles.collegesGlowTopLeft} aria-hidden="true" />
      <div className={styles.collegesGlowBottomRight} aria-hidden="true" />
      <div className={styles.collegesGlowBottomCenter} aria-hidden="true" />

      <div className={styles.collegesContainer}>
        <div className={styles.collegesGrid}>
          {/* Left Column: Heading & CTA */}
          <div className={styles.collegesLeftCol}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0098FF] text-xs font-semibold w-fit mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-[#0098FF]" aria-hidden="true" />
              <span>02 • FOR COLLEGES</span>
            </div>

            <h2 id="colleges-heading" className={styles.collegesHeading}>
              Get Discovered <br />
              <span className="text-[#454545]">by </span>
              <span className="text-[#0098FF]">Students and <br />Recruiters.</span>
            </h2>

            <p className={styles.collegesDesc}>
              Put your college in front of students searching for the right course
              and recruiters looking for the right talent. CampusPe helps you build
              your presence, attract enquiries and connect with opportunities.
            </p>

            <button
              type="button"
              onClick={onOpenCollegeModal}
              className={styles.collegesBtnList}
            >
              <span>List Your College</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Column: 4 College Feature Cards */}
          <div className={styles.collegesRightCol}>
            {cards.map((card, idx) => (
              <div key={idx} className={styles.collegesFeatureCard}>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
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

                  <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-1.5 sm:gap-2 shrink-0 self-start pt-1 mt-1 sm:mt-0">
                    {card.badges.map((b, bIdx) => (
                      <div key={bIdx} className="flex flex-col items-start sm:items-end">
                        <span className={b.badgeClass}>
                          {b.dotColorClass && (
                            <span
                              className={`w-2 h-2 rounded-full inline-block shrink-0 ${b.dotColorClass}`}
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
