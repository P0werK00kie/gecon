import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const DisasterRecovery = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="DISASTER RECOVERY"
        description="24/7 emergency disaster recovery and response services. Expert management and support with extensive FEMA experience for hurricane, flood, tornado, and wildfire recovery."
        canonicalUrl="https://gecon.com/disaster-recovery"
      />
      {/* Hero Section */}
      <section 
        className="relative h-[500px] bg-cover bg-center" 
        style={{ backgroundImage: "url('https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Services/Disaster%20Recovery/gecon_disaster_1.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvU2VydmljZXMvRGlzYXN0ZXIgUmVjb3ZlcnkvZ2Vjb25fZGlzYXN0ZXJfMS53ZWJwIiwiaWF0IjoxNzQ4NjI0NzkzLCJleHAiOjIzNzkzNDQ3OTN9.dsuliP0Uzn4wbdDm1qeUhN6eUdwxaKuV6bgkt-kSJoY')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <h1 className="text-white font-barlowCondensed text-6xl md:text-8xl font-medium">
            DISASTER RECOVERY
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
                style={{ backgroundImage: "url('https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Services/Disaster%20Recovery/gecon_disaster_2.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvU2VydmljZXMvRGlzYXN0ZXIgUmVjb3ZlcnkvZ2Vjb25fZGlzYXN0ZXJfMi53ZWJwIiwiaWF0IjoxNzQ4NjI0ODE0LCJleHAiOjIzNzkzNDQ4MTR9.mbf4XqK5D0Jj8Ut-1KRxiqQFfo8VkjZaRyiCiiDV7Y0')" }}
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
                DISASTER RECOVERY AND{' '}
                <span className="text-[#075f2c]">RESPONSE</span>
              </h2>
              
              <div className="space-y-6">
                <p className="font-arial text-[#454d53] text-lg leading-relaxed">
                  Within 24 hours of natural disasters striking, Gecon has boots on the ground, motivated to provide emergency clean-up and response to destroyed communities. When you call on us, you partner with a company offering decades of experience working with FEMA and other government agencies rebuilding societies after hurricanes, floods, tornadoes, hail storms, and wildfires.
                </p>

                <p className="font-arial text-[#454d53] text-lg leading-relaxed">
                  Our dedicated fleet of recovery equipment and experienced crews works tirelessly to clear and dispose of storm debris. Gecon's elite management team offers comprehensive and effective planning and support to the affected people, creating an all-encompassing strategy to quickly return normalcy to suffering communities.
                </p>

                <div className="mt-8">
                  <a 
                    href="/contact" 
                    className="inline-block bg-[#454d53] text-white px-8 py-3 font-arial text-lg hover:bg-[#075f2c] transition-colors"
                  >
                    TAKE ACTION
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="font-helvetica text-4xl md:text-6xl font-semibold mb-12">
            REQUEST EMERGENCY ASSISTANCE
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
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-3 border-b border-[#454d53] bg-transparent focus:outline-none focus:border-[#075f2c]"
                />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full p-3 border-b border-[#454d53] bg-transparent focus:outline-none focus:border-[#075f2c]"
                />
              </div>
              
              <textarea
                placeholder="Describe the emergency situation"
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

export default DisasterRecovery;