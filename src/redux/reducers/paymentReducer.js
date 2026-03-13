import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    paymentLoading: false,
    agentPayments: [],
    adminPayments: [],
    agentWallet: [],
    pagination: {
        totalLeads: 0,
        totalPages: 1,
        currentPage: 1,
        itemsPerPage: 3,
    },
    agentLeadPagination: {
        totalLeads: 0,
        totalPages: 1,
        currentPage: 1,
        itemsPerPage: 9,
    },
}
const PaymentReducer = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        agentBuyNewLeadRequest: (state) => {
            state.paymentLoading = true;
        },
        agentBuyNewLeadSuccess: (state, action) => {
            state.paymentLoading = false;
            state.message = action.payload.message;
        },
        agentBuyNewLeadFail: (state, action) => {
            state.paymentLoading = false;
            state.error = action.payload;
        },


        agentAddMoneyRequest: (state) => {
            state.paymentLoading = true;
        },
        agentAddMoneySuccess: (state, action) => {
            state.paymentLoading = false;
            state.message = action.payload.message;
        },
        agentAddMoneyFail: (state, action) => {
            state.paymentLoading = false;
            state.error = action.payload;
        },

        agentGetPaymentRequest: (state) => {
            state.paymentLoading = true;
        },
        agentGetPaymentSuccess: (state, action) => {
            state.paymentLoading = false;
            state.agentPayments = action.payload.payments;
            state.agentLeadPagination = action.payload.pagination;
        },
        agentGetPaymentFail: (state, action) => {
            state.paymentLoading = false;
            state.error = action.payload;
        },

        agentGetWalletTansRequest: (state) => {
            state.paymentLoading = true;
        },
        agentGetWalletTansSuccess: (state, action) => {
            state.paymentLoading = false;
            state.agentWallet = action.payload.payments;
            // state.agentLeadPagination = action.payload.pagination;
        },
        agentGetWalletTansFail: (state, action) => {
            state.paymentLoading = false;
            state.error = action.payload;
        },

        adminGetPaymentRequest: (state) => {
            state.paymentLoading = true;
        },
        adminGetPaymentSuccess: (state, action) => {
            state.paymentLoading = false;
            state.adminPayments = action.payload.payments;
            // state.pagination = action.payload.pagination;
        },
        adminGetPaymentFail: (state, action) => {
            state.paymentLoading = false;
            state.error = action.payload;
        },

        GetSinglePaymentRequest: (state) => {
            state.paymentLoading = true;
        },
        GetSinglePaymentSuccess: (state, action) => {
            state.paymentLoading = false;
            state.singlePayment = action.payload.payments;
        },
        GetSinglePaymentFail: (state, action) => {
            state.paymentLoading = false;
            state.error = action.payload;
        },
    }

})


export const {
    agentBuyNewLeadFail, agentBuyNewLeadRequest, agentBuyNewLeadSuccess,
    agentGetPaymentFail, agentGetPaymentRequest, agentGetPaymentSuccess,
    adminGetPaymentFail, adminGetPaymentRequest, adminGetPaymentSuccess,
    GetSinglePaymentFail, GetSinglePaymentRequest, GetSinglePaymentSuccess,
    agentAddMoneyFail, agentAddMoneyRequest, agentAddMoneySuccess,
    agentGetWalletTansFail,agentGetWalletTansRequest,agentGetWalletTansSuccess,
} = PaymentReducer.actions

export default PaymentReducer.reducer;
