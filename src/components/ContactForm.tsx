import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { supabase } from '../lib/supabase';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const { error } = await supabase
        .from('contact_submissions')
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
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border-b border-[#454d53] focus:outline-none focus:border-[#075f2c]"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
      </div>
      
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border-b border-[#454d53] focus:outline-none focus:border-[#075f2c]"
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
      </div>
      
      <div className="mb-4">
        <input
          type="tel"
          placeholder="Phone"
          className="w-full p-3 border-b border-[#454d53] focus:outline-none focus:border-[#075f2c]"
          {...register('phone', { 
            required: 'Phone number is required',
            pattern: {
              value: /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
              message: 'Invalid phone number format'
            }
          })}
        />
        {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
      </div>
      
      <div className="mb-6">
        <textarea
          placeholder="How can we help you?"
          rows={4}
          className="w-full p-3 border-b border-[#454d53] focus:outline-none focus:border-[#075f2c]"
          {...register('message', { required: 'Message is required' })}
        ></textarea>
        {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
      </div>
      
      {submitStatus === 'success' && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          There was an error submitting your message. Please try again.
        </div>
      )}
      
      <button 
        type="submit"
        disabled={isSubmitting}
        className={`btn btn-primary w-full ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default ContactForm;