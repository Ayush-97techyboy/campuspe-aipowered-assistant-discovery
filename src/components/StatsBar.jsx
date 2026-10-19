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
      className="pt-2 pb-6 sm:pb-8 lg:pb-10 bg-transparent relative"
    >


      {/* Figma Node 1:807 Frame:
          width: 1107.7px; height: 64.03px; top: 816px; left: 166px; opacity: 1;
      */}
      <div className="w-full max-w-[1108px] min-h-[64px] mx-auto px-4 sm:px-6 relative z-10 flex items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-y-4 md:gap-y-0 items-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-2.5 sm:gap-3 md:gap-3 lg:gap-4 px-2 sm:px-4 lg:px-6 justify-start md:justify-center group hover:scale-[1.02] transition-transform duration-200 relative h-full min-h-[44px] md:min-h-[52px] ${
                idx !== 0 ? "md:border-l md:border-slate-400/80" : ""
              } ${idx % 2 === 1 ? "max-md:border-l max-md:border-slate-300 max-md:pl-4" : ""}`}
            >
              <div
                className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full ${stat.bgColor} flex items-center justify-center flex-shrink-0 shadow-xs`}
                aria-hidden="true"
              >
                <Image
                  src={stat.iconSrc}
                  alt=""
                  width={stat.width}
                  height={stat.height}
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-auto md:h-auto object-contain"
                />
              </div>
              <div className="min-w-0">
                <div className="text-lg min-[360px]:text-xl sm:text-2xl md:text-[26px] lg:text-[32px] md:leading-[32px] lg:leading-[38px] font-bold text-slate-900 tracking-tight font-roboto whitespace-nowrap">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-[13px] md:text-[13px] lg:text-[16px] md:leading-[18px] lg:leading-[20px] font-medium text-slate-600 leading-tight">
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
