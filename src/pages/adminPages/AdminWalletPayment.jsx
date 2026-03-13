import React, { useEffect, useState } from "react";
import AdminPaymentTable from "../../components/adminPageComponents/AdminPaymentTable";
import AdminWalletTable from "../../components/adminPageComponents/AdminWalletTable";

const dummyPayments = [
  {
    _id: "1",
    date: "2025-06-10",
    leadTitle: "Dubai Tourist Visa",
    agentName: "Shamim Raees",
    transactionId: "txn_dubai_001",
    amount: 2500,
    paymentMethod: "Razorpay",
  },
  {
    _id: "2",
    date: "2025-06-12",
    leadTitle: "Canada PR Enquiry",
    agentName: "Shamim Raees",
    transactionId: "txn_canada_002",
    amount: 3000,
    paymentMethod: "UPI",
  },
  {
    _id: "3",
    date: "2025-06-14",
    leadTitle: "Australia Study Visa",
    agentName: "Shamim Raees",
    transactionId: "txn_aus_003",
    amount: 4000,
    paymentMethod: "Razorpay",
  },
  {
    _id: "4",
    date: "2025-06-15",
    leadTitle: "UK Business Visa",
    agentName: "Shamim Raees",
    transactionId: "txn_uk_004",
    amount: 5000,
    paymentMethod: "Credit Card",
  },
  {
    _id: "5",
    date: "2025-06-16",
    leadTitle: "USA Tourist Visa",
    agentName: "Shamim Raees",
    transactionId: "txn_usa_005",
    amount: 4500,
    paymentMethod: "UPI",
  },
  {
    _id: "6",
    date: "2025-06-17",
    leadTitle: "New Zealand Work Visa",
    agentName: "Shamim Raees",
    transactionId: "txn_nz_006",
    amount: 3500,
    paymentMethod: "Razorpay",
  },
  {
    _id: "7",
    date: "2025-06-18",
    leadTitle: "Germany Job Seeker Visa",
    agentName: "Shamim Raees",
    transactionId: "txn_germany_007",
    amount: 3200,
    paymentMethod: "Debit Card",
  },
  {
    _id: "8",
    date: "2025-06-19",
    leadTitle: "Singapore Business Visa",
    agentName: "Shamim Raees",
    transactionId: "txn_singapore_008",
    amount: 2700,
    paymentMethod: "Net Banking",
  },
  {
    _id: "9",
    date: "2025-06-20",
    leadTitle: "Schengen Visa",
    agentName: "Shamim Raees",
    transactionId: "txn_schengen_009",
    amount: 3100,
    paymentMethod: "Razorpay",
  },
  {
    _id: "10",
    date: "2025-06-21",
    leadTitle: "South Africa Work Permit",
    agentName: "Shamim Raees",
    transactionId: "txn_sa_010",
    amount: 3900,
    paymentMethod: "UPI",
  },
];


const AdminWalletPayment = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredPayments, setFilteredPayments] = useState(dummyPayments);

  useEffect(() => {
    const normalize = (str) =>
      str?.toLowerCase().replace(/[^a-z0-9]/gi, "") || "";

    const filtered = dummyPayments.filter((item) => {
      const leadTitle = normalize(item?.leadTitle);
      const agentName = normalize(item?.agentName);
      const keyword = normalize(inputValue);

      return leadTitle.includes(keyword) || agentName.includes(keyword);
    });

    setFilteredPayments(filtered);
  }, [inputValue]);

  return (
    <section className="m-5 space-y-6">
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

      <AdminWalletTable payments={filteredPayments} />
      {/* <AgentPaymentTableCard payments={filteredPayments} /> */}
    </section>
  );
};

export default AdminWalletPayment;
