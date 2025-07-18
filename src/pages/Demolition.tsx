import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Demolition = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="DEMOLITION"
        description="Professional demolition and deconstruction services with thorough planning and modern mechanical resources. Expert team of engineers, operators, and management specialists."
        canonicalUrl="https://gecon.com/demolition"
      />
      {/* Hero Section */}
      <section 
        className="relative h-[500px] bg-cover bg-center" 
        style={{ backgroundImage: "url('https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Services/Demo/gecon_demo_1.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvU2VydmljZXMvRGVtby9nZWNvbl9kZW1vXzEud2VicCIsImlhdCI6MTc0ODYyODY0NCwiZXhwIjoyMzc5MzQ4NjQ0fQ.5CJQYA0h6gL0_5ggI2PconajjxTY8QqnFkyea5vOZJ0')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <h1 className="text-white">
            DEMOLITION
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
                style={{ backgroundImage: "url('https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Services/Demo/gecon_demolition_2.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvU2VydmljZXMvRGVtby9nZWNvbl9kZW1vbGl0aW9uXzIud2VicCIsImlhdCI6MTc0ODYyODY2MSwiZXhwIjoyMzc5MzQ4NjYxfQ.YC4COGDBlE49RmaIrdBgnljzSjfEDYpp7Q6rnN66IpY')" }}
              ></div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2 px-0 md:px-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-8">
                DEMOLITION &{' '}
                <span className="text-[#075f2c]">DECONSTRUCTION</span>
              </h2>
              
              <div className="space-y-6">
                <p className="font-arial text-[#454d53] text-lg leading-relaxed">
                  We approach each demo project with thorough planning, sharp execution, and modern mechanical resources. Gecon has built a powerful team of engineers, operators, and precise management with an emphasis on surveying, environmental remediation, and hazardous material handling.
                </p>

                <p className="font-arial text-[#454d53] text-lg leading-relaxed">
                  We have partnered with government agencies and private companies alike, completing successful demolition projects all across the United States.
                </p>

                <div className="mt-8">
                  <a 
                    href="/contact" 
                    className="btn btn-dark"
                  >
                    LET'S WORK TOGETHER
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#075f2c] text-white font-arial mb-4">
              SERVICES
            </span>
            <h2>
              OUR CAPABILITIES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-12">
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
                className="btn btn-primary"
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

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
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
      <h3 className="text-[#0A122A] mb-4">{title}</h3>
      <p className="font-arial text-[#454d53]">{description}</p>
    </motion.div>
  );
};

const services = [
  {
    title: "Structural Demolition",
    description: "Complete demolition of buildings, structures, and facilities with precision and safety.",
    icon: "https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Services/Demo/demolition-7861486.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvU2VydmljZXMvRGVtby9kZW1vbGl0aW9uLTc4NjE0ODYuc3ZnIiwiaWF0IjoxNzQ4OTc3NTIxLCJleHAiOjIzNzk2OTc1MjF9.3-k-DytklwkxJHA2CiJZKXW_ktVVsvgNO2JU1fqPbI4"
  },
  {
    title: "Environmental Remediation",
    description: "Safe removal and disposal of hazardous materials and environmental contaminants.",
    icon: "https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Services/Demo/remediation-6473980.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvU2VydmljZXMvRGVtby9yZW1lZGlhdGlvbi02NDczOTgwLnN2ZyIsImlhdCI6MTc0ODk3NzY0MSwiZXhwIjoyMzc5Njk3NjQxfQ.OBwKSSO-oYejEAF0vvFE06rLZHJ-SwIYUKYyIHV8m_w"
  },
  {
    title: "Site Clearing",
    description: "Comprehensive clearing of sites including vegetation, debris, and structure removal.",
    icon: "https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Services/Demo/site%20clearing.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvU2VydmljZXMvRGVtby9zaXRlIGNsZWFyaW5nLnN2ZyIsImlhdCI6MTc0ODk3NzY1OSwiZXhwIjoyMzc5Njk3NjU5fQ.xtqQrTF416FPL3O-GtVkeT8BY_hAc7QHm0fFGN0LqN0"
  },
  {
    title: "Selective Demolition",
    description: "Precise removal of specific building components while preserving surrounding structures.",
    icon: "https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Services/Demo/demolition%202-6272440.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvU2VydmljZXMvRGVtby9kZW1vbGl0aW9uIDItNjI3MjQ0MC5zdmciLCJpYXQiOjE3NDg5Nzc1OTAsImV4cCI6MjM3OTY5NzU5MH0.Ghci-yDOTXBDQAx_4TcE_RG2WCb1A7StLbIcEXz-Hwg"
  },
  {
    title: "Material Recovery",
    description: "Salvage and recycling of valuable materials from demolition projects.",
    icon: "https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Services/Demo/recovery-7888511.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvU2VydmljZXMvRGVtby9yZWNvdmVyeS03ODg4NTExLnN2ZyIsImlhdCI6MTc0ODk3NzYwNSwiZXhwIjoyMzc5Njk3NjA1fQ.vKCrmP_b857kkb3Pd_TIzQq07LFnHsXXbrQ1LX1EzW4"
  },
  {
    title: "Project Management",
    description: "Expert oversight and coordination of complex demolition projects from start to finish.",
    icon: "https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Services/Civil/projectmanagement.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvU2VydmljZXMvQ2l2aWwvcHJvamVjdG1hbmFnZW1lbnQuc3ZnIiwiaWF0IjoxNzQ4OTc3Njg1LCJleHAiOjIzNzk2OTc2ODV9._ZWwvk038QMn27knioGXuNcwSBFXOkwqmx7t-1INWnc"
  }
];

export default Demolition;