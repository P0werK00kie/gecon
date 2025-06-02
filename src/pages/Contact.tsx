import React from 'react';
import { motion } from 'framer-motion';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const mapStyles = {
    height: "400px",
    width: "100%"
  };
  
  const defaultCenter = {
    lat: 33.7947, // Monroe, GA coordinates
    lng: -83.7130
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[500px] bg-cover bg-center" 
        style={{ backgroundImage: "url('https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Contact%20Us/contact1.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvQ29udGFjdCBVcy9jb250YWN0MS5qcGciLCJpYXQiOjE3NDg4ODEwODIsImV4cCI6MjM3OTYwMTA4Mn0._7WOcofbQaODRUcXlCsumImslmzSoQEHOJWNMYd8AyI')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <h1 className="text-white font-barlowCondensed text-6xl md:text-8xl font-medium">
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
              <h2 className="font-helvetica text-4xl md:text-5xl font-semibold mb-8">
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
                      info@geconcorp.com
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
                    8am - 5pm
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-helvetica text-4xl md:text-6xl font-semibold">
              FIND US
            </h2>
          </div>
          
          <div className="w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden">
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={15}
                center={defaultCenter}
              >
                <Marker position={defaultCenter} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-16 px-4 md:px-16 bg-[#075f2c] text-white">
        <div className="container mx-auto text-center">
          <h2 className="font-helvetica text-4xl md:text-5xl font-semibold mb-8">
            EMERGENCY RESPONSE
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto mb-8">
            For emergency disaster recovery and response services, please call our 24/7 hotline.
          </p>
          
          <a 
            href="tel:+1678-269-1114" 
            className="inline-block bg-white text-[#075f2c] py-3 px-8 font-arial text-xl font-bold hover:bg-gray-100 transition-colors rounded-md"
          >
            678.269.1114
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;