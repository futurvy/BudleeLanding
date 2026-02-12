import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';

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
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const resourcesRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle clicks outside dropdowns to close them (only on wide screens)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth >= 768) { // md breakpoint
        if (resourcesRef.current && !resourcesRef.current.contains(event.target)) {
          if (activeDropdown === 'resources') {
            setActiveDropdown(null);
          }
        }
        if (aboutRef.current && !aboutRef.current.contains(event.target)) {
          if (activeDropdown === 'about') {
            setActiveDropdown(null);
          }
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  const handlePrimaryClick = (e) => {
    if (ctaOnClick) {
      e.preventDefault();
      ctaOnClick();
    }
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null); // Close any open dropdowns
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
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
            className="w-40 md:w-48 h-auto object-contain"
            onContextMenu={(e) => e.preventDefault()}
          />
          {/* Slogan */}
          <span className="text-xs md:text-sm text-gray-600 mt-1 font-medium">
            Learn Better. Build Curiosity
          </span>
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Resources Dropdown */}
          <div className="relative" ref={resourcesRef}>
            <button
              onClick={() => toggleDropdown('resources')}
              className="flex items-center text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
            >
              Resources
              <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'resources' && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors" onClick={closeDropdown}>
                  Blog
                </Link>
                <Link to="/help" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors" onClick={closeDropdown}>
                  Help Center
                </Link>
                <Link to="/tutorials" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors" onClick={closeDropdown}>
                  Tutorials
                </Link>
                <Link to="/faqs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors" onClick={closeDropdown}>
                  FAQs
                </Link>
                <div className="border-t border-gray-100 mt-2 pt-2">
                  <Link to="/schools" className="block px-4 py-2 text-sm font-semibold text-green-600 hover:bg-green-50 hover:text-green-700 transition-colors" onClick={closeDropdown}>
                    For Schools
                  </Link>
                  <Link to="/contact#demo-form" className="block px-4 py-2 text-sm font-semibold text-green-600 hover:bg-green-50 hover:text-green-700 transition-colors" onClick={closeDropdown}>
                    Request a Demo
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* About Us Dropdown */}
          <div className="relative" ref={aboutRef}>
            <button
              onClick={() => toggleDropdown('about')}
              className="flex items-center text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
            >
              About Us
              <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'about' && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                <Link to="/our-story" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors" onClick={closeDropdown}>
                  Our Story
                </Link>
                <Link to="/mission-vision" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors" onClick={closeDropdown}>
                  Mission and Vision
                </Link>
                <Link to="/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors" onClick={closeDropdown}>
                  Meet our Team
                </Link>
                <Link to="/core-values" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors" onClick={closeDropdown}>
                  Core Values
                </Link>
                <Link to="/careers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors" onClick={closeDropdown}>
                  Careers
                </Link>
                <Link to="/partner-programs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors" onClick={closeDropdown}>
                  Referral/Affiliate/Partner Programs
                </Link>
                <Link to="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors" onClick={closeDropdown}>
                  Contact Us
                </Link>
              </div>
            )}
          </div>

          {/* Pricing - No Dropdown */}
          <Link to="/pricing" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200">
            Pricing
          </Link>
        </nav>

        {/* CTA Buttons and Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* School Login Button */}
            <a href="https://dash.budlee.ai">
              <Button 
                variant="outline"
                className="border-2 border-green-500 bg-transparent text-green-600 hover:bg-green-50 font-bold px-4 py-4 md:px-6 md:py-5 text-xs md:text-sm rounded-xl transition-all duration-300"
              >
                School Login
              </Button>
            </a>
            
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

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="md:hidden fixed inset-0 top-[73px] bg-black/20 backdrop-blur-sm z-30"
              onClick={closeMobileMenu}
            />
            {/* Menu Content */}
            <div className="md:hidden fixed inset-0 top-[73px] z-40">
              <div className="bg-white/95 backdrop-blur-sm shadow-lg min-h-full">
                <div className="px-4 py-6 space-y-4">
                  {/* Mobile Navigation Menu */}
                  <div className="space-y-4">
                    {/* Resources Dropdown */}
                    <div>
                      <button
                        onClick={() => toggleDropdown('resources')}
                        className="flex items-center justify-between w-full text-left text-gray-700 hover:text-green-600 font-medium py-2 transition-colors duration-200"
                      >
                        Resources
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === 'resources' && (
                        <div className="mt-2 ml-4 space-y-2">
                          <Link to="/blog" className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>
                            Blog
                          </Link>
                          <Link to="/tutorials" className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>
                            Tutorials
                          </Link>
                          <Link to="/help" className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>
                            Help Center
                          </Link>
                          <Link to="/faqs" className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>
                            FAQs
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Direct High-Priority Links for Mobile */}
                    <div className="pt-2 border-t border-gray-100">
                      <Link to="/schools" className="flex items-center gap-2 py-3 text-base font-bold text-green-600 hover:text-green-700 transition-colors" onClick={closeMobileMenu}>
                        <div className="p-2 bg-green-50 rounded-lg">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        For Schools
                      </Link>
                      <Link to="/contact#demo-form" className="flex items-center gap-2 py-3 text-base font-bold text-emerald-600 hover:text-emerald-700 transition-colors" onClick={closeMobileMenu}>
                        <div className="p-2 bg-emerald-50 rounded-lg">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </div>
                        Request a Demo
                      </Link>
                    </div>

                    {/* About Us Dropdown */}
                    <div>
                      <button
                        onClick={() => toggleDropdown('about')}
                        className="flex items-center justify-between w-full text-left text-gray-700 hover:text-green-600 font-medium py-2 transition-colors duration-200"
                      >
                        About Us
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === 'about' && (
                        <div className="mt-2 ml-4 space-y-2">
                          <Link to="/our-story" className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>
                            Our Story
                          </Link>
                          <Link to="/team" className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>
                            Meet our Team
                          </Link>
                          <Link to="/careers" className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>
                            Careers
                          </Link>
                          <Link to="/contact" className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>
                            Contact Us
                          </Link>
                          <Link to="/mission-vision" className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>
                            Mission and Vision
                          </Link>
                          <Link to="/core-values" className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>
                            Core Values
                          </Link>
                          <Link to="/partner-programs" className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>
                            Referral/Affiliate/Partner Programs
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Pricing - No Dropdown */}
                    <Link to="/pricing" className="block py-2 text-gray-700 hover:text-green-600 font-medium transition-colors duration-200" onClick={closeMobileMenu}>
                      Pricing
                    </Link>
                  </div>

                  {/* Mobile CTA Buttons */}
                  <div className="pt-4 border-t border-gray-200 flex flex-row justify-center gap-3">
                    <a href="https://dash.budlee.ai">
                      <Button 
                        variant="outline"
                        className="border-2 border-green-500 bg-transparent text-green-600 hover:bg-green-50 font-bold px-6 py-3 rounded-xl transition-all duration-300"
                      >
                        School Login
                      </Button>
                    </a>
                    
                    {secondaryCtaText && (
                      <a href={secondaryCtaLink} target={secondaryCtaTarget} rel="noopener noreferrer" onClick={closeMobileMenu}>
                        <Button 
                          variant="outline"
                          className="border-2 border-emerald-500 bg-transparent text-emerald-600 hover:bg-emerald-50 font-bold px-6 py-3 rounded-xl transition-all duration-300"
                        >
                          {secondaryCtaText}
                        </Button>
                      </a>
                    )}
                    
                    {ctaOnClick ? (
                      <Button 
                        onClick={() => { handlePrimaryClick(); closeMobileMenu(); }}
                        className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        {ctaText}
                      </Button>
                    ) : (
                      <a href={ctaLink} target={ctaTarget} rel="noopener noreferrer" onClick={closeMobileMenu}>
                        <Button 
                          className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          {ctaText}
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
