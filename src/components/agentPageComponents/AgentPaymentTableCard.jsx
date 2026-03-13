import React, { useMemo, useState, useCallback } from "react";
import { FaRupeeSign, FaCalendarAlt, FaTag, FaHashtag, FaCreditCard } from "react-icons/fa";

const AgentPaymentTableCard = ({ payments }) => {
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
        <div className="space-y-5">
            <div className="grid gap-4 mx-auto max-w-[290px] sm:max-w-[480px] md:max-w-[700px] lg:max-w-4xl lg:grid-cols-2 xl:grid-cols-3">
                {paginatedData.map((payment) => (
                    <div
                        key={payment._id}
                        className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                    >
                        <div className="flex items-center gap-2 mb-3 text-sm text-gray-700">
                            <FaCalendarAlt className="text-blue-600" />
                            <span className="font-semibold">Date:</span>
                            {new Date(payment?.createdAt).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                            })}
                        </div>
                        <div className="flex items-center gap-2 mb-3 text-sm text-gray-700">
                            <FaTag className="text-blue-600" />
                            <span className="font-semibold">Lead Title:</span>
                            {payment?.leadId?.firstName || "N/A"}
                        </div>
                        <div className="flex items-center gap-2 mb-3 text-sm text-gray-700">
                            <FaHashtag className="text-blue-600" />
                            <span className="font-semibold">Transaction ID:</span>
                            {payment?.leadId?.leadTransactionId || "N/A"}
                        </div>
                        <div className="flex items-center gap-2 mb-3 text-sm text-gray-700">
                            <FaRupeeSign className="text-blue-600" />
                            <span className="font-semibold">Amount:</span>
                            {payment?.price || "0"}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                            <FaCreditCard className="text-blue-600" />
                            <span className="font-semibold">Payment Method:</span>
                            {/* {payment?.paymentMethod || "N/A"} */}
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center text-sm text-gray-600">
                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 transition duration-200"
                >
                    Previous
                </button>
                <p>
                    Page {currentPage} of {totalPages}
                </p>
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 transition duration-200"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AgentPaymentTableCard;