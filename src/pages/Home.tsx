import React from 'react';
import HeroSlider from '../components/HeroSlider';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ActionSection from '../components/ActionSection';
import TestimonialsSection from '../components/TestimonialsSection';
import SubcontractorSection from '../components/SubcontractorSection';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <ActionSection />
      <TestimonialsSection />
      <SubcontractorSection />
    </>
  );
};

export default Home;