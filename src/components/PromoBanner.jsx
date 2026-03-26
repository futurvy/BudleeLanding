import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = "https://staging-apis.budlee.ai/api";

const PromoBanner = () => {
    const [promotions, setPromotions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPromotions = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${BACKEND_URL}/superadmin/promotions/?platform=LandingPage&is_active=true`);
                const rawData = response.data;
                const promoList = Array.isArray(rawData) ? rawData : (rawData.results || []);

                const bannerPromos = promoList
                    .filter(p => p.program_name && p.program_name.trim() !== '')
                    .sort((a, b) => (a.order_number || 0) - (b.order_number || 0));
                
                setPromotions(bannerPromos);
            } catch (error) {
                console.error("Error fetching banner promotions:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPromotions();
    }, []);

    // Auto-scrolling logic
    useEffect(() => {
        if (promotions.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % promotions.length);
        }, 5000); // 5 seconds interval

        return () => clearInterval(interval);
    }, [promotions.length]);

    const nextPromo = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % promotions.length);
    };

    const prevPromo = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + promotions.length) % promotions.length);
    };

    const openPromoModal = () => {
        window.dispatchEvent(new CustomEvent('open-promo-modal', {
            detail: { promotionId: currentPromo.id }
        }));
    };

    if (loading || promotions.length === 0) return null;

    const currentPromo = promotions[currentIndex];

    // Improved Parsing Logic
    const fullText = (currentPromo.program_name || "").trim();
    const hasLive = fullText.toLowerCase().startsWith("live |");
    const contentText = hasLive ? fullText.slice(6).trim() : fullText;

    // Split on the character '|' to separate title and info
    const parts = contentText.split('|').map(p => p.trim());
    const displayTitle = parts[0];
    const displaySecondary = parts[1];

    return (
        <div className="w-full py-4 md:py-6 px-4 flex justify-center items-center">
            <div
                onClick={openPromoModal}
                className="group relative flex flex-wrap md:flex-nowrap items-center justify-center gap-2 md:gap-4 bg-[#ecfdf5] border-2 border-emerald-500/10 px-4 py-3 md:px-8 md:py-3.5 rounded-2xl md:rounded-full shadow-[0_4px_25px_-5px_rgba(16,185,129,0.1),0_2px_10px_-3px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_-10px_rgba(16,185,129,0.25)] hover:bg-[#d1fae5] hover:-translate-y-0.5 transition-all duration-500 cursor-pointer max-w-full md:max-w-fit overflow-hidden"
            >
                {/* Advanced Shimmer Animation Effect */}
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                    <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] animate-banner-shimmer"></div>
                </div>

                {/* HAPPENING NOW Badge */}
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#22c55e] rounded-full flex-shrink-0 shadow-sm shadow-green-500/20 relative z-10">
                    <div className="w-2.5 h-2.5 bg-white rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-[#16a34a] rounded-full animate-ping"></div>
                    </div>
                    <span className="text-[9px] md:text-[11px] font-black text-white uppercase tracking-[0.12em] whitespace-nowrap">HAPPENING NOW</span>
                </div>

                <div className="flex items-center gap-1 md:gap-4 flex-grow md:flex-grow-0 min-w-0 relative z-10">
                    {/* Navigation Arrows (Prev) */}
                    {promotions.length > 1 && (
                        <button
                            onClick={prevPromo}
                            className="p-1 hover:bg-black/5 rounded-full text-[#94a3b8] hover:text-[#22c55e] transition-all flex-shrink-0"
                            aria-label="Previous promotion"
                        >
                            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
                        </button>
                    )}

                    {/* Main Content Info */}
                    <div className="flex items-center gap-1.5 md:gap-3 overflow-hidden">
                        {hasLive && (
                            <>
                                <div className="w-2 h-2 bg-[#22c55e]/30 rounded-full flex items-center justify-center flex-shrink-0">
                                    <div className="w-1.5 h-1.5 bg-[#22c55e] rounded-full"></div>
                                </div>
                                <span className="font-extrabold text-[#059669] text-sm md:text-[19px] tracking-tight">LIVE</span>
                            </>
                        )}
                        <span className="font-black text-[#1e293b] text-sm md:text-[19px] truncate tracking-tight">
                            {displayTitle}
                        </span>
                    </div>

                    {/* Navigation Arrows (Next) */}
                    {promotions.length > 1 && (
                        <button
                            onClick={nextPromo}
                            className="p-1 hover:bg-black/5 rounded-full text-[#94a3b8] hover:text-[#22c55e] transition-all flex-shrink-0"
                            aria-label="Next promotion"
                        >
                            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
                        </button>
                    )}
                </div>

                {/* Vertical Line Separator (only on Desktop) */}
                {(displaySecondary || currentPromo.button_name) && (
                    <div className="hidden md:block w-px h-6 bg-emerald-200/50 mx-1 relative z-10"></div>
                )}

                {/* Secondary Info & Dynamic CTA */}
                <div className="flex items-center gap-3 md:gap-5 flex-shrink-0 relative z-10">
                    {displaySecondary && (
                        <span className="text-[11px] md:text-[15px] text-[#64748b] font-medium whitespace-nowrap">
                            {displaySecondary}
                        </span>
                    )}

                    {currentPromo.button_name && (
                        <div className="flex items-center gap-1.5 md:gap-2">
                            <div className="w-1 h-1 bg-emerald-300 rounded-full hidden md:block"></div>
                            <span className="text-[13px] md:text-[19px] font-black text-[#10b981] group-hover:text-[#059669] flex items-center gap-1 md:gap-1.5 transition-all duration-300">
                                {currentPromo.button_name} <ArrowRight className="w-4 h-4 md:w-6 md:h-6 stroke-[3px] group-hover:translate-x-1.5 transition-transform" />
                            </span>
                        </div>
                    )}
                </div>
            </div>

            <style>{`
                @keyframes banner-shimmer {
                    0% { left: -100%; }
                    20%, 100% { left: 200%; }
                }
                .animate-banner-shimmer {
                    animation: banner-shimmer 4s infinite linear;
                }
            `}</style>
        </div>
    );
};

export default PromoBanner;
