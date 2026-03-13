import React from 'react';
import { useState } from 'react';
import { FaFileUpload } from 'react-icons/fa';

const AdminAgentDocCard = ({ title, docImg }) => {
  const [showImg, setShowImg] = useState(false);

  return (
    <>
      {showImg ? (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full h-[80vh]">
            <img
              src={docImg}
              alt={title}
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setShowImg(false)}
              className="cursor-pointer absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition">
          <div className="flex items-center gap-2 text-gray-700">
            <FaFileUpload className="text-red-500 text-lg" />
            <span className="text-sm font-medium">{title}</span>
          </div>
          {docImg ? (
            <span
              onClick={() => setShowImg(true)}
              className="text-orange-500 text-sm font-medium hover:text-orange-600 flex items-center gap-1 cursor-pointer"
            >
              View ↗
            </span>
          ) : (
            <span className="text-red-500 text-sm font-medium">Missing</span>
          )}
        </div>
      )}
    </>
  );
};

export default AdminAgentDocCard;