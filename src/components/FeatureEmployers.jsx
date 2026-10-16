"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function FeatureEmployers({ onOpenPostJobModal }) {
  const cards = [
    {
      num: "01",
      title: "Post a role in minutes",
      tag: "INSTANT SETUP",
      desc: "Define your skills, location and hiring requirements. Reach relevant candidates across the CampusPe network.",
      badges: [
        {
          text: "5 Min Deployment",
          badgeClass: "border border-[#86EFAC] bg-[#F0FDF4] text-[#16A34A] rounded-lg px-3 py-1 text-xs font-semibold inline-flex items-center gap-1.5",
          iconSrc: "/assets/icons/electricity_badge.svg",
        },
        {
          text: "500+ Campus Network",
          badgeClass: "border border-[#E2E8F0] bg-[#F8FAFC] text-[#475569] rounded-lg px-3 py-1 text-xs font-medium inline-flex items-center",
        },
      ],
    },
    {
      num: "02",
      title: "Receive a matched shortlist",
      tag: "INSTANT SETUP",
      desc: "Get candidates matched to your role by skills, experience, location and hiring requirements.",
      badges: [
        {
          text: "Zero CV Clutter",
          badgeClass: "border border-[#E9D5FF] bg-[#FAF5FF] text-[#9333EA] rounded-lg px-3 py-1 text-xs font-semibold inline-flex items-center gap-1.5",
          iconSrc: "/assets/icons/balance_badge.svg",
        },
        {
          text: "Tier 1–Tier 3 Parity",
          badgeClass: "border border-[#E2E8F0] bg-[#F8FAFC] text-[#475569] rounded-lg px-3 py-1 text-xs font-medium inline-flex items-center",
        },
      ],
    },
    {
      num: "03",
      title: "Connect with candidates directly",
      tag: "INSTANT SETUP",
      desc: "Message, schedule interviews, and move candidates through your pipeline — all in one place.",
      badges: [
        {
          text: "In-App Scheduling",
          badgeClass: "border border-[#BFDBFE] bg-[#EFF6FF] text-[#2563EB] rounded-lg px-3 py-1 text-xs font-semibold inline-flex items-center gap-1.5",
          iconSrc: "/assets/icons/chat_hud.svg",
        },
        {
          text: "1-Click Video / Chat",
          badgeClass: "border border-[#E2E8F0] bg-[#F8FAFC] text-[#475569] rounded-lg px-3 py-1 text-xs font-medium inline-flex items-center",
        },
      ],
    },
    {
      num: "04",
      title: "Reduce your time-to-hire",
      tag: "INSTANT SETUP",
      desc: "Find matched candidates, connect with them and move from shortlist to offer in one streamlined workflow.",
      badges: [
        {
          text: "<2 DAYS",
          badgeClass: "bg-[#0098FF] text-white font-semibold rounded-full px-3.5 py-1 text-xs inline-flex items-center",
        },
        {
          text: "57% Faster Hiring",
          badgeClass: "border border-[#86EFAC] bg-[#F0FDF4] text-[#16A34A] rounded-lg px-3 py-1 text-xs font-semibold inline-flex items-center",
        },
      ],
    },
  ];

  return (
    <section id="employers" className="py-10 lg:py-14 bg-white relative overflow-hidden" aria-labelledby="employers-heading">
      {/* Ambient background glows matching exact Figma Node 1:1550 & 1:1551 */}
      {/* Node 1:1550: Top-right 650x650 rounded-full blur 64px */}
      <div
        className="absolute pointer-events-none top-16 -right-16 lg:-right-[60px] w-[450px] h-[450px] lg:w-[650px] lg:h-[650px] rounded-full z-0"
        style={{
          background: "linear-gradient(to right, rgba(221, 214, 254, 0.35) 0%, rgba(219, 234, 254, 0.25) 50%, rgba(219, 234, 254, 0.00) 100%)",
          filter: "blur(64px)",
        }}
        aria-hidden="true"
      />
      {/* Node 1:1551: Bottom-left 500x500 rounded-full blur 64px */}
      <div
        className="absolute pointer-events-none -bottom-16 -left-12 lg:left-[50px] w-[380px] h-[380px] lg:w-[500px] lg:h-[500px] rounded-full z-0"
        style={{
          background: "linear-gradient(to right, rgba(224, 231, 255, 0.30) 0%, rgba(241, 245, 249, 0.40) 50%, rgba(241, 245, 249, 0.00) 100%)",
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
              <span>03 • FOR EMPLOYERS</span>
            </div>

            <h2 id="employers-heading" className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold text-[#020617] leading-[1.12] mb-5 font-heading">
              Stop running <br />
              campus drives. <br />
              <span className="text-primary">
                Start hiring the right <br />
                people.
              </span>
            </h2>

            <p className="text-base sm:text-[20px] sm:leading-[28px] text-[#64748B] font-normal leading-relaxed mb-8 font-sans">
              Post a role in minutes and reach relevant candidates without the time,
              travel and coordination of traditional hiring. CampusPe helps you
              discover, match and connect with talent from colleges and beyond.
            </p>

            <button
              type="button"
              onClick={onOpenPostJobModal}
              className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-[16px] leading-[19.4px] font-semibold text-white bg-primary hover:bg-primary-hover shadow-md shadow-blue-500/25 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all duration-150"
            >
              <span>Post a Job</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Column: 4 Employer Feature Cards */}
          <div className="lg:col-span-7 space-y-4 relative">
            {/* Small purple shadow in between the 2nd & 3rd card matching Figma */}
            <div
              className="absolute pointer-events-none left-6 sm:left-10 top-[48%] -translate-y-1/2 w-[220px] h-[100px] rounded-full z-0"
              style={{
                background: "radial-gradient(ellipse at center, rgba(192, 132, 252, 0.45) 0%, rgba(216, 180, 254, 0.20) 60%, transparent 100%)",
                filter: "blur(28px)",
              }}
              aria-hidden="true"
            />

            {cards.map((card, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white/95 border border-slate-200/90 shadow-sm hover:shadow-card hover:border-blue-300 transition-all duration-200 relative z-10"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Left Side: Number, Title, Tag, Description */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 sm:gap-2.5 mb-2 flex-nowrap">
                      <span className="text-xs font-bold text-primary font-heading px-2 py-0.5 rounded-md bg-blue-50 border border-blue-100 shrink-0">
                        {card.num}
                      </span>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base lg:text-[17px] shrink-0">
                        {card.title}
                      </h3>
                      <span className="text-[10px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100 shrink-0">
                        {card.tag}
                      </span>
                    </div>

                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  {/* Right Side: Vertically stacked chips matching Figma order */}
                  <div className="flex flex-col items-start sm:items-end gap-2 shrink-0 self-start sm:self-center">
                    {card.badges.map((b, bIdx) => (
                      <span key={bIdx} className={b.badgeClass}>
                        {b.iconSrc && (
                          <Image
                            src={b.iconSrc}
                            alt=""
                            width={14}
                            height={14}
                            className="w-3.5 h-3.5 object-contain"
                          />
                        )}
                        <span>{b.text}</span>
                      </span>
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
