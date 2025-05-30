import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CounterAnimation from './CounterAnimation';

const stats = [
  {
    title: 'EXPERIENCE',
    number: 20,
    suffix: '+',
    subtitle: 'YEARS'
  },
  {
    title: 'DEVELOPMENT',
    number: 16,
    suffix: 'M',
    subtitle: 'SQUARE FEET'
  },
  {
    title: 'DEPLOYED',
    number: 50,
    suffix: 'K',
    subtitle: 'CONTRACTORS'
  },
  {
    title: 'RECOVERY',
    number: 350,
    suffix: 'K',
    subtitle: 'HELPED'
  }
];

const ActionSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section 
      ref={sectionRef}
      className="action-section py-24 px-4 md:px-16 text-white relative"
    >
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Home%20Page/gecon_in_action.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvSG9tZSBQYWdlL2dlY29uX2luX2FjdGlvbi53ZWJwIiwiaWF0IjoxNzQ4NjIxOTI5LCJleHAiOjIzNzkzNDE5Mjl9.6kAb8vmGXexRD1lhLX3d7FkQzEnqjJwVUFcH6wttVWA')" }}></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left column - Stats */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="inline-block px-2 py-1 bg-[#075f2c] text-white font-medium mb-4">RECENT EVENTS</span>
              <h2 className="text-4xl md:text-6xl font-semibold text-[#0A122A]">GECON<br/>IN ACTION</h2>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="quick-fact text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <h4 className="mb-2">{stat.title}</h4>
                  <div className="text-4xl md:text-5xl font-bold mb-1">
                    <CounterAnimation value={stat.number} /> 
                    <span className="text-3xl ml-1">{stat.suffix}</span>
                  </div>
                  <h5 className="mb-2">{stat.subtitle}</h5>
                  <hr className="w-10 mx-auto border-t-2 border-white" />
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Right column - Events */}
          <div className="w-full lg:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#191e28] p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-3xl font-medium mb-1">2020</h3>
              <p>
                In August 2020, CAT 4 Hurricane Laura, one of the most powerful to strike the Gulf Coast in decades, hit the Lake Charles, Louisiana area, causing widespread destruction from devastating winds and heavy rain. In September 2020, CAT 2 Hurricane Sally struck the Gulf Shores, Alabama area, and left immediate devastation in its wake. Gecon is currently mobilizing dozens of relief crews to aid the recovery efforts on the coasts of Louisiana and Alabama. Stay tuned for updates.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#191e28] p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-3xl font-medium mb-4">2018</h3>
              <p>
                Historic hurricane Michael, the third most intense hurricane to make landfall in the United States; and its fury engulfed the whole of Florida and most of Georgia in the beginning of October 2018. While Michael was still raging, Gecon mobilized recovery crews from all across the nation to immediately begin storm recovery and relief for the citizens of Florida. When Hurricane Florence hit September 2018, Gecon made it their mission to help North Carolina military communities and base operations rebuild that has continued into 2019, with no sign of slowing down until our North Carolina armed forces are thriving again. Stay in touch for more updates.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionSection;