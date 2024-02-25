import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const daysInMonth = () => {
    const daysArray = [];
    const firstDay = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    );
    const lastDay = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    );
    ///console.log(lastDay);
    for (let i = 0; i < firstDay.getDay(); i++) {
      daysArray.push(null);
    }
    for (let i = 1; i <= lastDay.getDay(); i++) {
      daysArray.push(
        new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i)
      );
    }
    return daysArray;
  };
  daysInMonth();
  const handleChangeMonth = (e) => {
    const newMonth = parseInt(e.target.value, 10);
    setSelectedDate(new Date(selectedDate.getFullYear(), newMonth, 1));
  };

  return (
    <>
      <div className="calender">
        <div className="header">
          <button>
            <FaChevronLeft />
          </button>
          <select value={selectedDate.getMonth()} onChange={handleChangeMonth}>
            {months.map((month, i) => (
              <option key={i} value={i}>
                {month}
              </option>
            ))}
          </select>
          <select value={selectedDate.getFullYear()}>
            {Array.from(
              { length: 10 },
              (_, i) => selectedDate.getFullYear() - 5 + i
            ).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <button>
            <FaChevronRight />
          </button>
        </div>
        <div className="daysOfWeek">
          {daysOfWeek.map((day) => (
            <div key={day}> {day} </div>
          ))}
        </div>
        <div className="days">
          {daysInMonth().map((day, i) => (
            <div key={i} className={day ? "day" : "empty"}>
              {day && day.getDate()}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calender;
