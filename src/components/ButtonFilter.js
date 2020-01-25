import React from "react";
import IconCalender from "../images/calendar (1).png";
import DownArrow from "../images/arrow-down.png";

const ButtonFilter = () => {
  const from = "11 September 2018";
  const to = "14 September 2018";

  return (
    <div className="button-filter">
      <div className="button-callender">
        <img
          src={IconCalender}
          width={22}
          alt="callender"
          style={{ marginRight: "1.6rem" }}
        />
        <p>Period</p>
      </div>
      <p style={{ marginRight: "1.6rem" }}>
        {from} - {to}
      </p>
      <img src={DownArrow} width={16} height={10} alt="arrow-down" />
    </div>
  );
};

export default ButtonFilter;
