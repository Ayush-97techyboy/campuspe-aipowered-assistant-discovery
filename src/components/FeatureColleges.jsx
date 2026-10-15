"use client";

import React from "react";
import { ArrowRight, CheckCircle2, MessageSquare, ShieldCheck, TrendingUp, Users } from "lucide-react";

export default function FeatureColleges({ onOpenCollegeModal }) {
  const cards = [
    {
      num: "01",
      tag: "VERIFIED PROFILE",
      title: "Build your college profile",
      desc: "Showcase your college, courses, fees, campus, placements and achievements in one structured profile that students and recruiters can discover.",
      badges: [
        { text: "NAAC A++ Ready", color: "text-emerald-700 bg-emerald-50 border-emerald-200", icon: CheckCircle2 },
        { text: "98% Match", color: "text-primary bg-blue-50 border-blue-200" },
      ],
    },
    {
      num: "02",
      tag: "DIRECT ENROLL",
      title: "Students discover and connect",
      desc: "Students searching for colleges can discover your profile, explore your courses and fees, and connect directly with your admission team.",
      badges: [
        { text: "Direct Enquiries", color: "text-blue-700 bg-blue-50 border-blue-200" },
        { text: "● WHATSAPP / CHAT", color: "text-emerald-700 bg-emerald-50 border-emerald-200", sub: "Avg. response: <15 min" },
      ],
    },
    {
      num: "03",
      tag: "CAMPUS RECRUITING",
      title: "Recruiters discover your College",
      desc: "Companies hiring fresh talent can discover your college, explore your talent and connect with your placement team.",
      badges: [
        { text: "500+ Hiring Partners", color: "text-purple-700 bg-purple-50 border-purple-200" },
        { text: "Connect Directly", color: "text-indigo-700 bg-indigo-50 border-indigo-200" },
      ],
    },
    {
      num: "04",
      tag: "LIVE HUD",
      title: "Track placements in real time",
      desc: "Track students, interviews, offers and placements from one centralized dashboard.",
      badges: [
        { text: "● LIVE PLACEMENTS", color: "text-rose-700 bg-rose-50 border-rose-200" },
        { text: "Students · Interviews · Offers", color: "text-white bg-primary border-primary" },
      ],
    },
  ];

  return (
    <section id="colleges" className="py-16 lg:py-24 bg-slate-50/50 relative overflow-hidden" aria-labelledby="colleges-heading">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-primary text-xs font-semibold w-fit mb-5">
              <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
              <span>02 • FOR COLLEGES</span>
            </div>

            <h2 id="colleges-heading" className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 leading-[1.15] mb-5 font-heading">
              Get Discovered <br />
              <span className="text-slate-900 font-extrabold">by </span>
              <span className="text-gradient-blue">Students and Recruiters.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8">
              Put your college in front of students searching for the right course
              and recruiters looking for the right talent. CampusPe helps you build
              your presence, attract enquiries and connect with opportunities.
            </p>

            <button
              type="button"
              onClick={onOpenCollegeModal}
              className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-primary hover:bg-primary-hover shadow-md shadow-blue-500/25 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all duration-150"
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
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                    <span className="text-primary font-heading">{card.num}</span>
                    <span className="tracking-wider uppercase">{card.tag}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 justify-end">
                    {card.badges.map((b, bIdx) => (
                      <div key={bIdx} className="flex flex-col items-end">
                        <span
                          className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${b.color} inline-flex items-center gap-1`}
                        >
                          {b.icon && <b.icon size={12} />}
                          <span>{b.text}</span>
                        </span>
                        {b.sub && (
                          <span className="text-[10px] text-slate-400 mt-0.5">
                            {b.sub}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
