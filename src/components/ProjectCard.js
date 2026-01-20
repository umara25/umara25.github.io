import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const CardContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
`;

const CardImage = styled.div`
  height: 200px;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  background-image: ${({ image }) => image ? `url(${image})` : 'none'};
  background-size: cover;
  background-position: ${({ imagePosition }) => imagePosition || 'center'};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  position: relative;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, 
      rgba(0,0,0,0) 0%, 
      ${({ theme }) => theme.colors.foreground} 100%);
    opacity: 0.3;
    transition: opacity 0.3s ease;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.heading};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.accent};
    bottom: -5px;
    left: 0;
  }
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: white;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
`;

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    background-color: rgba(244, 128, 36, 0.1);
  }
  
  svg {
    font-size: 1.1rem;
  }
`;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4
    }
  },
  hover: {
    y: -10,
    boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const ProjectCard = ({
  title,
  description,
  image,
  imagePosition,
  techStack = [],
  githubUrl,
  liveUrl,
  delay = 0
}) => {
  return (
    <CardContainer
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{ delay: delay * 0.1 }}
    >
      {image && <CardImage image={image} imagePosition={imagePosition} />}
      <CardContent>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <TechStack>
          {techStack.map((tech, index) => (
            <TechTag key={index}>{tech}</TechTag>
          ))}
        </TechStack>
        <Links>
          {liveUrl && (
            <LinkButton
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt /> Check it out
            </LinkButton>
          )}
          {githubUrl && (
            <LinkButton
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </LinkButton>
          )}
        </Links>
      </CardContent>
    </CardContainer>
  );
};

export default ProjectCard; 