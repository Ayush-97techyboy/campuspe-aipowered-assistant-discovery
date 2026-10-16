"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import PartnersMarquee from "@/components/PartnersMarquee";
import FeatureDiscovery from "@/components/FeatureDiscovery";
import FeatureResume from "@/components/FeatureResume";
import FeatureColleges from "@/components/FeatureColleges";
import FeatureEmployers from "@/components/FeatureEmployers";
import AppInterfaceShowcase from "@/components/AppInterfaceShowcase";
import FaqSupport from "@/components/FaqSupport";
import Footer from "@/components/Footer";
import {
  WaitlistModal,
  AuthModal,
  OpportunityModal,
  ContactModal,
} from "@/components/Modals";

export default function Home() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [waitlistRole, setWaitlistRole] = useState("Student");

  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signin");

  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [opportunityModalOpen, setOpportunityModalOpen] = useState(false);

  const [contactOpen, setContactOpen] = useState(false);
  const [contactType, setContactType] = useState("support");

  const handleOpenWaitlist = (role = "Student") => {
    setWaitlistRole(role);
    setWaitlistOpen(true);
  };

  const handleOpenAuth = (mode = "signin") => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  const handleSelectOpportunity = (opportunity) => {
    setSelectedOpportunity(opportunity);
    setOpportunityModalOpen(true);
  };

  const handleContact = (type = "support") => {
    setContactType(type);
    setContactOpen(true);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-primary selection:text-white">
      {/* WCAG 2.4.1 Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary text-white font-bold px-4 py-2 rounded-xl shadow-lg focus-visible:outline-none"
      >
        Skip to main content
      </a>

      {/* Top Navigation */}
      <Navbar
        onOpenWaitlist={handleOpenWaitlist}
        onOpenAuth={handleOpenAuth}
      />

      {/* Main Page Landmark */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section & Platform Stats Bar (Seamless ambient gradient canvas) */}
        <div className="relative overflow-hidden bg-white">
          {/* Ambient Lighting Ellipses (Figma Nodes 1:863 & 1:866) forming the irregular horizontal oval covering cards + stats */}
          <div className="absolute inset-0 max-w-[1440px] mx-auto pointer-events-none">
            {/* Figma Node 1:863: Left Ellipse (800x613, linear 135deg, blur 100px) */}
            <div
              className="absolute rounded-full -left-12 sm:left-4 lg:left-[60px] bottom-0 w-[500px] sm:w-[680px] lg:w-[800px] h-[450px] sm:h-[550px] lg:h-[613px]"
              style={{
                background: "linear-gradient(135deg, rgba(165, 243, 252, 0.30) 0%, rgba(191, 219, 254, 0.20) 50%, rgba(191, 219, 254, 0.00) 100%)",
                filter: "blur(100px)",
              }}
              aria-hidden="true"
            />

            {/* Figma Node 1:866: Right Ellipse (860x613, linear 225deg, blur 110px) */}
            <div
              className="absolute rounded-full right-[-40px] sm:right-0 lg:right-auto lg:left-[532px] bottom-0 w-[500px] sm:w-[720px] lg:w-[860px] h-[450px] sm:h-[550px] lg:h-[613px]"
              style={{
                background: "linear-gradient(225deg, rgba(196, 181, 253, 0.30) 0%, rgba(245, 208, 254, 0.20) 50%, rgba(245, 208, 254, 0.00) 100%)",
                filter: "blur(110px)",
              }}
              aria-hidden="true"
            />
          </div>

          <Hero
            onOpenWaitlist={handleOpenWaitlist}
            onExploreJobs={() => scrollToSection("opportunities")}
          />
          <StatsBar />
        </div>

        {/* 3. Trusted Partners Infinite Marquee */}
        <PartnersMarquee />

        {/* 4. Feature 01: Opportunity Discovery Feed */}
        <FeatureDiscovery
          onSelectOpportunity={handleSelectOpportunity}
        />

        {/* 5. Feature 02: AI Resume Matcher */}
        <FeatureResume
          onOpenJobFeed={() => scrollToSection("opportunities")}
        />

        {/* 6. Feature 03: For Colleges */}
        <FeatureColleges
          onOpenCollegeModal={() => handleOpenWaitlist("College Institution")}
        />

        {/* 7. Feature 04: For Employers */}
        <FeatureEmployers
          onOpenPostJobModal={() => handleOpenWaitlist("Employer / Recruiter")}
        />

        {/* 8. App Interface Showcase & Download Section */}
        <AppInterfaceShowcase
          onDownloadApp={(store) => handleContact("support")}
        />

        {/* 9. Support & Quick Actions */}
        <FaqSupport
          onContactSupport={() => handleContact("support")}
          onScheduleCall={() => handleContact("schedule")}
          onExploreColleges={() => scrollToSection("colleges")}
          onFindOpportunities={() => scrollToSection("opportunities")}
          onListCollege={() => handleOpenWaitlist("College Institution")}
          onPostJob={() => handleOpenWaitlist("Employer / Recruiter")}
        />
      </main>

      {/* Site Footer */}
      <Footer
        onNavigate={(label) => {
          if (label.includes("College")) scrollToSection("colleges");
          else if (label.includes("Job") || label.includes("Internship") || label.includes("Opportunities"))
            scrollToSection("opportunities");
          else handleContact("support");
        }}
      />

      {/* Radix UI Accessible Modal Dialogs */}
      <WaitlistModal
        open={waitlistOpen}
        onOpenChange={setWaitlistOpen}
        defaultRole={waitlistRole}
      />

      <AuthModal
        open={authOpen}
        onOpenChange={setAuthOpen}
        initialMode={authMode}
      />

      <OpportunityModal
        open={opportunityModalOpen}
        onOpenChange={setOpportunityModalOpen}
        opportunity={selectedOpportunity}
      />

      <ContactModal
        open={contactOpen}
        onOpenChange={setContactOpen}
        type={contactType}
      />
    </div>
  );
}
