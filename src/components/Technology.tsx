import React from "react";
import InnerNav from "./InnerNav";
import { Outlet } from "react-router-dom";
const Technology = ({ data }) => {
  return (
    <>
      <InnerNav data={data} />
      <Outlet />
    </>
  );
};

export default Technology;
