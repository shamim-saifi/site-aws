import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    leadLoading: false,
    leads: [],
    newLeads: [],
    soldLeads: [],
    pagination: {
        totalLeads: 0,
        totalPages: 1,
        currentPage: 1,
        itemsPerPage: 3,
    },
    publicPagination: {
        totalLeads: 0,
        totalPages: 1,
        currentPage: 1,
        itemsPerPage: 9,
    },
}
const LeadReducer = createSlice({
    name: 'lead',
    initialState,
    reducers: {

        getAllLeadToSaleRequest: (state) => {
            state.leadLoading = true;
        },
        getAllLeadToSaleSuccess: (state, action) => {
            state.leadLoading = false;
            state.newLeads = action.payload.leads;
            state.publicPagination = action.payload.pagination;
            state.message = action.payload.message;
        },
        getAllLeadToSaleFail: (state, action) => {
            state.leadLoading = false;
            state.error = action.payload;
        },

        getAllLeadRequest: (state) => {
            state.leadLoading = true;
        },
        getAllLeadSuccess: (state, action) => {
            state.leadLoading = false;
            state.leads = action.payload.leads;
            state.pagination = action.payload.pagination;
            state.message = action.payload.message;
        },
        getAllLeadFail: (state, action) => {
            state.leadLoading = false;
            state.error = action.payload;
        },

        getAllSoldLeadRequest: (state) => {
            state.leadLoading = true;
        },
        getAllSoldLeadSuccess: (state, action) => {
            state.leadLoading = false;
            state.soldLeads = action.payload.soldLeads;
            state.pagination = action.payload.pagination;
            state.message = action.payload.message;
        },
        getAllSoldLeadFail: (state, action) => {
            state.leadLoading = false;
            state.error = action.payload;
        },


        getSingleLeadRequest: (state) => {
            state.leadLoading = true;
        },
        getSingleLeadSuccess: (state, action) => {
            state.leadLoading = false;
            state.singleLead = action.payload.lead;
            state.message = action.payload.message;
        },
        getSingleLeadFail: (state, action) => {
            state.leadLoading = false;
            state.error = action.payload;
        },


        deleteLeadRequest: (state) => {
            state.leadLoading = true;
        },
        deleteLeadSuccess: (state, action) => {
            state.leadLoading = false;
            state.message = action.payload.message;
        },
        deleteLeadFail: (state, action) => {
            state.leadLoading = false;
            state.error = action.payload;
        },


        updateLeadDetailsRequest: (state) => {
            state.leadLoading = true;
        },
        updateLeadDetailsSuccess: (state, action) => {
            state.leadLoading = false;
            state.message = action.payload.message;
        },
        updateLeadDetailsFail: (state, action) => {
            state.leadLoading = false;
            state.error = action.payload;
        },



        verifyLeadRequest: (state) => {
            state.leadLoading = true;
        },
        verifyLeadSuccess: (state, action) => {
            state.leadLoading = false;
            state.message = action.payload.message;
        },
        verifyLeadFail: (state, action) => {
            state.leadLoading = false;
            state.error = action.payload;
        },
    }
})


export const {
    getAllLeadFail, getAllLeadRequest, getAllLeadSuccess,
    getSingleLeadFail, getSingleLeadRequest, getSingleLeadSuccess,
    deleteLeadFail, deleteLeadRequest, deleteLeadSuccess,
    updateLeadDetailsFail, updateLeadDetailsRequest, updateLeadDetailsSuccess,
    getAllSoldLeadFail, getAllSoldLeadRequest, getAllSoldLeadSuccess,
    getAllLeadToSaleFail, getAllLeadToSaleRequest, getAllLeadToSaleSuccess,
    verifyLeadFail,verifyLeadRequest,verifyLeadSuccess

} = LeadReducer.actions

export default LeadReducer.reducer;
