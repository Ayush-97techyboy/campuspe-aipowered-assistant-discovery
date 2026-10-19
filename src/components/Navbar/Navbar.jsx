"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar({ onOpenWaitlist, onOpenAuth }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 25);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile/tablet menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile/tablet menu is open to prevent background bleed
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* 1. Dimmed backdrop overlay for click-outside dismissal (Mobile & Tablet) */}
      <div
        className={`${styles.navbarBackdrop} ${mobileMenuOpen ? styles.isOpen : ""}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* 2. Main Header Container */}
      <header
        className={`${styles.navbarHeader} ${
          mobileMenuOpen ? styles.menuOpen : isScrolled ? styles.isScrolled : ""
        }`}
      >
        <div className={`${styles.navbarContainer} ${isScrolled ? styles.isScrolled : ""}`}>
          {/* Brand Logo on the left (flex-start) */}
          <Link href="/" className={styles.navbarBrand}>
            <div className={styles.navbarLogoWrap}>
              <Image
                src="/assets/logo.svg"
                alt="CampusPE Logo"
                width={178}
                height={54}
                className="w-[178px] h-[54px] object-cover flex-shrink-0"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links Centered (justify-center) */}
          <nav aria-label="Primary Navigation" className={styles.navbarNavLinks}>
            <a href="#colleges" className={styles.navbarNavLink}>
              Colleges
            </a>
            <a href="#employers" className={styles.navbarNavLink}>
              Employers
            </a>
            <a href="#opportunities" className={styles.navbarNavLink}>
              Jobs
            </a>
            <a href="#blogs" className={styles.navbarNavLink}>
              Blogs
            </a>
          </nav>

          {/* Desktop Auth CTAs on the right (flex-end) */}
          <div className={styles.navbarAuthActions}>
            <button
              type="button"
              onClick={() => onOpenAuth("signin")}
              className={styles.navbarBtnSignin}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => onOpenAuth("signup")}
              className={styles.navbarBtnSignup}
            >
              Sign Up
            </button>
          </div>

          {/* Mobile & Tablet Menu Toggle Button (Visible below lg / < 1024px) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={styles.navbarMobileToggle}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile & Tablet Drawer */}
        {mobileMenuOpen && (
          <div className={styles.navbarMobileDrawer}>
            <nav className={styles.navbarMobileNav}>
              <a href="#colleges" onClick={() => setMobileMenuOpen(false)}>
                Colleges
              </a>
              <a href="#employers" onClick={() => setMobileMenuOpen(false)}>
                Employers
              </a>
              <a href="#opportunities" onClick={() => setMobileMenuOpen(false)}>
                Jobs
              </a>
              <a href="#blogs" onClick={() => setMobileMenuOpen(false)}>
                Blogs
              </a>
            </nav>

            <div className={styles.navbarMobileAuth}>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth("signin");
                }}
                className={styles.navbarMobileAuthBtnSignin}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth("signup");
                }}
                className={styles.navbarMobileAuthBtnSignup}
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Header spacer to prevent layout shift */}
      <div className={styles.navbarSpacer} aria-hidden="true" />
    </>
  );
}
