"use client";

import React, { useState, useRef } from "react";
import {
  Upload,
  Zap,
  Lock,
  CheckCircle2,
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
    setFileState({
      file,
      uploading: true,
      progress: 15,
      completed: false,
      matchedSkills: [],
    });

    const interval = setInterval(() => {
      setFileState((prev) => {
        if (prev.progress >= 95) {
          clearInterval(interval);
          return {
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
          };
        }
        return { ...prev, progress: prev.progress + 25 };
      });
    }, 250);
  };

  const resetUpload = () => {
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
      icon: CheckCircle2,
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
    },
    {
      title: "Skills matched",
      sub: "Deep taxonomy",
      icon: CheckCircle2,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      title: "Experience matched",
      sub: "Contextual seniority",
      icon: CheckCircle2,
      color: "text-indigo-500",
      bgColor: "bg-indigo-50",
    },
    {
      title: "1,000+ sources searched",
      sub: "Real-time aggregators",
      icon: CheckCircle2,
      color: "text-sky-500",
      bgColor: "bg-sky-50",
    },
  ];

  return (
    <section
      id="resume-match"
      className="py-16 lg:py-24 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden"
      aria-labelledby="resume-heading"
    >
      {/* Background ambient glow */}
      <div className="ambient-glow bg-blue-100/60 w-[500px] h-[350px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badge */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-primary text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
            <span>TRY IT LIVE</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500 font-normal">v2.4 AI Engine</span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2
            id="resume-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading"
          >
            Upload your resume. <br />
            <span className="text-gradient-blue">Find jobs that fit.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Upload once. CampusPe reads your skills, experience, and preferences —
            then finds relevant jobs across 1,000+ sources.
          </p>
        </div>

        {/* Central Interactive Upload Card */}
        <div className="max-w-3xl mx-auto relative mb-14">
          {/* Floating Pill: Top-Left */}
          <div className="absolute -left-4 sm:-left-8 -top-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 border border-slate-100 shadow-card flex items-center gap-3 animate-float-slow">
            <div className="w-8 h-8 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center flex-shrink-0">
              <Zap size={16} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-snug">98% Match Rate</p>
              <p className="text-[11px] text-slate-500">AI semantic rank</p>
            </div>
          </div>

          {/* Floating Pill: Bottom-Right */}
          <div className="absolute -right-4 sm:-right-8 -bottom-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 border border-slate-100 shadow-card flex items-center gap-3 animate-float-delayed">
            <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
              <Lock size={16} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-snug">ATS Compliant</p>
              <p className="text-[11px] text-slate-500">Standardized parser</p>
            </div>
          </div>

          {/* Main Upload Box */}
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragOver(true);
            }}
            onDragLeave={() => setIsDragOver(false)}
            onDrop={handleDrop}
            className={`bg-white rounded-3xl p-8 sm:p-12 border-2 border-dashed transition-all duration-200 text-center relative ${
              isDragOver
                ? "border-primary bg-blue-50/40 scale-[1.01]"
                : "border-blue-200/90 shadow-card hover:border-primary/60"
            }`}
          >
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
              className="hidden"
              id="resume-file-input"
              aria-label="Upload resume file"
            />

            {!fileState.completed ? (
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 font-heading">
                  Upload your resume
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mb-6 leading-relaxed">
                  PDF, DOC, or DOCX • Up to 10MB • We&apos;ll use it to understand your
                  skills and experience.
                </p>

                {fileState.uploading ? (
                  <div className="max-w-xs mx-auto mb-6">
                    <div className="flex justify-between text-xs font-semibold text-slate-600 mb-2">
                      <span>Analyzing credentials...</span>
                      <span>{fileState.progress}%</span>
                    </div>
                    <div
                      role="progressbar"
                      aria-valuenow={fileState.progress}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden"
                    >
                      <div
                        className="bg-primary h-2.5 rounded-full transition-all duration-300"
                        style={{ width: `${fileState.progress}%` }}
                      />
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center justify-center gap-2 py-3 px-8 rounded-full font-semibold text-white bg-primary hover:bg-primary-hover shadow-md shadow-blue-500/30 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all duration-150 mb-3"
                  >
                    <span>Upload resume</span>
                    <Upload size={16} />
                  </button>
                )}

                <p className="text-xs text-slate-400 mb-4">or drag and drop your file here</p>

                {/* Accepted formats badges */}
                <div className="flex items-center justify-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold text-primary bg-blue-50 border border-blue-200">
                    PDF
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold text-primary bg-blue-50 border border-blue-200">
                    DOC
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold text-primary bg-blue-50 border border-blue-200">
                    DOCX
                  </span>
                </div>
              </div>
            ) : (
              <div className="py-2">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <FileCheck size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1 font-heading">
                  Resume Parsed Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-4">
                  File: <span className="font-semibold text-slate-800">{fileState.file?.name}</span> • 98% Semantic Rank
                </p>

                {/* Detected Skills Chips */}
                <div className="max-w-lg mx-auto mb-6">
                  <p className="text-xs font-semibold text-slate-500 mb-2">Detected Key Skills:</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {fileState.matchedSkills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-semibold text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={onOpenJobFeed}
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-6 rounded-full font-semibold text-white bg-primary hover:bg-primary-hover shadow-md shadow-blue-500/25 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all duration-150 text-sm"
                  >
                    <span>View 12 Matched Roles</span>
                    <Sparkles size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={resetUpload}
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 text-sm focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:outline-none transition-all"
                  >
                    <RefreshCw size={14} />
                    <span>Upload another</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 4 Connected Process Milestone Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center gap-3.5 hover:border-blue-300 transition-colors"
              >
                <div
                  className={`w-9 h-9 rounded-full ${step.bgColor} ${step.color} flex items-center justify-center flex-shrink-0`}
                  aria-hidden="true"
                >
                  <Icon size={18} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-500">{step.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
