import React from "react";
import InnerNav from "./InnerNav";
import { Outlet } from "react-router-dom";

const Destinations = ({ data }) => {
  console.log(data);
  return (
    <>
      <InnerNav data={data} />
      <Outlet />
    </>
  );
};

export default Destinations;
