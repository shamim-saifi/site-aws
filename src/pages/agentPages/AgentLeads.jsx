import React, { useEffect, useState } from "react";
import { FiDownload, FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaGlobeAsia } from "react-icons/fa";
import LeadCard from "../../components/ui/LeadCard";
import { useDispatch, useSelector } from "react-redux";
import { AgentGetAllBuyLeadsApi } from "../../redux/actions/agentAction";
import AgentLeadTable from "../../components/agentPageComponents/AgentLeadTable";
import { AgentGetPaymentHistoryApi } from "../../redux/actions/paymentAction";

const AgentLeads = () => {

  const { agentLoading, pagination, error } = useSelector((state) => state.agentContainer);
  const { agentPayments, agentLeadPagination, } = useSelector((state) => state.paymentContainer);

  const [inputValue, setInputValue] = useState("");
  const [debouncedInput, setDebouncedInput] = useState(""); //  debounced value
  const [selectedCountry, setSelectedCountry] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch()
  const itemsPerPage = 9;


  //  Debounce effect — waits 500ms after user stops typing
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setDebouncedInput(inputValue);
    }, 500);

    return () => clearTimeout(delayDebounce); // cleanup
  }, [inputValue]);

  useEffect(() => {
    dispatch(AgentGetPaymentHistoryApi(currentPage, itemsPerPage, debouncedInput));
  }, [dispatch, currentPage, debouncedInput]);


  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedInput]);

  return (
    <section className="p-6 sm:p-8 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      {/* {error && (
        <div className="text-red-600 bg-red-50 p-4 rounded-lg text-center mb-6">
          Error: {error}
        </div>
      )} */}

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-3xl font-extrabold text-orange-600 tracking-tight">Payment History</h2>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">

          <input
            type="search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search by lead or agent"
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-orange-500 transition bg-white"
          />
          <button
            className="bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition font-medium"
          >
            Search
          </button>
        </div>
      </div>

      {agentLoading ? (
        <div className="flex justify-center items-center py-10">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-600"></div>
        </div>
      ) : (
        <AgentLeadTable leads={agentPayments || []} />
      )}

      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 pt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="px-4 py-2 bg-orange-500 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-700 font-medium">
          Page {agentLeadPagination.currentPage} of {agentLeadPagination.totalPages}
        </span>
        <button
          disabled={currentPage === agentLeadPagination.totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="px-4 py-2 bg-orange-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default AgentLeads;
