"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
      {/* Dimmed backdrop overlay with blur for click-outside dismissal (Mobile & Tablet) */}
      <div
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <header
        className={`fixed z-50 left-1/2 -translate-x-1/2 transition-[top,width,box-shadow,background-color] duration-200 ease-out ${
          isScrolled
            ? mobileMenuOpen
              ? "top-2.5 sm:top-4 w-[calc(100%-1rem)] sm:w-[calc(100%-3rem)] max-w-[1240px] 2xl:max-w-[1440px] rounded-[28px] bg-white border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,132,255,0.08)] overflow-hidden"
              : "top-2.5 sm:top-4 w-[calc(100%-1rem)] sm:w-[calc(100%-3rem)] max-w-[1240px] 2xl:max-w-[1440px] rounded-full bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.08),0_4px_16px_-2px_rgba(0,132,255,0.06)]"
            : mobileMenuOpen
            ? "top-0 w-full bg-white border-b border-slate-200/90 shadow-lg overflow-hidden"
            : "top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-100"
        }`}
      >
        <div
          className={`w-full max-w-[1240px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-[height] duration-300 ease-out ${
            isScrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"
          }`}
        >
          {/* Brand Logo with stable dimensions */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="relative flex items-center w-[178px] h-[54px] overflow-hidden opacity-100">
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

          {/* Desktop Navigation Links Frame: width 436px, height 35px, px 20px, gap 56px */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center w-[436px] h-[35px] px-[20px] gap-[56px] text-[15px] xl:text-[16px] leading-[19.4px] font-medium text-[#1B1818] opacity-100"
            style={{
              width: "436px",
              height: "35px",
              paddingLeft: "20px",
              paddingRight: "20px",
              gap: "56px",
            }}
          >
            <a
              href="#colleges"
              className="hover:text-primary transition-colors duration-150 py-1 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-lg whitespace-nowrap"
            >
              Colleges
            </a>
            <a
              href="#employers"
              className="hover:text-primary transition-colors duration-150 py-1 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-lg whitespace-nowrap"
            >
              Employers
            </a>
            <a
              href="#opportunities"
              className="hover:text-primary transition-colors duration-150 py-1 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-lg whitespace-nowrap"
            >
              Jobs
            </a>
            <a
              href="#blogs"
              className="hover:text-primary transition-colors duration-150 py-1 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-lg whitespace-nowrap"
            >
              Blogs
            </a>
          </nav>

          {/* Desktop Auth CTAs - Display on lg (>=1024px) */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={() => onOpenAuth("signin")}
              className="text-[14px] xl:text-[16px] leading-[19.4px] font-medium text-[#1B1818] hover:text-primary px-3.5 xl:px-4 py-2 transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-full"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => onOpenAuth("signup")}
              className="inline-flex items-center justify-center text-[14px] xl:text-[16px] leading-[19.4px] font-medium text-[#FDFCFB] bg-primary hover:bg-primary-hover px-4 xl:px-5 py-2 lg:py-2.5 rounded-full shadow-sm shadow-blue-500/20 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all duration-150"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile & Tablet Menu Toggle Button (Visible below lg / < 1024px) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile & Tablet Drawer (clean solid dropdown attached seamlessly to the header container) */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-5 sm:px-6 py-6 space-y-4 rounded-b-[28px] animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-2 font-medium text-slate-800 text-base">
              <a
                href="#colleges"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 hover:text-primary hover:bg-slate-50 rounded-xl transition-colors"
              >
                Colleges
              </a>
              <a
                href="#employers"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 hover:text-primary hover:bg-slate-50 rounded-xl transition-colors"
              >
                Employers
              </a>
              <a
                href="#opportunities"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 hover:text-primary hover:bg-slate-50 rounded-xl transition-colors"
              >
                Jobs
              </a>
              <a
                href="#blogs"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 hover:text-primary hover:bg-slate-50 rounded-xl transition-colors"
              >
                Blogs
              </a>
            </nav>

            <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth("signin");
                }}
                className="w-full py-2.5 text-center font-semibold text-slate-800 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth("signup");
                }}
                className="w-full py-2.5 text-center font-semibold text-white bg-primary hover:bg-primary-hover rounded-full shadow-md shadow-blue-500/20 transition-all duration-150"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Header spacer to prevent layout shift */}
      <div className="h-20 w-full" aria-hidden="true" />
    </>
  );
}
