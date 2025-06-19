import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="section-skew-both py-16 px-4 md:px-16 bg-gray-100 bg-opacity-60">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Testimonials */}
          <motion.div 
            className="w-full lg:w-3/5 lg:pr-16"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-2 py-1 bg-[#075f2c] text-white font-medium mb-4">REVIEWS</span>
            <h2 className="mb-6">WHAT OUR CLIENTS SAY</h2>
            
            <blockquote className="text-xl italic font-medium mb-6">
"I would like to take this opportunity to thank you for the excellent experience... Gecon Construction... handled every aspect of the project, along with its complexities, with professionalism and integrity; making it an enthusiastic process and well-earned success... I look forward to working together with Gecon Construction in the future." 
            </blockquote>
            
            <p className="mb-8">- Kyle Young</p>
            
            <a href="/about-us" className="btn btn-dark">
              READ MORE
            </a>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;