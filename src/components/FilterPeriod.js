import React from "react";

import "./filterPeriod.css";
import IconCalender from "../images/calendar (1).png";

const FilterPeriod = props => {
  return (
    <div className="conatainer-filter-period">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={IconCalender}
          width={22}
          height={24}
          alt="callender"
          style={{ marginRight: "1.6rem" }}
        />
        <p style={{ fontSize: "2.3rem" }}>Period</p>
      </div>
    </div>
  );
};

export default FilterPeriod;
