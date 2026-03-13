import React from 'react';
import Heading2 from '../common/Heading2';
import { TbPigMoney } from "react-icons/tb";
import { GrUserManager } from "react-icons/gr";
import { VscPreview } from "react-icons/vsc";

const NewAgentProgram = () => {
  const programCardData = [
    {
      title: 'Bonus Credits on First 3 Payments',
      description: 'Get 20% bonus credits on your first payment, and 15% bonus credits on your next 2 payments.',
      Icon: TbPigMoney
    },
    {
      title: 'Dedicated Account Manager',
      description: 'Your own account manager to help you understand & make the best use of our platform.',
      Icon: GrUserManager
    },
    {
      title: 'Performance Review & Plan',
      description: 'Regular reviews and tailored planning with your account manager to maximize growth.',
      Icon: VscPreview
    }
  ];

  return (
    <div className="bg-[#f2f8ff] py-12">
      <Heading2 text="New Agent Success Program" />

      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-gray-700 text-lg mt-4">
          Register now to join our exclusive New Agent Success Program — absolutely <span className="font-semibold text-blue-600">FREE!</span>
        </p>
        <p className="text-gray-700 text-lg mt-3">
          As a newly onboarded immigration consultant on Immify, you’ll receive financial, operational, and marketing support to build a successful practice. From verified leads to branding — we’ve got you covered.
        </p>
        <p className="text-gray-700 text-lg mt-3">
          Sign up today and get enrolled in our industry-first Agent Success Program at no extra cost.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 px-4 lg:px-8">
        {programCardData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-start bg-white shadow-md hover:shadow-xl rounded-2xl p-6 transition duration-300"
          >
            <card.Icon className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-md transition duration-300 text-lg font-semibold">
          Join Us Now
        </button>
      </div>
    </div>
  );
};

export default NewAgentProgram;
