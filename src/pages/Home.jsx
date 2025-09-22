import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import SmartSolutions from '../components/SmartSolutions';

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Hero />
      <Features />
      <SmartSolutions />
    </div>
  );
};

export default Home;
