import styles from "./Achievements.module.css";
import CertificationItem from "@/components/CertificationItem/CertificationItem";
import OrganisationItem from "@/components/OrganisationItem/OrganisationItem";
import { certifications } from "@/data/certifications";
import { organisations } from "@/data/organisations";

export default function Achievements() {
    return <section className={styles.achievementsSection}>
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
            <div className={styles.achievementsOrganisationsBlank}></div>
            <div className={styles.achievementsOrganisationsFeatured}>
                {organisations.slice(0, 6).map(organisation => (
                    <OrganisationItem key={organisation.id} {...organisation} />
                ))}
            </div>
            <div className={styles.achievementsOrganisationsList}>
                {organisations.slice(6).map(organisation => (
                    <OrganisationItem key={organisation.id} {...organisation} />
                ))}
            </div>
        </div>
    </section>
}