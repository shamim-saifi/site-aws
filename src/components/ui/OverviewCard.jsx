import React from "react";
import { Link } from "react-router-dom";

function OverviewCard({
  bgColor,
  iconBgColor,
  IconComponent,
  title,
  path,
  value,
}) {
  return (
    <Link
      to={path}
      className={`${bgColor} p-5 rounded-lg min-h-[150px] xs:min-h-[200px] flex items-center justify-center hover:opacity-90 transition-opacity`}
    >
      <div className="flex items-center flex-col 2xl:flex-row gap-3">
        <span
          className={`inline-block ${iconBgColor} rounded-full p-2.5 text-white`}
        >
          <IconComponent size={30} className="text-[#000]" />
        </span>
        <div className="text-center 2xl:text-start">
          {/* {value && (
            <h4 className="H4 font-bold text-white capitalize">{value}</h4>
          )} */}
          {value != null && (
            <h4 className="H4 font-bold text-white capitalize">{value}</h4>
          )}

          <p className="H5 font-medium text-white capitalize">{title}</p>
        </div>
      </div>
    </Link>
  );
}

export default OverviewCard;
