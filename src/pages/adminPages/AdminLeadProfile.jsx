import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetSingleLeadApi } from "../../redux/actions/leadAction";
import { FaCheckCircle, FaClock, FaArrowLeft, FaGlobeAsia, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMail, } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

const AdminLeadProfile = () => {
  const { leadId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { singleLead, loading, error } = useSelector((state) => state.leadContainer);

  useEffect(() => {
    dispatch(GetSingleLeadApi(leadId));
  }, [dispatch, leadId]);

  const renderStatus = (status) => {
    return status ? (
      <span className="flex items-center gap-2 text-green-600 font-semibold text-sm">
        <FaCheckCircle className="text-lg" /> Sold
      </span>
    ) : (
      <span className="flex items-center gap-2 text-yellow-600 font-semibold text-sm">
        <FaClock className="text-lg" /> Unsold
      </span>
    );
  };

  return (
    <section className="p-6 sm:p-8 max-w-5xl mx-auto bg-gray-50 min-h-screen">
      <button
        onClick={() => navigate("/admin/leads")}
        className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-sm mb-6 transition cursor-pointer"
      >
        <FaArrowLeft /> Back to Leads
      </button>

      {loading && (
        <div className="flex justify-center items-center py-10">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-orange-600"></div>
        </div>
      )}
      {error && <div className="text-red-600 text-center mb-6">Error: {error}</div>}
      {!loading && !error && !singleLead && (
        <div className="text-gray-600 text-center mb-6">No lead found</div>
      )}

      {singleLead && !loading && !error && (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-6 sm:p-8">
          <h2 className="text-3xl font-extrabold text-orange-600 tracking-tight mb-6">
            Lead Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-600 text-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-gray-800">Name:</span>
                <span>{`${singleLead.firstName} ${singleLead.lastName}`}</span>
              </div>
              <div className="flex items-center gap-3">
                <HiOutlineMail className="text-orange-500 text-lg" />
                <span>{singleLead.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="text-orange-500 text-lg" />
                <span>{singleLead.phone}</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaGlobeAsia className="text-orange-500 text-lg" />
                <span>{singleLead.country}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-orange-500 text-lg" />
                <span>{singleLead.destination}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-gray-800">Status:</span>
                {renderStatus(singleLead.sold)}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdminLeadProfile;