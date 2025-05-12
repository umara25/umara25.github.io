import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { ContentContainer } from '../styles/SharedStyles';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.foreground};
  padding: 2rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  transition: color ${({ theme }) => theme.transitions.short};
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  text-align: center;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <ContentContainer>
        <FooterContent>
          <SocialLinks>
            <SocialLink 
              href="https://www.linkedin.com/in/umar-ahmer/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialLink>
            <SocialLink 
              href="https://github.com/umara25" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
            >
              <FaGithub />
            </SocialLink>
            <SocialLink 
              href="mailto:Umarahmer1@gmail.com" 
              aria-label="Email"
            >
              <FaEnvelope />
            </SocialLink>
          </SocialLinks>
          <Copyright>&copy; {currentYear} Umar Ahmer. All rights reserved.</Copyright>
        </FooterContent>
      </ContentContainer>
    </FooterContainer>
  );
};

export default Footer; 