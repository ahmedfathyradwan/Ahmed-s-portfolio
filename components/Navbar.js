import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="container">
                <Link href="/" className="logo">
                    Ahmed Fathy
                </Link>
                <nav className="nav-links">
                    <Link href="#about" className="nav-link">About</Link>
                    <Link href="#projects" className="nav-link">Projects</Link>
                    <Link href="#contact" className="nav-link">Contact</Link>
                    <ThemeToggle />
                </nav>
            </div>
            {/* Inline styles for simplicity as per vanilla css request, or could be in globals.css */}
        </header>
    );
}
