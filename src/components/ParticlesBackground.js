import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ParticlesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  background-color: transparent;
`;

const ParticlesBackground = () => {
    const scriptLoaded = useRef(false);

    useEffect(() => {
        // Check if script is already loaded
        if (scriptLoaded.current || window.particlesJS) {
            if (window.particlesJS) {
                initParticles();
            }
            return;
        }

        // Load particles.js script
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
        script.async = false; // Load synchronously

        script.onload = () => {
            console.log('Particles.js loaded successfully');
            scriptLoaded.current = true;
            initParticles();
        };

        script.onerror = () => {
            console.error('Failed to load particles.js');
        };

        document.body.appendChild(script);

        return () => {
            // Cleanup - destroy particles instance
            if (window.pJSDom && window.pJSDom.length > 0) {
                window.pJSDom[0].pJS.fn.vendors.destroypJS();
                window.pJSDom = [];
            }
        };
    }, []);

    const initParticles = () => {
        if (!window.particlesJS) {
            console.error('particlesJS is not available');
            return;
        }

        try {
            window.particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#ffffff"
                    },
                    shape: {
                        type: "circle"
                    },
                    opacity: {
                        value: 0.5,
                        random: false
                    },
                    size: {
                        value: 3,
                        random: true
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2.25,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: false
                        },
                        onclick: {
                            enable: false
                        },
                        resize: true
                    }
                },
                retina_detect: true
            });
            console.log('Particles initialized');
        } catch (error) {
            console.error('Error initializing particles:', error);
        }
    };

    return <ParticlesContainer id="particles-js" />;
};

export default ParticlesBackground;
