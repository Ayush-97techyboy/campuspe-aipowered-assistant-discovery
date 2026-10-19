"use client";

import React from "react";
import Image from "next/image";
import { Check, Bell, ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero({ onOpenWaitlist, onExploreJobs }) {
  return (
    <section className={styles.heroSection}>
      {/* Unified Responsive Container */}
      <div className={styles.heroContainer}>
        {/* Blurry ambient colors */}
        <div className={styles.heroGlowResume} aria-hidden="true" />
        <div className={styles.heroGlowCollege} aria-hidden="true" />
        <div className={styles.heroGlowCenter} aria-hidden="true" />

        {/* =========================================================================
            HERO HEADER COMPOSITION
           ========================================================================= */}
        <div className={styles.heroHeaderWrap}>
          {/* 1. Top-Left Floating Card: WhatsApp alerts notification */}
          <div className={`${styles.heroFloatingCardLeft} group`}>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3.5 h-3.5 flex items-center justify-center flex-shrink-0">
                <Image src="/assets/icons/whatsapp.svg" alt="" width={16} height={16} className="object-contain" />
              </div>
              <span className="text-[13px] font-medium text-[#D96704]">
                WhatsApp Alert
              </span>
            </div>
            <p className="text-[11px] font-semibold text-[#0A0A0A] mb-0.5">
              Get notified on whatsapp
            </p>
            <p className="text-[9px] font-medium text-[#54565F]">
              You&apos;ll get all important updates on your whatsapp
            </p>
          </div>

          {/* 2. Top-Right Floating Card: AI resume builder showcase */}
          <div className={`${styles.heroFloatingCardRight} group`}>
            <div className="flex items-center gap-1.5 mb-1.5">
              <Image src="/assets/icons/resume_builder_logo.svg" alt="Resume Builder" width={127} height={20} className="w-[115px] h-auto object-contain" />
            </div>
            <p className="text-[11px] font-semibold text-[#0A0A0A] mb-1">
              Build Your Resume
            </p>
            <p className="text-[9px] font-medium text-[#54565F]">
              Our resume builder gives you dynamic options to build better &amp; faster resume that got you hired
            </p>
          </div>

          {/* CENTRAL HERO HEADER FRAME */}
          <div className={styles.heroCenterContent}>
            <div className={styles.heroGlowHeader} aria-hidden="true" />

            {/* Top Pill Badge */}
            <div className={styles.heroPillWrapper}>
              <div className={styles.heroPillBadge}>
                <Image
                  src="/assets/updated_icns_img/SVGRepo_iconCarrier.svg"
                  alt="AI Assistant icon"
                  width={22}
                  height={17}
                  className="w-4 h-auto object-contain animate-pulse shrink-0"
                />
                <span>AI-Powered Campus Assistant</span>
              </div>
            </div>

            {/* Main Title: Connect 10X Faster */}
            <h1 className={styles.heroTitle}>
              Connect{" "}
              <span className={styles.heroTitleGradient}>
                10X Faster.
              </span>
            </h1>

            {/* Subtitle */}
            <p className={styles.heroSubtitle}>
              One platform connecting students, colleges &amp; employers — faster.
            </p>

            {/* Action selector prompt with dual sparkle icons */}
            <div className={styles.heroPromptBar}>
              <Image
                src="/assets/icons/left_sparkle.svg"
                alt=""
                width={26}
                height={19}
                className="w-4 sm:w-[26px] h-auto object-contain shrink-0"
              />
              <span className={styles.heroPromptText}>
                What are you looking for?
              </span>
              <Image
                src="/assets/icons/right_sparkle.svg"
                alt=""
                width={28}
                height={21}
                className="w-4 sm:w-[28px] h-auto object-contain shrink-0"
              />
            </div>

            {/* Mobile & tablet trust badges (<1024px) */}
            <div className={styles.heroMobileBadges}>
              <div className={styles.heroMobileBadge}>
                <div className="flex -space-x-1.5 shrink-0">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[8px] font-bold flex items-center justify-center border-2 border-white">
                    AK
                  </span>
                  <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-[8px] font-bold flex items-center justify-center border-2 border-white">
                    PR
                  </span>
                  <span className="w-5 h-5 rounded-full bg-teal-600 text-white text-[8px] font-bold flex items-center justify-center border-2 border-white">
                    SN
                  </span>
                </div>
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-800 whitespace-nowrap leading-tight">
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.9)]" />
                    </span>
                    <span>🔥 142 students matched today</span>
                  </div>
                  <p className="text-[9px] text-slate-500 whitespace-nowrap">
                    Just now • IIT, BITS, VIT
                  </p>
                </div>
              </div>

              <div className={styles.heroMobileBadge}>
                <div className="w-6 h-6 rounded-[7px] flex items-center justify-center shrink-0 bg-blue-600/10 text-xs">
                  💼
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] font-bold text-slate-800 whitespace-nowrap">
                    <span className="text-[#007FFC] font-semibold">Radiant Info</span> shortlisted 8 interns
                  </p>
                  <p className="text-[9px] text-emerald-600 font-medium whitespace-nowrap">
                    Verified recruiter • 2 days ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Roles Grid Wrapper */}
        <div className={styles.heroRolesWrapper}>
          {/* Upper Floating Badges Overlay (Desktop >=1024px) */}
          <div className={styles.heroUpperBadges}>
            <div className="flex justify-center items-end">
              <div className="pointer-events-auto w-[293px] h-[51px] bg-white/90 backdrop-blur-[14px] rounded-[16px] px-[14px] py-[8px] border border-[#E2E8F0] shadow-card flex items-center gap-[10px] text-left cursor-pointer shrink-0">
                <div className="flex -space-x-1.5 shrink-0">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-[9px] font-bold flex items-center justify-center border-2 border-white">AK</span>
                  <span className="w-6 h-6 rounded-full bg-purple-600 text-white text-[9px] font-bold flex items-center justify-center border-2 border-white">PR</span>
                  <span className="w-6 h-6 rounded-full bg-teal-600 text-white text-[9px] font-bold flex items-center justify-center border-2 border-white">SN</span>
                </div>
                <div className="shrink-0">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 whitespace-nowrap">
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.9)]" />
                    </span>
                    <span>🔥 142 students matched today</span>
                  </div>
                  <p className="text-[10px] text-slate-500 whitespace-nowrap">Just now • IIT, BITS, VIT</p>
                </div>
              </div>
            </div>

            <div aria-hidden="true" />

            <div className="flex justify-center items-end">
              <div className="pointer-events-auto w-[271px] h-[46px] bg-white/90 backdrop-blur-[14px] rounded-[16px] border border-[#E2E8F0] shadow-card flex items-center gap-[10px] px-[12px] py-[6px] text-left cursor-pointer shrink-0">
                <div className="w-[28px] h-[28px] rounded-[8px] flex items-center justify-center shrink-0 bg-blue-600/10 text-xs">
                  💼
                </div>
                <div className="shrink-0 overflow-hidden">
                  <p className="text-[11.5px] font-bold text-slate-800 whitespace-nowrap">
                    <span className="text-[#007FFC] font-semibold">Radiant Info</span> shortlisted 8 interns
                  </p>
                  <p className="text-[9.5px] text-emerald-600 font-medium whitespace-nowrap">
                    Verified recruiter • 2 days ago
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Grid of 3 role cards */}
          <div className={styles.heroRolesGrid}>
            {/* Card 1: College */}
            <div className={styles.heroRoleCard}>
              <div className={`${styles.heroRoleCardWatermark} w-[252px] h-[136px]`}>
                <Image src="/assets/icons/role_college.svg" alt="" width={252} height={136} className="w-full h-full object-contain" />
              </div>

              <div className="relative z-10">
                <div className={styles.heroRoleCardHeader}>
                  <div className={styles.heroRoleIconBox}>
                    <Image src="/assets/hero-icons/hero_degree-job_icon.svg" alt="" width={24} height={24} className="w-7 h-6 object-contain" />
                  </div>
                  <span className={styles.heroRoleTag}>Coming Soon</span>
                </div>

                <h2 className={styles.heroRoleCardTitle}>College</h2>
                <p className={styles.heroRoleCardDesc}>Explore colleges, courses,fees, placements &amp; more</p>

                <ul className={styles.heroRoleFeaturesList}>
                  <li className={styles.heroRoleFeatureItem}>
                    <div className={styles.heroRoleCheckIcon}><Check size={10} strokeWidth={2.5} /></div>
                    <span>Search by course, location, fees</span>
                  </li>
                  <li className={styles.heroRoleFeatureItem}>
                    <div className={styles.heroRoleCheckIcon}><Check size={10} strokeWidth={2.5} /></div>
                    <span>Connect directly with colleges</span>
                  </li>
                  <li className={styles.heroRoleFeatureItem}>
                    <div className={styles.heroRoleCheckIcon}><Check size={10} strokeWidth={2.5} /></div>
                    <span>Improve student placements</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onOpenWaitlist("College Student / Institution")}
                className={styles.heroRoleBtn}
              >
                <span>Join Waitlist</span>
                <Bell size={16} />
              </button>
            </div>

            {/* Card 2: Job seeker */}
            <div className={styles.heroRoleCard}>
              <div className="relative z-10">
                <div className={styles.heroRoleCardHeader}>
                  <div className={styles.heroRoleIconBox}>
                    <Image src="/assets/hero-icons/hero_degree-job_icon.svg" alt="" width={24} height={24} className="w-7 h-6 object-contain" />
                  </div>
                  <span className={styles.heroRoleTag}>Available Now</span>
                </div>

                <h2 className={styles.heroRoleCardTitle}>I&apos;m Looking for a Job</h2>
                <p className={styles.heroRoleCardDesc}>Upload your resume. We&apos;ll find jobs that fit you.</p>

                <div className={styles.heroJobFeaturesWrap}>
                  <ul className={styles.heroJobFeaturesList}>
                    <li className={styles.heroRoleFeatureItem}>
                      <div className={`${styles.heroRoleCheckIcon} ${styles.pink}`}><Check size={10} strokeWidth={2.5} /></div>
                      <span className="whitespace-nowrap">Jobs from 1000+ sources</span>
                    </li>
                    <li className={styles.heroRoleFeatureItem}>
                      <div className={`${styles.heroRoleCheckIcon} ${styles.pink}`}><Check size={10} strokeWidth={2.5} /></div>
                      <span className="whitespace-nowrap">AI powered matching</span>
                    </li>
                    <li className={styles.heroRoleFeatureItem}>
                      <div className={`${styles.heroRoleCheckIcon} ${styles.pink}`}><Check size={10} strokeWidth={2.5} /></div>
                      <span className="whitespace-nowrap">WhatsApp &amp; email alerts</span>
                    </li>
                  </ul>

                  {/* Resume preview illustration aligned to the 3 points */}
                  <div className={styles.heroJobIllustration}>
                    <Image
                      src="/assets/icons/role_job.svg"
                      alt=""
                      width={208}
                      height={176}
                      className="w-full h-full object-contain pointer-events-none"
                    />
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={onExploreJobs}
                className={styles.heroRoleBtn}
              >
                <span>Explore Jobs</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Card 3: Employer */}
            <div className={styles.heroRoleCard}>
              <div className={`${styles.heroRoleCardWatermark} w-[173px] h-[197px]`}>
                <Image src="/assets/icons/role_hiring.svg" alt="" width={173} height={197} className="w-full h-full object-contain" />
              </div>

              <div className="relative z-10">
                <div className={styles.heroRoleCardHeader}>
                  <div className={styles.heroRoleIconBox}>
                    <Image src="/assets/hero-icons/hero_briefcase-job_icon.svg" alt="" width={24} height={24} className="w-6 h-6 object-contain" />
                  </div>
                  <span className={styles.heroRoleTag}>Coming Soon</span>
                </div>

                <h2 className={styles.heroRoleCardTitle}>I&apos;m Hiring</h2>
                <p className={styles.heroRoleCardDesc}>Connect with colleges and find candidates — from students to graduates.</p>

                <ul className={styles.heroRoleFeaturesList}>
                  <li className={styles.heroRoleFeatureItem}>
                    <div className={styles.heroRoleCheckIcon}><Check size={10} strokeWidth={2.5} /></div>
                    <span>Connect directly with colleges</span>
                  </li>
                  <li className={styles.heroRoleFeatureItem}>
                    <div className={styles.heroRoleCheckIcon}><Check size={10} strokeWidth={2.5} /></div>
                    <span>Find the right candidates</span>
                  </li>
                  <li className={styles.heroRoleFeatureItem}>
                    <div className={styles.heroRoleCheckIcon}><Check size={10} strokeWidth={2.5} /></div>
                    <span>Simplify your hiring</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onOpenWaitlist("Employer / Recruiter")}
                className={styles.heroRoleBtn}
              >
                <span>Join Waitlist</span>
                <Bell size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
