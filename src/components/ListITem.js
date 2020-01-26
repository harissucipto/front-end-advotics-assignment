import React from "react";
import Item from "./Item";
import ItemTop1 from "./ItemTop1";

const ListITem = () => {
  const iniList = [1, 2, 3, 4, 5];
  return iniList.map((data, index) => (index === 0 ? <ItemTop1 /> : <Item />));
};

export default ListITem;
