"use client";

import React from "react";
import {
  Bot,
  Sparkles,
  GraduationCap,
  Building2,
  Briefcase,
  Check,
  Bell,
  ArrowRight,
  Zap,
  MessageCircle,
  Search,
} from "lucide-react";

export default function Hero({ onOpenWaitlist, onExploreJobs }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-blue-50/40 via-white to-white">
      {/* Soft Ambient Background Glows matching Figma Gradient+Blur */}
      <div className="ambient-glow bg-blue-200/40 w-[600px] h-[350px] -top-24 left-1/2 -translate-x-1/2" />
      <div className="ambient-glow bg-cyan-100/50 w-[400px] h-[300px] top-48 left-10" />
      <div className="ambient-glow bg-indigo-100/40 w-[400px] h-[300px] top-48 right-10" />

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-primary text-sm font-semibold shadow-xs cursor-default hover:bg-blue-100/60 transition-colors">
            <Bot size={18} className="text-primary animate-pulse" />
            <span>AI-Powered Campus Assistant</span>
          </div>
        </div>

        {/* Main Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10 lg:mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-5 font-heading">
            Connect <span className="text-gradient-blue">10X Faster.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-2xl mx-auto">
            One platform connecting students, colleges &amp; employers — faster.
          </p>
        </div>

        {/* Floating Badges (Desktop) */}
        <div className="relative w-full max-w-5xl mx-auto hidden lg:block h-28 mb-4">
          {/* Top-Left: WhatsApp Alert */}
          <div className="absolute left-0 -top-12 z-20 w-[240px] bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-purple-200 shadow-card hover:shadow-hover transition-all duration-300 animate-float-slow">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <MessageCircle size={14} />
              </div>
              <span className="text-xs font-bold text-amber-600">WhatsApp Alert</span>
            </div>
            <p className="text-xs font-bold text-slate-800 leading-snug">Get notified on whatsapp</p>
            <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
              You&apos;ll get all important updates on your whatsapp
            </p>
          </div>

          {/* Top-Right: Resume Builder */}
          <div className="absolute right-0 -top-12 z-20 w-[250px] bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-indigo-200 shadow-card hover:shadow-hover transition-all duration-300 animate-float-delayed">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <Zap size={14} />
              </div>
              <span className="text-xs font-bold text-indigo-600">Resume Builder</span>
            </div>
            <p className="text-xs font-bold text-slate-800 leading-snug">Build Your Resume</p>
            <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
              Our resume builder gives you dynamic options to build better &amp; faster resume that got you hired
            </p>
          </div>

          {/* Mid-Left: Students matched */}
          <div className="absolute left-8 top-12 z-20 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 border border-slate-100 shadow-card flex items-center gap-3 hover:scale-105 transition-transform duration-200">
            <div className="flex -space-x-2">
              <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-xs">
                AK
              </span>
              <span className="w-7 h-7 rounded-full bg-purple-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-xs">
                PR
              </span>
              <span className="w-7 h-7 rounded-full bg-teal-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-xs">
                SN
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>🔥 142 students matched today</span>
              </div>
              <p className="text-[11px] text-slate-500">Just now • IIT, BITS, VIT</p>
            </div>
          </div>

          {/* Mid-Right: Radiant Info shortlisted */}
          <div className="absolute right-8 top-12 z-20 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 border border-slate-100 shadow-card flex items-center gap-3 hover:scale-105 transition-transform duration-200">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shadow-xs">
              <Briefcase size={16} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">Radiant Info <span className="font-normal text-slate-600">shortlisted 8 interns</span></p>
              <p className="text-[11px] text-emerald-600 font-medium">● Verified recruiter • 2 days ago</p>
            </div>
          </div>
        </div>

        {/* Section Query Header with Sparkles */}
        <div className="flex items-center justify-center gap-2 mb-8 text-primary font-bold text-xl sm:text-2xl font-heading">
          <Sparkles size={20} className="text-primary fill-primary/20" />
          <span>What are you looking for?</span>
          <Sparkles size={20} className="text-primary fill-primary/20" />
        </div>

        {/* 3 Interactive Path Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Card 1: College */}
          <div className="relative group bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-card hover:shadow-hover hover:border-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-300">
              <Building2 size={128} />
            </div>

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-200">
                  <Building2 size={24} />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full border border-sky-400 text-sky-600 bg-sky-50/50">
                  Coming Soon
                </span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-2 font-heading">
                College
              </h2>
              <p className="text-sm text-slate-600 font-medium mb-6 leading-relaxed">
                Explore colleges, courses,fees, placements &amp; more
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>Search by course, location, fees</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>Connect directly with colleges</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>Improve student placements</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => onOpenWaitlist("College Student / Institution")}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-white bg-primary hover:bg-primary-hover shadow-md shadow-blue-500/25 active:scale-[0.98] transition-all duration-200"
            >
              <span>Join Waitlist</span>
              <Bell size={16} />
            </button>
          </div>

          {/* Card 2: I'm Looking for a Job (Active & Available Now) */}
          <div className="relative group bg-white rounded-3xl p-6 sm:p-7 border-2 border-primary shadow-hover hover:border-blue-600 transition-all duration-300 flex flex-col justify-between overflow-hidden ring-4 ring-blue-50">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-primary flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-200">
                  <GraduationCap size={24} />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary text-white shadow-xs">
                  Available Now
                </span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-2 font-heading">
                I&apos;m Looking for a Job
              </h2>
              <p className="text-sm text-slate-600 font-medium mb-6 leading-relaxed">
                Upload your resume. We&apos;ll find jobs that fit you.
              </p>

              <div className="relative mb-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>Jobs from 1000+ sources</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>AI powered matching</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>WhatsApp &amp; email alerts</span>
                  </li>
                </ul>

                {/* Floating mini resume preview illustration */}
                <div className="absolute right-0 top-0 w-16 h-20 bg-slate-50 rounded-lg border border-purple-200 p-1.5 flex flex-col justify-between shadow-xs group-hover:rotate-3 transition-transform duration-200 hidden sm:flex">
                  <div className="space-y-1">
                    <div className="w-8 h-1.5 bg-amber-400 rounded-full" />
                    <div className="w-12 h-1 bg-emerald-400 rounded-full" />
                    <div className="w-10 h-1 bg-purple-400 rounded-full" />
                    <div className="w-9 h-1 bg-blue-400 rounded-full" />
                  </div>
                  <div className="self-end p-0.5 rounded-full bg-amber-100 text-amber-600">
                    <Search size={10} />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onExploreJobs}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-white bg-primary hover:bg-primary-hover shadow-md shadow-blue-500/30 active:scale-[0.98] transition-all duration-200"
            >
              <span>Explore Jobs</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Card 3: I'm Hiring */}
          <div className="relative group bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-card hover:shadow-hover hover:border-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-300">
              <Briefcase size={128} />
            </div>

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-200">
                  <Briefcase size={24} />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full border border-sky-400 text-sky-600 bg-sky-50/50">
                  Coming Soon
                </span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-2 font-heading">
                I&apos;m Hiring
              </h2>
              <p className="text-sm text-slate-600 font-medium mb-6 leading-relaxed">
                Connect with colleges and find candidates — from students to graduates.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>Connect directly with colleges</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>Find the right candidates</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>Simplify your hiring</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => onOpenWaitlist("Employer / Recruiter")}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-white bg-primary hover:bg-primary-hover shadow-md shadow-blue-500/25 active:scale-[0.98] transition-all duration-200"
            >
              <span>Join Waitlist</span>
              <Bell size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
