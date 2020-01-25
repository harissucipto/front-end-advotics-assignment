import React from "react";

import "./menuBarLarge.css";
import ProgressIcon from "../images/progress-icon.png";
import DashboardIcon from "../images/Dashboard icon.svg";

const ButtonMenu = ({ icon, isSelected }) => {
  return (
    <div className={`button-area ${isSelected && "button-area--selected"}`}>
      <button className="button-menu">
        <img src={icon} width={17} alt="hummberger" />
      </button>
    </div>
  );
};

const MenuBarLarge = () => {
  return (
    <div className="menu-bar-large">
      <img src={ProgressIcon} width={24} alt="hummberger" />
      <ButtonMenu icon={DashboardIcon} isSelected />
    </div>
  );
};

export default MenuBarLarge;
