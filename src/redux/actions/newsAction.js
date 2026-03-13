import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../store";
import { adminAddNewsFail, adminAddNewsRequest, adminAddNewsSuccess, adminDeleteNewsFail, adminDeleteNewsRequest, adminDeleteNewsSuccess, adminGetAllNewsFail, adminGetAllNewsRequest, adminGetAllNewsSuccess, adminSingleNewsFail, adminSingleNewsRequest, adminSingleNewsSuccess, adminUpdateNewsFail, adminUpdateNewsRequest, adminUpdateNewsSuccess } from "../reducers/newsReducer";

export const GetAllNewsApi = (page = 1, limit) => async (dispatch) => {
    try {
        dispatch(adminGetAllNewsRequest());
        const { data } = await axios.get(`${server}/news`, {
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${localStorage.getItem("agentToken")}`
            }
        });
        dispatch(adminGetAllNewsSuccess(data));

    } catch (error) {
        dispatch(adminGetAllNewsFail(error?.response?.data?.message || "something went worng in leadData"));
    }
};

export const AddNewsApi = (title, description, content, banner) => async (dispatch) => {
    try {
        dispatch(adminAddNewsRequest());
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('content', content);
        if (banner) {
            formData.append('banner', banner);
        }
        const { data } = await axios.post(`${server}/news`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem("adminToken")}`
            }
        });
        dispatch(adminAddNewsSuccess(data));
        toast.success(data?.message ? data.message : 'news created')

    } catch (error) {
        dispatch(adminAddNewsFail(error?.response?.data?.message || "something went worng"));
    }
};

export const UpdateNewsApi = (title, description, content, banner, newsId) => async (dispatch) => {
    try {
        dispatch(adminUpdateNewsRequest());
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('content', content);
        if (banner) {
            formData.append('banner', banner);
        }
        const { data } = await axios.put(`${server}/news/${newsId}`, formData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("adminToken")}`
            }
        });
        dispatch(adminUpdateNewsSuccess(data));
        toast.success(data?.message ? data.message : 'news updated')

    } catch (error) {
        dispatch(adminUpdateNewsFail(error?.response?.data?.message || "something went worng"));
    }
};

export const DeleteNewsApi = (newsId) => async (dispatch) => {
    try {
        dispatch(adminDeleteNewsRequest());
        const { data } = await axios.delete(`${server}/news/${newsId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("adminToken")}`
            }
        });
        dispatch(adminDeleteNewsSuccess(data));
        toast.success(data?.message ? data.message : 'news deleted')

    } catch (error) {
        dispatch(adminDeleteNewsFail(error?.response?.data?.message || "something went worng"));
    }
};

export const SingleNewsApi = (newsId) => async (dispatch) => {
    try {
        dispatch(adminSingleNewsRequest());
        const { data } = await axios.get(`${server}/news/${newsId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("adminToken")}`
            }
        });
        dispatch(adminSingleNewsSuccess(data));

    } catch (error) {
        dispatch(adminSingleNewsFail(error?.response?.data?.message || "something went worng"));
    }
};
