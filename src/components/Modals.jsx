"use client";

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, CheckCircle2, Sparkles, Send, PhoneCall } from "lucide-react";

export function WaitlistModal({ open, onOpenChange, defaultRole = "Student" }) {
  const [role, setRole] = useState(defaultRole);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onOpenChange(false);
      setEmail("");
      setName("");
    }, 2500);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 animate-fadeIn" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-md max-h-[90vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl z-50 border border-slate-100 focus:outline-none">
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="text-xl font-bold text-slate-900 font-heading">
              Join CampusPe Waitlist
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </Dialog.Close>
          </div>

          <Dialog.Description className="text-xs sm:text-sm text-slate-500 mb-6">
            Be the first to experience India&apos;s AI-powered campus assistant when it goes live in your region.
          </Dialog.Description>

          {submitted ? (
            <div className="py-8 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-1">You&apos;re on the list!</h4>
              <p className="text-xs text-slate-500">
                We&apos;ll notify you at <span className="font-semibold text-slate-700">{email}</span> as soon as access opens.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="waitlist-role" className="block text-xs font-semibold text-slate-700 mb-1">
                  I am a:
                </label>
                <select
                  id="waitlist-role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none bg-white text-slate-800"
                >
                  <option value="Student">Student looking for jobs / college</option>
                  <option value="College Institution">College / Academic Institution</option>
                  <option value="Employer / Recruiter">Employer / HR Recruiter</option>
                </select>
              </div>

              <div>
                <label htmlFor="waitlist-name" className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  id="waitlist-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="waitlist-email" className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  id="waitlist-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-white bg-primary hover:bg-primary-hover shadow-md shadow-blue-500/25 active:scale-95 transition-all text-sm mt-2"
              >
                Join Waitlist
              </button>
            </form>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function AuthModal({ open, onOpenChange, initialMode = "signin" }) {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onOpenChange(false);
    }, 1800);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 animate-fadeIn" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-md max-h-[90vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl z-50 border border-slate-100 focus:outline-none">
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="text-xl font-bold text-slate-900 font-heading">
              {mode === "signin" ? "Sign In to CampusPe" : "Create your Account"}
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </Dialog.Close>
          </div>

          <Dialog.Description className="text-xs text-slate-500 mb-6">
            Access India&apos;s leading AI assistant for discovery and campus placements.
          </Dialog.Description>

          {success ? (
            <div className="py-6 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 size={28} />
              </div>
              <h4 className="text-base font-bold text-slate-900">
                {mode === "signin" ? "Welcome back!" : "Account created!"}
              </h4>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === "signup" && (
                <div>
                  <label htmlFor="auth-name" className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name
                  </label>
                  <input
                    id="auth-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Amit Kumar"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                  />
                </div>
              )}

              <div>
                <label htmlFor="auth-email" className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  id="auth-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@college.edu"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="auth-pass" className="block text-xs font-semibold text-slate-700 mb-1">
                  Password
                </label>
                <input
                  id="auth-pass"
                  type="password"
                  required
                  autoComplete={mode === "signin" ? "current-password" : "new-password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-white bg-primary hover:bg-primary-hover shadow-md shadow-blue-500/25 active:scale-95 transition-all text-sm mt-2"
              >
                {mode === "signin" ? "Sign In" : "Sign Up"}
              </button>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
                  className="text-xs font-semibold text-primary hover:underline"
                >
                  {mode === "signin"
                    ? "Don't have an account? Sign Up"
                    : "Already have an account? Sign In"}
                </button>
              </div>
            </form>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function OpportunityModal({ opportunity, open, onOpenChange }) {
  const [applied, setApplied] = useState(false);

  if (!opportunity) return null;

  const handleApply = () => {
    setApplied(true);
    setTimeout(() => {
      setApplied(false);
      onOpenChange(false);
    }, 2000);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 animate-fadeIn" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl z-50 border border-slate-100 focus:outline-none">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${opportunity.logoBg}`}>
                {opportunity.logo}
              </div>
              <div>
                <Dialog.Title className="text-xl font-bold text-slate-900 font-heading">
                  {opportunity.title}
                </Dialog.Title>
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${opportunity.badgeColor}`}>
                  {opportunity.badge}
                </span>
              </div>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </Dialog.Close>
          </div>

          <Dialog.Description className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
            {opportunity.description}
          </Dialog.Description>

          <div className="p-4 bg-slate-50 rounded-2xl mb-6 space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-500">Category:</span>
              <span className="font-semibold text-slate-800">{opportunity.category}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Key Highlights:</span>
              <span className="font-semibold text-slate-800">{opportunity.details?.join(" • ")}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">AI Match Score:</span>
              <span className="font-bold text-emerald-600">98% Strong Match</span>
            </div>
          </div>

          {applied ? (
            <div className="py-4 text-center">
              <p className="text-sm font-bold text-emerald-600 flex items-center justify-center gap-2">
                <CheckCircle2 size={18} />
                <span>Application submitted to {opportunity.title}!</span>
              </p>
            </div>
          ) : (
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleApply}
                className="flex-1 py-3 rounded-xl font-semibold text-white bg-primary hover:bg-primary-hover shadow-md shadow-blue-500/25 active:scale-95 transition-all text-sm"
              >
                {opportunity.isApply ? "Submit 1-Click Application" : "Enquire & Connect Directly"}
              </button>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function ContactModal({ open, onOpenChange, type = "support" }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onOpenChange(false);
    }, 2000);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 animate-fadeIn" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-md max-h-[90vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl z-50 border border-slate-100 focus:outline-none">
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="text-xl font-bold text-slate-900 font-heading">
              {type === "schedule" ? "Schedule a Call" : "Contact Support"}
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </Dialog.Close>
          </div>

          <Dialog.Description className="text-xs text-slate-500 mb-6">
            {type === "schedule"
              ? "Select your preferred slot and an advisor will connect with you."
              : "Our team is here to assist with admissions, recruitment, or technical queries."}
          </Dialog.Description>

          {submitted ? (
            <div className="py-6 text-center text-emerald-600 font-bold flex items-center justify-center gap-2">
              <CheckCircle2 size={24} />
              <span>Request received! We will reach out shortly.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone / WhatsApp Number
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1">
                  Message / Requirements
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  placeholder="How can we help you?"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-white bg-primary hover:bg-primary-hover shadow-md shadow-blue-500/25 active:scale-95 transition-all text-sm mt-2"
              >
                {type === "schedule" ? "Confirm Call Booking" : "Send Support Request"}
              </button>
            </form>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
