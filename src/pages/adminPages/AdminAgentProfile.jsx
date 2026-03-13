import React, { useEffect, useState } from "react";
import {
    HiOutlineMail,
    HiOutlineDocumentText,
} from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import {
    FaCheckCircle,
    FaRegTimesCircle,
    FaBuilding,
    FaGlobeAsia,
    FaIdCard,
    FaUserCircle,
    FaTrash,
} from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa6";
import AdminAgentDocCard from "../../components/adminPageComponents/AdminAgentDocCard";
import { useDispatch, useSelector } from "react-redux";
import { DeleteSingleAgentApi, GetSingleAgentApi, VerifyAgentApi } from "../../redux/actions/agentAction";
import { useNavigate, useParams } from "react-router-dom";

const AdminAgentProfile = () => {
    const { singleAgent, agentLoading } = useSelector((state) => state.agentContainer);
    const [showImg, setShowImg] = useState(false);
    const [showImgData, setShowImgData] = useState("");

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleApprove = async () => {
        await dispatch(VerifyAgentApi(id, "done"));
        // alert("Agent Approved");
    };

    const handleReject = async () => {
        await dispatch(VerifyAgentApi(id, "reject"));
        // alert("Agent Rejected");
    };

    const handleDelete = async () => {
        await dispatch(DeleteSingleAgentApi(id));
        // navigate("/admin/agents");
    };

    useEffect(() => {
        dispatch(GetSingleAgentApi(id));
    }, [id, dispatch]);

    return (
        <div className="p-6 sm:p-8 max-w-5xl mx-auto my-8 bg-white rounded-2xl shadow-xl border border-gray-100">
            {agentLoading ? (
                <div className="flex justify-center items-center py-10">
                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-orange-600"></div>
                </div>
            ) : (
                <>
                    <button
                        onClick={() => navigate("/admin/agents")}
                        className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-sm mb-6 transition"
                    >
                        <FaArrowLeft /> Back to Agents
                    </button>

                    {/* Header Section */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-gray-200 pb-6">
                        <div className="flex items-center gap-4">
                            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden ring-2 ring-orange-200">
                                {singleAgent?.agentProfile?.url ? (
                                    <img
                                        src={singleAgent?.agentProfile?.url}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <FaUserCircle className="text-orange-400 text-5xl" />
                                )}
                            </div>
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 tracking-tight">
                                    {singleAgent?.firstName} {singleAgent?.lastName}
                                </h2>
                                <div className="flex items-center gap-2 text-orange-600 text-sm mt-1">
                                    <RiMoneyRupeeCircleFill className="text-lg" />
                                    <span>Wallet: ₹{singleAgent?.wallet || 0}</span>
                                </div>
                                <span className="text-sm text-gray-500">
                                    Joined: {new Date(singleAgent?.createdAt).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            {singleAgent?.status === "done" ? (
                                <span className="flex items-center gap-2 text-green-600 font-semibold text-sm">
                                    <FaCheckCircle className="text-lg" /> Verified
                                </span>
                            ) : singleAgent?.status === "reject" ? (
                                <span className="flex items-center gap-2 text-red-600 font-semibold text-sm">
                                    <FaRegTimesCircle className="text-lg" /> Rejected
                                </span>
                            ) : (
                                <span className="flex items-center gap-2 text-yellow-600 font-semibold text-sm">
                                    <FaRegTimesCircle className="text-lg" /> Pending
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Contact and Company Info */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-8">
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                                <FaUserCircle className="text-orange-500" /> Contact Information
                            </h3>
                            <div className="space-y-3 text-gray-600 text-sm">
                                <div className="flex items-center gap-3">
                                    <HiOutlineMail className="text-orange-500 text-lg" />
                                    <span>{singleAgent?.email}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FiPhone className="text-orange-500 text-lg" />
                                    <span>{singleAgent?.phone}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <RiMoneyRupeeCircleFill className="text-orange-500 text-lg" />
                                    <span>Wallet: ₹{singleAgent?.wallet || 0}</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                                <FaBuilding className="text-orange-500" /> Company Details
                            </h3>
                            <div className="space-y-3 text-gray-600 text-sm">
                                <div className="flex items-center gap-3">
                                    <FaBuilding className="text-orange-500 text-lg" />
                                    <span>{singleAgent?.companyName}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaGlobeAsia className="text-orange-500 text-lg" />
                                    <span>{singleAgent?.country}</span>
                                </div>
                                {singleAgent?.gstNumber && (
                                    <div className="flex items-center gap-3">
                                        <FaIdCard className="text-orange-500 text-lg" />
                                        <span>GST: {singleAgent?.gstNumber}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Documents Section */}
                    <div className="border-t border-gray-200 pt-8">
                        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-6">
                            <HiOutlineDocumentText className="text-orange-500" /> Uploaded Documents
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <AdminAgentDocCard title="PAN Card" docImg={singleAgent?.panCard?.url} />
                            <AdminAgentDocCard title="Aadhar Card" docImg={singleAgent?.aadharCard?.url} />
                            <AdminAgentDocCard title="VET Certificate" docImg={singleAgent?.vetCertificate?.url} />
                            <AdminAgentDocCard title="Company Certificate" docImg={singleAgent?.companyCertificate?.url} />
                            <AdminAgentDocCard title="GST Certificate" docImg={singleAgent?.gstCertificate?.url} />
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200">
                        <button
                            onClick={handleApprove}
                            className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2 text-sm font-semibold"
                        >
                            <FaCheckCircle className="text-green-200" /> Approve Agent
                        </button>
                        <button
                            onClick={handleReject}
                            className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition flex items-center justify-center gap-2 text-sm font-semibold"
                        >
                            <FaRegTimesCircle className="text-red-200" /> Reject Agent
                        </button>
                        <button
                            onClick={handleDelete}
                            className="flex-1 bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition flex items-center justify-center gap-2 text-sm font-semibold"
                        >
                            <FaTrash className="text-orange-200" /> Delete Agent
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default AdminAgentProfile;