"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("ru-RU", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav id="top" className={styles.navBar}>
      <div className={styles.logo}>
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
          <Image 
            src="/assets/media/logo/logo.svg" 
            alt="Yomko Logo" 
            width={54} 
            height={17} 
            priority
          />
        </a>
      </div>
      <div className={styles.navContent}>
        <div className={styles.navWrapper}>
          <a href="#works" className={styles.navLink}>Работы</a>
          <a href="#about" className={styles.navLink}>О нас</a>
          <a href="#contacts" className={styles.navLink}>Контакты</a>
        </div>
        <div className={styles.timer}>
          {time || "00:00:00"}
        </div>
      </div>
    </nav>
  );
}
