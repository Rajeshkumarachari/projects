import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
const Calender = () => {
  return (
    <>
      <div className="calender">
        <div className="header">
          <button>
            <FaChevronLeft />
          </button>
          <select></select>
          <select></select>
          <button>
            <FaAngleRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Calender;
