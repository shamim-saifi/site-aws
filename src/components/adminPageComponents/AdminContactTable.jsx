import React from "react";

import {
    FaCheckCircle,
    FaClock,
    FaEye,
    FaEdit,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const AdminContactTable = ({ leads }) => {



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
            max-width: 80vw;
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

            <div className="table-container">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-200 text-left text-gray-700 uppercase text-xs font-semibold">
                        <tr>
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Email</th>
                            <th className="px-4 py-3">subject</th>
                            <th className="px-4 py-3">message</th>

                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                        {leads?.map((lead) => (
                            <React.Fragment key={lead._id}>
                                <tr className="hover:bg-orange-50 transition">
                                    <td className="px-4 py-3 font-medium text-gray-900">
                                        {lead.firstName}
                                    </td>
                                    <td className="px-4 py-3 flex items-center gap-1 text-gray-700">
                                        <HiOutlineMail className="text-orange-500" />
                                        {lead.email}
                                    </td>
                                    <td className="px-4 py-3 text-gray-700">{lead.subject}</td>
                                    <td className="px-4 py-3 text-gray-700">{lead.message}</td>

                                </tr>


                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AdminContactTable;
