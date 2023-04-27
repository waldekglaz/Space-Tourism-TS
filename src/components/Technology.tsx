import React from "react";
import InnerNav from "./InnerNav";
import { useOutletContext } from "react-router-dom";

const Technology = () => {
  const [technologyData] = useOutletContext();
  const imageLandscapePath = `/assets/technology/${technologyData.images.landscape.split("/").at(-1)}`;
  const imagePortraitPath = `/assets/technology/${technologyData.images.portrait.split("/").at(-1)}`;
  console.log(technologyData);
  console.log(imageLandscapePath);
  return (
    <div className="technology-wrapper">
      <picture>
        <source srcSet={imagePortraitPath} media="(min-width:1440px)" />
        <img className="technology__img" src={imageLandscapePath} alt={technologyData.name} />
      </picture>
      <div className="technology__text-wrapper">
        <h2 className="subtitle">THE TERMINOLOGY…</h2>
        <h1 className="page__title page__title--small">{technologyData.name}</h1>
        <div className="page__text">{technologyData.description}</div>
      </div>
    </div>
  );
};

export default Technology;
