import React from 'react';
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
      <ContactForm />
    </ContactPage>
  );
};

export default Contact; 