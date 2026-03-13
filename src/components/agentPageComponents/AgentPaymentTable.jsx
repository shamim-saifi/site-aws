import React, { useMemo, useState, useCallback } from "react";
import { FaRupeeSign } from "react-icons/fa";

const AgentPaymentTable = ({ payments }) => {

    if (!payments || payments.length === 0) {
        return (
            <div className="text-center py-10 text-lg font-semibold text-gray-500">
                No Payment Records Found.
            </div>
        );
    }

    return (
        <>
            <style>
                {`
             .table-container {
               overflow-x: auto;
               margin: 0 auto;
               max-width: 100%;
               border: 1px solid #e5e7eb;
               border-radius: 0.5rem;
               background: #ffffff;
               box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
             }
             @media (min-width: 640px) {
               .table-container {
                 max-width: 90%;
               }
             }
             @media (min-width: 1024px) {
               .table-container {
                 max-width: 80%;
               }
             }
           `}
            </style>
            <div className="table-container">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-100 text-left text-gray-700 uppercase text-xs font-semibold">
                        <tr>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Lead Title</th>
                            {/* <th className="px-6 py-4">Agent Name</th> */}
                            <th className="px-6 py-4">Transaction ID</th>
                            <th className="px-6 py-4">Amount</th>
                            <th className="px-6 py-4">Payment For</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {payments?.map((payment) => (
                            <tr key={payment._id} className="hover:bg-orange-50 transition">
                                <td className="px-6 py-4 text-gray-700">
                                    {new Date(payment.createdAt).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900">{payment?.lead?.firstName}</td>
                                {/* <td className="px-6 py-4 text-gray-700">{payment?.agentId?.firstName}</td> */}
                                <td className="px-6 py-4 text-gray-700">{payment.leadTransactionId}</td>
                                <td className="px-6 py-4 text-gray-700 flex items-center gap-1">
                                    <FaRupeeSign className="text-orange-500" />
                                    {payment.price}
                                </td>
                                <td className="px-6 py-4 text-gray-700">{payment?.paymentFor}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AgentPaymentTable;