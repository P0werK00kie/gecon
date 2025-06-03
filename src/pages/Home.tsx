import React from 'react';
import SEO from '../components/SEO';
import HeroSlider from '../components/HeroSlider';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ActionSection from '../components/ActionSection';
import TestimonialsSection from '../components/TestimonialsSection';
import SubcontractorSection from '../components/SubcontractorSection';

const Home = () => {
  return (
    <>
      <SEO 
        title="HOME"
        description="Georgia Environmental Construction has dedicated thirty years to natural disaster recovery and response. When natural disasters strike, from hurricanes to tornadoes, Gecon provides emergency recovery and response to affected communities."
        canonicalUrl="https://gecon.com"
      />
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