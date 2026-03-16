import React, { useState, useEffect } from 'react';
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import axios from 'axios';

const BACKEND_URL = "https://apis.budlee.ai/api";

const PromoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [promotions, setPromotions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState({});

  const DISMISSAL_KEY = 'budlee_promo_dismissed_v1';

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BACKEND_URL}/superadmin/promotions/?platform=LandingPage&is_active=true`);
        const data = response.data;
        const promoList = Array.isArray(data) ? data : (data.results || []);

        setPromotions(promoList);
        window.dispatchEvent(new CustomEvent('promos-updated', { detail: { count: promoList.length } }));

        if (promoList.length > 0) {
          // Auto-open only if NOT previously dismissed
          if (!localStorage.getItem(DISMISSAL_KEY)) {
            setIsOpen(true);
          }
        }
      } catch (error) {
        console.error("Error fetching promotions:", error);
        window.dispatchEvent(new CustomEvent('promos-updated', { detail: { count: 0 } }));
      } finally {
        setLoading(false);
      }
    };

    fetchPromotions();

    const handleOpenExternal = () => {
      setIsOpen(true);
    };

    window.addEventListener('open-promo-modal', handleOpenExternal);

    const handleQueryStatus = () => {
      window.dispatchEvent(new CustomEvent('promos-updated', {
        detail: { count: promotions.length }
      }));
    };
    window.addEventListener('query-promo-status', handleQueryStatus);

    return () => {
      window.removeEventListener('open-promo-modal', handleOpenExternal);
      window.removeEventListener('query-promo-status', handleQueryStatus);
    };
  }, [promotions.length]);

  const handleManualClose = () => {
    setIsOpen(false);
    localStorage.setItem(DISMISSAL_KEY, 'true');
  };

  const nextPromo = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % promotions.length);
  };

  const prevPromo = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + promotions.length) % promotions.length);
  };

  const handleImageLoad = (id) => {
    setImagesLoaded(prev => ({ ...prev, [id]: true }));
  };

  // Only return null if we are still loading OR if no promotions exist at all
  if (loading || promotions.length === 0) return null;

  const currentPromo = promotions[currentIndex];
  const isCurrentImageLoaded = imagesLoaded[currentPromo.id];

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={(open) => { if (!open) setIsOpen(false); }}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        />

        <DialogPrimitive.Content
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
          className="fixed left-[50%] top-[50%] z-[60] w-[92vw] sm:w-fit max-w-full sm:max-w-[85vw] max-h-[98vh] translate-x-[-50%] translate-y-[-50%] focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 duration-300 flex flex-col items-center justify-center p-0"
        >
          <div className="relative flex flex-col items-center gap-5 sm:gap-6 w-full">

            <DialogPrimitive.Title className="sr-only">Promotions</DialogPrimitive.Title>
            <DialogPrimitive.Description className="sr-only">View current promotions.</DialogPrimitive.Description>

            {/* Core Interaction Area */}
            <div className="relative flex items-center justify-center w-full">
              {/* External Arrows - Desktop Only */}
              {promotions.length > 1 && isCurrentImageLoaded && (
                <>
                  <button
                    onClick={prevPromo}
                    className="absolute -left-12 sm:-left-16 md:-left-24 p-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all backdrop-blur-sm z-[70] hidden sm:flex border border-white/10"
                  >
                    <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                  </button>
                  <button
                    onClick={nextPromo}
                    className="absolute -right-12 sm:-right-16 md:-right-24 p-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all backdrop-blur-sm z-[70] hidden sm:flex border border-white/10"
                  >
                    <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                  </button>
                </>
              )}

              {/* The Poster Area */}
              <div className="relative w-full sm:w-auto overflow-visible group">

                {/* Small Close Button - Just Outside Top Corner */}
                {isCurrentImageLoaded && (
                  <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-[80] animate-in fade-in duration-500">
                    <button
                      onClick={handleManualClose}
                      className="p-1.5 sm:p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-200 hover:scale-110 focus:outline-none ring-1 ring-white/20 backdrop-blur-md"
                      aria-label="Close"
                    >
                      <X className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                )}

                <div className="relative overflow-hidden rounded-[10px] sm:rounded-[20px] shadow-[0_40px_80px_rgba(0,0,0,0.8)] min-h-[300px] sm:min-w-[400px] flex items-center justify-center bg-white/5">

                  {/* Shimmer Placeholder */}
                  {!isCurrentImageLoaded && (
                    <div className="absolute inset-0 z-10 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
                    </div>
                  )}

                  <img
                    src={currentPromo.poster_image_url || currentPromo.poster_image}
                    alt={`Promotion ${currentIndex + 1}`}
                    onLoad={() => handleImageLoad(currentPromo.id)}
                    className={`w-full sm:w-auto h-auto max-w-full max-h-[75vh] md:max-h-[80vh] object-contain select-none align-middle transition-opacity duration-700 ${isCurrentImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onContextMenu={(e) => e.preventDefault()}
                  />

                  {isCurrentImageLoaded && (
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-tr from-white/5 to-transparent animate-in fade-in duration-1000"></div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Actions Area */}
            {isCurrentImageLoaded && (
              <div className="flex flex-col items-center gap-4 sm:gap-5 w-full max-w-[280px] sm:max-w-[320px] animate-in fade-in slide-in-from-bottom-2 duration-700">

                {/* Mobile Navigation */}
                {promotions.length > 1 && (
                  <div className="flex sm:hidden items-center gap-6 mb-1">
                    <button
                      onClick={prevPromo}
                      className="p-2.5 bg-white/10 text-white rounded-full active:scale-95 transition-transform"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="flex gap-1.5">
                      {promotions.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-emerald-400 w-5' : 'bg-white/30'}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={nextPromo}
                      className="p-2.5 bg-white/10 text-white rounded-full active:scale-95 transition-transform"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}

                {/* Subtly Sized Action Button */}
                {currentPromo.button_name && currentPromo.url && (
                  <div className="w-full">
                    <a
                      href={currentPromo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                      onClick={() => setIsOpen(false)}
                    >
                      <Button
                        className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold py-3.5 sm:py-4 text-base sm:text-lg rounded-xl sm:rounded-2xl shadow-[0_15px_30px_rgba(16,185,129,0.3)] transform transition-all duration-300 group-hover:scale-[1.02] active:scale-[0.98] border border-white/20 uppercase tracking-widest flex items-center justify-center gap-2"
                      >
                        {currentPromo.button_name}
                        <span className="text-lg sm:text-xl group-hover:translate-x-1 transition-transform">→</span>
                      </Button>
                    </a>
                  </div>
                )}

                {/* Subtle desktop dots */}
                {promotions.length > 1 && (
                  <div className="hidden sm:flex gap-2.5">
                    {promotions.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-emerald-400 w-6' : 'bg-white/20 hover:bg-white/40'}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
      `}</style>
    </DialogPrimitive.Root>
  );
};

export default PromoModal;
