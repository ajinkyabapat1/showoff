import React from 'react';
import './Footer.css'; // CSS imported

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Ajinkya Bapat. All rights reserved.</p>
            <div className="social-links">
                <a href="https://linkedin.com/in/ajinkyabapat1" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    {/* Placeholder for LinkedIn SVG icon */}
                    <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
                </a>
                <a href="https://github.com/ajinkyabapat1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    {/* Placeholder for GitHub SVG icon */}
                    <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.82-.25.82-.557 0-.274-.009-1.002-.015-1.977-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.492.998.108-.775.418-1.305.762-1.604-2.665-.304-5.467-1.334-5.467-5.931 0-1.31.465-2.381 1.235-3.221-.12-.304-.535-1.524.117-3.176 0 0 1-.322 3.296 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.296-1.552 3.296-1.23 3.296-1.23.653 1.653.238 2.872.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.604-.015 2.892-.015 3.286 0 .309.219.678.825.557C20.565 21.787 24 17.28 24 12c0-6.627-5.373-12-12-12z"/></svg>
                </a>
                
                {/* Add more social links as needed */}
            </div>
        </footer>
    );
};

export default Footer;
