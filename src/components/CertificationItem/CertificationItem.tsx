import styles from "./CertificationItem.module.css";
import { Certification } from "@/types/certifications";
import Image from "next/image";

export default function CertificationItem(certification: Certification) {
    return <div className={styles.certificationItem}>
        <div className={styles.certificationItemLogoContainer}>
            <Image className={styles.certificationItemLogoBw} src={certification.logoBw} alt={certification.name} fill />
            <Image className={styles.certificationItemLogo} src={certification.logo} alt={certification.name} fill />
        </div>
        <a href={certification.link} target="_blank" rel="noopener noreferrer">{certification.name}</a>
    </div>;
}
