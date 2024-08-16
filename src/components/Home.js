import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #6d83f2, #5c69d2);
  color: #fff;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #e1e3f5;
`;

const Button = styled(motion.button)`
  background-color: #ff5e57;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e14b4b;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to Chalkpad
      </Title>
      <Subtitle
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Your gateway to academic success
      </Subtitle>
      <Button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        onClick={() => alert('Button Clicked')}
      >
        Get Started
      </Button>
    </HomeContainer>
  );
};

export default Home;
