import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // CSS imported
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="navbar">
            <nav className="navbar-container">
                <Link to="/showoff" className="navbar-logo" onClick={() => setMenuOpen(false)}>  <img src="/showoff/images/logo.jpg" alt="Logo" /></Link>
                <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                    <Link to="/#about" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link to="/#skills" onClick={() => setMenuOpen(false)}>Skills</Link>
                    <Link to="/#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
                    <Link to="/#awards" onClick={() => setMenuOpen(false)}>Awards</Link>
                    <Link to="/#resume" onClick={() => setMenuOpen(false)}>Resume</Link>
                    <Link to="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                    <ThemeSwitcher />
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    {/* Hamburger icon for mobile */}
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
