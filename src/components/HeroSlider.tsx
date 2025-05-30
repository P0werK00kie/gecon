import React from 'react';
import { motion } from 'framer-motion';

const HeroSlider: React.FC = () => {
  return (
    <div className="hero-slider relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://gecon-roofing.websitepro.hosting/wp-content/uploads/2021/04/iStock-635922448.jpg')" }}>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex flex-col justify-center">
        <div className="mt-20 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white font-['Barlow_Condensed'] text-5xl md:text-7xl lg:text-[120px] font-light leading-tight">
              BUILDING<br />
              TOMORROW<br />
              <span className="text-[#075f2c]">TOGETHER</span>
            </h1>
          </motion.div>
          
          <motion.div 
            className="mt-8 md:mt-16 space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a 
              href="/contact"
              className="btn btn-primary"
            >
              CONTACT US
            </a>
            <a 
              href="/tree-services"
              className="btn btn-secondary"
            >
              MORE
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;