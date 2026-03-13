import React, { useState, useCallback } from "react";
import { FiUpload } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { AgentUpateDocumentApi } from "../../redux/actions/agentAction";
import { FaArrowLeft } from "react-icons/fa";

const DocumentUploader = ({ label, name, value, onChange }) => (
  <div className="flex flex-col space-y-2">
    <h4 className="font-semibold text-gray-700">{label}</h4>
    <label
      htmlFor={name}
      className={`h-[200px] border border-dashed border-gray-400 rounded-lg flex items-center justify-center cursor-pointer ${value ? "p-0 overflow-hidden" : "p-4"}`}
    >
      {value ? (
        <img src={value} alt={label} className="w-full h-full object-cover" />
      ) : (
        <span className="text-gray-500 flex items-center gap-2">
          <FiUpload size={24} /> Upload {label}
        </span>
      )}
    </label>
    <input
      id={name}
      type="file"
      hidden
      onChange={(e) => onChange(e, name)}
    />
  </div>
);

const AgentDocumentEdit = () => {
  const { agentProfile, uploadLoading } = useSelector((state) => state.agentContainer);

  const location = useLocation();
  const key = location.state;
  // console.log('key', key)

  const [docs, setDocs] = useState({
    panCard: null,
    aadharCard: null,
    vetCertificate: null,
    companyCertificate: null,
    gstCertificate: null,
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDocChange = useCallback((e, name) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setDocs((prev) => ({
          ...prev,
          [name]: reader.result,
        }));
      }
    };
  }, []);

  const uploadDocHander = async () => {
    const { panCard, aadharCard, vetCertificate, companyCertificate, gstCertificate } = docs
    await dispatch(AgentUpateDocumentApi(panCard, aadharCard, vetCertificate, companyCertificate, gstCertificate))
    navigate('/agent/document')
  }

  const showCard = (label) => {
    switch (label) {
      case "panCard":
        return (
          <DocumentUploader
            label="PAN Card"
            name="panCard"
            value={docs.panCard}
            onChange={handleDocChange}
          />
        );
      case "aadharCard":
        return (
          <DocumentUploader
            label="Aadhar Card"
            name="aadharCard"
            value={docs.aadharCard}
            onChange={handleDocChange}
          />
        );
      case "gstCertificate":
        return (
          <DocumentUploader
            label="GST Certificate"
            name="gstCertificate"
            value={docs.gstCertificate}
            onChange={handleDocChange}
          />
        );
      case "vetCertificate":
        return (
          <DocumentUploader
            label="VET Certificate"
            name="vetCertificate"
            value={docs.vetCertificate}
            onChange={handleDocChange}
          />
        );
      case "companyCertificate":
        return (
          <DocumentUploader
            label="Company Certificate"
            name="companyCertificate"
            value={docs.companyCertificate}
            onChange={handleDocChange}
          />
        );
      default:
        return <p className="text-red-500">Invalid document type</p>;
    }
  };


  return (
    <section className="m-5 space-y-8">
      <button
        onClick={() => navigate("/agent/document")}
        className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium text-sm mb-6 transition cursor-pointer"
      >
        <FaArrowLeft className="text-base" />
        Back
      </button>
      <h2 className="text-3xl font-bold text-orange-600">Edit Documents</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {showCard(key)}
      </div>

      <div className="flex justify-end gap-4 mt-4">
        <button
          className="px-6 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer"
          onClick={() => window.history.back()}
        >
          Cancel
        </button>
        {
          uploadLoading ? (
            <button disabled={uploadLoading} className="px-6 py-2 rounded-lg bg-orange-300 text-white ">
              ...Loading
            </button>
          ) : (

            <button onClick={() => uploadDocHander()} className="px-6 py-2 rounded-lg bg-orange-600 text-white hover:bg-orange-700 cursor-pointer">
              Update Documents
            </button>
          )
        }
      </div>
    </section>
  );
};

export default AgentDocumentEdit;
