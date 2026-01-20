import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../styles/SharedStyles';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const HeroContainer = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  position: relative;
  padding: 2rem 0;
  overflow: hidden;
`;



const ContentWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  z-index: 1;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const HeroContent = styled.div`
  max-width: 600px;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex: 1;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(
    135deg, 
    ${({ theme }) => theme.colors.heading} 0%, 
    ${({ theme }) => theme.colors.accent} 50%,
    ${({ theme }) => theme.colors.heading} 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
  position: relative;
  
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  
  background-size: 200% 200%;
  animation: gradientAnimation 3s ease infinite;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 4rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1.5rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.75rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
`;

const ButtonsContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const SocialLinksContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  transition: all ${({ theme }) => theme.transitions.short};
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px);
  }
`;

const ProfileImageContainer = styled(motion.div)`
  display: none;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
    width: 350px;
    height: 350px;
    flex-shrink: 0;
    position: relative;
    z-index: 2;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  border: 3px solid ${({ theme }) => theme.colors.accent};
  box-shadow: ${({ theme }) => theme.shadows.large};
`;

const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
};

const subtitleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      delay: 0.3
    }
  }
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      delay: 0.6
    }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      delay: 0.9
    }
  }
};

const socialVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.2
    }
  }
};

const iconVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.3
    }
  }
};

const Hero = ({ profileImage }) => {
  return (
    <HeroContainer>
      <ContentWrapper>
        <HeroContent>
          <Title
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            Umar Ahmer
          </Title>
          <Subtitle
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
          >
            Software Engineer
          </Subtitle>
          <Description
            variants={descriptionVariants}
            initial="hidden"
            animate="visible"
          >
            Computer Science student at McMaster University. Previous Intern @ Meta, EcoClaim. Experienced in full-stack development, DevOps, cloud infrastructure, and CI/CD automation.
          </Description>
          <ButtonsContainer
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <Button as={Link} to="/projects">View Projects</Button>
            <Button as={Link} to="/contact" variant="outlined">Contact Me</Button>
          </ButtonsContainer>
        </HeroContent>
        <ProfileImageContainer
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          {profileImage && <ProfileImage src={profileImage} alt="Umar Ahmer" />}
        </ProfileImageContainer>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default Hero; 