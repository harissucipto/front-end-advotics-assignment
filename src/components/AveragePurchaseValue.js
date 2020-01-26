import React from "react";

import "./averagePurchaseValue.css";
import ButtonMore from "./ButtonMore";

const AveragePurchaseValue = () => {
  return (
    <div className="average-purchase-container">
      <div className="container-1-center-header">
        <p className="container-1-header-title">AVERAGE PURCHASE VALUE</p>
        <div style={{ display: "flex" }}>
          <button className="btn-average">
            <p>Last 6 months</p>
          </button>
          <ButtonMore />
        </div>
      </div>
      <div>Diagram Disini</div>
    </div>
  );
};

export default AveragePurchaseValue;
