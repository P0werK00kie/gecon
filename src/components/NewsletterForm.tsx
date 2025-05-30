import React from 'react';
import { useForm } from 'react-hook-form';

interface NewsletterFormData {
  email: string;
}

const NewsletterForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<NewsletterFormData>();
  
  const onSubmit = (data: NewsletterFormData) => {
    console.log(data);
    // In a real implementation, this would send data to a server
    alert('Subscribed to newsletter successfully!');
    reset();
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
        {errors.email && <span className="text-red-400 text-sm">{errors.email.message}</span>}
      </div>
      
      <button 
        type="submit"
        className="bg-[#075f2c] text-white py-3 px-6 uppercase font-medium hover:bg-[#064723] transition duration-300 w-full md:w-auto"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default NewsletterForm;