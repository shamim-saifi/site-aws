import { configureStore } from '@reduxjs/toolkit'
import adminReducer from './reducers/adminReducer'
import agentReducer from './reducers/agentReducer'
import leadReducer from './reducers/leadReducer'
import paymentReducer from './reducers/paymentReducer'
import newsReducer from './reducers/newsReducer'

export const server = 'https://api.shamim.store/api/v1';

const store = configureStore({
    reducer: {
        adminContainer: adminReducer,
        agentContainer: agentReducer,
        leadContainer: leadReducer,
        paymentContainer: paymentReducer,
        newsContainer: newsReducer,
    },
})

export default store