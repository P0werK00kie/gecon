import React from 'react';

const Privacy = () => {
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
            PRIVACY POLICY
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
                <li><a href="#introduction" className="hover:text-[#075f2c]">Introduction</a></li>
                <li><a href="#information-collection" className="hover:text-[#075f2c]">Information Collection</a></li>
                <li><a href="#use-of-information" className="hover:text-[#075f2c]">Use of Information</a></li>
                <li><a href="#information-sharing" className="hover:text-[#075f2c]">Information Sharing</a></li>
                <li><a href="#data-security" className="hover:text-[#075f2c]">Data Security</a></li>
                <li><a href="#your-rights" className="hover:text-[#075f2c]">Your Rights</a></li>
                <li><a href="#contact-us" className="hover:text-[#075f2c]">Contact Us</a></li>
              </ol>
            </nav>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            <section id="introduction">
              <h2 className="text-2xl font-bold mb-4 text-[#0A122A]">1. Introduction</h2>
              <div className="prose max-w-none">
                <p className="text-[#454d53] leading-relaxed">
                  GECON ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
              </div>
            </section>

            <section id="information-collection">
              <h2 className="text-2xl font-bold mb-4 text-[#0A122A]">2. Information Collection</h2>
              <div className="prose max-w-none">
                <p className="text-[#454d53] leading-relaxed mb-4">
                  We collect information that you provide directly to us when you:
                </p>
                <ul className="list-disc list-inside text-[#454d53] space-y-2 ml-4">
                  <li>Fill out forms on our website</li>
                  <li>Request services</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us for support</li>
                </ul>
              </div>
            </section>

            <section id="use-of-information">
              <h2 className="text-2xl font-bold mb-4 text-[#0A122A]">3. Use of Information</h2>
              <div className="prose max-w-none">
                <p className="text-[#454d53] leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-[#454d53] space-y-2 ml-4">
                  <li>Provide and maintain our services</li>
                  <li>Process your service requests</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section id="information-sharing">
              <h2 className="text-2xl font-bold mb-4 text-[#0A122A]">4. Information Sharing</h2>
              <div className="prose max-w-none">
                <p className="text-[#454d53] leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted partners who assist us in operating our website, conducting our business, or servicing you, as long as these parties agree to keep this information confidential.
                </p>
              </div>
            </section>

            <section id="data-security">
              <h2 className="text-2xl font-bold mb-4 text-[#0A122A]">5. Data Security</h2>
              <div className="prose max-w-none">
                <p className="text-[#454d53] leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </div>
            </section>

            <section id="your-rights">
              <h2 className="text-2xl font-bold mb-4 text-[#0A122A]">6. Your Rights</h2>
              <div className="prose max-w-none">
                <p className="text-[#454d53] leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-[#454d53] space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>
            </section>

            <section id="contact-us">
              <h2 className="text-2xl font-bold mb-4 text-[#0A122A]">7. Contact Us</h2>
              <div className="prose max-w-none">
                <p className="text-[#454d53] leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
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

export default Privacy;