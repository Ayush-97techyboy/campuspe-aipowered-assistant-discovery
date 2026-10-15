"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  ArrowRight,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  MessageCircle,
  Youtube,
} from "lucide-react";

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, label) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(label);
    }
  };

  return (
    <footer className="bg-slate-50/70 pt-16 pb-12 border-t border-slate-200/80 text-slate-700" aria-label="Site Footer">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14">
          {/* Brand Info (Col span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-48">
                <Image
                  src="/assets/logo.png"
                  alt="CampusPE - AI Campus Assistant"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <h3 className="text-lg font-bold text-slate-900 leading-snug">
              From choosing a college to finding <br />
              your next opportunity.
            </h3>

            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              CampusPe connects students, colleges and employers in one place.
            </p>
          </div>

          {/* Links Columns (Col span 8) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {/* For Students */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-3.5 font-heading">
                For Students
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-slate-600 font-medium">
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
                      className="hover:text-primary transition-colors focus-visible:ring-1 focus-visible:ring-primary focus-visible:outline-none"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Colleges */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-3.5 font-heading">
                For Colleges
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-slate-600 font-medium">
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
                      className="hover:text-primary transition-colors focus-visible:ring-1 focus-visible:ring-primary focus-visible:outline-none"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Employers */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-3.5 font-heading">
                For Employers
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-slate-600 font-medium">
                {[
                  "Post a Job",
                  "Find Talent",
                  "Campus Hiring",
                ].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={(e) => handleLinkClick(e, item)}
                      className="hover:text-primary transition-colors focus-visible:ring-1 focus-visible:ring-primary focus-visible:outline-none"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-3.5 font-heading">
                Company
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-slate-600 font-medium">
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
                      className="hover:text-primary transition-colors focus-visible:ring-1 focus-visible:ring-primary focus-visible:outline-none"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Policies */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-3.5 font-heading">
                Legal &amp; Policies
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-slate-600 font-medium">
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
                      className="hover:text-primary transition-colors focus-visible:ring-1 focus-visible:ring-primary focus-visible:outline-none"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="#policies"
                onClick={(e) => handleLinkClick(e, "View all policies")}
                className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-blue-700 mt-2.5 transition-colors"
              >
                <span>View all policies</span>
                <ArrowRight size={12} />
              </a>

              {/* Callout box */}
              <div className="mt-4 p-3 bg-blue-50/80 rounded-xl border border-blue-100/80 text-[11px] text-slate-600 leading-snug">
                Separate user, institution and employer terms can live inside the full Policies page.
              </div>
            </div>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="py-4 border-y border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-600">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="mailto:contactus@campuspe.com"
              className="inline-flex items-center gap-2 hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none p-1 rounded"
            >
              <Mail size={16} className="text-primary" />
              <span>contactus@campuspe.com</span>
            </a>

            <a
              href="tel:+916362606464"
              className="inline-flex items-center gap-2 hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none p-1 rounded"
            >
              <Phone size={16} className="text-primary" />
              <span>+91 6362606464</span>
            </a>
          </div>

          <div className="flex items-center gap-2 text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
            <span>Students · Colleges · Employers</span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} CampusPe Technologies Pvt. Ltd.{" "}
            <a href="#privacy" onClick={(e) => handleLinkClick(e, "Privacy")} className="hover:underline ml-2">Privacy</a>{" "}
            <a href="#terms" onClick={(e) => handleLinkClick(e, "Terms")} className="hover:underline ml-2">Terms</a>{" "}
            <a href="#grievance" onClick={(e) => handleLinkClick(e, "Grievance")} className="hover:underline ml-2">Grievance</a>
          </p>

          {/* Social Icons with WCAG 2.2 compliant target size (min 24x24 / 32x32px) and labels */}
          <div className="flex items-center gap-3">
            {[
              { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
              { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
              { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
              { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
              { name: "WhatsApp", icon: MessageCircle, href: "https://whatsapp.com" },
              { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit CampusPe on ${social.name}`}
                  className="w-8 h-8 rounded-full bg-slate-200/70 hover:bg-primary hover:text-white text-slate-600 flex items-center justify-center transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
