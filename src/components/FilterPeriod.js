import React from "react";
import { Calendar } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./filterPeriod.css";
import IconCalender from "../images/calendar (1).png";

const FilterPeriod = ({ handleClose }) => {
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection"
  };

  return (
    <div className="conatainer-filter-period">
      <div
        style={{
          display: "flex",
          marginBottom: "2rem",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={IconCalender}
            width={22}
            height={24}
            alt="callender"
            style={{ marginRight: "1.6rem" }}
          />
          <p style={{ fontSize: "2.3rem", color: "#8b8b8b" }}>Period</p>
        </div>
        <div>
          <button className="btn-close" onClick={handleClose}>
            &times;
          </button>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "21rem",
            paddingRight: "2.4rem",
            borderRight: "1px solid grey"
          }}
        >
          <button className="button-filter-range selected-filter">Today</button>
          <button className="button-filter-range">Yesterday</button>
          <button className="button-filter-range">Last 7 days</button>
          <button className="button-filter-range">Last 30 days</button>
          <button className="button-filter-range">This Month</button>
          <button className="button-filter-range-2">Custom</button>
          <button className="button-apply">Apply</button>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "space-between",
            padding: "1.3rem",
            paddingTop: "1rem"
          }}
        >
          <div style={{ marginRight: "2rem" }}>
            <Calendar
              date={new Date()}
              range={[selectionRange]}
              color="green"
            />
          </div>
          <div>
            <Calendar date={new Date()} color="green" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPeriod;
