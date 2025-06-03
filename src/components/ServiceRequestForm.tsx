import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { supabase } from '../lib/supabase';

interface BaseFormData {
  name?: string;
  first_name?: string;
  last_name?: string;
  email: string;
  phone?: string;
  message?: string;
  company?: string;
  project_details?: string;
  address?: string;
  insurance_company?: string;
  comments?: string;
  location?: string;
}

interface ServiceRequestFormProps {
  serviceType: 'tree' | 'disaster' | 'civil' | 'demolition' | 'commercial-roofing' | 'residential-roofing';
  title?: string;
}

const getTableName = (serviceType: string): string => {
  switch (serviceType) {
    case 'tree':
      return 'tree_service_requests';
    case 'disaster':
      return 'disaster_recovery_requests';
    case 'civil':
      return 'civil_construction_requests';
    case 'demolition':
      return 'demolition_requests';
    case 'commercial-roofing':
      return 'commercial_roofing_requests';
    case 'residential-roofing':
      return 'residential_roofing_requests';
    default:
      throw new Error('Invalid service type');
  }
};

const ServiceRequestForm: React.FC<ServiceRequestFormProps> = ({ serviceType, title }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<BaseFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const onSubmit = async (data: BaseFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const tableName = getTableName(serviceType);
      const { error } = await supabase
        .from(tableName)
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

  const renderFormFields = () => {
    switch (serviceType) {
      case 'tree':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border-b border-[#454d53] bg-transparent focus:outline-none focus:border-[#075f2c]"
                {...register('name', { required: 'Name is required' })}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border-b border-[#454d53] bg-transparent focus:outline-none focus:border-[#075f2c]"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
              />
            </div>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 border-b border-[#454d53] bg-transparent focus:outline-none focus:border-[#075f2c]"
              {...register('message', { required: 'Message is required' })}
            ></textarea>
          </>
        );

      case 'disaster':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border-b border-[#454d53] bg-transparent focus:outline-none focus:border-[#075f2c]"
                {...register('name', { required: 'Name is required' })}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border-b border-[#454d53] bg-transparent focus:outline-none focus:border-[#075f2c]"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 border-b border-[#454d53] bg-transparent focus:outline-none focus:border-[#075f2c]"
                {...register('phone', { required: 'Phone is required' })}
              />
              <input
                type="text"
                placeholder="Location"
                className="w-full p-3 border-b border-[#454d53] bg-transparent focus:outline-none focus:border-[#075f2c]"
                {...register('location', { required: 'Location is required' })}
              />
            </div>
            <textarea
              placeholder="Describe the emergency situation"
              rows={4}
              className="w-full p-3 border-b border-[#454d53] bg-transparent focus:outline-none focus:border-[#075f2c]"
              {...register('message', { required: 'Message is required' })}
            ></textarea>
          </>
        );

      case 'civil':
      case 'demolition':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border-b border-[#454d53] bg-transparent focus:outline-none focus:border-[#075f2c]"
                {...register('name', { required: 'Name is required' })}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border-b border-[#454d53] bg-transparent focus:outline-none focus:border-[#075f2c]"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 border-b border-[#454d53] bg-transparent focus:outline-none focus:border-[#075f2c]"
                {...register('phone', { required: 'Phone is required' })}
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full p-3 border-b border-[#454d53] bg-transparent focus:outline-none focus:border-[#075f2c]"
                {...register('company', { required: 'Company is required' })}
              />
            </div>
            <textarea
              placeholder="Project Details"
              rows={4}
              className="w-full p-3 border-b border-[#454d53] bg-transparent focus:outline-none focus:border-[#075f2c]"
              {...register('project_details', { required: 'Project details are required' })}
            ></textarea>
          </>
        );

      case 'commercial-roofing':
      case 'residential-roofing':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border-b border-[#454d53] bg-transparent focus:outline-none focus:border-[#075f2c]"
                {...register('first_name', { required: 'First name is required' })}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border-b border-[#454d53] bg-transparent focus:outline-none focus:border-[#075f2c]"
                {...register('last_name', { required: 'Last name is required' })}
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full p-3 border-b border-[#454d53] bg-transparent focus:outline-none focus:border-[#075f2c]"
                {...register('address', { required: 'Address is required' })}
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 border-b border-[#454d53] bg-transparent focus:outline-none focus:border-[#075f2c]"
                {...register('phone', { required: 'Phone is required' })}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border-b border-[#454d53] bg-transparent focus:outline-none focus:border-[#075f2c]"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
              />
              <input
                type="text"
                placeholder="Insurance Company"
                className="w-full p-3 border-b border-[#454d53] bg-transparent focus:outline-none focus:border-[#075f2c]"
                {...register('insurance_company', { required: 'Insurance company is required' })}
              />
            </div>
            <textarea
              placeholder="Comments"
              rows={4}
              className="w-full p-3 border-b border-[#454d53] bg-transparent focus:outline-none focus:border-[#075f2c]"
              {...register('comments')}
            ></textarea>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {title && (
        <div className="text-center mb-12">
          <h2 className="font-helvetica text-4xl md:text-6xl font-semibold">
            {title}
          </h2>
        </div>
      )}

      {renderFormFields()}

      {submitStatus === 'success' && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          Thank you for your request! We'll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          There was an error submitting your request. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-[#075f2c] text-white py-3 font-medium transition duration-300 ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#064723]'
        }`}
      >
        {isSubmitting ? 'Submitting...' : 'SUBMIT REQUEST'}
      </button>
    </form>
  );
};

export default ServiceRequestForm;