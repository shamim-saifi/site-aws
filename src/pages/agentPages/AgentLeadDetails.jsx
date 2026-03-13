import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetSingleLeadApi } from "../../redux/actions/leadAction";
import { AgentSinglePaymentHistoryApi } from "../../redux/actions/paymentAction";
import {
  FaArrowLeft,
  FaGlobeAsia,
  FaMapMarkerAlt,
  FaClock,
  FaRupeeSign,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

const AgentLeadDetails = () => {
  const { leadId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { singlePayment, paymentLoading, paymentError } = useSelector(
    (state) => state.paymentContainer
  );

  useEffect(() => {
    dispatch(AgentSinglePaymentHistoryApi(leadId));
    dispatch(GetSingleLeadApi(leadId));
  }, [dispatch, leadId]);

  return (
    <section className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto bg-gray-50 min-h-screen">
      <button
        onClick={() => navigate("/agent/leads")}
        className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium text-sm mb-6 transition cursor-pointer"
      >
        <FaArrowLeft className="text-base" />
        Back to Leads
      </button>

      {paymentLoading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-orange-500 border-t-transparent" />
        </div>
      )}

      {/* {paymentError && (
        <div className="text-red-600 bg-red-100 p-4 rounded-lg text-center mb-6 text-sm font-medium">
          Error: {paymentError}
        </div>
      )} */}

      {!paymentLoading && !singlePayment && (
        <div className="text-center py-10 bg-white rounded-xl shadow">
          <p className="text-lg font-medium text-gray-500">No lead found</p>
        </div>
      )}

      {singlePayment && !paymentLoading && (
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 space-y-6 transition-shadow hover:shadow-lg">
          <div className="flex items-center justify-between border-b pb-4">
            <h2 className="text-2xl font-bold text-gray-800">Lead Details</h2>
            {/* <p className="text-sm text-gray-500">
              ID:{" "}
              <span className="text-orange-600 font-medium">{leadId}</span>
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div className="space-y-4">
              <InfoRow label="Name">
                {singlePayment.leadId?.firstName}{" "}
                {singlePayment.leadId?.lastName}
              </InfoRow>
              <IconRow Icon={HiOutlineMail} value={singlePayment.leadId?.email} />
              <IconRow Icon={FiPhone} value={singlePayment.leadId?.phone} />
              <IconRow
                Icon={FaClock}
                value={ singlePayment?.createdAt.split("T")[0]}
              />
            </div>

            <div className="space-y-4">
              <IconRow
                Icon={FaGlobeAsia}
                label="Country"
                value={singlePayment.leadId?.country}
              />
              <IconRow
                Icon={FaMapMarkerAlt}
                label="Destination"
                value={singlePayment.leadId?.destination}
              />
              <IconRow
                Icon={FaRupeeSign}
                label="Price"
                value={`${singlePayment?.price || "0"}`}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const InfoRow = ({ label, children }) => (
  <div className="flex gap-2">
    <span className="font-medium text-gray-600">{label}:</span>
    <span className="text-gray-800">{children}</span>
  </div>
);

const IconRow = ({ Icon, label, value }) => (
  <div className="flex items-center gap-3">
    <Icon className="text-orange-500 text-lg" />
    <div>
      {label && <p className="text-xs text-gray-500">{label}</p>}
      <p className="text-sm text-gray-800">{value || "N/A"}</p>
    </div>
  </div>
);

export default AgentLeadDetails;
