import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLeadTable from "../../components/adminPageComponents/AdminLeadTable";
import { GetAllSoldLeadApi } from "../../redux/actions/leadAction";

const AdminSoldLeads = () => {
  const { soldLeads, pagination, leadLoading, error } = useSelector((state) => state.leadContainer);
  const [inputValue, setInputValue] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const dispatch = useDispatch();

  const uniqueCountries = [...new Set(soldLeads?.map((lead) => lead.country) || ["India", "UAE"])].sort();

  useEffect(() => {
    dispatch(GetAllSoldLeadApi(currentPage, itemsPerPage, inputValue, selectedCountry));
  }, [dispatch, currentPage, inputValue, selectedCountry]);

  useEffect(() => {
    setCurrentPage(1);
  }, [inputValue, selectedCountry]);

  return (
    <>
      <style>
        {`
     
        `}
      </style>
      <section className="p-6 sm:p-8 max-w-7xl mx-auto bg-gray-50 min-h-screen">
        {error && (
          <div className="text-red-600 bg-red-50 p-4 rounded-lg text-center mb-6">
            Error: {error}
          </div>
        )}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h2 className="text-3xl font-extrabold text-orange-600 tracking-tight">Sold Leads</h2>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-orange-500 transition bg-white cursor-pointer"
            >
              <option value="">All Countries</option>
              {uniqueCountries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <input
              type="search"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search by lead or country"
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-orange-500 transition bg-white"
            />
            <button
              onClick={() => dispatch(GetAllSoldLeadApi(1, itemsPerPage, inputValue, selectedCountry))}
              className="bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition font-medium cursor-pointer"
            >
              Search
            </button>
          </div>
        </div>
        {leadLoading ? (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-600"></div>
          </div>
        ) : (
          <AdminLeadTable leads={soldLeads || []} />
        )}
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
    </>
  );
};

export default AdminSoldLeads;