"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Upload,
  ArrowUp,
  ArrowRight,
  Zap,
  Lock,
  Check,
  FileCheck,
  RefreshCw,
  Sparkles,
} from "lucide-react";

export default function FeatureResume({ onOpenJobFeed }) {
  const [fileState, setFileState] = useState({
    file: null,
    uploading: false,
    progress: 0,
    completed: false,
    matchedSkills: [],
  });
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);
  const timerRef = useRef(null);
  const finishTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (finishTimeoutRef.current) clearTimeout(finishTimeoutRef.current);
    };
  }, []);

  const handleUploadButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (selected) {
      simulateUpload(selected);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) {
      simulateUpload(dropped);
    }
  };

  const simulateUpload = (file) => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (finishTimeoutRef.current) clearTimeout(finishTimeoutRef.current);

    const activeFile = file || { name: "CampusPe_Sample_Resume.pdf", size: 245000 };

    setFileState({
      file: activeFile,
      uploading: true,
      progress: 12,
      completed: false,
      matchedSkills: [],
    });

    let currentProgress = 12;
    timerRef.current = setInterval(() => {
      currentProgress += 18;
      if (currentProgress >= 100) {
        clearInterval(timerRef.current);
        // Display full 100% on the progress bar
        setFileState((prev) => ({
          ...prev,
          uploading: true,
          progress: 100,
        }));

        // After a brief 500ms pause showing 100%, transition to completed state with metrics
        finishTimeoutRef.current = setTimeout(() => {
          setFileState((prev) => ({
            ...prev,
            uploading: false,
            progress: 100,
            completed: true,
            matchedSkills: [
              "React.js",
              "Next.js",
              "JavaScript (ES6+)",
              "Tailwind CSS",
              "Radix UI",
              "REST APIs",
            ],
          }));
        }, 500);
      } else {
        setFileState((prev) => ({
          ...prev,
          progress: currentProgress,
        }));
      }
    }, 220);
  };

  const resetUpload = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (finishTimeoutRef.current) clearTimeout(finishTimeoutRef.current);
    setFileState({
      file: null,
      uploading: false,
      progress: 0,
      completed: false,
      matchedSkills: [],
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const steps = [
    {
      title: "Resume analyzed",
      sub: "Ready in 4s",
      hasDot: true,
      color: "text-[#10B981]",
      bgColor: "bg-[#ECFDF5]",
      borderColor: "border-[#A7F3D0]",
    },
    {
      title: "Skills matched",
      sub: "Deep taxonomy",
      color: "text-[#6366F1]",
      bgColor: "bg-[#EEF2FF]",
      borderColor: "border-[#C7D2FE]",
    },
    {
      title: "Experience matched",
      sub: "Contextual seniority",
      color: "text-[#9333EA]",
      bgColor: "bg-[#FAF5FF]",
      borderColor: "border-[#E9D5FF]",
    },
    {
      title: "1,000+ sources searched",
      sub: "Real-time aggregators",
      color: "text-[#0098FF]",
      bgColor: "bg-[#EFF6FF]",
      borderColor: "border-[#BFDBFE]",
    },
  ];

  return (
    <section
      id="resume-match"
      className="py-10 lg:py-14 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden"
      aria-labelledby="resume-heading"
    >
      {/* Background ambient glows matching exact Figma Gradient+Blur (1:1315, 1:1316, 1:1317, 1:1318) */}
      {/* Node 1:1315: Top dynamic radiant mesh lights */}
      <div
        className="absolute pointer-events-none top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[474px] rounded-full z-0"
        style={{
          background: "linear-gradient(to bottom, rgba(199, 210, 254, 0.25) 0%, rgba(221, 214, 254, 0.00) 50%, rgba(221, 214, 254, 0.00) 100%)",
          filter: "blur(110px)",
        }}
        aria-hidden="true"
      />
      {/* Node 1:1316: Left Gradient+Blur */}
      <div
        className="absolute pointer-events-none top-40 -left-12 lg:left-[50px] w-[380px] h-[380px] lg:w-[480px] lg:h-[480px] rounded-full z-0"
        style={{
          background: "linear-gradient(to right, rgba(165, 243, 252, 0.30) 0%, rgba(191, 219, 254, 0.20) 50%, rgba(191, 219, 254, 0.00) 100%)",
          filter: "blur(100px)",
        }}
        aria-hidden="true"
      />
      {/* Node 1:1317: Right Gradient+Blur */}
      <div
        className="absolute pointer-events-none top-48 -right-12 lg:right-[50px] w-[400px] h-[400px] lg:w-[520px] lg:h-[520px] rounded-full z-0"
        style={{
          background: "linear-gradient(to right, rgba(196, 181, 253, 0.30) 0%, rgba(245, 208, 254, 0.20) 50%, rgba(245, 208, 254, 0.00) 100%)",
          filter: "blur(110px)",
        }}
        aria-hidden="true"
      />
      {/* Node 1:1318: Bottom subtle balance glow */}
      <div
        className="absolute pointer-events-none -bottom-16 left-1/2 -translate-x-1/2 w-[700px] lg:w-[850px] h-[340px] rounded-full z-0"
        style={{
          background: "linear-gradient(to top, rgba(209, 250, 229, 0.30) 0%, rgba(224, 231, 255, 0.20) 50%, rgba(224, 231, 255, 0.00) 100%)",
          filter: "blur(120px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badge */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-semibold shadow-2xs">
            <span className="relative flex items-center justify-center w-3 h-3">
              {/* Diffused outer purple glow matching Figma close-up */}
              <span className="absolute w-5 h-5 rounded-full bg-[#8B5CF6]/50 blur-[3px]" aria-hidden="true" />
              {/* Core solid purple dot */}
              <span className="relative w-2.5 h-2.5 rounded-full bg-[#7C3AED] shadow-[0_0_8px_1.5px_rgba(124,58,237,0.55)]" aria-hidden="true" />
            </span>
            <span className="text-[#0098FF] font-bold">TRY IT LIVE</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-400 font-normal">v2.4 AI Engine</span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2
            id="resume-heading"
            className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0B0F19] tracking-tight leading-[1.15] mb-4 font-heading"
          >
            Upload your resume. <br />
            <span className="text-[#0098FF]">Find jobs that fit.</span>
          </h2>
          <p className="text-base sm:text-[18px] sm:leading-[28px] text-[#64748B] font-normal leading-relaxed font-sans">
            Upload once. CampusPe reads your skills, experience, and preferences —
            then finds relevant jobs across 1,000+ sources.
          </p>
        </div>

        {/* Central Interactive Upload Card */}
        <div className="max-w-3xl mx-auto relative mb-14">
          {/* Strong Radiant Ambient Card Aura Glow (Figma Node 1:1338) */}
          <div
            className="absolute -inset-4 sm:-inset-6 pointer-events-none rounded-[50px] z-0"
            style={{
              background: "radial-gradient(ellipse at center, rgba(147, 197, 253, 0.70) 0%, rgba(196, 181, 253, 0.55) 45%, rgba(221, 214, 254, 0.35) 75%, transparent 100%)",
              filter: "blur(50px)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute -inset-2 pointer-events-none rounded-[46px] z-0"
            style={{
              background: "linear-gradient(135deg, rgba(99, 102, 241, 0.28) 0%, rgba(168, 85, 247, 0.32) 50%, rgba(59, 130, 246, 0.30) 100%)",
              filter: "blur(38px)",
            }}
            aria-hidden="true"
          />

          {/* Outer Solid White Card with Elevation Shadow */}
          <div className="relative z-10 bg-white rounded-[32px] sm:rounded-[38px] p-5 sm:p-7 lg:p-8 shadow-[0_20px_60px_-15px_rgba(99,102,241,0.14),0_12px_32px_-10px_rgba(0,132,255,0.08)] border border-slate-100">
            {/* Floating Pill: Top-Left (Symmetric with bottom ATS pill: top-14 sm:top-16 -left-3 sm:-left-7) */}
            <div className="absolute -left-3 sm:-left-7 top-14 sm:top-16 z-30 bg-white rounded-2xl px-3.5 sm:px-4 py-2 border border-slate-100 shadow-[0_12px_30px_-6px_rgba(0,0,0,0.12)] flex items-center gap-2.5 animate-float-slow">
              <div className="w-8 h-8 rounded-xl bg-[#E6F9E6] border border-[#B7F4B7] text-slate-900 flex items-center justify-center flex-shrink-0">
                <Zap size={14} strokeWidth={2.2} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-snug">98% Match Rate</p>
                <p className="text-[11px] text-slate-500">AI semantic rank</p>
              </div>
            </div>

            {/* Floating Pill: Bottom-Right (Figma exact: bottom-14 sm:bottom-16 -right-3 sm:-right-7) */}
            <div className="absolute -right-3 sm:-right-7 bottom-14 sm:bottom-16 z-30 bg-white rounded-2xl px-3.5 sm:px-4 py-2 border border-slate-100 shadow-[0_12px_30px_-6px_rgba(0,0,0,0.12)] flex items-center gap-2.5 animate-float-delayed">
              <div className="w-8 h-8 rounded-xl bg-[#FFF7ED] border border-[#FED7AA] text-slate-900 flex items-center justify-center flex-shrink-0">
                <Lock size={14} strokeWidth={2.2} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-snug">ATS Compliant</p>
                <p className="text-[11px] text-slate-500">Standardized parser</p>
              </div>
            </div>

            {/* Inner Dashed Drop Zone */}
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragOver(true);
              }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={handleDrop}
              className={`rounded-[22px] sm:rounded-[26px] p-6 sm:p-10 lg:p-12 border-2 border-dashed transition-all duration-200 text-center relative ${
                isDragOver
                  ? "border-primary bg-blue-50/50 scale-[1.005]"
                  : "border-[#BFDBFE] bg-transparent hover:border-primary/60"
              }`}
            >
              {/* 4 Corner Accent Brackets with smooth rounded radius matching Figma */}
              <div className="absolute top-3 left-3 w-[18px] h-[18px] border-t-2 border-l-2 border-[#818CF8]/85 rounded-tl-[7px] pointer-events-none" />
              <div className="absolute top-3 right-3 w-[18px] h-[18px] border-t-2 border-r-2 border-[#818CF8]/85 rounded-tr-[7px] pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-[18px] h-[18px] border-b-2 border-l-2 border-[#818CF8]/85 rounded-bl-[7px] pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-[18px] h-[18px] border-b-2 border-r-2 border-[#818CF8]/85 rounded-br-[7px] pointer-events-none" />

              {/* Screen Reader live status */}
              <div className="sr-only" aria-live="polite">
                {fileState.uploading && `Uploading resume: ${fileState.progress}%`}
                {fileState.completed && "Resume parsed successfully. 98% match rate."}
              </div>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="sr-only"
                id="resume-file-input"
                aria-label="Upload resume file"
              />

              {!fileState.completed ? (
                <div>
                  <h3 className="text-2xl sm:text-[34px] font-extrabold text-[#0B0F19] mb-3 font-heading tracking-tight">
                    Upload your resume
                  </h3>
                  <p className="text-xs sm:text-[15px] sm:leading-[22px] text-[#64748B] max-w-lg mx-auto mb-7 leading-relaxed font-sans">
                    PDF, DOC, or DOCX · Up to 10MB · We&apos;ll use it to understand your skills and experience.
                  </p>

                  {fileState.uploading ? (
                    <div className="max-w-xs sm:max-w-sm mx-auto mb-6 py-2">
                      <div className="flex justify-between text-xs font-semibold text-slate-700 mb-2">
                        <span>
                          {fileState.progress === 100
                            ? "Analysis complete! Generating AI match metrics..."
                            : "Analyzing credentials & matching..."}
                        </span>
                        <span className="text-[#0098FF] font-bold">{fileState.progress}%</span>
                      </div>
                      <div
                        role="progressbar"
                        aria-valuenow={fileState.progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        className="w-full bg-slate-100 rounded-full h-3 overflow-hidden p-0.5 border border-slate-200/60"
                      >
                        <div
                          className="bg-[#0098FF] h-full rounded-full transition-all duration-200"
                          style={{ width: `${fileState.progress}%` }}
                        />
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={handleUploadButtonClick}
                      className="inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-full font-semibold text-white bg-[#0084FF] hover:bg-primary-hover shadow-lg shadow-blue-500/35 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all duration-150 mb-3 cursor-pointer"
                    >
                      <span className="text-[15px]">Upload resume</span>
                      <ArrowUp size={18} strokeWidth={2.5} />
                    </button>
                  )}

                  <p className="text-xs sm:text-sm text-[#64748B] mb-2 font-normal">
                    or drag and drop your file here
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      simulateUpload({
                        name: "Alex_Rivera_Software_Engineer.pdf",
                        size: 245000,
                      })
                    }
                    className="text-xs font-semibold text-[#0098FF] hover:underline mb-4 inline-flex items-center gap-1 transition-all"
                  >
                    <span>Or test demo with sample resume</span>
                    <ArrowRight size={13} />
                  </button>

                  {/* Accepted formats badges */}
                  <div className="flex items-center justify-center gap-2.5">
                    <span className="px-3 py-1 rounded-lg text-xs font-semibold text-[#0098FF] bg-white border border-[#0098FF]">
                      PDF
                    </span>
                    <span className="px-3 py-1 rounded-lg text-xs font-semibold text-[#0098FF] bg-white border border-[#0098FF]">
                      DOC
                    </span>
                    <span className="px-3 py-1 rounded-lg text-xs font-semibold text-[#0098FF] bg-white border border-[#0098FF]">
                      DOCX
                    </span>
                  </div>
                </div>
              ) : (
                <div className="py-2">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                    <FileCheck size={28} />
                  </div>
                  <h3 className="text-2xl sm:text-[28px] font-bold text-slate-900 mb-1 font-heading">
                    Resume Parsed Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-6">
                    File: <span className="font-semibold text-slate-800">{fileState.file?.name}</span> • <span className="text-emerald-600 font-semibold">ATS Verified</span>
                  </p>

                  {/* Key Parsed Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto mb-6">
                    <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-2xl text-center">
                      <p className="text-[11px] font-medium text-slate-500 mb-0.5">Match Rate</p>
                      <p className="text-lg sm:text-xl font-bold text-[#0098FF]">98%</p>
                    </div>
                    <div className="p-3 bg-emerald-50/70 border border-emerald-100 rounded-2xl text-center">
                      <p className="text-[11px] font-medium text-slate-500 mb-0.5">ATS Score</p>
                      <p className="text-lg sm:text-xl font-bold text-emerald-600">96 / 100</p>
                    </div>
                    <div className="p-3 bg-purple-50/70 border border-purple-100 rounded-2xl text-center">
                      <p className="text-[11px] font-medium text-slate-500 mb-0.5">Matched Roles</p>
                      <p className="text-lg sm:text-xl font-bold text-[#7C3AED]">12 Roles</p>
                    </div>
                    <div className="p-3 bg-amber-50/70 border border-amber-100 rounded-2xl text-center">
                      <p className="text-[11px] font-medium text-slate-500 mb-0.5">Interview Velocity</p>
                      <p className="text-lg sm:text-xl font-bold text-amber-600">4.2x Faster</p>
                    </div>
                  </div>

                  {/* Detected Skills Chips */}
                  <div className="max-w-lg mx-auto mb-7">
                    <p className="text-xs font-semibold text-slate-500 mb-2.5">Detected Key Skills:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {fileState.matchedSkills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs font-semibold text-[#0098FF]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons: Redirect to CampusPe Opportunity Feed & Upload Another */}
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={onOpenJobFeed}
                      className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full font-semibold text-white bg-[#0084FF] hover:bg-primary-hover shadow-md shadow-blue-500/25 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all duration-150 text-sm sm:text-[15px]"
                    >
                      <span>Redirect to CampusPe Opportunity Feed</span>
                      <Sparkles size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={resetUpload}
                      className="inline-flex items-center justify-center gap-1.5 py-3 px-5 rounded-full font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 text-sm focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:outline-none transition-all"
                    >
                      <RefreshCw size={14} />
                      <span>Upload another</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 4 Connected Process Milestone Cards */}
        <div className="relative max-w-5xl mx-auto">
          {/* Subtle horizontal connector line running behind the cards on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-[1.5px] bg-[#E2E8F0] -translate-y-1/2 z-0" aria-hidden="true" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-5 lg:p-6 rounded-[22px] bg-white border border-slate-200/80 shadow-xs flex items-center gap-3.5 hover:border-blue-300 transition-colors"
              >
                <div
                  className={`w-11 h-11 rounded-[14px] ${step.bgColor} border ${step.borderColor} ${step.color} flex items-center justify-center shrink-0`}
                  aria-hidden="true"
                >
                  <Check size={20} strokeWidth={2.5} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[14px] sm:text-[15px] font-bold text-slate-900 leading-snug">
                    {step.title}
                  </h4>
                  <p className={`text-xs font-medium ${step.color} flex items-center gap-1.5 mt-0.5`}>
                    {step.hasDot && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block shrink-0" aria-hidden="true" />
                    )}
                    <span>{step.sub}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
