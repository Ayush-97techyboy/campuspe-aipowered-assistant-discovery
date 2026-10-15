"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar({ onOpenWaitlist, onOpenAuth }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo with exact official asset */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-12 w-48">
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
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-700">
          <a
            href="#colleges"
            className="hover:text-primary transition-colors duration-150 py-1"
          >
            Colleges
          </a>
          <a
            href="#employers"
            className="hover:text-primary transition-colors duration-150 py-1"
          >
            Employers
          </a>
          <a
            href="#opportunities"
            className="hover:text-primary transition-colors duration-150 py-1"
          >
            Jobs
          </a>
          <a
            href="#blogs"
            className="hover:text-primary transition-colors duration-150 py-1"
          >
            Blogs
          </a>
        </nav>

        {/* Desktop Auth CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            onClick={() => onOpenAuth("signin")}
            className="text-[15px] font-semibold text-slate-800 hover:text-primary px-3 py-2 transition-colors duration-150"
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => onOpenAuth("signup")}
            className="inline-flex items-center justify-center text-[15px] font-semibold text-white bg-primary hover:bg-primary-hover px-6 py-2.5 rounded-full shadow-sm shadow-blue-500/20 active:scale-95 transition-all duration-150"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-5 py-6 space-y-4 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-3 font-medium text-slate-800 text-base">
            <a
              href="#colleges"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors"
            >
              Colleges
            </a>
            <a
              href="#employers"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors"
            >
              Employers
            </a>
            <a
              href="#opportunities"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors"
            >
              Jobs
            </a>
            <a
              href="#blogs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors"
            >
              Blogs
            </a>
          </nav>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
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
  );
}
