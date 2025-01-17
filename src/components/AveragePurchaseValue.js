import React from "react";

import DownArrow from "../images/arrow-down.png";
import "./averagePurchaseValue.css";
import ButtonMore from "./ButtonMore";
import Diagram from "./Diagram";

const AveragePurchaseValue = () => {
  return (
    <div className="average-purchase-container">
      <div className="container-1-center-header">
        <p className="container-1-header-title">AVERAGE PURCHASE VALUE</p>
        <div style={{ display: "flex" }}>
          <button className="btn-average">
            <p style={{ marginRight: "5px" }}>Last 6 months</p>
            <img src={DownArrow} width={8} height={6} alt="arrow-down" />
          </button>
          <ButtonMore />
        </div>
      </div>
      <div style={{ marginTop: "2.7rem" }}>
        <Diagram />
      </div>
    </div>
  );
};

export default AveragePurchaseValue;
