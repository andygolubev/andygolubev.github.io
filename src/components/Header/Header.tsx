"use client";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
    const pathname = usePathname();

    return (
        <header className={styles.header}>
            <div className={styles.rect}></div>
            <nav className={styles.nav}>
                {pathname !== "/" && <Link href="/">Home</Link>}
                <a href="mailto:andygolubevcontact@gmail.com" target="_blank">Contact</a>
                {pathname !== "/articles" && <Link href="/articles">Articles</Link>}
                <a href="https://github.com/andygolubev" target="_blank">GitHub</a>
                <a href="https://www.linkedin.com/in/andy-golubev/" target="_blank">LinkedIn</a>
            </nav>
        </header>
    );
}
export default Header;