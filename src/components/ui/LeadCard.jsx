import React from 'react';
import { FaGlobeAsia, FaUser } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { FiDownload } from 'react-icons/fi';

const LeadCard = ({ mykey, name, email, phone, country, destination, agentName, agentCountry }) => {
    return (
        <div
            key={mykey}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 space-y-3 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
            <h5 className="text-lg font-semibold text-gray-800">{name || 'N/A'}</h5>

            <div className="text-gray-600 space-y-2 text-sm">
                <p className="flex items-center gap-2">
                    <HiOutlineMail className="text-orange-500 text-lg" />
                    {email || 'N/A'}
                </p>
                <p className="flex items-center gap-2">
                    <FiPhone className="text-orange-500 text-lg" />
                    {phone || 'N/A'}
                </p>
                <p className="flex items-center gap-2">
                    <FaGlobeAsia className="text-orange-500 text-lg" />
                    {country || 'N/A'} → {destination || 'N/A'}
                </p>
                {agentName && (
                    <p className="flex items-center gap-2">
                        <FaUser className="text-orange-500 text-lg" />
                        Agent: {agentName}
                    </p>
                )}
                {agentCountry && (
                    <p className="flex items-center gap-2">
                        <FaGlobeAsia className="text-orange-500 text-lg" />
                        Agent Country: {agentCountry}
                    </p>
                )}
            </div>

            {/* <div className="pt-3">
        <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition text-sm flex items-center gap-2 font-medium cursor-pointer">
          <FiDownload />
          Download Lead Info
        </button>
      </div> */}
        </div>
    );
};

export default LeadCard;