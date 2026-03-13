import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaCheckCircle,
    FaClock,
    FaEye,
    FaEdit,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { GetAllLeadApi, UpdateLeadPriceApi } from "../../redux/actions/leadAction";

const AgenWalletTable = ({ wallet }) => {
    // const { agentPayments, agentLeadPagination, paymentLoading } = useSelector((state) => state.paymentContainer);

    const [editLeadId, setEditLeadId] = useState(null);
    const [editedPrice, setEditedPrice] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;


    const navigate = useNavigate();
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(GetAllLeadApi(currentPage, itemsPerPage,));
    // }, [dispatch, currentPage]);

    // useEffect(() => {
    //     setCurrentPage(1);
    // }, [inputValue, selectedCountry]);


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
                            <th className="px-4 py-3">Date</th>
                            <th className="px-4 py-3">price</th>
                            <th className="px-4 py-3">payment For</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                        {wallet?.map((lead) => (
                            <React.Fragment key={lead._id}>
                                <tr className="hover:bg-orange-50 transition">
                                    <td className="px-4 py-3 text-gray-700">{lead?.createdAt.split("T")[0]}</td>
                                    <td className="px-4 py-3 text-gray-700">₹{lead?.price}</td>
                                    <td className="px-4 py-3 text-gray-700">{lead?.paymentFor}</td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default AgenWalletTable;
