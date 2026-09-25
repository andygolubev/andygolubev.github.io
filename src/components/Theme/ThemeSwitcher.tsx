'use client';

import { useTheme } from './ThemeProvider';
import styles from './ThemeSwitcher.module.css';

export default function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();
    const label = `Switch to ${theme === 'night' ? 'day' : 'night'} theme`;
    return <button type="button" className={styles.switcher} onClick={toggleTheme} aria-label={label} title={label}>
        <span className={styles.icon} aria-hidden="true" />
    </button>;
}
