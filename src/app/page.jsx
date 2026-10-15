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
        {/* 1. Hero Section */}
        <Hero
          onOpenWaitlist={handleOpenWaitlist}
          onExploreJobs={() => scrollToSection("opportunities")}
        />

        {/* 2. Platform Stats Bar */}
        <StatsBar />

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
