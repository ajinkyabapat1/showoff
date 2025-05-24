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
                <a href="https://twitter.com/ajinkyabapat1" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    {/* Placeholder for Twitter SVG icon */}
                    <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.594 0-6.495 2.902-6.495 6.495 0 .509.058 1.007.168 1.487-5.392-.27-10.186-2.868-13.38-6.843-.56.96-.88 2.07-.88 3.242 0 2.251 1.144 4.248 2.873 5.422-.84-.025-1.625-.26-2.316-.64v.08c0 3.154 2.239 5.78 5.212 6.39-.542.147-1.11.225-1.7.225-.418 0-.828-.04-1.228-.117.82.254 1.62.995 1.62 2.228 0 1.284-1.049 2.329-2.348 2.329-1.96 0-3.385-2.094-3.385-4.248 0-.294.02-.583.058-.865 1.157.884 2.518 1.408 3.993 1.408 4.795 0 8.803-3.96 8.803-8.803 0-.135-.003-.268-.008-.401.956-.695 1.798-1.567 2.457-2.558z"/></svg>
                </a>
                {/* Add more social links as needed */}
            </div>
        </footer>
    );
};

export default Footer;
