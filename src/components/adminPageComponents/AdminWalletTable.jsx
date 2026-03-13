import React, { useMemo, useState, useCallback } from "react";
import { FaRupeeSign } from "react-icons/fa";

const AdminWalletTable = ({ payments }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

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
            <div className="text-center py-10 text-lg font-semibold text-gray-500">
                No Payment Records Found.
            </div>
        );
    }

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
                            <th className="px-4 py-3">Date</th>
                            <th className="px-4 py-3">Lead Title</th>
                            <th className="px-4 py-3">Agent Name</th>
                            <th className="px-4 py-3">Transaction ID</th>
                            <th className="px-4 py-3">Amount</th>
                            <th className="px-4 py-3">Method</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {paginatedData.map((payment) => (
                            <tr key={payment._id} className="hover:bg-orange-50 transition">
                                <td className="px-4 py-3 text-gray-700">{payment.date}</td>
                                <td className="px-4 py-3 font-medium text-gray-900">{payment.leadTitle}</td>
                                <td className="px-4 py-3 text-gray-700">{payment.agentName}</td>
                                <td className="px-4 py-3 text-gray-700">{payment.transactionId}</td>
                                <td className="px-4 py-3 text-gray-700 flex items-center gap-1">
                                    <FaRupeeSign className="text-green-600" />
                                    {payment.amount}
                                </td>
                                <td className="px-4 py-3 text-gray-700">{payment.paymentMethod}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Footer */}
            <div className="flex justify-center items-center gap-3 mt-4">
                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className="px-3 py-1 rounded text-sm bg-gray-100 border border-gray-300 hover:bg-gray-200 disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="text-sm text-gray-600">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 rounded text-sm bg-gray-100 border border-gray-300 hover:bg-gray-200 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default AdminWalletTable;
