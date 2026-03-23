"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Ahmed Fathy
                </Link>

                <button
                    className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
                    <Link href="#about" className={styles.navLink} onClick={closeMenu}>About</Link>
                    <Link href="#skills" className={styles.navLink} onClick={closeMenu}>Skills</Link>
                    <Link href="#projects" className={styles.navLink} onClick={closeMenu}>Projects</Link>
                    <Link href="#contact" className={styles.navLink} onClick={closeMenu}>Contact</Link>
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}
