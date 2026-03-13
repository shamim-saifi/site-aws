import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../store";
import { adminGetPaymentFail, adminGetPaymentRequest, adminGetPaymentSuccess, agentAddMoneyFail, agentAddMoneyRequest, agentAddMoneySuccess, agentBuyNewLeadFail, agentBuyNewLeadRequest, agentBuyNewLeadSuccess, agentGetPaymentFail, agentGetPaymentRequest, agentGetPaymentSuccess, agentGetWalletTansFail, agentGetWalletTansRequest, agentGetWalletTansSuccess, GetSinglePaymentFail, GetSinglePaymentRequest, GetSinglePaymentSuccess } from "../reducers/paymentReducer";
import { agentAuthExpired } from "../reducers/agentReducer";

export const AgentAddMoneyApi = (price) => async (dispatch) => {
    try {
        dispatch(agentAddMoneyRequest());

        const { data } = await axios.post(`${server}/payment/add`, { price }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("agentToken")}`
            }
        });

        dispatch(agentAddMoneySuccess(data));
        toast.success(data?.message?.data?.message || "Add Money in the wallet successfully.");
    } catch (error) {
        dispatch(agentAddMoneyFail(error?.response?.data?.message || "failed to Add Money in the wallet"));
        if (error.status == 401) {
            localStorage.removeItem("agentToken");
            localStorage.removeItem("agentProfile");
            dispatch(agentAuthExpired(true));
        }
    }
};

export const AgentBuyLeadApi = (leadId) => async (dispatch) => {
    try {
        dispatch(agentBuyNewLeadRequest());

        const { data } = await axios.get(`${server}/payment/lead/${leadId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("agentToken")}`
            }
        });
        dispatch(agentBuyNewLeadSuccess(data));
        toast.success(data?.message?.data?.message || "Lead purchased successfully. Transaction recorded.");
    } catch (error) {
        toast.error(error?.response?.data?.message || "Your profile is under review.");
        dispatch(agentBuyNewLeadFail(error?.response?.data?.message || "failed to buy lead"));
        if (error.status == 401) {
            localStorage.removeItem("agentToken");
            localStorage.removeItem("agentProfile");
            dispatch(agentAuthExpired(true));
        }
    }
};

export const AgentGetPaymentWalletHistoryApi = () => async (dispatch) => {
    try {
        dispatch(agentGetWalletTansRequest());

        const { data } = await axios.get(`${server}/payment/agent/wallet`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("agentToken")}`
            }
        });

        dispatch(agentGetWalletTansSuccess(data));
    } catch (error) {
        dispatch(agentGetWalletTansFail(error?.response?.data?.message || "failed to load payment"));
        // toast.error(error?.response?.data?.message || "failed to load payment");
    }
};

export const AgentGetPaymentHistoryApi = (page = 1, limit = 3, search = "") => async (dispatch) => {
    try {
        dispatch(agentGetPaymentRequest());

        const { data } = await axios.get(`${server}/payment/agent?page=${page}&limit=${limit}&search=${encodeURIComponent(search)}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("agentToken")}`
            }
        });

        dispatch(agentGetPaymentSuccess(data));
    } catch (error) {
        dispatch(agentGetPaymentFail(error?.response?.data?.message || "failed to load payment"));
        if (error.status == 401) {
            localStorage.removeItem("agentToken");
            localStorage.removeItem("agentProfile");
            dispatch(agentAuthExpired(true));
        }
    }
};

export const AgentSinglePaymentHistoryApi = (leadId) => async (dispatch) => {
    try {
        dispatch(GetSinglePaymentRequest());

        const { data } = await axios.get(`${server}/payment/agent/${leadId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("agentToken")}`
            }
        });

        dispatch(GetSinglePaymentSuccess(data));
    } catch (error) {
        dispatch(GetSinglePaymentFail(error?.response?.data?.message || "failed to load payment"));
        toast.error(error?.response?.data?.message || "failed to load payment");
    }
};

export const AdminGetPaymentHistoryApi = () => async (dispatch) => {
    try {
        dispatch(adminGetPaymentRequest());

        const { data } = await axios.get(`${server}/payment/admin`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("adminToken")}`
            }
        });
        // console.log('payment-admin',data)
        dispatch(adminGetPaymentSuccess(data));
    } catch (error) {
        dispatch(adminGetPaymentFail(error?.response?.data?.message || "failed to load payment"));
        if (error.status == 401) {
            localStorage.removeItem("agentToken");
            localStorage.removeItem("agentProfile");
            dispatch(agentAuthExpired(true));
        }
    }
};

