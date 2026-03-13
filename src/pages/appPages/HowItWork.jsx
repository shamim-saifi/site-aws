import React from 'react';
import StartInQuickstep from '../../components/appPageComponents/StartInQuickstep';
import LeadPricing from '../../components/appPageComponents/LeadPricing';
import HowDoesItWork from '../../components/appPageComponents/HowDoesItWork';
import about from '../../assets/about.jpg';

const HowItWork = () => {
  return (
    <>
      {/* this page Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-16 px-4 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Text Content */}
          <div className="space-y-5">
            <p className="text-blue-200 text-sm font-medium uppercase tracking-wide">
              Questions? Call us at +91-7011741092
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold">
              Immify - How it works
            </h1>
            <p className="text-white/90 text-lg">
              Grow your business with 100% phone-verified leads.
            </p>
            <p className="text-white/70 text-base">
              3,000+ immigration consultants have grown their business with us.
            </p>
            <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300">
              Join Now
            </button>
            <p className="text-sm text-white/60 italic">
              It's FREE to register. No one-time fees.
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

      {/* Steps, Pricing, and How It Works Sections */}
      <StartInQuickstep />
      <LeadPricing />
      <HowDoesItWork />
    </>
  );
};

export default HowItWork;
