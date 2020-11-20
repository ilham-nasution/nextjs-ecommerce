import React from "react";
import { BurgerMenu } from "./BurgerMenuStyle";

const index = ({ sideMenu, setSideMenu }) => {
  return (
    <BurgerMenu onClick={() => setSideMenu(!sideMenu)}>
      <div></div>
      <div></div>
      <div></div>
    </BurgerMenu>
  );
};

export default index;
