import {
    SiNextdotjs,
    SiReact,
    SiJavascript,
    SiTypescript,
    SiGit,
    SiGithub,
    SiTailwindcss,
    SiHtml5,
    SiFigma,
    SiFramer,
    SiJest,
    SiDocker,
    SiVercel,
} from "react-icons/si";
import { FaLightbulb } from "react-icons/fa";
import styles from "./Skills.module.css";

const skills = [
    { name: "JavaScript", icon: SiJavascript },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "HTML5", icon: SiHtml5 },
    { name: "UI/UX", icon: SiFigma },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Animations", icon: SiFramer },
    { name: "Jest", icon: SiJest },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Docker", icon: SiDocker },
    { name: "Vercel", icon: SiVercel },
    { name: "Problem Solving", icon: FaLightbulb },
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
