import React, { useMemo, useState, useCallback } from "react";
import { FaRupeeSign } from "react-icons/fa";

const AdminPaymentTable = ({ payments }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const { paginatedData, totalPages } = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return {
      paginatedData: payments?.slice(start, end) || [],
      totalPages: Math.ceil((payments?.length || 0) / itemsPerPage),
    };
  }, [payments, currentPage]);

  const handlePrevious = useCallback(() => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  }, [totalPages]);

  if (!payments || payments.length === 0) {
    return (
      <div className="text-center py-10 bg-gray-100 rounded-lg shadow-sm">
        <p className="text-lg font-semibold text-gray-500">No Payment Records Found</p>
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
              <th className="px-6 py-4">Agent Name</th>
              <th className="px-6 py-4">Transaction ID</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">paymentFor</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {paginatedData.map((payment) => (
              <tr key={payment._id} className="hover:bg-orange-50 transition">
                <td className="px-6 py-4 text-gray-700">
                  {new Date(payment.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900">{payment?.leadId?.firstName}</td>
                <td className="px-6 py-4 text-gray-700">{payment?.agentId?.firstName}</td>
                <td className="px-6 py-4 text-gray-700">{payment.leadTransactionId}</td>
                <td className="px-6 py-4 text-gray-700 flex items-center gap-1">
                  <FaRupeeSign className="text-orange-500" />
                  {payment.price}
                </td>
                <td className="px-6 py-4 text-gray-700">{payment.paymentFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition disabled:opacity-50 font-medium cursor-pointer"
        >
          Previous
        </button>
        <span className="text-gray-600 font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition disabled:opacity-50 font-medium cursor-pointer"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default AdminPaymentTable;