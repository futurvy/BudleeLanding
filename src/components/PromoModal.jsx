import React, { useState, useEffect } from 'react';
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from 'lucide-react';
import { Button } from './ui/button';

const PromoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Standard key for production
    const hasSeenPromo = localStorage.getItem('hasSeenStudentFounderPromoV1');
    if (!hasSeenPromo) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenStudentFounderPromoV1', 'true');
  };

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={handleClose}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" 
        />
        
        <DialogPrimitive.Content 
          className="fixed left-[50%] top-[50%] z-[60] w-full max-w-[95%] sm:max-w-[85vw] md:max-w-[750px] max-h-[98vh] translate-x-[-50%] translate-y-[-50%] focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 duration-300 flex flex-col items-center justify-center"
        >
          <div className="relative w-full flex flex-col items-center gap-4 sm:gap-5">
            
            {/* Accessibility */}
            <DialogPrimitive.Title className="sr-only">
              Student Founder Program Promotion
            </DialogPrimitive.Title>
            <DialogPrimitive.Description className="sr-only">
              Apply for the Student Founder Program at Budlee.
            </DialogPrimitive.Description>

            {/* Close Button - Smaller & External */}
            <div className="w-full flex justify-end px-1 sm:px-2">
                <DialogPrimitive.Close 
                className="p-1.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-200 hover:scale-110 focus:outline-none ring-1 ring-white/10"
                aria-label="Close"
                >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </DialogPrimitive.Close>
            </div>

            {/* Poster Card - Bigger Page Size */}
            <div className="relative w-full overflow-hidden rounded-[20px] sm:rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.6)] bg-white border-2 sm:border-4 border-white/20 group">
                <img 
                  src="/images/promos/student_founder_poster.png" 
                  alt="Student Founder Poster" 
                  className="w-full h-auto max-h-[65vh] md:max-h-[70vh] object-contain select-none align-middle"
                  onContextMenu={(e) => e.preventDefault()}
                />
                
                {/* Visual Glows */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-emerald-400/20 blur-[80px] pointer-events-none transition-opacity"></div>
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-teal-400/20 blur-[80px] pointer-events-none transition-opacity"></div>
            </div>
            
            {/* Action Button - Refined/Smaller per request */}
            <div className="w-full max-w-[280px] sm:max-w-[320px] animate-in slide-in-from-bottom-4 duration-500 delay-150 fill-mode-both">
                <a 
                    href="https://tinyurl.com/budlee" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block group"
                    onClick={handleClose}
                >
                    <Button 
                        className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold py-4 sm:py-5 text-base sm:text-lg rounded-xl sm:rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.3)] transform transition-all duration-300 group-hover:scale-[1.05] active:scale-[0.95] border border-white/20 uppercase tracking-widest flex items-center justify-center gap-2"
                    >
                        Apply Now - It's Free
                        <span className="text-xl sm:text-2xl group-hover:translate-x-1 transition-transform">→</span>
                    </Button>
                </a>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default PromoModal;
