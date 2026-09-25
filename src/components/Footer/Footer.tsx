import styles from "./Footer.module.css";
import DisintegratingImage from "@/components/DisintegratingImage/DisintegratingImage";

export default function Footer() {
    return <footer className={styles.footer}>
        <div className={styles.footerContainer}>
            <DisintegratingImage
                src="/images/theme-day/sky/hero.jpg"
                alt="Footer background"
                className={styles.footerBackgroundImage}
            />
            <h2>Run in the cloud. Reach the world.</h2>
            <div className={styles.footerLinks}>
                <a href="https://github.com/andygolubev" target="_blank"><span role="img" aria-label="GitHub" className={`${styles.socialIcon} ${styles.github}`} /></a>
                <a href="https://www.linkedin.com/in/andy-golubev/" target="_blank"><span role="img" aria-label="LinkedIn" className={`${styles.socialIcon} ${styles.linkedin}`} /></a>
                <a href="mailto:andygolubevcontact@gmail.com" target="_blank"><span role="img" aria-label="Send email" className={`${styles.socialIcon} ${styles.email}`} /></a>
            </div>
        </div>
    </footer>;
}