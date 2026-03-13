import React from 'react';
import about from '../../assets/about1.jpg';
// import about from '../../assets/about1png.png';
import mission from '../../assets/mission.jpg';
import NewAgentProgram from '../../components/appPageComponents/NewAgentProgram';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const smallData = [
    {
      name: "Happy Clients on Their Immigration Journey",
      data: "1 Million+"
    },
    {
      name: "Verified Immigration Experts on Immify",
      data: "3,000+"
    },
    {
      name: "of Trusted Immigration Support",
      data: "15+ Years"
    },
  ]
  const navigate = useNavigate()
  return (
    <>
      {/* top Section */}

      <section className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-16 px-4 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Text Content */}
          <div className="space-y-5">
            <p className="text-blue-200 text-sm font-medium uppercase tracking-wide">
              Questions? Call us at +91-7011741092
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold">
              About Immify
            </h1>
            <p className="text-white/90 text-lg">
              Immify helps immigration professionals grow smarter and faster.
            </p>
            <p className="text-white/70 text-base">

              At Immify, we believe the future of immigration services is digital, data-driven, and focused on the client.
              That's why we built an all-in-one platform tailored for immigration consultants, visa agencies, and law firms.
            </p>
            <p className="text-white/70 text-base">
              Our goal is to help them handle leads, automate daily tasks and grow their businesses financially
            </p>
            <button onClick={() => navigate('/agent-login')} className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300">
              Join Now
            </button>
            <p className="text-sm text-white/60 italic">
              It's FREE to register. No hidden fees.
            </p>
          </div>

          {/* Right Image */}
          <div>
            <img
              src={about}
              alt="About Immify"
              className="w-full h-auto rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 lg:p-8 '>
        {
          smallData.map((item, index) => (
            <div key={index} className="text-center my-4 ">
              <h3 className="text-2xl font-semibold text-gray-800">{item.data}</h3>
              <p className="text-gray-600">{item.name}</p>
            </div>
          ))
        }
      </div>



      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16 px-4 lg:px-20">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose Immify?</h2>
          <p className="text-gray-600 mt-2">Top reasons why thousands of consultants trust us.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {
            [
              { title: 'Verified Leads', desc: 'All leads are manually verified to ensure quality and authenticity.' },
              { title: 'Affordable Pricing', desc: 'Flexible credit-based pricing tailored to your budget and goals.' },
              { title: 'Expert Support', desc: 'Dedicated account managers and responsive support team.' },
              { title: 'Trusted Network', desc: 'Join a growing network of 3,000+ consultants worldwide.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))
          }
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16 px-4 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <img src={mission} alt="Our Mission" className="w-full h-auto rounded-xl shadow-lg" />
          </div>
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            <p className="text-gray-600 text-lg">
              Our mission is to democratize access to high-quality immigration leads by building a transparent and trusted platform for both clients and consultants. We are committed to driving growth through innovation, reliability, and user-first solutions.
            </p>
          </div>
        </div>
      </section>

      <NewAgentProgram />

    </>
  );
}

export default About;
