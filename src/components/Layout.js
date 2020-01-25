import React from "react";

import "./layout.css";
import TopBar from "./TopBar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <TopBar />
      {children}
    </div>
  );
};

export default Layout;
