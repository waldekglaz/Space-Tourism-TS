import React from "react";
import { useParams } from "react-router-dom";
import InnerNav from "./InnerNav";

const Destination = ({ data }) => {
  const { destination } = useParams();
  const destinationData = data.find((el) => el.name === destination);
  return (
    <>
      <h1>{destinationData.name}</h1>
    </>
  );
};

export default Destination;
