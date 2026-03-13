import React from "react";
import { FiCalendar, FiEdit2, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { DeleteNewsApi, GetAllNewsApi } from "../../redux/actions/newsAction";

const AdminBlogCard = ({ id, title, description, url, date }) => {
  const navigate = useNavigate();

  const deleteHandler = async () => {
    await dispatch(DeleteNewsApi(id))
    await dispatch(GetAllNewsApi()); // Fetch updated blog list

  }

  return (
    <div key={id} className="w-[250px] rounded-2xl shadow-md hover:shadow-lg transition duration-300 bg-white overflow-hidden flex flex-col">
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={url}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex-1 p-4 space-y-2 flex flex-col justify-between">
        {/* Title */}
        <h5 className="text-lg font-semibold text-gray-900 line-clamp-2">
          {title}
        </h5>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-3">
          {description}
        </p>

        {/* Date */}
        <div className="flex items-center gap-2 text-xs text-gray-500 pt-2 border-t border-gray-100">
          <FiCalendar className="text-orange-500" />
          <span>
            Submitted on:{" "}
            <span className="font-medium text-gray-700">{date}</span>
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between pt-3">
          <button onClick={() => navigate(`/admin/news/edit/${id}`)} className="flex items-center gap-1 text-sm text-gray-600 hover:text-orange-600 transition cursor-pointer">
            <FiEdit2 className="w-4 h-4" />
            Edit
          </button>
          <button onClick={() => deleteHandler()} className="flex items-center gap-1 text-sm text-red-500 hover:text-red-700 transition cursor-pointer">
            <FiTrash2 className="w-4 h-4" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminBlogCard;
