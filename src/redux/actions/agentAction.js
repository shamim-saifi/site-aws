import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../store";
import { agentAuthExpired, agentDashboardCountFail, agentDashboardCountRequest, agentDashboardCountSuccess, agentGetBuyLeadsFail, agentGetBuyLeadsRequest, agentGetBuyLeadsSuccess, agentLoginFail, agentLoginRequest, agentLoginSuccess, agentSignupFail, agentSignupRequest, agentSignupSuccess, deleteAgentFail, deleteAgentRequest, deleteAgentSuccess, getAgentProfileFail, getAgentProfileRequest, getAgentProfileSuccess, getAllAgentFail, getAllAgentRequest, getAllAgentSuccess, getSingleAgentFail, getSingleAgentRequest, getSingleAgentSuccess, updateAgentDocumentFail, updateAgentDocumentRequest, updateAgentDocumentSuccess, updateAgentProfileFail, updateAgentProfileRequest, updateAgentProfileSuccess, verifyAgentFail, verifyAgentRequest, verifyAgentSuccess } from "../reducers/agentReducer";
import { adminAuthExpired } from "../reducers/adminReducer";

export const AgentSignupApi = (firstName, lastName, email, phone, country, companyName, password) => async (dispatch) => {
    try {
        dispatch(agentSignupRequest());

        const { data } = await axios.post(`${server}/agent/signup`,
            { firstName, lastName, email, phone, country, companyName, password },
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

        dispatch(agentSignupSuccess(data));
        localStorage.setItem("agentToken", data.token);
        localStorage.setItem("agentProfile", JSON.stringify(data.agent));
        toast.success(data?.message || "Signup successful");
    } catch (error) {
        dispatch(agentSignupFail(error?.response?.data?.message || "Signup failed"));
        toast.error(error?.response?.data?.message || "Signup failed");
    }
};

export const AgentLoginApi = (email, password) => async (dispatch) => {
    try {
        dispatch(agentLoginRequest());

        const { data } = await axios.post(`${server}/agent/login`, { email, password }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        dispatch(agentLoginSuccess(data));
        localStorage.setItem("agentToken", data.token);
        localStorage.setItem("agentProfile", JSON.stringify(data.agent));
        toast.success(data?.message || "Login successful");
    } catch (error) {
        dispatch(agentLoginFail(error?.response?.data?.message || "Login failed"));
        toast.error(error?.response?.data?.message || "Login failed");
    }
};

export const AgentLogoutApi = () => async (dispatch) => {
    try {

        localStorage.removeItem("agentToken");
        localStorage.removeItem("agentProfile");
        dispatch(agentAuthExpired(true));

        toast.success(data?.message || "Logout successful");
    } catch (error) {
        toast.error("Logout failed");
    }
};

export const GetAgentProfileApi = () => async (dispatch) => {
    try {
        dispatch(getAgentProfileRequest());

        const { data } = await axios.get(`${server}/agent/profile`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("agentToken")}`
            }
        });
        dispatch(getAgentProfileSuccess(data));

    } catch (error) {
        dispatch(getAgentProfileFail(error?.response?.data?.message || "failed to get agent profile"));
        if (error.status == 401) {
            localStorage.removeItem("adminToken");
            localStorage.removeItem("adminProfile");
            dispatch(adminAuthExpired(true));
        }
    }
};

export const AgentUpateProfileApi = (firstName, lastName, email, phone, country, companyName, agentProfile) => async (dispatch) => {
    try {
        dispatch(updateAgentProfileRequest());

        const { data } = await axios.put(`${server}/agent/profile`,
            { firstName, lastName, email, phone, country, companyName, agentProfile },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("agentToken")}`
                }
            });

        dispatch(updateAgentProfileSuccess(data));
        toast.success(data?.message || "upate profile successful");
    } catch (error) {
        dispatch(updateAgentProfileFail(error?.response?.data?.message || "failed upate profile successful"));
        toast.error(error?.response?.data?.message || "failed upate profile successful");
        if (error.status == 401) {
            localStorage.removeItem("agentToken");
            localStorage.removeItem("agentProfile");
            dispatch(agentAuthExpired(true));
        }
    }
};

