import React from "react";
import { useNavigate } from "react-router-dom";
import {
    FaCheckCircle,
    FaRegTimesCircle,
    FaClock,
    FaEye,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const AdminAgentTable = ({ agents, onVerify }) => {
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
        <>
            <style>{`
                .table-container {
                    overflow-x: auto;
                    margin-left: auto;
                    margin-right: auto;
                    max-width: 345px;
                    border: 1px solid #e5e7eb;
                    border-radius: 0.375rem;
                }
     @media (min-width: 340px) {
                    .table-container {
                        width: 80vamx;
                    }
                }
  @media (min-width: 520px) {
                    .table-container {
                        max-width: 500px;
                    }
                }
                @media (min-width: 640px) {
                    .table-container {
                        max-width: 710px;
                    }
                }

                @media (min-width: 768px) {
                    .table-container {
                        max-width: 700px;
                    }
                }

                @media (min-width: 1024px) {
                    .table-container {
                        min-width: 100%;
                    }
                }
            `}</style>
            <div >
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-200 text-left text-gray-700 uppercase text-xs font-semibold">
                        <tr>
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Email</th>
                            <th className="px-4 py-3">Phone</th>
                            <th className="px-4 py-3">Country</th>
                            <th className="px-4 py-3">Company</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {agents?.map((agent) => (
                            <tr key={agent._id} className="hover:bg-orange-50 transition">
                                <td className="px-4 py-3 font-medium text-gray-900">
                                    {agent?.firstName} {agent?.lastName}
                                </td>
                                <td className="px-4 py-3 flex items-center gap-1 text-gray-700">
                                    <HiOutlineMail className="text-blue-500" />
                                    {agent?.email}
                                </td>
                                <td className="px-4 py-3 text-gray-700">{agent.phone}</td>
                                <td className="px-4 py-3 text-gray-700">{agent.country}</td>
                                <td className="px-4 py-3 text-gray-700">{agent.companyName}</td>
                                <td className="px-4 py-3">{renderStatus(agent.status)}</td>
                                <td className="px-4 py-3 flex gap-3 justify-center text-lg">
                                    <FaEye
                                        onClick={() => navigate(`/admin/agents/${agent._id}`)}
                                        className="text-blue-600 hover:text-gray-800 cursor-pointer"
                                        title="View Profile"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>

    );
};

export default AdminAgentTable;
