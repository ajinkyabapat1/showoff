import React from 'react';
import './ThemeSwitcher.css'; // CSS imported
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button className="theme-toggle-button" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? (
                <span role="img" aria-label="sun">☀️</span>
            ) : (
                <span role="img" aria-label="moon">🌙</span>
            )}
        </button>
    );
};

export default ThemeSwitcher;
