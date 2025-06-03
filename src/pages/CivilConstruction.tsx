import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const CivilConstruction = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="CIVIL CONSTRUCTION"
        description="Elite civil construction services including infrastructure development, water management, environmental projects, and utility infrastructure. Professional management and contracting services for federal and local governments."
        canonicalUrl="https://gecon.com/civil-construction"
      />
      {/* Hero Section */}
      <section 
        className="relative h-[500px] bg-cover bg-center" 
        style={{ backgroundImage: "url('https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Services/Civil/gecon_civil_1.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvU2VydmljZXMvQ2l2aWwvZ2Vjb25fY2l2aWxfMS53ZWJwIiwiaWF0IjoxNzQ4NjI4NTEzLCJleHAiOjIzNzkzNDg1MTN9.Cuk0VZlq8C4CMK9QWPAiotOOCbYfZpxWW7TV2jZ_cf0')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <h1 className="text-white font-barlowCondensed text-6xl md:text-8xl font-medium">
            CIVIL CONSTRUCTION
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
                style={{ backgroundImage: "url('https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Services/Civil/gecon_civil_2.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvU2VydmljZXMvQ2l2aWwvZ2Vjb25fY2l2aWxfMi53ZWJwIiwiaWF0IjoxNzQ4NjI4NTMwLCJleHAiOjIzNzkzNDg1MzB9.y9SrWt7tMqiNXXsZ0Ew5kbt751TPgQdsOjbGn3xWamc')" }}
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
                CIVIL{' '}
                <span className="text-[#075f2c]">CONSTRUCTION</span>
              </h2>
              
              <div className="space-y-6">
                <p className="font-arial text-[#454d53] text-lg leading-relaxed">
                  Georgia Environmental Construction partners with federal and local governments across the United States to provide elite management and contracting services in support of infrastructure programs such as levees and flood control, roads and bridges, landfills, and utilities.
                </p>

                <p className="font-arial text-[#454d53] text-lg leading-relaxed">
                  Our heavy civil construction projects are led and executed by a dedicated team of progressive, experienced engineers, professional and well-versed management specialists, environmental health and safety experts, backed by a solid, accomplished team of survey crews and highly-trained equipment operators.
                </p>

                <div className="mt-8">
                  <a 
                    href="/contact" 
                    className="inline-block bg-[#454d53] text-white px-8 py-3 font-arial text-lg hover:bg-[#075f2c] transition-colors"
                  >
                    MOVE FORWARD
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#075f2c] text-white font-arial mb-4">
              EXPERTISE
            </span>
            <h2 className="font-helvetica text-4xl md:text-6xl font-semibold">
              OUR CAPABILITIES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <CapabilityCard key={index} {...capability} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-16">
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
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-3 border-b border-[#454d53] bg-transparent focus:outline-none focus:border-[#075f2c]"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full p-3 border-b border-[#454d53] bg-transparent focus:outline-none focus:border-[#075f2c]"
                />
              </div>
              
              <textarea
                placeholder="Project Details"
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

interface CapabilityCardProps {
  title: string;
  description: string;
  icon: string;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({ title, description, icon }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-lg p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-[#075f2c] mb-4">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
      </div>
      <h3 className="font-barlowCondensed text-2xl font-medium text-[#0A122A] mb-4">{title}</h3>
      <p className="font-arial text-[#454d53]">{description}</p>
    </motion.div>
  );
};

const capabilities = [
  {
    title: "Infrastructure Development",
    description: "Roads, bridges, and transportation systems built to the highest standards of quality and safety.",
    icon: "https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Services/Civil/infrastructure-7736249.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvU2VydmljZXMvQ2l2aWwvaW5mcmFzdHJ1Y3R1cmUtNzczNjI0OS5zdmciLCJpYXQiOjE3NDg5NzY0MjgsImV4cCI6MjM3OTY5NjQyOH0.gEN4gVopAujyjZd56LA0BwAsDZQ8DHyMgxAHYR32wcw"
  },
  {
    title: "Water Management",
    description: "Levees, dams, and flood control systems designed to protect communities and natural resources.",
    icon: "https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Services/Civil/water.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvU2VydmljZXMvQ2l2aWwvd2F0ZXIuc3ZnIiwiaWF0IjoxNzQ4OTc2Mzk2LCJleHAiOjIzNzk2OTYzOTZ9.5e-f_R9EGlMDsamU1ZYTiEE9b28Epv59Ef7za4Z06aM"
  },
  {
    title: "Environmental Projects",
    description: "Landfill construction, erosion control, and environmental remediation services.",
    icon: "https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Services/Civil/environmenta.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvU2VydmljZXMvQ2l2aWwvZW52aXJvbm1lbnRhLnN2ZyIsImlhdCI6MTc0ODk3NjMwOSwiZXhwIjoyMzc5Njk2MzA5fQ.ts7vP3Bt8KgZwLRk_qfra53J7T1tLWBkrdWwYmCg3A8"
  },
  {
    title: "Utility Infrastructure",
    description: "Installation and maintenance of water, sewer, gas, and electrical utility systems.",
    icon: "https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Services/Civil/utility-6185891.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvU2VydmljZXMvQ2l2aWwvdXRpbGl0eS02MTg1ODkxLnN2ZyIsImlhdCI6MTc0ODk3NjQxNCwiZXhwIjoyMzc5Njk2NDE0fQ.QTkwURiNZKZLGb-18gPEybR5w2Rn3dG8fRpagMRfOOg"
  },
  {
    title: "Site Development",
    description: "Comprehensive site preparation, grading, excavation, and foundation work.",
    icon: "https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Services/Civil/site%20developement.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvU2VydmljZXMvQ2l2aWwvc2l0ZSBkZXZlbG9wZW1lbnQuc3ZnIiwiaWF0IjoxNzQ4OTc2MzgwLCJleHAiOjIzNzk2OTYzODB9.m7nROsjCPmVDaVOTMOdSND9aKh4gRnTd3r47nH0nNos"
  },
  {
    title: "Project Management",
    description: "Expert oversight and coordination of complex civil construction projects from start to finish.",
    icon: "https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Services/Civil/projectmanagement.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvU2VydmljZXMvQ2l2aWwvcHJvamVjdG1hbmFnZW1lbnQuc3ZnIiwiaWF0IjoxNzQ4OTc2MzYzLCJleHAiOjIzNzk2OTYzNjN9.kezU9TaWpQPfk2EZ4zdqprwMt9otd4tWbzN-jjySoKY"
  }
];

export default CivilConstruction;