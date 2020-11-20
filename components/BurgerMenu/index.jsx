import React from "react";
import { BurgerMenu } from "./BurgerMenuStyle";

const index = ({ setSideMenu }) => {
  return (
    <BurgerMenu onClick={() => setSideMenu(true)}>
      <div></div>
      <div></div>
      <div></div>
    </BurgerMenu>
  );
};

export default index;
