import React from "react";
import { useParams } from "react-router-dom";

const CrewMember = ({ crewData }) => {
  const { crewMember } = useParams();
  return <div>crew member</div>;
};

export default CrewMember;
