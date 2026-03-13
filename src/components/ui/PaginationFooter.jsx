import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function PaginationFooter({
  handlePrevious = () => {},
  handleCurrentPage = () => {},
  handleNext = () => {},
  currentPage = 1,
  totalPages = 0,
}) {
  return (
    <div className="flex items-center justify-end gap-3.5 xs:gap-5">
      <button
        type="button"
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="inline-block bg-primaryBlue/50 disabled:pointer-events-none p-0.1 rounded text-white hover:bg-primaryBlue transition-all duration-500"
      >
        <MdKeyboardArrowLeft size={35} />
      </button>
      <div className="xss:flex gap-2 items-center hidden">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleCurrentPage(index + 1)}
            className={`flex items-center font-semibold ${
              currentPage === index + 1
                ? "bg-secondryBlue"
                : "bg-secondryBlue/50"
            } px-3 h-[35px] rounded H6 text-white hover:bg-secondryBlue transition-all duration-500`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="block xss:hidden">
        <p className="H6 text-textLight font-semibold">
          {currentPage} / {totalPages}
        </p>
      </div>
      <button
        onClick={handleNext}
        type="button"
        disabled={currentPage === totalPages}
        className="inline-block bg-primaryBlue/50 disabled:pointer-events-none p-0.1 rounded text-white hover:bg-primaryBlue transition-all duration-500"
      >
        <MdKeyboardArrowRight size={35} />
      </button>
    </div>
  );
}

export default PaginationFooter;
