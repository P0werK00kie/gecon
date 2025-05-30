import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-16 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-stretch gap-10">
          <motion.div 
            className="w-full md:w-1/2 min-h-[300px] md:min-h-[400px] bg-cover bg-center rounded-lg"
            style={{ backgroundImage: "url('https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Home%20Page/gecon_about_us.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvSG9tZSBQYWdlL2dlY29uX2Fib3V0X3VzLndlYnAiLCJpYXQiOjE3NDg2MjEzMzYsImV4cCI6MjM3OTM0MTMzNn0.9ujfLJOh0Ruk1rSMqaAtBXfrZntmJIpEFDhOVnK6mmA')" }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 py-8 md:py-16 px-4 md:px-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold mb-6">
              BUILDING A LEGACY OF <span className="text-[#075f2c]">EXCELLENCE.</span>
            </h2>
            
            <p className="mb-8 text-lg">
              Georgia Environmental Construction has dedicated thirty years to building a better tomorrow. 
              When natural disasters strike, from hurricanes to wild fires, we rapidly respond with 
              strength and hope. Within minutes of natural catastrophes colliding with communities, 
              Gecon mobilizes hundreds of field personnel from across the United States of America 
              to provide expert emergency clean-up, rebuild, and response. When your community is facing 
              the aftermath of a major disaster, Gecon Construction will be there to recover and 
              rebuild a thriving community, together.
            </p>
            
            <a href="/about-us" className="btn btn-dark">
              READ MORE ABOUT US
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;