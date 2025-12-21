export default function Projects() {
    const projects = [
        {
            title: "E-Commerce Platform",
            desc: "A fully functional e-commerce store with cart and checkout.",
            tags: ["Next.js", "Stripe", "Tailwind"],
            img: "https://placehold.co/600x400/171717/FFF?text=E-Commerce"
        },
        {
            title: "Portfolio Website",
            desc: "Personal portfolio built with Next.js and Vanilla CSS.",
            tags: ["Next.js", "CSS", "Responsive"],
            img: "https://placehold.co/600x400/171717/FFF?text=Portfolio"
        },
        {
            title: "Task Management App",
            desc: "A productivity tool for managing daily tasks and projects.",
            tags: ["React", "Firebase", "Auth"],
            img: "https://placehold.co/600x400/171717/FFF?text=Task+App"
        },
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Selected Projects</h2>
                <div className="projects-grid">
                    {projects.map((p, i) => (
                        <div key={i} className="project-card">
                            <div className="project-image">
                                {/* Using standard img for simplicity with external placeholder */}
                                <img src={p.img} alt={p.title} width="600" height="400" loading="lazy" />
                            </div>
                            <div className="project-content">
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                                <div className="tags">
                                    {p.tags.map((t, idx) => <span key={idx} className="tag">{t}</span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
