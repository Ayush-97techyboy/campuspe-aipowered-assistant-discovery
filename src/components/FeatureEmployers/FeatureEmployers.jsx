"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./FeatureEmployers.module.css";

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
          badgeClass: "border border-[#86EFAC] bg-[#F0FDF4] text-[#16A34A] rounded-[8px] px-3 py-1 text-xs font-semibold inline-flex items-center gap-1.5",
          iconSrc: "/assets/for-emploer-icons/5-min-deployment.svg",
        },
        {
          text: "500+ Campus Network",
          badgeClass: "border border-[#E2E8F0] bg-[#F8FAFC] text-[#475569] rounded-[8px] px-3 py-1 text-xs font-medium inline-flex items-center",
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
          badgeClass: "border border-[#E9D5FF] bg-[#FAF5FF] text-[#9333EA] rounded-[8px] px-3 py-1 text-xs font-semibold inline-flex items-center gap-1.5",
          iconSrc: "/assets/for-emploer-icons/zero-cv-clutter.svg",
        },
        {
          text: "Tier 1–Tier 3 Parity",
          badgeClass: "border border-[#E2E8F0] bg-[#F8FAFC] text-[#475569] rounded-[8px] px-3 py-1 text-xs font-medium inline-flex items-center",
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
          badgeClass: "border border-[#BFDBFE] bg-[#EFF6FF] text-[#2563EB] rounded-[8px] px-3 py-1 text-xs font-semibold inline-flex items-center gap-1.5",
          iconSrc: "/assets/for-emploer-icons/in-app-scheduling.svg",
        },
        {
          text: "1-Click Video / Chat",
          badgeClass: "border border-[#E2E8F0] bg-[#F8FAFC] text-[#475569] rounded-[8px] px-3 py-1 text-xs font-medium inline-flex items-center",
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
          badgeClass: "bg-[#0098FF] text-white font-semibold rounded-[8px] px-3.5 py-1 text-xs inline-flex items-center",
        },
        {
          text: "10x Candidate Velocity",
          badgeClass: "border border-[#FED7AA] bg-[#FFF7ED] text-[#EA580C] rounded-[8px] px-3 py-1 text-xs font-semibold inline-flex items-center",
        },
      ],
    },
  ];

  return (
    <section id="employers" className={styles.employersSection} aria-labelledby="employers-heading">
      <div className={styles.employersGlowTopLeft} aria-hidden="true" />
      <div className={styles.employersGlowRight} aria-hidden="true" />
      <div className={styles.employersGlowBottomCenter} aria-hidden="true" />

      <div className={styles.employersContainer}>
        <div className={styles.employersGrid}>
          {/* Left Column: Heading & CTA */}
          <div className={styles.employersLeftCol}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0098FF] text-xs font-semibold w-fit mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-[#0098FF]" aria-hidden="true" />
              <span>03 • FOR EMPLOYERS</span>
            </div>

            <h2 id="employers-heading" className={styles.employersHeading}>
              Stop running <br />
              campus drives. <br />
              <span className="text-[#0098FF]">
                Start hiring the right <br />
                people.
              </span>
            </h2>

            <p className={styles.employersDesc}>
              Post a role in minutes and reach relevant candidates without the time,
              travel and coordination of traditional hiring. CampusPe helps you
              discover, match and connect with talent from colleges and beyond.
            </p>

            <button
              type="button"
              onClick={onOpenPostJobModal}
              className={styles.employersBtnPost}
            >
              <span>Post a Job</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Column: 4 Employer Feature Cards */}
          <div className={styles.employersRightCol}>
            {cards.map((card, idx) => (
              <div key={idx} className={styles.employersFeatureCard}>
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
                      <span key={bIdx} className={b.badgeClass}>
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
