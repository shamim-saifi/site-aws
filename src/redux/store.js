import { configureStore } from '@reduxjs/toolkit'
import adminReducer from './reducers/adminReducer'
import agentReducer from './reducers/agentReducer'
import leadReducer from './reducers/leadReducer'
import paymentReducer from './reducers/paymentReducer'
import newsReducer from './reducers/newsReducer'

export const server = 'http://localhost:2003/api/v1'
// export const server = 'https://immify-server.onrender.com/api/v1'


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