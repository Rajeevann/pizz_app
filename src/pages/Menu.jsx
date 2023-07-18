import React from "react";
import { MenuList } from "../helpers/MenuList";

const Menu = () => {
  return (
    <div>
      <div className="menu">
        <h1 className="menuTitle">Our Menu</h1>
        <div className="menuList">
          {MenuList.map((menuItem, key) => {
            return <div>{menuItem.name}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
