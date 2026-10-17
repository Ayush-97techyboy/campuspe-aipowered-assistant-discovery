"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();


  const handleLinkClick = (e, label) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(label);
    }
  };

  return (
    <footer
      className="relative pt-10 pb-8 lg:pt-14 lg:pb-10 text-[#414D60] overflow-hidden border-t border-slate-200/60"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F0F6FF 30%, #E0EEFF 65%, #CBE3FF 85%, #BBD9FC 100%)",
      }}
      aria-label="Site Footer"
    >
      {/* 
        Exact Figma Background Gradient System (Node 1:1725 / 1:1735):
        Contains the exact Ellipse 29 (#FFF9F4), Ellipse 28 (#007FFC), Ellipse 30 (#FFC1DF),
        and bilateral blur masks exported directly from the Figma document.
      */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <img
          src="/assets/footer_gradient.svg"
          alt=""
          className="w-full h-full object-cover object-bottom pointer-events-none select-none opacity-85"
        />
        {/* Additional saturated dark blue ambient depth to match Figma saturated tones */}
        <div
          className="absolute -bottom-24 -left-20 w-[600px] h-[500px] rounded-full z-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(0, 127, 252, 0.45) 0%, rgba(0, 43, 107, 0.30) 45%, transparent 75%)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute -bottom-24 -right-20 w-[600px] h-[500px] rounded-full z-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(34, 124, 255, 0.45) 0%, rgba(0, 127, 252, 0.28) 45%, transparent 75%)",
            filter: "blur(90px)",
          }}
        />
      </div>

      <div className="max-w-[1240px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Layout: On Tablet (< lg) Brand info is stacked cleanly on top, and links span full width in 5 columns */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-8 pb-8 lg:pb-10">
          {/* Brand Info (Col span 4) */}
          <div className="lg:col-span-4 space-y-3.5 sm:space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative flex items-center">
                <Image
                  src="/assets/logo.svg"
                  alt="CampusPE - AI Campus Assistant"
                  width={178}
                  height={54}
                  className="h-9 sm:h-11 w-auto object-contain"
                />
              </div>
            </Link>

            <h3 className="text-[17px] sm:text-[20px] leading-[26px] sm:leading-[28px] font-semibold text-[#0F1D36] font-sans">
              From choosing a college to finding <br className="hidden min-[360px]:inline" />
              your next opportunity.
            </h3>

            <p className="text-[14px] sm:text-[17px] leading-[24px] sm:leading-[26px] text-[#414D60] font-normal leading-relaxed max-w-sm font-sans">
              CampusPe connects students, colleges and employers in one place.
            </p>
          </div>

          {/* Links Columns (Col span 8 on desktop, full width 5 columns on tablet) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-6 md:gap-4 lg:gap-6">
            {/* For Students */}
            <div>
              <h4 className="text-sm font-bold text-[#0F1D36] mb-3 sm:mb-3.5 font-heading">
                For Students
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-[#414D60] font-medium">
                {[
                  "Explore Colleges",
                  "Find Opportunities",
                  "Internships",
                  "Full-time Jobs",
                  "Part-time & Gig",
                  "Application Tracker",
                ].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={(e) => handleLinkClick(e, item)}
                      className="hover:text-[#227CFF] transition-colors focus-visible:ring-1 focus-visible:ring-primary focus-visible:outline-none"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Colleges */}
            <div>
              <h4 className="text-sm font-bold text-[#0F1D36] mb-3.5 font-heading">
                For Colleges
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-[#414D60] font-medium">
                {[
                  "List Your College",
                  "Admissions",
                  "Fee Collection",
                  "Placements",
                ].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={(e) => handleLinkClick(e, item)}
                      className="hover:text-[#227CFF] transition-colors focus-visible:ring-1 focus-visible:ring-primary focus-visible:outline-none"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Employers */}
            <div>
              <h4 className="text-sm font-bold text-[#0F1D36] mb-3.5 font-heading">
                For Employers
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-[#414D60] font-medium">
                {[
                  "Post a Job",
                  "Find Talent",
                  "Campus Hiring",
                ].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={(e) => handleLinkClick(e, item)}
                      className="hover:text-[#227CFF] transition-colors focus-visible:ring-1 focus-visible:ring-primary focus-visible:outline-none"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-bold text-[#0F1D36] mb-3.5 font-heading">
                Company
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-[#414D60] font-medium">
                {[
                  "About Us",
                  "Contact Us",
                  "Blogs",
                  "Careers",
                ].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={(e) => handleLinkClick(e, item)}
                      className="hover:text-[#227CFF] transition-colors focus-visible:ring-1 focus-visible:ring-primary focus-visible:outline-none"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Policies */}
            <div>
              <h4 className="text-sm font-bold text-[#0F1D36] mb-3.5 font-heading">
                Legal &amp; Policies
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-[#414D60] font-medium">
                {[
                  "Privacy Policy",
                  "Terms & Conditions",
                  "Refund & Cancellation Policy",
                  "Cookie Policy",
                  "Grievance Redressal",
                  "Job & Internship Disclaimer",
                ].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={(e) => handleLinkClick(e, item)}
                      className="hover:text-[#227CFF] transition-colors focus-visible:ring-1 focus-visible:ring-primary focus-visible:outline-none"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="#policies"
                onClick={(e) => handleLinkClick(e, "View all policies")}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#227CFF] hover:text-[#002B6B] mt-2.5 transition-colors"
              >
                <span>View all policies</span>
                <ArrowRight size={12} />
              </a>

              {/* Callout box */}
              <div className="mt-3.5 p-2.5 sm:p-3 bg-white/80 backdrop-blur-md rounded-xl border border-blue-200/70 text-[10.5px] sm:text-[11px] text-[#414D60] leading-snug shadow-xs">
                Separate user, institution and employer terms can live inside the full Policies page.
              </div>
            </div>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="py-3 sm:py-4 border-y border-[#475569] bg-transparent flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs font-medium text-[#414D60]">
          <div className="flex flex-col min-[380px]:flex-row items-center gap-3 sm:gap-6 text-center">
            <a
              href="mailto:contactus@campuspe.com"
              className="group inline-flex items-center gap-2.5 text-[#414D60] hover:text-[#414D60] active:text-[#414D60] visited:text-[#414D60] focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none p-1 rounded transition-colors"
            >
              <Image
                src="/assets/updated_icns_img/Footer/email.svg"
                alt="Email"
                width={24}
                height={24}
                className="w-6 h-6 object-contain shrink-0 transition-transform duration-200 group-hover:scale-105"
              />
              <span className="text-[#414D60]">contactus@campuspe.com</span>
            </a>

            <a
              href="tel:+916362606464"
              className="group inline-flex items-center gap-2.5 text-[#414D60] hover:text-[#414D60] active:text-[#414D60] visited:text-[#414D60] focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none p-1 rounded transition-colors"
            >
              <Image
                src="/assets/updated_icns_img/Footer/ftr_phone.svg"
                alt="Phone"
                width={24}
                height={24}
                className="w-6 h-6 object-contain shrink-0 transition-transform duration-200 group-hover:scale-105"
              />
              <span className="text-[#414D60]">+91 6362606464</span>
            </a>
          </div>

          <div className="flex items-center gap-2 text-[#414D60]">
            <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
            <span>Students · Colleges · Employers</span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-4 text-xs text-[#414D60] text-center sm:text-left">
          <p>
            © {currentYear} CampusPe Technologies Pvt. Ltd.{" "}
            <a href="#privacy" onClick={(e) => handleLinkClick(e, "Privacy")} className="hover:underline hover:text-[#227CFF] ml-2">Privacy</a>{" "}
            <a href="#terms" onClick={(e) => handleLinkClick(e, "Terms")} className="hover:underline hover:text-[#227CFF] ml-2">Terms</a>{" "}
            <a href="#grievance" onClick={(e) => handleLinkClick(e, "Grievance")} className="hover:underline hover:text-[#227CFF] ml-2">Grievance</a>
          </p>

          {/* Social Icons with WCAG 2.2 compliant target size (min 24x24 / 32x32px) and labels */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
            {[
              {
                name: "LinkedIn",
                icon: "/assets/updated_icns_img/Footer/LinkD.svg",
                href: "https://www.linkedin.com/company/campupe-official/home",
              },
              {
                name: "Instagram",
                icon: "/assets/updated_icns_img/Footer/INsta.svg",
                href: "https://www.instagram.com/campuspe_official",
              },
              {
                name: "Twitter",
                icon: "/assets/updated_icns_img/Footer/X.svg",
                href: "https://x.com",
              },
              {
                name: "Facebook",
                icon: "/assets/updated_icns_img/Footer/fb.svg",
                href: "https://facebook.com",
              },
              {
                name: "WhatsApp",
                icon: "/assets/updated_icns_img/Footer/Whatsp.svg",
                href: "https://whatsapp.com",
              },
              {
                name: "YouTube",
                icon: "/assets/updated_icns_img/Footer/YT.svg",
                href: "https://www.youtube.com/@campuspe-tech",
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit CampusPe on ${social.name}`}
                className="group w-8 h-8 rounded-full border border-[#475569]/40 hover:border-[#007FFC] hover:bg-[#007FFC] shadow-xs flex items-center justify-center transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#007FFC] focus-visible:outline-none hover:scale-110 active:scale-95"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={18}
                  height={18}
                  className="w-[18px] h-[18px] object-contain transition-all duration-200 group-hover:brightness-0 group-hover:invert"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
