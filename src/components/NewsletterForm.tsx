import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { supabase } from '../lib/supabase';

interface NewsletterFormData {
  email: string;
}

const NewsletterForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<NewsletterFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  
  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([data]);
      
      if (error) throw error;
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-4 items-center">
      <div className="w-full md:flex-grow">
        <input
          type="email"
          placeholder="Enter your email to sign up for our newsletter"
          className="w-full p-3 border-b border-[#454d53] bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-white"
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
        />
        {errors.email && <span className="text-red-400 text-sm mt-1">{errors.email.message}</span>}
        
        {submitStatus === 'success' && (
          <span className="text-green-400 text-sm mt-1">Thank you for subscribing!</span>
        )}
        
        {submitStatus === 'error' && (
          <span className="text-red-400 text-sm mt-1">Failed to subscribe. Please try again.</span>
        )}
      </div>
      
      <button 
        type="submit"
        disabled={isSubmitting}
        className={`bg-[#075f2c] text-white py-3 px-6 uppercase font-medium transition duration-300 w-full md:w-auto ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#064723]'
        }`}
      >
        {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
      </button>
    </form>
  );
};

export default NewsletterForm;