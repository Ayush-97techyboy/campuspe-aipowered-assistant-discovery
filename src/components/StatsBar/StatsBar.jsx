"use client";

import React from "react";
import Image from "next/image";
import styles from "./StatsBar.module.css";

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
    <section aria-label="CampusPE Platform Statistics" className={styles.statsbarSection}>
      <div className={styles.statsbarContainer}>
        <div className={styles.statsbarGrid}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statsbarItem}>
              <div className={`${styles.statsbarIconWrap} ${stat.bgColor}`} aria-hidden="true">
                <Image
                  src={stat.iconSrc}
                  alt=""
                  width={stat.width}
                  height={stat.height}
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-auto md:h-auto object-contain"
                />
              </div>
              <div className="min-w-0">
                <div className={styles.statsbarValue}>
                  {stat.value}
                </div>
                <div className={styles.statsbarLabel}>
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
