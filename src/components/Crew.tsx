import React from "react";
import { useOutletContext } from "react-router-dom";

const Crew = () => {
  const [crewData] = useOutletContext();
  const imagePath = `/assets/crew/${crewData.images.png.split("/").at(-1)}`;
  return (
    <div className="crew-wrapper">
      <img src={imagePath} alt={crewData.name} className="crew__img" id={crewData.role.toLowerCase().replace(" ", "-")} />
      <hr className="divider" />
      <div className="crew__text-wrapper">
        <h2 className="subtitle">{crewData.role}</h2>
        <h1 className="page__title page__title--small">{crewData.name}</h1>
        <p className="page__text">{crewData.bio}</p>
      </div>
    </div>
  );
};

export default Crew;
