"use client";

import React from "react";
import { Users, Building2, Briefcase, ShieldCheck } from "lucide-react";

export default function StatsBar() {
  const stats = [
    {
      value: "800+",
      label: "Students",
      icon: Users,
      bgColor: "bg-purple-100",
      textColor: "text-purple-700",
    },
    {
      value: "130+",
      label: "colleges",
      icon: Building2,
      bgColor: "bg-sky-100",
      textColor: "text-sky-700",
    },
    {
      value: "100+",
      label: "jobs & internships",
      icon: Briefcase,
      bgColor: "bg-emerald-100",
      textColor: "text-emerald-700",
    },
    {
      value: "100%",
      label: "Safe & Trusted",
      icon: ShieldCheck,
      bgColor: "bg-amber-100",
      textColor: "text-amber-700",
    },
  ];

  return (
    <section
      aria-label="CampusPE Platform Statistics"
      className="py-10 bg-white border-y border-slate-100"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-slate-200">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 px-2 sm:px-6 justify-start md:justify-center group hover:scale-[1.02] transition-transform duration-200 focus-within:ring-2 focus-within:ring-primary rounded-xl"
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${stat.bgColor} ${stat.textColor} flex items-center justify-center flex-shrink-0 shadow-xs`}
                  aria-hidden="true"
                >
                  <Icon size={24} className="sm:w-7 sm:h-7" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-600 capitalize">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
