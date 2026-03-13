import React, { useEffect, useState } from "react";
import { FiDownload, FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaArrowLeft, FaGlobeAsia } from "react-icons/fa";
import LeadCard from "../../components/ui/LeadCard";
import { useDispatch, useSelector } from "react-redux";
import { AgentGetAllBuyLeadsApi } from "../../redux/actions/agentAction";
import AgentLeadTable from "../../components/agentPageComponents/AgentLeadTable";
import { AgentGetPaymentHistoryApi, AgentGetPaymentWalletHistoryApi } from "../../redux/actions/paymentAction";
import AgenWalletTable from "../../components/agentPageComponents/AgentWalletTable";
import { useNavigate } from "react-router-dom";

const AgentWalletAddMoney = () => {

    const { agentLoading, pagination, error } = useSelector((state) => state.agentContainer);
    const { agentPayments, agentLeadPagination, agentWallet } = useSelector((state) => state.paymentContainer);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(AgentGetPaymentWalletHistoryApi());
    }, [dispatch]);

    return (
        <section className="p-6 sm:p-8 max-w-7xl mx-auto bg-gray-50 min-h-screen">
            {/* {error && (
        <div className="text-red-600 bg-red-50 p-4 rounded-lg text-center mb-6">
          Error: {error}
        </div>
      )} */}

            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium text-sm mb-6 transition cursor-pointer"
            >
                <FaArrowLeft className="text-base" />
                Back
            </button>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2 className="text-3xl font-extrabold text-orange-600 tracking-tight">Payment History</h2>
            </div>

            {agentLoading ? (
                <div className="flex justify-center items-center py-10">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-600"></div>
                </div>
            ) : (
                <AgenWalletTable wallet={agentWallet || []} />
            )}


        </section>
    );
};

export default AgentWalletAddMoney;
