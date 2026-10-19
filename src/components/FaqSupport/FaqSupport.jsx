"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import styles from "./FaqSupport.module.css";

export default function FaqSupport({
  onContactSupport,
  onScheduleCall,
  onExploreColleges,
  onFindOpportunities,
  onListCollege,
  onPostJob,
}) {
  return (
    <section className={styles.faqSection} aria-label="Support and Quick Actions">
      <div className={styles.faqGlowLeft} aria-hidden="true" />
      <div className={styles.faqGlowRight} aria-hidden="true" />

      <div className={styles.faqContainer}>
        {/* Card 1: Still have questions? */}
        <div className={styles.faqSupportCard}>
          <div className={styles.faqCardBgWrap} aria-hidden="true">
            <img
              src="/assets/faq_support_card_clean_bg.svg"
              alt=""
              className="select-none"
            />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl min-[360px]:text-3xl sm:text-[36px] sm:leading-[42.2px] font-bold text-[#0F172A] font-roboto mb-2.5 sm:mb-3 tracking-tight">
              Still have questions?
            </h2>
            <p className="text-[14px] min-[360px]:text-[15px] sm:text-[17px] sm:leading-[25px] text-[#475569] mb-6 sm:mb-8 font-normal font-sans max-w-lg mx-auto px-2">
              Our support team is here to help you succeed. Get in touch anytime.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto sm:max-w-none">
              <button
                type="button"
                onClick={onContactSupport}
                className="group inline-flex items-center justify-between sm:justify-start gap-3 pl-5 sm:pl-6 pr-1.5 py-1.5 rounded-full text-sm sm:text-[15px] font-semibold text-white bg-[#007FFC] hover:bg-white hover:text-[#007FFC] border-2 border-[#007FFC] shadow-md shadow-blue-500/25 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all duration-200 w-full sm:w-auto"
              >
                <span>Contact Support</span>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 sm:w-9 sm:h-9 shrink-0"
                  aria-hidden="true"
                >
                  <rect
                    width="40"
                    height="40"
                    rx="20"
                    className="fill-white group-hover:fill-[#007FFC] transition-colors duration-200"
                  />
                  <path
                    d="M24.0034 17.414L15.3964 26.021L13.9824 24.607L22.5884 16H15.0034V14H26.0034V25H24.0034V17.414Z"
                    className="fill-[#007FFC] group-hover:fill-white transition-colors duration-200"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={onScheduleCall}
                className="group inline-flex items-center justify-between sm:justify-start gap-3 pl-5 sm:pl-6 pr-1.5 py-1.5 rounded-full text-sm sm:text-[15px] font-semibold text-[#007FFC] bg-white hover:bg-[#007FFC] hover:text-white border-2 border-[#007FFC] shadow-sm active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all duration-200 w-full sm:w-auto"
              >
                <span>Schedule a Call</span>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 sm:w-9 sm:h-9 shrink-0"
                  aria-hidden="true"
                >
                  <rect
                    width="40"
                    height="40"
                    rx="20"
                    className="fill-[#007FFC] group-hover:fill-white transition-colors duration-200"
                  />
                  <path
                    d="M22.2753 11.5557C22.3008 11.4606 22.3447 11.3713 22.4047 11.2931C22.4647 11.215 22.5394 11.1494 22.6248 11.1001C22.7101 11.0508 22.8043 11.0188 22.902 11.006C22.9996 10.9931 23.0989 10.9996 23.1941 11.0251C24.5844 11.3879 25.853 12.1147 26.869 13.1308C27.8851 14.1468 28.6119 15.4154 28.9747 16.8057C29.0002 16.9009 29.0067 17.0002 28.9939 17.0979C28.981 17.1955 28.949 17.2897 28.8997 17.3751C28.8505 17.4604 28.7849 17.5352 28.7067 17.5951C28.6285 17.6551 28.5393 17.699 28.4441 17.7245C28.3807 17.7411 28.3155 17.7496 28.25 17.7498C28.0847 17.7498 27.9241 17.6952 27.793 17.5945C27.662 17.4938 27.5679 17.3526 27.5253 17.1929C27.2295 16.0579 26.6363 15.0223 25.8069 14.193C24.9775 13.3636 23.9419 12.7704 22.8069 12.4745C22.7116 12.4491 22.6223 12.4052 22.544 12.3453C22.4657 12.2854 22.4 12.2107 22.3506 12.1253C22.3013 12.04 22.2692 11.9458 22.2563 11.848C22.2433 11.7503 22.2498 11.651 22.2753 11.5557ZM22.0569 15.4745C23.3497 15.8195 24.1803 16.6501 24.5253 17.9429C24.5679 18.1026 24.662 18.2438 24.793 18.3445C24.9241 18.4452 25.0847 18.4998 25.25 18.4998C25.3155 18.4996 25.3807 18.4911 25.4441 18.4745C25.5393 18.449 25.6285 18.4051 25.7067 18.3451C25.7849 18.2852 25.8505 18.2104 25.8997 18.1251C25.949 18.0397 25.981 17.9455 25.9939 17.8479C26.0067 17.7502 26.0002 17.6509 25.9747 17.5557C25.4947 15.7595 24.2403 14.5051 22.4441 14.0251C22.3489 13.9997 22.2497 13.9933 22.152 14.0062C22.0544 14.0191 21.9602 14.0512 21.8749 14.1005C21.7897 14.1498 21.7149 14.2154 21.655 14.2936C21.5951 14.3718 21.5512 14.461 21.5258 14.5562C21.5004 14.6514 21.4939 14.7506 21.5069 14.8483C21.5198 14.9459 21.5518 15.0401 21.6012 15.1253C21.6505 15.2106 21.7161 15.2853 21.7943 15.3452C21.8725 15.4052 21.9617 15.4491 22.0569 15.4745ZM29.7388 24.4136C29.5716 25.6839 28.9477 26.85 27.9837 27.6939C27.0196 28.5379 25.7813 29.0021 24.5 28.9998C17.0563 28.9998 11 22.9436 11 15.4998C10.9977 14.2185 11.4619 12.9802 12.3059 12.0161C13.1499 11.0521 14.3159 10.4282 15.5863 10.2611C15.9075 10.2218 16.2328 10.2876 16.5136 10.4484C16.7944 10.6093 17.0157 10.8566 17.1444 11.1536L19.1244 15.5739V15.5851C19.2229 15.8124 19.2636 16.0606 19.2428 16.3074C19.222 16.5543 19.1404 16.7922 19.0053 16.9998C18.9884 17.0251 18.9706 17.0486 18.9519 17.072L17 19.3857C17.7022 20.8126 19.1947 22.292 20.6403 22.9961L22.9222 21.0545C22.9446 21.0357 22.9681 21.0181 22.9925 21.002C23.2 20.8636 23.4387 20.7792 23.687 20.7562C23.9353 20.7333 24.1854 20.7727 24.4147 20.8707L24.4269 20.8764L28.8434 22.8554C29.1409 22.9837 29.3889 23.2047 29.5503 23.4856C29.7116 23.7664 29.7778 24.092 29.7388 24.4136ZM28.25 24.2261C28.25 24.2261 28.2434 24.2261 28.2397 24.2261L23.8334 22.2526L21.5506 24.1942C21.5285 24.2129 21.5053 24.2305 21.4813 24.2467C21.2654 24.3907 21.0159 24.4762 20.7571 24.495C20.4983 24.5137 20.239 24.465 20.0047 24.3536C18.2488 23.5051 16.4984 21.7679 15.6491 20.0307C15.5366 19.7981 15.4861 19.5404 15.5026 19.2825C15.519 19.0246 15.6017 18.7754 15.7428 18.5589C15.7587 18.5335 15.7766 18.5093 15.7963 18.4867L17.75 16.1701L15.7813 11.7639C15.7809 11.7601 15.7809 11.7564 15.7813 11.7526C14.8721 11.8712 14.0374 12.3172 13.4334 13.0069C12.8294 13.6967 12.4976 14.583 12.5 15.4998C12.5035 18.6813 13.7689 21.7316 16.0186 23.9813C18.2682 26.2309 21.3185 27.4963 24.5 27.4998C25.4163 27.503 26.3023 27.1723 26.9925 26.5696C27.6827 25.9669 28.1297 25.1335 28.25 24.2251V24.2261Z"
                    className="fill-white group-hover:fill-[#007FFC] transition-colors duration-200"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Card 2: Ready for what's next? */}
        <div className={styles.faqNextCard}>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-xl text-center sm:text-left">
              <h3 className="text-xl min-[360px]:text-2xl sm:text-[32px] sm:leading-[37.5px] font-bold text-[#0F1D36] font-roboto mb-2">
                Ready for what&apos;s next?
              </h3>
              <p className="text-[13px] min-[360px]:text-[14px] sm:text-[16px] sm:leading-[20px] text-[#64748B] font-medium font-sans">
                Discover colleges, find opportunities, list your <br className="hidden sm:inline" /> institution, or start hiring with CampusPe.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap items-center gap-2.5 sm:gap-3 w-full lg:w-auto">
              <button
                type="button"
                onClick={onExploreColleges}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 sm:px-5 rounded-[12px] text-xs sm:text-sm font-semibold text-white bg-primary hover:bg-primary-hover shadow-sm shadow-blue-500/20 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all duration-150 w-full lg:w-auto"
              >
                <span>Explore Colleges</span>
                <ArrowRight size={14} />
              </button>

              <button
                type="button"
                onClick={onFindOpportunities}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 sm:px-5 rounded-[12px] text-xs sm:text-sm font-semibold text-white bg-primary hover:bg-primary-hover shadow-sm shadow-blue-500/20 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all duration-150 w-full lg:w-auto"
              >
                <span>Find Opportunities</span>
                <ArrowRight size={14} />
              </button>

              <button
                type="button"
                onClick={onListCollege}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 sm:px-5 rounded-[12px] text-xs sm:text-sm font-semibold text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-slate-50 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all duration-150 w-full lg:w-auto"
              >
                <span>List Your College</span>
                <ArrowRight size={14} />
              </button>

              <button
                type="button"
                onClick={onPostJob}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 sm:px-5 rounded-[12px] text-xs sm:text-sm font-semibold text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-slate-50 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all duration-150 w-full lg:w-auto"
              >
                <span>Post a Job</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
