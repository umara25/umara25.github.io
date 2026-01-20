import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageVariants } from '../styles/SharedStyles';
import Hero from '../components/Hero';


// Profile image in the public directory
const profileImageUrl = process.env.PUBLIC_URL + '/images/selfie.jpg';

const HomePage = styled(motion.div)``;

const Home = () => {
  return (
    <HomePage
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Hero profileImage={profileImageUrl} />

    </HomePage>
  );
};

export default Home; 