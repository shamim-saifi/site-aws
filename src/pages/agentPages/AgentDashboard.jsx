import React, { useEffect } from 'react'
import {
  FaCalendarWeek,
  FaFilePrescription,
  FaUserDoctor,
} from "react-icons/fa6";
import OverviewCard from '../../components/ui/OverviewCard';
import { FaGlobeAsia, FaUser } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { FiDownload, FiPhone } from 'react-icons/fi';
import LeadsChart from '../../components/agentPageComponents/LeadsChart';
import LeadCard from '../../components/ui/LeadCard';
import { useDispatch, useSelector } from 'react-redux';
import { AgentDashboardCountApi, GetAgentProfileApi } from '../../redux/actions/agentAction';
import { AgentGetPaymentHistoryApi, AgentGetPaymentWalletHistoryApi } from '../../redux/actions/paymentAction';



const AgentDashboard = () => {
  const { agentProfile, agentLoading, agentDashboard } = useSelector((state) => state.agentContainer);
  const { agentPayments, paymnetLoading, pagination, agentWallet } = useSelector((state) => state.paymentContainer);


  const recentLeads = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "+91 9876543210",
      country: "India",
      destination: "Canada",
    },
    {
      id: 2,
      name: "Rohan Patel",
      email: "rohan.patel@example.com",
      phone: "+91 9123456789",
      country: "India",
      destination: "Australia",
    },
    {
      id: 3,
      name: "Sarah Khan",
      email: "sarah.k@example.com",
      phone: "+91 9988776655",
      country: "UAE",
      destination: "UK",
    },
  ];

  const dispatch = useDispatch();


  const overviewData = [
    {
      bgColor: "bg-gradient-to-r from-orange-400 to-orange-300",
      iconBgColor: "bg-orange-50",
      IconComponent: FaCalendarWeek,
      title: "My Leads",
      path: "/agent/leads",
      value: agentDashboard?.totalLeads ? agentDashboard.totalLeads : 0,
    },
    {
      bgColor: "bg-gradient-to-r from-blue-400 to-blue-300",
      iconBgColor: "bg-blue-50",
      IconComponent: FaUser,
      title: "Profile",
      path: "/agent/profile",
    },
    {
      bgColor: "bg-gradient-to-r from-amber-400 to-amber-300",
      iconBgColor: "bg-amber-50",
      IconComponent: FaCalendarWeek,
      title: "Wallet",
      path: "/agent/payment",
      value: agentProfile?.wallet ? agentProfile.wallet : 0,

    },

  ];

  useEffect(() => {
    dispatch(GetAgentProfileApi());
    dispatch(AgentDashboardCountApi());
    dispatch(AgentGetPaymentWalletHistoryApi());
    dispatch(AgentGetPaymentHistoryApi());
  }, [dispatch]);

  return (
    <section className="m-2.5 sm:m-5 space-y-5 ">
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-5">
        {overviewData.map((card, index) => (
          <OverviewCard key={index} {...card} />
        ))}
      </div>

      {/* Recent Leads */}


      <div className="mb-8">
        <h4 className="text-2xl font-extrabold text-gray-800 mb-4">Recent Leads Purchased</h4>
        {paymnetLoading ? (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-600"></div>
          </div>
        ) : agentPayments?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentPayments.slice(0, 3).map((lead) => (
              <LeadCard
                key={lead._id}
                mykey={lead._id}
                name={`${lead.lead.firstName} ${lead.lead.lastName || ''}`}
                email={lead.lead.email}
                phone={lead.lead.phone}
                country={lead.lead.country}
                destination={lead.lead.destination}
                className="transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-gray-100 rounded-lg shadow-sm">
            <p className="text-lg font-semibold text-gray-500">No recent leads available</p>
          </div>
        )}
      </div>




      {/* Leads Chart */}
      {/* <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100">
        <h4 className="text-2xl font-extrabold text-gray-800 mb-4">Lead Trends</h4>
        <div className="h-96">
          {agentLoading ? (
            <div className="flex justify-center items-center h-full">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-600"></div>
            </div>
          ) : (
            <LeadsChart url1={'agent/payment-stats/current-week-days'} url2={'agent/payment-stats/week-days'} />
          )}
        </div>
      </div> */}



      {/* Recent Add Money to Wallet */}
      <div className="mb-8">
        <h4 className="text-2xl font-extrabold text-gray-800 mb-4">Recent Wallet Additions</h4>
        {paymnetLoading ? (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-600"></div>
          </div>
        ) : agentWallet?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {agentWallet.slice(0, 3).map((wallet) => (
              <div
                key={wallet._id}
                className="bg-white p-5 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-600">Transaction ID</span>
                  <span className="text-xs text-gray-500">{wallet._id.slice(-6).toUpperCase()}</span>
                </div>
                <div className="text-lg font-bold text-green-600 mb-1">₹{wallet.price}</div>
                <div className="text-sm text-gray-500">Added on: {new Date(wallet.createdAt).toLocaleString()}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-gray-100 rounded-lg shadow-sm">
            <p className="text-lg font-semibold text-gray-500">No recent wallet additions</p>
          </div>
        )}
      </div>


    </section>
  )
}

export default AgentDashboard