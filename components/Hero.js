import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                    Hello, I&apos;m <br />
                    <span className={styles.highlight}>Ahmed Fathy</span>
                </h1>
                <p className={styles.heroSubtitle}>
                    Full Stack Web Developer
                </p>
            </div>
        </section>
    );
}
