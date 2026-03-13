import React, { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetSingleLeadApi } from "../../redux/actions/leadAction";
import { FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const AdminSoldLeadProfile = () => {
  const { leadId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { leadLoading, error, soldLeads } = useSelector((state) => state.leadContainer);

  // Fetch lead data on mount

  // const singleLead = soldLeads.find((lead) => lead._id === leadId);
  const singleLead = useMemo(() => {
    return soldLeads.find((lead) => lead._id === leadId);
  }, [soldLeads, leadId]);
  console.log('tewt www', singleLead)

  // Render status
  const renderStatus = (status) => {
    return (
      <span className="flex items-center gap-1 text-green-600 font-medium">
        <FaCheckCircle />
        Sold
      </span>
    );
  };

  // Format dates
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <section className="m-2.5 sm:m-5 space-y-5">
      {/* Back Button */}
      <div>
        <button
          onClick={() => navigate("/admin/sold/leads")}
          className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium cursor-pointer"
        >
          <FaArrowLeft />
          Back to Sold Leads
        </button>
      </div>

      {/* Loading and Error States */}
      {leadLoading && <div className="text-gray-700">Loading...</div>}
      {error && <div className="text-red-600">Error: {error}</div>}
      {!leadLoading && !error && !singleLead && (
        <div className="text-gray-700">No lead found</div>
      )}

      {/* Lead Details */}
      {singleLead && !leadLoading && !error && (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">
            Sold Lead Details
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-900">Name:</span>
              <span className="text-gray-700">
                {singleLead.firstName} {singleLead.lastName}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-900">Email:</span>
              <span className="flex items-center gap-1 text-gray-700">
                <HiOutlineMail className="text-blue-500" />
                {singleLead.email}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-900">Phone:</span>
              <span className="text-gray-700">{singleLead.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-900">Country:</span>
              <span className="text-gray-700">{singleLead.country}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-900">State:</span>
              <span className="text-gray-700">{singleLead.state || "N/A"}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-900">Destination:</span>
              <span className="text-gray-700">{singleLead.destination}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-900">Price:</span>
              <span className="text-gray-700">${singleLead.price.toFixed(2)}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-900">Status:</span>
              {renderStatus(singleLead.status)}
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-900">Created At:</span>
              <span className="text-gray-700">{formatDate(singleLead.createdAt)}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-900">Updated At:</span>
              <span className="text-gray-700">{formatDate(singleLead.updatedAt)}</span>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-lg font-semibold text-orange-600 mb-2">Agent Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">Agent Name:</span>
                  <span className="text-gray-700">
                    {singleLead.agentId?.firstName || "N/A"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">Company:</span>
                  <span className="text-gray-700">
                    {singleLead.agentId?.companyName || "N/A"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">Agent Email:</span>
                  <span className="flex items-center gap-1 text-gray-700">
                    <HiOutlineMail className="text-blue-500" />
                    {singleLead.agentId?.email || "N/A"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">Agent Phone:</span>
                  <span className="text-gray-700">{singleLead.agentId?.phone || "N/A"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">Agent Country:</span>
                  <span className="text-gray-700">{singleLead.agentId?.country || "N/A"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdminSoldLeadProfile;