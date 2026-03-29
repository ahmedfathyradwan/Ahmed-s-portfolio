import { SiGmail, SiWhatsapp, SiTelegram } from "react-icons/si";
import styles from "./Contact.module.css";

export default function Contact() {
    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className={styles.contactContent}>
                    <p className={styles.contactText}>
                        I&apos;m currently available for freelance work and full-time opportunities.
                        If you have a project that needs some coding touch, or just want to chat about tech, feel free to reach out!
                    </p>

                    <div className={styles.socialLinks}>
                        <a href="https://github.com/ahmedfathyradwan" className={styles.socialLink}>GitHub</a>
                        <a href="https://www.linkedin.com/in/ahmed-fathy-b484702a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className={styles.socialLink}>LinkedIn</a>
                        <a href="https://wa.me/201205040743" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                            {/* <SiWhatsapp />  */}
                            WhatsApp
                        </a>
                        <a href="https://t.me/ah_fathy_74" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                            {/* <SiTelegram /> */}
                            Telegram
                        </a>
                                                <a href="mailto:[ahmedfathyradwan1@gmail.com]" className={styles.socialLink}>
                            {/* <SiGmail /> */}
                            Gmail
                        </a>
                        {/* <a href="#" className={styles.socialLink}>Twitter</a> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
