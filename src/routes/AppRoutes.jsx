import { lazy } from "react";
import App from "../App";
import Contact from "../pages/appPages/Contact";
import HowItWork from "../pages/appPages/HowItWork";
import BuyLeads from "../pages/appPages/BuyLeads";
import About from "../pages/appPages/About";
import Home from "../pages/appPages/Home";
import AgentLogin from "../pages/agentPages/AgentLogin";
import AgentSignup from "../pages/agentPages/AgentSignup";
import AdminLogin from "../pages/adminPages/AdminLogin";
import BuyLeadDetails from "../pages/appPages/BuyLeadDetails";
import TermsOfService from "../pages/appPages/TermsOfService";
import PrivacyPolicy from "../pages/appPages/PrivacyPolicy";
// const About = lazy(() => import("../pages/appPages/About"));
// const Home = lazy(() => import("../pages/appPages/Home"));




const AppRoutes = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'contact', element: <Contact /> },
            { path: 'how-it-work', element: <HowItWork /> },
            { path: 'buy-Leads', element: <BuyLeads /> },

            { path: 'termsOfService', element: <TermsOfService /> },
            { path: 'privacyPolicy', element: <PrivacyPolicy /> },

            { path: 'buy-Lead/details/:id', element: <BuyLeadDetails /> },
            
            
            { path: 'admin-login', element: <AdminLogin /> },
            { path: 'agent-login', element: <AgentLogin /> },
            { path: 'agent-signup', element: <AgentSignup /> },
        ]
    }
]

export default AppRoutes;