import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'TREE SERVICES',
    imageUrl: 'https://gecon-roofing.websitepro.hosting/wp-content/uploads/2021/03/TreeCallout.jpg',
    link: '/tree-services'
  },
  {
    title: 'DISASTER RECOVERY',
    imageUrl: 'https://gecon-roofing.websitepro.hosting/wp-content/uploads/2021/03/DisasterCallout.jpg',
    link: '/disaster-recovery'
  },
  {
    title: 'CIVIL CONSTRUCTION',
    imageUrl: 'https://gecon-roofing.websitepro.hosting/wp-content/uploads/2021/03/CivilConstrCallout.jpg',
    link: '/civil-construction'
  },
  {
    title: 'DEMOLITION',
    imageUrl: 'https://gecon-roofing.websitepro.hosting/wp-content/uploads/2021/03/DemolitionCallout.jpg',
    link: '/demolition'
  },
  {
    title: 'RESIDENTIAL ROOFING',
    imageUrl: 'https://gecon-roofing.websitepro.hosting/wp-content/uploads/2021/03/RoofingCallout.jpg',
    link: '/residential-roofing'
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