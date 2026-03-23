import styles from "./About.module.css";

export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className={styles.aboutContent}>
                    <p className={styles.aboutText}>
                        I am a passionate Full Stack Web Developer with a strong focus on building scalable and beautiful web applications.
                        With expertise in Next.js, React, and modern CSS, I create seamless user experiences that leave a lasting impression.
                        I love solving complex problems and turning ideas into reality through code.
                    </p>
                    <div className={styles.aboutActions}>
                        <a href="/cv.pdf" className="btn" download>Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
