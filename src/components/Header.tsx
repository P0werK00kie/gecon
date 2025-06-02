import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState<number | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const toggleSubmenu = (index: number) => {
    setSubmenuOpen(submenuOpen === index ? null : index);
  };
  
  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 shadow-md py-2' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <img 
                src={isScrolled ? "https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Logos/Geconlogo2.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvTG9nb3MvR2Vjb25sb2dvMi5wbmciLCJpYXQiOjE3NDg4ODA3NzMsImV4cCI6MjM3OTYwMDc3M30.uxSN1u2aAtg8xsJ_SKqRn4YmliYkvhb5Ca2cubxTD3c" : "https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/Logos/Geconlogo2-white.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvTG9nb3MvR2Vjb25sb2dvMi13aGl0ZS5wbmciLCJpYXQiOjE3NDg4ODA3OTMsImV4cCI6MjM3OTYwMDc5M30.SaBt3RDpcET-1f-KEVE5PXQZFEUvgK4Pdi5DtnAzsOI"} 
                alt="Gecon Logo" 
                className="h-10 sm:h-14"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li className="group">
                <a 
                  href="/" 
                  className={`font-arial text-lg font-medium relative ${
                    isScrolled ? 'text-[#0A122A] hover:text-[#075f2c]' : 'text-white hover:text-white'
                  }`}
                >
                  HOME
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ${
                    isScrolled ? 'bg-[#075f2c]' : 'bg-white'
                  }`}></span>
                </a>
              </li>
              <li className="group">
                <a 
                  href="/about-us" 
                  className={`font-arial text-lg font-medium relative ${
                    isScrolled ? 'text-[#0A122A] hover:text-[#075f2c]' : 'text-white hover:text-white'
                  }`}
                >
                  ABOUT US
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ${
                    isScrolled ? 'bg-[#075f2c]' : 'bg-white'
                  }`}></span>
                </a>
              </li>
              <li className="relative group">
                <a 
                  href="#" 
                  className={`font-arial text-lg font-medium flex items-center relative ${
                    isScrolled ? 'text-[#0A122A] hover:text-[#075f2c]' : 'text-white hover:text-white'
                  }`}
                  onClick={(e) => {e.preventDefault(); toggleSubmenu(2)}}
                >
                  SERVICES
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ${
                    isScrolled ? 'bg-[#075f2c]' : 'bg-white'
                  }`}></span>
                </a>
                <ul className={`absolute left-0 mt-1 w-64 bg-white shadow-lg py-2 rounded-md transform transition-all duration-200 ${
                  submenuOpen === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                } md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:pointer-events-auto`}>
                  <li>
                    <a href="/tree-services" className="block px-4 py-2 text-[#075f2c] font-arial hover:bg-gray-100">
                      TREE SERVICES
                    </a>
                  </li>
                  <li>
                    <a href="/disaster-recovery" className="block px-4 py-2 text-[#075f2c] font-arial hover:bg-gray-100">
                      DISASTER RECOVERY
                    </a>
                  </li>
                  <li>
                    <a href="/civil-construction" className="block px-4 py-2 text-[#075f2c] font-arial hover:bg-gray-100">
                      CIVIL CONSTRUCTION
                    </a>
                  </li>
                  <li>
                    <a href="/demolition" className="block px-4 py-2 text-[#075f2c] font-arial hover:bg-gray-100">
                      DEMOLITION
                    </a>
                  </li>
                  <li>
                    <a href="/commercial-roofing" className="block px-4 py-2 text-[#075f2c] font-arial hover:bg-gray-100">
                      COMMERCIAL ROOFING
                    </a>
                  </li>
                  <li>
                    <a href="/residential-roofing" className="block px-4 py-2 text-[#075f2c] font-arial hover:bg-gray-100">
                      RESIDENTIAL ROOFING
                    </a>
                  </li>
                </ul>
              </li>
              <li className="group">
                <a 
                  href="/opportunities" 
                  className={`font-arial text-lg font-medium relative ${
                    isScrolled ? 'text-[#0A122A] hover:text-[#075f2c]' : 'text-white hover:text-white'
                  }`}
                >
                  OPPORTUNITIES
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ${
                    isScrolled ? 'bg-[#075f2c]' : 'bg-white'
                  }`}></span>
                </a>
              </li>
              <li className="group">
                <a 
                  href="/contact" 
                  className={`font-arial text-lg font-medium relative ${
                    isScrolled ? 'text-[#0A122A] hover:text-[#075f2c]' : 'text-white hover:text-white'
                  }`}
                >
                  CONTACT
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ${
                    isScrolled ? 'bg-[#075f2c]' : 'bg-white'
                  }`}></span>
                </a>
              </li>
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md"
            onClick={toggleMenu}
          >
            {isMenuOpen ? 
              <X className={isScrolled ? "text-[#0A122A]" : "text-white"} size={24} /> : 
              <Menu className={isScrolled ? "text-[#0A122A]" : "text-white"} size={24} />
            }
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-white px-4 pt-2 pb-4 shadow-lg">
          <ul className="space-y-2">
            <li className="group">
              <a 
                href="/" 
                className="block py-2 text-[#0A122A] font-arial text-lg font-medium relative"
              >
                HOME
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#075f2c] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
              </a>
            </li>
            <li className="group">
              <a 
                href="/about-us" 
                className="block py-2 text-[#0A122A] font-arial text-lg font-medium relative"
              >
                ABOUT US
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#075f2c] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
              </a>
            </li>
            <li>
              <button 
                className="flex items-center justify-between w-full py-2 text-[#0A122A] font-arial text-lg font-medium group relative"
                onClick={() => toggleSubmenu(2)}
              >
                SERVICES
                <svg className={`w-4 h-4 transition-transform ${submenuOpen === 2 ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#075f2c] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
              </button>
              <ul className={`pl-4 space-y-1 transition-all duration-300 ${
                submenuOpen === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <li>
                  <a href="/tree-services" className="block py-2 text-[#075f2c] font-arial text-lg">
                    TREE SERVICES
                  </a>
                </li>
                <li>
                  <a href="/disaster-recovery" className="block py-2 text-[#075f2c] font-arial text-lg">
                    DISASTER RECOVERY
                  </a>
                </li>
                <li>
                  <a href="/civil-construction" className="block py-2 text-[#075f2c] font-arial text-lg">
                    CIVIL CONSTRUCTION
                  </a>
                </li>
                <li>
                  <a href="/demolition" className="block py-2 text-[#075f2c] font-arial text-lg">
                    DEMOLITION
                  </a>
                </li>
                <li>
                  <a href="/commercial-roofing" className="block py-2 text-[#075f2c] font-arial text-lg">
                    COMMERCIAL ROOFING
                  </a>
                </li>
                <li>
                  <a href="/residential-roofing" className="block py-2 text-[#075f2c] font-arial text-lg">
                    RESIDENTIAL ROOFING
                  </a>
                </li>
              </ul>
            </li>
            <li className="group">
              <a 
                href="/opportunities" 
                className="block py-2 text-[#0A122A] font-arial text-lg font-medium relative"
              >
                OPPORTUNITIES
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#075f2c] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
              </a>
            </li>
            <li className="group">
              <a 
                href="/contact" 
                className="block py-2 text-[#0A122A] font-arial text-lg font-medium relative"
              >
                CONTACT
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#075f2c] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;