import DisintegratingImage from "@/components/DisintegratingImage/DisintegratingImage";
import ThemeSwitcher from "@/components/Theme/ThemeSwitcher";
import styles from "./HeroSection.module.css";

export default function HeroSection({ role }: { role: string }) {
    return <section className={styles.heroSection}>
        <DisintegratingImage
            className={styles.heroImage}
            src="/images/theme-day/sky/hero.jpg"
            alt="Clouds"
        />

        <ThemeSwitcher />
        <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleName}>Andy Golubev</span>
            <span className={styles.heroTitleDescription}>{role}</span>
        </h1>
    </section>
}