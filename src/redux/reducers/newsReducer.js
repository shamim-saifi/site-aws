import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    newsLoading: false,
    news: {}
}
const NewsReducer = createSlice({
    name: 'news',
    initialState,
    reducers: {

        adminGetAllNewsRequest: (state) => {
            state.newsLoading = true;
        },
        adminGetAllNewsSuccess: (state, action) => {
            state.newsLoading = false;
            state.news = action.payload.data;
        },
        adminGetAllNewsFail: (state, action) => {
            state.newsLoading = false;
            state.error = action.payload;
        },


        adminAddNewsRequest: (state) => {
            state.newsLoading = true;
        },
        adminAddNewsSuccess: (state, action) => {
            state.newsLoading = false;
            state.message = action.payload;
        },
        adminAddNewsFail: (state, action) => {
            state.newsLoading = false;
            state.error = action.payload;
        },


        adminUpdateNewsRequest: (state) => {
            state.newsLoading = true;
        },
        adminUpdateNewsSuccess: (state, action) => {
            state.newsLoading = false;
            state.message = action.payload;
        },
        adminUpdateNewsFail: (state, action) => {
            state.newsLoading = false;
            state.error = action.payload;
        },

        adminDeleteNewsRequest: (state) => {
            state.newsLoading = true;
        },
        adminDeleteNewsSuccess: (state, action) => {
            state.newsLoading = false;
            state.message = action.payload;
        },
        adminDeleteNewsFail: (state, action) => {
            state.newsLoading = false;
            state.error = action.payload;
        },


        adminSingleNewsRequest: (state) => {
            state.newsLoading = true;
        },
        adminSingleNewsSuccess: (state, action) => {
            state.newsLoading = false;
            state.singleNews = action.payload.data;
        },
        adminSingleNewsFail: (state, action) => {
            state.newsLoading = false;
            state.error = action.payload;
        },
    }
})


export const {
    adminGetAllNewsFail, adminGetAllNewsRequest, adminGetAllNewsSuccess,
    adminAddNewsFail, adminAddNewsRequest, adminAddNewsSuccess,
    adminUpdateNewsFail, adminUpdateNewsRequest, adminUpdateNewsSuccess,
    adminDeleteNewsFail, adminDeleteNewsRequest, adminDeleteNewsSuccess,
    adminSingleNewsFail,adminSingleNewsRequest,adminSingleNewsSuccess,

} = NewsReducer.actions

export default NewsReducer.reducer;
