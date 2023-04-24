import React from "react";
import { NavLink } from "react-router-dom";

const InnerNav = ({ data, className }) => {
  return (
    <nav className={`inner__nav ${className}`}>
      <ul>
        {data.map((el) => {
          return (
            <NavLink key={el.name} to={el.name}>
              {el.name}
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default InnerNav;
