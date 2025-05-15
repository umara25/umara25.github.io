import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

// Fixed version of Navbar component with correct mobile menu overlay

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
  z-index: 1002;
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
  z-index: 1004; /* Higher than the mobile menu to ensure it's always clickable */
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: #2D2D2D;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  z-index: 1003;
  padding: 0;
  overflow: hidden;
  isolation: isolate;
`;

const MobileNavLink = styled(Link)`
  font-size: 2.5rem;
  color: ${({ theme, active }) => 
    active ? theme.colors.accent : theme.colors.text};
  font-weight: ${({ active }) => active ? '700' : '600'};
  margin-bottom: 2rem;
  text-decoration: none;
`;

const menuVariants = {
  closed: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

const NavbarMobile = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const scrollPositionRef = useRef(0);
  
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
  
  useEffect(() => {
    if (mobileMenuOpen) {
      scrollPositionRef.current = window.pageYOffset;
      document.body.style.overflow = 'hidden';
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
      setTimeout(() => {
        window.scrollTo(0, scrollPositionRef.current);
      }, 10);
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
    };
  }, [mobileMenuOpen]);
  
  return (
    <NavbarContainer scrolled={scrolled}>
      <Logo to="/" style={{ opacity: mobileMenuOpen ? 0 : 1, transition: 'opacity 0.3s' }}>Umar Ahmer</Logo>
      
      <NavLinks>
        <NavLink to="/" active={location.pathname === '/' ? 1 : 0}>Home</NavLink>
        <NavLink to="/about" active={location.pathname === '/about' ? 1 : 0}>About</NavLink>
        <NavLink to="/projects" active={location.pathname === '/projects' ? 1 : 0}>Projects</NavLink>
        <NavLink to="/contact" active={location.pathname === '/contact' ? 1 : 0}>Contact</NavLink>
      </NavLinks>
      
      <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <FaTimes style={{ color: 'white' }} /> : <FaBars />}
      </MobileMenuButton>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            data-testid="mobile-menu"
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

export default NavbarMobile; 