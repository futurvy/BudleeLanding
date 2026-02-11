import React from 'react';
import { TrendingUp, Sparkles, BookOpen, Target } from 'lucide-react';

const ParentsSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-5 px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* Headline - Same font as hero tagline with green color */}
            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text">
              Clarity for parents
            </h2>
            
            {/* Story Lines - First Group */}
            <div className="space-y-3 md:space-y-4 mb-8">
              <p className="text-xl md:text-2xl text-gray-700 font-medium">
                <span className="gradient-text font-bold">Understanding</span> becomes visible.
              </p>
              <p className="text-xl md:text-2xl text-gray-700 font-medium">
                <span className="gradient-text font-bold">Interests</span> appear early.
              </p>
            </div>
            
            {/* Story Lines - Second Group */}
            <div className="space-y-3 md:space-y-4">
              <p className="text-xl md:text-2xl text-gray-500 font-medium">
                No <span className="text-gray-600 font-semibold">pressure</span>.
              </p>
              <p className="text-xl md:text-2xl text-gray-500 font-medium">
                No <span className="text-gray-600 font-semibold">forced paths</span>.
              </p>
            </div>
          </div>

          {/* Right Side - Parent Dashboard Preview */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Decorative background shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-green-100 to-yellow-50 rounded-3xl transform rotate-1"></div>
              
              {/* Dashboard Container */}
              <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-gray-100 w-[300px] md:w-[400px] overflow-hidden">
                
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 px-5 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">R</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm md:text-base">Ria's Progress</h4>
                      <p className="text-green-100 text-xs">Grade 8 • Science</p>
                    </div>
                  </div>
                  <img 
                    src="/images/logo.png" 
                    alt="Budlee" 
                    className="w-8 h-8 object-contain"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>

                {/* Dashboard Content */}
                <div className="p-5 space-y-5">
                  
                  {/* Understanding Level */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700 font-semibold text-sm">Understanding</span>
                      </div>
                      <span className="text-green-600 font-bold text-sm">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <p className="text-gray-500 text-xs mt-2">Chapter 5: Light & Reflection</p>
                  </div>

                  {/* Discovered Interests */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-4 h-4 text-yellow-500" />
                      <span className="text-gray-700 font-semibold text-sm">Discovered Interests</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">Space</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">AI</span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">Robotics</span>
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">Astronomy</span>
                    </div>
                  </div>

                  {/* Curiosity Score & Learning Pace */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-3 text-center">
                      <Target className="w-5 h-5 text-green-600 mx-auto mb-1" />
                      <p className="text-green-700 font-bold text-lg">92</p>
                      <p className="text-gray-600 text-xs">Curiosity Score</p>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-3 text-center">
                      <TrendingUp className="w-5 h-5 text-yellow-600 mx-auto mb-1" />
                      <p className="text-yellow-700 font-bold text-lg">Steady</p>
                      <p className="text-gray-600 text-xs">Learning Pace</p>
                    </div>
                  </div>

                </div>

                {/* Dashboard Footer */}
                <div className="bg-gray-50 px-5 py-3 border-t border-gray-100">
                  <p className="text-gray-500 text-xs text-center">Updated daily by Budlee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentsSection;
