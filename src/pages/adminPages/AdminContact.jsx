import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../redux/store";
import AdminContactTable from "../../components/adminPageComponents/AdminContactTable";

const AdminContact = () => {
    const [leadLoading, setleadLoading] = useState(false);
    const [contactData, setContactData] = useState([]);
    const [pagination, setPagination] = useState({
        totalContact: 0,
        totalPages: 1,
        currentPage: 1,
        itemsPerPage: 10,
    });

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const getAllContactApi = async (page = 1, limit = 3) => {
        try {
            setleadLoading(true);
            const { data } = await axios.get(`${server}/contact?page=${page}&limit=${limit}`, {
                headers: { "Content-Type": "application/json" },
            });

            setContactData(data?.contact || []);
            setPagination(data.pagination);
        } catch (error) {
            console.error("Error fetching contacts:", error);
            setContactData([]);
        } finally {
            setleadLoading(false);
        }
    };

    useEffect(() => {
        getAllContactApi(currentPage, itemsPerPage);
    }, [currentPage]);

    return (
        <section className="p-6 sm:p-8 max-w-7xl mx-auto bg-gray-50 min-h-screen">
            <div className="table-container">
                {leadLoading ? (
                    <div className="flex justify-center items-center py-10">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-600"></div>
                    </div>
                ) : (
                    <AdminContactTable leads={contactData} />
                )}
            </div>

            <div className="flex justify-center items-center gap-4 mt-8">
                <button
                    disabled={currentPage === 1 || leadLoading}
                    onClick={() => setCurrentPage((p) => p - 1)}
                    className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition disabled:opacity-50 font-medium cursor-pointer"
                >
                    Previous
                </button>
                <span className="text-gray-600 font-medium">
                    Page {pagination?.currentPage || 1} of {pagination?.totalPages || 1}
                </span>
                <button
                    disabled={currentPage === pagination?.totalPages || leadLoading}
                    onClick={() => setCurrentPage((p) => p + 1)}
                    className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition disabled:opacity-50 font-medium cursor-pointer"
                >
                    Next
                </button>
            </div>
        </section>
    );
};

export default AdminContact;
