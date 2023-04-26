import React from "react";
import InnerNav from "../components/InnerNav";
import { Outlet } from "react-router-dom";
const TechnologyPage = ({ data }) => {
  return (
    <>
      <InnerNav data={data} />
      <Outlet />
    </>
  );
};

export default TechnologyPage;
