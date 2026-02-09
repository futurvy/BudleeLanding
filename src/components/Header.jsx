import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Header = ({ 
  ctaText = "Explore Budlee", 
  ctaLink = "https://app.budlee.ai/",
  ctaOnClick = null,
  secondaryCtaText = null,
  secondaryCtaLink = null
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrimaryClick = (e) => {
    if (ctaOnClick) {
      e.preventDefault();
      ctaOnClick();
    }
  };

  return (
    <header className={`w-full py-3 md:py-4 px-4 md:px-12 lg:px-20 sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md' 
        : 'bg-gradient-to-r from-green-50/80 via-yellow-50/80 to-orange-50/80'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - Clickable, links to home */}
        <Link to="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity">
          {/* Budlee Character Logo */}
          <img 
            src="/images/budlee.png" 
            alt="Budlee" 
            className="w-10 h-10 md:w-16 md:h-16 object-contain"
          />
          <span className="logo-text text-xl md:text-3xl text-gray-900">Budlee AI</span>
        </Link>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          {/* Secondary Button (if provided) */}
          {secondaryCtaText && (
            <a href={secondaryCtaLink} target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline"
                className="border-2 border-emerald-500 bg-transparent text-emerald-600 hover:bg-emerald-50 font-bold px-4 py-4 md:px-6 md:py-5 text-xs md:text-sm rounded-xl transition-all duration-300"
              >
                {secondaryCtaText}
              </Button>
            </a>
          )}
          
          {/* Primary Button */}
          {ctaOnClick ? (
            <Button 
              onClick={handlePrimaryClick}
              className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold px-4 py-4 md:px-6 md:py-5 text-xs md:text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              {ctaText}
            </Button>
          ) : (
            <a href={ctaLink} target="_blank" rel="noopener noreferrer">
              <Button 
                className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold px-4 py-4 md:px-6 md:py-5 text-xs md:text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                {ctaText}
              </Button>
            </a>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
