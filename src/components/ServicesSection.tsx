import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'TREE SERVICES',
    imageUrl: 'https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Home%20Page/Cards/Gecon_TreeCallout.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvSG9tZSBQYWdlL0NhcmRzL0dlY29uX1RyZWVDYWxsb3V0LndlYnAiLCJpYXQiOjE3NDg2MjMxMDUsImV4cCI6MjM3OTM0MzEwNX0.eYsDlj_eCrskG0Fls_A732HhG3P85mLQsX7Eppi6eVM',
    link: '/tree-services'
  },
  {
    title: 'DISASTER RECOVERY',
    imageUrl: 'https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Home%20Page/Cards/gecon_DisasterCallout.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvSG9tZSBQYWdlL0NhcmRzL2dlY29uX0Rpc2FzdGVyQ2FsbG91dC53ZWJwIiwiaWF0IjoxNzQ4NjIyOTMwLCJleHAiOjIzNzkzNDI5MzB9.ARYc1msr7PnrtOiWmThEqEca34Kv_MHhAPCTBS5J6k4',
    link: '/disaster-recovery'
  },
  {
    title: 'CIVIL CONSTRUCTION',
    imageUrl: 'https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Home%20Page/Cards/Gecon_CivilConstrCallout.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvSG9tZSBQYWdlL0NhcmRzL0dlY29uX0NpdmlsQ29uc3RyQ2FsbG91dC53ZWJwIiwiaWF0IjoxNzQ4NjIyNzY3LCJleHAiOjIzNzkzNDI3Njd9.cqgpv0BsIdMKwT1mL0nY2oFZL3GFcKk-0ecolRb9E3M',
    link: '/civil-construction'
  },
  {
    title: 'DEMOLITION',
    imageUrl: 'https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Home%20Page/Cards/Gecon_DemolitionCallout.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvSG9tZSBQYWdlL0NhcmRzL0dlY29uX0RlbW9saXRpb25DYWxsb3V0LndlYnAiLCJpYXQiOjE3NDg2MjI4NTQsImV4cCI6MjM3OTM0Mjg1NH0.ZwnXGoePgzQGuy1Sjy3TYLbG6TDNHdhBrITROjxjZxU',
    link: '/demolition'
  },
  {
    title: 'COMMERCIAL ROOFING',
    imageUrl: 'https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Home%20Page/Cards/Gecon_RoofingCallout.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvSG9tZSBQYWdlL0NhcmRzL0dlY29uX1Jvb2ZpbmdDYWxsb3V0LndlYnAiLCJpYXQiOjE3NDg2MjMwNDYsImV4cCI6MjM3OTM0MzA0Nn0.Bcs5sOVP_BE48SXvFjmoO9GOtT1PhcB_lB0b0U3L8q0',
    link: '/commercial-roofing'
  },
  {
    title: 'OPPORTUNITIES',
    imageUrl: 'https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Home%20Page/Cards/gecon_Contractor_Callout.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvSG9tZSBQYWdlL0NhcmRzL2dlY29uX0NvbnRyYWN0b3JfQ2FsbG91dC53ZWJwIiwiaWF0IjoxNzQ4NjIyNTE1LCJleHAiOjIzNzkzNDI1MTV9.RBGbn_gRjKsKkU_as1pgwU26gPOZJqAon1fj07doqbQ',
    link: '/opportunities'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-gray-50">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-2 py-1 bg-[#075f2c] text-white font-medium mb-4">SERVICES</span>
          <h2 className="text-4xl md:text-6xl font-semibold">RECOVER &amp; REBUILD</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ServiceCard
                title={service.title}
                imageUrl={service.imageUrl}
                link={service.link}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;