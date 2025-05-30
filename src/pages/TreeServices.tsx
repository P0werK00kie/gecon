import React from 'react';
import { motion } from 'framer-motion';

const TreeServices = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[500px] bg-cover bg-center" 
        style={{ backgroundImage: "url('https://gecon-roofing.websitepro.hosting/wp-content/uploads/2021/05/tree-services1.jpg')" }}
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
                style={{ backgroundImage: "url('https://gecon-roofing.websitepro.hosting/wp-content/uploads/2021/05/tree-services2.jpg')" }}
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
          <h2 className="font-helvetica text-4xl md:text-6xl font-semibold mb-12">
            REQUEST A CONSULTATION
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 border-b border-[#454d53] bg-transparent focus:outline-none focus:border-[#075f2c]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border-b border-[#454d53] bg-transparent focus:outline-none focus:border-[#075f2c]"
                />
              </div>
              
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-3 border-b border-[#454d53] bg-transparent focus:outline-none focus:border-[#075f2c]"
              ></textarea>
              
              <button 
                type="submit"
                className="bg-[#075f2c] text-white py-3 px-8 font-arial text-lg hover:bg-[#064723] transition-colors"
              >
                SUBMIT REQUEST
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreeServices;