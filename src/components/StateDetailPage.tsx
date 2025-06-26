import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase } from 'lucide-react';
import SEO from './SEO';
import { StateData } from '../data/stateData';

interface StateDetailPageProps {
  stateData: StateData;
}

const StateDetailPage: React.FC<StateDetailPageProps> = ({ stateData }) => {
  return (
    <div className="min-h-screen">
      <SEO 
        title={`${stateData.name} Services`}
        description={`Georgia Environmental Construction services in ${stateData.name}. ${stateData.description}`}
        canonicalUrl={`https://gecon.com/states/${stateData.slug}`}
      />
      
      {/* Hero Section */}
      <section 
        className="relative h-[500px] bg-cover bg-center" 
        style={{ backgroundImage: `url('${stateData.heroImageUrl}')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div>
            <h1 className="text-white mb-4">
              {stateData.name.toUpperCase()}
            </h1>
            <p className="text-white text-xl max-w-3xl leading-relaxed">
              {stateData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities Section */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-[#075f2c] text-white font-medium mb-4">
              MAJOR CITIES
            </span>
            <h2 className="text-[#0A122A] mb-6">
              WHERE WE SERVE IN {stateData.name.toUpperCase()}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stateData.majorCities.map((city, index) => (
              <motion.div
                key={city.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('${city.imageUrl}')` }}
                ></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={18} className="text-[#075f2c]" />
                    <h3 className="text-[#0A122A] text-xl font-bold">
                      {city.name}
                    </h3>
                  </div>
                  <p className="text-[#454d53] leading-relaxed">
                    {city.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Done Section */}
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
              OUR WORK
            </span>
            <h2 className="text-[#0A122A] mb-6">
              PROJECTS COMPLETED IN {stateData.name.toUpperCase()}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stateData.workDone.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-[#075f2c]/10 p-3 rounded-full">
                    <Briefcase size={24} className="text-[#075f2c]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#0A122A] text-xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4 mb-3">
                      {project.year && (
                        <div className="flex items-center gap-1 text-sm text-[#454d53]">
                          <Calendar size={16} />
                          <span>{project.year}</span>
                        </div>
                      )}
                      <span className="px-3 py-1 bg-[#075f2c]/10 text-[#075f2c] rounded-full text-sm font-medium">
                        {project.type}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-[#454d53] leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-16 bg-[#075f2c] text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">
              NEED SERVICES IN {stateData.name.toUpperCase()}?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed max-w-3xl mx-auto">
              Contact our experienced team for professional construction, disaster recovery, and environmental services throughout {stateData.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn btn-secondary text-lg px-8 py-4">
                Get a Consultation
              </a>
              <a href="tel:+1678-269-1114" className="btn btn-dark text-lg px-8 py-4">
                Call (678) 269-1114
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StateDetailPage;