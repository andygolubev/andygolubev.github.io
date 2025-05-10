import styles from "./CertificationItem.module.css";
import { Certification } from "@/types/certifications";
import Image from "next/image";

export default function CertificationItem(certification: Certification) {
    return <a href={certification.link} target="_blank" rel="noopener noreferrer" className={styles.certificationItem}>
        <div className={styles.certificationItemLogoContainer}>
            <Image className={styles.certificationItemLogoBw} src={certification.logoBw} alt={certification.name} fill />
            <Image className={styles.certificationItemLogo} src={certification.logo} alt={certification.name} fill />
        </div>
        <p>{certification.name}</p>
    </a>;
}
