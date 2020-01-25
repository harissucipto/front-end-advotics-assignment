import React, { forwardRef } from "react";

import "./topBar.css";
import AdvoticsLogo from "../images/advotics-logo.png";
import Profile from "../images/Profile.svg";
import Logout from "../images/logout.png";

const TopBar = forwardRef((props, ref) => {
  return (
    <div className="top-bar" ref={ref}>
      <div className="content-left-top-bar content-top-bar">
        <img
          src={AdvoticsLogo}
          width={129}
          alt="advotics logo"
          className="logo-big"
        />
        <div className="support">
          <p style={{ marginRight: "4px" }}>powered by</p>
          <img
            src={AdvoticsLogo}
            width={72}
            alt="advotics logo"
            className="logo-big"
          />
        </div>
      </div>
      <div className="content-right-top-bar content-top-bar">
        <div className="user-account-text">
          <p className="p1-tb">Username</p>
          <p className="p2-tb">Company Name</p>
        </div>
        <img src={Profile} width={32} alt="profil" className="profil" />
        <img src={Logout} width={15} alt="logout" className="logout" />
      </div>
    </div>
  );
});

export default TopBar;
