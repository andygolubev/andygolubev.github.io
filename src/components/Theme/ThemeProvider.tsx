'use client';

import { createContext, useContext, useSyncExternalStore } from 'react';

export type Theme = 'day' | 'night';
const storageKey = 'andy-theme';
const changeEvent = 'andy-theme-change';

function readTheme(): Theme {
    return document.documentElement.dataset.theme === 'day' ? 'day' : 'night';
}

function applyTheme(theme: Theme) {
    document.documentElement.dataset.theme = theme;
    window.dispatchEvent(new Event(changeEvent));
}

function subscribe(onChange: () => void) {
    const onStorage = (event: StorageEvent) => {
        if (event.key === storageKey || event.key === null) {
            applyTheme(event.newValue === 'day' ? 'day' : 'night');
        }
    };
    window.addEventListener(changeEvent, onChange);
    window.addEventListener('storage', onStorage);
    return () => {
        window.removeEventListener(changeEvent, onChange);
        window.removeEventListener('storage', onStorage);
    };
}

const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void } | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const theme = useSyncExternalStore(subscribe, readTheme, () => 'night' as Theme);
    const toggleTheme = () => {
        const nextTheme = readTheme() === 'night' ? 'day' : 'night';
        applyTheme(nextTheme);
        try { localStorage.setItem(storageKey, nextTheme); } catch { /* Session-only when storage is unavailable. */ }
    };
    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within ThemeProvider');
    return context;
}

export function themeAsset(src: string, theme: Theme) {
    return src.replace(/^\/images\/theme-(day|night)\//, `/images/theme-${theme}/`);
}
