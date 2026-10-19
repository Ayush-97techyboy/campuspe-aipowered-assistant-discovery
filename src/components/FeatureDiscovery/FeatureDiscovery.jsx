"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./FeatureDiscovery.module.css";

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
    <section id="opportunities" className={styles.discoverySection} aria-labelledby="discovery-heading">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className={styles.discoveryGlowTopRight} />
        <div className={styles.discoveryGlowBottomLeft} />
      </div>

      <div className={styles.discoveryContainer}>
        <div className={styles.discoveryGrid}>
          {/* Left Column */}
          <div className={styles.discoveryLeftCol}>
            <div className={styles.discoveryTagBadge}>
              <span className="w-2 h-2 rounded-full bg-[#0098FF]" aria-hidden="true" />
              <span>01 • OPPORTUNITY DISCOVERY</span>
            </div>

            <h2 id="discovery-heading" className={styles.discoveryHeading}>
              Stop searching. <br />
              <span className={styles.textGradientBlue}>Start getting matched.</span>
            </h2>

            <p className={styles.discoveryDesc}>
              No more scrolling through endless job portals or college websites.
              CampusPe learns what you&apos;re looking for and brings relevant
              opportunities directly to you.
            </p>

            {/* 3 Value Propositions */}
            <div className={styles.discoveryFeaturesList}>
              {[
                {
                  num: "01",
                  title: "Smart Recommendations",
                  desc: "Opportunities that actually match your profile, interests and skills.",
                },
                {
                  num: "02",
                  title: "Multiple Opportunities",
                  desc: "Explore colleges, internships, full-time jobs, gigs, and freelance projects in one place.",
                },
                {
                  num: "03",
                  title: "Direct Access",
                  desc: "Connect directly with colleges and employers. No middlemen, no spam.",
                },
              ].map((item, idx) => (
                <div key={idx} className={styles.discoveryFeatureCard}>
                  <div className={styles.discoveryFeatureCardInner}>
                    <div className={styles.discoveryFeatureIconWrap} aria-hidden="true">
                      <span className={styles.discoveryFeatureNum}>{item.num}</span>
                    </div>
                    <div className={styles.discoveryFeatureTextWrap}>
                      <h3 className={styles.discoveryFeatureTitle}>{item.title}</h3>
                      <p className={styles.discoveryFeatureDesc}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setActiveTab("Jobs")}
              className={styles.discoveryBtnExplore}
            >
              <span>Explore opportunities</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Column: Interactive Opportunity Feed Mockup */}
          <div className={styles.discoveryRightCol}>
            <div className={styles.discoveryFeedCard}>
              <div className={styles.discoveryFeedHeader}>
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-md shadow-blue-500/30 flex-shrink-0" aria-hidden="true">
                    <Image
                      src="/assets/campus_pe_feed_opportunity_icon.svg"
                      alt=""
                      width={15}
                      height={17}
                      className="w-[15px] h-[17px] object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                      CampusPe Opportunity Feed
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500">
                      Colleges &amp; opportunities matched to you
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] sm:text-xs font-semibold self-start sm:self-auto flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                  <span>12 new matches today</span>
                </div>
              </div>

              {/* Filter Tabs */}
              <div role="tablist" aria-label="Filter opportunities by category" className={styles.discoveryFeedTabs}>
                {filterTabs.map((tab) => (
                  <button
                    key={tab}
                    role="tab"
                    id={`tab-${tab}`}
                    aria-selected={activeTab === tab}
                    aria-controls={`panel-${tab}`}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`${styles.discoveryTabBtn} ${activeTab === tab ? styles.active : styles.inactive}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Opportunities List Container */}
              <div role="tabpanel" id={`panel-${activeTab}`} aria-labelledby={`tab-${activeTab}`} className="space-y-3 sm:space-y-4 pt-1 sm:pt-2 min-w-0 w-full">
                {displayedOpportunities.map((op) => (
                  <div
                    key={op.id}
                    className="p-3.5 sm:p-5 rounded-2xl border border-slate-200/90 bg-slate-50/40 hover:bg-white hover:border-blue-300 hover:shadow-soft transition-all duration-200 min-w-0 w-full box-border"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2 min-w-0">
                      <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
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
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                            <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                              {op.title}
                            </h4>
                            <span className={`text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-full border ${op.badgeColor} flex-shrink-0`}>
                              {op.badge}
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 sm:gap-3 text-xs text-slate-500 mt-1">
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
                        className="min-h-[38px] text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-150 flex-shrink-0 bg-primary hover:bg-primary-hover text-white shadow-sm shadow-blue-500/20 active:scale-95 w-full sm:w-auto text-center"
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
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-100 text-xs text-center sm:text-left min-w-0 w-full">
                <button
                  type="button"
                  onClick={() => setActiveTab("All")}
                  className="font-bold text-primary hover:text-blue-700 flex items-center gap-1 transition-colors min-h-[32px] justify-center sm:justify-start"
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
            <div className="mt-5 sm:mt-6 flex items-center gap-2.5 sm:gap-3 justify-center sm:justify-start px-2 sm:pl-6 min-w-0 w-full max-w-full">
              <Image
                src="/assets/icons/handwritten_arrow.png"
                alt=""
                width={48}
                height={41}
                className="w-7 min-[360px]:w-8 sm:w-10 md:w-12 h-auto object-contain flex-shrink-0"
              />
              <p className="font-caveat font-semibold text-[17px] min-[360px]:text-[20px] sm:text-[28px] md:text-[30px] leading-[22px] min-[360px]:leading-[26px] sm:leading-[34px] text-[#5B21B6] tracking-wide text-left min-w-0 flex-1">
                A mix of colleges, jobs,<br className="hidden sm:inline" /> internships and gigs — all in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
