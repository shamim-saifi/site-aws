import React, { useEffect, useState } from "react";
import AdminLeadTable from "../../components/adminPageComponents/AdminLeadTable";

const leadData = [
    {
        _id: "1",
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice@example.com",
        phone: "+91 9876543210",
        country: "India",
        status: false,
        destination: "Canada",
        createdAt: "2025-06-10",
    },
    {
        _id: "2",
        firstName: "Mohammed",
        lastName: "Azhar",
        email: "azhar@example.com",
        phone: "+971 501234567",
        country: "UAE",
        status: false,
        destination: "Germany",
        createdAt: "2025-06-11",
    },
    {
        _id: "3",
        firstName: "Priya",
        lastName: "Sharma",
        email: "priya@example.com",
        phone: "+91 9812345678",
        country: "India",
        status: false,
        destination: "Australia",
        createdAt: "2025-06-12",
    },
    {
        _id: "4",
        firstName: "John",
        lastName: "Smith",
        email: "johnsmith@example.com",
        phone: "+1 6467891234",
        country: "USA",
        status: false,
        destination: "UK",
        createdAt: "2025-06-13",
    },
    {
        _id: "5",
        firstName: "Fatima",
        lastName: "Khan",
        email: "fatima@example.com",
        phone: "+971 505678901",
        country: "UAE",
        status: false,
        destination: "New Zealand",
        createdAt: "2025-06-14",
    }

]
const AdminUnsoldLeads = () => {
    const [leads, setLeads] = useState(leadData);
    const [inputValue, setInputValue] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchLeads = async (page = 1) => {
        try {
            // const res = await fetch(`/api/v1/lead/all-leads?page=${page}`);
            // const data = await res.json();
            // setLeads(data.leads);
            // setCurrentPage(data.currentPage);
            // setTotalPages(data.totalPages);
        } catch (err) {
            console.error("Failed to fetch leads", err);
        }
    };

    useEffect(() => {
        const normalize = (str) =>
            str?.toLowerCase().replace(/[^a-z0-9]/gi, "") || "";

        const filtered = leadData.filter((item) => {
            const firstName = normalize(item?.firstName);
            const lastName = normalize(item?.lastName);
            const keyword = normalize(inputValue);

            return firstName.includes(keyword) || lastName.includes(keyword);
        });

        setLeads(filtered);
    }, [inputValue]);

    // useEffect(() => {
    //   fetchLeads(currentPage);
    // }, [currentPage]);

    return (
        <section className="m-2.5 sm:m-5 space-y-5">
            {/* <h4 className="text-2xl font-bold text-orange-600">All Leads</h4> */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <h2 className="text-2xl font-bold text-primaryBlue">Lead Payments</h2>
                <div className="flex items-center gap-2">
                    <input
                        type="search"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Search by lead or agent"
                        className="border border-primaryBlue rounded px-3 py-2 text-sm w-full sm:w-64"
                    />
                    <button className="bg-primaryBlue text-white px-4 py-2 rounded hover:bg-secondryBlue">
                        Search
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
                <AdminLeadTable leads={leads} />
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-4 pt-6">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => p - 1)}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="text-gray-700 font-medium">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((p) => p + 1)}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </section>
    );
};

export default AdminUnsoldLeads;