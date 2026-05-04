"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { assetUrl } from "@/utils/asset";
import styles from "./ContactPopup.module.css";

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const togglePopup = () => setIsOpen(!isOpen);

  const getDimensions = () => {
    if (isMobile) {
      return {
        width: isOpen ? "calc(100vw - 40px)" : "235px",
        height: isOpen ? "350px" : "44px",
      };
    }
    return {
      width: isOpen ? "33.6rem" : "19.4rem",
      height: isOpen ? "24.7rem" : "4rem",
    };
  };

  const dims = getDimensions();

  return (
    <div className={styles.wrapper}>
      <motion.div
        animate={{
          width: dims.width,
          height: dims.height,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={styles.container}
        style={{ borderRadius: "0.8rem", overflow: "hidden", position: "relative" }}
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div 
              key="closed"
              onClick={togglePopup} 
              className={styles.closedContent}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <div className={styles.statusDotActive} />
              <span className={styles.buttonText}>Обсудить задачу</span>
              <div className={styles.iconWrapper}>
                <Image 
                  src={assetUrl("/assets/media/popup/icon-open.svg")} 
                  alt="Open" 
                  width={23} 
                  height={16} 
                />
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="open"
              className={styles.openContent}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <button onClick={togglePopup} className={styles.closeButton}>
                <div className={styles.statusDotInactive} />
                <span className={styles.closeText}>Закрыть</span>
                <div className={styles.iconCloseWrapper}>
                  <Image 
                    src={assetUrl("/assets/media/popup/icon-close.svg")} 
                    alt="Close" 
                    width={23} 
                    height={16} 
                  />
                </div>
              </button>

              <div className={styles.content}>
                <p className={styles.description}>
                  Помогаем брендам и продуктам<br />
                  с созданием стратегической визуальной коммуникацией, разработкой айдентики, проектированием веб-сайтов<br />
                  и цифровых интерфейсов.
                </p>
                
                <div className={styles.footer}>
                  <div className={styles.socialLinks}>
                    <a href="https://t.me/yomkostudio" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                      <span className={styles.linkText}>Telegram</span>
                      <Image src={assetUrl("/assets/media/footer-section/icon-arrow.svg")} alt="Arrow" width={15} height={14} />
                    </a>
                    <a href="https://www.instagram.com/yomkostudio/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                      <span className={styles.linkText}>Instagram</span>
                      <Image src={assetUrl("/assets/media/footer-section/icon-arrow.svg")} alt="Arrow" width={15} height={14} />
                    </a>
                    <a href="mailto:yomkostudio@gmail.com" className={styles.socialLink}>
                      <span className={styles.linkText}>Email</span>
                      <Image src={assetUrl("/assets/media/footer-section/icon-arrow.svg")} alt="Arrow" width={15} height={14} />
                    </a>
                  </div>
                  <div className={styles.qrWrapper}>
                    <Image 
                      src={assetUrl("/assets/media/popup/qr.svg")} 
                      alt="QR Code" 
                      width={65} 
                      height={65} 
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
