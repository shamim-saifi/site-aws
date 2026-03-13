import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    adminLoading: false,
    authExp: false,
    adminDashboard: {}
}
const AdminReducer = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        adminLoginRequest: (state) => {
            state.adminLoading = true;
        },
        adminLoginSuccess: (state, action) => {
            state.adminLoading = false;
            state.isAuthenticated = true;
            state.admin = action.payload.admin;
            state.message = action.payload.message;
        },
        adminLoginFail: (state, action) => {
            state.adminLoading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        },

        adminDashboardCountRequest: (state) => {
            state.adminLoading = true;
        },
        adminDashboardCountSuccess: (state, action) => {
            state.adminLoading = false;
            state.adminDashboard = action.payload.adminDashboardCount;
        },
        adminDashboardCountFail: (state, action) => {
            state.adminLoading = false;
            state.error = action.payload;
        },

        adminAuthExpired: (state, action) => {
            state.authExp = action.payload;
        },
    }
})


export const {
    adminLoginRequest, adminLoginFail, adminLoginSuccess,
    adminDashboardCountFail, adminDashboardCountRequest, adminDashboardCountSuccess,
    adminAuthExpired,

} = AdminReducer.actions

export default AdminReducer.reducer;
