import React from 'react';
import { motion } from 'framer-motion';
import ServiceRequestForm from '../components/ServiceRequestForm';

const TreeServices = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[500px] bg-cover bg-center" 
        style={{ backgroundImage: "url('https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Services/Tree%20Services/gecon_tree_services.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvU2VydmljZXMvVHJlZSBTZXJ2aWNlcy9nZWNvbl90cmVlX3NlcnZpY2VzLndlYnAiLCJpYXQiOjE3NDg2MjQ1NjksImV4cCI6MjM3OTM0NDU2OX0.R-_5RaIvELV7F16xc2rnHD9Nkt0mZqGRC1RwNSSfW9o')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <h1 className="text-white font-barlowCondensed text-6xl md:text-8xl font-medium">
            TREE SERVICES
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-32 px-4 md:px-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div 
                className="h-full min-h-[400px] bg-cover bg-center rounded-lg" 
                style={{ backgroundImage: "url('https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Services/Tree%20Services/gecon_tree_services_2.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvU2VydmljZXMvVHJlZSBTZXJ2aWNlcy9nZWNvbl90cmVlX3NlcnZpY2VzXzIud2VicCIsImlhdCI6MTc0ODYyNDU5NCwiZXhwIjoyMzc5MzQ0NTk0fQ.W95t_YFgps75F7NFCDFyx7hEahtzR5MKdLVd0Z5Nrjs')" }}
              ></div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2 px-0 md:px-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-helvetica text-4xl md:text-5xl font-semibold mb-8">
                ROOTED IN{' '}
                <span className="text-[#075f2c]">ENVIRONMENTAL RESPONSIBILITY.</span>
              </h2>
              
              <p className="font-arial text-[#454d53] text-lg leading-relaxed mb-8">
                Gecon prides itself on providing efficient, dynamic services that benefit our environment, and our team of licensed and insured arborists make no exceptions to our mission. In all of our tree care services; from line clearing and hazardous tree removal to stump grinding and removal, Gecon is committed to offering only the safest methods and environmentally conscious solutions to benefit you and your community.
              </p>

              <ul className="font-arial text-[#454d53] text-lg space-y-2 mb-8 list-disc list-inside">
                <li>Emergency Services</li>
                <li>DOT Right-Of-Way</li>
                <li>Power Line Clearing</li>
                <li>Hazardous Tree Removal</li>
                <li>Tree Trimming</li>
                <li>Stump Grinding & Removal</li>
              </ul>

              <p className="font-arial text-[#454d53] text-lg leading-relaxed">
                Our clients include government agencies, retail and hospitality establishments, HOA/CDD organizations, cemeteries, medical campuses, Class A operations, apartment complexes, and industrial businesses.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <ServiceRequestForm 
              serviceType="tree"
              title="REQUEST A CONSULTATION"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreeServices;