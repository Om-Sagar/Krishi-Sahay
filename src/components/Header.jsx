import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'SOLUTIONS', href: '/solutions' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-300 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight group-hover:text-green-600 transition-colors duration-200">
              KrishiSahay
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium text-sm tracking-wider transition-all duration-200 hover:text-green-600 relative ${
                  isActive(item.href)
                    ? 'text-green-600'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-green-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex  bg-green-500 to-green-600 text-white px-8 py-3 rounded-xl font-semibold text-sm tracking-wider hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              EXPLORE NOW
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium text-sm tracking-wider transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-green-600 bg-green-50 dark:bg-green-900/20'
                      : 'text-gray-600 dark:text-gray-300 hover:text-green-600 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block mx-4 mt-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold text-sm text-center tracking-wider hover:from-green-600 hover:to-green-700 transition-all duration-200"
              >
                EXPLORE NOW
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
