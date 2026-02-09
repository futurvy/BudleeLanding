import React from 'react';
import { Button } from './ui/button';
import { Linkedin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

// Threads icon component (not available in lucide-react)
const ThreadsIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.85-.704 2.005-1.108 3.344-1.167.93-.041 1.822.053 2.658.282.034-.763-.075-1.411-.329-1.928-.372-.755-1.07-1.138-2.074-1.138h-.089c-.749.022-1.39.252-1.9.683l-1.335-1.509c.808-.715 1.932-1.116 3.164-1.157h.136c1.72 0 3.063.607 3.88 1.756.706.992.958 2.293.755 3.885.752.334 1.39.756 1.903 1.263 1.3 1.286 1.527 2.9 1.4 4.115-.17 1.63-.85 3.067-2.018 4.27C18.558 23.2 15.91 23.98 12.186 24zm.563-7.26c.103 0 .208.003.313.01.893.048 1.559.311 1.98.781.378.422.521.955.425 1.587-.1.65-.478 1.143-1.126 1.464-.577.286-1.298.39-2.027.294-.64-.086-1.186-.299-1.578-.616-.34-.276-.522-.614-.542-1.006-.025-.496.2-.934.672-1.305.478-.376 1.12-.59 1.883-.59v-.619z"/>
  </svg>
);

const Footer = ({ 
  ctaText = "Explore Budlee",
  ctaLink = "https://app.budlee.ai/",
  ctaOnClick = null,
  headline = "Start learning in a way that actually makes sense.",
  subtext = "Learn with clarity, ask freely, and explore what interests you."
}) => {
  return (
    <footer className="w-full">
      {/* Top Section - CTA with Green Gradient */}
      <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 py-12 md:py-16 px-4 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            {/* Budlee Character - increased size, no yellow circle */}
            <div className="relative">
              <img 
                src="/images/budlee.png" 
                alt="Budlee" 
                className="w-20 h-20 md:w-28 md:h-28 object-contain animate-bounce-gentle"
              />
            </div>
            
            {/* CTA Content */}
            <div className="text-center md:text-left">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                {headline}
              </h3>
              <p className="text-green-100 text-base md:text-lg mb-4">
                {subtext}
              </p>
              {ctaOnClick ? (
                <Button 
                  onClick={ctaOnClick}
                  className="bg-white text-green-600 hover:bg-green-50 font-bold px-8 py-6 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {ctaText}
                </Button>
              ) : (
                <a href={ctaLink} target="_blank" rel="noopener noreferrer">
                  <Button 
                    className="bg-white text-green-600 hover:bg-green-50 font-bold px-8 py-6 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {ctaText}
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - 3 Column Layout */}
      <div className="bg-white py-6 px-4 md:px-12 lg:px-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left - Logo with Tagline */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2">
                <img 
                  src="/images/budlee.png" 
                  alt="Budlee" 
                  className="w-8 h-8 object-contain"
                />
                <span className="logo-text text-xl text-gray-800">Budlee AI</span>
              </div>
              <p className="text-gray-500 text-sm mt-1">Learn Better. Build Curiosity</p>
            </div>

            {/* Center - Social Icons */}
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/company/budlee-ai/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/BudleeAI" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/budlee.ai?igsh=MWpjbjhycGgyNnJoZg==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@budleeai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://x.com/Budlee_AI" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.threads.com/@budlee.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-600 transition-colors">
                <ThreadsIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Right - Copyright + Contact/Terms/Privacy */}
            <div className="flex flex-col items-center md:items-end gap-1">
              <p className="text-gray-400 text-sm">
                © 2025 Budlee AI. All rights reserved.
              </p>
              <div className="flex items-center gap-3">
                <a href="#" className="text-gray-500 hover:text-green-600 text-sm font-medium transition-colors">
                  Contact
                </a>
                <span className="text-gray-300">|</span>
                <a href="#" className="text-gray-500 hover:text-green-600 text-sm font-medium transition-colors">
                  Terms
                </a>
                <span className="text-gray-300">|</span>
                <a href="#" className="text-gray-500 hover:text-green-600 text-sm font-medium transition-colors">
                  Privacy
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
