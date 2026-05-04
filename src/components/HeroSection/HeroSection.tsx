"use client";

import Image from "next/image";
import { assetUrl } from "@/utils/asset";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <h1 className={styles.title}>
            ёмкие визуальные<br />
            <span>решения</span>
          </h1>
          <div className={styles.eyeIcon}>
            <Image 
              src={assetUrl("/assets/media/hero-section/eye-icon.svg")} 
              alt="" 
              width={64} 
              height={40} 
            />
          </div>
          <div className={styles.tags}>
            Брендинг / ИИ /<br />
            Сайты / Интерфейсы
          </div>
        </div>

        <div className={styles.clients}>
          <span className={styles.label}>Клиенты</span>
          <div className={styles.clientList}>
            <span className={styles.clientTag} style={{ color: "#f76400", backgroundColor: "#ffede0" }}>Medium Quality</span>
            <span className={styles.clientTag} style={{ color: "#ff5a55", backgroundColor: "#ffe6e5" }}>Flowwow</span>
            <span className={styles.clientTag} style={{ color: "#2858d2", backgroundColor: "#e5ecff" }}>ITMO</span>
            <span className={styles.clientTag} style={{ color: "#095626", backgroundColor: "#e3ffee" }}>Sasha Design Studio</span>
          </div>
        </div>
      </header>

      <div className={styles.videoContainer}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className={styles.video}
          src={assetUrl("/assets/media/hero-section/showreel-yomko-2.webm")}
        />
      </div>


    </section>
  );
}
