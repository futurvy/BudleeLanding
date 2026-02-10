import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Header = ({ 
  ctaText = "Explore Budlee AI", 
  ctaLink = "https://app.budlee.ai/",
  ctaOnClick = null,
  secondaryCtaText = null,
  secondaryCtaLink = null,
  secondaryCtaTarget = "_blank",
  ctaTarget = "_self"
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
        <Link to="/" className="flex flex-col items-center hover:opacity-80 transition-opacity">
          {/* Wide Logo */}
          <img 
            src="/images/logo_wide.png" 
            alt="Budlee AI" 
            className="h-8 md:h-12 object-contain"
          />
          {/* Slogan */}
          <span className="text-xs md:text-sm text-gray-600 mt-1 font-medium">
            Learn Better. Build Curiosity
          </span>
        </Link>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          {/* Secondary Button (if provided) */}
          {secondaryCtaText && (
            <a href={secondaryCtaLink} target={secondaryCtaTarget} rel="noopener noreferrer">
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
            <a href={ctaLink} target={ctaTarget} rel="noopener noreferrer">
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
