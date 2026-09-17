import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, X } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = "https://apis.budlee.ai/api";

const PromoBanner = () => {
    const [promotions, setPromotions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dismissedPromoIds, setDismissedPromoIds] = useState(() => {
        try {
            const stored = sessionStorage.getItem('dismissed_promotions');
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPromotions = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${BACKEND_URL}/superadmin/promotions/?platform=LandingPage&is_active=true`);
                const rawData = response.data;
                const promoList = Array.isArray(rawData) ? rawData : (rawData.results || []);

                const bannerPromos = promoList
                    .filter(p => p.program_name && p.program_name.trim() !== '' && !dismissedPromoIds.includes(p.id))
                    .sort((a, b) => (a.order_number || a.order || 0) - (b.order_number || b.order || 0));

                setPromotions(bannerPromos);
            } catch (error) {
                console.error("Error fetching banner promotions:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPromotions();
    }, [dismissedPromoIds]);

    // Auto-scrolling logic
    useEffect(() => {
        if (promotions.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % promotions.length);
        }, 5000); // 5 seconds interval

        return () => clearInterval(interval);
    }, [promotions.length]);

    const nextPromo = (e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % promotions.length);
    };

    const prevPromo = (e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + promotions.length) % promotions.length);
    };

    const openPromoModal = () => {
        if (!currentPromo) return;
        window.dispatchEvent(new CustomEvent('open-promo-modal', {
            detail: { promotionId: currentPromo.id }
        }));
    };

    const handleDismiss = (e) => {
        if (e) e.stopPropagation();
        if (!currentPromo) return;
        const updatedDismissed = [...dismissedPromoIds, currentPromo.id];
        setDismissedPromoIds(updatedDismissed);
        try {
            sessionStorage.setItem('dismissed_promotions', JSON.stringify(updatedDismissed));
        } catch (err) {
            console.error("Error setting dismissed promotions:", err);
        }
        if (currentIndex >= promotions.length - 1) {
            setCurrentIndex(Math.max(0, promotions.length - 2));
        }
    };

    if (loading || promotions.length === 0) return null;

    const currentPromo = promotions[currentIndex];
    if (!currentPromo || !currentPromo.program_name) return null;

    // Parsing Logic
    const fullText = (currentPromo.program_name || "").trim();
    const hasLive = fullText.toLowerCase().startsWith("live |");
    const contentText = hasLive ? fullText.slice(6).trim() : fullText;

    // Split on '|' delimiter
    const parts = contentText.split('|').map(p => p.trim()).filter(Boolean);
    const displayTitle = parts[0] || '';
    const displaySecondary = parts[1] || '';
    const extraLines = parts.slice(2);

    const renderFormattedSecondary = (text) => {
        if (!text) return null;
        const regex = /["“]([^"”]+)["”]/g;
        if (!regex.test(text)) {
            return text;
        }
        regex.lastIndex = 0;
        const elements = [];
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(text)) !== null) {
            if (match.index > lastIndex) {
                elements.push(text.slice(lastIndex, match.index));
            }
            elements.push(
                <span key={match.index} className="font-extrabold text-sm md:text-[17px] text-[#1e293b] mx-0.5">
                    {match[1]}
                </span>
            );
            lastIndex = regex.lastIndex;
        }

        if (lastIndex < text.length) {
            elements.push(text.slice(lastIndex));
        }

        return elements;
    };

    return (
        <div className="w-full py-3 md:py-5 px-4 flex justify-center items-center">
            <div
                onClick={openPromoModal}
                className="group relative flex flex-col items-center justify-center gap-1.5 bg-[#ecfdf5] border-2 border-emerald-500/10 px-6 py-3 md:px-10 md:py-3.5 rounded-2xl md:rounded-[26px] shadow-[0_4px_25px_-5px_rgba(16,185,129,0.1),0_2px_10px_-3px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_-10px_rgba(16,185,129,0.25)] hover:bg-[#d1fae5] hover:-translate-y-0.5 transition-all duration-500 cursor-pointer max-w-full md:max-w-fit overflow-hidden text-center"
            >
                {/* Close Button */}
                <button
                    onClick={handleDismiss}
                    className="absolute top-2.5 right-2.5 md:top-3 md:right-3.5 p-1 bg-black/5 hover:bg-black/10 rounded-full text-black/60 transition-all z-20 hover:scale-105 active:scale-95 border border-black/5 flex items-center justify-center"
                    title="Dismiss announcement"
                >
                    <X className="w-3 h-3 md:w-3.5 md:h-3.5" />
                </button>
                {/* Advanced Shimmer Animation Effect */}
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                    <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] animate-banner-shimmer"></div>
                </div>

                {/* Row 1: Action Button & Navigation */}
                <div className="flex items-center justify-center gap-2 md:gap-3 relative z-10">
                    {currentPromo.button_name && (
                        <div className="flex items-center gap-1.5 md:gap-2 px-3 py-1 bg-emerald-600 text-white rounded-full group-hover:bg-emerald-700 transition-all duration-300 shadow-sm">
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-wider whitespace-nowrap">
                                {currentPromo.button_name}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 stroke-[3px] group-hover:translate-x-1 transition-transform" />
                        </div>
                    )}

                    {promotions.length > 1 && (
                        <div className="flex items-center gap-1 bg-black/5 rounded-full p-0.5">
                            <button
                                onClick={prevPromo}
                                className="p-0.5 hover:bg-black/10 rounded-full text-black/60 transition-all flex-shrink-0"
                                aria-label="Previous promotion"
                            >
                                <ChevronLeft className="w-3.5 h-3.5 md:w-4 md:h-4" />
                            </button>
                            <span className="text-[8px] md:text-[9px] font-bold text-black/40 px-1">
                                {currentIndex + 1}/{promotions.length}
                            </span>
                            <button
                                onClick={nextPromo}
                                className="p-0.5 hover:bg-black/10 rounded-full text-black/60 transition-all flex-shrink-0"
                                aria-label="Next promotion"
                            >
                                <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                            </button>
                        </div>
                    )}
                </div>

                {/* Row 2: Program Name Lines (Centered) */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center gap-0.5">
                    {/* Line 1: Title */}
                    <div className="flex items-center justify-center gap-1.5 md:gap-2">
                        {hasLive && (
                            <div className="px-1.5 py-0.5 rounded bg-red-500 text-[8px] md:text-[9px] font-black text-white leading-none shadow-sm flex-shrink-0">
                                LIVE
                            </div>
                        )}
                        <h3 className="font-black text-[#1e293b] text-sm md:text-lg tracking-tight leading-tight">
                            {displayTitle}
                        </h3>
                    </div>

                    {/* Line 2: Subtitle with Quote Emphasis */}
                    {displaySecondary && (
                        <p className="font-medium text-[#475569] text-xs md:text-sm tracking-tight leading-snug">
                            {renderFormattedSecondary(displaySecondary)}
                        </p>
                    )}

                    {/* Line 3+: Small Under-Text */}
                    {extraLines.length > 0 && extraLines.map((line, idx) => (
                        <p key={idx} className="text-[9px] md:text-[10.5px] text-[#64748b]/80 font-normal tracking-normal leading-tight mt-0.5">
                            {line}
                        </p>
                    ))}
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
