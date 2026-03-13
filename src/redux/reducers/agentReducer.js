import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    agentLoading: false,
    uploadLoading: false,
    agents: [],
    pagination: {
        totalAgents: 0,
        totalPages: 1,
        currentPage: 1,
        itemsPerPage: 3,
    },
    agentDashboard: {},
    agentAuthExp: false,
}
const AgentReducer = createSlice({
    name: 'agent',
    initialState,
    reducers: {

        agentSignupRequest: (state) => {
            state.agentLoading = true;
        },
        agentSignupSuccess: (state, action) => {
            state.agentLoading = false;
            state.isAuthenticated = true;
            state.agents = action.payload.agent;
            state.message = action.payload.message;
        },
        agentSignupFail: (state, action) => {
            state.agentLoading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        },


        agentLoginRequest: (state) => {
            state.agentLoading = true;
        },
        agentLoginSuccess: (state, action) => {
            state.agentLoading = false;
            state.isAuthenticated = true;
            state.agents = action.payload.agent;
            state.message = action.payload.message;
        },
        agentLoginFail: (state, action) => {
            state.agentLoading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        },

        getAllAgentRequest: (state) => {
            state.agentLoading = true;
        },
        getAllAgentSuccess: (state, action) => {
            state.agentLoading = false;
            state.agents = action.payload.agents;
            state.pagination = action.payload.pagination;

        },
        getAllAgentFail: (state, action) => {
            state.agentLoading = false;
            state.error = action.payload;
        },

        getAgentProfileRequest: (state) => {
            state.agentLoading = true;
        },
        getAgentProfileSuccess: (state, action) => {
            state.agentLoading = false;
            state.agentProfile = action.payload.agent;
        },
        getAgentProfileFail: (state, action) => {
            state.agentLoading = false;
            state.error = action.payload;
        },




        getSingleAgentRequest: (state) => {
            state.agentLoading = true;
        },
        getSingleAgentSuccess: (state, action) => {
            state.agentLoading = false;
            state.singleAgent = action.payload.agent;
            state.message = action.payload.message;
        },
        getSingleAgentFail: (state, action) => {
            state.agentLoading = false;
            state.error = action.payload;
        },


        deleteAgentRequest: (state) => {
            state.agentLoading = true;
        },
        deleteAgentSuccess: (state, action) => {
            state.agentLoading = false;
            state.message = action.payload.message;
        },
        deleteAgentFail: (state, action) => {
            state.agentLoading = false;
            state.error = action.payload;
        },


        verifyAgentRequest: (state) => {
            state.agentLoading = true;
        },
        verifyAgentSuccess: (state, action) => {
            state.agentLoading = false;
            state.message = action.payload.message;
        },
        verifyAgentFail: (state, action) => {
            state.agentLoading = false;
            state.error = action.payload;
        },


        updateAgentProfileRequest: (state) => {
            state.agentLoading = true;
        },
        updateAgentProfileSuccess: (state, action) => {
            state.agentLoading = false;
            state.message = action.payload.message;
        },
        updateAgentProfileFail: (state, action) => {
            state.agentLoading = false;
            state.error = action.payload;
        },


        updateAgentDocumentRequest: (state) => {
            state.uploadLoading = true;
        },
        updateAgentDocumentSuccess: (state, action) => {
            state.uploadLoading = false;
            state.message = action.payload.message;
        },
        updateAgentDocumentFail: (state, action) => {
            state.uploadLoading = false;
            state.error = action.payload;
        },


        agentGetBuyLeadsRequest: (state) => {
            state.agentLoading = true;
        },
        agentGetBuyLeadsSuccess: (state, action) => {
            state.agentLoading = false;
            state.agentBuyLeads = action.payload.leads;
            state.pagination = action.payload.pagination;
        },
        agentGetBuyLeadsFail: (state, action) => {
            state.agentLoading = false;
            state.error = action.payload;
        },



        agentDashboardCountRequest: (state) => {
            state.agentLoading = true;
        },
        agentDashboardCountSuccess: (state, action) => {
            state.agentLoading = false;
            state.agentDashboard = action.payload.agentDashboardCount;
        },
        agentDashboardCountFail: (state, action) => {
            state.agentLoading = false;
            state.error = action.payload;
        },


        agentAuthExpired: (state, action) => {
            state.authExp = action.payload;
        },
    }

})


export const {
    agentLoginFail, agentLoginRequest, agentLoginSuccess,
    getAllAgentFail, getAllAgentRequest, getAllAgentSuccess,
    getSingleAgentFail, getSingleAgentRequest, getSingleAgentSuccess,
    deleteAgentFail, deleteAgentRequest, deleteAgentSuccess,
    verifyAgentFail, verifyAgentRequest, verifyAgentSuccess,
    agentSignupFail, agentSignupRequest, agentSignupSuccess,
    updateAgentProfileFail, updateAgentProfileRequest, updateAgentProfileSuccess,
    getAgentProfileFail, getAgentProfileRequest, getAgentProfileSuccess,
    updateAgentDocumentFail, updateAgentDocumentRequest, updateAgentDocumentSuccess,
    agentGetBuyLeadsFail, agentGetBuyLeadsRequest, agentGetBuyLeadsSuccess,
    agentDashboardCountFail, agentDashboardCountRequest, agentDashboardCountSuccess,
    agentAuthExpired,

} = AgentReducer.actions

export default AgentReducer.reducer;
