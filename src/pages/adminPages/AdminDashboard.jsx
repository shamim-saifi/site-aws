import React, { useEffect } from 'react';
import {
    FaCalendarWeek,
    FaRegNewspaper,
    FaUser,
} from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { AdminDashboardCountApi } from '../../redux/actions/adminAction';
import { GetAllLeadApi, GetAllSoldLeadApi } from '../../redux/actions/leadAction';
import { GetAllAgentApi } from '../../redux/actions/agentAction';
import OverviewCard from '../../components/ui/OverviewCard';
import LeadCard from '../../components/ui/LeadCard';
import LeadsChart from '../../components/agentPageComponents/LeadsChart';
import AgentCard from '../../components/ui/AgentCard';

const AdminDashboard = () => {
    const { adminDashboard, loading: dashboardLoading, error: dashboardError } = useSelector((state) => state.adminContainer);
    const { leads, soldLeads, leadLoading, leadError } = useSelector((state) => state.leadContainer);
    const { agents, loading: agentLoading, error: agentError } = useSelector((state) => state.agentContainer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(AdminDashboardCountApi());
        dispatch(GetAllLeadApi());
        dispatch(GetAllSoldLeadApi());
        dispatch(GetAllAgentApi());
    }, [dispatch]);

    const overviewData = [
        {
            bgColor: "bg-gradient-to-r from-orange-400 to-orange-300",
            iconBgColor: "bg-orange-100",
            IconComponent: FaCalendarWeek,
            title: "All Leads",
            value: adminDashboard?.totalLeads || 0,
            path: "/admin/leads",
        },
        {
            bgColor: "bg-gradient-to-r from-blue-400 to-blue-300",
            iconBgColor: "bg-blue-100",
            IconComponent: FaUser,
            title: "Total Agents",
            value: adminDashboard?.totalAgents || 0,
            path: "/admin/agents",
        },
        {
            bgColor: "bg-gradient-to-r from-amber-400 to-amber-300",
            iconBgColor: "bg-amber-100",
            IconComponent: FaRegNewspaper,
            title: "Sold Leads",
            value: adminDashboard?.newLeads || 0,
            path: "/admin/sold/leads",
        },
    ];

    return (
        <section className="p-6 sm:p-8 max-w-7xl mx-auto bg-gray-50 min-h-screen">
            {(dashboardError || leadError || agentError) && (
                <div className="text-red-600 bg-red-50 p-4 rounded-lg text-center mb-6">
                    Error: {dashboardError || leadError || agentError}
                </div>
            )}
            {/* Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {overviewData.map((card, index) => (
                    <OverviewCard
                        key={index}
                        {...card}
                        className="transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                ))}
            </div>

            {/* Wallet + Earnings */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Total Wallet Balance</h4>
                    <p className="text-3xl font-extrabold text-orange-600">₹{adminDashboard?.totalWallet || 0}</p>
                </div>
                <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Total Earnings</h4>
                    <p className="text-3xl font-extrabold text-amber-600">₹{adminDashboard?.totalEarning || 0}</p>
                </div>
            </div>

            {/* Recent Leads */}
            <div className="mb-8">
                <h4 className="text-2xl font-extrabold text-gray-800 mb-4">Recent Leads</h4>
                {leadLoading ? (
                    <div className="flex justify-center items-center py-10">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-600"></div>
                    </div>
                ) : leads?.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {leads.slice(0, 3).map((lead) => (
                            <LeadCard
                                key={lead._id}
                                mykey={lead._id}
                                name={`${lead.firstName} ${lead.lastName || ''}`}
                                email={lead.email}
                                phone={lead.phone}
                                country={lead.country}
                                destination={lead.destination}
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

            {/* Recent Sold Leads */}
            <div className="mb-8">
                <h4 className="text-2xl font-extrabold text-gray-800 mb-4">Recent Sold Leads</h4>
                {leadLoading ? (
                    <div className="flex justify-center items-center py-10">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-600"></div>
                    </div>
                ) : soldLeads?.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {soldLeads.slice(0, 3).map((lead) => (
                            <LeadCard
                                key={lead._id}
                                mykey={lead._id}
                                name={`${lead.firstName} ${lead.lastName || ''}`}
                                email={lead.email}
                                phone={lead.phone}
                                country={lead.country}
                                destination={lead.destination}
                                agentName={`${lead.agentId?.firstName || ''} ${lead.agentId?.lastName || ''}`}
                                agentCountry={lead.agentId?.country || 'N/A'}
                                className="transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-10 bg-gray-100 rounded-lg shadow-sm">
                        <p className="text-lg font-semibold text-gray-500">No recent sold leads available</p>
                    </div>
                )}
            </div>

            {/* Recent Agents */}
            <div className="mb-8">
                <h4 className="text-2xl font-extrabold text-gray-800 mb-4">Recent Agents</h4>
                {agentLoading ? (
                    <div className="flex justify-center items-center py-10">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-600"></div>
                    </div>
                ) : agents?.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {agents.slice(0, 3).map((agent) => (
                            <AgentCard
                                key={agent._id}
                                mykey={agent._id}
                                name={`${agent.firstName} ${agent.lastName || ''}`}
                                email={agent.email}
                                phone={agent.phone}
                                country={agent.country}
                                join={agent.createdAt}
                                status={agent.status}
                                className="transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-10 bg-gray-100 rounded-lg shadow-sm">
                        <p className="text-lg font-semibold text-gray-500">No recent agents available</p>
                    </div>
                )}
            </div>

            {/* Leads Chart */}
            <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100">
                <h4 className="text-2xl font-extrabold text-gray-800 mb-4">Lead Trends</h4>
                <div className="h-96">
                    {leadLoading ? (
                        <div className="flex justify-center items-center h-full">
                            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-600"></div>
                        </div>
                    ) : (
                        <LeadsChart url1={'admin/payment-stats/current-week-days'} url2={'admin/payment-stats/week-days'} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default AdminDashboard;