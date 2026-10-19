"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Zap,
  MapPin,
  Building,
  Briefcase,
  Sparkles,
} from "lucide-react";

export default function FeatureDiscovery({ onSelectOpportunity }) {
  const [activeTab, setActiveTab] = useState("All");

  const filterTabs = ["All", "Colleges", "Jobs", "Internships", "Freelance", "Part-time"];

  const opportunities = [
    {
      id: "1",
      category: "Colleges",
      title: "IIM Bangalore",
      badge: "Top College",
      badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
      logoSrc: "/assets/icons/logo_iim.svg",
      details: ["MBA", "Bengaluru", "₹ 3L+"],
      description: "India's premier management institute with global exposure...",
      actionText: "View Details",
      isApply: false,
    },
    {
      id: "2",
      category: "Internships",
      title: "Product Intern",
      badge: "Internship",
      badgeColor: "bg-blue-100 text-primary border-blue-200",
      logoSrc: "/assets/icons/logo_google.svg",
      details: ["Bengaluru", "Hybrid", "₹ 35K/mo"],
      description: "Work on real products, learn from top engineers and build...",
      actionText: "Apply Now",
      isApply: true,
    },
    {
      id: "3",
      category: "Freelance",
      title: "Marketing Gig",
      badge: "Freelance",
      badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
      logoSrc: "/assets/icons/logo_notion.svg",
      details: ["Remote", "Freelance", "₹ 10K - ₹ 25K"],
      description: "Create content and help with social media campaigns for...",
      actionText: "View Details",
      isApply: false,
    },
    {
      id: "4",
      category: "Jobs",
      title: "Frontend Engineer (React/Next)",
      badge: "Full-Time",
      badgeColor: "bg-sky-100 text-sky-700 border-sky-200",
      logo: "⚡",
      logoBg: "bg-amber-50 text-amber-600 border border-amber-200",
      details: ["Bangalore / Remote", "Full-time", "₹ 8-12 LPA"],
      description: "Join high-growth AI startup building modern campus systems...",
      actionText: "Apply Now",
      isApply: true,
    },
    {
      id: "5",
      category: "Part-time",
      title: "Campus Ambassador Lead",
      badge: "Part-time",
      badgeColor: "bg-indigo-100 text-indigo-700 border-indigo-200",
      logo: "🎓",
      logoBg: "bg-purple-50 text-purple-600 border border-purple-200",
      details: ["Flexible Hours", "College Campus", "Stipend + Cert"],
      description: "Represent CampusPe in your college, drive community workshops...",
      actionText: "View Details",
      isApply: false,
    },
  ];

  const displayedOpportunities =
    activeTab === "All"
      ? opportunities.slice(0, 3)
      : opportunities.filter((op) => op.category === activeTab);

  return (
    <section id="opportunities" className="pt-7 lg:pt-[36px] pb-12 lg:pb-[70px] bg-transparent relative" aria-labelledby="discovery-heading">
      {/* Ambient background glows matching exact Figma Gradient+Blur (1:1115 & 1:1116) */}

      {/* Ambient background glows matching exact Figma Gradient+Blur (1:1115 & 1:1116) */}
      {/* Node 1:1115: Top-right 650x650 rounded-full blur 64px */}
      <div
        className="absolute pointer-events-none -top-10 -right-16 lg:-right-[60px] w-[500px] h-[500px] lg:w-[650px] lg:h-[650px] rounded-full z-0"
        style={{
          background: "linear-gradient(to right, rgba(199, 210, 254, 0.40) 0%, rgba(233, 213, 255, 0.20) 50%, rgba(233, 213, 255, 0.00) 100%)",
          filter: "blur(64px)",
        }}
        aria-hidden="true"
      />
      {/* Node 1:1116: Bottom-left 600x600 rounded-full blur 64px */}
      <div
        className="absolute pointer-events-none -bottom-16 -left-16 lg:-left-[160px] w-[450px] h-[450px] lg:w-[600px] lg:h-[600px] rounded-full z-0"
        style={{
          background: "linear-gradient(to right, rgba(209, 250, 229, 0.40) 0%, rgba(224, 231, 255, 0.30) 50%, rgba(224, 231, 255, 0.00) 100%)",
          filter: "blur(64px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1240px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Headings & 3 Step Cards */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Tag Badge (Figma: Inter 500 14px #0098FF) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0098FF] text-[12px] sm:text-[14px] leading-[17px] font-medium w-fit mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-[#0098FF]" aria-hidden="true" />
              <span>01 • OPPORTUNITY DISCOVERY</span>
            </div>

            {/* Heading (Figma: Roboto 700 64px/44px #0F172A) */}
            <h2 id="discovery-heading" className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0F172A] leading-[1.15] mb-3 sm:mb-4 font-roboto">
              Stop searching. <br />
              <span className="text-gradient-blue">Start getting matched.</span>
            </h2>

            {/* Description (Figma: Inter 400 20px #64748B) */}
            <p className="text-[14px] min-[360px]:text-base sm:text-[20px] sm:leading-[28px] text-[#64748B] font-normal leading-relaxed mb-6 sm:mb-8 font-sans">
              Tell CampusPe your skills, preferences and goals. We continuously
              monitor company career pages and job sources, find opportunities that
              match you, and notify you when they appear.
            </p>

            {/* 3 Numbered Milestone Cards */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-300 transition-all duration-200">
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="text-xs font-bold text-primary px-2 py-0.5 rounded bg-blue-50 border border-blue-100">
                      01
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Set your preferences
                    </h3>
                  </div>
                  <span className="text-[11px] font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                    Smart Profile
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 pl-0 sm:pl-8 leading-relaxed">
                  Tell us what you&apos;re looking for, from colleges and courses to
                  jobs, internships and gigs.
                </p>
              </div>

              <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-300 transition-all duration-200">
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="text-xs font-bold text-slate-600 px-2 py-0.5 rounded bg-slate-100 border border-slate-200">
                      02
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Discover relevant opportunities
                    </h3>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 sm:px-2.5 py-0.5 rounded-full border border-slate-200">
                    AI Ranked
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 pl-0 sm:pl-8 leading-relaxed">
                  Explore colleges and career opportunities matched to your profile,
                  interests and goals
                </p>
              </div>

              <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-300 transition-all duration-200">
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="text-xs font-bold text-slate-600 px-2 py-0.5 rounded bg-slate-100 border border-slate-200">
                      03
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Get notified when something fits
                    </h3>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 sm:px-2.5 py-0.5 rounded-full border border-emerald-100">
                    Instant Alerts
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 pl-0 sm:pl-8 leading-relaxed">
                  Get notified when a relevant college or new opportunity is found, so
                  you can act early.
                </p>
              </div>
            </div>

            {/* Explore Button */}
            <button
              type="button"
              onClick={() => setActiveTab("Jobs")}
              className="inline-flex items-center justify-center gap-2 py-3 sm:py-3.5 px-5 sm:px-6 rounded-xl font-semibold text-sm sm:text-base text-white bg-primary hover:bg-primary-hover shadow-md shadow-blue-500/25 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all duration-150 w-full sm:w-fit"
            >
              <span>Explore opportunities</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Column: Interactive Opportunity Feed Mockup */}
          <div className="lg:col-span-7 relative">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-slate-200/90 shadow-card relative z-10">
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-md shadow-blue-500/30 flex-shrink-0" aria-hidden="true">
                    <Image
                      src="/assets/campus_pe_feed_opportunity_icon.svg"
                      alt=""
                      width={15}
                      height={17}
                      className="w-[15px] h-[17px] object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                      CampusPe Opportunity Feed
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500">
                      Colleges &amp; opportunities matched to you
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] sm:text-xs font-semibold self-start sm:self-auto">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                  <span>12 new matches today</span>
                </div>
              </div>

              {/* Filter Tabs using ARIA Tablist */}
              <div
                role="tablist"
                aria-label="Filter opportunities by category"
                className="flex items-center gap-1.5 sm:gap-2 py-3 sm:py-4 overflow-x-auto no-scrollbar scroll-smooth"
              >
                {filterTabs.map((tab) => (
                  <button
                    key={tab}
                    role="tab"
                    id={`tab-${tab}`}
                    aria-selected={activeTab === tab}
                    aria-controls={`panel-${tab}`}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`min-h-[36px] min-w-[44px] px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 flex-shrink-0 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none ${
                      activeTab === tab
                        ? "bg-primary text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Opportunities List Container */}
              <div
                role="tabpanel"
                id={`panel-${activeTab}`}
                aria-labelledby={`tab-${activeTab}`}
                className="space-y-3 sm:space-y-4 pt-1 sm:pt-2"
              >
                {displayedOpportunities.map((op) => (
                  <div
                    key={op.id}
                    className="p-3.5 sm:p-5 rounded-2xl border border-slate-200/90 bg-slate-50/40 hover:bg-white hover:border-blue-300 hover:shadow-soft transition-all duration-200"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                      <div className="flex items-start sm:items-center gap-3">
                        <div
                          className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden shadow-xs mt-0.5 sm:mt-0"
                          aria-hidden="true"
                        >
                          {op.logoSrc ? (
                            <Image
                              src={op.logoSrc}
                              alt=""
                              width={44}
                              height={44}
                              className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
                            />
                          ) : (
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${op.logoBg}`}>
                              {op.logo}
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                              {op.title}
                            </h4>
                            <span
                              className={`text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-full border ${op.badgeColor}`}
                            >
                              {op.badge}
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-slate-500 mt-1">
                            {op.details.map((d, i) => (
                              <span key={i} className="flex items-center gap-1">
                                {d}
                                {i < op.details.length - 1 && (
                                  <span className="text-slate-300 ml-1.5 sm:ml-2">•</span>
                                )}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => onSelectOpportunity(op)}
                        className="min-h-[38px] text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-150 flex-shrink-0 bg-primary hover:bg-primary-hover text-white shadow-sm shadow-blue-500/20 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none w-full sm:w-auto text-center"
                      >
                        {op.actionText}
                      </button>
                    </div>

                    <p className="text-xs text-slate-600 pt-1 leading-relaxed">
                      {op.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Feed Bottom Status */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-100 text-xs text-center sm:text-left">
                <button
                  type="button"
                  onClick={() => setActiveTab("All")}
                  className="font-bold text-primary hover:text-blue-700 flex items-center gap-1 transition-colors min-h-[32px] focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                >
                  <span>View all matched opportunities</span>
                  <ArrowRight size={14} />
                </button>
                <span className="text-slate-400">
                  Curated for you • Updated daily
                </span>
              </div>
            </div>

            {/* Handwritten Arrow & Note below card */}
            <div className="mt-5 sm:mt-6 flex items-center gap-2.5 sm:gap-3 justify-center sm:justify-start px-2 sm:pl-6">
              <Image
                src="/assets/icons/handwritten_arrow.png"
                alt=""
                width={48}
                height={41}
                className="w-8 sm:w-10 md:w-12 h-auto object-contain flex-shrink-0"
              />
              <p className="font-caveat font-semibold text-[19px] min-[360px]:text-[22px] sm:text-[28px] md:text-[30px] leading-[25px] min-[360px]:leading-[28px] sm:leading-[34px] text-[#5B21B6] tracking-wide text-center sm:text-left">
                A mix of colleges, jobs,<br className="hidden sm:inline" /> internships and gigs — all in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
