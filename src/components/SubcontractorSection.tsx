import React from 'react';
import { motion } from 'framer-motion';

const SubcontractorSection: React.FC = () => {
  return (
    <section 
      className="py-24 px-4 md:px-16 bg-cover bg-center relative" 
      style={{ backgroundImage: "url('https://gecon-roofing.websitepro.hosting/wp-content/uploads/2021/03/AdobeStock_209466807.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex justify-end">
          <motion.div 
            className="p-8 bg-black bg-opacity-50 max-w-md rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl text-white mb-6 font-['Barlow_Condensed']">
              ARE YOU A SUB-CONTRACTOR?
            </h3>
            
            <a href="/opportunities" className="btn btn-primary">
              JOIN OUR EFFORTS
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SubcontractorSection;