import styles from "./page.module.css";
import Image from "next/image";
import CertificationItem from "@/components/CertificationItem/CertificationItem";
import { certifications } from "@/data/certifications";

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
          {/* <div className={styles.ruler}> */}

          {/* </div> */}
        </section>

        <section className={styles.aboutSection}>
          <p>Hi there! 👋<br></br>I'm a Cloud Solutions Architect passionate about</p>
          <h2 className={styles.aboutTitle}>Cloud architecture, DevOps practices,  and Kubernetes.</h2>
        </section>

        <section className={styles.achievementsSection}>
          <p className={styles.achievementsDescription}>With multiple AWS, GCP, and Kubernetes certifications, I help organizations build scalable and resilient cloud infrastructure.</p>
          <div className={styles.achievementsCertifications}>
            <h2 className={styles.achievementsTitle}>Certifications</h2>
            <div className={styles.achievementsCertificationsList}>
              {certifications.map(certification => (
                <CertificationItem key={certification.id} {...certification} />
              ))}
            </div>
          </div>
          <div className={styles.achievementsOrganisations}>
            <h2 className={styles.achievementsTitle}>Organisations</h2>
            <ul>
              <li>bank</li>
            </ul>
          </div>
        </section>

      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
