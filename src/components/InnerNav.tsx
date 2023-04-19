import React from "react";
import { NavLink } from "react-router-dom";

const InnerNav = ({ data }) => {
  return (
    <nav>
      <ul>
        {data.map((el) => {
          return <NavLink to={el.name}>{el.name}</NavLink>;
        })}
      </ul>
    </nav>
  );
};

export default InnerNav;
