import React from "react";
import { useParams } from "react-router-dom";

const Destination = ({ destinationData }) => {
  const { destination } = useParams();
  const desData = destinationData.find((el) => el.name === destination);

  return <></>;
};

export default Destination;
