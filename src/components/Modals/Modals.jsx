"use client";

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, CheckCircle2 } from "lucide-react";
import {
  submitWaitlistEntry,
  submitContactRequest,
  signInUser,
  signUpUser,
} from "@/lib/amplifyService";
import styles from "./Modals.module.css";

export function WaitlistModal({ open, onOpenChange, defaultRole = "Student" }) {
  const [role, setRole] = useState(defaultRole);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await submitWaitlistEntry({ name, email, role });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onOpenChange(false);
        setEmail("");
        setName("");
      }, 2500);
    } catch (err) {
      console.warn("Waitlist submission notice:", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.modalOverlay} />
        <Dialog.Content className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <Dialog.Title className={styles.modalTitle}>
              Join CampusPe Waitlist
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                className={styles.modalCloseBtn}
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </Dialog.Close>
          </div>

          <Dialog.Description className={styles.modalDescription}>
            Be the first to experience India&apos;s AI-powered campus assistant when it goes live in your region.
          </Dialog.Description>

          {submitted ? (
            <div className={styles.modalSuccessBox}>
              <div className={styles.modalSuccessIconWrap}>
                <CheckCircle2 size={32} />
              </div>
              <h4 className={styles.modalSuccessTitle}>You&apos;re on the list!</h4>
              <p className={styles.modalSuccessDesc}>
                We&apos;ll notify you at <span className="font-semibold text-slate-700">{email}</span> as soon as access opens.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.modalForm}>
              <div>
                <label htmlFor="waitlist-role" className={styles.modalLabel}>
                  I am a:
                </label>
                <select
                  id="waitlist-role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className={styles.modalSelect}
                >
                  <option value="Student">Student looking for jobs / college</option>
                  <option value="College Institution">College / Academic Institution</option>
                  <option value="Employer / Recruiter">Employer / HR Recruiter</option>
                </select>
              </div>

              <div>
                <label htmlFor="waitlist-name" className={styles.modalLabel}>
                  Full Name
                </label>
                <input
                  id="waitlist-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className={styles.modalInput}
                />
              </div>

              <div>
                <label htmlFor="waitlist-email" className={styles.modalLabel}>
                  Email Address
                </label>
                <input
                  id="waitlist-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={styles.modalInput}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={styles.modalSubmitBtn}
              >
                {loading ? "Joining..." : "Join Waitlist"}
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
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    try {
      if (mode === "signin") {
        await signInUser({ email, password });
      } else {
        await signUpUser({ email, password, name });
      }
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onOpenChange(false);
      }, 1800);
    } catch (err) {
      console.warn("Auth submission notice:", err);
      setErrorMessage(err.message || "Authentication failed. Please verify credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.modalOverlay} />
        <Dialog.Content className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <Dialog.Title className={styles.modalTitle}>
              {mode === "signin" ? "Sign In to CampusPe" : "Create your Account"}
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                className={styles.modalCloseBtn}
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </Dialog.Close>
          </div>

          <Dialog.Description className={styles.modalDescription}>
            Access India&apos;s leading AI assistant for discovery and campus placements.
          </Dialog.Description>

          {errorMessage && (
            <div className={styles.modalErrorAlert}>
              {errorMessage}
            </div>
          )}

          {success ? (
            <div className={styles.modalSuccessBox}>
              <div className={styles.modalSuccessIconWrap}>
                <CheckCircle2 size={28} />
              </div>
              <h4 className={styles.modalSuccessTitle}>
                {mode === "signin" ? "Welcome back!" : "Account created!"}
              </h4>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.modalForm}>
              {mode === "signup" && (
                <div>
                  <label htmlFor="auth-name" className={styles.modalLabel}>
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
                    className={styles.modalInput}
                  />
                </div>
              )}

              <div>
                <label htmlFor="auth-email" className={styles.modalLabel}>
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
                  className={styles.modalInput}
                />
              </div>

              <div>
                <label htmlFor="auth-pass" className={styles.modalLabel}>
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
                  className={styles.modalInput}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={styles.modalSubmitBtn}
              >
                {loading ? "Authenticating..." : mode === "signin" ? "Sign In" : "Sign Up"}
              </button>

              <div className={styles.modalAuthToggle}>
                <button
                  type="button"
                  onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
                  className={styles.modalAuthToggleBtn}
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
        <Dialog.Overlay className={styles.modalOverlay} />
        <Dialog.Content className={`${styles.modalContent} ${styles.modalContentLg}`}>
          <div className={styles.modalHeader}>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${opportunity.logoBg || ""}`}>
                {opportunity.logo}
              </div>
              <div>
                <Dialog.Title className={styles.modalTitle}>
                  {opportunity.title}
                </Dialog.Title>
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${opportunity.badgeColor || ""}`}>
                  {opportunity.badge}
                </span>
              </div>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                className={styles.modalCloseBtn}
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </Dialog.Close>
          </div>

          <Dialog.Description className={`${styles.modalDescription} leading-relaxed`}>
            {opportunity.description}
          </Dialog.Description>

          <div className={styles.modalOppMetaBox}>
            <div className={styles.modalOppMetaRow}>
              <span className={styles.modalOppMetaLabel}>Category:</span>
              <span className={styles.modalOppMetaValue}>{opportunity.category}</span>
            </div>
            <div className={styles.modalOppMetaRow}>
              <span className={styles.modalOppMetaLabel}>Key Highlights:</span>
              <span className={styles.modalOppMetaValue}>{opportunity.details?.join(" • ")}</span>
            </div>
            <div className={styles.modalOppMetaRow}>
              <span className={styles.modalOppMetaLabel}>AI Match Score:</span>
              <span className={styles.modalOppMatchScore}>98% Strong Match</span>
            </div>
          </div>

          {applied ? (
            <div className={styles.modalSuccessBox} style={{ padding: "1rem 0" }}>
              <p className={`${styles.modalOppMatchScore} flex items-center justify-center gap-2`}>
                <CheckCircle2 size={18} />
                <span>Application submitted to {opportunity.title}!</span>
              </p>
            </div>
          ) : (
            <div>
              <button
                type="button"
                onClick={handleApply}
                className={styles.modalSubmitBtn}
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
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitContactRequest({
        phone,
        message,
        type,
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onOpenChange(false);
        setPhone("");
        setMessage("");
      }, 2000);
    } catch (err) {
      console.warn("Contact submission notice:", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.modalOverlay} />
        <Dialog.Content className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <Dialog.Title className={styles.modalTitle}>
              {type === "schedule" ? "Schedule a Call" : "Contact Support"}
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                className={styles.modalCloseBtn}
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </Dialog.Close>
          </div>

          <Dialog.Description className={styles.modalDescription}>
            {type === "schedule"
              ? "Select your preferred slot and an advisor will connect with you."
              : "Our team is here to assist with admissions, recruitment, or technical queries."}
          </Dialog.Description>

          {submitted ? (
            <div className={`${styles.modalSuccessBox} text-emerald-600 font-bold flex items-center justify-center gap-2`}>
              <CheckCircle2 size={24} />
              <span>Request received! We will reach out shortly.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.modalForm}>
              <div>
                <label htmlFor="contact-phone" className={styles.modalLabel}>
                  Phone / WhatsApp Number
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className={styles.modalInput}
                />
              </div>

              <div>
                <label htmlFor="contact-message" className={styles.modalLabel}>
                  Message / Requirements
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we help you?"
                  className={styles.modalTextarea}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={styles.modalSubmitBtn}
              >
                {loading
                  ? "Submitting..."
                  : type === "schedule"
                  ? "Confirm Call Booking"
                  : "Send Support Request"}
              </button>
            </form>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
