import styles from "./OrganisationItem.module.css";
import { Organisation } from "@/types/organisations";
import Image from "next/image";

export default function OrganisationItem(organisation: Organisation) {
    return <a href={organisation.link} target="_blank" rel="noopener noreferrer" className={styles.organisationItem}>
        <div className={styles.organisationItemLogoContainer}>
            <Image className={styles.organisationItemLogoBw} src={organisation.logoBw} alt={organisation.name} fill />
            <Image className={styles.organisationItemLogo} src={organisation.logo} alt={organisation.name} fill />
        </div>
        <p>{organisation.bussinessField} ({organisation.country})</p>
    </a>;
}
