import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.rect}></div>
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;