"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar({ onOpenWaitlist, onOpenAuth }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky floating state once scrolled a few lines (threshold > 30px)
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-300 ease-out left-1/2 -translate-x-1/2 ${
          isScrolled
            ? "top-3 sm:top-4 w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] max-w-[1240px] rounded-full bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.08),0_4px_16px_-2px_rgba(0,132,255,0.06)]"
            : "top-0 w-full bg-white/70 backdrop-blur-md border-b border-slate-100"
        }`}
      >
        <div
          className={`mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-16 max-w-full" : "h-20 max-w-[1240px]"
          }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div
              className={`relative transition-all duration-300 ${
                isScrolled ? "h-9 w-40" : "h-11 w-44"
              }`}
            >
              <Image
                src="/assets/logo.png"
                alt="CampusPE Logo"
                fill
                className="object-contain object-left group-hover:scale-[1.02] transition-transform duration-200"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-700"
          >
            <a
              href="#colleges"
              className="hover:text-primary transition-colors duration-150 py-1 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-lg"
            >
              Colleges
            </a>
            <a
              href="#employers"
              className="hover:text-primary transition-colors duration-150 py-1 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-lg"
            >
              Employers
            </a>
            <a
              href="#opportunities"
              className="hover:text-primary transition-colors duration-150 py-1 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-lg"
            >
              Jobs
            </a>
            <a
              href="#blogs"
              className="hover:text-primary transition-colors duration-150 py-1 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-lg"
            >
              Blogs
            </a>
          </nav>

          {/* Desktop Auth CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenAuth("signin")}
              className="text-[14px] font-semibold text-slate-800 hover:text-primary px-3.5 py-2 transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-full"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => onOpenAuth("signup")}
              className="inline-flex items-center justify-center text-[14px] font-semibold text-white bg-primary hover:bg-primary-hover px-5 py-2 rounded-full shadow-sm shadow-blue-500/20 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all duration-150"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-xl px-5 py-6 space-y-4 shadow-xl rounded-b-3xl">
            <nav className="flex flex-col space-y-2 font-medium text-slate-800 text-base">
              <a
                href="#colleges"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 hover:text-primary hover:bg-slate-50 rounded-xl transition-colors"
              >
                Colleges
              </a>
              <a
                href="#employers"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 hover:text-primary hover:bg-slate-50 rounded-xl transition-colors"
              >
                Employers
              </a>
              <a
                href="#opportunities"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 hover:text-primary hover:bg-slate-50 rounded-xl transition-colors"
              >
                Jobs
              </a>
              <a
                href="#blogs"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 hover:text-primary hover:bg-slate-50 rounded-xl transition-colors"
              >
                Blogs
              </a>
            </nav>
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth("signin");
                }}
                className="w-full py-2.5 text-center font-semibold text-slate-800 border border-slate-200 rounded-full hover:bg-slate-50"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth("signup");
                }}
                className="w-full py-2.5 text-center font-semibold text-white bg-primary hover:bg-primary-hover rounded-full shadow-md shadow-blue-500/20"
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
