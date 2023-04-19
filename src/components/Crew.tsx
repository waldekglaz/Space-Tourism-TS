import React from "react";
import InnerNav from "./InnerNav";
import { Outlet } from "react-router-dom";

const Crew = ({ data }) => {
  return (
    <>
      <InnerNav data={data} />
      <Outlet />
    </>
  );
};

export default Crew;
