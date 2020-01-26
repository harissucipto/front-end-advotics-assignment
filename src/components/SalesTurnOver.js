import React from "react";

import "./salesTurnOver.css";
import IconMore from "../images/Icon - More - Filled.svg";
import SalesTurnOverIcon from "../images/sales-turnover.svg";
import ArrowDown from "../images/DownArrow.svg";

const SalesTurnOver = () => {
  return (
    <div className="sales-turn-over">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1.3rem"
        }}
      >
        <p style={{ fontSize: "1.3rem", color: "#727272", fontWeight: "100" }}>
          Sales Turnover
        </p>
        <img
          src={IconMore}
          width={10}
          alt="more"
          style={{ cursor: "pointer" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <div style={{ marginRight: "1.2rem" }}>
          <p
            style={{
              fontSize: "2.1rem",
              marginBottom: ".7rem",
              color: "#4b4d5a",
              fontWeight: "bolder"
            }}
          >
            Rp 3,600,000
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={ArrowDown} height={12} alt="arrow-down" />
            <p style={{ fontSize: 11 }}>
              <span
                style={{
                  color: "red",
                  fontWeight: "bolder",
                  marginRight: "2px"
                }}
              >
                13.8%
              </span>
              last period in products sold
            </p>
          </div>
        </div>
        <img src={SalesTurnOverIcon} alt="more" width={49} height={43} />
      </div>
    </div>
  );
};

export default SalesTurnOver;
