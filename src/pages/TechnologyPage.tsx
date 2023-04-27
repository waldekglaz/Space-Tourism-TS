import React, { FC } from "react";
import InnerNav from "../components/InnerNav";
import { Outlet, useParams } from "react-router-dom";

interface TechnologyData {
  description: string;
  distance: string;
  images: { png: string; webp: string };
  name: string;
  travel: string;
}
interface Props {
  data: TechnologyData[];
}
const TechnologyPage: FC<Props> = ({ data }) => {
  const { id } = useParams();

  const technologyData = data.find((el) => el.name === id);
  console.log(technologyData, "from page");
  return (
    <main className="page technology-page">
      <div>
        <div className="page__info">
          <span>03</span>SPACE LAUNCH 101
        </div>
        <InnerNav data={data} className="technology-nav" />
        <Outlet context={[technologyData, data]} />
      </div>
    </main>
  );
};

export default TechnologyPage;
