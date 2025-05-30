import React from 'react';

interface ServiceCardProps {
  title: string;
  imageUrl: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, imageUrl, link }) => {
  return (
    <div className="service-card h-80 rounded-lg shadow-lg overflow-hidden relative group">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
      />
      
      <div className="desc flex flex-col items-center justify-center text-center">
        <h2 className="text-white font-['Barlow_Condensed'] font-medium">{title}</h2>
        <div className="line group-hover:bg-white"></div>
      </div>
      
      <a href={link} className="absolute inset-0" aria-label={`Learn more about ${title}`}>
        <span className="sr-only">Learn more about {title}</span>
      </a>
    </div>
  );
};

export default ServiceCard;