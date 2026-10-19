"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, label) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(label);
    }
  };

  return (
    <footer className={styles.footerRoot} aria-label="Site Footer">
      {/* Background Gradient Artwork matching Figma Image 1 */}
      <div className={styles.footerBgArtwork} aria-hidden="true">
        <img
          src="/assets/Backgroudn_Gradient.svg"
          alt=""
          className={styles.footerBgSvg}
        />
      </div>

      <div className={styles.footerContainer}>
        {/* Main Footer Layout: Brand Info + 5 Link Columns */}
        <div className={styles.footerMainLayout}>
          {/* Brand Info */}
          <div className={styles.footerBrandCol}>
            <Link href="/" className="inline-block">
              <div className="relative flex items-center">
                <Image
                  src="/assets/logo.svg"
                  alt="CampusPE - AI Campus Assistant"
                  width={178}
                  height={54}
                  className={styles.footerBrandLogo}
                />
              </div>
            </Link>

            <h3 className={styles.footerBrandTitle}>
              From choosing a college to finding <br className="hidden min-[360px]:inline" />
              your next opportunity.
            </h3>

            <p className={styles.footerBrandDesc}>
              CampusPe connects students, colleges and employers in one place.
            </p>
          </div>

          {/* Links Columns */}
          <div className={styles.footerLinksGrid}>
            {/* For Students */}
            <div>
              <h4 className={styles.footerColumnHeading}>
                For Students
              </h4>
              <ul className={styles.footerLinksList}>
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
                      className={styles.footerLink}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Colleges */}
            <div>
              <h4 className={styles.footerColumnHeading}>
                For Colleges
              </h4>
              <ul className={styles.footerLinksList}>
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
                      className={styles.footerLink}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Employers */}
            <div>
              <h4 className={styles.footerColumnHeading}>
                For Employers
              </h4>
              <ul className={styles.footerLinksList}>
                {[
                  "Post a Job",
                  "Find Talent",
                  "Campus Hiring",
                ].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={(e) => handleLinkClick(e, item)}
                      className={styles.footerLink}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className={styles.footerColumnHeading}>
                Company
              </h4>
              <ul className={styles.footerLinksList}>
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
                      className={styles.footerLink}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Policies */}
            <div>
              <h4 className={styles.footerColumnHeading}>
                Legal &amp; Policies
              </h4>
              <ul className={styles.footerLinksList}>
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
                      className={styles.footerLink}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="#policies"
                onClick={(e) => handleLinkClick(e, "View all policies")}
                className={styles.footerPolicyAction}
              >
                <span>View all policies</span>
                <ArrowRight size={12} />
              </a>

              {/* Callout box */}
              <div className={styles.footerPolicyCallout}>
                Separate user, institution and employer terms can live inside the full Policies page.
              </div>
            </div>
          </div>
        </div>

        {/* Contact Strip */}
        <div className={styles.footerContactStrip}>
          <div className={styles.footerContactGroup}>
            <a
              href="mailto:contactus@campuspe.com"
              className={styles.footerContactItem}
            >
              <Image
                src="/assets/updated_icns_img/Footer/email.svg"
                alt="Email"
                width={24}
                height={24}
                className={styles.footerContactIcon}
              />
              <span>contactus@campuspe.com</span>
            </a>

            <a
              href="tel:+916362606464"
              className={styles.footerContactItem}
            >
              <Image
                src="/assets/updated_icns_img/Footer/ftr_phone.svg"
                alt="Phone"
                width={24}
                height={24}
                className={styles.footerContactIcon}
              />
              <span>+91 6362606464</span>
            </a>
          </div>

          <div className={styles.footerAudienceTag}>
            <span className={styles.footerStatusDot} aria-hidden="true" />
            <span>Students · Colleges · Employers</span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className={styles.footerBottomBar}>
          <p>
            © {currentYear} CampusPe Technologies Pvt. Ltd.{" "}
            <a href="#privacy" onClick={(e) => handleLinkClick(e, "Privacy")} className={styles.footerLegalLink}>Privacy</a>{" "}
            <a href="#terms" onClick={(e) => handleLinkClick(e, "Terms")} className={styles.footerLegalLink}>Terms</a>{" "}
            <a href="#grievance" onClick={(e) => handleLinkClick(e, "Grievance")} className={styles.footerLegalLink}>Grievance</a>
          </p>

          {/* Social Icons */}
          <div className={styles.footerSocialsWrapper}>
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
                className={styles.footerSocialBtn}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={18}
                  height={18}
                  className={styles.footerSocialIcon}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
