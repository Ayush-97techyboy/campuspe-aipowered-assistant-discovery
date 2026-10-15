"use client";

import React from "react";
import { ArrowRight, Zap, RefreshCw, MessageSquare, Clock } from "lucide-react";

export default function FeatureEmployers({ onOpenPostJobModal }) {
  const cards = [
    {
      num: "01",
      title: "Post a role in minutes",
      tag: "INSTANT SETUP",
      desc: "Define your skills, location and hiring requirements. Reach relevant candidates across the CampusPe network.",
      badges: [
        { text: "5 Min Deployment", color: "text-emerald-700 bg-emerald-50 border-emerald-200", icon: Zap },
        { text: "500+ Campus Network", color: "text-slate-600 bg-slate-100 border-slate-200" },
      ],
    },
    {
      num: "02",
      title: "Receive a matched shortlist",
      tag: "INSTANT SETUP",
      desc: "Get candidates matched to your role by skills, experience, location and hiring requirements.",
      badges: [
        { text: "Zero CV Clutter", color: "text-purple-700 bg-purple-50 border-purple-200", icon: RefreshCw },
        { text: "Tier 1–Tier 3 Parity", color: "text-slate-600 bg-slate-100 border-slate-200" },
      ],
    },
    {
      num: "03",
      title: "Connect with candidates directly",
      tag: "INSTANT SETUP",
      desc: "Message, schedule interviews, and move candidates through your pipeline — all in one place.",
      badges: [
        { text: "In-App Scheduling", color: "text-blue-700 bg-blue-50 border-blue-200", icon: MessageSquare },
        { text: "1-Click Video / Chat", color: "text-slate-600 bg-slate-100 border-slate-200" },
      ],
    },
    {
      num: "04",
      title: "Reduce your time-to-hire",
      tag: "INSTANT SETUP",
      desc: "Find matched candidates, connect with them and move from shortlist to offer in one streamlined workflow.",
      badges: [
        { text: "<2 DAYS", color: "text-white bg-primary border-primary font-bold" },
        { text: "57% Faster Hiring", color: "text-emerald-700 bg-emerald-50 border-emerald-200" },
      ],
    },
  ];

  return (
    <section id="employers" className="py-16 lg:py-24 bg-white relative overflow-hidden" aria-labelledby="employers-heading">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-primary text-xs font-semibold w-fit mb-5">
              <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
              <span>03 • FOR EMPLOYERS</span>
            </div>

            <h2 id="employers-heading" className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 leading-[1.12] mb-5 font-heading">
              Stop running <br />
              campus drives. <br />
              <span className="text-gradient-blue">Start hiring the right people.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8">
              Post a role in minutes and reach relevant candidates without the time,
              travel and coordination of traditional hiring. CampusPe helps you
              discover, match and connect with talent from colleges and beyond.
            </p>

            <button
              type="button"
              onClick={onOpenPostJobModal}
              className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-primary hover:bg-primary-hover shadow-md shadow-blue-500/25 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all duration-150"
            >
              <span>Post a Job</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Column: 4 Employer Feature Cards */}
          <div className="lg:col-span-7 space-y-4">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-card hover:border-blue-300 transition-all duration-200"
              >
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-primary font-heading px-2 py-0.5 rounded bg-blue-50 border border-blue-100">
                      {card.num}
                    </span>
                    <h3 className="font-bold text-slate-900 text-lg">
                      {card.title}
                    </h3>
                  </div>

                  <span className="text-[10px] font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100 flex-shrink-0">
                    {card.tag}
                  </span>
                </div>

                <p className="text-sm text-slate-600 pl-9 mb-4 leading-relaxed">
                  {card.desc}
                </p>

                <div className="flex flex-wrap items-center gap-2 pl-9">
                  {card.badges.map((b, bIdx) => (
                    <span
                      key={bIdx}
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${b.color} inline-flex items-center gap-1`}
                    >
                      {b.icon && <b.icon size={12} />}
                      <span>{b.text}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
