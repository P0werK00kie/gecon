import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Opportunities = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="OPPORTUNITIES"
        description="Join Georgia Environmental Construction as a subcontractor. Discover opportunities in emergency response, civil construction, demolition, and more."
        canonicalUrl="https://gecon.com/opportunities"
      />
      {/* Hero Section */}
      <section 
        className="relative h-[500px] bg-cover bg-center" 
        style={{ backgroundImage: "url('https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Opportunities/opp1.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvT3Bwb3J0dW5pdGllcy9vcHAxLndlYnAiLCJpYXQiOjE3NDg2Mjk0MDUsImV4cCI6MjM3OTM0OTQwNX0.oERmvhili0MO2FFrbw2ifm801rgFDvTW18QHZqGqMS4')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <h1 className="text-white">
            OPPORTUNITIES
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
                style={{ backgroundImage: "url('https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Opportunities/opp2.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvT3Bwb3J0dW5pdGllcy9vcHAyLndlYnAiLCJpYXQiOjE3NDg2Mjk0NTQsImV4cCI6MjM3OTM0OTQ1NH0.Tv75zr1XiRqqdBETXPwyqzNKgcAcTpaIn1uoYhjcefQ')" }}
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
                Become a Georgia Environmental{' '}
                <span className="text-[#075f2c]">Construction SUBCONTRACTOR</span>
              </h2>
              
              <div className="space-y-6">
                <p className="font-arial text-[#454d53] text-lg leading-relaxed">
                  Gecon has rebuilt the infrastructure for hundreds of communities and laid a foundation for hope and rebirth for millions of lives across the United States for more than thirty years, and it would not have been possible without the dedicated partnerships between Gecon and hundreds of hard-working subcontractors and crews. Join us in continuing to foster our legacy of industry excellence by applying below.
                </p>

                <div>
                  <h3 className="text-xl font-bold mb-3">Current Opportunities</h3>
                  <ul className="space-y-1 text-[#454d53]">
                    <li>Emergency Response / Debris Clean-Up</li>
                    <li>Site Management</li>
                    <li>Heavy Civil Construction</li>
                    <li>Engineering</li>
                    <li>Demolition / Deconstruction</li>
                    <li>Tree Services</li>
                    <li>Hazardous Waste Removal</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <div className="container mx-auto">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-center md:text-left">
              If you are interested in being placed in our registry as an emergency response / debris management subcontractor, please read the following information below carefully.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="mb-4">Insurance Requirements</h3>
              <p className="mb-4">
                Subcontractors shall maintain in effect for the duration of any subcontract agreement with Gecon the following insurance policies:
              </p>
              
              <h4 className="text-xl font-semibold mb-2">General Liability:</h4>
              <ul className="list-disc list-inside mb-4 ml-2">
                <li>Each Occurrence – $2,000,000</li>
                <li>Aggregate – $2,000,000</li>
              </ul>
              
              <h4 className="text-xl font-semibold mb-2">Auto Liability:</h4>
              <ul className="list-disc list-inside mb-4 ml-2">
                <li>$1,000,000</li>
                <li>Any Auto OR Scheduled/Hired/Non-Owned must be covered</li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="mb-4">Worker's Compensation</h3>
              <p className="mb-4">
                Worker's Compensation must be statutory to the state in which work is being performed. Owners and officers must be covered by the WC policy.
              </p>
              
              <h4 className="text-xl font-semibold mb-2">Employer's Liability:</h4>
              <ul className="list-disc list-inside mb-4 ml-2">
                <li>$500,000 per accident</li>
                <li>$500,000 disease policy limit</li>
                <li>$500,000 disease each employee</li>
              </ul>
              
              <h4 className="text-xl font-semibold mb-2">Excess or Umbrella Liability:</h4>
              <ul className="list-disc list-inside mb-4 ml-2">
                <li>$1,000,000 per occurrence</li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-lg font-bold mb-4">
              Gecon must be listed as the additionally-insured on General, Auto, and Excess Liability policies on a primary and non-contributory basis. Waiver of Subrogation must apply to ALL policies.
            </p>
          </motion.div>
          
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a 
                href="/contact" 
                className="btn btn-dark"
              >
                APPLY NOW
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16 px-4 md:px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-[#075f2c] mb-4">Benefits of Partnership</h3>
              <ul className="space-y-2 text-[#454d53]">
                <li>• Consistent work opportunities</li>
                <li>• Competitive compensation</li>
                <li>• Professional development</li>
                <li>• Access to industry-leading projects</li>
                <li>• Long-term relationship potential</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-[#075f2c] mb-4">Required Documentation</h3>
              <ul className="space-y-2 text-[#454d53]">
                <li>• Proof of insurance</li>
                <li>• Business licenses</li>
                <li>• Certifications</li>
                <li>• References</li>
                <li>• Equipment inventory</li>
                <li>• Safety records</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-[#075f2c] mb-4">Application Process</h3>
              <ol className="space-y-2 text-[#454d53] list-decimal list-inside">
                <li>Submit initial application</li>
                <li>Documentation review</li>
                <li>Interview with project managers</li>
                <li>Verification of references</li>
                <li>Contract negotiation</li>
                <li>Onboarding and orientation</li>
              </ol>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Opportunities;