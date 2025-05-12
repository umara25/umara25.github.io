import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background-color: ${({ theme, scrolled }) => 
    scrolled ? theme.colors.background : 'transparent'};
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${({ theme, scrolled }) => 
    scrolled ? theme.shadows.small : 'none'};
  z-index: 1000;
  transition: all ${({ theme }) => theme.transitions.medium};
`;

const Logo = styled(Link)`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.heading};
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  color: ${({ theme, active }) => 
    active ? theme.colors.accent : theme.colors.text};
  font-weight: ${({ active }) => active ? '500' : '400'};
  padding: 0.5rem 0;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: ${({ active }) => active ? '100%' : '0'};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: width ${({ theme }) => theme.transitions.medium};
  }

  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  z-index: 999;
`;

const MobileNavLink = styled(Link)`
  font-size: 1.5rem;
  color: ${({ theme, active }) => 
    active ? theme.colors.accent : theme.colors.text};
  font-weight: ${({ active }) => active ? '500' : '400'};
`;

const menuVariants = {
  closed: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  return (
    <NavbarContainer scrolled={scrolled}>
      <Logo to="/">Umar Ahmer</Logo>
      
      <NavLinks>
        <NavLink to="/" active={location.pathname === '/' ? 1 : 0}>Home</NavLink>
        <NavLink to="/about" active={location.pathname === '/about' ? 1 : 0}>About</NavLink>
        <NavLink to="/projects" active={location.pathname === '/projects' ? 1 : 0}>Projects</NavLink>
        <NavLink to="/contact" active={location.pathname === '/contact' ? 1 : 0}>Contact</NavLink>
      </NavLinks>
      
      <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuButton>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <MobileNavLink to="/" active={location.pathname === '/' ? 1 : 0}>Home</MobileNavLink>
            <MobileNavLink to="/about" active={location.pathname === '/about' ? 1 : 0}>About</MobileNavLink>
            <MobileNavLink to="/projects" active={location.pathname === '/projects' ? 1 : 0}>Projects</MobileNavLink>
            <MobileNavLink to="/contact" active={location.pathname === '/contact' ? 1 : 0}>Contact</MobileNavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavbarContainer>
  );
};

export default Navbar; 