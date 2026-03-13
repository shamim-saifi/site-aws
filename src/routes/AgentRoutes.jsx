import AgentApp from "../layouts/agentLayout/AgentApp";
import AgentAddMoney from "../pages/agentPages/AgentAddMoney";
import AgentDashboard from "../pages/agentPages/AgentDashboard";
import AgentDocument from "../pages/agentPages/AgentDocument";
import AgentDocumentEdit from "../pages/agentPages/AgentDocumentEdit";
import AgentLeadDetails from "../pages/agentPages/AgentLeadDetails";
import AgentLeads from "../pages/agentPages/AgentLeads";
import AgentPayment from "../pages/agentPages/AgentPayment";
import AgentProfile from "../pages/agentPages/AgentProfile";
import AgentProfileEdit from "../pages/agentPages/AgentProfileEdit";
import AgentWalletAddMoney from "../pages/agentPages/AgentWalletAddMoney";



const AgentRoutes = [
    {
        path: '/agent',
        element: <AgentApp />,
        children: [
            { path: '', element: <AgentDashboard /> },
            { path: 'leads', element: <AgentLeads /> },
            { path: 'leads/details/:leadId', element: <AgentLeadDetails /> },
            { path: 'profile', element: <AgentProfile /> },
            { path: 'profile/edit', element: <AgentProfileEdit /> },
            { path: 'payment', element: <AgentPayment /> },
            { path: 'payment/wallet', element: <AgentWalletAddMoney /> },
            { path: 'payment/add-money', element: <AgentAddMoney /> },
            { path: 'document', element: <AgentDocument /> },
            { path: 'document/edit', element: <AgentDocumentEdit /> },
        ]
    }
]

export default AgentRoutes;