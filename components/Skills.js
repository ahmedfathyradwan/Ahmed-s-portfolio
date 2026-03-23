import {
    SiNextdotjs,
    SiReact,
    SiJavascript,
    SiTypescript,
    SiNodedotjs,
    SiGit,
    SiGithub,
    SiTailwindcss,
    SiMongodb,
    SiPostgresql,
    SiPrisma,
    SiHtml5,
    SiFigma,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import styles from "./Skills.module.css";

const skills = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: SiReact },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Prisma", icon: SiPrisma },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "Figma", icon: SiFigma },
];

export default function Skills() {
    return (
        <section id="skills" className="section">
            <div className={`container ${styles.skillsContainer}`}>
                <h2 className="section-title">Skills</h2>
                <div className={styles.skillsGrid}>
                    {skills.map((skill, i) => {
                        const Icon = skill.icon;
                        return (
                            <div key={i} className={styles.skillCard}>
                                <Icon className={styles.skillIcon} />
                                <span className={styles.skillName}>{skill.name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
