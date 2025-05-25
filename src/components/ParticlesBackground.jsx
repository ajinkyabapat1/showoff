import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // or loadFull for more features
import { useTheme } from '../context/ThemeContext';


const ParticlesBackground = () => {
    const { theme } = useTheme();

    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    // Particle configuration for a subtle "sprinkler" or "falling dots" effect
    // Colors will dynamically change based on the current theme
    const particlesOptions = {
        background: {
            // Background color is handled by the body's CSS gradient, so keep this transparent
            color: {
                value: "transparent",
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                // Adjust particle color based on theme
                value: theme === 'dark' ? "#61dafb" : "#007bff", // Primary color of the current theme
            },
            links: {
                // Adjust link color based on theme
                color: {
                    value: theme === 'dark' ? "#adb5bd" : "#6c757d", // Secondary color of the current theme
                },
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle", // You can try "star", "triangle", etc.
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesOptions}
            // Key is crucial to re-render particles when theme changes
            key={theme}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1, // Ensure particles are behind content
            }}
        />
    );
};

export default ParticlesBackground;
