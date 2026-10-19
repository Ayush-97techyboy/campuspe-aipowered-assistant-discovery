"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
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
import { uploadResumeToS3 } from "@/lib/amplifyService";

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

  const simulateUpload = async (file) => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (finishTimeoutRef.current) clearTimeout(finishTimeoutRef.current);

    const activeFile = file || { name: "CampusPe_Sample_Resume.pdf", size: 245000 };

    // Send file to AWS Amplify S3 Storage in parallel
    if (file && typeof file === "object" && file.size) {
      uploadResumeToS3(file).catch((err) => console.warn("Amplify upload notice:", err));
    }

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
      className="py-10 lg:py-14 bg-[#F8FAFC]/50 relative overflow-hidden"
      aria-labelledby="resume-heading"
    >
      {/* Figma Node 1:1314 Grid overlay pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60 z-0"
        style={{
          backgroundImage: "radial-gradient(rgba(99, 102, 241, 0.12) 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 50%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Node 1:1315: Top dynamic radiant mesh lights (1100x474) */}
      <div
        className="absolute pointer-events-none -top-14 left-1/2 -translate-x-1/2 w-[1100px] h-[474px] rounded-full z-0"
        style={{
          background: "linear-gradient(180deg, rgba(199, 210, 254, 0.25) 0%, rgba(221, 214, 254, 0.00) 50%, rgba(221, 214, 254, 0.00) 100%)",
          filter: "blur(110px)",
        }}
        aria-hidden="true"
      />
      {/* Node 1:1318: Bottom subtle balance glow (850x340) */}
      <div
        className="absolute pointer-events-none -bottom-20 left-1/2 -translate-x-1/2 w-[600px] lg:w-[850px] h-[340px] rounded-full z-0"
        style={{
          background: "linear-gradient(0deg, rgba(209, 250, 229, 0.30) 0%, rgba(224, 231, 255, 0.20) 50%, rgba(224, 231, 255, 0.00) 100%)",
          filter: "blur(120px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1240px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badge */}
        <div className="flex justify-center mb-4 sm:mb-5">
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-semibold shadow-2xs">
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
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2
            id="resume-heading"
            className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0B0F19] tracking-tight leading-[1.15] mb-3 sm:mb-4 font-heading"
          >
            Upload your resume. <br />
            <span className="text-[#0098FF]">Find jobs that fit.</span>
          </h2>
          <p className="text-[14px] min-[360px]:text-base sm:text-[18px] sm:leading-[28px] text-[#64748B] font-normal leading-relaxed font-sans px-2">
            Upload once. CampusPe reads your skills, experience, and preferences —
            then finds relevant jobs across 1,000+ sources.
          </p>
        </div>

        {/* Central Interactive Upload Card with flanking circles 1:1316 & 1:1317 */}
        {/* Layer 1: Container (Node 1:1337: Fixed 600px, max-w-[672px], min-h-[324px]) */}
        <div className="relative w-full max-w-[600px] mx-auto mb-10 sm:mb-14">
          {/* Node 1:1316: Left Gradient+Blur Circle (480x480) - flanking left edge of card */}
          <div
            className="absolute pointer-events-none -top-16 -left-20 lg:-left-[240px] w-[360px] h-[360px] lg:w-[480px] lg:h-[480px] rounded-full z-0"
            style={{
              background: "linear-gradient(45deg, rgba(165, 243, 252, 0.45) 0%, rgba(191, 219, 254, 0.35) 50%, rgba(191, 219, 254, 0.00) 100%)",
              filter: "blur(90px)",
            }}
            aria-hidden="true"
          />

          {/* Node 1:1317: Right Gradient+Blur Circle (520x520) - flanking right edge of card */}
          <div
            className="absolute pointer-events-none -top-12 -right-20 lg:-right-[260px] w-[400px] h-[400px] lg:w-[520px] lg:h-[520px] rounded-full z-0"
            style={{
              background: "linear-gradient(225deg, rgba(196, 181, 253, 0.45) 0%, rgba(245, 208, 254, 0.35) 50%, rgba(245, 208, 254, 0.00) 100%)",
              filter: "blur(95px)",
            }}
            aria-hidden="true"
          />

          {/* Node 1:1338: Ambient Card Aura Glow (616x340.25, rounded-[38px], blur 40px) */}
          <div
            className="absolute -inset-2 pointer-events-none rounded-[38px] z-0"
            style={{
              background: "linear-gradient(90deg, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.20) 50%, rgba(59, 130, 246, 0.15) 100%)",
              filter: "blur(40px)",
            }}
            aria-hidden="true"
          />

          {/* Layer 2: Main Card Body (Node 1:1339 & 1:1340 - 592x324.25, rounded-[32px], 3-layer drop shadow) */}
          <div
            className="relative z-10 w-full max-w-[592px] mx-auto rounded-[32px] p-[24px] bg-white/90 backdrop-blur-[20px] border border-white/90"
            style={{
              boxShadow:
                "0 0 0 1px rgba(226, 232, 240, 0.80), 0 4px 24px -4px rgba(99, 102, 241, 0.06), 0 24px 60px -15px rgba(15, 23, 42, 0.08)",
            }}
          >
            {/* Left Floating Tag (Node 1:1370: 167x50, -left-[45px] top-[40px]) - visible across mobile & desktop */}
            <div className="flex absolute -left-2 min-[420px]:-left-5 sm:-left-8 lg:-left-[55px] -top-5 sm:top-[40px] z-30 w-[140px] sm:w-[167px] h-[44px] sm:h-[50px] bg-white/95 backdrop-blur-[20px] rounded-[14px] sm:rounded-[16px] px-2.5 sm:px-3.5 py-1.5 sm:py-2 border border-white/80 shadow-[0_4px_16px_-2px_rgba(0,0,0,0.12)] items-center gap-2 sm:gap-2.5 animate-float-slow">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#E6F9E6] border border-[#B7F4B7] text-slate-900 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/assets/upload-icons/98%25match-rate.svg"
                  alt=""
                  width={14}
                  height={14}
                  className="w-3.5 h-3.5 object-contain"
                />
              </div>
              <div>
                <p className="text-[11px] sm:text-xs font-bold text-slate-900 leading-snug">98% Match Rate</p>
                <p className="text-[9px] sm:text-[11px] text-slate-500">AI semantic rank</p>
              </div>
            </div>

            {/* Right Floating Tag (Node 1:1380: 170x50, -right-[45px] bottom-[35px]) - visible across mobile & desktop */}
            <div className="flex absolute -right-2 min-[420px]:-right-5 sm:-right-8 lg:-right-[55px] -bottom-5 sm:bottom-[35px] z-30 w-[140px] sm:w-[170px] h-[44px] sm:h-[50px] bg-white/95 backdrop-blur-[20px] rounded-[14px] sm:rounded-[16px] px-2.5 sm:px-3.5 py-1.5 sm:py-2 border border-white/80 shadow-[0_4px_16px_-2px_rgba(0,0,0,0.12)] items-center gap-2 sm:gap-2.5 animate-float-delayed">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#FFF7ED] border border-[#FED7AA] text-slate-900 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/assets/upload-icons/ats-score.svg"
                  alt=""
                  width={14}
                  height={14}
                  className="w-3.5 h-3.5 object-contain"
                />
              </div>
              <div>
                <p className="text-[11px] sm:text-xs font-bold text-slate-900 leading-snug">ATS Compliant</p>
                <p className="text-[9px] sm:text-[11px] text-slate-500">Standardized parser</p>
              </div>
            </div>

            {/* Layer 3: Interactive Drop Area Wrapper (Node 1:1341: 540x274, rounded-[16px], 2px dashed #C7D2FE 90%, gradient fill) */}
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragOver(true);
              }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={handleDrop}
              className={`w-full max-w-[540px] min-h-[274px] mx-auto rounded-[16px] p-4 sm:p-5 border-2 border-dashed transition-all duration-200 text-center relative flex flex-col justify-between items-center ${
                isDragOver
                  ? "border-primary bg-blue-50/70 scale-[1.01]"
                  : "border-[#C7D2FE]/90 hover:border-primary/60"
              }`}
              style={{
                background:
                  "linear-gradient(180deg, #FBFDFF 0%, #F8FAFF 50%, #FFFFFF 100%)",
                borderStyle: "dashed",
              }}
            >
              {/* 4 Corner Accent Brackets (10x10, #A5B4FC/60) */}
              <div className="absolute top-[10px] left-[10px] w-[10px] h-[10px] border-t-2 border-l-2 border-[#A5B4FC]/60 pointer-events-none" />
              <div className="absolute top-[10px] right-[10px] w-[10px] h-[10px] border-t-2 border-r-2 border-[#A5B4FC]/60 pointer-events-none" />
              <div className="absolute bottom-[10px] left-[10px] w-[10px] h-[10px] border-b-2 border-l-2 border-[#A5B4FC]/60 pointer-events-none" />
              <div className="absolute bottom-[10px] right-[10px] w-[10px] h-[10px] border-b-2 border-r-2 border-[#A5B4FC]/60 pointer-events-none" />

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
                <div className="w-full flex flex-col justify-between items-center h-full min-h-[240px]">
                  {/* Title & Subtext */}
                  <div className="pt-1 sm:pt-2">
                    <h3 className="font-roboto font-bold text-[24px] sm:text-[32px] leading-[30px] sm:leading-[37.5px] text-[#0F172A] mb-1.5 tracking-tight">
                      Upload your resume
                    </h3>
                    <p className="font-sans font-medium text-[12px] sm:text-[14px] leading-[17px] text-[#475569] max-w-[471px] mx-auto">
                      PDF, DOC, or DOCX · Up to 10MB · We&apos;ll use it to understand your skills and experience.
                    </p>
                  </div>

                  {/* Upload State / Action Button */}
                  {fileState.uploading ? (
                    <div className="w-full max-w-xs sm:max-w-sm mx-auto my-2 py-2">
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
                    <div className="my-2 sm:my-2.5">
                      <button
                        type="button"
                        onClick={handleUploadButtonClick}
                        className="w-[188px] h-[45px] inline-flex items-center justify-center gap-2 rounded-[12px] font-sans font-semibold text-[14px] leading-[17px] text-white border border-[#0098FF] hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 cursor-pointer"
                        style={{
                          background: "linear-gradient(90deg, #007FFC 0%, #0098FF 50%, #007FFC 100%)",
                          boxShadow:
                            "0 10px 24px -4px rgba(79, 70, 229, 0.45), 0 1px 2px 0 rgba(0, 0, 0, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.25)",
                        }}
                      >
                        <span>Upload resume</span>
                        <ArrowUp size={16} strokeWidth={2.5} />
                      </button>
                    </div>
                  )}

                  {/* Drag prompt & file format pills */}
                  <div className="pb-1">
                    <p className="font-sans font-medium text-[12px] leading-[14.5px] text-[#64748B] mb-2">
                      or drag and drop your file here
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="w-[42px] h-[21px] rounded-[6px] bg-[#ECFBFF] border border-[#0098FF] text-[12px] font-medium text-[#0098FF] flex items-center justify-center">
                        PDF
                      </span>
                      <span className="w-[45px] h-[21px] rounded-[6px] bg-[#ECFBFF] border border-[#0098FF] text-[12px] font-medium text-[#0098FF] flex items-center justify-center">
                        DOC
                      </span>
                      <span className="w-[53px] h-[21px] rounded-[6px] bg-[#ECFBFF] border border-[#0098FF] text-[12px] font-medium text-[#0098FF] flex items-center justify-center">
                        DOCX
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                    <FileCheck size={26} className="sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="text-xl sm:text-[28px] font-bold text-slate-900 mb-1 font-heading">
                    Resume Parsed Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-5 sm:mb-6">
                    File: <span className="font-semibold text-slate-800 break-all">{fileState.file?.name}</span> • <span className="text-emerald-600 font-semibold">ATS Verified</span>
                  </p>

                  {/* Key Parsed Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-xl mx-auto mb-5 sm:mb-6">
                    <div className="p-2.5 sm:p-3 bg-blue-50/70 border border-blue-100 rounded-2xl text-center">
                      <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 mb-0.5">Match Rate</p>
                      <p className="text-base sm:text-xl font-bold text-[#0098FF]">98%</p>
                    </div>
                    <div className="p-2.5 sm:p-3 bg-emerald-50/70 border border-emerald-100 rounded-2xl text-center">
                      <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 mb-0.5">ATS Score</p>
                      <p className="text-base sm:text-xl font-bold text-emerald-600">96 / 100</p>
                    </div>
                    <div className="p-2.5 sm:p-3 bg-purple-50/70 border border-purple-100 rounded-2xl text-center">
                      <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 mb-0.5">Matched Roles</p>
                      <p className="text-base sm:text-xl font-bold text-[#7C3AED]">12 Roles</p>
                    </div>
                    <div className="p-2.5 sm:p-3 bg-amber-50/70 border border-amber-100 rounded-2xl text-center">
                      <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 mb-0.5">Interview Velocity</p>
                      <p className="text-base sm:text-xl font-bold text-amber-600">4.2x Faster</p>
                    </div>
                  </div>

                  {/* Detected Skills Chips */}
                  <div className="max-w-lg mx-auto mb-6 sm:mb-7">
                    <p className="text-xs font-semibold text-slate-500 mb-2.5">Detected Key Skills:</p>
                    <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                      {fileState.matchedSkills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2.5 sm:px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-[11px] sm:text-xs font-semibold text-[#0098FF]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons: Redirect to CampusPe Opportunity Feed & Upload Another */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
                    <button
                      type="button"
                      onClick={onOpenJobFeed}
                      className="inline-flex items-center justify-center gap-2 py-3 px-5 sm:px-6 rounded-full font-semibold text-white bg-[#0084FF] hover:bg-primary-hover shadow-md shadow-blue-500/25 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all duration-150 text-xs sm:text-[15px] w-full sm:w-auto"
                    >
                      <span>Redirect to CampusPe Feed</span>
                      <Sparkles size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={resetUpload}
                      className="inline-flex items-center justify-center gap-1.5 py-3 px-4 sm:px-5 rounded-full font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 text-xs sm:text-sm focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:outline-none transition-all w-full sm:w-auto"
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
        <div className="relative max-w-5xl 2xl:max-w-6xl mx-auto">
          {/* Subtle horizontal connector line running behind the cards on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-[1.5px] bg-[#E2E8F0] -translate-y-1/2 z-0" aria-hidden="true" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 lg:p-6 rounded-[20px] sm:rounded-[22px] bg-white border border-slate-200/80 shadow-xs flex items-center gap-3 sm:gap-3.5 hover:border-blue-300 transition-colors"
              >
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-[12px] sm:rounded-[14px] ${step.bgColor} border ${step.borderColor} ${step.color} flex items-center justify-center shrink-0`}
                  aria-hidden="true"
                >
                  <Check size={18} className="sm:w-5 sm:h-5" strokeWidth={2.5} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[13px] sm:text-[15px] font-bold text-slate-900 leading-snug">
                    {step.title}
                  </h4>
                  <p className={`text-[11px] sm:text-xs font-medium ${step.color} flex items-center gap-1.5 mt-0.5`}>
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
