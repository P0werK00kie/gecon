import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-gray-100 bg-opacity-60">
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
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">WHAT OUR CLIENTS SAY</h2>
            
            <blockquote className="text-xl italic font-medium mb-6">
              "Gecon was wonderful to work with. Their responsiveness during an emergency situation was amazing, and they performed their job with efficiency. This is a sample for a social media review feed. Live reviews will be shown here."
            </blockquote>
            
            <p className="mb-8">John Smith via Facebook</p>
            
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