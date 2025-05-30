import React from 'react';
import { motion } from 'framer-motion';

const SubcontractorSection: React.FC = () => {
  return (
    <section 
      className="py-24 px-4 md:px-16 bg-cover bg-center relative" 
      style={{ backgroundImage: "url('https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Home%20Page/gecon_are_you_a_sub_contractor.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvSG9tZSBQYWdlL2dlY29uX2FyZV95b3VfYV9zdWJfY29udHJhY3Rvci53ZWJwIiwiaWF0IjoxNzQ4NjIyMTAzLCJleHAiOjIzNzkzNDIxMDN9.36j-K0W6F0MJJr1kklqPyEGRu1fjVPlrGALnia7dAzk')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex justify-center">
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
            
            <div className="flex justify-center">
              <a href="/opportunities" className="btn btn-primary">
                JOIN OUR EFFORTS
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SubcontractorSection;