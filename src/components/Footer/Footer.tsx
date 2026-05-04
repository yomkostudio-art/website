import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  const projects = [
    { name: "Winline «Битва за деньги»", id: "winline" },
    { name: "Маркетплейс цветов и подарков", id: "flowwow-marketplace" },
    { name: "Молодой Платон × Flowwow", id: "molodoy-platon" },
    { name: "Studio Pizza, Music & Wine", id: "studio-pizza" },
    { name: "Выставка водонепроницаемых технологий", id: "no-weather" },
    { name: "Маркетинговое агентство Bezus", id: "bezus" },
    { name: "Традиционный японский театр", id: "noh-theatre" },
  ];

  return (
    <footer id="contacts" className={styles.footer}>
      <div className={styles.container}>
        {/* Left Column: Logo and Slogan */}
        <div className={styles.infoCol}>
          <div className={styles.logo}>
            <Image 
              src="/assets/media/logo/logo.svg" 
              alt="Yomko Logo" 
              width={54} 
              height={17} 
            />
          </div>
          <div className={styles.sloganWrapper}>
            <h2 className={styles.slogan}>
              <span>
                Говорим ёмко
                <span className={styles.eyeIcon}>
                  <Image 
                    src="/assets/media/footer-section/eye-footer.svg" 
                    alt="Eye icon" 
                    width={35} 
                    height={23} 
                  />
                </span>
              </span>
              <span>на визуальном языке</span>
            </h2>
          </div>
        </div>

        {/* Middle Column: Projects */}
        <div className={styles.projectsCol}>
          <span className={styles.colTitle}>Проекты</span>
          <nav className={styles.projectNav}>
            {projects.map((project) => (
              <a key={project.id} href={`#${project.id}`} className={styles.projectLink}>
                {project.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Column: Links and Copyright */}
        <div className={styles.linksCol}>
          <div className={styles.socialLinks}>
            <a href="https://t.me/yomkostudio" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <span className={styles.linkText}>Telegram</span>
              <span className={styles.arrowIcon}>
                <Image src="/assets/media/footer-section/icon-arrow.svg" alt="Arrow" width={15} height={14} />
              </span>
            </a>
            <a href="https://www.instagram.com/yomkostudio/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <span className={styles.linkText}>Instagram</span>
              <span className={styles.arrowIcon}>
                <Image src="/assets/media/footer-section/icon-arrow.svg" alt="Arrow" width={15} height={14} />
              </span>
            </a>
            <a href="mailto:yomkostudio@gmail.com" className={styles.socialLink}>
              <span className={styles.linkText}>Email</span>
              <span className={styles.arrowIcon}>
                <Image src="/assets/media/footer-section/icon-arrow.svg" alt="Arrow" width={15} height={14} />
              </span>
            </a>
          </div>
          <p className={styles.copyright}>
            ©2026 «ёмко». Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
}
