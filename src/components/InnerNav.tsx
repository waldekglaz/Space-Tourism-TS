import React from "react";
import { NavLink } from "react-router-dom";

const InnerNav = ({ data, className }) => {
  return (
    <nav className={`inner__nav ${className}`}>
      <ul>
        {data.map((el, index) => {
          return (
            <NavLink key={el.name} to={el.name}>
              <span className="inner__name">{el.name}</span>
              <span className="inner__index">{index + 1}</span>
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default InnerNav;
