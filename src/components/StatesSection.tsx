import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { getAllStates } from '../data/stateData';

const StatesSection: React.FC = () => {
  const states = getAllStates();

  return (
    <section className="py-20 px-4 md:px-16 bg-gray-50">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-[#075f2c] text-white font-medium mb-4">
            SERVICE AREAS
          </span>
          <h2 className="text-[#0A122A] mb-6">
            STATES WE SERVE
          </h2>
          <p className="text-[#454d53] text-lg max-w-3xl mx-auto leading-relaxed">
            Georgia Environmental Construction provides comprehensive disaster recovery, construction, and environmental services across the Southeastern United States. Click on any state to learn more about our work in that area.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {states.map((state, index) => (
            <motion.a
              key={state.slug}
              href={`/states/${state.slug}`}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div 
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url('${state.heroImageUrl}')` }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold text-center">
                    {state.name}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={18} className="text-[#075f2c]" />
                  <span className="text-[#075f2c] font-medium text-sm">
                    {state.majorCities.length} Major Cities
                  </span>
                </div>
                
                <p className="text-[#454d53] leading-relaxed mb-4 line-clamp-3">
                  {state.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-[#454d53] text-sm">
                    {state.workDone.length} Projects Completed
                  </span>
                  <div className="flex items-center gap-1 text-[#075f2c] group-hover:gap-2 transition-all duration-300">
                    <span className="font-medium text-sm">Learn More</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatesSection;