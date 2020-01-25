import React from "react";
import useDimensions from "react-use-dimensions";

import "./layout.css";
import TopBar from "./TopBar";
import MenuBarLarge from "./MenuBarLarge";

const Layout = ({ children }) => {
  const [topBarRef, { height }] = useDimensions();

  return (
    <div className="layout">
      <TopBar ref={topBarRef} />
      <div className="layout-content">
        <div style={{ marginTop: `${height - 2 || 0}px`, display: "flex" }}>
          <MenuBarLarge />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
