import axios from "axios";
import { server } from "../redux/store";

const api = axios.create({
    baseURL: server,
    withCredentials: true, // for cookies if needed
    headers: {
        "Content-Type": "application/json",
    },
});

// Attach token before every request
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("adminToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// On 401 error (token expired), clear localStorage and redirect
api.interceptors.response.use(
    (res) => res,
    (err) => {
        const status = err?.response?.status;
        if (status === 401) {
            // Token expired or invalid
            localStorage.removeItem("adminToken");
            localStorage.removeItem("adminTokenExpiry");
            localStorage.removeItem("adminProfile");

            toast.error("Session expired. Please login again.");
            window.location.href = "/admin-login";
        }
        return Promise.reject(err);
    }
);

export default api;
