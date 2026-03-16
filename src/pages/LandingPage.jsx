import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CBSECurriculumSection from '../components/CBSECurriculumSection';
import AfterSchoolSection from '../components/AfterSchoolSection';
import UnderstandingSection from '../components/UnderstandingSection';
import PracticeSection from '../components/PracticeSection';
import CuriositySection from '../components/CuriositySection';
import ParentsSection from '../components/ParentsSection';
import Footer from '../components/Footer';

const LandingPage = () => {
  useEffect(() => {
    mixpanel.track('Landing Page Viewed');
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CBSECurriculumSection />
        <AfterSchoolSection />
        <UnderstandingSection />
        <PracticeSection />
        <CuriositySection />
        <ParentsSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
