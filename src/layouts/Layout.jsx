import React from 'react';
import Header from '../components/Header';
import Chatbot from '../components/Chatbot';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        {children}
      </main>
      <Chatbot />
    </div>
  );
};

export default Layout;
