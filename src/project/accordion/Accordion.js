import React, { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId);
  };
  console.log(selected);

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item">
              <div
                onClick={() => handleSingleSelection(item?.id)}
                className="title"
                key={item?.id}
              >
                <h3> {item.question}</h3>
                <span>+</span>
              </div>
              {selected === data?.id ? <div> {data?.answer}sds </div> : null}
            </div>
          ))
        ) : (
          <p> No data found 1</p>
        )}
      </div>
    </div>
  );
};

export default Accordion;
