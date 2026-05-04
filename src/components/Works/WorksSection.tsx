import ProjectCase from "./ProjectCase";
import styles from "./WorksSection.module.css";

export default function WorksSection() {
  const projects: any[] = [
    {
      id: "winline",
      name: "Winline «Битва за деньги»",
      category: "Айдентика, брендинг. 2026",
      clientTag: {
        text: "Medium Quality",
        color: "#f76400",
        bg: "#ffede0",
      },
      team: [
        { label: "Production, Motion:", value: "Medium Quality" },
        { label: "Art-Direction:", value: "Sasha Design Studio" },
      ],
      description: "Создание айдентики для шоу Winline «Битва за деньги». Разработка логотипа, дизайна физических носителей, графических материалов, обложек, системы шаблонных макетов для титров.",
      visuals: [
        [{ type: "video", src: "/assets/media/projects-section/project-1/p1-00.webm", height: "80rem", mobileHeight: "19.2rem" }],
        [
          { type: "image", src: "/assets/media/projects-section/project-1/p1-02.avif", height: "39.7rem" },
          { type: "image", src: "/assets/media/projects-section/project-1/p1-03.avif", height: "39.7rem", isLogoOnBlack: true },
        ],
        [{ type: "image", src: "/assets/media/projects-section/project-1/p1-01.avif", height: "70rem" }],
        [{ type: "image", src: "/assets/media/projects-section/project-1/p1-04.avif", height: "70rem" }],
      ],
    },
    {
      id: "flowwow-marketplace",
      name: "Маркетплейс цветов и подарков",
      category: "Веб-сайт, визуальная коммуникация. 2026",
      clientTag: {
        text: "Flowwow",
        color: "#ff5a55",
        bg: "#ffe6e5",
      },
      team: [
        { label: "In collaboration:", value: "Flowwow team" },
      ],
      description: "Разработка визуальной продуктовой коммуникации Flowwow.<br />Дизайн и верстка информационной веб-платформы для селлеров Flowwow",
      visuals: [
        [{ type: "video", src: "/assets/media/projects-section/project-2/p2-01.webm", height: "70rem", aspectRatio: "1420 / 700", backgroundColor: "rgba(54, 60, 72, 0.05)" }],
        [
          { type: "image", src: "/assets/media/projects-section/project-2/p2-02.avif", height: "60rem", mobileHeight: "30rem" },
          { type: "image", src: "/assets/media/projects-section/project-2/p2-03.avif", height: "60rem", mobileHeight: "30rem" },
        ],
        [{ type: "image", src: "/assets/media/projects-section/project-2/p2-04.avif", height: "71.1rem" }],
      ],
    },
    {
      id: "molodoy-platon",
      name: "Молодой Платон × Flowwow",
      category: "Рекламная кампания, мерч. 2026",
      clientTag: {
        text: "Молодой Платон",
        color: "#fff",
        bg: "#2c2c2c",
      },
      team: [
        { label: "In collaboration:", value: "Flowwow team" },
      ],
      description: "Разработка графических материалов и дизайн обложки саундтрека рекламной кампании Молодого Платона × Flowwow",
      visuals: [
        [{ type: "image", src: "/assets/media/projects-section/project-3/p3-01.avif", height: "70rem" }],
      ],
    },
    {
      id: "studio-pizza",
      name: "Studio Pizza, Music & Wine",
      category: "Айдентика, брендинг. 2025",
      clientTag: {
        text: "STUDIO",
        color: "#9c815f",
        bg: "#f5eddc",
      },
      team: [
        { label: "Interior Photography:", value: "Dmitry Suvorov" },
        { label: "Interior Design:", value: "ULA Studio" },
      ],
      description: "Создание визуальной айдентики для ресторана в Санкт-Петербурге. Разработка логотипа, носителей и брендбука, социальных медиа.",
      visuals: [
        [{ type: "image", src: "/assets/media/projects-section/project-4/p4-01-v2.avif", height: "70rem" }],
        [
          { type: "image", src: "/assets/media/projects-section/project-4/p4-02.avif", height: "88.1rem", mobileHeight: "42.5rem" }, 
          { type: "image", src: "/assets/media/projects-section/project-4/p4-03.avif", height: "88.1rem", mobileHeight: "42.5rem" },
        ],
        [{ type: "image", src: "/assets/media/projects-section/project-4/p4-04-v2.avif", height: "70rem" }],
      ],
    },
    {
      id: "no-weather",
      name: "Выставка водонепроницаемых технологий",
      category: "Брендинг, разработка шрифта. 2024",
      clientTag: {
        text: "No weather",
        color: "#717fa5",
        bg: "#e8f0ff",
      },
      team: [],
      description: "Разработка айдентики для выставки водонепроницаемых технологий. Разработка логотипа, акцидентного шрифта, системы навигации, графических элементов.",
      visuals: [
        [
          { type: "image", src: "/assets/media/projects-section/project-5/p5-01.avif", height: "46rem", mobileHeight: "22.2rem" },
          { type: "video", src: "/assets/media/projects-section/project-5/p5-02.webm", height: "46rem", mobileHeight: "22.2rem" },
        ],
        [{ type: "image", src: "/assets/media/projects-section/project-5/p5-03-v2.avif", height: "56.2rem" }],
        [
          { type: "image", src: "/assets/media/projects-section/project-5/p5-04.avif", height: "46rem", mobileHeight: "22.2rem" },
          { type: "image", src: "/assets/media/projects-section/project-5/p5-05.avif", height: "46rem", mobileHeight: "22.2rem" },
        ],
        [{ type: "image", src: "/assets/media/projects-section/project-5/p5-06-v2.avif", height: "56.2rem" }],
      ],
    },
    {
      id: "bezus",
      name: "Маркетинговое агентство Bezus",
      category: "Айдентика, веб-сайт. 2025",
      clientTag: {
        text: "BEZUS",
        color: "#5c7dd8",
        bg: "#e6f1ff",
      },
      team: [
        { label: "In collaboration:", value: "Bezus team" },
      ],
      description: "Разработка айдентики для маркетингового агенства, занимающиеся личными коммуникациями и стратегиями.<br />Проектирование бренд-платформы, разработка дизайн-системы, социальные медиа, дизайн вебсайта.",
      visuals: [
        [{ type: "video", src: "/assets/media/projects-section/project-6/p6-01.webm", height: "80rem", mobileHeight: "19.2rem" }],
        [
          { type: "image", src: "/assets/media/projects-section/project-6/p6-02.avif", height: "50rem", mobileHeight: "24.1rem" },
          { type: "image", src: "/assets/media/projects-section/project-6/p6-03.avif", height: "50rem", mobileHeight: "24.1rem" },
        ],
      ],
    },
    {
      id: "noh-theatre",
      name: "Традиционный японский театр",
      category: "Айдентика. 2024",
      clientTag: {
        text: "Noh Theatre",
        color: "#49ad45",
        bg: "#e4ffe3",
      },
      team: [],
      description: "Разработка концепта айдентики для традионного японского театра Noh.<br />Создание логотипа, графических материалов, разработка физических носителей и диджитал коммуникации.",
      visuals: [
        [
          { type: "image", src: "/assets/media/projects-section/project-7/p7-01.avif", height: "40rem", mobileHeight: "20rem" },
          { type: "image", src: "/assets/media/projects-section/project-7/p7-02.avif", height: "40rem", mobileHeight: "20rem" },
        ],
        [{ type: "video", src: "/assets/media/projects-section/project-7/p7-00.webm", height: "80rem", mobileHeight: "19.2rem" }],
        [{ type: "image", src: "/assets/media/projects-section/project-7/p7-03-v2.avif", height: "70rem", mobileHeight: "35rem" }],
        [
          { type: "image", src: "/assets/media/projects-section/project-7/p7-04.avif", height: "50rem", mobileHeight: "25rem" },
          { type: "image", src: "/assets/media/projects-section/project-7/p7-05.avif", height: "50rem", mobileHeight: "25rem" },
        ],
      ],
    },
  ];






  return (
    <section id="works" className={styles.works}>
      <h2 className={styles.sectionTitle}>Работы</h2>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <ProjectCase key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
