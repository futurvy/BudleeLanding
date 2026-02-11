import React from 'react';
import { FlaskConical } from 'lucide-react';
import { curriculumData } from '../data/mock.js';

const CBSECurriculumSection = () => {
  return (
    <section className="w-full bg-white/80 backdrop-blur-sm py-4 md:py-5 px-4 md:px-12 lg:px-20 border-t border-gray-100 relative z-10">
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
    </section>
  );
};

export default CBSECurriculumSection;