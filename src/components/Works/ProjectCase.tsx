import Image from "next/image";
import styles from "./ProjectCase.module.css";

interface ProjectCaseProps {
  name: string;
  category: string;
  clientTag: {
    text: string;
    color: string;
    bg: string;
  };
  team: {
    label: string;
    value: string;
  }[];
  description: string;
  visuals: {
    type: "image" | "video";
    src: string;
    height?: string;
    isLogoOnBlack?: boolean;
    backgroundColor?: string;
    aspectRatio?: string;
    mobileHeight?: string;
  }[][];
  id?: string;
}

export default function ProjectCase({
  name,
  category,
  clientTag,
  team,
  description,
  visuals,
  id,
}: ProjectCaseProps) {
  return (
    <div id={id} className={styles.project}>
      <div className={styles.descriptionWrapper}>
        <div className={styles.nameWrapper}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.category}>{category}</p>
          <span 
            className={styles.clientTag} 
            style={{ color: clientTag.color, backgroundColor: clientTag.bg }}
          >
            {clientTag.text}
          </span>
        </div>

        <div className={styles.teamWrapper}>
          {team.map((item, index) => (
            <div key={index} className={styles.teamItem}>
              <span className={styles.teamLabel}>{item.label}</span>
              <span className={styles.teamValue}>{item.value}</span>
            </div>
          ))}
        </div>

        <div className={styles.descriptionText} dangerouslySetInnerHTML={{ __html: description }} />
      </div>

      <div className={styles.visualsContainer}>
        {visuals.map((row, rowIndex) => (
          <div 
            key={rowIndex} 
            className={row.length > 1 ? styles.rowGrid : styles.rowFull}
          >
            {row.map((item, itemIndex) => (
              <div 
                key={itemIndex} 
                className={styles.imageWrapper} 
                style={{ 
                  "--mobile-height": item.mobileHeight,
                  height: item.aspectRatio ? "auto" : (item.height || "70rem"), 
                  backgroundColor: item.backgroundColor || (item.isLogoOnBlack ? "#000" : "transparent"),
                  aspectRatio: item.aspectRatio
                } as any}
              >

                {item.type === "video" ? (
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className={styles.video}
                    src={item.src}
                  />
                ) : item.isLogoOnBlack ? (


                  <div className={styles.centeredLogo}>
                    <Image 
                      src={item.src} 
                      alt="" 
                      width={527} 
                      height={282}
                      className={styles.logoImage}
                    />
                  </div>
                ) : (
                  <Image 
                    src={item.src} 
                    alt="" 
                    fill
                    className={styles.image}
                    sizes={row.length > 1 ? "(max-width: 768px) 100vw, 50vw" : "100vw"}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
