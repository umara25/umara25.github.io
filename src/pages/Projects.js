import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageVariants, ContentContainer, Heading } from '../styles/SharedStyles';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = styled(motion.div)`
  padding: 5rem 0;
  position: relative;
  z-index: 2;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: 'PolyYield',
      description: 'Winner @ NexHacks. No-lose prediction markets where your principal is always protected. Winners earn yield, losers get their deposit back.',
      image: process.env.PUBLIC_URL + '/images/polyhome.png',
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Solana', 'Anchor', 'DeFi'],
      liveUrl: 'https://polyyield.vercel.app/',
      githubUrl: 'https://github.com/umara25',
    },
    {
      title: 'AI Voice Agent',
      description: 'A real-time voice AI agent powered by LiveKit and Google\'s Gemini Realtime API, enabling natural conversational interactions through browser-based voice interface.',
      image: process.env.PUBLIC_URL + '/images/voice_agent.png',
      imagePosition: 'center top',
      techStack: ['LiveKit', 'Google Gemini API', 'Flask', 'JavaScript'],
      githubUrl: 'https://github.com/umara25',
    },
    {
      title: 'LookLock',
      description: 'Winner @ JamHacks. A focusing tool that tracks eye movement and alerts users when they lose focus, helping improve concentration over time.',
      image: process.env.PUBLIC_URL + '/images/looklock.png',
      techStack: ['Python', 'Streamlit', 'OpenCV', 'Django', 'React'],
      githubUrl: 'https://github.com/umara25/LookLock',
    },
    {
      title: 'Detectorio',
      description: 'A real-time monitoring bot for Discord, designed to track website outages and alert server administrators instantly. Detectorio provides uptime calculations and integration with downdetector APIs. It features a user-friendly command system and reliable alert mechanism.',
      image: process.env.PUBLIC_URL + '/images/detecorio.png',
      techStack: ['JavaScript', 'Discord.js', 'Node.js', 'DowndetectorAPI'],
      githubUrl: 'https://github.com/umara25/Detectorio',
    },
    {
      title: 'Moodr',
      description: 'A secure and responsive social media platform using JavaScript, PHP and MySQL to streamline online interactions for the music listening community at McMaster. The platform provides comprehensive features for sharing music, forming groups, and analyzing listening patterns.',
      image: process.env.PUBLIC_URL + '/images/Moodr.png',
      techStack: ['PHP', 'JavaScript', 'MySQL', 'HTML/CSS'],
      githubUrl: 'https://github.com/umara25/1XD3FinalProject_Moodr',
    }
  ];

  return (
    <ProjectsPage
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ContentContainer>
        <Heading>Projects</Heading>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              imagePosition={project.imagePosition}
              techStack={project.techStack}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              delay={index}
            />
          ))}
        </ProjectsGrid>
      </ContentContainer>
    </ProjectsPage>
  );
};

export default Projects; 