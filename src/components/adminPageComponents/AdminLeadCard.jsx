import React from "react";
import { FaGlobeAsia } from "react-icons/fa";
import { FiPhone, FiCalendar } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const AdminLeadCard = ({ name, email, phone, country, destination, date }) => {
  return (
    <div className="bg-gray-50 rounded-xl p-5 shadow border border-orange-200 space-y-3">
      <h5 className="text-xl font-semibold text-gray-800">{name}</h5>

      <div className="text-gray-600 space-y-2 text-sm">
        <p className="flex items-center gap-2">
          <HiOutlineMail className="text-orange-500" />
          {email}
        </p>
        <p className="flex items-center gap-2">
          <FiPhone className="text-orange-500" />
          {phone}
        </p>
        <p className="flex items-center gap-2">
          <FaGlobeAsia className="text-orange-500" />
          {country} → {destination}
        </p>
        {date && (
          <p className="flex items-center gap-2 text-xs text-gray-500">
            <FiCalendar className="text-orange-500" />
            Submitted on: {date}
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminLeadCard;
