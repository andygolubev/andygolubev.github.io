import styles from "./page.module.css";
import Image from "next/image";
import Achievements from "@/components/Achievements/Achievements";
import Articles from "@/components/Articles/Articles";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <Image
            className={styles.heroImage}
            src="/images/sky/hero.jpg"
            alt="Picture of the author"
            fill
          />

          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleName}>Andy Golubev</span>
            <span className={styles.heroTitleDescription}>Cloud Solutions Architect</span>
          </h1>
        </section>

        <section className={styles.aboutSection}>
          <p>Hi there! 👋<br></br>I&apos;m a Cloud Solutions Architect passionate about</p>
          <h2 className={styles.aboutTitle}>Cloud architecture, DevOps practices,  and Kubernetes.</h2>
        </section>

        <Achievements />
        <Articles />
      </main>
    </div>
  );
}
