import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
import AgentRoutes from './routes/AgentRoutes.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AdminRoutes from './routes/AdminRoutes.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { Toaster } from 'react-hot-toast'

const routes = [...AppRoutes, ...AgentRoutes, ...AdminRoutes]

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster />
      {/* <App /> */}
    </Provider>
  </StrictMode>
)
