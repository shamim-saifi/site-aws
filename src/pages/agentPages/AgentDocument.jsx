import React, { useState } from "react";
import { useEffect } from "react";
import { FiEdit, FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GetAgentProfileApi } from "../../redux/actions/agentAction";

const AgentDocument = () => {
  const { agentProfile } = useSelector((state) => state.agentContainer);
  const [previewImg, setPreviewImg] = useState(null);

  const dispatch = useDispatch();

  const documents = [
    {
      key: "panCard",
      label: "PAN Card",
      src: agentProfile?.panCard?.url,
    },
    {
      key: "aadharCard",
      label: "Aadhar Card",
      src: agentProfile?.aadharCard?.url,
    },
    {
      key: "gstCertificate",
      label: "GST Certificate",
      src: agentProfile?.gstCertificate?.url,
    },
    {
      key: "vetCertificate",
      label: "VET Certificate",
      src: agentProfile?.vetCertificate?.url,
    },
    {
      key: "companyCertificate",
      label: "Company Certificate",
      src: agentProfile?.companyCertificate?.url,
    },
  ];

  useEffect(() => {
    dispatch(GetAgentProfileApi());
  }, [])

  return (
    <section className="m-5 space-y-8">
      <h2 className="text-3xl font-bold text-orange-600">Your Documents</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documents.map((doc) => (
          <div key={doc.key} className="flex flex-col space-y-2 relative">
            <h4 className="font-semibold text-gray-700">{doc.label}</h4>
            <div className="h-[200px] border border-dashed border-gray-400 rounded-lg overflow-hidden flex items-center justify-center bg-white relative">
              {doc.src ? (
                <img
                  src={doc.src}
                  alt={doc.label}
                  onClick={() => setPreviewImg(doc.src)}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200 cursor-pointer"
                />
              ) : (
                <span className="text-gray-400">No {doc.label} uploaded</span>
              )}

              {/* Edit Button */}
              <div className="absolute top-2 right-2 z-10">
                <Link
                  to="edit"
                  state={doc.key}
                  className="flex items-center gap-2 bg-orange-600 text-white font-semibold p-2 rounded-lg hover:bg-orange-700 transition duration-200"
                >
                  <FiEdit className="text-xl" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full View Modal */}
      {previewImg && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setPreviewImg(null)}
        >
          <div onClick={(e) => e.stopPropagation()} className="relative">
            <button
              className="absolute top-2 right-2 text-white bg-black/50 p-2 rounded-full hover:bg-black"
              onClick={() => setPreviewImg(null)}
            >
              <FiX size={24} />
            </button>
            <img
              src={previewImg}
              alt="Full View"
              className="max-w-full max-h-[90vh] rounded-lg shadow-lg transition-transform duration-300 scale-100 hover:scale-105"
            />
          </div>
        </div>
      )}
      
    </section>
  );
};

export default AgentDocument;
