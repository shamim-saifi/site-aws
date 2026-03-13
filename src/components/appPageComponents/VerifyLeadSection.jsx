import React from 'react';
import Heading2 from '../common/Heading2';
import { FaCloud } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { FaUserAlt } from "react-icons/fa";
import { RiProfileFill } from "react-icons/ri";

const VerifyLeadSection = () => {
  const cardData = [
    {
      Icon: FaCloud,
      title: 'Buy 100% Verified Immigration Leads',
      description: 'Manually choose or Auto-Buy verified leads of individuals seeking immigration assistance.',
    },
    {
      Icon: GoGraph,
      title: 'Promote Your Services & Expertise',
      description: 'Showcase your immigration services for free and receive leads from interested applicants.',
    },
    {
      Icon: FaUserAlt,
      title: 'Dedicated Account Support',
      description: 'Get a dedicated account manager to assist you with lead management and platform support.',
    },
    {
      Icon: RiProfileFill,
      title: 'Build a Trusted Consultant Profile',
      description: 'Create a public profile with ratings and reviews to build trust and credibility with potential clients.',
    },
  ];

  return (
    <section className="bg-white py-10 px-4 lg:px-8">
      <Heading2 text="Immify is the leading platform connecting verified immigration seekers with top consultants" />
      <p className="text-gray-600 text-lg lg:text-xl text-center my-4 max-w-3xl mx-auto">
        Join Immify to access high-quality immigration leads and grow your consultancy with confidence.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-start bg-white shadow-lg rounded-2xl p-6 transition hover:shadow-xl"
          >
            <card.Icon className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VerifyLeadSection;
