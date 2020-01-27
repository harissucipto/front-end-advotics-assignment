import React, { useState } from "react";
import { Calendar } from "react-date-range";
import { isToday, isFuture, isAfter, subDays, startOfMonth } from "date-fns";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./filterPeriod.css";
import IconCalender from "../images/calendar (1).png";

const EVENT = ["handleYesterday", "last7days", "last30days", "thisMonth"];

const FilterPeriod = ({ handleClose }) => {
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [activeSelected, setActiveSelected] = useState("");

  const selectionRange = {
    startDate: dateFrom,
    endDate: dateTo,
    key: "selection"
  };

  const handleSelectDate = setState => date => {
    if (isToday(date) || isFuture(date)) return null;
    setState(date);
    setActiveSelected("");
  };

  const handleSetDateFrom = date => {
    if (dateTo !== null && isAfter(date, dateTo)) return null;
    handleSelectDate(setDateFrom)(date);
  };
  const handleSetDataTo = handleSelectDate(setDateTo);

  const handleYesterday = () => {
    const dateYesterday = subDays(new Date(), 1);
    setDateTo(dateYesterday);
    setDateFrom(dateYesterday);
    setActiveSelected(EVENT[0]);
  };

  const handleLast7days = () => {
    const yesterday = subDays(new Date(), 1);
    const last7day = subDays(new Date(), 7);
    setDateFrom(last7day);
    setDateTo(yesterday);
    setActiveSelected(EVENT[1]);
  };

  const handleLast30days = () => {
    const yesterday = subDays(new Date(), 1);
    const last30day = subDays(new Date(), 30);
    setDateFrom(last30day);
    setDateTo(yesterday);
    setActiveSelected(EVENT[2]);
  };

  const handleThisMonth = () => {
    const yesterday = subDays(new Date(), 1);
    const firstDateOfMonth = startOfMonth(yesterday);
    setDateFrom(firstDateOfMonth);
    setDateTo(firstDateOfMonth);
    setActiveSelected(EVENT[3]);
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
          <button className="button-filter-range">Today</button>
          <button
            className={`button-filter-range ${activeSelected === EVENT[0] &&
              "selected-filter"}`}
            onClick={handleYesterday}
          >
            Yesterday
          </button>
          <button
            className={`button-filter-range ${activeSelected === EVENT[1] &&
              "selected-filter"}`}
            onClick={handleLast7days}
          >
            Last 7 days
          </button>
          <button
            className={`button-filter-range ${activeSelected === EVENT[2] &&
              "selected-filter"}`}
            onClick={handleLast30days}
          >
            Last 30 days
          </button>
          <button
            className={`button-filter-range ${activeSelected === EVENT[3] &&
              "selected-filter"}`}
            onClick={handleThisMonth}
          >
            This Month
          </button>
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
              date={dateFrom}
              onChange={handleSetDateFrom}
              color="green"
              ranges={[selectionRange]}
            />
          </div>
          <div>
            <Calendar
              date={dateTo}
              onChange={handleSetDataTo}
              color="green"
              ranges={[selectionRange]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPeriod;
