import React from 'react';
import { motion } from 'framer-motion';

const CommercialRoofing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[500px] bg-cover bg-center" 
        style={{ backgroundImage: "url('https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Services/Commercial%20Roofing/gecon_commercial_roof_2.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvU2VydmljZXMvQ29tbWVyY2lhbCBSb29maW5nL2dlY29uX2NvbW1lcmNpYWxfcm9vZl8yLndlYnAiLCJpYXQiOjE3NDg2Mjg5NTEsImV4cCI6MjM3OTM0ODk1MX0.NKOefkO6WSGJ-NXJyaAHfdh7DKJ8fF9ehZfPtXJkF7w')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <h1 className="text-white font-barlowCondensed text-6xl md:text-8xl font-medium">
            COMMERCIAL ROOFING
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
                style={{ backgroundImage: "url('https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Services/Commercial%20Roofing/gecon_commercial_roof_1.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvU2VydmljZXMvQ29tbWVyY2lhbCBSb29maW5nL2dlY29uX2NvbW1lcmNpYWxfcm9vZl8xLndlYnAiLCJpYXQiOjE3NDg2Mjg5MzMsImV4cCI6MjM3OTM0ODkzM30.cg7ZFZX6X42kB8wp8kr7z6iKsiJyeqoqOwmH9X_O55E')" }}
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
                We have{' '}
                <span className="text-[#075f2c]">you covered</span>
              </h2>
              
              <div className="space-y-6">
                <p className="font-arial text-[#454d53] text-lg leading-relaxed">
                  Gecon specializes in all phases of the commercial roofing process; from roof repairs to re-roofing, from maintenance programs to complete roof overhauls. Our team of highly experienced and knowledgeable commercial roofing professionals are dedicated to serving your needs in a timely manner with an emphasis on excellent craftsmanship.
                </p>

                <ul className="list-disc list-inside space-y-2 text-[#454d53] text-lg">
                  <li>Roof replacements and new roofs</li>
                  <li>Roof repairs and preventative maintenance</li>
                  <li>Flat roofs, new flat roof and repairs of flat roofs</li>
                  <li>Commercial roofing</li>
                </ul>

                <p className="font-arial text-[#454d53] text-lg leading-relaxed">
                  We also handle insurance claims and have a team of specialists that have years of experience working with large insurance companies such as Allstate, State Farm, USAA and many more!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Free Inspection Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-helvetica text-4xl md:text-6xl font-semibold">
              FREE ROOF INSPECTION
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md" style={{ height: '465px' }}>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/QHchmhm9Q0sSN1yWStXw"
                style={{ width:'100%', height:'100%', border:'none', borderRadius:'3px' }}
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

export default CommercialRoofing;