export const AgentUpateDocumentApi = (panCard, aadharCard, vetCertificate, companyCertificate, gstCertificate,) => async (dispatch) => {
    try {
        dispatch(updateAgentDocumentRequest());

        const { data } = await axios.put(`${server}/agent/document`,
            { panCard, aadharCard, vetCertificate, companyCertificate, gstCertificate, },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("agentToken")}`
                }
            });
        dispatch(updateAgentDocumentSuccess(data));
        toast.success(data?.message || "upate profile successful");
    } catch (error) {
        dispatch(updateAgentDocumentFail(error?.response?.data?.message || "failed upate profile successful"));
        toast.error(error?.response?.data?.message || "failed upate profile successful");
        if (error.status == 401) {
            localStorage.removeItem("agentToken");
            localStorage.removeItem("agentProfile");
            dispatch(agentAuthExpired(true));
        }
    }
};

export const AgentGetAllBuyLeadsApi = (page = 1, limit = 3, search = "") => async (dispatch) => {
    try {
        dispatch(agentGetBuyLeadsRequest());

        const { data } = await axios.get(`${server}/agent/lead?page=${page}&limit=${limit}&search=${encodeURIComponent(search)}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("agentToken")}`
            }
        });
        dispatch(agentGetBuyLeadsSuccess(data));

    } catch (error) {
        dispatch(agentGetBuyLeadsFail(error?.response?.data?.message || "failed to get lead"));
        if (error.status == 401) {
            localStorage.removeItem("agentToken");
            localStorage.removeItem("agentProfile");
            dispatch(agentAuthExpired(true));
        }
    }
};

export const AgentDashboardCountApi = () => async (dispatch) => {
    try {
        dispatch(agentDashboardCountRequest());

        const { data } = await axios.get(`${server}/agent/dashboard-count`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("agentToken")}`
            }
        });
        dispatch(agentDashboardCountSuccess(data));
    } catch (error) {
        dispatch(agentDashboardCountFail(error?.response?.data?.message || "count failed"));
        if (error.status == 401) {
            localStorage.removeItem("agentToken");
            localStorage.removeItem("agentProfile");
            dispatch(agentAuthExpired(true));
        }
    }
};


// ------------------------------admin api-------------------------

export const GetAllAgentApi = (page = 1, limit = 3, search = "") => async (dispatch) => {
    try {
        dispatch(getAllAgentRequest());

        const { data } = await axios.get(`${server}/admin/agent?page=${page}&limit=${limit}&search=${encodeURIComponent(search)}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("adminToken")}`
            }
        });
        dispatch(getAllAgentSuccess(data));

    } catch (error) {
        dispatch(getAllAgentFail(error?.response?.data?.message || "Login failed"));
        if (error.status == 401) {
            localStorage.removeItem("adminToken");
            localStorage.removeItem("adminProfile");
            dispatch(adminAuthExpired(true));
        }

    }
};

export const GetSingleAgentApi = (id) => async (dispatch) => {
    try {
        dispatch(getSingleAgentRequest());

        const { data } = await axios.get(`${server}/admin/agent/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("adminToken")}`
            }
        });
        dispatch(getSingleAgentSuccess(data));

    } catch (error) {
        dispatch(getSingleAgentFail(error?.response?.data?.message || "not get agent data"));
    }
};

export const DeleteSingleAgentApi = (id) => async (dispatch) => {
    try {
        dispatch(deleteAgentRequest());

        const { data } = await axios.delete(`${server}/admin/agent/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("adminToken")}`
            }
        });
        dispatch(deleteAgentSuccess(data));
        toast.success(data?.message || "Delete Single Agent successful");


    } catch (error) {
        dispatch(deleteAgentFail(error?.response?.data?.message || "not get agent data"));
    }
};

export const VerifyAgentApi = (id, status) => async (dispatch) => {
    try {
        dispatch(verifyAgentRequest());

        const { data } = await axios.put(`${server}/admin/agent/verify/${id}`, { status }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("adminToken")}`
            }
        });
        dispatch(verifyAgentSuccess(data));

        toast.success(data?.message || "Agent verified successful");

    } catch (error) {
        dispatch(verifyAgentFail(error?.response?.data?.message || "faild to verify agent"));
    }
};

