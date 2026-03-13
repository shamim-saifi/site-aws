import React from 'react';
import { FaCheckCircle, FaGlobeAsia, FaRegTimesCircle, FaUser } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { CiLogin } from 'react-icons/ci';
import { FaClock } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const AgentCard = ({ mykey, name, email, phone, country, join, status, className }) => {
    const navigate = useNavigate();

    const renderStatus = (status) => {
        switch (status?.toLowerCase()) {
            case 'done':
                return (
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-sm">
                        <FaCheckCircle className="text-lg" />
                        Done
                    </span>
                );
            case 'pending':
                return (
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 font-semibold text-sm">
                        <FaClock className="text-lg" />
                        Pending
                    </span>
                );
            case 'reject':
                return (
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 font-semibold text-sm">
                        <FaRegTimesCircle className="text-lg" />
                        Rejected
                    </span>
                );
            default:
                return (
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-semibold text-sm">
                        {status ? status.charAt(0).toUpperCase() + status.slice(1) : 'N/A'}
                    </span>
                );
        }
    };

  

    return (
        <div
            key={mykey}
            className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 space-y-3 ${className}`}
        >
            <div className="flex justify-between items-center">
                <h5 className="text-lg font-semibold text-gray-800">{name || 'N/A'}</h5>
                {renderStatus(status)}
            </div>

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
                    Country: {country || 'N/A'}
                </p>
                <p className="flex items-center gap-2">
                    <CiLogin className="text-orange-500 text-lg" />
                    Joined: {join.split("T")[0]}
                </p>
            </div>

            <div className="pt-3">
                <button
                    onClick={() => navigate(`/admin/agents/${mykey}`)}
                    className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition text-sm flex items-center gap-2 font-medium cursor-pointer"
                >
                    <FaUser />
                    View Agent Details
                </button>
            </div>
        </div>
    );
};

export default AgentCard;