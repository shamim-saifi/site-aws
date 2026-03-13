import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminAgentTable from "../../components/adminPageComponents/AdminAgentTable";
import { GetAllAgentApi } from "../../redux/actions/agentAction";

const AdminAgent = () => {
  const { agents, agentLoading, pagination } = useSelector((state) => state.agentContainer);
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState("");
  const itemsPerPage = 9;
  const dispatch = useDispatch();

  const uniqueCountries = [...new Set(agents?.map((agent) => agent.country) || ["India", "UAE"])].sort();
  const filteredAgents = selectedCountry ? agents?.filter((agent) => agent.country === selectedCountry) : agents;

  const handleVerify = async (id) => {
    try {
      await axios.put(`/api/v1/admin/verify-agent/${id}`);
    } catch (err) {
      console.error("Verification failed", err);
    }
  };

  useEffect(() => {
    dispatch(GetAllAgentApi(currentPage, itemsPerPage, inputValue, selectedCountry));
  }, [dispatch, currentPage, inputValue, selectedCountry]);

  useEffect(() => {
    setCurrentPage(1);
  }, [inputValue, selectedCountry]);

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
      <div className="p-6 sm:p-8 max-w-7xl mx-auto bg-gray-50 min-h-screen">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h1 className="text-3xl font-extrabold text-orange-600 tracking-tight">Manage Agents</h1>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-orange-500 transition bg-white"
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
              placeholder="Search by agent name or country"
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-orange-500 transition bg-white"
            />
            <button
              onClick={() => dispatch(GetAllAgentApi(1, itemsPerPage, inputValue, selectedCountry))}
              className="bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition font-medium"
            >
              Search
            </button>
          </div>
        </div>
        <div className="table-container">
          {agentLoading ? (
            <div className="flex justify-center items-center py-10">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-600"></div>
            </div>
          ) : (
            <AdminAgentTable agents={filteredAgents || []} onVerify={handleVerify} />
          )}
        </div>
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            disabled={currentPage === 1 || agentLoading}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition disabled:opacity-50 font-medium"
          >
            Previous
          </button>
          <span className="text-gray-600 font-medium">
            Page {pagination?.currentPage || 1} of {pagination?.totalPages || 1}
          </span>
          <button
            disabled={currentPage === pagination?.totalPages || agentLoading}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition disabled:opacity-50 font-medium"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminAgent;