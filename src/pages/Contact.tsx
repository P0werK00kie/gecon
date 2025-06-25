import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const stats = [
    {
      icon: MapPin,
      number: "1557 South Broad St.",
      label: "Monroe, GA 30655"
    },
    {
      icon: Phone,
      number: "678.269.1114",
      label: "24/7 Emergency Line"
    },
    {
      icon: Mail,
      number: "information@gecon.com",
      label: "General Inquiries"
    },
    {
      icon: Clock,
      number: "Mon - Fri",
      label: "9am - 5pm"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="CONTACT"
        description="Contact Georgia Environmental Construction for all your construction, disaster recovery, and environmental service needs. Available 24/7 for emergency response."
        canonicalUrl="https://gecon.com/contact"
      />
      {/* Hero Section */}
      <section 
        className="relative h-[500px] bg-cover bg-center" 
        style={{ backgroundImage: "url('https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Contact%20Us/contact1.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvQ29udGFjdCBVcy9jb250YWN0MS5qcGciLCJpYXQiOjE3NDg4ODEwODIsImV4cCI6MjM3OTYwMTA4Mn0._7WOcofbQaODRUcXlCsumImslmzSoQEHOJWNMYd8AyI')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <h1 className="text-white">
            CONTACT
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-32 px-4 md:px-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Form */}
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ContactForm />
            </motion.div>
            
            {/* Contact Information */}
            <motion.div 
              className="w-full md:w-1/2 px-0 md:px-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-8">
                Move <span className="text-[#075f2c]">Forward</span>
              </h2>
              
              <div className="space-y-6">
                <p className="font-arial text-[#454d53] text-lg leading-relaxed">
                  Contact us by using the form or directly by phone and email.
                </p>

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">PHONE</h3>
                  <p className="text-lg">
                    <a href="tel:+1678-269-1114" className="text-[#454d53] hover:text-[#075f2c] transition-colors">
                      678.269.1114
                    </a>
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">EMAIL</h3>
                  <p className="text-lg">
                    <a href="mailto:information@gecon.com" className="text-[#454d53] hover:text-[#075f2c] transition-colors">
                      information@gecon.com
                    </a>
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">ADDRESS</h3>
                  <p className="text-lg text-[#454d53]">
                    1557 South Broad St.<br />
                    Monroe, GA 30655
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">OFFICE HOURS</h3>
                  <p className="text-lg text-[#454d53]">
                    Monday - Friday<br />
                    9am - 5pm
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Stats Section */}
      <section className="py-16 px-4 md:px-16 bg-[#075f2c]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white mb-8">
              GET IN TOUCH
            </h2>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-[#075F2C]/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-sm text-gray-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-16 px-4 md:px-16 bg-[#454d53] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-white mb-8">
            EMERGENCY RESPONSE
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto mb-8">
            For emergency disaster recovery and response services, please call our 24/7 hotline.
          </p>
          
          <a 
            href="tel:+1678-269-1114" 
            className="btn btn-primary"
          >
            678.269.1114
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;