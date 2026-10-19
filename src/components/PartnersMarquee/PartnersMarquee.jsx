"use client";

import React from "react";
import Image from "next/image";
import styles from "./PartnersMarquee.module.css";

export default function PartnersMarquee() {
  const partners = [
    { name: "GINSERV", src: "/assets/partners/GinservLogo.png", width: 2000, height: 632, imgClass: "h-14 sm:h-16 w-auto" },
    { name: "Startup Karnataka", src: "/assets/partners/Startup_Karnataka.png", width: 991, height: 217, imgClass: "h-12 sm:h-14 w-auto" },
    { name: "Tumkur University", src: "/assets/partners/vtu-belagavi.png", width: 926, height: 517, imgClass: "h-16 sm:h-20 w-auto" },
    { name: "Talentspotify", src: "/assets/partners/talentspotify.png", width: 978, height: 1067, imgClass: "h-14 sm:h-18 w-auto" },
    { name: "Radiant Info", src: "/assets/partners/radiant-info.png", width: 75, height: 60, imgClass: "h-14 sm:h-16 w-auto" },
    { name: "Startup India", src: "/assets/partners/startup-india.png", width: 3664, height: 855, imgClass: "h-14 sm:h-16 w-auto" },
  ];

  return (
    <section aria-label="Partner Organizations" className={styles.marqueeSection}>
      <div className={styles.marqueeLeftGlow} aria-hidden="true" />
      <div className={styles.marqueeRightGlow} aria-hidden="true" />

      <div className={styles.marqueeTitleWrap}>
        <h2 className={styles.marqueeTitle}>
          Trusted by partners across India
        </h2>
      </div>

      <div className={styles.marqueeTrackContainer}>
        <div className={styles.marqueeTrack}>
          {partners.concat(partners).concat(partners).concat(partners).map((partner, idx) => (
            <div key={idx} className={styles.marqueeItem}>
              <Image
                src={partner.src}
                alt={`${partner.name} logo`}
                width={partner.width}
                height={partner.height}
                className={`${partner.imgClass} max-w-full object-contain`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
