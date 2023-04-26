import React, { FC } from "react";
import InnerNav from "../components/InnerNav";
import { Outlet, useParams } from "react-router-dom";

interface CrewData {
  description: string;
  distance: string;
  images: { png: string; webp: string };
  name: string;
  travel: string;
}
interface Props {
  data: CrewData[];
}

const CrewPage: FC<Props> = ({ data }) => {
  const { crewMember } = useParams();

  const crewData = data.find((el) => el.name === crewMember);

  return (
    <main>
      <div className="page crew-page">
        <div className="page__info">
          <span>02</span>Meet your crew
        </div>

        <Outlet context={[crewData]} />

        <InnerNav data={data} className="crew-nav" />
      </div>
    </main>
  );
};

export default CrewPage;
