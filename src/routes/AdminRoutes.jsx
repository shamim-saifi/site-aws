import AdminAgentDocumentView from "../components/adminPageComponents/AdminAgentDocumentView";
import AdminApp from "../layouts/adminLayout/AdminApp";
import AdminAddNewBlog from "../pages/adminPages/AdminAddNewNews";
import AdminAgent from "../pages/adminPages/AdminAgent";
import AdminAgentProfile from "../pages/adminPages/AdminAgentProfile";
import AdminBlog from "../pages/adminPages/AdminNews";
import AdminDashboard from "../pages/adminPages/AdminDashboard";
import AdminLeadProfile from "../pages/adminPages/AdminLeadProfile";
import AdminLeads from "../pages/adminPages/AdminLeads";
import AdminPayment from "../pages/adminPages/AdminPayment";
import AdminSoldLeads from "../pages/adminPages/AdminSoldLead";
import AdminSoldLeadProfile from "../pages/adminPages/AdminSoldLeadProfile";
import AdminUnsoldLeads from "../pages/adminPages/AdminUnsoldLead";
import AdminWalletPayment from "../pages/adminPages/AdminWalletPayment";
import AdminEditNews from "../pages/adminPages/AdminEditNews";
import AdminContact from "../pages/adminPages/AdminContact";




const AdminRoutes = [
    {
        path: '/admin',
        element: <AdminApp />,
        children: [
            { path: '', element: <AdminDashboard /> },
            { path: 'leads', element: <AdminLeads /> },
            { path: 'leads/:leadId', element: <AdminLeadProfile /> },

            { path: 'sold/leads', element: <AdminSoldLeads /> },
            { path: 'sold/leads/:leadId', element: <AdminSoldLeadProfile /> },

            { path: 'unsold/leads', element: <AdminUnsoldLeads /> },
            { path: 'agents', element: <AdminAgent /> },
            { path: 'agents/:id', element: <AdminAgentProfile /> },
            { path: 'agents/:id/document', element: <AdminAgentDocumentView /> },
            { path: 'payment', element: <AdminPayment /> },
            { path: 'wallet', element: <AdminWalletPayment /> },
            // { path: 'document/edit', element: <AgentDocumentEdit /> },
            
            { path: 'news', element: <AdminBlog /> },
            { path: 'news/add', element: <AdminAddNewBlog /> },
            { path: 'news/edit/:newsId', element: <AdminEditNews /> },
            
            { path: 'contact', element: <AdminContact /> },
        ]
    }
]

export default AdminRoutes;