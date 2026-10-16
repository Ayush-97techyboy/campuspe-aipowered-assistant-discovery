"use client";

import React from "react";
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
    <footer className="relative bg-gradient-to-b from-white via-[#F8FAFC] to-[#EBF3FF] pt-10 pb-8 lg:pt-12 lg:pb-10 border-t border-slate-200/60 text-[#414D60] overflow-hidden" aria-label="Site Footer">
      {/* Footer Ambient Background Gradient (Figma Node 1:1724 - #002B6B dark blue & #227CFF vibrant blue with white mix) */}
      <div
        className="absolute pointer-events-none -bottom-24 -left-20 w-[650px] h-[500px] rounded-full z-0 opacity-70"
        style={{
          background: "radial-gradient(circle, rgba(0, 43, 107, 0.45) 0%, rgba(34, 124, 255, 0.30) 45%, transparent 75%)",
          filter: "blur(110px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none -bottom-24 -right-20 w-[700px] h-[520px] rounded-full z-0 opacity-75"
        style={{
          background: "radial-gradient(circle, rgba(34, 124, 255, 0.40) 0%, rgba(0, 43, 107, 0.35) 45%, transparent 75%)",
          filter: "blur(115px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none bottom-0 left-1/2 -translate-x-1/2 w-[1100px] h-[340px] rounded-full z-0 opacity-60"
        style={{
          background: "linear-gradient(to top, rgba(34, 124, 255, 0.25) 0%, rgba(0, 43, 107, 0.15) 50%, transparent 100%)",
          filter: "blur(90px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-8 lg:pb-10">
          {/* Brand Info (Col span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative flex items-center">
                <Image
                  src="/assets/logo.svg"
                  alt="CampusPE - AI Campus Assistant"
                  width={178}
                  height={54}
                  className="h-11 w-auto object-contain"
                />
              </div>
            </Link>

            <h3 className="text-[18px] sm:text-[20px] leading-[28px] font-semibold text-[#0F1D36] font-sans">
              From choosing a college to finding <br />
              your next opportunity.
            </h3>

            <p className="text-[15px] sm:text-[17px] leading-[26px] text-[#414D60] font-normal leading-relaxed max-w-sm font-sans">
              CampusPe connects students, colleges and employers in one place.
            </p>
          </div>

          {/* Links Columns (Col span 8) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {/* For Students */}
            <div>
              <h4 className="text-sm font-bold text-[#0F1D36] mb-3.5 font-heading">
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
              <div className="mt-4 p-3 bg-white/70 backdrop-blur-md rounded-xl border border-blue-100/90 text-[11px] text-[#414D60] leading-snug shadow-xs">
                Separate user, institution and employer terms can live inside the full Policies page.
              </div>
            </div>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="py-4 border-y border-[#475569] bg-white/40 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#414D60] rounded-lg px-3">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="mailto:contactus@campuspe.com"
              className="group inline-flex items-center gap-2 hover:text-[#007FFC] transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none p-1 rounded"
            >
              <Image
                src="/assets/updated_icns_img/Footer/email.svg"
                alt="Email"
                width={20}
                height={20}
                className="w-5 h-5 object-contain transition-transform duration-200 group-hover:scale-110"
              />
              <span className="transition-colors duration-200 group-hover:text-[#007FFC]">contactus@campuspe.com</span>
            </a>

            <a
              href="tel:+916362606464"
              className="group inline-flex items-center gap-2 hover:text-[#007FFC] transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none p-1 rounded"
            >
              <Image
                src="/assets/updated_icns_img/Footer/ftr_phone.svg"
                alt="Phone"
                width={20}
                height={20}
                className="w-5 h-5 object-contain transition-transform duration-200 group-hover:scale-110"
              />
              <span className="transition-colors duration-200 group-hover:text-[#007FFC]">+91 6362606464</span>
            </a>
          </div>

          <div className="flex items-center gap-2 text-[#414D60]">
            <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
            <span>Students · Colleges · Employers</span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#414D60]">
          <p>
            © {currentYear} CampusPe Technologies Pvt. Ltd.{" "}
            <a href="#privacy" onClick={(e) => handleLinkClick(e, "Privacy")} className="hover:underline hover:text-[#227CFF] ml-2">Privacy</a>{" "}
            <a href="#terms" onClick={(e) => handleLinkClick(e, "Terms")} className="hover:underline hover:text-[#227CFF] ml-2">Terms</a>{" "}
            <a href="#grievance" onClick={(e) => handleLinkClick(e, "Grievance")} className="hover:underline hover:text-[#227CFF] ml-2">Grievance</a>
          </p>

          {/* Social Icons with WCAG 2.2 compliant target size (min 24x24 / 32x32px) and labels */}
          <div className="flex items-center gap-3">
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
