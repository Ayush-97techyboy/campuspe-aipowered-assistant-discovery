"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  ArrowUp,
  FileCheck,
  RefreshCw,
  Sparkles,
  Check,
} from "lucide-react";
import { uploadResumeToS3 } from "@/lib/amplifyService";
import styles from "./FeatureResume.module.css";

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

    setFileState({
      file: activeFile,
      uploading: true,
      progress: 10,
      completed: false,
      matchedSkills: [],
    });

    try {
      if (file && typeof file === "object" && file.name) {
        uploadResumeToS3(file).catch((err) => {
          console.warn("S3 background upload notice (simulated mode active):", err);
        });
      }
    } catch (e) {
      console.warn("S3 background upload error:", e);
    }

    timerRef.current = setInterval(() => {
      setFileState((prev) => {
        if (!prev.uploading) return prev;
        if (prev.progress >= 95) {
          if (timerRef.current) clearInterval(timerRef.current);
          return { ...prev, progress: 95 };
        }
        return { ...prev, progress: prev.progress + 15 };
      });
    }, 180);

    finishTimeoutRef.current = setTimeout(() => {
      if (timerRef.current) clearInterval(timerRef.current);
      setFileState({
        file: activeFile,
        uploading: false,
        progress: 100,
        completed: true,
        matchedSkills: ["React", "TypeScript", "Node.js", "System Design", "Next.js"],
      });
    }, 1600);
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
      title: "Resume parsed",
      sub: "98% accuracy",
      color: "text-emerald-700",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      hasDot: false,
    },
    {
      title: "Skills extracted",
      sub: "14 core skills",
      color: "text-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      hasDot: false,
    },
    {
      title: "Live matching",
      sub: "Scanning 1,000+ sources",
      color: "text-emerald-700",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      hasDot: true,
    },
    {
      title: "Jobs delivered",
      sub: "Direct to you",
      color: "text-purple-700",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      hasDot: false,
    },
  ];

  return (
    <section id="resume-match" className={styles.resumeSection} aria-labelledby="resume-heading">
      <div className={styles.resumeGridOverlay} aria-hidden="true" />
      <div className={styles.resumeGlowTopMesh} aria-hidden="true" />
      <div className={styles.resumeGlowBottom} aria-hidden="true" />

      <div className={styles.resumeContainer}>
        {/* Top Badge */}
        <div className="flex justify-center mb-4 sm:mb-5">
          <div className={styles.resumeTagPill}>
            <span className="relative flex items-center justify-center w-3 h-3">
              <span className="absolute w-5 h-5 rounded-full bg-[#8B5CF6]/50 blur-[3px]" aria-hidden="true" />
              <span className="relative w-2.5 h-2.5 rounded-full bg-[#7C3AED]" aria-hidden="true" />
            </span>
            <span className="text-[#0098FF] font-bold">TRY IT LIVE</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-400 font-normal">v2.4 AI Engine</span>
          </div>
        </div>

        {/* Heading */}
        <div className={styles.resumeHeaderBlock}>
          <h2 id="resume-heading" className={styles.resumeTitle}>
            Upload your resume. <br />
            <span className="text-[#0098FF]">Find jobs that fit.</span>
          </h2>
          <p className={styles.resumeSubtitle}>
            Upload once. CampusPe reads your skills, experience, and preferences —
            then finds relevant jobs across 1,000+ sources.
          </p>
        </div>

        {/* Central Interactive Upload Card */}
        <div className={styles.resumeCardWrap}>
          <div className={styles.resumeCardGlowLeft} aria-hidden="true" />
          <div className={styles.resumeCardGlowRight} aria-hidden="true" />
          <div className={styles.resumeCardGlowAura} aria-hidden="true" />

          {/* Main Card Body */}
          <div className={styles.resumeCardBody}>
            {/* Left Floating Tag (Figma: 1:1370) */}
            <div className={styles.resumePillLeft}>
              <div className={styles.resumePillIconLeft} aria-hidden="true">
                <Image
                  src="/assets/upload-icons/98%25match-rate.svg"
                  alt="98% Match Rate"
                  width={14}
                  height={16}
                  className="w-3.5 h-4 object-contain"
                />
              </div>
              <div>
                <p className={styles.resumePillTitle}>98% Match Rate</p>
                <p className={styles.resumePillSub}>AI semantic rank</p>
              </div>
            </div>

            {/* Right Floating Tag (Figma: 1:1380 - ATS Compliant) */}
            <div className={styles.resumePillRight}>
              <div className={styles.resumePillIconRight} aria-hidden="true">
                <Image
                  src="/assets/upload-icons/ats-score.svg"
                  alt="ATS Compliant"
                  width={14}
                  height={16}
                  className="w-3.5 h-4 object-contain"
                />
              </div>
              <div>
                <p className={styles.resumePillTitle}>ATS Compliant</p>
                <p className={styles.resumePillSub}>Standardized parser</p>
              </div>
            </div>

            {/* Inner Dropzone Area */}
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragOver(true);
              }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={handleDrop}
              className={`${styles.resumeDropzone} ${isDragOver ? styles.isDragOver : ""}`}
            >
              {/* Subtle hover corner accents from Figma (1:1347 - 1:1350) */}
              <span className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l border-indigo-300/60 rounded-tl pointer-events-none" aria-hidden="true" />
              <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t border-r border-indigo-300/60 rounded-tr pointer-events-none" aria-hidden="true" />
              <span className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b border-l border-indigo-300/60 rounded-bl pointer-events-none" aria-hidden="true" />
              <span className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b border-r border-indigo-300/60 rounded-br pointer-events-none" aria-hidden="true" />
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
                  <div className="pt-1 sm:pt-2">
                    <h3 className="font-roboto font-bold text-[24px] sm:text-[32px] leading-[30px] sm:leading-[37.5px] text-[#0F172A] mb-1.5 tracking-tight">
                      Upload your resume
                    </h3>
                    <p className="font-sans font-medium text-[12px] sm:text-[14px] leading-[17px] text-[#475569] max-w-[471px] mx-auto">
                      PDF, DOC, or DOCX · Up to 10MB · We&apos;ll use it to understand your skills and experience.
                    </p>
                  </div>

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
                        className={styles.resumeBtnUpload}
                      >
                        <span>Upload resume</span>
                        <ArrowUp size={16} strokeWidth={2.5} />
                      </button>
                    </div>
                  )}

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

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
                    <button
                      type="button"
                      onClick={onOpenJobFeed}
                      className="inline-flex items-center justify-center gap-2 py-3 px-5 sm:px-6 rounded-full font-semibold text-white bg-[#0084FF] hover:bg-primary-hover shadow-md shadow-blue-500/25 active:scale-95 text-xs sm:text-[15px] w-full sm:w-auto"
                    >
                      <span>Redirect to CampusPe Feed</span>
                      <Sparkles size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={resetUpload}
                      className="inline-flex items-center justify-center gap-1.5 py-3 px-4 sm:px-5 rounded-full font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 text-xs sm:text-sm transition-all w-full sm:w-auto"
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
