import Image from "next/image";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.title}>О нас</h2>
      
      <div className={styles.contentWrapper}>
        {/* Founders */}
        <div className={styles.founders}>
          <div className={styles.founder}>
            <div className={styles.founderPhoto}>
              <Image 
                src="/assets/media/about-section/ab-01.avif" 
                alt="Юрий Боровиков" 
                fill 
                className={styles.photo}
              />
            </div>
            <div className={styles.founderInfo}>
              <p className={styles.founderName}>Юрий Боровиков</p>
              <p className={styles.founderRole}>Сo-founder «ёмко»</p>
            </div>
          </div>

          <div className={styles.founder}>
            <div className={styles.founderPhoto}>
              <Image 
                src="/assets/media/about-section/ab-02.avif" 
                alt="Алексей Прохоров" 
                fill 
                className={styles.photo}
              />
            </div>
            <div className={styles.founderInfo}>
              <p className={styles.founderName}>Алексей Прохоров</p>
              <p className={styles.founderRole}>Сo-founder «ёмко»</p>
            </div>
          </div>
        </div>

        {/* Description and Stickers */}
        <div className={styles.descriptionRow}>
          <div className={styles.descriptionCol}>
            <p>
              «ёмко» — дизайн студия,<br />
              специализирующееся на создании стратегической визуальной коммуникации<br />
              для брендов и продуктов.<br />
              Разрабатываем айдентику, цифровые интерфейсы и рекламные кампании.
            </p>
          </div>
          <div className={styles.descriptionCol}>
            <p>
              Дикие, молодые, добрые инженеры, перешедшие в дизайн. Горим за результат<br />
              и обожаем сам процесс.
            </p>
          </div>
        </div>

        <div className={styles.lovinGroup}>
          <Image 
            src="/assets/media/about-section/lovin.png" 
            alt="Lovin" 
            width={291} 
            height={372}
            className={styles.lovinImage}
          />
        </div>

        {/* Absolute Objects */}
        <div className={styles.workHardSticker}>
          <Image 
            src="/assets/media/about-section/work-hard.svg" 
            alt="Work hard have fun" 
            width={124} 
            height={64} 
          />
        </div>
      </div>
    </section>
  );
}
