import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AgentPaymentTable from "../../components/agentPageComponents/AgentPaymentTable";
import { AgentGetPaymentHistoryApi } from "../../redux/actions/paymentAction";
import { Link } from "react-router-dom";

const AgentPayment = () => {
  const { agentPayments, agentLeadPagination } = useSelector((state) => state.paymentContainer);

  const [inputValue, setInputValue] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(""); // wallet top-up
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const dispatch = useDispatch();

  // Debounce search input
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setDebouncedInput(inputValue);
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [inputValue]);

  useEffect(() => {
    dispatch(AgentGetPaymentHistoryApi(currentPage, itemsPerPage, debouncedInput));
  }, [dispatch, currentPage, debouncedInput]);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedInput]);

  // Placeholder for Add Money functionality
  const handleAddMoney = () => {
    if (!selectedAmount || isNaN(selectedAmount)) return;
    alert(`Adding ₹${selectedAmount} to wallet (implement API)`);
    setSelectedAmount("");
  };

  return (
    <section className="p-6 sm:p-8 max-w-7xl mx-auto bg-gray-50 min-h-screen space-y-10">
      {/* Top section: Add money to wallet */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div className="space-y-1">
          <h2 className="text-3xl font-extrabold text-orange-600 tracking-tight">Wallet & Payments</h2>
          <p className="text-sm text-gray-500">Manage your wallet and view all transaction history</p>

          <Link to={'wallet'} >
            <span className="text-orange-600 underline font-extrabold" >Add Money Wallet-Transaction</span>
          </Link>

        </div>

        {/* <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <input
            type="number"
            value={selectedAmount}
            onChange={(e) => setSelectedAmount(e.target.value)}
            placeholder="Enter amount (₹)"
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-orange-500 transition bg-white"
          />
          <button
            onClick={handleAddMoney}
            className="bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition font-medium w-full sm:w-auto cursor-pointer"
          >
            Add Money
          </button>

        </div> */}

        <div className="flex justify-end">
          <Link
            to="/agent/payment/add-money"
            className="bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition font-medium"
          >
            Add Money to Wallet
          </Link>
        </div>
      </div>

      {/* Search and History Table */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <input
            type="search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search by lead or agent"
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-orange-500 transition bg-white"
          />
        </div>
      </div>

      {/* Payment Table */}
      <AgentPaymentTable payments={agentPayments || []} />

      {/* Pagination */}
      <div className="flex justify-center gap-4 pt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="px-4 py-2 bg-orange-500 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-700 font-medium">
          Page {agentLeadPagination?.currentPage} of {agentLeadPagination?.totalPages}
        </span>
        <button
          disabled={currentPage === agentLeadPagination?.totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="px-4 py-2 bg-orange-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default AgentPayment;
