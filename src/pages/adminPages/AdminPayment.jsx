import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminPaymentTable from "../../components/adminPageComponents/AdminPaymentTable";
import { AdminGetPaymentHistoryApi } from "../../redux/actions/paymentAction";

const AdminPayment = () => {
  const { adminPayments, pagination, paymentLoading, error } = useSelector((state) => state.paymentContainer);
  const [inputValue, setInputValue] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const dispatch = useDispatch();

  const uniqueCountries = [...new Set(adminPayments?.map((payment) => payment.country) || ["India", "UAE"])].sort();

  useEffect(() => {
    dispatch(AdminGetPaymentHistoryApi(currentPage, itemsPerPage, inputValue, selectedCountry));
  }, [dispatch, currentPage, inputValue, selectedCountry]);

  useEffect(() => {
    setCurrentPage(1);
  }, [inputValue, selectedCountry]);

  return (
    <>
      <style>
        {`
          select {
            appearance: none;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'><path stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/></svg>");
            background-position: right 0.5rem center;
            background-repeat: no-repeat;
            background-size: 1.5em;
          }
        `}
      </style>
      <section className="p-6 sm:p-8 max-w-7xl mx-auto bg-gray-50 min-h-screen">
        {error && (
          <div className="text-red-600 bg-red-50 p-4 rounded-lg text-center mb-6">
            Error: {error}
          </div>
        )}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h2 className="text-3xl font-extrabold text-orange-600 tracking-tight">Payment History</h2>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-orange-500 transition bg-white cursor-pointer"
            >
              <option value="">All Countries</option>
              {uniqueCountries.map((country,i) => (
                <option key={i} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <input
              type="search"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search by lead or agent"
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-orange-500 transition bg-white"
            />
            <button
              onClick={() => dispatch(AdminGetPaymentHistoryApi(1, itemsPerPage, inputValue, selectedCountry))}
              className="bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition font-medium cursor-pointer"
            >
              Search
            </button>
          </div>
        </div>
        <AdminPaymentTable payments={adminPayments || []} />
      </section>
    </>
  );
};

export default AdminPayment;