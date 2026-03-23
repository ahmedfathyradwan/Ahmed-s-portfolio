import styles from "./Projects.module.css";

export default function Projects() {
    const projects = [
        {
            title: "Pizza Palace Menu",
            desc: "An interactive digital menu for a pizza restaurant. Browse categories, customize orders, and explore the full menu with a beautiful and responsive UI.",
            tags: ["Next.js", "React", "CSS", "Responsive"],
            img: "https://placehold.co/600x400/171717/FFF?text=Pizza+Menu",
            github: "https://github.com/ahmedfathyradwan/pizza-ecom",
            demo: "https://pizza-ecom-gamma.vercel.app",
        },
        {
            title: "ServiceBridge",
            desc: "A freelance-style service marketplace platform where clients post needs and providers offer their skills. Features listings, profiles, and a clean brokerage flow.",
            tags: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
            img: "https://placehold.co/600x400/171717/FFF?text=ServiceBridge",
            github: "https://github.com/ahmedfathyradwan/shatabha",
            demo: "https://shatabha.vercel.app/home",
        },
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Selected Projects</h2>
                <div className={styles.projectsGrid}>
                    {projects.map((p, i) => (
                        <div key={i} className={styles.projectCard}>
                            <div className={styles.projectImage}>
                                <img src={p.img} alt={p.title} width="600" height="400" loading="lazy" />
                            </div>
                            <div className={styles.projectContent}>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                                <div className={styles.tags}>
                                    {p.tags.map((t, idx) => (
                                        <span key={idx} className={styles.tag}>{t}</span>
                                    ))}
                                </div>
                                <div className={styles.projectLinks}>
                                    <a href={p.github} className={styles.projectLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                                    <a href={p.demo} className={`${styles.projectLink} ${styles.projectLinkDemo}`} target="_blank" rel="noopener noreferrer">Live Demo</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
