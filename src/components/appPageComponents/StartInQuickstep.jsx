import React from 'react';
import Heading2 from '../common/Heading2';

const StartInQuickstep = () => {
  const steps = [
    {
      title: 'Sign-up and upload documents',
      description: 'Register for FREE and add your company information. Verify your email address and upload the verification papers',
    },
    {
      title: 'Profile Review & Approval',
      description: 'We will approve your account after confirming your company documents. You will have a dedicated Account Manager',
    },
    {
      title: 'Add Credits',
      description: 'Your Account Manager will walk you through all of the website features and assist you add credits to your account so you can start buying leads.',
    },
    {
      title: 'Buy Travel Leads',
      description: 'Select each lead and buy manually, or set up an Auto-buy with unique filters, and we will deliver your favourite leads directly to your mailbox',
    }
  ];

  return (
    <div className="bg-[#f9fbfe] py-12">
      <Heading2 text="Get Started in Quick Steps" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 px-4 lg:px-8 mt-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-xl transition duration-300 rounded-2xl p-6 flex flex-col items-start"
          >
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-lg mb-4">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartInQuickstep;
