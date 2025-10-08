import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageVariants } from '../styles/SharedStyles';
import ContactForm from '../components/ContactForm';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const ContactPage = styled(motion.div)`
  min-height: calc(100vh - 80px);
`;

const ContactInfo = styled.section`
  padding: 2rem 0;
`;

const ContactInfoContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const InfoItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem;
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: 50%;
  width: 70px;
  height: 70px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  transition: all ${({ theme }) => theme.transitions.short};
  position: relative;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-5px);
    background-color: ${({ theme }) => theme.colors.accent};
    
    svg {
      color: white;
    }
  }
`;

const InfoIcon = styled.div`
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.accent};
  transition: all ${({ theme }) => theme.transitions.short};
`;

const TwoColumnContainer = styled.section`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 0 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: stretch;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const CalendlyContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const CalendlyHeading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  padding: 2rem 2rem 1rem;
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
  position: relative;
  margin: 0;
  
  &::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.accent};
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }
`;

const CalendlyWidget = styled.div`
  padding: 0;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 8px;
  
  /* Calendly widget styling */
  .calendly-inline-widget {
    min-width: 320px;
    height: 600px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Override Calendly's default styling */
  iframe {
    border-radius: 8px !important;
    border: none !important;
  }
`;

const MobileBadgeContainer = styled.div`
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    min-height: 60px;
  }
`;

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      href: 'mailto:Umarahmer1@gmail.com',
      ariaLabel: 'Send an email'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/umar-ahmer/',
      ariaLabel: 'Visit LinkedIn profile'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      href: 'https://github.com/umara25',
      ariaLabel: 'Visit GitHub profile'
    }
  ];

  useEffect(() => {
    let isInitialized = false;
    
    // Initialize Calendly widgets
    const initializeCalendly = () => {
      if (window.Calendly && !isInitialized) {
        isInitialized = true;
        
        // Initialize inline widget for desktop
        if (window.innerWidth > 1024) {
          const inlineWidget = document.querySelector('.calendly-inline-widget');
          if (inlineWidget && !inlineWidget.querySelector('iframe')) {
            // Clear any existing content first
            inlineWidget.innerHTML = '';
            
            window.Calendly.initInlineWidget({
              url: 'https://calendly.com/umarahmer1',
              parentElement: inlineWidget,
              prefill: {},
              utm: {}
            });
          }
        }
        
        // Initialize badge widget for mobile
        if (window.innerWidth <= 1024) {
          const badgeContainer = document.getElementById('calendly-badge-mobile');
          if (badgeContainer && !badgeContainer.hasChildNodes()) {
            window.Calendly.initBadgeWidget({
              url: 'https://calendly.com/umarahmer1',
              text: 'Schedule a coffee chat with me',
              color: '#F48024',
              textColor: '#ffffff',
              branding: true,
              parentElement: badgeContainer
            });
          }
        }
      } else if (!window.Calendly) {
        // If Calendly script hasn't loaded yet, wait and try again
        setTimeout(initializeCalendly, 200);
      }
    };

    // Wait for Calendly script to load
    const waitForCalendly = () => {
      if (window.Calendly) {
        initializeCalendly();
      } else {
        setTimeout(waitForCalendly, 100);
      }
    };

    waitForCalendly();

    // Handle window resize
    const handleResize = () => {
      if (window.Calendly) {
        if (window.innerWidth > 1024) {
          // Show inline widget, hide badge
          const inlineWidget = document.querySelector('.calendly-inline-widget');
          const badge = document.querySelector('.calendly-badge-widget');
          
          if (badge) badge.style.display = 'none';
          if (inlineWidget) {
            inlineWidget.style.display = 'block';
            if (!inlineWidget.querySelector('iframe')) {
              inlineWidget.innerHTML = '';
              window.Calendly.initInlineWidget({
                url: 'https://calendly.com/umarahmer1',
                parentElement: inlineWidget,
                prefill: {},
                utm: {}
              });
            }
          }
        } else {
          // Hide inline widget, show badge
          const inlineWidget = document.querySelector('.calendly-inline-widget');
          const badge = document.querySelector('.calendly-badge-widget');
          
          if (inlineWidget) inlineWidget.style.display = 'none';
          if (badge) {
            badge.style.display = 'block';
          } else {
            // Initialize badge widget if it doesn't exist
            const badgeContainer = document.getElementById('calendly-badge-mobile');
            if (badgeContainer) {
              window.Calendly.initBadgeWidget({
                url: 'https://calendly.com/umarahmer1',
                text: 'Schedule a coffee chat with me',
                color: '#F48024',
                textColor: '#ffffff',
                branding: true,
                parentElement: badgeContainer
              });
            }
          }
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      isInitialized = false;
    };
  }, []);

  return (
    <ContactPage
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ContactInfo>
        <ContactInfoContainer>
          {contactInfo.map((info, index) => (
            <InfoItem 
              key={index}
              href={info.href}
              target={info.label !== 'Email' ? '_blank' : undefined}
              rel={info.label !== 'Email' ? 'noopener noreferrer' : undefined}
              aria-label={info.ariaLabel}
              as={motion.a}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <InfoIcon>{info.icon}</InfoIcon>
            </InfoItem>
          ))}
        </ContactInfoContainer>
      </ContactInfo>
      
      <TwoColumnContainer>
        <CalendlyContainer
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CalendlyHeading>Schedule a Meeting</CalendlyHeading>
          <CalendlyWidget 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/umarahmer1"
            style={{ minWidth: '320px', height: '600px' }}
          />
        </CalendlyContainer>
        
        <div>
          <ContactForm />
          <MobileBadgeContainer id="calendly-badge-mobile" />
        </div>
      </TwoColumnContainer>
    </ContactPage>
  );
};

export default Contact; 