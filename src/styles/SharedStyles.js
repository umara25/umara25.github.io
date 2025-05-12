import styled from 'styled-components';
import { motion } from 'framer-motion';

// Containers
export const PageContainer = styled(motion.div)`
  min-height: calc(100vh - 80px);
  padding: 2rem 0;
`;

export const SectionContainer = styled.section`
  padding: 5rem 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 3rem 0;
  }
`;

export const ContentContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

// Typography
export const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.heading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

export const SubHeading = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.heading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.5rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

// Buttons
export const Button = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 6px;
  background-color: ${({ theme, variant }) => 
    variant === 'outlined' ? 'transparent' : theme.colors.accent};
  color: ${({ theme, variant }) => 
    variant === 'outlined' ? theme.colors.accent : theme.colors.heading};
  border: ${({ theme, variant }) => 
    variant === 'outlined' ? `2px solid ${theme.colors.accent}` : 'none'};
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: ${({ theme, variant }) => 
    variant === 'outlined' ? 'none' : theme.shadows.small};
  
  &:hover {
    background-color: ${({ theme, variant }) => 
      variant === 'outlined' ? 'rgba(244, 128, 36, 0.1)' : theme.colors.accentHover};
    transform: translateY(-5px);
    box-shadow: ${({ theme, variant }) => 
      variant === 'outlined' ? 'none' : theme.shadows.medium};
  }
  
  &:active {
    transform: translateY(-2px);
  }
`;

// Cards
export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  transition: transform ${({ theme }) => theme.transitions.medium};
  
  &:hover {
    transform: translateY(-5px);
  }
`;

// Grid layouts
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns || 3}, 1fr);
  gap: ${({ gap }) => gap || '2rem'};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

// Flexbox layouts
export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'stretch'};
  gap: ${({ gap }) => gap || '0'};
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
`;

// Animations
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
}; 