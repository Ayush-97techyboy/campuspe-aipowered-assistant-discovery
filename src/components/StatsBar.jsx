"use client";

import Image from "next/image";

export default function StatsBar() {
  const stats = [
    {
      value: "800+",
      label: "Students",
      iconSrc: "/assets/icons/stat_students.svg",
      bgColor: "bg-purple-100",
      width: 29,
      height: 30,
    },
    {
      value: "130+",
      label: "colleges",
      iconSrc: "/assets/icons/stat_colleges.svg",
      bgColor: "bg-sky-100",
      width: 34,
      height: 32,
    },
    {
      value: "100+",
      label: "jobs & internships",
      iconSrc: "/assets/icons/stat_jobs.svg",
      bgColor: "bg-emerald-100",
      width: 29,
      height: 31,
    },
    {
      value: "100%",
      label: "Safe & Trusted",
      iconSrc: "/assets/icons/stat_safe.svg",
      bgColor: "bg-amber-100",
      width: 28,
      height: 34,
    },
  ];

  return (
    <section
      aria-label="CampusPE Platform Statistics"
      className="py-6 lg:py-8 bg-transparent border-b border-slate-200 relative"
    >
      <div className="max-w-[1108px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-slate-200">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 px-2 sm:px-6 justify-start md:justify-center group hover:scale-[1.02] transition-transform duration-200 focus-within:ring-2 focus-within:ring-primary rounded-xl"
            >
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${stat.bgColor} flex items-center justify-center flex-shrink-0 shadow-xs`}
                aria-hidden="true"
              >
                <Image
                  src={stat.iconSrc}
                  alt=""
                  width={stat.width}
                  height={stat.height}
                  className="object-contain"
                />
              </div>
                <div>
                  <div className="text-2xl sm:text-[32px] sm:leading-[38px] font-bold text-slate-900 tracking-tight font-roboto">
                    {stat.value}
                  </div>
                  <div className="text-[14px] sm:text-[16px] sm:leading-[20px] font-medium text-slate-600">
                    {stat.label}
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
