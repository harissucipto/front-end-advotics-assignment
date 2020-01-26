import React from "react";

import ButtonMore from "./ButtonMore";
import ListITem from "./ListITem";

const BestSellingSKU = () => {
  return (
    <div className="container-2" style={{ marginRight: "1.6rem" }}>
      <div className="container-2-center-header">
        <p className="container-2-header-title">BEST SELLING SKU</p>
        <ButtonMore />
      </div>
      <ListITem />
    </div>
  );
};

export default BestSellingSKU;
