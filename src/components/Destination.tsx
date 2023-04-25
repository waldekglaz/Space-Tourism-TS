import React from "react";
import InnerNav from "./InnerNav";
import { useOutletContext } from "react-router-dom";

const Destination = () => {
  const [data] = useOutletContext();
  const imagePath = `/assets/destination/${data.images.png.split("/").at(-1)}`;

  return (
    <>
      <div >
        <img src={imagePath} alt={data.name} className="destination__img" />
        <h1 className="page__title">{data.name}</h1>
        <p className="page__text">{data.description}</p>
        <hr className="divider" />
        <div className="stats-wrapper">
          <div className="stats">
            <div className="stats__name">AVG. DISTANCE</div>
            <div className="stats__data">{data.distance}</div>
          </div>
          <div className="stats">
            <div className="stats__name">Est. travel time</div>
            <div className="stats__data">{data.travel}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
