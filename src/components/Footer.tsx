import React from 'react';
import { Facebook } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#191e28] text-white">
      {/* Newsletter Section */}
      <div className="footer-action">
        <div className="container mx-auto px-4 py-8">
          <NewsletterForm />
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 flex items-center">
            <a href="/" className="block mr-6">
              <img 
                src="https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Logos/GeconlogoWorld-white.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvTG9nb3MvR2Vjb25sb2dvV29ybGQtd2hpdGUucG5nIiwiaWF0IjoxNzQ4ODgwOTIyLCJleHAiOjIzNzk2MDA5MjJ9.Jmzch1BGYiCtpLciGQL4LFJe6pqsh3NxiaryecQhQPc" 
                alt="Gecon Logo" 
                className="h-28"
              />
            </a>
            <h3 className="text-2xl text-white font-medium">
              <a href="tel:+1678-269-1114" className="hover:text-white-200 transition">678.269.1114</a>
            </h3>
          </div>
          
          <div>
            <p className="mb-1">Office hours:</p>
            <p className="mb-1">Monday - Friday</p>
            <p>9am - 5pm</p>
          </div>
          
          <div>
            <p className="mb-1">1557 South Broad St.</p>
            <p className="mb-1">Monroe, GA 30655</p>
            <a href="mailto:information@gecon.com" className="hover:text-gray-200 transition">information@gecon.com</a>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="border-t border-white border-opacity-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4">
              <p>© {new Date().getFullYear()} Gecon. All Rights Reserved.</p>
              <a href="/privacy" className="text-gray-300 hover:text-white transition">Privacy Policy</a>
            </div>
            
            <div className="flex items-center mt-4 md:mt-0">
              <a 
                href="https://www.facebook.com/geconcorp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;