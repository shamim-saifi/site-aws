import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaClock,
  FaEye,
  FaEdit,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { GetAllLeadApi, UpdateLeadPriceApi } from "../../redux/actions/leadAction";

const AdminLeadTable = ({ leads }) => {
  const [editLeadId, setEditLeadId] = useState(null);
  const [editedPrice, setEditedPrice] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const renderStatus = (status) => {
  //   return status ? (
  //     <span className="flex items-center gap-1 text-green-600 font-medium">
  //       <FaCheckCircle />
  //       Sold
  //     </span>
  //   ) : (
  //     <span className="flex items-center gap-1 text-yellow-500 font-medium">
  //       <FaClock />
  //       Unsold
  //     </span>
  //   );
  // };

  const renderStatus = (status) => {
    return status ? (
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-sm">
        <FaCheckCircle className="text-lg" /> Sold
      </span>
    ) : (
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 font-semibold text-sm">
        <FaClock className="text-lg" /> Unsold
      </span>
    );
  };

  const handleSavePrice = async (leadId) => {
    console.log("Saving new price:", editedPrice, "for lead:", leadId);
    // TODO: dispatch update API call
    await dispatch(UpdateLeadPriceApi(leadId, editedPrice))
    await dispatch(GetAllLeadApi())
    setEditLeadId(null);
    setEditedPrice("");
  };

  return (
    <>
      <style>{`
        .table-container {
          overflow-x: auto;
          margin-left: auto;
          margin-right: auto;
          max-width: 345px;
          border: 1px solid #e5e7eb;
          border-radius: 0.375rem;
        }
        @media (min-width: 340px) {
          .table-container {
            max-width: 80vw;
          }
        }
        @media (min-width: 520px) {
          .table-container {
            max-width: 500px;
          }
        }
        @media (min-width: 640px) {
          .table-container {
            max-width: 710px;
          }
        }
        @media (min-width: 768px) {
          .table-container {
            max-width: 700px;
          }
        }
        @media (min-width: 1024px) {
          .table-container {
            min-width: 100%;
          }
        }
      `}</style>

      <div className="table-container">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-200 text-left text-gray-700 uppercase text-xs font-semibold">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Country</th>
              <th className="px-4 py-3">Destination</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {leads?.map((lead) => (
              <React.Fragment key={lead._id}>
                <tr className="hover:bg-orange-50 transition">
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {lead.firstName} {lead.lastName}
                  </td>
                  <td className="px-4 py-3 flex items-center gap-1 text-gray-700">
                    <HiOutlineMail className="text-orange-500" />
                    {lead.email}
                  </td>
                  <td className="px-4 py-3 text-gray-700">{lead.phone}</td>
                  <td className="px-4 py-3 text-gray-700">{lead.country}</td>
                  <td className="px-4 py-3 text-gray-700">{lead.destination}</td>
                  <td className="px-4 py-3">{renderStatus(lead.sold)}</td>
                  <td className="px-4 py-3 text-gray-700">₹{lead.price}</td>
                  <td className="px-4 py-3 flex gap-3 justify-center text-lg">
                    <FaEye
                      onClick={() =>
                        navigate(
                          lead.sold
                            ? `/admin/sold/leads/${lead._id}`
                            : `/admin/leads/${lead._id}`
                        )
                      }
                      className="text-orange-600 hover:text-gray-800 cursor-pointer"
                      title="View Lead"
                    />
                    {!lead.sold && (
                      <FaEdit
                        onClick={() => {
                          setEditLeadId(lead._id);
                          setEditedPrice(lead.price);
                        }}
                        className="text-orange-600 hover:text-gray-800 cursor-pointer"
                        title="Edit Price"
                      />
                    )}
                  </td>
                </tr>

                {/* Inline Edit Row */}
                {editLeadId === lead._id && (
                  <tr className="bg-orange-50">
                    <td colSpan={8} className="px-4 py-3">
                      <div className="flex items-center gap-4">
                        <input
                          type="number"
                          value={editedPrice}
                          onChange={(e) => setEditedPrice(e.target.value)}
                          className="border border-orange-300 px-3 py-1 rounded focus:outline-orange-500 text-sm"
                          placeholder="Enter new price"
                        />
                        <button
                          onClick={() => handleSavePrice(lead._id)}
                          className="bg-orange-600 text-white text-sm px-4 py-1 rounded hover:bg-orange-700 cursor-pointer"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => {
                            setEditLeadId(null);
                            setEditedPrice("");
                          }}
                          className="text-gray-500 hover:text-red-500 text-sm cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminLeadTable;
