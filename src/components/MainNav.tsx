import React, { FC } from "react";
import { NavLink } from "react-router-dom";

interface MainNavData {
  data: { destinations: {}; crew: {}; technology: {} };
}

const MainNav: FC<MainNavData> = ({ data }) => {
  const navItems: string[] = [];
  const navItemsGenerator = () => {
    for (const item in data) {
      navItems.push(item);
    }
  };
  navItemsGenerator();
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {navItems.map((item, idx) => {
        return (
          <NavLink key={`/${idx}`} to={item}>
            {item}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default MainNav;
