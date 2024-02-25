import React from "react";
import calender from "./calender.css";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Calender = () => {
  return (
    <div className="bodyCalender">
      <div className="calender">
        <div className="header">
          <button className="button">
            <FaChevronLeft className="left" />
          </button>
          <select></select>
          <select></select>
          <button className="button">
            <FaChevronRight className="right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calender;
