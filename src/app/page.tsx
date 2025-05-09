import styles from "./page.module.css";
import Image from "next/image";
import Achievements from "@/components/Achievements/Achievements";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <Image
            className={styles.heroImage}
            src="/images/hero.jpg"
            alt="Picture of the author"
            fill
          />

          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleName}>Andy Golubev</span>
            <span className={styles.heroTitleDescription}>Cloud Solutions Architect</span>
          </h1>
        </section>

        <section className={styles.aboutSection}>
          <p>Hi there! 👋<br></br>I'm a Cloud Solutions Architect passionate about</p>
          <h2 className={styles.aboutTitle}>Cloud architecture, DevOps practices,  and Kubernetes.</h2>
        </section>

        <Achievements />


      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
