import React from 'react';
import { Play, Atom, FlaskConical, Lightbulb, Star, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { heroData, curriculumData } from '../data/mock.js';

const HeroSection = () => {
  return (
    <section className="w-full min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-88px)] flex flex-col relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50"></div>
      
      {/* Floating Doodles - Hidden on mobile, visible on md+ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        {/* Top Left - Atom */}
        <div className="absolute top-8 left-[8%] text-green-300 animate-float-slow">
          <Atom className="w-10 h-10 opacity-60" />
        </div>
        
        {/* Top Right - Flask */}
        <div className="absolute top-12 right-[12%] text-yellow-400 animate-float-medium">
          <FlaskConical className="w-8 h-8 opacity-50" />
        </div>
        
        {/* Middle Left - Lightbulb */}
        <div className="absolute top-1/3 left-[4%] text-orange-300 animate-float-fast">
          <Lightbulb className="w-7 h-7 opacity-50" />
        </div>
        
        {/* Bottom Right - Stars */}
        <div className="absolute bottom-28 right-[6%] text-green-400 animate-float-slow">
          <Star className="w-8 h-8 opacity-40 fill-current" />
        </div>
        
        {/* Top Center - Sparkles */}
        <div className="absolute top-6 left-[35%] text-yellow-400 animate-float-medium">
          <Sparkles className="w-6 h-6 opacity-50" />
        </div>
        
        {/* Bottom Left - Star */}
        <div className="absolute bottom-24 left-[10%] text-orange-400 animate-float-fast">
          <Star className="w-5 h-5 opacity-40 fill-current" />
        </div>

        {/* Decorative circles */}
        <div className="absolute top-20 right-[22%] w-16 h-16 rounded-full bg-green-200 opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-[18%] w-12 h-12 rounded-full bg-yellow-200 opacity-20 animate-pulse-slow"></div>
      </div>

      {/* Mobile Floating Doodles - Smaller, fewer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden md:hidden">
        <div className="absolute top-4 right-[8%] text-green-300 animate-float-slow">
          <Atom className="w-6 h-6 opacity-40" />
        </div>
        <div className="absolute top-20 left-[5%] text-yellow-400 animate-float-medium">
          <Star className="w-5 h-5 opacity-40 fill-current" />
        </div>
        <div className="absolute bottom-32 right-[10%] text-orange-300 animate-float-fast">
          <Sparkles className="w-5 h-5 opacity-40" />
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="flex-grow flex items-center justify-center px-4 md:px-12 lg:px-20 py-6 md:py-8 relative z-10">
        <div className="max-w-6xl mx-auto w-full">
          {/* Mobile: Column-reverse (text first, then video), Desktop: Row */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-12 lg:gap-20">
            
            {/* Left Side - Tilted Image with Play Button */}
            <div className="relative w-full lg:w-1/2 flex justify-center">
              <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Shadow underneath */}
                <div className="absolute inset-0 bg-green-200/50 rounded-2xl md:rounded-3xl transform translate-x-2 md:translate-x-3 translate-y-2 md:translate-y-3 -rotate-1"></div>
                
                {/* Main Image Container - Smaller on mobile */}
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-white border-2 md:border-4 border-white w-[300px] h-[230px] md:w-[420px] md:h-[320px]">
                  <img
                    src={heroData.heroImage}
                    alt="Student learning with Budlee AI"
                    className="w-full h-full object-cover object-center"
                  />
                  
                  {/* Play Button - Prominent and Clickable */}
                  <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group">
                    <div className="relative">
                      {/* Outer pulsing ring */}
                      <div className="absolute inset-0 w-14 h-14 md:w-20 md:h-20 -m-1 md:-m-2 rounded-full bg-white/30 animate-ping"></div>
                      {/* Main button */}
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10">
                        <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 flex items-center justify-center shadow-lg">
                          <Play className="w-4 h-4 md:w-5 md:h-5 text-white fill-white ml-0.5" />
                        </div>
                      </div>
                    </div>
                  </button>
                </div>

                {/* Decorative curved line - Hidden on mobile */}
                <svg className="absolute -left-6 bottom-1/4 w-16 h-16 text-green-400 opacity-60 hidden md:block" viewBox="0 0 100 100">
                  <path d="M 10 50 Q 50 10 90 50" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </div>
              
              {/* Budlee Character with Speech Bubble */}
              <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-6 z-20">
                {/* Speech Bubble */}
                <div className="absolute -top-10 md:-top-14 left-1/2 -translate-x-1/2 bg-white rounded-xl md:rounded-2xl px-3 py-1.5 md:px-4 md:py-2 shadow-lg whitespace-nowrap">
                  <span className="text-gray-700 font-semibold text-xs md:text-sm">Talk to Budlee</span>
                  {/* Bubble tail */}
                  <div className="absolute -bottom-1.5 md:-bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-white transform rotate-45"></div>
                </div>
                {/* Budlee Character - Smaller on mobile */}
                <img 
                  src="/images/logo.png" 
                  alt="Budlee" 
                  className="w-14 h-14 md:w-20 md:h-20 object-contain animate-bounce-gentle cursor-pointer hover:scale-110 transition-transform"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <div className="text-center mb-6 md:mb-8">
                {/* Tag - Small, uppercase, letter-spaced with pill background */}
                <span className="inline-block text-xs md:text-sm text-emerald-700 font-medium uppercase tracking-[0.2em] mb-4 md:mb-5 bg-emerald-100/80 px-4 py-1.5 rounded-full">
                  AI Learning Companion
                </span>
                {/* Tagline - Smaller on mobile, allows wrapping */}
                <h1 className="hero-tagline text-xl sm:text-2xl md:text-3xl lg:text-[32px]">
                  Understands how students learn
                </h1>
                <h1 className="hero-tagline text-xl sm:text-2xl md:text-3xl lg:text-[32px] mt-1">
                  and helps <span className="gradient-text">curiosity</span> grow early.
                </h1>
              </div>

              {/* CTA Buttons - Centered */}
              <div className="flex flex-col items-center gap-3 md:gap-4 w-full max-w-sm px-4 md:px-0">
                <a href="https://app.budlee.ai/" rel="noopener noreferrer" className="w-full">
                  <Button 
                    className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold px-6 py-5 md:px-8 md:py-7 text-sm md:text-base rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    Start Learning with Budlee
                    <span className="text-lg">→</span>
                  </Button>
                </a>
                
                {/* School Link */}
                <p className="text-gray-500 text-sm md:text-base mt-1 md:mt-2 text-center">
                  Are you a school?{' '}
                  <a 
                    href="/schools" 
                    className="gradient-text font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
                  >
                    Get Budlee for Your School
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CBSE Curriculum Section */}
      <div className="w-full bg-white/80 backdrop-blur-sm py-4 md:py-5 px-4 md:px-12 lg:px-20 border-t border-gray-100 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Mobile: Stacked layout, Desktop: Single line */}
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-3 md:gap-6">
            {/* Title + Science Label */}
            <div className="flex items-center gap-3 md:gap-6">
              {/* Title */}
              <span className="text-gray-500 font-medium text-sm md:text-base whitespace-nowrap">
                Aligned with <span className="gradient-text font-bold">CBSE</span> Curriculum
              </span>
              
              {/* Separator - Hidden on mobile */}
              <div className="hidden md:block w-px h-6 bg-gray-200"></div>

              {/* Science Label with Icon */}
              <div className="flex items-center gap-1.5 md:gap-2 text-gray-600">
                <FlaskConical className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                <span className="font-semibold text-sm md:text-base">Science</span>
              </div>
            </div>

            {/* Separator - Hidden on mobile */}
            <div className="hidden md:block w-px h-6 bg-gray-200"></div>

            {/* Class Pills - Horizontal scroll on mobile */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide max-w-full">
              {curriculumData.classes.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 text-white font-bold text-xs md:text-sm px-3 py-1 md:px-4 md:py-1.5 rounded-full shadow-sm hover:shadow-md hover:from-green-500 hover:via-emerald-600 hover:to-teal-500 transition-all duration-300 cursor-pointer"
                >
                  {item.class}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
