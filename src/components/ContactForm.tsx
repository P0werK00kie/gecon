import React from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  
  const onSubmit = (data: FormData) => {
    console.log(data);
    // In a real implementation, this would send data to a server
    alert('Form submitted successfully!');
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
          {...register('message')}
        ></textarea>
      </div>
      
      <div className="mb-6">
        <div className="recaptcha-placeholder h-[78px] bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
          reCAPTCHA would be placed here
        </div>
      </div>
      
      <button 
        type="submit"
        className="w-full bg-[#075f2c] text-white py-3 font-medium hover:bg-[#064723] transition duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;