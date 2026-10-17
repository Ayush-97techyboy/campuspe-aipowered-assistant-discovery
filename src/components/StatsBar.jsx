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
      className="py-4 sm:py-5 lg:py-6 bg-transparent relative"
    >
      {/* Local Ambient Gradient Underglow directly behind Metrics Tiles */}
      <div className="absolute inset-0 max-w-[1200px] mx-auto pointer-events-none z-0">
        <div
          className="absolute -left-10 -top-10 w-[550px] h-[180px] rounded-full"
          style={{
            background: "linear-gradient(135deg, rgba(165, 243, 252, 0.45) 0%, rgba(191, 219, 254, 0.35) 50%, rgba(191, 219, 254, 0.00) 100%)",
            filter: "blur(70px)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -right-10 -top-10 w-[550px] h-[180px] rounded-full"
          style={{
            background: "linear-gradient(225deg, rgba(196, 181, 253, 0.45) 0%, rgba(245, 208, 254, 0.35) 50%, rgba(245, 208, 254, 0.00) 100%)",
            filter: "blur(75px)",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="max-w-[1108px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-0">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 px-1 sm:px-2.5 md:px-3 lg:px-6 justify-start md:justify-center group hover:scale-[1.02] transition-transform duration-200 focus-within:ring-2 focus-within:ring-primary rounded-xl"
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
