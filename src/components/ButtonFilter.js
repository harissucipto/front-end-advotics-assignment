import React, { useState } from "react";
import useDimension from "react-use-dimensions";
import { format } from "date-fns";

import IconCalender from "../images/calendar (1).png";
import DownArrow from "../images/arrow-down.png";
import UpArrow from "../images/arrow-up.png";
import FilterPeriod from "./FilterPeriod";
import { useStoreState } from "easy-peasy";

const ButtonFilter = () => {
  const [refButton, { height: heightButton }] = useDimension();
  const [showPeriod, setShowPeriod] = useState(false);

  const data = useStoreState(state => state.app);
  const from = format(data.dateFrom, "d MMMM yyyy");
  const to = format(data.dateTo, "d MMMM yyyy");

  const handleClose = () => {
    setShowPeriod(false);
  };

  const handleToggle = () => {
    setShowPeriod(!showPeriod);
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        className="button-filter"
        ref={refButton}
        style={{ cursor: "pointer" }}
        onClick={handleToggle}
      >
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

        <img
          src={showPeriod ? UpArrow : DownArrow}
          width={16}
          height={10}
          alt="arrow-down"
        />
      </div>
      {showPeriod && (
        <FilterPeriod width={heightButton} handleClose={handleClose} />
      )}
    </div>
  );
};

export default ButtonFilter;
