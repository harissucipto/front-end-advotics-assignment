import React from "react";

import ButtonMore from "./ButtonMore";
import ListITem from "./ListITem";

const TopCompetitorSKU = () => {
  return (
    <div className="container-2">
      <div className="container-2-center-header">
        <p className="container-2-header-title">TOP COMPETITOR SKU</p>
        <ButtonMore />
      </div>
      <ListITem />
    </div>
  );
};

export default TopCompetitorSKU;
