import React from "react";
import useDimension from "react-use-dimensions";

import IconCalender from "../images/calendar (1).png";
import DownArrow from "../images/arrow-down.png";
import FilterPeriod from "./FilterPeriod";

const ButtonFilter = () => {
  const [refButton, { height: heightButton }] = useDimension();
  const from = "11 September 2018";
  const to = "14 September 2018";

  return (
    <div style={{ position: "relative" }}>
      <div className="button-filter" ref={refButton}>
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
      <FilterPeriod width={heightButton} />
    </div>
  );
};

export default ButtonFilter;
