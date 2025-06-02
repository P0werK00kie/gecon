import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[300px] bg-cover bg-center" 
        style={{ backgroundColor: "#075f2c" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <h1 className="text-white font-barlowCondensed text-6xl md:text-8xl font-medium">
            TERMS OF SERVICE
          </h1>
        </div>
      </section>

      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-[#454d53]">Last Updated: May 26, 2025</p>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-xl font-semibold mb-4 text-[#0A122A]">Table of Contents</h2>
            <nav>
              <ol className="list-decimal list-inside space-y-2 text-[#454d53]">
                <li><a href="#overview" className="hover:text-[#075f2c]">Overview</a></li>
                <li><a href="#services" className="hover:text-[#075f2c]">Services</a></li>
                <li><a href="#intellectual-property" className="hover:text-[#075f2c]">Intellectual Property Rights</a></li>
                <li><a href="#user-accounts" className="hover:text-[#075f2c]">User Accounts</a></li>
                <li><a href="#prohibited" className="hover:text-[#075f2c]">Prohibited Activities</a></li>
                <li><a href="#termination" className="hover:text-[#075f2c]">Term and Termination</a></li>
                <li><a href="#contact-us" className="hover:text-[#075f2c]">Contact Us</a></li>
              </ol>
            </nav>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            <section id="overview">
              <h2 className="text-2xl font-bold mb-4 text-[#0A122A]">1. Overview</h2>
              <div className="prose max-w-none">
                <p className="text-[#454d53] leading-relaxed">
                 These website Terms of Use (the "Terms of Use") govern your access to and use of the website. The website is available for your use only on the condition that you agree to the Terms of Use set forth below. If you do not agree to all of the Terms of Use, do not access or use the website. By accessing or using the website, you and the entity you are authorized to represent ("you" or "your") signify your agreement to be bound by the Terms of Use.
                </p>
              </div>
            </section>

            <section id="services">
              <h2 className="text-2xl font-bold mb-4 text-[#0A122A]">2. Services</h2>
              <div className="prose max-w-none">
                <p className="text-[#454d53] leading-relaxed mb-4">
                  Our services include but are not limited to:
                </p>
                <ul className="list-disc list-inside text-[#454d53] space-y-2 ml-4">
                  <li>Tree Services</li>
                  <li>Disaster Recovery</li>
                  <li>Civil Construction</li>
                  <li>Demolition</li>
                  <li>Commercial and Residential Roofing</li>
                </ul>
              </div>
            </section>

            <section id="intellectual-property">
              <h2 className="text-2xl font-bold mb-4 text-[#0A122A]">3. Intellectual Property Rights</h2>
              <div className="prose max-w-none">
                <p className="text-[#454d53] leading-relaxed">
                  The Service and its original content, features, and functionality are and will remain the exclusive property of GECON and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
                </p>
              </div>
            </section>

            <section id="user-accounts">
              <h2 className="text-2xl font-bold mb-4 text-[#0A122A]">4. User Accounts</h2>
              <div className="prose max-w-none">
                <p className="text-[#454d53] leading-relaxed">
                  When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                </p>
              </div>
            </section>

            <section id="prohibited">
              <h2 className="text-2xl font-bold mb-4 text-[#0A122A]">5. Prohibited Activities</h2>
              <div className="prose max-w-none">
                <p className="text-[#454d53] leading-relaxed mb-4">
                  You may not access or use the Service for any purpose other than that for which we make the Service available. The Service may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                </p>
              </div>
            </section>

            <section id="termination">
              <h2 className="text-2xl font-bold mb-4 text-[#0A122A]">6. Term and Termination</h2>
              <div className="prose max-w-none">
                <p className="text-[#454d53] leading-relaxed">
                  We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
                </p>
              </div>
            </section>

            <section id="contact-us">
              <h2 className="text-2xl font-bold mb-4 text-[#0A122A]">7. Contact Us</h2>
              <div className="prose max-w-none">
                <p className="text-[#454d53] leading-relaxed mb-4">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-[#454d53]">GECON</p>
                  <p className="text-[#454d53]">1557 South Broad St.</p>
                  <p className="text-[#454d53]">Monroe, GA 30655</p>
                  <p className="text-[#454d53]">Email: information@gecon.com</p>
                  <p className="text-[#454d53]">Phone: (678) 269-1114</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;