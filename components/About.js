export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <p className="about-text">
                        I am a passionate Full Stack Web Developer with a strong focus on building scalable and beautiful web applications.
                        With expertise in Next.js, React, and modern CSS, I create seamless user experiences that leave a lasting impression.
                        I love solving complex problems and turning ideas into reality through code.
                    </p>
                    <div className="about-actions">
                        <a href="/cv.pdf" className="btn" download>Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
