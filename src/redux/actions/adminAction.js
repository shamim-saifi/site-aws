import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../store";
import api from "../../helper/axiosInstance";

import { adminAuthExpired, adminDashboardCountFail, adminDashboardCountRequest, adminDashboardCountSuccess, adminLoginFail, adminLoginRequest, adminLoginSuccess } from "../reducers/adminReducer";


export const AdminLoginApi = (email, password) => async (dispatch) => {
    try {
        dispatch(adminLoginRequest());

        const { data } = await axios.post(`${server}/admin/login`, { email, password }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        dispatch(adminLoginSuccess(data));

        // Save to localStorage
        localStorage.setItem("adminToken", data.token);
        localStorage.setItem("adminProfile", JSON.stringify(data.admin));
        toast.success(data?.message || "Login successful");
    } catch (error) {
        dispatch(adminLoginFail(error?.response?.data?.message || "Login failed"));
        toast.error(error?.response?.data?.message || "Login failed");
    }
};

export const AdminLogoutApi = () => async (dispatch) => {
    try {

        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminProfile");

        dispatch(adminAuthExpired(true));

        toast.success("Logout successful");


    } catch (error) {
        toast.error("Logout failed");
    }
};

export const AdminDashboardCountApi = () => async (dispatch) => {
    try {
        dispatch(adminDashboardCountRequest());

        const { data } = await axios.get(`${server}/admin/dashboard-count`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("adminToken")}`
            }
        });
        dispatch(adminDashboardCountSuccess(data));
    } catch (error) {
        dispatch(adminDashboardCountFail(error?.response?.data?.message || "failed to get dashboard-count"));
        if (error.status == 401) {
            localStorage.removeItem("adminToken");
            localStorage.removeItem("adminProfile");
            dispatch(adminAuthExpired(true));
        }
    }
};

