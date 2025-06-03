import React from 'react';
import { motion } from 'framer-motion';

const Demolition = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[500px] bg-cover bg-center" 
        style={{ backgroundImage: "url('https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Services/Demo/gecon_demo_1.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvU2VydmljZXMvRGVtby9nZWNvbl9kZW1vXzEud2VicCIsImlhdCI6MTc0ODYyODY0NCwiZXhwIjoyMzc5MzQ4NjQ0fQ.5CJQYA0h6gL0_5ggI2PconajjxTY8QqnFkyea5vOZJ0')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <h1 className="text-white font-barlowCondensed text-6xl md:text-8xl font-medium">
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
              <h2 className="font-helvetica text-4xl md:text-5xl font-semibold mb-8">
                DEMOLITION &amp;{' '}
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
                    className="inline-block bg-[#454d53] text-white px-8 py-3 font-arial text-lg hover:bg-[#075f2c] transition-colors"
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
            <h2 className="font-helvetica text-4xl md:text-6xl font-semibold">
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
          <h2 className="font-helvetica text-4xl md:text-6xl font-semibold mb-12">
            REQUEST A CONSULTATION
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md" style={{ height: '465px' }}>
              <iframe
                  src="https://api.leadconnectorhq.com/widget/form/QHchmhm9Q0sSN1yWStXw"
                  style="width:100%;height:100%;border:none;border-radius:3px"
                  id="inline-QHchmhm9Q0sSN1yWStXw" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Request a consultation"
                  data-height="465"
                  data-layout-iframe-id="inline-QHchmhm9Q0sSN1yWStXw"
                  data-form-id="QHchmhm9Q0sSN1yWStXw"
                  title="Request a consultation"
                      >
                </iframe>
<script src="https://link.msgsndr.com/js/form_embed.js"></script>
            </div>
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
      <h3 className="font-barlowCondensed text-2xl font-medium text-[#0A122A] mb-4">{title}</h3>
      <p className="font-arial text-[#454d53]">{description}</p>
    </motion.div>
  );
};

const services = [
  {
    title: "Structural Demolition",
    description: "Complete demolition of buildings, structures, and facilities with precision and safety.",
    icon: "https://gecon-roofing.websitepro.hosting/wp-content/uploads/2021/05/structural-icon.png"
  },
  {
    title: "Environmental Remediation",
    description: "Safe removal and disposal of hazardous materials and environmental contaminants.",
    icon: "https://gecon-roofing.websitepro.hosting/wp-content/uploads/2021/05/environmental-icon.png"
  },
  {
    title: "Site Clearing",
    description: "Comprehensive clearing of sites including vegetation, debris, and structure removal.",
    icon: "https://gecon-roofing.websitepro.hosting/wp-content/uploads/2021/05/clearing-icon.png"
  },
  {
    title: "Selective Demolition",
    description: "Precise removal of specific building components while preserving surrounding structures.",
    icon: "https://gecon-roofing.websitepro.hosting/wp-content/uploads/2021/05/selective-icon.png"
  },
  {
    title: "Material Recovery",
    description: "Salvage and recycling of valuable materials from demolition projects.",
    icon: "https://gecon-roofing.websitepro.hosting/wp-content/uploads/2021/05/recovery-icon.png"
  },
  {
    title: "Project Management",
    description: "Expert oversight and coordination of complex demolition projects from start to finish.",
    icon: "https://gecon-roofing.websitepro.hosting/wp-content/uploads/2021/05/management-icon.png"
  }
];

export default Demolition;