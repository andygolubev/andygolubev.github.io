'use client';
import { useTheme, themeAsset } from '@/components/Theme/ThemeProvider';
import styles from "./OrganisationItem.module.css";
import { Organisation } from "@/types/organisations";
import Image from "next/image";

export default function OrganisationItem(organisation: Organisation) {
    const { theme } = useTheme();
    return <a data-asset-theme={theme} href={organisation.link} target="_blank" rel="noopener noreferrer" className={styles.organisationItem}>
        <div className={styles.organisationItemLogoContainer}>
            <Image className={styles.organisationItemLogoBw} src={themeAsset(organisation.logoBw, theme)} alt={organisation.name} fill />
            <Image className={styles.organisationItemLogo} src={themeAsset(organisation.logo, theme)} alt={organisation.name} fill />
        </div>
        <p>{organisation.bussinessField} ({organisation.country})</p>
    </a>;
}
