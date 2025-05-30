import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/About%20Us/Header/GeconSubHeaderImage.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvQWJvdXQgVXMvSGVhZGVyL0dlY29uU3ViSGVhZGVySW1hZ2Uud2VicCIsImlhdCI6MTc0ODYyNDA2NywiZXhwIjoyMzc5MzQ0MDY3fQ.ddh8Obut48ZSxMvebR_BZ2Zp7yWD_y3MgSkZP1UoEfI')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <h1 className="text-white font-barlowCondensed text-6xl md:text-8xl font-medium">
            ABOUT US
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-32 px-4 md:px-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <div className="h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Gecon%20Main%20Website/About%20Us/Header/gecon_giving_about.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9HZWNvbiBNYWluIFdlYnNpdGUvQWJvdXQgVXMvSGVhZGVyL2dlY29uX2dpdmluZ19hYm91dC53ZWJwIiwiaWF0IjoxNzQ4NjI0MjAxLCJleHAiOjIzNzkzNDQyMDF9.gQNg6sd_M4iOh8QrfeqoPVViXDGat4-pSx1AistjCno')" }}></div>
            </div>
            <div className="w-full md:w-1/2 px-0 md:px-8">
              <h2 className="font-helvetica text-4xl md:text-5xl font-semibold mb-8">
                GEORGIA ENVIRONMENTAL CONSTRUCTION{' '}
                <span className="text-[#075f2c]">MEETS ADVERSITY HEAD ON.</span>
              </h2>
              <p className="font-arial text-[#454d53] text-lg leading-relaxed">
                When disaster strikes, time is of the essence and the relief response should never be underestimated or under-planned. At Gecon, we have made it our mission to provide the very best in service, safety, and efficiency when rebuilding your community, your resources, and your economic structure. Gecon goes the distance to execute an immediate, professional, and committed recovery process with dynamic solutions to the unexpected challenges communities face in the aftermath of a natural disaster. Not only does Gecon mobilize hundreds of field personnel with unlimited recovery trucks and equipment, but we provide expert management and support with extensive knowledge and experience with FEMA guidelines and regulations. Our versatile, accomplished team works together with affected communities to restore normalcy and hope to millions of lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#075f2c] text-white font-arial mb-4">
              MEET
            </span>
            <h2 className="font-helvetica text-4xl md:text-6xl font-semibold">
              OUR TEAM
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

interface TeamMemberProps {
  name: string;
  title: string;
  image: string;
  email: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, title, image, email }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="aspect-square">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-6 text-center">
        <h4 className="font-barlowCondensed text-xl font-medium text-[#0A122A] mb-2">{name}</h4>
        <p className="font-arial text-[#454d53] text-sm mb-4">{title}</p>
        <hr className="w-12 mx-auto border-t-2 border-[#075f2c] mb-4" />
        <a 
          href={`mailto:${email}`}
          className="inline-block font-arial text-[#075f2c] hover:text-[#064723] transition-colors"
        >
          CONTACT
        </a>
      </div>
    </motion.div>
  );
};

const teamMembers = [
  {
    name: "Kevin Broderick",
    title: "CHIEF EXECUTIVE OFFICER",
    image: "https://gecon-roofing.websitepro.hosting/wp-content/uploads/2021/02/grace-gecon_orig.jpg",
    email: "kbroderick@gecon.com"
  },
  {
    name: "Jeff Christian",
    title: "CHIEF FINANCIAL OFFICER",
    image: "https://gecon-roofing.websitepro.hosting/wp-content/uploads/2021/02/myron-gecon_orig.jpg",
    email: "jchristian@gecon.com"
  },
  {
    name: "James Smith",
    title: "CHIEF FINANCIAL OFFICER",
    image: "https://gecon-roofing.websitepro.hosting/wp-content/uploads/2021/02/myron-gecon_orig.jpg",
    email: "jsmith@gecon.com"
  },
  {
    name: "John Breedlove",
    title: "CHIEF FINANCIAL OFFICER",
    image: "https://gecon-roofing.websitepro.hosting/wp-content/uploads/2021/02/myron-gecon_orig.jpg",
    email: "myron@geconcorp.com"
  },
  // Add all other team members here...
];

export default AboutUs;